import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types/portfolio';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  X, 
  Radio, 
  Network, 
  GitBranch,
  Layers
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { navigateTo } = useGame();
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
    <section id="projects" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B] bg-[#F5F1EA]/40 dark:bg-[#161B26]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            03 &bull; Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Flagship research and software engineering projects.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Spacious architectural explorations combining deep neural acoustic forensics and reinforcement learning cybersecurity protocols.
          </p>
        </div>

        {/* Spacious Editorial Project Showcases */}
        <div className="space-y-16">
          
          {/* Project 1: DeepShield */}
          <div className="rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md hover:shadow-editorial-xl hover:border-blue-600/40 transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-7 sm:p-12">
              
              {/* Left Column: Clean Audio Diagram & Processing Pipeline (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-7 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
                  
                  {/* Diagram Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC] dark:border-[#232A3B] text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
                      <Radio className="w-4 h-4" />
                      <span>Audio Forensics Pipeline Architecture</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#71717A] bg-white dark:bg-[#161B26] px-2.5 py-0.5 rounded border border-[#E8E4DC] dark:border-[#232A3B]">
                      Librosa 22.05 kHz
                    </span>
                  </div>

                  {/* Clean Technical Acoustic Illustration */}
                  <div className="my-7 h-28 flex items-center justify-between gap-1.5 px-2">
                    {[38, 72, 32, 88, 52, 84, 40, 96, 64, 30, 86, 74, 36, 90, 76, 46, 82, 34, 66, 92, 56, 36, 80, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-blue-600 dark:bg-blue-500 rounded-sm transition-all duration-300 group-hover:bg-blue-700"
                        style={{
                          height: `${h}%`,
                          opacity: i % 2 === 0 ? 0.9 : 0.6,
                        }}
                      />
                    ))}
                  </div>

                  {/* 4-Step Architecture Steps */}
                  <div className="pt-4 border-t border-[#E8E4DC] dark:border-[#232A3B] text-[11px] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#52525B] dark:text-[#A1A1AA]">
                      1. Audio (.wav)
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#52525B] dark:text-[#A1A1AA]">
                      2. Librosa Trim
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#52525B] dark:text-[#A1A1AA]">
                      3. MFCC Extract
                    </div>
                    <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                      4. Neural Verdict
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Project Information (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
                    AI / Audio Forensics
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60">
                    {project1.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5] leading-snug">
                  {project1.fullTitle}
                </h3>

                <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {project1.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project1.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => navigateTo('/projects/deepshield')}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    title="Open dedicated project detail page"
                  >
                    <span>Dedicated Detail Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveModalProject(project1)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-white bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1F2636] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Quick Overview</span>
                  </button>

                  <button
                    onClick={() => handleCopyTitle(project1)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-white bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1F2636] transition-colors"
                  >
                    {copiedId === project1.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Title Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#71717A]" />
                        <span>Copy Title</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Project 2: Zero-Day Attack Mitigation */}
          <div className="rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md hover:shadow-editorial-xl hover:border-blue-600/40 transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-7 sm:p-12">
              
              {/* Left Column: Refined Network Topology Diagram (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-7 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
                  
                  {/* Diagram Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC] dark:border-[#232A3B] text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
                      <Network className="w-4 h-4" />
                      <span>Campus Topology & Mitigation Diagram</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#71717A] bg-white dark:bg-[#161B26] px-2.5 py-0.5 rounded border border-[#E8E4DC] dark:border-[#232A3B]">
                      Scapy + RL Agent
                    </span>
                  </div>

                  {/* Refined SVG Network Diagram */}
                  <div className="my-6 h-36 flex items-center justify-center">
                    <svg className="w-full h-full max-w-sm mx-auto" viewBox="0 0 320 150">
                      {/* Connection lines */}
                      <line x1="160" y1="75" x2="65" y2="35" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="160" y1="75" x2="65" y2="115" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="160" y1="75" x2="255" y2="35" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="160" y1="75" x2="255" y2="115" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      
                      {/* Central Mitigation Agent Node */}
                      <circle cx="160" cy="75" r="25" fill="#1D4ED8" />
                      <text x="160" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                        RL AGENT
                      </text>

                      {/* Edge Nodes */}
                      <circle cx="65" cy="35" r="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                      <text x="65" y="39" textAnchor="middle" fill="#18181B" fontSize="8" fontWeight="bold">HOST A</text>

                      <circle cx="65" cy="115" r="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                      <text x="65" y="119" textAnchor="middle" fill="#18181B" fontSize="8" fontWeight="bold">HOST B</text>

                      <circle cx="255" cy="35" r="16" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
                      <text x="255" y="39" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="bold">THREAT</text>

                      <circle cx="255" cy="115" r="16" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                      <text x="255" y="119" textAnchor="middle" fill="#065F46" fontSize="8" fontWeight="bold">SINKHOLE</text>
                    </svg>
                  </div>

                  {/* 3-Step Mitigation Flow */}
                  <div className="pt-4 border-t border-[#E8E4DC] dark:border-[#232A3B] text-[11px] grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#52525B] dark:text-[#A1A1AA]">
                      1. Scapy Sniffer
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#52525B] dark:text-[#A1A1AA]">
                      2. Reward Policy
                    </div>
                    <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                      3. Dynamic ACLs
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Project Information (Col 6) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/60">
                    Cybersecurity / Reinforcement Learning
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
                    {project2.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5] leading-snug">
                  {project2.fullTitle}
                </h3>

                <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {project2.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project2.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => navigateTo('/projects/zero-day-mitigation')}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    title="Open dedicated project detail page"
                  >
                    <span>Dedicated Detail Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveModalProject(project2)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-white bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1F2636] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Quick Overview</span>
                  </button>

                  <button
                    onClick={() => handleCopyTitle(project2)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-white bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1F2636] transition-colors"
                  >
                    {copiedId === project2.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Title Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#71717A]" />
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

      {/* Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18181B]/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-xl p-7 sm:p-9 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#F0ECE4] dark:border-[#232A3B] pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5] mt-1">
                  {activeModalProject.fullTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-[#71717A] hover:text-[#18181B] dark:hover:text-white hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>{activeModalProject.fullDescription}</p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#18181B] dark:text-[#F4F4F5] uppercase tracking-wider block">
                Key Technical Highlights
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {activeModalProject.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <span className="text-xs font-bold text-[#18181B] dark:text-[#F4F4F5] uppercase tracking-wider block mb-2">
                Technologies Applied
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repository Status */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start space-x-3 text-xs text-blue-900 dark:text-blue-200">
              <GitBranch className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block">Repository Notice:</span>
                <span>
                  Active academic project in development. Repository is maintained internally and will be published following institutional review.
                </span>
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] border border-[#E8E4DC] dark:border-[#232A3B] transition-colors"
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
