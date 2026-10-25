import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types/portfolio';
import { 
  FlaskConical, 
  Activity, 
  Network, 
  ExternalLink, 
  Copy, 
  Check, 
  Info, 
  X, 
  ChevronRight, 
  ShieldAlert, 
  Radio, 
  Layers
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyTitle = (project: ProjectItem) => {
    navigator.clipboard.writeText(project.fullTitle);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="projects" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 03 // RESEARCH & ENGINEERING LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            THE LAB: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Flagship Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Exploratory architectures combining deep learning acoustic forensics and reinforcement learning cybersecurity protocols.
          </p>
        </div>

        {/* Project 1: DeepShield */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1324] via-[#080d19] to-[#060912] border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer: Audio Waveform & Conceptual Pipeline (Col 6) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-[#070b14] border border-cyan-500/20 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-cyan-400">
                  <div className="flex items-center space-x-2">
                    <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
                    <span className="font-semibold tracking-wider">SPECTRAL WAVEFORM SIMULATOR</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    CONCEPTUAL VISUALIZATION
                  </span>
                </div>

                {/* Animated Audio Waveform Graphic */}
                <div className="my-5 h-28 flex items-center justify-between gap-1 px-2">
                  {[45, 78, 30, 92, 60, 85, 40, 100, 65, 30, 90, 75, 40, 95, 80, 50, 88, 35, 70, 95, 60, 40, 85, 30].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-cyan-600 via-cyan-400 to-violet-400 rounded-full transition-all duration-300"
                      style={{
                        height: `${h}%`,
                        opacity: i % 2 === 0 ? 0.9 : 0.6,
                        animation: `pulse ${1.2 + (i % 5) * 0.2}s ease-in-out infinite alternate`,
                      }}
                    />
                  ))}
                </div>

                {/* Conceptual Pipeline Steps */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AUDIO FORENSICS PIPELINE (ILLUSTRATIVE)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono text-center">
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                      1. Raw Audio (.wav)
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                      2. Librosa Preprocess
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-cyan-300">
                      3. MFCC Extraction
                    </div>
                    <div className="p-2 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 font-semibold">
                      4. Neural Classifier
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[10px] font-mono text-slate-400 italic">
                  * Diagram illustrates the research architecture. No real audio is being processed in browser.
                </div>
              </div>
            </div>

            {/* Description & Controls (Col 6) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {projectsData[0].category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-amber-950/60 text-amber-300 border border-amber-600/40">
                  Status: {projectsData[0].status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                  {projectsData[0].name}
                </h3>
                <p className="text-sm font-mono text-cyan-300/90 mt-1">
                  {projectsData[0].fullTitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {projectsData[0].shortDescription}
              </p>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  TECHNOLOGIES EMPLOYED
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectsData[0].technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModalProject(projectsData[0])}
                  className="px-5 py-2.5 rounded-lg font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Project Details</span>
                </button>

                <button
                  onClick={() => handleCopyTitle(projectsData[0])}
                  className="px-4 py-2.5 rounded-lg font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  title="Copy Full Project Title"
                >
                  {copiedId === projectsData[0].id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Full Title</span>
                    </>
                  )}
                </button>

                {/* Verified Repo Link (only if provided in config) */}
                {projectsData[0].repoUrl && (
                  <a
                    href={projectsData[0].repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg font-mono text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-violet-500/50 transition-colors flex items-center space-x-2"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Project 2: RL Zero-Day Mitigation */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1324] via-[#080d19] to-[#060912] border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer: Network Topology & Mitigation Nodes (Col 6) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-[#070b14] border border-violet-500/20 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-violet-400">
                  <div className="flex items-center space-x-2">
                    <Network className="w-4 h-4 text-violet-400" />
                    <span className="font-semibold tracking-wider">NETWORK TOPOLOGY SIMULATOR</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    CONCEPTUAL VISUALIZATION
                  </span>
                </div>

                {/* Custom SVG Network Topology */}
                <div className="my-4 py-2 flex items-center justify-center">
                  <svg viewBox="0 0 460 180" className="w-full max-w-md h-auto">
                    {/* Connection Lines */}
                    <line x1="80" y1="90" x2="230" y2="40" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                    <line x1="80" y1="90" x2="230" y2="140" stroke="#00f0ff" strokeWidth="2" />
                    <line x1="230" y1="40" x2="380" y2="90" stroke="#8b5cf6" strokeWidth="2" />
                    <line x1="230" y1="140" x2="380" y2="90" stroke="#00f0ff" strokeWidth="2" strokeDasharray="2 2" />

                    {/* Nodes */}
                    {/* Node 1: Ingress Gateway */}
                    <circle cx="80" cy="90" r="24" fill="#0d1424" stroke="#00f0ff" strokeWidth="2" />
                    <text x="80" y="86" textAnchor="middle" fill="#00f0ff" fontSize="10" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
                    <text x="80" y="98" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Scapy Ingress</text>

                    {/* Node 2: RL Defense Agent */}
                    <circle cx="230" cy="40" r="28" fill="#1e1035" stroke="#a855f7" strokeWidth="2.5" />
                    <text x="230" y="36" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="monospace" fontWeight="bold">RL AGENT</text>
                    <text x="230" y="48" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="monospace">Policy Engine</text>

                    {/* Node 3: Academic Subnet */}
                    <circle cx="230" cy="140" r="24" fill="#0d1424" stroke="#38bdf8" strokeWidth="2" />
                    <text x="230" y="136" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">LAN SUBNET</text>
                    <text x="230" y="148" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Resource Lim.</text>

                    {/* Node 4: Target Server / Mitigated Sink */}
                    <circle cx="380" cy="90" r="24" fill="#0d1424" stroke="#10b981" strokeWidth="2" />
                    <text x="380" y="86" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">SECURE SINK</text>
                    <text x="380" y="98" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Mitigated</text>
                  </svg>
                </div>

                {/* Mitigation Flow Logic */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center space-x-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-violet-400" />
                    <span>AUTONOMOUS MITIGATION LOOP (CONCEPTUAL)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      1. Telemetry Capture
                    </div>
                    <div className="p-2 rounded bg-violet-950/70 border border-violet-800 text-violet-300 font-semibold">
                      2. RL Policy Action
                    </div>
                    <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                      3. Dynamic Throttle
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[10px] font-mono text-slate-400 italic">
                  * Illustrative model of academic LAN defense. Not a claim of real-time live threat monitoring.
                </div>
              </div>
            </div>

            {/* Description & Controls (Col 6) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-950 text-violet-300 border border-violet-800">
                  {projectsData[1].category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-blue-950/60 text-blue-300 border border-blue-600/40">
                  {projectsData[1].status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                  {projectsData[1].name}
                </h3>
                <p className="text-sm font-mono text-violet-300/90 mt-1">
                  {projectsData[1].fullTitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {projectsData[1].shortDescription}
              </p>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  TECHNOLOGIES EMPLOYED
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectsData[1].technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModalProject(projectsData[1])}
                  className="px-5 py-2.5 rounded-lg font-mono text-xs font-semibold text-slate-950 bg-violet-400 hover:bg-violet-300 transition-colors flex items-center space-x-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Project Details</span>
                </button>

                <button
                  onClick={() => handleCopyTitle(projectsData[1])}
                  className="px-4 py-2.5 rounded-lg font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  title="Copy Full Project Title"
                >
                  {copiedId === projectsData[1].id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Full Title</span>
                    </>
                  )}
                </button>

                {/* Verified Repo Link (only if provided in config) */}
                {projectsData[1].repoUrl && (
                  <a
                    href={projectsData[1].repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg font-mono text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-violet-500/50 transition-colors flex items-center space-x-2"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Project Architecture & Details Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-cyan-500/40 shadow-2xl space-y-6">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    SYSTEM ARCHITECTURE BREAKDOWN // {activeModalProject.name}
                  </span>
                  <h3 id="modal-project-title" className="text-xl sm:text-2xl font-display font-bold text-slate-100 mt-1">
                    {activeModalProject.fullTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  SYSTEM OVERVIEW
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {activeModalProject.fullDescription}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.architectureHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pipeline Sequence */}
              {activeModalProject.pipelineSteps && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400">
                    DATA FLOW PIPELINE SEQUENCE
                  </h4>
                  <div className="space-y-1.5 font-mono text-xs">
                    {activeModalProject.pipelineSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-800/80">
                        <span className="text-violet-400 font-semibold">[0{idx + 1}]</span>
                        <span className="text-slate-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Modal Action */}
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[11px] font-mono text-slate-400">
                  DOCUMENTED IN src/data/projectsData.ts
                </span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Return to Projects
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
