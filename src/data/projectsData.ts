import { ProjectItem } from '../types/portfolio';

/**
 * PROJECT DATA CONFIGURATION
 * 
 * NOTE ON REPOSITORY URLS:
 * Per ground-truth verification guidelines, only verified repository URLs
 * are linked. If a repository has not been verified, 'repoUrl' is set to null.
 * When Prathap creates or makes the public repository available, simply paste
 * the URL into 'repoUrl' below and the repository action button will appear automatically.
 */

export const projectsData: ProjectItem[] = [
  {
    id: 'deepshield',
    name: 'DeepShield',
    fullTitle: 'AI-Based Fake Voice Detection System Using Deep Learning',
    status: 'Final-year project in progress',
    technologies: ['Python', 'TensorFlow', 'Librosa', 'NumPy', 'Scikit-learn', 'Deep Learning'],
    shortDescription: 'An AI-based project exploring fake or manipulated voice detection using audio preprocessing, feature extraction, and deep-learning-based classification.',
    fullDescription: 'DeepShield explores acoustic digital forensics to differentiate authentic human speech from synthetic or deepfake voice clones. The system leverages acoustic signal processing via Librosa to extract Mel-Frequency Cepstral Coefficients (MFCCs) and spectral representations, subsequently feeding normalized feature matrices into deep neural networks for classification.',
    architectureHighlights: [
      'Audio Preprocessing: Signal slicing, silent interval stripping, and amplitude normalization.',
      'Acoustic Feature Extraction: Extraction of Mel-Frequency Cepstral Coefficients (MFCCs), spectral roll-off, and chroma energy.',
      'Neural Representation: Feature tensor formatting and sequential modeling in TensorFlow.',
      'Classification Logic: Binary discriminator distinguishing natural acoustic vocal resonance from synthesized artifacts.'
    ],
    pipelineSteps: [
      'Raw Audio Input (.wav / .mp3)',
      'Signal Preprocessing & Normalization',
      'Librosa Spectral & MFCC Extraction',
      'Deep Neural Network Classification',
      'Veracity Assessment (Authentic vs Synthetic)'
    ],
    repoUrl: null, // To add verified repo URL later: e.g. "https://github.com/bprathap2006-dot/deepshield"
    demoUrl: null,
    category: 'AI / Audio Forensics'
  },
  {
    id: 'zero-day-mitigation',
    name: 'RL Zero-Day Mitigation Framework',
    fullTitle: 'Reinforcement Learning-Driven Autonomous Zero-Day Attack Mitigation Framework for Resource-Constrained Academic Networks',
    status: 'Conference Paper / Research & Development',
    technologies: ['Python', 'TensorFlow', 'Scapy', 'Reinforcement Learning'],
    shortDescription: 'A cybersecurity research project exploring network traffic analysis and reinforcement-learning-based approaches to detecting and mitigating zero-day attacks in resource-constrained academic networks.',
    fullDescription: 'An autonomous cyber defense framework tailored for resource-limited academic networks. Unlike signature-based intrusion detection systems that fail against uncatalogued zero-day vectors, this framework leverages packet sniffing telemetry via Scapy and formulates defense policy as an autonomous Reinforcement Learning problem—learning adaptive rate-limiting and dynamic filtering actions in real-time.',
    architectureHighlights: [
      'Low-Overhead Packet Telemetry: Streamlined packet sampling using Scapy to analyze traffic flow metrics without saturating campus switches.',
      'State-Action-Reward Formulation: Network states defined by packet entropy, flow velocity, and server response times.',
      'Autonomous Policy Engine: Policy-gradient / Q-learning agent balancing academic network availability with threat suppression.',
      'Dynamic Mitigation: Automated rule deployment to isolate rogue packet streams while preserving legitimate student research traffic.'
    ],
    pipelineSteps: [
      'Packet Ingestion via Scapy',
      'Feature Extraction & Entropy Analysis',
      'RL State Evaluation & Anomaly Flagging',
      'Autonomous Policy Decision (Mitigate / Allow)',
      'Dynamic Rule Enforcement at Gateway'
    ],
    repoUrl: null, // To add verified repo URL later: e.g. "https://github.com/bprathap2006-dot/rl-zero-day-mitigation"
    demoUrl: null,
    category: 'Cybersecurity / Reinforcement Learning'
  }
];
