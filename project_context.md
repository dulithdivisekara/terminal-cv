# project_context.md — Terminal CV Blueprint

> **Purpose:** Complete reference document for an external AI assistant.  
> **Generated:** 2026-09-30 | **Project version:** v2.0.0  
> **Live URL:** `whoami.dulithdivisekara.workers.dev`

---

## 1. Project Overview

**Terminal CV** is a serverless, CLI-first résumé deployed on Cloudflare's global edge network. Its core design philosophy is **client environment detection**: the single worker script inspects the incoming HTTP `User-Agent` header and responds differently depending on who is asking.

| Client Type | Behaviour |
|---|---|
| `curl`, `wget`, PowerShell | Returns a rich, ANSI-coloured ASCII résumé directly in the terminal |
| Standard web browser | Issues a `301` redirect to the graphical portfolio at `dulithdivisekara.pages.dev` |
| `/json` endpoint | Returns structured CV data as pretty-printed JSON |
| `/secret` endpoint | Returns an Easter-egg "hidden protocol" message |

**Design philosophy pillars:**
- **Zero dependencies in production** — relies only on the V8 engine and the standard Fetch API.
- **Edge-first** — executes globally at the Cloudflare PoP nearest to the user for ultra-low latency.
- **Dual-surface** — one URL serves both terminal-native and browser-native users seamlessly.
- **Engineer-friendly metadata** — custom HTTP response headers expose author, tech stack, and status for anyone inspecting network traffic.

---

## 2. Tech Stack & Architecture

### Runtime & Platform
| Layer | Technology |
|---|---|
| **Serverless Runtime** | Cloudflare Workers (V8 isolate, not Node.js) |
| **Deployment CLI** | Wrangler (`npx wrangler dev` / `npx wrangler deploy`) |
| **CI/CD** | Cloudflare-linked GitHub repository (auto-deploys on push to `main`) |
| **Language** | Vanilla JavaScript (ES Modules — `export default { fetch() {} }`) |

### Key Structural Patterns
- **Module Worker syntax** (`export default { async fetch(request) {} }`) — the modern Cloudflare Workers pattern, not the legacy `addEventListener` style.
- **URL routing by pathname** — `pathname === '/json'` and `pathname === '/secret'` are handled before the User-Agent check.
- **User-Agent sniffing** — substring matching on the lowercased `User-Agent` header drives the terminal vs. browser split.
- **ANSI escape codes** — embedded directly as `\x1b[...]m` sequences within JavaScript template literals for terminal colouring and box-drawing characters.
- **No `package.json` / `node_modules`** — the project has no npm dependencies; Wrangler is invoked via `npx` without being installed locally.

### Custom HTTP Response Headers
Every response includes these headers:

```
Access-Control-Allow-Origin: *
X-Powered-By: Cloudflare Workers & Ubuntu
X-Author: Dulith Divisekara
X-Status: Ready to build awesome things!
```

---

## 3. File Tree

```
terminal-cv/
│
├── worker.js          ← CORE: The entire application. Single Cloudflare Worker script.
│                         Handles all routing, response rendering, and ANSI formatting.
│
├── wrangler.toml      ← Cloudflare Workers configuration.
│                         Declares worker name, entry point, and compatibility date.
│
├── README.md          ← Project documentation for GitHub.
│                         Contains live access commands, architecture overview, and
│                         local dev/deploy instructions.
│
├── LICENSE            ← MIT License.
│
├── .gitignore         ← Ignores: logs, node_modules/, .wrangler/, .idea/, .vscode/
│
└── assets/
    └── terminal_demo.gif  ← Animated GIF demo of the terminal output.
                              Embedded in README.md for GitHub preview.
```

> **Note:** There is no `package.json`, `package-lock.json`, or `node_modules/` directory.
> The project is truly dependency-free at the source level.

---

## 4. Data Architecture

### Storage Strategy: **Fully Hardcoded in `worker.js`**

There is **no external database, no JSON file, no YAML file, and no CMS**. All CV content exists
in two places inside `worker.js`:

#### Source A — Structured JSON Object (lines 15–29)
Used exclusively for the `/json` route. The data is a JavaScript object literal defined inline
within the `fetch` handler and serialized with `JSON.stringify` on each request.

```javascript
// Served at GET /json
const jsonData = {
  name: "Dulith Divisekara",
  title: "Information Technology Undergraduate",
  tagline: "I combine core computer science fundamentals with modern AI tools...",
  skills: {
    code: ["JavaScript", "Java", "Python", "R", "Bash", "HTML/CSS"],
    technology: ["Docker", "MSSQL", "Cloudflare Workers", "Spring Boot", "Ubuntu"],
    concepts: ["AI Model Training", "Serverless Edge", "Browser Extensions"]
  },
  projects: { ... },
  contact: {
    email: "dulithmdivisekara@gmail.com",
    github: "https://github.com/dulithdivisekara",
    linkedin: "https://linkedin.com/in/dulithdivisekara"
  }
};
```

#### Source B — ANSI Template Literal (lines 54–94)
Used for the primary terminal response. The entire résumé is a single multi-line JavaScript
template literal containing:
- A 5-line pixel-art ASCII name banner built with ANSI 256-colour background blocks (lines 55–59).
- Section boxes rendered with Unicode box-drawing characters (`╭`, `╰`, `─`).
- Inline ANSI colour escape sequences (`\x1b[1;36m`, `\x1b[1;33m`, etc.).
- The actual CV text woven directly into the coloured layout.

#### Source C — Secret Easter Egg (lines 36–46)
A separate ANSI-coloured template literal served only at `/secret`.

### Key Implication for Updates
**To update any CV content, you must edit `worker.js` directly.** There are two separate copies
of the skills and contact data (the JSON object and the ASCII template literal) that must be
kept in sync manually after any change.

---

## 5. Current CV Content

### Identity
| Field | Value |
|---|---|
| **Name** | Dulith Divisekara |
| **Title** | Information Technology Undergraduate |
| **Tagline** | "I combine core computer science fundamentals with modern AI tools to build and deploy software fast." |
| **Version** | v2.0.0 |

### Skills (Baseline — Pre-Update)

These are the **current active skills** as they appear in both the ASCII terminal response
and the `/json` endpoint.

#### Code Languages
```
JavaScript, Java, Python, R, Bash, HTML/CSS
```

#### Technologies / Frameworks / Tools
```
Docker, MSSQL, Cloudflare Workers, Spring Boot, Ubuntu
```

#### Concepts
```
AI Model Training, Serverless Edge, Browser Extensions
```

> **Sync Warning:** Both the terminal ASCII view (worker.js lines 68–70) and the JSON object
> (lines 20–22) list identical skills. Any skill update must be applied in **both locations**.

### Featured Projects

| Project | Description |
|---|---|
| **SLIIT Courseweb Cleaner** | A context-aware browser extension filtering irrelevant Moodle modules. |
| **SLIIT IT Vault (Y1S2)** | An open-source, highly structured learning base with AI study partners. |
| **Terminal CV (This Script)** | A CLI-first resume hosted on global edge networks. |

### Contact & Links
| Channel | Value |
|---|---|
| **Email** | dulithmdivisekara@gmail.com |
| **GitHub** | github.com/dulithdivisekara |
| **LinkedIn** | linkedin.com/in/dulithdivisekara |

### Hidden Content (`/secret` endpoint)
```
■ Networking Philosophy : "There is no place like 127.0.0.1"
■ Development Approach  : I treat AI-assisted development as a force multiplier, not a shortcut.
Call to action: "Let's build something scalable. Reach out on LinkedIn!"
```

---

## 6. Core Logic

### Execution Flow

The entire application is a single `fetch` event handler. There is no framework, no router
library, and no middleware chain.

```
Incoming HTTP Request
        │
        ▼
┌─────────────────────────────────────────┐
│  Parse URL → extract pathname           │
│  Parse User-Agent header (lowercased)   │
└─────────────────────────────────────────┘
        │
        ├── pathname === '/json'
        │       └──► Return JSON Response (200)
        │
        ├── pathname === '/secret'
        │       └──► Return ANSI secret message (200)
        │
        ├── userAgent includes 'curl' OR 'wget' OR 'powershell'
        │       └──► Return ANSI ASCII résumé (200, text/plain)
        │
        └── (anything else — browser, bot, unknown UA)
                └──► Response.redirect('https://dulithdivisekara.pages.dev', 301)
```

### Route Details

#### `GET /json`
- Returns `Content-Type: application/json`.
- Object serialized inline via `JSON.stringify(jsonData, null, 2)`.
- A trailing `\n` is appended for clean terminal display.

#### `GET /secret`
- Returns `Content-Type: text/plain`.
- Content is a hardcoded ANSI template literal with a box-drawing frame.

#### Terminal Clients (curl / wget / PowerShell)
- Detection: `userAgent.includes('curl') || userAgent.includes('wget') || userAgent.includes('powershell')`.
- Returns `Content-Type: text/plain; charset=utf-8`.
- Response body sections (in order):
  1. 5-line ASCII pixel-art banner of the author's name
  2. `ABOUT ME` section box
  3. `CORE SKILLS` section box
  4. `FEATURED PROJECTS` section box
  5. `CONTACT & LINKS` section box
  6. Footer tips for `/json` and `/secret` routes

#### Browser Clients (default fallback)
- Issues `Response.redirect('https://dulithdivisekara.pages.dev', 301)`.
- Permanent redirect; browsers will cache it.

### ANSI Rendering Notes
- All colours use embedded **ANSI escape sequences** — no rendering library.
- Box frames use **Unicode box-drawing characters**: `╭ ╰ ─ │`.
- The ASCII name banner uses ANSI background colour blocks to simulate pixel art.
- The reset code `\x1b[0m` is used after each styled segment to prevent colour bleed.

### Local Development Commands
```bash
# Start local dev server (emulates Cloudflare Workers runtime)
npx wrangler dev

# Test terminal response locally
curl localhost:8787

# Test JSON endpoint locally
curl localhost:8787/json

# Test secret endpoint locally
curl localhost:8787/secret

# Deploy to production edge network
npx wrangler deploy
```

### `wrangler.toml` Configuration
```toml
name = "whoami"
main = "worker.js"
compatibility_date = "2024-09-23"
```
- `name` = the Cloudflare Worker name (maps to subdomain `whoami.*.workers.dev`).
- `main` = entry point file.
- `compatibility_date` = pins the V8 runtime compatibility flags to a specific date.

---

*End of blueprint. Last analysed: 2026-09-30.*
