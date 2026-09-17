# Prathap B — Technical RPG Console Portfolio

A gamified cyberpunk-themed personal portfolio for **Prathap B**, an AI Security Engineer & Reinforcement Learning Architect. Built as a pure static site (Vanilla HTML + CSS + JavaScript) with **Cloudflare Pages Functions** for serverless edge features.

## Live Site
🌐 [https://prathap-b-portfolio.pages.dev](https://prathap-b-portfolio.pages.dev)

## GitHub Repository
📁 [https://github.com/bprathap2006-dot/portfolio](https://github.com/bprathap2006-dot/portfolio)

---

## Project Type
**Pure Static Site — No build step required.**
- Vanilla HTML5 / CSS3 / JavaScript (ES Modules)
- Tailwind CSS via CDN
- Lucide Icons via CDN
- Cloudflare Pages Functions (serverless edge, `/api/contact` & `/api/views`)

---

## Project Structure

```
portfolio/
├── index.html                   # Single-page entry point
├── wrangler.toml                # Cloudflare Pages config
├── .gitignore
├── .gitattributes
├── README.md
├── css/
│   └── styles.css               # Custom CSS (supplements Tailwind CDN)
├── js/
│   ├── app.js                   # Legacy frontend JS (original version)
│   └── profile-data.js          # Legacy profile data
├── src/
│   ├── app.js                   # Main ES module (loaded by index.html)
│   └── data/
│       ├── profileData.js       # Personal info, bio, socials
│       ├── projectsData.js      # Project quest log data
│       ├── skillsData.js        # Skills & arsenal data
│       ├── experienceData.js    # Work/education timeline
│       └── achievementsData.js  # Achievements & certifications
├── functions/
│   └── api/
│       ├── contact.js           # POST /api/contact — contact form edge function
│       └── views.js             # GET /api/views — visitor counter edge function
└── assets/
    ├── resume.pdf               # Downloadable resume
    └── images/
        ├── avatar.svg
        ├── project-1.svg
        ├── project-2.svg
        ├── project-3.svg
        └── project-4.svg
```

---

## How to Run Locally

No build step, no npm install needed.

### Option 1 — Simple (any static server)
```bash
# Python
python -m http.server 8080

# Node.js (if installed)
npx serve .
```
Then open `http://localhost:8080` in your browser.

### Option 2 — With Cloudflare Wrangler (to test edge functions locally)
```bash
npm install -g wrangler
wrangler pages dev . --port 8080
```

---

## How to Build

**No build step required.** The project is already production-ready as-is.

---

## Cloudflare Pages Deployment Settings

| Setting | Value |
|---|---|
| **Framework preset** | `None` |
| **Build command** | *(leave empty)* |
| **Build output directory** | `.` |
| **Root directory** | *(leave empty)* |
| **Compatibility date** | `2024-09-01` (auto-read from `wrangler.toml`) |

---

## How to Push to GitHub

```bash
cd portfolio

# If first time:
git init --initial-branch=main
git remote add origin https://github.com/bprathap2006-dot/portfolio.git
git add .
git commit -m "Initial commit: portfolio ready for Cloudflare Pages"
git push -u origin main

# For subsequent updates:
git add .
git commit -m "Update portfolio"
git push
```

---

## Features

- 🎮 Gamified RPG console UI with cyberpunk dark theme
- 🔊 Web Audio API 8-bit retro sound synthesizer
- 🖥️ Keyboard hotkey navigation (keys 1–0)
- 🌗 Dark/Light theme toggle with localStorage persistence
- 📺 CRT scanline toggle effect
- ⌨️ Typewriter role animation
- 🤖 Boss Quest: Interactive RL Zero-Day Mitigation Simulator
- 📬 Contact form with Cloudflare Edge Function + mailto fallback
- 📊 Real-time visitor counter via Cloudflare Edge
- 📱 Fully responsive (desktop, tablet, mobile)

---

## Notes

- No API keys or secrets are required for basic deployment
- The Cloudflare KV binding (`PORTFOLIO_KV`) in `wrangler.toml` is commented out — the functions work without it using graceful fallbacks
- Fonts (Inter, JetBrains Mono) and icons (Lucide) are loaded from CDN — internet connection required
