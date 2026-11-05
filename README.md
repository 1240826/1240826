<div align="center">

<img src="https://raw.githubusercontent.com/1240826/1240826/main/terminal.svg?v=1" alt="Terminal: whoami. Fábio Costa, informatics engineering at ISEP, Porto. Interests: backend, systems, security, AI, football." width="860">

<br>

[**portfolio**](https://portfolio-fabio-costa.netlify.app) &nbsp;·&nbsp; [**linkedin**](https://www.linkedin.com/in/f%C3%A1bio-rafael-costa-a791812b1/) &nbsp;·&nbsp; [**email**](mailto:fabiorcosta12@gmail.com)

</div>

<br>

I'm an Informatics Engineering student at ISEP, in Porto. I like knowing what happens under the hood, so I keep ending up in places like a C process talking over TCP, a RISC-V register, or a Lambda deciding if a link is safe. I'm curious about backend, security and AI, and I learn best by building the thing.

## `~/now`

```console
$ cat now.txt
building    LaPrizza, a pizza shop backend (products, stock, users, end-to-end tests)
tinkering   this profile and a new portfolio, in terminal style
following   backend, security and AI, in no particular order
```

## `~/projects`

| | Project | What it is | Built with |
|---|---|---|---|
| ✈️ | **[AISafe](https://github.com/1240826/aisafe-flight-control)** | Air traffic control back office with a custom flight-plan DSL and a C simulation engine. Team of 5, Scrum, CI/CD. | Java · JavaFX · ANTLR4 · C · TCP/UDP |
| 🛡️ | **[ProofPocket](https://github.com/1240826/proofpocket)** | Checks links, emails and messages for phishing before you open them. 46h hackathon. | TypeScript · React Native · AWS · Bedrock |
| 🚂 | **[Logistics on Rails](https://github.com/1240826/logistics-railway)** | Warehouse, freight and station management for railways, from SQL down to Assembly. | Java · PL/SQL · Oracle · C · RISC-V |
| 🎮 | **[Empire on Tracks](https://github.com/1240826/empire-on-tracks)** | Railway simulation game with a map editor. | Java · JavaFX · Python |
| 🧑 | **[Eigenfaces](https://github.com/1240826/eigenfaces-recognition)** | Face reconstruction and identification with PCA, no ML libraries. | Java · linear algebra |
| 🐉 | **[Dracomania](https://github.com/BlessedTeam1/The_Best_Game)** | 2D game made in an international Erasmus+ team. | Unity · C# |

<details>
<summary><code>man aisafe</code> &nbsp;·&nbsp; how it works</summary>

<br>

- **Backend (Java 21):** layered domain-driven design, JPA persistence, role-based access control and 20+ JavaFX screens for aircraft, flights, airports, weather and staff.
- **DSL (ANTLR4):** a language for describing flight plans, parsed and validated.
- **Simulation (C):** multi-process engine with collision detection, with POSIX shared memory and semaphores.
- **Remote access:** TCP/UDP between components.
- **Delivery:** GitHub Actions CI/CD, cross-platform Bash and batch scripts, 5-person Scrum team.

```mermaid
flowchart LR
    GUI["JavaFX back office<br/>20+ screens"] --> APP["Java 21 backend<br/>DDD · roles"]
    APP --> DB[("PostgreSQL<br/>JPA / Hibernate")]
    APP --> DSL["ANTLR4 DSL<br/>flight plans"]
    APP <-->|"TCP / UDP"| SIM["C simulation engine<br/>collision detection"]
    CI["GitHub Actions<br/>build + tests"] -.-> APP
```

</details>

<details>
<summary><code>man proofpocket</code> &nbsp;·&nbsp; how it works</summary>

<br>

1. You submit a link, email or message from the **Chrome extension** or the **Android app** (these two were my part).
2. API Gateway authenticates with Cognito, then an orchestrator Lambda creates a job in DynamoDB and queues it in SQS.
3. A worker checks a 7-day cache; on a miss, a validator Lambda asks Amazon Bedrock for a risk score, a decision (`allow` / `review` / `block`) and the reasons.
4. The extension blocks the link before it opens and shows why.

```mermaid
flowchart LR
    C["Chrome extension<br/>Android app"] --> G["API Gateway<br/>Cognito JWT"]
    G --> O["Orchestrator<br/>Lambda"]
    O --> J[("DynamoDB<br/>jobs")]
    O --> Q["SQS queue"]
    Q --> W["Worker<br/>Lambda"]
    W <--> K[("URL cache<br/>7-day TTL")]
    W --> V["Validator<br/>Lambda"]
    V --> B["Amazon Bedrock<br/>risk score + reasons"]
```

</details>

<details>
<summary><code>man logistics-railway</code> &nbsp;·&nbsp; how it works</summary>

<br>

- **Warehouse (Java):** FEFO/FIFO order allocation and shortest picking paths.
- **Database (PL/SQL, Oracle):** schema, stored procedures and triggers for freight scheduling.
- **Network (C):** 2D-trees, Haversine distance, hub centrality and max flow on a railway graph.
- **Low level (RISC-V Assembly):** circular buffer, moving median filter and Caesar cipher, wired to Arduino sensors.

```mermaid
flowchart TB
    subgraph JAVA["Java"]
        WH["Warehouse<br/>FEFO / FIFO, picking paths"]
    end
    subgraph SQL["Oracle + PL/SQL"]
        DBL[("Schema, procedures,<br/>triggers")]
    end
    subgraph SYS["C + RISC-V Assembly"]
        ST["Station management<br/>buffers, filters, cipher"]
        NET["Network analysis<br/>2D-trees, hubs, max flow"]
    end
    HW["Arduino sensors<br/>temperature, humidity"]
    WH --> DBL
    ST <--> HW
```

</details>

## `~/stack`

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Assembly](https://img.shields.io/badge/Assembly-654FF0?style=for-the-badge&logo=assemblyscript&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaFX](https://img.shields.io/badge/JavaFX-EA2D2E?style=for-the-badge&logo=java&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)
![PL/SQL](https://img.shields.io/badge/PL%2FSQL-F80000?style=for-the-badge&logo=oracle&logoColor=white)
![ANTLR4](https://img.shields.io/badge/ANTLR4-2C3E50?style=for-the-badge)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)

## `~/recent`

<!-- RECENT:START -->
```console
$ git log --oneline --all --author=fabio -n 6
41b698a  2026-07-11  empire-on-tracks       Fix formatting in README.md for MVC section
bfc83cf  2026-07-11  logistics-railway      Fix formatting in README architecture section
13f253b  2026-07-11  aisafe-flight-control  Update readme.md
4accc0d  2026-07-11  aisafe-flight-control  Fix table alignment in readme.md
9afad37  2026-07-11  aisafe-flight-control  Update architecture diagram in README
511baaf  2026-07-11  aisafe-flight-control  Update architecture diagram in README
```
<!-- RECENT:END -->

## `~/activity`

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/1240826/1240826/output/snake-dark.svg">
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/1240826/1240826/output/snake.svg">
</picture>

## `~/contact`

```console
$ mail fabio
portfolio  https://portfolio-fabio-costa.netlify.app
linkedin   https://www.linkedin.com/in/f%C3%A1bio-rafael-costa-a791812b1/
email      fabiorcosta12@gmail.com
```

<div align="center">

<img src="https://raw.githubusercontent.com/1240826/1240826/main/tmux-bar.svg?v=1" alt="Status bar: Porto, ISEP, 2026" width="860">

</div>
