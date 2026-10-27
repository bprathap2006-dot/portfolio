import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Network, 
  Compass, 
  Copy, 
  Check, 
  ExternalLink, 
  Activity 
} from 'lucide-react';

export const ZeroDayScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copied, setCopied] = useState(false);
  const [activeNode, setActiveNode] = useState<'gateway' | 'rl_agent' | 'subnet' | 'sink'>('rl_agent');
  const project = projectsData[1];

  const handleCopyTitle = () => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(project.fullTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const nodeTelemetry = {
    gateway: {
      name: 'INGRESS GATEWAY SENSOR',
      role: 'Low-Overhead Packet Telemetry via Scapy',
      details: 'Continuously monitors TCP/IP packet header metrics, flow velocity, and entropy variance without deep payload extraction overhead.',
      status: 'SAMPLING RATE: 10,000 pps (Optimized)',
    },
    rl_agent: {
      name: 'AUTONOMOUS RL POLICY ENGINE',
      role: 'Reinforcement Learning Decision Loop',
      details: 'Evaluates network state against learned reward policy. Formulates dynamic rate-limiting actions to throttle anomalous zero-day bursts.',
      status: 'POLICY: Policy Gradient / Q-Convergence',
    },
    subnet: {
      name: 'ACADEMIC LAN SUBNET',
      role: 'Heterogeneous Campus Environment',
      details: 'Resource-constrained switch topology supporting university research, student workstations, and administrative traffic.',
      status: 'BANDWIDTH PRESERVATION: Priority 1',
    },
    sink: {
      name: 'SECURE MITIGATION SINK',
      role: 'Dynamic Rate Limiter & Rule Dispatch',
      details: 'Applies automated gateway drop rules and selective port dampening, isolating zero-day streams while maintaining legitimate academic connectivity.',
      status: 'MITIGATION LATENCY: Real-time',
    },
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-violet-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span>MISSION BRIEFING // 0x3E_CYBER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            RL Zero-Day Mitigation: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Autonomous Cyber Defense</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/projects'); }}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-mono text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PROJECTS</span>
          </button>
          
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-violet-950 hover:bg-violet-900 text-violet-300 border border-violet-700 font-mono text-xs transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>WORLD MAP</span>
          </button>
        </div>
      </div>

      {/* Hero Mission Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
        {/* Left Column: Project Abstract & Methodology (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0b081a] border border-violet-500/30 shadow-xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-950 text-violet-300 border border-violet-700">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950/70 text-blue-300 border border-blue-600/50">
                Status: {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-white">
                {project.fullTitle}
              </h2>
              <p className="text-xs font-mono text-slate-400 mt-1">
                International Conference Research Paper (2026)
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Actions: Copy Title + Repo Link */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={handleCopyTitle}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-violet-400" />
                    <span>Copy Full Project Title</span>
                  </>
                )}
              </button>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-violet-950 hover:bg-violet-900 text-violet-300 border border-violet-500 text-xs font-mono transition-colors"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="p-6 rounded-3xl bg-[#0b081a] border border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold flex items-center space-x-2">
              <Activity className="w-4 h-4 text-violet-400" />
              <span>KEY CYBERSECURITY DEFENSE HIGHLIGHTS</span>
            </h3>
            <ul className="space-y-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-violet-400 font-mono font-bold mt-0.5">&gt;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Network Topology (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Interactive Topology Visualizer */}
          <div className="p-6 rounded-3xl bg-[#080614] border border-violet-500/40 shadow-[0_0_35px_rgba(139,92,246,0.1)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-violet-400">
              <div className="flex items-center space-x-2">
                <Network className="w-4 h-4 text-violet-400" />
                <span className="font-bold tracking-wider">TOPOLOGY SIMULATOR</span>
              </div>
              <span className="text-[10px] bg-violet-950 text-violet-300 px-2 py-0.5 rounded border border-violet-800">
                CONCEPTUAL
              </span>
            </div>

            {/* Custom Interactive SVG Topology Map */}
            <div className="py-2 flex items-center justify-center">
              <svg viewBox="0 0 380 200" className="w-full h-auto">
                {/* Connecting Bus Lines */}
                <line x1="70" y1="100" x2="190" y2="50" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="70" y1="100" x2="190" y2="150" stroke="#00f0ff" strokeWidth="2" />
                <line x1="190" y1="50" x2="310" y2="100" stroke="#8b5cf6" strokeWidth="2" />
                <line x1="190" y1="150" x2="310" y2="100" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />

                {/* Node 1: Ingress Gateway */}
                <g 
                  onClick={() => { soundEngine.playHover(); setActiveNode('gateway'); }}
                  className="cursor-pointer group"
                >
                  <circle cx="70" cy="100" r="26" fill="#0d1424" stroke={activeNode === 'gateway' ? '#ffffff' : '#00f0ff'} strokeWidth="2.5" />
                  <text x="70" y="96" textAnchor="middle" fill="#00f0ff" fontSize="9" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
                  <text x="70" y="108" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Scapy Ingress</text>
                </g>

                {/* Node 2: RL Agent */}
                <g 
                  onClick={() => { soundEngine.playHover(); setActiveNode('rl_agent'); }}
                  className="cursor-pointer group"
                >
                  <circle cx="190" cy="50" r="30" fill="#201138" stroke={activeNode === 'rl_agent' ? '#ffffff' : '#a855f7'} strokeWidth="3" />
                  <text x="190" y="46" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontFamily="monospace" fontWeight="bold">RL AGENT</text>
                  <text x="190" y="58" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="monospace">Policy Engine</text>
                </g>

                {/* Node 3: LAN Subnet */}
                <g 
                  onClick={() => { soundEngine.playHover(); setActiveNode('subnet'); }}
                  className="cursor-pointer group"
                >
                  <circle cx="190" cy="150" r="26" fill="#0d1424" stroke={activeNode === 'subnet' ? '#ffffff' : '#38bdf8'} strokeWidth="2.5" />
                  <text x="190" y="146" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">LAN SUBNET</text>
                  <text x="190" y="158" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Academic Host</text>
                </g>

                {/* Node 4: Secure Sink */}
                <g 
                  onClick={() => { soundEngine.playHover(); setActiveNode('sink'); }}
                  className="cursor-pointer group"
                >
                  <circle cx="310" cy="100" r="26" fill="#0d1424" stroke={activeNode === 'sink' ? '#ffffff' : '#10b981'} strokeWidth="2.5" />
                  <text x="310" y="96" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">SINK</text>
                  <text x="310" y="108" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Mitigated</text>
                </g>
              </svg>
            </div>

            {/* Selected Node Inspector */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 font-mono text-xs">
              <div className="text-violet-400 font-bold flex items-center justify-between">
                <span>{nodeTelemetry[activeNode].name}</span>
                <span className="text-[10px] text-slate-500">CLICK TO SWITCH</span>
              </div>
              <div className="text-slate-200 font-semibold">{nodeTelemetry[activeNode].role}</div>
              <p className="text-slate-400 font-sans text-xs pt-1">
                {nodeTelemetry[activeNode].details}
              </p>
              <div className="text-[10px] text-emerald-400 font-semibold pt-1">
                STATUS: {nodeTelemetry[activeNode].status}
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-400 italic text-center">
              * Research model illustrating packet routing. Not a live threat mitigation dashboard.
            </div>
          </div>

          {/* Technology Toolchain */}
          <div className="p-6 rounded-3xl bg-[#0b081a] border border-slate-800 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-400">
              MISSION TOOLCHAIN
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-900 border border-violet-900/60 text-xs text-violet-300 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
