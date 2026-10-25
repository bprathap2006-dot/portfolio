# PRATHAP // NEXUS — Personal Developer Portfolio

> “I build software at the intersection of logic, intelligence, and security.”

Official personal portfolio for **PRATHAP B** — Aspiring Software Developer & Information Technology undergraduate (B.Tech IT, 2023–2027) at A.K.T Memorial College of Engineering and Technology.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, engineered for ultra-fast static deployment to **Cloudflare Pages**.

---

## 🚀 Live Demo & Profiles

- **GitHub Profile**: [https://github.com/bprathap2006-dot](https://github.com/bprathap2006-dot)
- **LinkedIn Profile**: [https://www.linkedin.com/in/prathap-b-0b226639b](https://www.linkedin.com/in/prathap-b-0b226639b)
- **Email**: [bprathap2006@gmail.com](mailto:bprathap2006@gmail.com)
- **Cloudflare Pages URL**: Deployable to `https://prathap-b-portfolio.pages.dev` (or custom domain)

---

## ✨ Features & Architecture

- **Nexus Boot Sequence**: Brief, elegant system initialization animation (`INITIALIZING PRATHAP.NEXUS`, `LOADING PROJECT MODULES`, `CONNECTING TO THE DEVELOPER PROFILE`), skippable via `[ESC]`, respects `prefers-reduced-motion`, and persists state in `sessionStorage`.
- **Persistent Subtle Visual System**: Ambient HTML5 Canvas constellation featuring dynamic telemetry nodes, orbital curves, particle drifts, and throttled cursor parallax.
- **Custom System Control Bar Navigation**: Fixed floating dock with active-section indicator gliding between sections, smooth scrolling, mobile responsive telemetry drawer, social shortcuts, and keyboard accessibility.
- **Distinctive Functional Action Buttons**:
  - Primary Action (*Explore Projects*): Moving data capsule with a traveling light beam.
  - Resume Action (*Download Resume*): Document module with scanning-line animation, direct download of `/Prathap-B-Resume.pdf`, and genuine download feedback.
  - GitHub Action (*Explore GitHub*): Terminal console button with blinking prompt cursor.
  - LinkedIn Action (*Connect on LinkedIn*): Connected network nodes animation.
  - Contact Action (*Initiate Contact*): Animated signal pulse along a transmission line.
- **The Toolchain (Interactive Constellation)**: Interactive inspection HUD for 17 verified technologies across Programming, Core CS, Development Tools, AI/ML, and Cybersecurity with zero fabricated percentage ratings.
- **The Lab (Flagship Research Projects)**:
  - **DeepShield**: AI-based fake voice detection system using Librosa spectral feature extraction, MFCCs, and deep neural classification, complete with an animated audio waveform simulator and conceptual pipeline diagram.
  - **RL Zero-Day Mitigation Framework**: Autonomous cybersecurity framework for resource-constrained academic networks with custom interactive SVG network topology and mitigation cycle.
- **Industrial Experience Module**: Honest presentation of industrial manufacturing internship training at **Hanon System Pvt. Ltd., Chennai** (July 2025).
- **Academic Foundations & Milestones**: B.Tech Information Technology (CGPA 7.90, Expected 2027), HSC (72.33%), and SSLC.
- **Research Publication**: 4th International Conference publication at Surya Group of Institutions (2026).
- **Transmission Terminal (Contact Section)**: Full client-side validation, Edge function support (`/api/contact`), and automatic fallback to formatted email clients.
- **Dual Theme Support**: Obsidian/Midnight Dark mode and clean Engineering Blueprint Light mode with instant toggle and `localStorage` persistence.

---

## 📁 Project Structure

```
portfolio/
├── dist/                          # Production build output (deployable to Cloudflare Pages)
│   ├── assets/                    # Compiled JS & CSS bundles
│   ├── favicon.svg                # Monogram SVG favicon
│   ├── index.html                 # Optimized HTML entry point
│   ├── Prathap-B-Resume.pdf       # Verified downloadable resume
│   └── _redirects                 # SPA client-side routing fallback
├── public/
│   ├── favicon.svg
│   ├── Prathap-B-Resume.pdf       # Source resume file served at root
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   └── NexusBootSequence.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── NexusCanvas.tsx
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ResearchSection.tsx
│   │   └── ui/
│   │       ├── BrandIcons.tsx
│   │       ├── CapsuleButton.tsx
│   │       ├── DocumentButton.tsx
│   │       ├── NetworkButton.tsx
│   │       ├── SignalButton.tsx
│   │       ├── TerminalButton.tsx
│   │       └── ThemeToggle.tsx
│   ├── data/
│   │   ├── certificationsData.ts
│   │   ├── educationData.ts
│   │   ├── experienceData.ts
│   │   ├── profileData.ts
│   │   ├── projectsData.ts        # Central configuration for projects & verified repo URLs
│   │   └── skillsData.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── functions/                     # Optional Cloudflare Pages Functions
│   └── api/
│       ├── contact.js             # POST /api/contact handler
│       └── views.js               # GET /api/views handler
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── wrangler.toml                  # Cloudflare Pages configuration
```

---

## 🛠️ Local Development Setup

### Prerequisites
- **Node.js** (v18 or higher recommended; developed on Node v24.11)
- **npm** or **pnpm**

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your web browser.

### Step 3: Run Production Build
```bash
npm run build
```
The production bundle will be generated in `dist/`.

### Step 4: Preview Production Build Locally
```bash
npm run preview
```

---

## 📄 Resume PDF Configuration

- The resume PDF is located at: `public/Prathap-B-Resume.pdf`.
- During `npm run build`, Vite copies `public/Prathap-B-Resume.pdf` into `dist/Prathap-B-Resume.pdf`.
- When updating your CV, simply replace `public/Prathap-B-Resume.pdf` with your updated document and rerun `npm run build`.

---

## 🔗 Project Repositories Configuration

Per ground-truth guidelines, projects without an active verified GitHub URL omit the "View Repository" button automatically.

To add or update repository links as your projects go public:
1. Open `src/data/projectsData.ts`.
2. Locate the project (e.g., `deepshield` or `zero-day-mitigation`).
3. Replace `repoUrl: null` with your verified repository URL:
   ```typescript
   repoUrl: "https://github.com/bprathap2006-dot/deepshield"
   ```
4. Rebuild (`npm run build`) and commit. The repository button will appear automatically on the project card.

---

## ☁️ Cloudflare Pages Deployment Guide

### Method A: Git Integration (Recommended)

1. Push your repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Deploy PRATHAP // NEXUS portfolio"
   git push -u origin main
   ```
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Navigate to **Compute (Workers) > Workers & Pages** in the sidebar.
4. Click **Create Application** > **Pages** tab > **Connect to Git**.
5. Select your repository: `bprathap2006-dot/portfolio` (or `prathap-portfolio`).
6. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank or default)
7. Click **Save and Deploy**. Cloudflare will pull, build, and deploy your site to `*.pages.dev`.

### Method B: Direct Upload via Wrangler CLI

If deploying directly without Git integration:
```bash
npx wrangler pages deploy dist --project-name=prathap-nexus-portfolio
```

---

## 🔒 Verification & Quality Assurance

- ✅ Strictly zero fabricated work experience, fake credentials, or false percentage ratings.
- ✅ Truthful presentation of Hanon System Pvt. Ltd. industrial manufacturing internship.
- ✅ Full keyboard focus rings (`focus-visible`) and screen-reader accessible names.
- ✅ Reduced-motion accessibility (`prefers-reduced-motion`) pauses Canvas and animations.
- ✅ Client-side validation prevents empty form submissions and routes via pre-addressed email drafts if edge functions are offline.
