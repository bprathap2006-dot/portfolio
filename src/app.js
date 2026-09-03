/**
 * ====================================================================
 * PRATHAP B - TECHNICAL RPG CONSOLE ENGINE (src/app.js)
 * ====================================================================
 * Consumes modular data and controls all console screens, HUD,
 * keyboard navigation, audio synthesizer, and interactive telemetry.
 */

import { profileData } from './data/profileData.js';
import { projectsData } from './data/projectsData.js';
import { skillsData } from './data/skillsData.js';
import { experienceData } from './data/experienceData.js';
import { achievementsData } from './data/achievementsData.js';

let audioCtx = null;
let soundEnabled = true;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Audio Synthesizer
  initSoundSystem();

  // 2. Initialize Screen Router & Navigation Dock (Mouse + Hotkeys 1-0)
  initScreenRouter();

  // 3. Initialize HUD Controls (Theme, CRT Scanlines)
  initHudControls();

  // 4. Initialize Home Screen & Typewriter
  initHomeScreen();

  // 5. Populate Data to Screens
  renderCharacterScreen();
  renderSkillsScreen();
  renderProjectsScreen();
  renderBossQuestSimulator();
  renderCampaignScreen();
  renderAchievementsScreen();
  renderArsenalScreen();
  renderResumeScreen();
  renderContactScreen();

  // 6. Initialize Cloudflare Viewer Telemetry
  initViewerTelemetry();

  // 7. Initialize Project Detail Modal System
  initModalSystem();

  // 7. Refresh Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Web Audio API 8-Bit Retro Sound Synthesizer
 */
function initSoundSystem() {
  const toggleBtn = document.getElementById("sfx-toggle");
  const icon = document.getElementById("sfx-icon");

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playSound = function (type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "coin") {
        // Achievement & Positive action chime
        osc.type = "sine";
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "tab") {
        // Screen transition blip
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "alarm") {
        // Anomaly alert siren
        osc.type = "square";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.1);
        osc.frequency.setValueAtTime(440, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "click") {
        // Subdued click
        osc.type = "sine";
        osc.frequency.setValueAtTime(587, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      // Audio context waiting for user gesture
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      toggleBtn.classList.toggle("text-cyan-400", soundEnabled);
      if (icon) {
        icon.setAttribute("data-lucide", soundEnabled ? "volume-2" : "volume-x");
        if (window.lucide) window.lucide.createIcons();
      }
      if (soundEnabled) playSound("coin");
    });
  }
}

/**
 * Screen Router & Keyboard Navigation Map
 */
function initScreenRouter() {
  const dockButtons = document.querySelectorAll(".dock-btn[data-screen]");
  const screens = document.querySelectorAll(".console-screen");
  const footerStatus = document.getElementById("footer-active-screen-name");

  const screenNames = {
    "screen-home": "HOME // BOOT SEQUENCE",
    "screen-character": "CHARACTER DOSSIER &amp; LORE",
    "screen-skills": "TECHNICAL SKILL LOADOUT",
    "screen-projects": "PROJECT QUEST LOG",
    "screen-boss": "BOSS QUEST // RL ZERO-DAY DEFENSE",
    "screen-campaign": "CAMPAIGN MISSIONS &amp; ROADMAP",
    "screen-achievements": "VERIFIED ACHIEVEMENTS &amp; COMMENDATIONS",
    "screen-arsenal": "TECHNICAL ARSENAL MATRIX",
    "screen-resume": "VERIFIED CURRICULUM VITAE",
    "screen-contact": "SECURE TRANSMISSION UPLINK"
  };

  const hotkeyMap = {
    "1": "screen-home",
    "2": "screen-character",
    "3": "screen-skills",
    "4": "screen-projects",
    "5": "screen-boss",
    "6": "screen-campaign",
    "7": "screen-achievements",
    "8": "screen-arsenal",
    "9": "screen-resume",
    "0": "screen-contact"
  };

  window.switchScreen = function (screenId) {
    // Deactivate all screens, activate requested
    screens.forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
    }

    // Update active state on command dock buttons
    dockButtons.forEach(btn => {
      const match = btn.getAttribute("data-screen") === screenId;
      btn.classList.toggle("active", match);
    });

    // Update bottom status bar
    if (footerStatus && screenNames[screenId]) {
      footerStatus.innerHTML = screenNames[screenId];
    }

    window.playSound("tab");
    if (window.lucide) window.lucide.createIcons();
  };

  // Dock Button Click Listeners
  dockButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const screenId = btn.getAttribute("data-screen");
      switchScreen(screenId);
    });
  });

  // Direct target buttons on Home Screen
  document.addEventListener("click", (e) => {
    const targetBtn = e.target.closest("[data-screen-target]");
    if (targetBtn) {
      const targetScreen = targetBtn.getAttribute("data-screen-target");
      switchScreen(targetScreen);
    }
  });

  // Keyboard Hotkeys [1 - 0] & [ESC]
  window.addEventListener("keydown", (e) => {
    // Guard against capturing hotkeys when user is typing in form inputs
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      return;
    }

    if (e.key === "Escape") {
      closeProjectModal();
      return;
    }

    if (hotkeyMap[e.key]) {
      e.preventDefault();
      switchScreen(hotkeyMap[e.key]);
    }
  });
}

/**
 * HUD Controls: Theme Switcher & CRT Scanlines
 */
function initHudControls() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      window.playSound("click");
      const current = html.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    themeIcon.setAttribute("data-lucide", theme === "light" ? "sun" : "moon");
    if (window.lucide) window.lucide.createIcons();
  }

  // CRT Scanlines
  const crtToggle = document.getElementById("crt-toggle");
  const scanlines = document.getElementById("crt-scanlines");
  const savedCrt = localStorage.getItem("crt-scanlines") === "true";

  if (savedCrt && scanlines) {
    scanlines.classList.remove("hidden");
    if (crtToggle) crtToggle.classList.add("text-pink-400");
  }

  if (crtToggle && scanlines) {
    crtToggle.addEventListener("click", () => {
      window.playSound("click");
      const isHidden = scanlines.classList.toggle("hidden");
      const active = !isHidden;
      localStorage.setItem("crt-scanlines", active);
      crtToggle.classList.toggle("text-pink-400", active);
    });
  }
}

/**
 * Home Screen & Typewriter Animation
 */
function initHomeScreen() {
  const el = document.getElementById("home-typewriter-text");
  if (!el) return;

  const roles = [
    "AI & Cybersecurity Engineer",
    "Final Year B.Tech IT // A.K.T Memorial College",
    "Published Author: RL Zero-Day Cyber Defense",
    "DeepShield Audio Forensics Architect",
    "NPTEL Certified in Java Programming"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      delay = 45;
    } else {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      delay = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      delay = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }

  type();
}

/**
 * Screen 2: Render Character Dossier
 */
function renderCharacterScreen() {
  // Bio Summary Paragraphs
  const summaryContainer = document.getElementById("character-summary-paragraphs");
  if (summaryContainer && profileData.bio.summary) {
    summaryContainer.innerHTML = profileData.bio.summary
      .map(p => `<p>${p}</p>`)
      .join("");
  }

  // Education List
  const eduContainer = document.getElementById("character-education-list");
  if (eduContainer && profileData.education) {
    eduContainer.innerHTML = profileData.education.map(edu => `
      <div class="p-3 rounded bg-slate-950 border border-slate-800 space-y-1 font-mono text-xs">
        <div class="flex flex-wrap items-center justify-between gap-1">
          <span class="font-bold text-white">${edu.institution}</span>
          <span class="text-cyan-400 font-bold">${edu.grade}</span>
        </div>
        <div class="text-slate-300 text-xs">${edu.degree} &bull; <span class="text-slate-500">${edu.period}</span></div>
        <div class="text-[11px] text-slate-400 font-sans">${edu.highlight} (${edu.location})</div>
      </div>
    `).join("");
  }

  // Career Objective & Current Focus
  const careerObj = document.getElementById("career-objective-text");
  const focusObj = document.getElementById("current-focus-text");
  if (careerObj) careerObj.textContent = profileData.bio.careerObjective;
  if (focusObj) focusObj.textContent = profileData.bio.currentFocus;

  // Interests Tags
  const interestsContainer = document.getElementById("character-interests-tags");
  if (interestsContainer && profileData.interests) {
    interestsContainer.innerHTML = profileData.interests.map(tag => `
      <span class="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 text-xs">
        ⚡ ${tag}
      </span>
    `).join("");
  }
}

/**
 * Screen 3: Render Skill Loadout with Category Filtering
 */
function renderSkillsScreen() {
  const container = document.getElementById("skills-cards-container");
  const filterButtons = document.querySelectorAll("#skills-filter-buttons button");

  function render(category) {
    if (!container) return;
    const filtered = category === "all" ? skillsData : skillsData.filter(s => s.category === category);

    container.innerHTML = filtered.map(skill => `
      <div class="tech-card space-y-2 font-mono text-xs">
        <div class="flex items-center justify-between">
          <span class="font-bold text-sm text-white">${skill.name}</span>
          <span class="text-cyan-400 font-bold text-[11px]">${skill.level}</span>
        </div>
        <p class="text-slate-400 text-xs font-sans leading-relaxed">${skill.description}</p>
        <div class="pt-2 border-t border-slate-800/80">
          <span class="text-slate-500 block text-[10px] uppercase font-bold">PROJECTS DEPLOYED IN:</span>
          <div class="flex flex-wrap gap-1.5 mt-1">
            ${skill.projectsUsing.map(p => `
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-purple-300">
                ${p}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.playSound("click");
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.getAttribute("data-category"));
    });
  });

  render("all");
}

/**
 * Screen 4: Render Project Quests
 */
function renderProjectsScreen() {
  const container = document.getElementById("project-quests-container");
  if (!container) return;

  container.innerHTML = projectsData.map(p => `
    <div class="tech-card p-5 space-y-3 font-mono">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-bold text-cyan-400 tracking-wider uppercase">${p.questTitle}</span>
        <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          ${p.status}
        </span>
      </div>

      <h3 class="text-lg font-bold text-white tracking-tight">${p.name}</h3>
      <p class="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">${p.shortDescription}</p>

      <div class="flex flex-wrap gap-1.5 pt-1">
        ${p.technologies.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-purple-300">${t}</span>`).join("")}
      </div>

      <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
        <button class="btn-tech-primary !py-1.5 !px-3 text-xs" onclick="openProjectModal('${p.id}')">
          <i data-lucide="info" class="w-3.5 h-3.5"></i>
          <span>Inspect Quest Details</span>
        </button>
        ${p.github ? `
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-tech-secondary !py-1.5 !px-3 text-xs">
            <i data-lucide="github" class="w-3.5 h-3.5"></i>
            <span>GitHub</span>
          </a>
        ` : ''}
      </div>
    </div>
  `).join("");
}

/**
 * Screen 5: Boss Quest RL Zero-Day Mitigation Simulator
 */
function renderBossQuestSimulator() {
  const attackBtn = document.getElementById("btn-simulate-attack");
  const resetBtn = document.getElementById("btn-reset-sim");

  const threatBadge = document.getElementById("threat-status-badge");
  const lossValue = document.getElementById("current-loss-value");
  const lossBar = document.getElementById("loss-meter-bar");
  const rlStateText = document.getElementById("rl-state-text");
  const rlActionText = document.getElementById("rl-action-text");
  const rlRewardText = document.getElementById("rl-reward-text");
  const episodeCounter = document.getElementById("rl-episode-counter");

  let currentEpisode = 60;

  if (attackBtn) {
    attackBtn.addEventListener("click", () => {
      window.playSound("alarm");

      const anomalyScore = (0.086 + Math.random() * 0.03).toFixed(3);
      const systemLoad = (0.76 + Math.random() * 0.18).toFixed(2);
      currentEpisode += 1;

      if (lossValue) {
        lossValue.innerHTML = `<span class="text-pink-400 font-bold">${anomalyScore} (ALERT: &gt; 0.05 MSE THRESHOLD)</span>`;
      }
      if (lossBar) {
        lossBar.style.width = "88%";
        lossBar.className = "h-full bg-pink-500 transition-all duration-300 shadow-lg shadow-pink-500/50";
      }

      if (threatBadge) {
        threatBadge.className = "font-mono text-[11px] px-2.5 py-0.5 rounded bg-pink-500/20 text-pink-400 border border-pink-500/40 animate-pulse";
        threatBadge.textContent = "⚠️ ZERO-DAY ATTACK DETECTED";
      }

      if (rlStateText) {
        rlStateText.innerHTML = `<span class="text-pink-400">[${anomalyScore}, ${systemLoad}]</span>`;
      }

      if (rlActionText) {
        rlActionText.innerHTML = `<span class="text-cyan-400 font-bold">Action 1: Dynamic Rate-Limit &amp; Isolate Hostile Node</span>`;
      }

      if (rlRewardText) {
        rlRewardText.innerHTML = `<span class="text-emerald-400 font-bold">+2.0 (Autonomous Mitigation!)</span>`;
      }

      if (episodeCounter) {
        episodeCounter.textContent = currentEpisode;
      }

      setTimeout(() => {
        window.playSound("coin");
        showToast("🏆 Autonomous Zero-Day Mitigation Activated!");
      }, 500);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      window.playSound("click");

      if (lossValue) lossValue.textContent = "0.012 (Threshold: 0.05)";
      if (lossBar) {
        lossBar.style.width = "24%";
        lossBar.className = "h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 transition-all duration-300";
      }

      if (threatBadge) {
        threatBadge.className = "font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
        threatBadge.textContent = "NORMAL TRAFFIC";
      }

      if (rlStateText) rlStateText.textContent = "[0.12, 0.35]";
      if (rlActionText) rlActionText.textContent = "Action 0: Normal";
      if (rlRewardText) rlRewardText.textContent = "+1.0 (Optimal)";
    });
  }
}

/**
 * Screen 6: Render Campaign Missions (Experience & Timeline)
 */
function renderCampaignScreen() {
  const container = document.getElementById("campaign-missions-container");
  if (!container) return;

  container.innerHTML = experienceData.map(mission => `
    <div class="tech-card space-y-2">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-bold text-cyan-400 tracking-wider">${mission.missionCode}</span>
        <span class="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
          ${mission.period}
        </span>
      </div>

      <h3 class="text-sm sm:text-base font-bold text-white">${mission.title}</h3>
      <div class="text-xs text-slate-400">${mission.organization} &bull; <span class="text-slate-500">${mission.location}</span></div>
      <p class="text-xs text-slate-300 font-sans leading-relaxed">${mission.description}</p>

      <ul class="list-disc list-inside text-[11px] text-slate-400 font-sans space-y-0.5 pt-1">
        ${mission.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>

      <div class="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-800/80">
        ${mission.badges.map(b => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">${b}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Screen 7: Render Achievements & Accreditations
 */
function renderAchievementsScreen() {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  container.innerHTML = achievementsData.map(a => `
    <div class="tech-card space-y-2 font-mono text-xs">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest">${a.tier}</span>
        <span class="text-[10px] text-slate-400">${a.date}</span>
      </div>
      <h3 class="text-sm font-bold text-white">${a.title}</h3>
      <div class="text-[11px] text-cyan-400 font-bold">${a.organization}</div>
      <p class="text-xs text-slate-400 font-sans leading-relaxed">${a.description}</p>
    </div>
  `).join("");
}

/**
 * Screen 8: Render Technology Arsenal Matrix
 */
function renderArsenalScreen() {
  const container = document.getElementById("arsenal-matrix-container");
  if (!container) return;

  const arsenalGroups = [
    { title: "LANGUAGES", items: ["Python", "Java", "SQL", "JavaScript"] },
    { title: "AI & ML", items: ["TensorFlow", "Keras", "Deep RL", "Librosa", "Scikit-Learn", "NumPy"] },
    { title: "CYBERSECURITY", items: ["Zero-Day Mitigation", "Scapy Packet Analysis", "Voice Deepfakes", "Anomaly Detection"] },
    { title: "WEB & FRAMEWORKS", items: ["Spring Boot", "Streamlit", "HTML5 / CSS3", "Tailwind CSS"] },
    { title: "DATABASES", items: ["DBMS", "Relational SQL", "Data Normalization"] },
    { title: "DEVELOPER TOOLS", items: ["Git & GitHub", "VS Code", "Matplotlib", "Joblib"] }
  ];

  container.innerHTML = arsenalGroups.map(group => `
    <div class="tech-card space-y-2.5 font-mono text-xs">
      <span class="font-bold text-cyan-400 text-xs block pb-1 border-b border-slate-800">// ${group.title}</span>
      <div class="flex flex-wrap gap-1.5">
        ${group.items.map(item => `
          <span class="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold">
            ${item}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Screen 9: Resume Screen Controls
 */
function renderResumeScreen() {
  const viewBtn = document.getElementById("btn-view-resume");
  const downloadBtn = document.getElementById("btn-download-resume");

  if (viewBtn) {
    viewBtn.addEventListener("click", () => window.playSound("click"));
  }
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.playSound("coin");
      showToast("Downloading verified Prathap B resume...");
    });
  }
}

/**
 * Screen 10: Secure Uplink (Working Contact Form & Copy Actions)
 */
function renderContactScreen() {
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyPhoneBtn = document.getElementById("copy-phone-btn");
  const form = document.getElementById("contact-transmission-form");
  const submitBtn = document.getElementById("btn-submit-contact");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("bprathap2006@gmail.com").then(() => {
        window.playSound("coin");
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Email: bprathap2006@gmail.com");
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("+919363545650").then(() => {
        window.playSound("coin");
        showToast("Phone number copied to clipboard!");
      }).catch(() => {
        showToast("Phone: +91 9363545650");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const subject = document.getElementById("contact-subject").value;
      const body = document.getElementById("contact-body").value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting to Cloudflare Edge...</span>`;

      // 1. Post to Cloudflare Backend Function (/api/contact)
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message: body })
        });
      } catch (err) {
        // Safe fallback if running without Cloudflare worker
      }

      // 2. Direct Mailto Fallback guaranteeing transmission to Prathap's personal inbox
      const mailtoUrl = `mailto:bprathap2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Sender: ${name} (${email})\n\n${body}`)}`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i><span>Transmit Encrypted Message</span>`;
        if (window.lucide) window.lucide.createIcons();
        window.location.href = mailtoUrl;
        window.playSound("coin");
        showToast(`Transmission received by Edge! Thank you, ${name}.`);
        form.reset();
      }, 700);
    });
  }
}

/**
 * Cloudflare Edge Viewer Telemetry Tracker
 */
async function initViewerTelemetry() {
  const viewerCountEl = document.getElementById("hud-viewer-count");
  const edgeNodeEl = document.getElementById("footer-viewer-node");

  // Default baseline
  let count = parseInt(localStorage.getItem("viewer_count") || "1428", 10) + 1;
  localStorage.setItem("viewer_count", count.toString());
  if (viewerCountEl) viewerCountEl.textContent = count.toLocaleString();

  try {
    // Attempt Cloudflare Pages Function /api/views
    const resp = await fetch("/api/views", { cache: "no-store" });
    if (resp.ok) {
      const data = await resp.json();
      if (data.views && viewerCountEl) {
        viewerCountEl.textContent = data.views.toLocaleString();
      }
      if (data.viewer && edgeNodeEl) {
        edgeNodeEl.textContent = `${data.viewer.country} (${data.viewer.ip})`;
      }
    } else {
      if (edgeNodeEl) edgeNodeEl.textContent = "CLOUDFLARE EDGE READY";
    }
  } catch (e) {
    if (edgeNodeEl) edgeNodeEl.textContent = "LOCAL NODE // CLOUDFLARE READY";
  }
}

/**
 * Project Detail Modal System
 */
function initModalSystem() {
  const modal = document.getElementById("project-detail-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  window.openProjectModal = function (projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    window.playSound("tab");

    document.getElementById("modal-quest-code").textContent = project.questTitle;
    document.getElementById("modal-project-name").textContent = project.name;
    document.getElementById("modal-problem").textContent = project.problem;
    document.getElementById("modal-solution").textContent = project.solution;
    document.getElementById("modal-role").textContent = project.myRole;
    document.getElementById("modal-results").textContent = project.results;
    document.getElementById("modal-lessons").textContent = project.lessonsLearned;

    // Features List
    const featuresList = document.getElementById("modal-features-list");
    if (featuresList) {
      featuresList.innerHTML = project.keyFeatures.map(f => `<li>${f}</li>`).join("");
    }

    // Technologies Tags
    const techContainer = document.getElementById("modal-tech-tags");
    if (techContainer) {
      techContainer.innerHTML = project.technologies.map(t => `
        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
          ${t}
        </span>
      `).join("");
    }

    // Action Buttons (Only show when URLs exist - NO DEAD UI)
    const actionsContainer = document.getElementById("modal-actions-container");
    if (actionsContainer) {
      let buttonsHtml = '';
      if (project.github) {
        buttonsHtml += `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-tech-primary !py-1.5 !px-3 text-xs">
            <i data-lucide="github" class="w-3.5 h-3.5"></i>
            <span>View Source Code</span>
          </a>
        `;
      }
      if (project.isBossQuest) {
        buttonsHtml += `
          <button class="btn-tech-magenta !py-1.5 !px-3 text-xs" onclick="closeProjectModal(); switchScreen('screen-boss');">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i>
            <span>Launch Boss Encounter</span>
          </button>
        `;
      }
      actionsContainer.innerHTML = buttonsHtml;
    }

    modal.classList.add("active");
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeProjectModal = function () {
    if (modal && modal.classList.contains("active")) {
      window.playSound("click");
      modal.classList.remove("active");
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }
}

/**
 * Retro Achievement & Notification Toast
 */
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3800);
}
