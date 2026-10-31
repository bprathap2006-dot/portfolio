import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { 
  Volume2, 
  VolumeX, 
  FileText, 
  ChevronRight, 
  Terminal, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Cpu 
} from 'lucide-react';

export const StartScreen: React.FC = () => {
  const { setShowStartScreen, navigateTo, isSoundEnabled, toggleSound, toggleTerminal } = useGame();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [quitModalOpen, setQuitModalOpen] = useState(false);

  const menuOptions = [
    {
      id: 'profile',
      label: 'DEVELOPER PROFILE',
      sub: 'Professional Background & Technical Journey',
      buttonText: 'Explore Profile',
      action: () => {
        soundEngine.playSelect();
        enterSector('/about');
      },
    },
    {
      id: 'projects',
      label: 'PROJECT SHOWCASE',
      sub: 'AI Applications & Cybersecurity Solutions',
      buttonText: 'View Projects',
      action: () => {
        soundEngine.playSelect();
        enterSector('/projects');
      },
    },
    {
      id: 'skills',
      label: 'TECHNOLOGY STACK',
      sub: 'Programming Languages, Frameworks & Development Tools',
      buttonText: 'Explore Technologies',
      action: () => {
        soundEngine.playSelect();
        enterSector('/skills');
      },
    },
    {
      id: 'resume',
      label: 'PROFESSIONAL RESUME',
      sub: 'Academic Qualifications & Technical Credentials',
      buttonText: 'View Resume',
      action: () => {
        soundEngine.playSelect();
        enterSector('/resume');
      },
    },
    {
      id: 'research',
      label: 'RESEARCH & INNOVATION',
      sub: 'Reinforcement Learning & Intelligent Security Systems',
      buttonText: 'Explore Research',
      action: () => {
        soundEngine.playSelect();
        enterSector('/research');
      },
    },
    {
      id: 'connect',
      label: "LET'S CONNECT",
      sub: 'Internship Opportunities & Professional Networking',
      buttonText: 'Contact Me',
      action: () => {
        soundEngine.playSelect();
        enterSector('/contact');
      },
    },
  ];

  const enterSector = (route: string) => {
    setIsWarping(true);
    try {
      sessionStorage.setItem('nexus_exploration_started', 'true');
    } catch {}
    setTimeout(() => {
      setShowStartScreen(false);
      navigateTo(route);
    }, 400);
  };

  // Keyboard navigation for arrow keys and enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (quitModalOpen) {
        if (e.key === 'Escape') setQuitModalOpen(false);
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundEngine.playHover();
        setSelectedIndex((prev) => (prev + 1) % menuOptions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundEngine.playHover();
        setSelectedIndex((prev) => (prev - 1 + menuOptions.length) % menuOptions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        menuOptions[selectedIndex].action();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        enterSector('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, quitModalOpen, isSoundEnabled]);

  const handleDownloadPdf = (e: React.MouseEvent) => {
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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#04060c] cyber-scanlines overflow-y-auto p-4 sm:p-8 transition-all duration-500 ${
        isWarping ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="PRATHAP B // DEVELOPER PORTFOLIO"
    >
      {/* Dynamic Background: Ambient Neon Fog & Rain Reflective Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/images/cybercity-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/80 to-[#04060c]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(0,240,255,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(236,72,153,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Top Header & Controls Bar */}
      <header className="relative w-full max-w-6xl mx-auto flex items-center justify-between text-xs font-mono text-slate-400 z-20 pt-2 pb-4">
        <div className="flex items-center space-x-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse" />
          <span className="text-cyan-300 font-bold tracking-widest text-[11px] sm:text-xs">
            PRATHAP B // DEVELOPER PORTFOLIO
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400">
            AUDIO: {isSoundEnabled ? 'ONLINE' : 'MUTED'}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={isSoundEnabled ? 'Mute Audio' : 'Unmute Audio'}
            title="Toggle Web Audio Synthesizer"
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

          {/* Direct Overview Button */}
          <button
            onClick={() => enterSector('/')}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-cyan-950/40 border border-cyan-800/60 hover:border-cyan-400 text-cyan-300 hover:text-white transition-colors text-[11px] font-mono focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Open Interactive Overview"
          >
            <span>OVERVIEW</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Split View: Left Content & Cards + Right Holographic ID Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
        
        {/* Left Column: Title, Subtitle, Badges & 6 Cards */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          
          {/* Main Logo & Title in Professional Technical Aesthetic */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase bg-[#fcee0a] text-slate-950 rounded-sm shadow-[0_0_12px_rgba(252,238,10,0.6)]">
                DEVELOPER PROFILE
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 rounded-sm">
                DIGITAL SHOWCASE
              </span>
              <span className="hidden sm:inline-flex items-center space-x-1 px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>ONLINE</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-orbitron font-black text-white tracking-wider leading-none">
              PRATHAP <span className="text-cyan-400 neon-glow-cyan">B</span>
            </h1>

            <p className="text-xs sm:text-sm font-mono text-cyan-200/90 tracking-widest uppercase font-semibold">
              SOFTWARE DEVELOPMENT • ARTIFICIAL INTELLIGENCE • CYBERSECURITY
            </p>

            <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
              ASPIRING SOFTWARE DEVELOPER • AI ENTHUSIAST • CYBERSECURITY RESEARCHER
            </p>
          </div>

          {/* 6 Homepage Cards */}
          <nav 
            className="space-y-2 sm:space-y-2.5 pt-1 max-w-lg" 
            role="menu"
            aria-label="Developer Portfolio Navigation"
          >
            {menuOptions.map((opt, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={opt.id}
                  onClick={opt.action}
                  onMouseEnter={() => {
                    setSelectedIndex(idx);
                    soundEngine.playHover();
                  }}
                  className={`w-full group text-left px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/90 via-slate-900/90 to-slate-950/90 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.35)] translate-x-2'
                      : 'bg-slate-950/60 hover:bg-slate-900/60 border-slate-800/80 hover:border-slate-700 text-slate-300'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center space-x-3.5 min-w-0 pr-2">
                    <span className={`w-2 h-2 rounded-sm flex-shrink-0 transition-all duration-200 ${
                      isSelected 
                        ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff] scale-125 rotate-45' 
                        : 'bg-slate-700 group-hover:bg-cyan-500/50'
                    }`} />
                    <div className="min-w-0">
                      <div className={`font-orbitron font-bold text-xs sm:text-sm tracking-wider truncate ${
                        isSelected ? 'text-cyan-300 neon-glow-cyan' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {opt.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300 truncate">
                        {opt.sub}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                      {opt.buttonText}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`} />
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Quick Terminal Trigger & Keyboard Legend */}
          <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-500">
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">↓</kbd>
              <span>NAVIGATE</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">ENTER</kbd>
              <span>SELECT</span>
            </span>
            <button
              onClick={() => {
                soundEngine.playKey();
                toggleTerminal();
              }}
              className="text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center space-x-1 ml-auto"
            >
              <Terminal className="w-3 h-3" />
              <span>TERMINAL (~)</span>
            </button>
          </div>

        </div>

        {/* Right Column: Profile Hologram Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#080d1a]/95 via-[#060a14]/95 to-[#04060c]/95 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-xl">
            
            {/* Corner Decorative Brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-pink-500" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-500" />

            {/* Profile Avatar with Neon Ring Reticles */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-5">
              {/* Outer rotating dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 animate-[spin_20s_linear_infinite]" />
              {/* Inner counter-rotating ring */}
              <div className="absolute -inset-2 rounded-full border border-pink-500/40 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Real Profile Photo Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.45)] relative group bg-slate-900">
                <img 
                  src="/images/prathap-profile.jpg" 
                  alt="Prathap B - Aspiring Software Developer" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                    if (fb) (fb as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="photo-fallback hidden w-full h-full flex items-center justify-center bg-cyan-950 text-cyan-300 font-orbitron font-bold text-2xl">
                  PRATHAP B
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10 pointer-events-none" />
              </div>

              {/* Status Indicator Pip */}
              <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#04060c] shadow-[0_0_10px_#10b981]" title="Status: ONLINE" />
            </div>

            {/* Identity Details */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-orbitron font-extrabold text-white tracking-wide">
                PRATHAP B
              </h2>
              
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>ASPIRING SOFTWARE DEVELOPER</span>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-300 space-y-1.5">
                <p className="flex items-center justify-center space-x-1.5 text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>B.Tech IT (2023–2027) &bull; AKT MCET</span>
                </p>
                <p className="text-amber-300 font-bold tracking-wider">
                  OFFICIAL CGPA: 7.90
                </p>
                <p className="flex items-center justify-center space-x-1 text-slate-400 text-[11px]">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>Kallakurichi, Tamil Nadu, India</span>
                </p>
              </div>

              <p className="text-xs italic text-slate-400 pt-1 font-sans">
                &ldquo;Building Software. Exploring AI. Advancing Technology.&rdquo;
              </p>
            </div>

            {/* Interactive Fast-Access Action Buttons */}
            <div className="pt-5 grid grid-cols-2 gap-2.5">
              <button
                onClick={() => enterSector('/resume')}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-3.5 py-2.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/60 text-cyan-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW RESUME</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-3.5 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Download verified Prathap-B-Resume.pdf"
              >
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>

            {/* Quick Sector Links */}
            <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <button 
                onClick={() => enterSector('/about')} 
                className="hover:text-cyan-300 transition-colors"
              >
                // PROFILE
              </button>
              <button 
                onClick={() => enterSector('/projects')} 
                className="hover:text-purple-300 transition-colors"
              >
                // PROJECTS
              </button>
              <button 
                onClick={() => enterSector('/skills')} 
                className="hover:text-amber-300 transition-colors"
              >
                // TECH STACK
              </button>
              <button 
                onClick={() => enterSector('/contact')} 
                className="hover:text-pink-300 transition-colors"
              >
                // CONNECT
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto pt-4 pb-2 border-t border-slate-800/60 text-center font-mono text-xs text-slate-400 space-y-1">
        <p className="text-slate-300 font-semibold tracking-wider">
          Designed &amp; Developed by PRATHAP B
        </p>
        <p className="text-[11px] text-cyan-400/90">
          Building Software. Exploring AI. Advancing Technology.
        </p>
      </footer>

      {/* Contact Overlay Modal */}
      {quitModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-label="Developer Availability"
        >
          <div className="relative max-w-md w-full p-6 rounded-2xl bg-[#070b16] border border-cyan-500/50 shadow-[0_0_40px_rgba(0,240,255,0.3)] space-y-4 font-mono text-left">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-900/50 text-cyan-400">
              <span className="font-bold tracking-wider text-sm">DEVELOPER CONTACT</span>
              <span className="text-xs text-emerald-400">STATUS: OPEN FOR OPPORTUNITIES</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Prathap B is actively seeking Software Developer internships, junior software roles, and AI/Cybersecurity opportunities (Graduating April 2027).
            </p>

            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div>Email: <a href="mailto:bprathap2006@gmail.com" className="text-cyan-300 hover:underline">bprathap2006@gmail.com</a></div>
              <div>Phone: <a href="tel:+919363545650" className="text-cyan-300 hover:underline">+91 9363545650</a></div>
              <div>Location: Kallakurichi, Tamil Nadu, India</div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setQuitModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  setQuitModalOpen(false);
                  enterSector('/contact');
                }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs shadow-md"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
