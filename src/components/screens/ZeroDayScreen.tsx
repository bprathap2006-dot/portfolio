import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { profileData } from '../../data/profileData';
import { 
  ArrowLeft, 
  Network, 
  Copy, 
  Check 
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';

interface ZeroDayScreenProps {
  onBack?: () => void;
}

export const ZeroDayScreen: React.FC<ZeroDayScreenProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const [activeStage, setActiveStage] = useState(1);
  const project = projectsData[1];

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(project.fullTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/#projects';
    }
  };

  const mitigationStages = [
    {
      num: '01',
      title: 'Real-Time Packet Ingestion',
      desc: 'Sniffing raw network packets at layer 2/3 using Scapy on local subnet interfaces.',
      focus: 'Scapy Packet Sniffer',
    },
    {
      num: '02',
      title: 'State Representation Vector',
      desc: 'Formulating network telemetry (flow rates, port scan heuristics, entropy spikes) into numerical state tensors.',
      focus: 'State Space Matrix',
    },
    {
      num: '03',
      title: 'RL Policy Action Selection',
      desc: 'Q-Learning / Deep Q-Network policy selecting an autonomous mitigation action (Rate limit, IP Quarantine, VLAN Isolate).',
      focus: 'TensorFlow RL Policy',
    },
    {
      num: '04',
      title: 'Environment Feedback & Reward',
      desc: 'Computing reward signals based on threat neutralization speed versus normal traffic preservation.',
      focus: 'Reward Optimization',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              <span>// Research Engineering Dossier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              RL Zero-Day Attack Mitigation Framework
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
              Autonomous reinforcement learning defense protocols for resource-constrained academic networks.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleBack}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-soft-sm transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  4th Int. Conference Paper
                </span>
              </div>

              <div>
                <h2 className="text-xl font-display font-extrabold text-slate-900">
                  {project.fullTitle}
                </h2>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Presented at Surya Group of Institutions &bull; Academic Network Defense
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {project.fullDescription}
              </p>

              {/* Technologies */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3 items-center">
                <button
                  onClick={handleCopyTitle}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copied ? 'Title Copied' : 'Copy Project Title'}</span>
                </button>

                <a
                  href={project.repoUrl || profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Network Simulator Visual (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center space-x-2">
                  <Network className="w-4 h-4 text-emerald-600" />
                  <span>Network Topology Simulator</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600">Active Defense</span>
              </div>

              {/* Topology Diagram */}
              <div className="py-4 relative h-40 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100">
                <svg className="w-full h-full" viewBox="0 0 280 140">
                  <line x1="140" y1="70" x2="50" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="70" x2="230" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="140" y1="70" x2="60" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="140" y1="70" x2="220" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                  
                  <circle cx="50" cy="40" r="13" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="50" y="44" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">HOST A</text>
                  
                  <circle cx="230" cy="40" r="13" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="230" y="44" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">HOST B</text>
                  
                  <circle cx="60" cy="110" r="13" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="60" y="114" textAnchor="middle" fontSize="9" fill="#b91c1c" fontWeight="bold">THREAT</text>
                  
                  <circle cx="220" cy="110" r="13" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
                  <text x="220" y="114" textAnchor="middle" fontSize="9" fill="#047857" fontWeight="bold">LAN 02</text>

                  <circle cx="140" cy="70" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                  <text x="140" y="74" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">RL AGENT</text>
                </svg>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 text-xs text-emerald-900 leading-relaxed space-y-1">
                <span className="font-bold block text-emerald-950">Autonomous Adaptation:</span>
                <p className="text-[11px]">
                  Unlike signature-based intrusion detection systems that fail against novel attack vectors, reinforcement learning dynamically updates penalty weights based on continuous throughput monitoring.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mitigation Stages */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 block mb-1">
              Reinforcement Learning Loop
            </span>
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Autonomous Attack Mitigation Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {mitigationStages.map((stage, idx) => (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeStage === idx
                    ? 'bg-emerald-50/70 border-emerald-400 shadow-sm'
                    : 'bg-[#faf9f6] border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 font-mono">
                    STAGE {stage.num}
                  </span>
                  {activeStage === idx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  )}
                </div>
                <h4 className="font-display font-bold text-xs text-slate-900 line-clamp-2">
                  {stage.title}
                </h4>
                <span className="text-[10px] text-slate-600 font-mono mt-2 block">
                  {stage.focus}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Details */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-display font-bold block mb-1">
              {mitigationStages[activeStage].title} Details:
            </strong>
            <p>{mitigationStages[activeStage].desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
