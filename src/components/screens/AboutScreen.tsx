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
  Terminal,
  FileText,
  Download
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
            
            {/* Real Photograph Hologram Cyber Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 flex items-center justify-center">
              {/* Outer rotating telemetry dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow" />
              {/* Counter-rotating violet accent ring */}
              <div className="absolute -inset-3 rounded-full border border-violet-500/25 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Orbiting cyber nodes */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] animate-pulse" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />

              {/* Corner reticle brackets */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-violet-400" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-violet-400" />
              
              {/* Circular Cyber Photo Frame */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(0,240,255,0.35)] relative group bg-slate-900">
                <img 
                  src="/images/prathap-profile.jpg" 
                  alt="Prathap B - Aspiring Software Developer" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                    if (fb) (fb as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="photo-fallback hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 text-cyan-300 font-display font-black text-3xl">
                  PB
                </div>
                {/* Holographic sweep light */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />
              </div>
            </div>

            <div className="text-center pb-2">
              <span className="font-display font-bold text-lg text-white">
                PRATHAP B
              </span>
              <p className="text-[11px] font-mono text-cyan-400 tracking-wider">
                ASPIRING SOFTWARE DEVELOPER &bull; B.TECH IT
              </p>
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
                onClick={() => { soundEngine.playSelect(); navigateTo('/contact'); }}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-xs font-mono"
              >
                <span>CONTACT</span>
              </button>
            </div>

            {/* Resume Access Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <button
                onClick={() => { soundEngine.playSelect(); navigateTo('/resume'); }}
                className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/90 text-cyan-300 border border-cyan-500/50 text-xs font-mono font-semibold transition-colors"
                title="Open the verified original resume viewer"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW RESUME</span>
              </button>

              <a
                href="/Prathap-B-Resume.pdf"
                download="Prathap-B-Resume.pdf"
                onClick={() => soundEngine.playScan()}
                className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
                title="Download original Prathap-B-Resume.pdf directly"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>DOWNLOAD</span>
              </a>
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
