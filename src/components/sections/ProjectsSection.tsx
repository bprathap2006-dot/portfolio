import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types/portfolio';
import { 
  ArrowRight, 
  Network, 
  Radio, 
  CheckCircle2, 
  X,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { profileData } from '../../data/profileData';

interface ProjectsSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [isAudioSimulating, setIsAudioSimulating] = useState(true);

  const handleOpenDetail = (project: ProjectItem) => {
    if (onSelectProject) {
      onSelectProject(project.id);
    } else {
      setActiveModalProject(project);
    }
  };

  const handleCopyTitle = (title: string) => {
    navigator.clipboard.writeText(title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="projects" className="relative py-24 bg-white/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Flagship Engineering & Research Projects
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Detailed architectures exploring synthetic acoustic voice forensics and autonomous reinforcement learning cybersecurity frameworks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          
          {/* Card 1: DeepShield */}
          <div className="p-7 sm:p-10 rounded-3xl bg-[#faf9f6] border border-slate-200/90 shadow-soft-md hover:shadow-soft-xl hover:border-blue-400 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Visual Waveform Simulation (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                    <span className="font-semibold text-slate-900 flex items-center space-x-1.5">
                      <Radio className="w-4 h-4 text-blue-600" />
                      <span>Audio Waveform Forensics</span>
                    </span>
                    <button
                      onClick={() => setIsAudioSimulating(!isAudioSimulating)}
                      className="text-[11px] font-sans text-blue-600 hover:underline"
                    >
                      {isAudioSimulating ? 'Pause Motion' : 'Play Motion'}
                    </button>
                  </div>

                  {/* Waveform Bar Graphic */}
                  <div className="py-6 flex items-center justify-between gap-1 h-28">
                    {[35, 65, 25, 80, 55, 95, 40, 75, 100, 60, 30, 85, 70, 45, 90, 60, 40, 80, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-blue-600/80 rounded-full transition-all duration-500 group-hover:bg-blue-600"
                        style={{
                          height: isAudioSimulating ? `${Math.max(15, (h * (0.8 + ((i % 3) * 0.1))))}%` : `${h}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span>Librosa MFCC Extraction</span>
                    <span className="font-mono text-blue-600">22,050 Hz</span>
                  </div>
                </div>

                {/* Pipeline Steps Summary */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Step 1</span>
                    <span className="font-semibold text-slate-800 text-[11px]">Preprocessing</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Step 2</span>
                    <span className="font-semibold text-slate-800 text-[11px]">Spectrogram</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Step 3</span>
                    <span className="font-semibold text-slate-800 text-[11px]">Deep Classifier</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, Tech Stack (Col 7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    AI & Deep Learning
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                    Final-Year Project In Progress
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {projectsData[0].name}
                  </h3>
                  <p className="text-sm font-sans text-slate-600 font-medium mt-1">
                    {projectsData[0].fullTitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {projectsData[0].shortDescription}
                </p>

                {/* Technology Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[0].technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={() => handleOpenDetail(projectsData[0])}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-soft-md hover:-translate-y-0.5"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={projectsData[0].repoUrl || profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Card 2: Zero-Day Mitigation */}
          <div className="p-7 sm:p-10 rounded-3xl bg-[#faf9f6] border border-slate-200/90 shadow-soft-md hover:shadow-soft-xl hover:border-blue-400 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Network Topology Visualization (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                    <span className="font-semibold text-slate-900 flex items-center space-x-1.5">
                      <Network className="w-4 h-4 text-emerald-600" />
                      <span>Network Topology Simulator</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 font-medium">RL AGENT // ACTIVE</span>
                  </div>

                  {/* Network Node Graphic */}
                  <div className="py-4 relative h-36 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 280 140">
                      <line x1="140" y1="70" x2="50" y2="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="140" y1="70" x2="230" y2="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="140" y1="70" x2="60" y2="110" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="140" y1="70" x2="220" y2="110" stroke="#cbd5e1" strokeWidth="1.5" />
                      
                      <circle cx="50" cy="40" r="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                      <text x="50" y="44" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">LAN 1</text>
                      
                      <circle cx="230" cy="40" r="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                      <text x="230" y="44" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">LAN 2</text>
                      
                      <circle cx="60" cy="110" r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="60" y="114" textAnchor="middle" fontSize="9" fill="#b91c1c" fontWeight="bold">ALERT</text>
                      
                      <circle cx="220" cy="110" r="12" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
                      <text x="220" y="114" textAnchor="middle" fontSize="9" fill="#047857" fontWeight="bold">SAFE</text>

                      <circle cx="140" cy="70" r="20" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
                      <text x="140" y="74" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">RL AGENT</text>
                    </svg>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span>Scapy Packet Telemetry</span>
                    <span className="font-sans text-emerald-700 font-medium">Autonomous Shaping</span>
                  </div>
                </div>

                {/* Defense Cycle Summary */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Phase 1</span>
                    <span className="font-semibold text-slate-800 text-[11px]">Telemetry</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Phase 2</span>
                    <span className="font-semibold text-slate-800 text-[11px]">RL Decision</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-600 block">Phase 3</span>
                    <span className="font-semibold text-slate-800 text-[11px]">Mitigation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, Tech Stack (Col 7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Cybersecurity & RL
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    4th Int. Conference Publication
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {projectsData[1].name}
                  </h3>
                  <p className="text-sm font-sans text-slate-600 font-medium mt-1">
                    {projectsData[1].fullTitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {projectsData[1].shortDescription}
                </p>

                {/* Technology Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[1].technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={() => handleOpenDetail(projectsData[1])}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-soft-md hover:-translate-y-0.5"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={projectsData[1].repoUrl || profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mt-2">
                  {activeModalProject.name}
                </h3>
                <p className="text-xs text-slate-600 font-sans mt-0.5">
                  {activeModalProject.fullTitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>{activeModalProject.fullDescription}</p>

              {/* Technologies */}
              <div className="space-y-2 pt-2">
                <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 pt-2">
                <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Key Architectural Features:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {activeModalProject.architectureHighlights.map((f, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleCopyTitle(activeModalProject.fullTitle)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copied ? 'Title Copied' : 'Copy Project Title'}</span>
              </button>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
