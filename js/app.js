/**
 * ====================================================================
 * PRATHAP B - GAMIFIED CYBER DEFENSE CONSOLE ENGINE (app.js)
 * ====================================================================
 */

let audioCtx = null;
let soundEnabled = true;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Sound Synthesizer
  initSoundSystem();

  // 2. Initialize Game Console Navigation (Mouse & Hotkeys 1-5)
  initConsoleNavigation();

  // 3. Initialize HUD Controls (Theme, CRT Scanlines)
  initHudControls();

  // 4. Initialize Typewriter Terminal
  initTypewriter();

  // 5. Populate Scenes (Lore, Equipment, Roadmap)
  initLoreScene();
  initEquipmentScene();
  initRoadmapScene();

  // 6. Initialize Boss Quest: RL Zero-Day Mitigation Simulator
  initBossQuestSimulator();

  // 7. Initialize Transmission Uplink (Contact & Copy Email)
  initUplink();

  // 8. Refresh Lucide Icons
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
        // High pleasant chime for achievements
        osc.type = "sine";
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.setValueAtTime(1318.51, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "tab") {
        // Console view switch sound
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.09);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === "alarm") {
        // Cyber alert siren
        osc.type = "square";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.1);
        osc.frequency.setValueAtTime(440, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "click") {
        // Short cyber blip
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      // Audio context not allowed yet
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
 * Game Console Navigation: Scene Switching & Keyboard Hotkeys
 */
function initConsoleNavigation() {
  const menuButtons = document.querySelectorAll(".game-menu-btn");
  const scenes = document.querySelectorAll(".game-scene");
  const statusLabel = document.getElementById("status-active-scene");

  const sceneMap = {
    "1": "scene-lore",
    "2": "scene-boss-quest",
    "3": "scene-equipment",
    "4": "scene-roadmap",
    "5": "scene-uplink"
  };

  const sceneNames = {
    "scene-lore": "CHARACTER LORE (ABOUT)",
    "scene-boss-quest": "BOSS QUEST // RL ZERO-DAY MITIGATION",
    "scene-equipment": "LOADOUT // WEAPONS & SPELLS",
    "scene-roadmap": "CAMPAIGN ROADMAP (TIMELINE)",
    "scene-uplink": "SECURE TRANSMISSION UPLINK"
  };

  window.switchScene = function (sceneId) {
    // Hide all scenes, show target
    scenes.forEach(s => s.classList.remove("active"));
    const targetScene = document.getElementById(sceneId);
    if (targetScene) {
      targetScene.classList.add("active");
    }

    // Update active button state
    menuButtons.forEach(btn => {
      const isMatch = btn.getAttribute("data-scene") === sceneId;
      btn.classList.toggle("active", isMatch);
    });

    // Update bottom status bar
    if (statusLabel && sceneNames[sceneId]) {
      statusLabel.textContent = sceneNames[sceneId];
    }

    window.playSound("tab");
    if (window.lucide) window.lucide.createIcons();
  };

  // Button Click Listeners
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const sceneId = btn.getAttribute("data-scene");
      switchScene(sceneId);
    });
  });

  // Hotkey Navigation [Keys 1 - 5]
  window.addEventListener("keydown", (e) => {
    // Avoid capturing hotkeys when user is typing in form inputs
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      return;
    }

    if (sceneMap[e.key]) {
      e.preventDefault();
      switchScene(sceneMap[e.key]);
    }
  });

  // Quick Action Buttons inside Lore Scene
  const btnGotoBoss = document.getElementById("btn-goto-boss");
  const btnGotoEquip = document.getElementById("btn-goto-equipment");

  if (btnGotoBoss) {
    btnGotoBoss.addEventListener("click", () => switchScene("scene-boss-quest"));
  }
  if (btnGotoEquip) {
    btnGotoEquip.addEventListener("click", () => switchScene("scene-equipment"));
  }
}

/**
 * HUD Controls: Theme Switcher & CRT Scanline Toggle
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

  // CRT Scanlines Toggle
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
 * Typewriter Terminal Role Animation
 */
function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const roles = window.profileData?.personal?.roles || [
    "RL Cyber Defense Architect",
    "TensorFlow Deep Learning Specialist",
    "Network Security Engineer",
    "Full-Stack Web Systems Engineer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      delay = 50;
    } else {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      delay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      delay = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  type();
}

/**
 * Populate Scene 1: Character Lore (About Me)
 */
function initLoreScene() {
  const data = window.profileData;
  if (!data) return;

  const { about, stats } = data;

  // Lore Narrative
  const loreContainer = document.getElementById("lore-paragraphs");
  if (loreContainer && about?.lore) {
    loreContainer.innerHTML = about.lore.map(p => `
      <p class="leading-relaxed text-slate-300">${p}</p>
    `).join("");
  }

  // Stats Grid (Highlight Metrics: Years Exp, Projects, Coffee, Threat Neutralization)
  const statsGrid = document.getElementById("lore-stats-grid");
  if (statsGrid && stats) {
    statsGrid.innerHTML = stats.map(st => `
      <div class="cyber-card !p-3 text-center font-mono">
        <div class="text-xl sm:text-2xl font-extrabold text-cyan-400">${st.value}</div>
        <div class="text-[10px] font-bold text-slate-400 uppercase mt-0.5">${st.label}</div>
      </div>
    `).join("");
  }

  // Personal Info Breakdown
  const infoGrid = document.getElementById("personal-info-grid");
  if (infoGrid && about?.personalInfo) {
    infoGrid.innerHTML = about.personalInfo.map(info => `
      <div class="p-2.5 rounded bg-slate-950 border border-slate-800/80 font-mono text-xs">
        <span class="text-slate-500 block text-[10px] uppercase font-bold">${info.label}</span>
        <span class="text-slate-200 font-semibold mt-0.5 block">${info.value}</span>
      </div>
    `).join("");
  }
}

/**
 * Populate Scene 3: Equipment (Weapons, Armor, Spells)
 */
function initEquipmentScene() {
  const eq = window.profileData?.equipment;
  if (!eq) return;

  const weaponsEl = document.getElementById("weapons-container");
  const armorEl = document.getElementById("armor-container");
  const spellsEl = document.getElementById("spells-container");

  if (weaponsEl && eq.weapons) {
    weaponsEl.innerHTML = eq.weapons.map(w => `
      <div class="p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-pink-500/40 transition-all font-mono text-xs cursor-pointer" onclick="window.playSound('click'); showToast('Weapon Inspected: ${w.name}')">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${w.name}</span>
          <span class="text-pink-400 font-bold">${w.level}</span>
        </div>
        <div class="text-[10px] text-slate-400 mt-1">${w.desc}</div>
      </div>
    `).join("");
  }

  if (armorEl && eq.armor) {
    armorEl.innerHTML = eq.armor.map(a => `
      <div class="p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all font-mono text-xs cursor-pointer" onclick="window.playSound('click'); showToast('Armor Inspected: ${a.name}')">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${a.name}</span>
          <span class="text-cyan-400 font-bold">${a.level}</span>
        </div>
        <div class="text-[10px] text-slate-400 mt-1">${a.desc}</div>
      </div>
    `).join("");
  }

  if (spellsEl && eq.spells) {
    spellsEl.innerHTML = eq.spells.map(s => `
      <div class="p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-purple-500/40 transition-all font-mono text-xs cursor-pointer" onclick="window.playSound('click'); showToast('Spell Inspected: ${s.name}')">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${s.name}</span>
          <span class="text-purple-400 font-bold">${s.level}</span>
        </div>
        <div class="text-[10px] text-slate-400 mt-1">${s.desc}</div>
      </div>
    `).join("");
  }
}

/**
 * Populate Scene 4: Campaign Roadmap (Timeline)
 */
function initRoadmapScene() {
  const container = document.getElementById("roadmap-container");
  const timeline = window.profileData?.timeline;
  if (!container || !timeline) return;

  container.innerHTML = timeline.map(item => `
    <div class="cyber-card p-4 space-y-2">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-bold text-cyan-400 font-mono">${item.period}</span>
        <span class="text-[11px] text-slate-400">${item.location}</span>
      </div>
      <h3 class="text-sm font-bold text-white font-mono">${item.title}</h3>
      <div class="text-xs text-slate-300">${item.organization}</div>
      <p class="text-xs text-slate-400 font-sans leading-relaxed">${item.description}</p>
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${item.badges.map(b => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-mono">${b}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Boss Quest: Interactive RL Zero-Day Mitigation Simulator
 */
function initBossQuestSimulator() {
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

      // Spiked Anomaly State (> 0.05 Threshold)
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
        rlActionText.innerHTML = `<span class="text-cyan-400 font-bold">Action 1: Dynamic Rate-Limit &amp; Isolate Threat Node</span>`;
      }

      if (rlRewardText) {
        rlRewardText.innerHTML = `<span class="text-emerald-400 font-bold">+2.0 (Autonomous Mitigation!)</span>`;
      }

      if (episodeCounter) {
        episodeCounter.textContent = currentEpisode;
      }

      // Trigger Coin Chime & Retro Toast
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
 * Scene 5: Transmission Uplink (Contact & Copy Email)
 */
function initUplink() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailLink = document.getElementById("uplink-email");
  const form = document.getElementById("transmission-form");
  const submitBtn = document.getElementById("btn-transmit");

  if (copyBtn && emailLink) {
    copyBtn.addEventListener("click", () => {
      const email = emailLink.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        window.playSound("coin");
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Unable to copy email.");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const origHtml = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Payload...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origHtml;
        form.reset();
        window.playSound("coin");
        showToast(`Transmission received! Thank you, ${name}.`);
        if (window.lucide) window.lucide.createIcons();
      }, 800);
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
