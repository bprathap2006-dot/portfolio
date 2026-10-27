import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { profileData } from '../../data/profileData';
import { 
  Compass, 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  FileText, 
  Sun, 
  Moon, 
  Terminal,
  Home
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const GameHUD: React.FC = () => {
  const { 
    currentRoute, 
    navigateTo, 
    setShowStartScreen,
    activeSectorName, 
    activeSectorCoord, 
    isSoundEnabled, 
    toggleSound, 
    isDarkMode, 
    toggleTheme,
    toggleTerminal 
  } = useGame();

  const isAtWorldMap = currentRoute === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#040711]/90 backdrop-blur-xl border-b border-cyan-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2 sm:py-2.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Title Screen, World Map & Back Navigation */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Back to Title Menu Button */}
          <button
            onClick={() => {
              soundEngine.playSelect();
              setShowStartScreen(true);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 font-mono text-[11px] font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Open Cyberpunk Title Menu"
          >
            <Home className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">TITLE MENU</span>
          </button>

          {/* Back to World Map Button */}
          {!isAtWorldMap ? (
            <button
              onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
              onMouseEnter={() => soundEngine.playHover()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)] focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="Return to World Map (ESC)"
            >
              <ArrowLeft className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">[ WORLD MAP ]</span>
              <span className="sm:hidden">MAP</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold px-2 py-1 bg-cyan-950/40 rounded-lg border border-cyan-500/30">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span className="tracking-widest">NEXUS_OS</span>
            </div>
          )}

          {/* Current Location Indicator & Breadcrumb */}
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-mono text-cyan-400/90 tracking-wider">
              LOCATION: {activeSectorCoord}
            </span>
            <span className="text-xs font-orbitron font-bold text-slate-100 tracking-wide flex items-center space-x-1">
              <span>{activeSectorName}</span>
            </span>
          </div>
        </div>

        {/* Center: System Telemetry Monogram */}
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>PILOT: PRATHAP B // B.TECH IT (2027)</span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-300 font-semibold">CGPA 7.90</span>
        </div>

        {/* Right: Functional HUD Action Shortcuts */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          
          {/* Resume Viewer Shortcut */}
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/resume'); }}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-950/90 to-blue-950/90 hover:from-cyan-900 hover:to-blue-900 text-cyan-200 border border-cyan-400/60 font-mono text-xs font-semibold shadow-md transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="View original verified resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">RESUME</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Terminal Easter Egg Trigger */}
          <button
            onClick={toggleTerminal}
            onMouseEnter={() => soundEngine.playHover()}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 font-mono text-xs flex items-center space-x-1 transition-colors"
            title="Launch Command Line Terminal (~)"
            aria-label="Toggle Command Line Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">&gt;_ CLI</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={isSoundEnabled ? 'Mute Audio Synthesizer' : 'Enable Audio Synthesizer'}
            title={isSoundEnabled ? 'Mute Web Audio Synthesizer' : 'Unmute Web Audio Synthesizer'}
          >
            {isSoundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title="Toggle Visual Theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-400" />
            )}
          </button>

          {/* GitHub Icon Link */}
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="GitHub Profile"
            title="Open GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="LinkedIn Profile"
            title="Open LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

        </div>

      </div>
    </header>
  );
};
