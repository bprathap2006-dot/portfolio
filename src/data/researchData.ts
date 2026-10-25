import { ResearchPublication } from '../types/portfolio';

export const researchData: ResearchPublication = {
  id: 'zero-day-paper',
  title: 'Reinforcement Learning-Driven Autonomous Zero-Day Attack Mitigation Framework for Resource-Constrained Academic Networks',
  conference: '4th International Conference',
  institution: 'Surya Group of Institutions',
  year: 2026,
  tags: ['Reinforcement Learning', 'Zero-Day Mitigation', 'Cybersecurity', 'Resource-Constrained Networks', 'Scapy'],
  summary: 'This research tackles the vulnerability of academic and campus network infrastructures to emergent, uncatalogued cyber threats (zero-day attacks). Standard intrusion detection systems (IDS) depend upon signature databases, leaving them blind to novel zero-day vectors. Furthermore, enterprise-grade AI security suites impose computational overheads that academic hardware cannot sustain.',
  problemStatement: 'Resource-constrained academic institutions operate with heterogeneous hardware, high student traffic bursts, and limited IT security budgets. When an uncatalogued zero-day exploit strikes, manual diagnosis is too slow and signature-based firewalls fail to recognize the threat.',
  methodology: 'The proposed framework implements an autonomous Reinforcement Learning agent coupled with low-overhead packet telemetry using Scapy. Rather than deep inspection of every payload byte, the agent monitors macro-flow entropy, connection rate surges, and TCP flag anomalies. The agent is trained within a modeled environment where rewards incentivize preserving legitimate academic connectivity while penalizing unmitigated exploit traffic.',
  significance: 'Demonstrates that reinforcement learning can operate efficiently on modest hardware to autonomously synthesize reactive mitigation rules (e.g., dynamic rate-limiting and selective port throttling) without relying on pre-existing attack signatures.'
};
