// Rewrites the "~/recent" block of README.md with the latest commits
// made by USER across their public repos (plus EXTRA_REPOS, e.g. team/org repos).
// Usage: node update-recent.mjs [path/to/README.md]   (GITHUB_TOKEN optional, raises rate limit)
import { readFileSync, writeFileSync } from 'node:fs'

const USER = '1240826'
const EXTRA_REPOS = ['BlessedTeam1/The_Best_Game']   // repos outside the user account
const SKIP_REPOS = [USER]                              // the profile repo itself is noise
const MAX_LINES = 6
const PER_REPO = 8

const README = process.argv[2] || 'README.md'
const START = '<!-- RECENT:START -->'
const END = '<!-- RECENT:END -->'

const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'profile-readme-updater',
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
}

async function gh(path) {
    const res = await fetch(`https://api.github.com${path}`, { headers })
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${path}`)
    return res.json()
}

async function main() {
    const own = await gh(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`)
    const repos = [
        ...own.filter(r => !r.fork && !r.private && !SKIP_REPOS.includes(r.name)).map(r => r.full_name),
        ...EXTRA_REPOS,
    ]

    const commits = []
    for (const full of repos) {
        try {
            const list = await gh(`/repos/${full}/commits?per_page=${PER_REPO}&author=${USER}`)
            for (const c of list) {
                const msg = c.commit.message.split('\n')[0].trim()
                if (/^merge /i.test(msg)) continue
                commits.push({
                    sha: c.sha.slice(0, 7),
                    repo: full.split('/')[1],
                    msg,
                    date: c.commit.author.date.slice(0, 10),
                    ts: Date.parse(c.commit.author.date),
                })
            }
        } catch (e) {
            console.warn(`skip ${full}: ${e.message}`)
        }
    }

    commits.sort((a, b) => b.ts - a.ts)
    const top = commits.slice(0, MAX_LINES)
    if (top.length === 0) throw new Error('no commits found, refusing to overwrite README')

    const repoW = Math.min(22, Math.max(...top.map(c => c.repo.length)))
    const clip = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s)
    const lines = top.map(c =>
        `${c.sha}  ${c.date}  ${clip(c.repo, repoW).padEnd(repoW)}  ${clip(c.msg.replace(/`/g, "'"), 52)}`)

    const block = [
        START,
        '```console',
        '$ git log --oneline --all --author=fabio -n ' + MAX_LINES,
        ...lines,
        '```',
        END,
    ].join('\n')

    const src = readFileSync(README, 'utf8')
    const a = src.indexOf(START)
    const b = src.indexOf(END)
    if (a === -1 || b === -1 || b < a) throw new Error('markers not found in README')
    const next = src.slice(0, a) + block + src.slice(b + END.length)
    if (next !== src) {
        writeFileSync(README, next)
        console.log('README updated')
    } else {
        console.log('no changes')
    }
}

main().catch(e => { console.error(e); process.exit(1) })
