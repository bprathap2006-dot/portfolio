import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types/portfolio';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  X, 
  Radio, 
  Network, 
  GitBranch
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyTitle = (project: ProjectItem) => {
    navigator.clipboard.writeText(project.fullTitle);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const project1 = projectsData[0]; // DeepShield
  const project2 = projectsData[1]; // Zero-Day Mitigation

  return (
    <section id="projects" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Flagship research and software engineering projects.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Architectures combining deep learning acoustic forensics and reinforcement learning cybersecurity protocols.
          </p>
        </div>

        {/* Projects Grid: 2 Large Flagship Showcase Cards */}
        <div className="space-y-12">
          
          {/* Project 1: DeepShield */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-md hover:shadow-studio-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              
              {/* Left: Waveform Visualization & Pipeline (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-800/70 border border-stone-200/80 dark:border-slate-700/80">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    <span className="flex items-center space-x-1.5 font-semibold text-blue-600 dark:text-blue-400">
                      <Radio className="w-4 h-4 animate-pulse" />
                      <span>Acoustic Waveform Forensics</span>
                    </span>
                    <span className="text-[11px] font-mono bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-stone-200 dark:border-slate-700">
                      Librosa 22.05 kHz
                    </span>
                  </div>

                  {/* Waveform Visualizer */}
                  <div className="my-6 h-28 flex items-center justify-between gap-1 px-2">
                    {[35, 70, 28, 90, 55, 82, 38, 98, 62, 28, 88, 72, 38, 92, 78, 48, 85, 32, 68, 92, 58, 38, 82, 28].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-cyan-400 rounded-full transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          opacity: i % 2 === 0 ? 0.95 : 0.65,
                        }}
                      />
                    ))}
                  </div>

                  {/* Pipeline Preview */}
                  <div className="pt-3 border-t border-stone-200 dark:border-slate-700 text-[11px] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-850 text-slate-700 dark:text-slate-300">
                      1. Audio Ingestion
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-850 text-slate-700 dark:text-slate-300">
                      2. Librosa Trim
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-850 text-slate-700 dark:text-slate-300">
                      3. MFCC Extraction
                    </div>
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold">
                      4. Neural Verdict
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Project Details (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    AI / Audio Forensics
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                    {project1.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                  {project1.fullTitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project1.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project1.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project1)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleCopyTitle(project1)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedId === project1.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Title Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Title</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Project 2: RL Zero-Day Attack Mitigation */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-md hover:shadow-studio-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              
              {/* Left: Network Topology Diagram (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-800/70 border border-stone-200/80 dark:border-slate-700/80">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    <span className="flex items-center space-x-1.5 font-semibold text-blue-600 dark:text-blue-400">
                      <Network className="w-4 h-4" />
                      <span>Campus Topology & Packet Inspection</span>
                    </span>
                    <span className="text-[11px] font-mono bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-stone-200 dark:border-slate-700">
                      Scapy + RL Agent
                    </span>
                  </div>

                  {/* Refined SVG Network Diagram */}
                  <div className="my-4 h-40 flex items-center justify-center relative">
                    <svg className="w-full h-full max-w-sm mx-auto" viewBox="0 0 320 160">
                      {/* Connection Lines */}
                      <line x1="160" y1="80" x2="60" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="160" y1="80" x2="60" y2="120" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="160" y1="80" x2="260" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="160" y1="80" x2="260" y2="120" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                      
                      {/* Central Mitigation Agent Node */}
                      <circle cx="160" cy="80" r="26" fill="#2563EB" />
                      <text x="160" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        RL AGENT
                      </text>

                      {/* Edge Nodes */}
                      <circle cx="60" cy="40" r="16" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
                      <text x="60" y="44" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="bold">LAN 1</text>

                      <circle cx="60" cy="120" r="16" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
                      <text x="60" y="124" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="bold">LAN 2</text>

                      <circle cx="260" cy="40" r="16" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
                      <text x="260" y="44" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="bold">THREAT</text>

                      <circle cx="260" cy="120" r="16" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                      <text x="260" y="124" textAnchor="middle" fill="#065F46" fontSize="8" fontWeight="bold">SINKHOLE</text>
                    </svg>
                  </div>

                  {/* Pipeline Preview */}
                  <div className="pt-3 border-t border-stone-200 dark:border-slate-700 text-[11px] grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-850 text-slate-700 dark:text-slate-300">
                      1. Scapy Sniffer
                    </div>
                    <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-850 text-slate-700 dark:text-slate-300">
                      2. Reward Function
                    </div>
                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold">
                      3. Dynamic ACLs
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Project Details (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
                    Cybersecurity / Reinforcement Learning
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    {project2.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                  {project2.fullTitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project2.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project2.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project2)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleCopyTitle(project2)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedId === project2.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Title Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Title</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-studio-xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {activeModalProject.fullTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>{activeModalProject.fullDescription}</p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
                Key Technical Highlights
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {activeModalProject.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                Technologies Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Source Repository Notice */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-start space-x-3 text-xs text-blue-900 dark:text-blue-200">
              <GitBranch className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold block">Repository Status:</span>
                <span>
                  {activeModalProject.repoUrl ? (
                    <a href={activeModalProject.repoUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                      View Verified GitHub Repository
                    </a>
                  ) : (
                    "Active final-year academic project. Code repository is maintained internally and will be published upon academic milestone review."
                  )}
                </span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-700 transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
