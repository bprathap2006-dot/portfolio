import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  FileText, 
  Compass, 
  ChevronRight, 
  Shield, 
  Terminal, 
  EyeOff
} from 'lucide-react';

export const StartScreen: React.FC = () => {
  const { setShowStartScreen, navigateTo, isSoundEnabled, toggleSound } = useGame();
  const [isWarping, setIsWarping] = useState(false);

  const handleStartExploration = () => {
    setIsWarping(true);
    soundEngine.playWarp();
    setTimeout(() => {
      try {
        sessionStorage.setItem('nexus_exploration_started', 'true');
      } catch {}
      setShowStartScreen(false);
      navigateTo('/');
    }, 450);
  };

  const handleDirectResume = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playScan();
    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#04060c] transition-all duration-500 overflow-hidden ${
        isWarping ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="PRATHAP // NEXUS Startup Terminal"
    >
      {/* Ambient Cyber Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Top Telemetry Header Controls */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-slate-400 z-20">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-semibold tracking-widest hidden sm:inline">
            CORE_INITIALIZER // BUILD 2027.AKT
          </span>
          <span className="text-cyan-300 font-semibold tracking-widest sm:hidden">
            NEXUS_OS
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={isSoundEnabled ? 'Mute Sound' : 'Enable Audio Synthesizer'}
            title="Audio Synthesizer Toggle (Web Audio API)"
          >
            {isSoundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono text-cyan-300">AUDIO: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-[11px] font-mono text-slate-500">AUDIO: MUTED</span>
              </>
            )}
          </button>

          {/* Quick Skip Intro Button */}
          <button
            onClick={handleStartExploration}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white transition-colors text-[11px] font-mono focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>SKIP INTRO [ESC]</span>
            <EyeOff className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Center Console / Holographic Core */}
      <div className="relative z-10 max-w-2xl w-full mx-4 text-center space-y-8 p-6 sm:p-10 rounded-3xl bg-[#070b16]/90 border border-cyan-500/30 shadow-[0_0_80px_rgba(0,240,255,0.12)] backdrop-blur-xl">
        
        {/* Animated Hologram Core with Orbiting Telemetry Nodes */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-3 rounded-full border border-violet-500/25 animate-[spin_35s_linear_infinite_reverse]" />
          
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] animate-pulse" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 border-2 border-cyan-400/60 shadow-[inset_0_0_30px_rgba(0,240,255,0.4)] flex flex-col items-center justify-center p-2 group hover:border-cyan-300 transition-colors">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-sky-200 to-violet-300 tracking-wider">
              PB
            </span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-tighter">
              2023 // 2027
            </span>
          </div>
        </div>

        {/* Title, Callsign & Subtitle */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEVELOPER PROFILE SYSTEM // LEVEL 01</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            PRATHAP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">// NEXUS</span>
          </h1>

          <p className="text-xs sm:text-sm font-mono text-cyan-200/90 tracking-widest uppercase">
            Software Engineering • Artificial Intelligence • Cybersecurity
          </p>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-sans leading-relaxed pt-1">
            An interactive developer workstation exploring the real profile, research missions, and verified engineering projects of <strong className="text-slate-200">Prathap B</strong> (B.Tech IT, AKT MCET).
          </p>
        </div>

        {/* Major Action: [ START EXPLORATION ] Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleStartExploration}
            onMouseEnter={() => soundEngine.playHover()}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-sm tracking-wider font-bold uppercase text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
            aria-label="Enter PRATHAP NEXUS World"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            
            <Play className="w-4 h-4 fill-current text-slate-950" />
            <span>[ START EXPLORATION ]</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Quick Direct Resume Download */}
          <button
            onClick={handleDirectResume}
            onMouseEnter={() => soundEngine.playHover()}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-mono text-xs sm:text-sm tracking-wider font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/70 shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Download verified resume immediately"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </button>
        </div>

        {/* Secondary Quick Jump Options */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-[10px] uppercase text-slate-500 tracking-wider">DIRECT JUMPS:</span>
          <button
            onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/about'); }}
            className="px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800"
          >
            // Identity Core
          </button>
          <button
            onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/projects'); }}
            className="px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-violet-300 border border-slate-800"
          >
            // Projects
          </button>
          <button
            onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/contact'); }}
            className="px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800"
          >
            // Contact
          </button>
        </div>

        {/* Telemetry Status Footer */}
        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center space-x-1">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>VERIFIED ACADEMIC PROFILE // 7.90 CGPA</span>
          </span>
          <span className="flex items-center space-x-1">
            <Compass className="w-3 h-3 text-cyan-400" />
            <span>TAMIL NADU, INDIA</span>
          </span>
        </div>

      </div>
    </div>
  );
};
