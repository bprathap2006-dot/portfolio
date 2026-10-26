import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  FileText, 
  Compass, 
  ChevronRight, 
  Terminal, 
  EyeOff,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const StartScreen: React.FC = () => {
  const { setShowStartScreen, navigateTo, isSoundEnabled, toggleSound } = useGame();
  
  // Stages: 'A' (typing boot prompt), 'B' (init sequence lines), 'C' (dramatic profile reveal + enter button)
  const [stage, setStage] = useState<'A' | 'B' | 'C'>('A');
  const [typedText, setTypedText] = useState('');
  const [initLineIndex, setInitLineIndex] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const fullText = "INITIALIZING PRATHAP.NEXUS";
  const timerRefs = useRef<any[]>([]);

  const initLines = [
    { text: "LOADING DEVELOPER PROFILE...", status: "OK", tag: "PROFILE_CORE" },
    { text: "INITIALIZING PROJECT DATABASE...", status: "OK", tag: "SYS_PROJECTS" },
    { text: "CONNECTING AI RESEARCH MODULE...", status: "OK", tag: "NEURAL_NET" },
    { text: "SYSTEM READY", status: "ONLINE", tag: "STATUS_200" }
  ];

  // Clear all pending timeouts on unmount
  useEffect(() => {
    return () => {
      timerRefs.current.forEach(t => clearTimeout(t));
    };
  }, []);

  // Stage A: Typewriter effect for "INITIALIZING PRATHAP.NEXUS"
  useEffect(() => {
    if (stage === 'A') {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          const t1 = setTimeout(() => {
            setStage('B');
          }, 350);
          timerRefs.current.push(t1);
        }
      }, 35);
      return () => clearInterval(typeInterval);
    }
  }, [stage]);

  // Stage B: Reveal initialization lines sequentially
  useEffect(() => {
    if (stage === 'B') {
      const lineInterval = setInterval(() => {
        setInitLineIndex(prev => {
          if (prev < initLines.length - 1) {
            soundEngine.playBeep();
            return prev + 1;
          } else {
            clearInterval(lineInterval);
            const t2 = setTimeout(() => {
              setStage('C');
              soundEngine.playScan();
            }, 500);
            timerRefs.current.push(t2);
            return prev;
          }
        });
      }, 300);
      return () => clearInterval(lineInterval);
    }
  }, [stage]);

  // Keyboard shortcut listener (Escape/Space/Enter to skip or advance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        skipToWorld();
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (stage !== 'C') {
          e.preventDefault();
          setStage('C');
        } else {
          e.preventDefault();
          handleEnterWorld();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage]);

  const skipToWorld = () => {
    soundEngine.playSelect();
    try {
      sessionStorage.setItem('nexus_exploration_started', 'true');
    } catch {}
    setShowStartScreen(false);
    navigateTo('/');
  };

  const handleEnterWorld = () => {
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

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playScan();
    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playSelect();
    setShowStartScreen(false);
    navigateTo('/resume');
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#04060c] transition-all duration-500 overflow-y-auto p-4 ${
        isWarping ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="PRATHAP // NEXUS Startup Terminal"
    >
      {/* Background Matrix & Subtle Particle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.09)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12)_0%,transparent_50%)] pointer-events-none" />

      {/* Top Header Controls Bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs font-mono text-slate-400 z-20">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
          <span className="text-cyan-300 font-semibold tracking-widest hidden sm:inline">
            PRATHAP // NEXUS &bull; OS BOOT v2.7
          </span>
          <span className="text-cyan-300 font-semibold tracking-widest sm:hidden">
            NEXUS OS
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

          {/* Skip Intro [ESC] Button */}
          <button
            onClick={skipToWorld}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white transition-colors text-[11px] font-mono focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Skip sequence directly to World Map"
          >
            <span>SKIP INTRO [ESC]</span>
            <EyeOff className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* STAGE A & B: Cinematic Boot Terminal Sequence */}
      {stage !== 'C' && (
        <div 
          onClick={() => setStage('C')} 
          className="relative z-10 max-w-xl w-full p-8 sm:p-10 rounded-2xl bg-[#070b16]/95 border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.15)] font-mono text-left space-y-6 cursor-pointer"
          title="Click to accelerate sequence"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40 text-xs text-cyan-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block opacity-80" />
              <span className="ml-2 text-slate-400 font-mono text-[11px]">nexus_terminal // boot.sh</span>
            </div>
            <span className="text-slate-500 text-[10px]">TAP ANYWHERE TO SKIP</span>
          </div>

          {/* Stage A: Typing prompt */}
          <div className="text-cyan-300 font-mono text-sm sm:text-base flex items-center space-x-2">
            <span className="text-violet-400 font-bold">&gt;</span>
            <span>{typedText}</span>
            <span className="w-2.5 h-5 bg-cyan-400 animate-pulse inline-block ml-1" />
          </div>

          {/* Stage B: Sequential reveal lines */}
          {stage === 'B' && (
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              {initLines.slice(0, initLineIndex + 1).map((line, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-300 animate-fade-in font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 text-[11px]">[{line.tag}]</span>
                    <span>{line.text}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    line.status === 'ONLINE' 
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' 
                      : 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/40'
                  }`}>
                    {line.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4 text-center text-[11px] text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">SPACE</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ENTER</kbd> to fast-forward
          </div>
        </div>
      )}

      {/* STAGE C & D: Dramatic Profile Reveal with Real Photo & [ENTER MY DIGITAL WORLD] */}
      {stage === 'C' && (
        <div className="relative z-10 max-w-2xl w-full my-auto text-center space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-3xl bg-[#070b16]/95 border border-cyan-500/35 shadow-[0_0_80px_rgba(0,240,255,0.14)] backdrop-blur-xl animate-fade-in">
          
          {/* Real Photo Hologram Frame with Animated Neon Rings */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto flex items-center justify-center">
            {/* Outer rotating telemetry dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_25s_linear_infinite]" />
            {/* Counter-rotating violet accent ring */}
            <div className="absolute -inset-2.5 rounded-full border border-violet-500/35 animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Orbiting cyber nodes */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] animate-pulse" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />

            {/* Corner Bracket Reticles */}
            <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-violet-400" />
            <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-violet-400" />

            {/* Real Profile Photo Container */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(0,240,255,0.4)] relative group bg-slate-900">
              <img 
                src="/images/prathap-profile.jpg" 
                alt="Prathap B - Aspiring Software Developer" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback in case path fails
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                  if (fb) (fb as HTMLElement).style.display = 'flex';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="photo-fallback hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 text-cyan-300 font-display font-extrabold text-3xl">
                PB
              </div>
              {/* Subtle glass reflection highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Dramatic Title, Professional Identity & Mission Tagline */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>DEVELOPER PROFILE SYSTEM // INITIALIZED</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-none">
              PRATHAP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">B</span>
            </h1>

            <p className="text-xs sm:text-sm font-mono text-cyan-200 tracking-widest uppercase font-semibold">
              ASPIRING SOFTWARE DEVELOPER
            </p>

            <div className="max-w-lg mx-auto pt-1 space-y-1">
              <p className="text-sm sm:text-base font-semibold text-slate-200 font-display">
                Building ideas into intelligent software.
              </p>
              <p className="text-xs text-slate-400 italic font-serif">
                &ldquo;I build software at the intersection of logic, intelligence, and security.&rdquo;
              </p>
            </div>
            
            {/* Academic Credential Summary */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-cyan-300">
                B.Tech IT (2023–2027) &bull; AKT MCET
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-amber-300 font-semibold">
                CGPA 7.90
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400">
                Kallakurichi, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Stage D Action Hub: [ ENTER MY DIGITAL WORLD ] & Resume Options */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary Action Button */}
            <button
              onClick={handleEnterWorld}
              onMouseEnter={() => soundEngine.playHover()}
              className="relative group w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-sm tracking-wider font-extrabold uppercase text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_40px_rgba(0,240,255,0.45)] hover:shadow-[0_0_60px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              aria-label="Enter My Digital World"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              <Play className="w-4 h-4 fill-current text-slate-950" />
              <span>[ ENTER MY DIGITAL WORLD ]</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* View Original Resume in App Screen */}
            <button
              onClick={handleViewResume}
              onMouseEnter={() => soundEngine.playHover()}
              className="w-full sm:w-auto px-5 py-4 rounded-xl font-mono text-xs sm:text-sm tracking-wider font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-colors flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="Open the verified original resume viewer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>VIEW RESUME</span>
            </button>

            {/* Direct Download Original PDF */}
            <button
              onClick={handleDownloadResume}
              onMouseEnter={() => soundEngine.playHover()}
              className="w-full sm:w-auto px-4 py-4 rounded-xl font-mono text-xs sm:text-sm tracking-wider font-medium text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-colors flex items-center justify-center space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="Download original Prathap-B-Resume.pdf directly"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>PDF</span>
            </button>
          </div>

          {/* Quick Direct Sector Jumps */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[10px] uppercase text-slate-500 tracking-wider">QUICK SECTOR:</span>
            <button
              onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/about'); }}
              className="px-2.5 py-1 rounded bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800"
            >
              // 01 About
            </button>
            <button
              onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/skills'); }}
              className="px-2.5 py-1 rounded bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800"
            >
              // 02 Skills
            </button>
            <button
              onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/projects'); }}
              className="px-2.5 py-1 rounded bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-violet-300 border border-slate-800"
            >
              // 03 Projects
            </button>
            <button
              onClick={() => { soundEngine.playSelect(); setShowStartScreen(false); navigateTo('/contact'); }}
              className="px-2.5 py-1 rounded bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800"
            >
              // 08 Contact
            </button>
          </div>

          {/* Telemetry Status Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>ACADEMIC VERIFICATION // 7.90 CGPA (AKT MCET)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>KALLAKURICHI, TN, INDIA</span>
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
