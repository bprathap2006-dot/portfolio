/**
 * ====================================================================
 * PRATHAP B - GAMIFIED CYBER DEFENSE TERMINAL DATA CONFIGURATION
 * ====================================================================
 */

const profileData = {
  // Character & Personal Identity
  personal: {
    name: "Prathap B",
    firstName: "Prathap",
    gamerTag: "CYBER_SENTINEL_99",
    title: "AI Security Engineer & Reinforcement Learning Architect",
    classType: "Final Year B.Tech IT // Cyber Defense Specialist",
    level: 99,
    hp: "100 / 100",
    mp: "100%",
    status: "FINAL YEAR B.TECH IT // READY FOR HIRE",
    location: "Kallakurichi, Tamil Nadu, India",
    email: "bprathap2006@gmail.com",
    phone: "+91 9363545650",
    college: "A.K.T Memorial College of Engineering and Technology, Kallakurichi",
    degree: "B.Tech - Information Technology (Final Year)",
    linkedin: "https://www.linkedin.com/in/prathap-b-0b226639b",
    github: "https://github.com/bprathap2006-dot",
    avatar: "assets/images/avatar.svg",
    
    // Rotating role titles
    roles: [
      "Final Year B.Tech IT Student",
      "RL Cyber Defense Architect",
      "TensorFlow & Deep Learning Specialist",
      "Network Anomaly & Scapy Researcher"
    ]
  },

  // Highlight Metrics (Gamer Stats)
  stats: [
    { label: "Academic Standing", value: "Final Year", icon: "graduation-cap", desc: "B.Tech Information Technology" },
    { label: "Projects Built", value: "30+", icon: "code", desc: "RL agents, anomaly detectors & apps" },
    { label: "Cups of Coffee", value: "1,250+", icon: "coffee", desc: "Fueling late-night code sprints" },
    { label: "Threats Neutralized", value: "99.9%", icon: "shield-alert", desc: "Autonomous anomaly mitigation" }
  ],

  // Detailed Character Lore & About Me Info
  about: {
    heading: "Final Year B.Tech IT Student & AI Security Specialist",
    lore: [
      "Greetings! I'm Prathap B, a final-year B.Tech Information Technology (IT) student at A.K.T Memorial College of Engineering and Technology, Kallakurichi.",
      "I specialize in Reinforcement Learning (RL) and Deep Learning for Zero-Day cyber attack mitigation. My primary research and projects focus on developing autonomous defense models in custom Gymnasium environments (NetworkEnv), analyzing live raw packet traffic with Scapy and autoencoders to neutralize network threats with zero manual intervention.",
      "Combining deep technical research with full-stack development, I engineer responsive dashboards, secure web systems, and high-performance machine learning pipelines ready for production environments."
    ],
    personalInfo: [
      { label: "Academic Degree", value: "B.Tech - Information Technology (Final Year)" },
      { label: "Institution", value: "A.K.T Memorial College of Engineering and Technology, Kallakurichi" },
      { label: "Official Email", value: "bprathap2006@gmail.com" },
      { label: "Mobile Contact", value: "+91 9363545650" },
      { label: "GitHub Profile", value: "github.com/bprathap2006-dot" },
      { label: "LinkedIn Network", value: "linkedin.com/in/prathap-b-0b226639b" },
      { label: "Specialization", value: "Reinforcement Learning & AI Cybersecurity" },
      { label: "Core Arsenal", value: "Python, TensorFlow, Gymnasium (RL), Scapy, Streamlit, React" }
    ]
  },

  // Social / Network Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/bprathap2006-dot",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prathap-b-0b226639b",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:bprathap2006@gmail.com",
      icon: "mail"
    },
    {
      name: "Phone",
      url: "tel:+919363545650",
      icon: "phone"
    }
  ],

  // Boss Quest: Your Real-World RL Flagship Project
  flagshipProject: {
    id: "rl-zero-day",
    badge: "BOSS QUEST 01 // FLAGSHIP ARCHITECTURE",
    title: "RL-Based Zero-Day Attack Mitigation System",
    subtitle: "Autonomous Network Anomaly Detection & Self-Healing Defense Agent",
    description: "An intelligent cybersecurity framework integrating Deep Autoencoders for real-time zero-day packet anomaly detection with a custom Gymnasium Reinforcement Learning environment (NetworkEnv) to autonomously mitigate hostile network traffic.",
    tags: ["TensorFlow", "Gymnasium RL", "Scapy", "Streamlit", "Python", "Joblib", "Matplotlib"],
    metrics: [
      { label: "Anomaly Threshold", value: "0.05 MSE" },
      { label: "Detection Latency", value: "< 2.4 ms" },
      { label: "Mitigation Accuracy", value: "98.7%" },
      { label: "Action Space", value: "4 Discrete RL Actions" }
    ],
    codeSnippets: [
      {
        filename: "scapy_autoencoder.py",
        language: "python",
        code: `# Feature extraction from raw packet stream\nfeatures = [len(packet), packet.time % 1, ...]\nX = scaler.transform([features])\nreconstruction = model.predict(X, verbose=0)\nloss = np.mean((X - reconstruction)**2)\n\nif loss > 0.05:\n    print("⚠️ Zero-Day Anomaly Detected")\n    trigger_rl_defense(loss)`
      },
      {
        filename: "network_env.py",
        language: "python",
        code: `class NetworkEnv(gym.Env):\n    def step(self, action):\n        anomaly_score, load = self.state\n        if anomaly_score > 0.6:\n            reward = 2 if action in [1, 3] else -2\n        else:\n            reward = 1 if action == 0 else -1\n        return next_state, reward, done, {}`
      }
    ]
  },

  // Gamified Equipment & Inventory
  equipment: {
    weapons: [
      { name: "Python", category: "weapon", level: "LVL 99 (Primary)", desc: "Core AI, packet sniffers & automation" },
      { name: "TensorFlow & Keras", category: "weapon", level: "LVL 95", desc: "Autoencoders & deep neural networks" },
      { name: "Gymnasium (RL)", category: "weapon", level: "LVL 93", desc: "Custom network defense environments" },
      { name: "Scapy Packet Sniffer", category: "weapon", level: "LVL 91", desc: "Real-time raw network stream inspection" },
      { name: "PyTorch", category: "weapon", level: "LVL 88", desc: "Advanced machine learning pipelines" }
    ],
    armor: [
      { name: "Linux Kernel & Shell", category: "armor", level: "LVL 94", desc: "Hardened server architecture & security" },
      { name: "Docker Containers", category: "armor", level: "LVL 90", desc: "Isolated microservices & sandboxing" },
      { name: "PostgreSQL & Redis", category: "armor", level: "LVL 89", desc: "High-throughput data & cache stores" },
      { name: "Cloudflare & AWS", category: "armor", level: "LVL 88", desc: "DDoS mitigation & edge protection" }
    ],
    spells: [
      { name: "Streamlit", category: "spell", level: "LVL 96", desc: "Interactive AI telemetry dashboards" },
      { name: "JavaScript / TypeScript", category: "spell", level: "LVL 94", desc: "Dynamic web logic & async client APIs" },
      { name: "React & Next.js", category: "spell", level: "LVL 92", desc: "Modern reactive component architecture" },
      { name: "Tailwind CSS", category: "spell", level: "LVL 95", desc: "Cyberpunk responsive user interfaces" }
    ]
  },

  // Campaign Roadmap (Experience & Education)
  timeline: [
    {
      period: "2022 - 2026 (CURRENT)",
      title: "B.Tech in Information Technology (Final Year)",
      organization: "A.K.T Memorial College of Engineering and Technology",
      location: "Kallakurichi, Tamil Nadu",
      description: "Final year student specializing in Artificial Intelligence, Deep Reinforcement Learning, and Cybersecurity. Spearheading research on autonomous zero-day anomaly mitigation with TensorFlow, Scapy, and Gymnasium.",
      badges: ["Information Technology", "AI & Cyber Security", "Reinforcement Learning", "Python"]
    },
    {
      period: "2023 - PRESENT",
      title: "AI Security & Full-Stack Researcher",
      organization: "Autonomous Cyber Defense Projects",
      location: "Kallakurichi / Remote",
      description: "Developed RL-based autonomous network defense models, integrated real-time Scapy packet inspection pipelines, and engineered interactive Streamlit telemetry dashboards.",
      badges: ["TensorFlow", "Scapy", "Gymnasium", "Docker", "Streamlit"]
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.profileData = profileData;
}
