import { SkillItem, SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  'Programming',
  'Core Computer Science',
  'Development Tools',
  'AI and Machine Learning',
  'Cybersecurity'
];

export const skillsData: SkillItem[] = [
  // Programming
  {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    shortDesc: 'Object-oriented application programming and enterprise fundamentals.',
    howIUseIt: 'Studied extensively through coursework and NPTEL certification. Used for robust object-oriented software design, modular problem-solving, and foundational backend logic.',
    relevantProjects: ['Core Coursework', 'Object-Oriented Architecture']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    shortDesc: 'Primary language for AI/ML pipelines, security research, and automation.',
    howIUseIt: 'Daily language of choice for building Deep Learning classifiers, feature extraction pipelines, data modeling, and scripting network packet tools.',
    relevantProjects: ['DeepShield', 'RL Zero-Day Mitigation Framework']
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Programming',
    shortDesc: 'Relational database querying, schema structuring, and normalization.',
    howIUseIt: 'Used for designing relational schemas, writing complex join queries, constraints, and data integrity checks in DBMS lab exercises and application prototypes.',
    relevantProjects: ['Database Management Systems']
  },

  // Core Computer Science
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    category: 'Core Computer Science',
    shortDesc: 'Encapsulation, inheritance, polymorphism, and abstraction design patterns.',
    howIUseIt: 'Core theoretical and practical foundation applied in both Java and Python to architect scalable, maintainable, and decoupled codebases.',
    relevantProjects: ['Java Certification Lab', 'System Architecture']
  },
  {
    id: 'dsa',
    name: 'Data Structures',
    category: 'Core Computer Science',
    shortDesc: 'Arrays, linked lists, trees, graphs, sorting, and algorithmic time complexity.',
    howIUseIt: 'Studied for analyzing algorithmic efficiency, optimizing search and traversal operations, and constructing computational graphs for complex data flow.',
    relevantProjects: ['Algorithm Analysis', 'Academic Problem Solving']
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    category: 'Core Computer Science',
    shortDesc: 'Relational data modeling, ACID properties, transaction handling, and indexing.',
    howIUseIt: 'Studied in B.Tech IT curriculum for understanding high-reliability data storage architectures, normalization stages (1NF to BCNF), and concurrency control.',
    relevantProjects: ['Enterprise Storage Design']
  },

  // Development Tools
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'Development Tools',
    shortDesc: 'Primary code editor and workstation environment.',
    howIUseIt: 'Configured with Python, Java, and TypeScript linters, integrated debugging tools, and Git workflows for end-to-end full-stack and research engineering.',
    relevantProjects: ['All Projects']
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Development Tools',
    shortDesc: 'Distributed version control and branch management.',
    howIUseIt: 'Used for atomic commits, feature branching, merge conflict resolution, and maintaining clean revision history across project iterations.',
    relevantProjects: ['Version Control Workflow']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Development Tools',
    shortDesc: 'Remote repository hosting, code reviews, and project collaboration.',
    howIUseIt: 'Used for publishing open-source projects, hosting documentation, managing issues, and continuous deployment workflows with Cloudflare Pages.',
    relevantProjects: ['DeepShield Repo', 'Portfolio Deployment']
  },

  // AI and Machine Learning
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI and Machine Learning',
    shortDesc: 'Deep learning neural network modeling, training, and evaluation.',
    howIUseIt: 'Utilized for constructing CNN and recurrent classification models for voice authenticity analysis in DeepShield and policy networks for RL agents.',
    relevantProjects: ['DeepShield', 'RL Zero-Day Mitigation']
  },
  {
    id: 'librosa',
    name: 'Librosa',
    category: 'AI and Machine Learning',
    shortDesc: 'Audio signal processing and acoustic feature extraction.',
    howIUseIt: 'Extensively applied in DeepShield to parse raw WAV/MP3 files, generate Mel-spectrograms, extract MFCC coefficients, and detect spectral anomalies in synthetic audio.',
    relevantProjects: ['DeepShield']
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'AI and Machine Learning',
    shortDesc: 'High-performance n-dimensional array manipulation and mathematical operations.',
    howIUseIt: 'Used for matrix manipulation of audio spectrograms, vector normalization, tensor reshaping, and mathematical calculations in research scripts.',
    relevantProjects: ['DeepShield', 'Data Pipelines']
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'AI and Machine Learning',
    shortDesc: 'Classical machine learning algorithms, preprocessing, and evaluation metrics.',
    howIUseIt: 'Used for dataset splitting, feature scaling, baseline classification comparisons (SVM, Random Forest), and generating confusion matrices.',
    relevantProjects: ['DeepShield', 'Model Evaluation']
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    category: 'AI and Machine Learning',
    shortDesc: 'Deep neural architectures, backpropagation, and latent representations.',
    howIUseIt: 'Studied for uncovering subtle acoustic artifacts in deepfake speech and learning complex policy landscapes in dynamic network environments.',
    relevantProjects: ['DeepShield', 'Research Publication']
  },

  // Cybersecurity
  {
    id: 'scapy',
    name: 'Scapy',
    category: 'Cybersecurity',
    shortDesc: 'Packet crafting, network sniffing, and low-level protocol decoding.',
    howIUseIt: 'Applied to inspect raw PCAP traffic, analyze TCP/IP headers, decode anomalous packet bursts, and extract features for attack detection systems.',
    relevantProjects: ['RL Zero-Day Mitigation Framework']
  },
  {
    id: 'reinforcement-learning',
    name: 'Reinforcement Learning',
    category: 'Cybersecurity',
    shortDesc: 'Agent-environment interaction, reward modeling, and autonomous decision policies.',
    howIUseIt: 'Formulated custom state-action-reward representations for autonomous network defense, allowing an RL agent to mitigate unknown zero-day traffic bursts dynamically.',
    relevantProjects: ['Conference Paper 2026', 'Zero-Day Mitigation']
  },
  {
    id: 'network-traffic-analysis',
    name: 'Network Traffic Analysis',
    category: 'Cybersecurity',
    shortDesc: 'Protocol inspection, flow telemetry, anomaly detection, and mitigation strategies.',
    howIUseIt: 'Investigating bandwidth anomalies, flow statistics, packet inter-arrival patterns, and defense mechanisms for resource-constrained academic LANs.',
    relevantProjects: ['RL Zero-Day Mitigation Framework']
  }
];
