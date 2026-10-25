import React from 'react';
import { profileData } from '../../data/profileData';
import { CapsuleButton } from '../ui/CapsuleButton';
import { DocumentButton } from '../ui/DocumentButton';
import { TerminalButton } from '../ui/TerminalButton';
import { NetworkButton } from '../ui/NetworkButton';
import { SignalButton } from '../ui/SignalButton';
import { Terminal, MapPin, Calendar, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative radial lighting behind hero */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent rounded-full blur-[110px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio, Buttons (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline / System Subheading */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{profileData.tagline}</span>
            </div>

            {/* Name & Professional Title */}
            <div>
              <div className="flex items-center space-x-3 text-slate-400 font-mono text-sm tracking-widest mb-1 uppercase">
                <span>IDENTITY: {profileData.name}</span>
                <span className="text-cyan-500">//</span>
                <span className="text-violet-400 font-semibold">{profileData.professionalTitle}</span>
              </div>
              
              {/* Exact Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.12]">
                Building ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">intelligent software.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
              {profileData.supportingText}
            </p>

            {/* Primary & Secondary Action Capsule Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <CapsuleButton href="#projects" />
              <DocumentButton resumeUrl="/Prathap-B-Resume.pdf" />
              <SignalButton href="#contact" />
            </div>

            {/* Direct Social Shortcuts */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <TerminalButton url={profileData.githubUrl} />
              <NetworkButton url={profileData.linkedinUrl} />
            </div>

            {/* Micro telemetry footer */}
            <div className="pt-2 flex items-center space-x-6 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-violet-400" />
                <span>Graduation: {profileData.graduationYear}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>CGPA: {profileData.cgpa}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Portrait & Live Telemetry Status Panel (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Hologram / Portrait Container */}
            <div className="relative group">
              {/* Orbital Telemetry Rings */}
              <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-violet-500/15 animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />

              {/* Holographic Avatar Box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-b from-[#0d162a] to-[#070b14] border-2 border-cyan-500/30 p-2 shadow-[0_0_40px_rgba(0,240,255,0.15)] overflow-hidden group-hover:border-cyan-400/60 transition-colors">
                
                {/* Visual Corner Markers */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                {/* Cyber Avatar Graphic / Tasteful Replaceable Placeholder */}
                <div className="w-full h-full rounded-xl bg-[#090e1a] flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Subtle Grid Pattern inside avatar */}
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Core Monogram / Radar Shield */}
                  <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-950 via-slate-900 to-violet-950 border border-cyan-400/40 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,240,255,0.2)]">
                    <div className="w-20 h-20 rounded-full border border-dashed border-cyan-300/40 flex items-center justify-center">
                      <span className="font-display font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-violet-400">
                        PB
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-3 text-center">
                    <span className="font-mono text-xs font-semibold text-slate-200 tracking-wider block">
                      PRATHAP B
                    </span>
                    <span className="font-mono text-[10px] text-cyan-400/80 tracking-tight">
                      B.TECH IT // A.K.T MCET
                    </span>
                  </div>

                  {/* Status Tag */}
                  <div className="absolute bottom-2 inset-x-2 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded text-center">
                    <span className="font-mono text-[10px] text-cyan-300 font-semibold tracking-widest flex items-center justify-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>ONLINE // DEV WORKSTATION</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live-style Status Telemetry Panel */}
            <div className="w-full max-w-sm rounded-xl bg-[#0a101d]/90 border border-slate-800 p-4 shadow-xl backdrop-blur-md font-mono text-xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-cyan-400 font-semibold">
                <span className="flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SYSTEM TELEMETRY STATUS</span>
                </span>
                <span className="text-emerald-400">[ACTIVE]</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5 text-slate-300">
                <div className="flex justify-between py-0.5 border-b border-slate-800/40">
                  <span className="text-slate-400">PROFILE:</span>
                  <span className="text-cyan-300 font-semibold">{profileData.statusPanel.profile}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-800/40">
                  <span className="text-slate-400">FOCUS:</span>
                  <span className="text-slate-200">{profileData.statusPanel.focus}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-800/40">
                  <span className="text-slate-400">INTERESTS:</span>
                  <span className="text-violet-300 font-semibold">{profileData.statusPanel.interests}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-800/40">
                  <span className="text-slate-400">GRADUATION:</span>
                  <span className="text-amber-300 font-semibold">{profileData.statusPanel.graduation}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">LOCATION:</span>
                  <span className="text-slate-300">{profileData.statusPanel.location}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
