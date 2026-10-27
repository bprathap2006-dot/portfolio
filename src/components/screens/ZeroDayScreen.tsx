import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Network, 
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
    navigator.clipboard.writeText(project.fullTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const nodeTelemetry = {
    gateway: {
      name: 'Ingress Gateway Sensor',
      role: 'Low-Overhead Packet Telemetry via Scapy',
      details: 'Continuously monitors TCP/IP packet header metrics, flow velocity, and entropy variance without deep payload extraction overhead.',
      status: 'Sampling Rate: 10,000 pps (Optimized)',
    },
    rl_agent: {
      name: 'Autonomous RL Policy Engine',
      role: 'Reinforcement Learning Decision Loop',
      details: 'Evaluates network state against learned reward policy. Formulates dynamic rate-limiting actions to throttle anomalous zero-day bursts.',
      status: 'Policy: Policy Gradient / Q-Convergence',
    },
    subnet: {
      name: 'Academic LAN Subnet',
      role: 'Heterogeneous Campus Environment',
      details: 'Resource-constrained switch topology supporting university research, student workstations, and administrative traffic.',
      status: 'Bandwidth Preservation: Priority 1',
    },
    sink: {
      name: 'Secure Mitigation Sink',
      role: 'Dynamic Rate Limiter & Rule Dispatch',
      details: 'Applies automated gateway drop rules and selective port dampening, isolating zero-day streams while maintaining legitimate academic connectivity.',
      status: 'Mitigation Latency: Sub-second',
    },
  };

  return (
    <div className="relative min-h-[92vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fade-in font-sans">
      
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC] dark:border-[#232A3B] mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-purple-600 inline-block" />
            <span>Project Detail &bull; Cybersecurity &bull; Reinforcement Learning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Reinforcement Learning: <span className="text-purple-600 dark:text-purple-400">Zero-Day Mitigation</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold transition-all shadow-editorial-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Mission Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
        {/* Left Column: Mission Details (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                Status: {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
                {project.fullTitle}
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1 font-mono">
                Novel Reinforcement Learning Architecture for Academic Networks
              </p>
            </div>

            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="pt-3 border-t border-[#F0ECE4] dark:border-[#232A3B] flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyTitle}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1A2234] text-xs font-medium text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B] transition-colors"
                title="Copy formal academic project title to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Full Project Title'}</span>
              </button>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-editorial-sm transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>

          </div>

          {/* Technical Stack Tags */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block mb-3">
              Cybersecurity Stack & Toolchain
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Network Topology Simulator (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4] dark:border-[#232A3B] text-xs">
              <span className="font-bold text-purple-600 dark:text-purple-400 flex items-center space-x-1.5">
                <Network className="w-4 h-4" />
                <span>Interactive Network Topology Nodes</span>
              </span>
              <span className="text-[11px] font-mono text-[#71717A] bg-[#F5F1EA] dark:bg-[#0F1219] px-2 py-0.5 rounded border border-[#E8E4DC] dark:border-[#232A3B]">
                Scapy &bull; RL Loop
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {(['gateway', 'rl_agent', 'subnet', 'sink'] as const).map((key) => {
                const node = nodeTelemetry[key];
                const isSelected = activeNode === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveNode(key)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-600 dark:border-purple-500 shadow-editorial-sm'
                        : 'bg-[#FBF9F5] dark:bg-[#0F1219] border-[#E8E4DC] dark:border-[#232A3B] hover:border-purple-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                      Node 0{key === 'gateway' ? 1 : key === 'rl_agent' ? 2 : key === 'subnet' ? 3 : 4}
                    </div>
                    <div className="font-display font-bold text-xs text-[#18181B] dark:text-[#F4F4F5] truncate mt-1">
                      {node.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <div className="p-4 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-2 text-xs">
              <div className="flex items-center justify-between font-semibold text-purple-700 dark:text-purple-300">
                <span>{nodeTelemetry[activeNode].name}</span>
                <Activity className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <p className="text-[#52525B] dark:text-[#A1A1AA] text-xs leading-relaxed">
                {nodeTelemetry[activeNode].details}
              </p>
              <div className="pt-2 border-t border-[#E8E4DC] dark:border-[#232A3B] font-mono text-[11px] text-[#71717A]">
                {nodeTelemetry[activeNode].status}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Autonomous Defense Cycle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h4 className="font-display font-bold text-sm text-[#18181B] dark:text-[#F4F4F5]">
            Packet Header Anomaly Detection
          </h4>
          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Scapy captures flow velocity and entropy shifts without inspecting payload contents, maintaining low latency on switch ports.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h4 className="font-display font-bold text-sm text-[#18181B] dark:text-[#F4F4F5]">
            Reinforcement Learning Decision Loop
          </h4>
          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            The policy agent selects from throttling actions to maximize normal user throughput while penalizing malicious zero-day traffic.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h4 className="font-display font-bold text-sm text-[#18181B] dark:text-[#F4F4F5]">
            Dynamic Gateway Rate Limiting
          </h4>
          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Applies adaptive drop rules at the edge gateway, containing attack propagation without disconnecting normal campus services.
          </p>
        </div>
      </div>

    </div>
  );
};
