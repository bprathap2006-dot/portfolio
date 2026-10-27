import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  GitBranch 
} from 'lucide-react';

export const ZeroDayScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copied, setCopied] = useState(false);
  const project = projectsData[1];

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(project.fullTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const defensePhases = [
    {
      phase: '01',
      title: 'Real-Time Packet Ingestion',
      desc: 'Raw network telemetry captured via Scapy sniffer on internal campus interfaces.',
      action: 'Entropy Tracking',
    },
    {
      phase: '02',
      title: 'State Representation Vector',
      desc: 'Translating connection rates, SYN/ACK ratios, and flow entropy into Markov decision vectors.',
      action: 'State Space Matrix',
    },
    {
      phase: '03',
      title: 'Reinforcement Learning Agent Action',
      desc: 'Deep Q-learning / policy network evaluates whether current anomaly represents a zero-day exploit.',
      action: 'Reward Optimization',
    },
    {
      phase: '04',
      title: 'Autonomous Mitigation Synthesis',
      desc: 'Dynamically generating reactive firewall rules, rate-limiting rules, or isolation ACLs without human delay.',
      action: 'Rule Injection',
    },
    {
      phase: '05',
      title: 'System State Normalization',
      desc: 'Ensuring legitimate student traffic and educational services remain uninterrupted.',
      action: 'Telemetry Feedback',
    },
  ];

  return (
    <div className="relative min-h-[92vh] pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Header with Return Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-slate-800 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
            <span>Project Deep Dive &bull; Cybersecurity / Reinforcement Learning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            {project.name}
          </h1>
        </div>

        <button
          onClick={() => navigateTo('/')}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-stone-50 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 text-xs font-semibold shadow-sm transition-all self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>
      </div>

      {/* Main Content Card */}
      <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-lg space-y-8">
        
        {/* Full Title & Status */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/60">
              Autonomous Cybersecurity Protocol
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              {project.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            {project.fullTitle}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {project.fullDescription}
          </p>
        </div>

        {/* 5-Phase Mitigation Defense Walkthrough */}
        <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
            Autonomous Mitigation Defense Cycle
          </span>

          <div className="space-y-3">
            {defensePhases.map((phase) => (
              <div 
                key={phase.phase}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {phase.phase}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {phase.desc}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-stone-200 dark:border-slate-700 self-start sm:self-center">
                  {phase.action}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
            Core Architectural Innovations
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {project.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 dark:bg-slate-850 border border-stone-200/60 dark:border-slate-800 flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="pt-2">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
            Technology Stack & Frameworks
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Academic Publication Reference & Copy */}
        <div className="pt-4 border-t border-stone-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <GitBranch className="w-4 h-4 text-indigo-600" />
            <span>Presented at the 4th International Conference (Surya Group of Institutions, 2026).</span>
          </div>

          <button
            onClick={handleCopyTitle}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Title Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Project Title</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
