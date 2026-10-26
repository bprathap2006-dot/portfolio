import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { profileData } from '../../data/profileData';
import { 
  ArrowLeft, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Sparkles, 
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const AboutScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [selectedTab, setSelectedTab] = useState<'profile' | 'pillars' | 'objective'>('profile');

  const pillars = [
    {
      icon: Code2,
      title: "Algorithmic Problem Solving",
      desc: "Deconstructing challenging bottlenecks into structured, testable, and maintainable software implementations."
    },
    {
      icon: Cpu,
      title: "Intelligent Systems & AI",
      desc: "Investigating deep neural classification, acoustic feature representation (Librosa), and tensor computation."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Mitigation",
      desc: "Analyzing packet telemetry via Scapy and formulating autonomous reinforcement learning mitigation for campus LANs."
    },
    {
      icon: Lightbulb,
      title: "Practical Software Engineering",
      desc: "Transforming theoretical computer science models and academic lab ideas into functioning, production-ready systems."
    },
    {
      icon: Users,
      title: "Collaborative Engineering",
      desc: "Learning continuously from peer developers, open-source communities, and interdisciplinary engineering teams."
    }
  ];

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>SECTOR 01 // [0x1A_CORE]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            IDENTITY CORE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">About Prathap B</span>
          </h1>
        </div>

        <button
          onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
          className="self-start sm:self-auto flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 font-mono text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO WORLD MAP</span>
        </button>
      </div>

      {/* Main Grid: Interactive Hologram Avatar + Terminal Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Hologram Avatar & Live Telemetry (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.08)] relative overflow-hidden">
            
            {/* Holographic Radar Ring Box */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow" />
              <div className="absolute -inset-3 rounded-full border border-violet-500/20 animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 border-2 border-cyan-400/70 shadow-[inset_0_0_30px_rgba(0,240,255,0.3)] flex flex-col items-center justify-center p-3 text-center">
                <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-violet-300">
                  PB
                </span>
                <span className="text-[10px] font-mono text-cyan-300 font-semibold mt-1">
                  PRATHAP B
                </span>
                <span className="text-[9px] font-mono text-slate-400">
                  B.TECH IT (2027)
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-2.5 font-mono text-xs border-t border-slate-800 pt-4">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE // ASPIRING DEV</span>
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">DEGREE:</span>
                <span className="text-slate-200">B.Tech Information Technology</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">COLLEGE:</span>
                <span className="text-slate-200 truncate max-w-[200px]" title={profileData.college}>
                  AKT MCET
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">CGPA:</span>
                <span className="text-amber-400 font-bold">{profileData.cgpa} / 10.0</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">BASE LOCATION:</span>
                <span className="text-slate-300">{profileData.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono"
              >
                <GithubIcon className="w-4 h-4 text-violet-400" />
                <span>GITHUB</span>
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 text-xs font-mono"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </a>

              <button
                onClick={() => navigateTo('/contact')}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-xs font-mono"
              >
                <span>CONTACT</span>
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Terminal Tabs & Dossier (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Headline & Supporting Statement */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-xl space-y-4">
            
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>CORE SYSTEM MOTTO</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
              {profileData.headline}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {profileData.supportingText}
            </p>

            <blockquote className="p-4 rounded-2xl bg-slate-900/80 border-l-4 border-cyan-400 font-mono text-xs sm:text-sm text-cyan-200 italic">
              “{profileData.tagline}”
            </blockquote>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex space-x-2 border-b border-slate-800 pb-2">
            {[
              { id: 'profile', label: 'Biography & Focus' },
              { id: 'pillars', label: 'Core Engineering Pillars' },
              { id: 'objective', label: 'Career Objective' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { soundEngine.playHover(); setSelectedTab(tab.id as any); }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                  selectedTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 rounded-3xl bg-[#080d1a]/80 border border-slate-800 space-y-4 min-h-[220px]">
            {selectedTab === 'profile' && (
              <div className="space-y-3.5 text-sm text-slate-300 font-sans leading-relaxed">
                <p>
                  I am an undergraduate Information Technology student at A.K.T Memorial College of Engineering and Technology (graduating in 2027), deeply enthusiastic about turning computational theory into functional software solutions.
                </p>
                <p>
                  My technical curiosity spans software development, machine intelligence, and modern cybersecurity protocols. I dedicate significant effort to understanding low-level mechanics—from acoustic signal preprocessing and Mel-spectrogram extraction in audio forensics, to raw packet inspection and reinforcement learning decision policies in zero-day attack containment.
                </p>
              </div>
            )}

            {selectedTab === 'pillars' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center space-x-2 text-cyan-400 font-display font-semibold text-xs">
                        <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{p.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {selectedTab === 'objective' && (
              <div className="space-y-3 font-sans text-sm text-slate-300">
                <p className="leading-relaxed">
                  Seeking software developer internships, graduate programs, and junior software engineering roles across software development, AI systems engineering, and cybersecurity.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-900/60 font-mono text-xs text-cyan-300 space-y-1.5">
                  <div className="text-white font-semibold flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>TARGET OPPORTUNITIES:</span>
                  </div>
                  <div>• Software Developer Intern / Junior Engineer</div>
                  <div>• AI / Machine Learning Applied Engineering</div>
                  <div>• Cybersecurity & Network Defense Engineering</div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
