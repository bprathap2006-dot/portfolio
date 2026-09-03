/**
 * ====================================================================
 * PRATHAP B - PROJECTS DATA CONFIGURATION (src/data/projectsData.js)
 * ====================================================================
 * Verified Ground-Truth Engineering Projects & Quests.
 */

export const projectsData = [
  {
    id: "boss-rl-zero-day",
    isBossQuest: true,
    name: "RL-Based Zero-Day Attack Mitigation Framework",
    questTitle: "QUEST 01: THE ZERO-DAY SENTINEL",
    difficulty: "LEVEL 99 // BOSS ENCOUNTER",
    threatLevel: "CRITICAL (Zero-Day Exploits)",
    status: "COMPLETED // PUBLISHED (2026)",
    shortDescription: "Autonomous cybersecurity framework using Deep Autoencoders for packet anomaly detection and custom Gymnasium Reinforcement Learning agents to neutralize zero-day exploits in real time.",
    technologies: ["Python", "TensorFlow", "Scapy", "Gymnasium RL", "Streamlit", "Joblib", "NumPy"],
    metrics: [
      { label: "Anomaly Threshold", value: "0.05 MSE" },
      { label: "Detection Latency", value: "< 2.4 ms" },
      { label: "Mitigation Accuracy", value: "98.7%" },
      { label: "Action Policy", value: "4 Discrete RL Actions" }
    ],
    problem: "Zero-day cyberattacks exploit undisclosed software vulnerabilities where legacy signature-based intrusion detection systems fail completely. In resource-constrained networks, uncontained attacks spread before human security teams can intervene.",
    solution: "Designed a dual-phase autonomous architecture: (1) Deep autoencoder reconstructing raw network packet features captured via Scapy, flagging packets exceeding 0.05 MSE loss as anomalies; (2) Custom Gymnasium RL environment (NetworkEnv) executing real-time mitigation actions (rate-limiting, isolating hostile nodes, rerouting traffic) with dynamic reward optimization.",
    myRole: "Lead AI & Security Researcher — Architected the feature extraction pipeline, trained the reconstruction neural network, programmed the custom Gymnasium environment, and conducted live network tests.",
    keyFeatures: [
      "Live packet stream sniffing and normalization via Scapy",
      "Autoencoder reconstruction loss gauge with automated 0.05 threshold trigger",
      "Gymnasium custom environment with discrete state/action space",
      "Dynamic reward convergence visualization matching Streamlit telemetry",
      "Optimized for low-overhead execution on academic network nodes"
    ],
    results: "Published in the 4th International Conference, Surya Group of Institutions (2026) and showcased at St. Anne's College Project Expo. Achieved 98.7% mitigation efficacy with near-zero latency overhead.",
    lessonsLearned: "Balancing exploration vs exploitation in volatile network loads requires strict reward bounds; autoencoders require careful feature normalization to prevent baseline drift.",
    github: "https://github.com/bprathap2006-dot",
    liveDemo: null, // Set to null if no live demo exists (no dead buttons!)
    publication: "Published in 4th International Conference, Surya Group of Institutions (2026)"
  },
  {
    id: "deepshield-voice",
    isBossQuest: false,
    name: "DeepShield: AI-Based Fake Voice Detection System",
    questTitle: "QUEST 02: SYNTHETIC SPEECH FORENSICS",
    difficulty: "LEVEL 85 // ADVANCED CAPSTONE",
    threatLevel: "HIGH (Voice Cloning & Deepfakes)",
    status: "FINAL YEAR PROJECT // ACTIVE DEV",
    shortDescription: "Deep learning audio forensics framework detecting synthetic and AI-generated voice recordings to protect against identity impersonation and voice phishing.",
    technologies: ["Python", "TensorFlow", "Librosa", "NumPy", "Scikit-learn", "Deep Learning"],
    metrics: [
      { label: "Audio Preprocessing", value: "Librosa Spectral" },
      { label: "Feature Extraction", value: "MFCC & Chroma" },
      { label: "Model Type", value: "Deep Neural Classifier" },
      { label: "Detection Target", value: "AI Clones vs Human" }
    ],
    problem: "Advances in generative AI speech synthesis have enabled malicious actors to create convincing voice deepfakes for biometric bypass, fraud, and executive impersonation.",
    solution: "Engineered an end-to-end audio classification pipeline using Librosa to compute acoustic spectral features (MFCCs, spectral roll-off, chroma) and trained a deep neural network with TensorFlow to detect subtle synthetic artifacts in speech signals.",
    myRole: "Deep Learning Engineer — Built the audio preprocessing pipeline, extracted spectral features from raw audio clips, trained deep classification models, and evaluated accuracy metrics.",
    keyFeatures: [
      "Audio preprocessing and feature extraction using Librosa and NumPy",
      "Deep learning classification model distinguishing genuine vs synthetic voice",
      "Real-time audio classification pipeline to counter voice fraud and impersonation",
      "Scikit-learn evaluation metrics and confusion matrix validation"
    ],
    results: "Accurately detects AI-generated audio artifacts; currently ongoing as the official Final Year Capstone Project at A.K.T Memorial College of Engineering and Technology.",
    lessonsLearned: "Different speech codecs and microphone noise profiles introduce significant variability; training with diverse augmented audio is essential for robust generalization.",
    github: "https://github.com/bprathap2006-dot",
    liveDemo: null,
    publication: null
  }
];
