import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { profileData } from '../../data/profileData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { 
  ArrowUp, 
  FileText, 
  Mail, 
  Phone, 
  Terminal,
  Home,
  CheckCircle2
} from 'lucide-react';

export const GameFooter: React.FC = () => {
  const { navigateTo, setShowStartScreen, toggleTerminal, isSoundEnabled } = useGame();

  const scrollToTop = () => {
    soundEngine.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToHome = () => {
    soundEngine.playSelect();
    setShowStartScreen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyan-900/40 bg-[#020408]/95 py-12 text-xs font-mono text-slate-400 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Strip: Home Return + Fast Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-cyan-950">
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleReturnToHome}
              onMouseEnter={() => soundEngine.playHover()}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Home className="w-4 h-4" />
              <span>HOME</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playKey();
                toggleTerminal();
              }}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
              title="Toggle Command Line (~)"
            >
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span className="hidden sm:inline">CLI (~)`</span>
            </button>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="text-slate-500 text-[10px] tracking-wider uppercase">NAVIGATE:</span>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300"
            >
              // 00 Overview
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/about'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300"
            >
              // 01 Profile
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/skills'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-300"
            >
              // 02 Skills
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/projects'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-purple-300"
            >
              // 03 Projects
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/experience'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-300"
            >
              // 04 Experience
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/education'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-300"
            >
              // 05 Education
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/research'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-rose-300"
            >
              // 06 Research
            </button>
            <button 
              onClick={() => { soundEngine.playSelect(); navigateTo('/contact'); }} 
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-pink-300"
            >
              // 08 Connect
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
            title="Scroll to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Identity & Verification */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-100 font-orbitron font-bold text-sm tracking-wider">
              <span>Designed &amp; Developed by PRATHAP B</span>
            </div>
            <p className="text-[11px] text-cyan-400/90">
              Building Software. Exploring AI. Advancing Technology.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-[11px] text-emerald-400 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ACADEMIC VERIFICATION // CGPA 7.90</span>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-col items-center justify-center space-y-1 text-[11px] text-slate-300">
            <a 
              href={`mailto:${profileData.email}`} 
              className="flex items-center space-x-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.email}</span>
            </a>
            <a 
              href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center space-x-1.5 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.phone}</span>
            </a>
          </div>

          {/* Social Profiles & Resume */}
          <div className="flex items-center justify-center md:justify-end space-x-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundEngine.playSelect();
                navigateTo('/resume');
              }}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-500/50 transition-colors text-xs"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-4 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PRATHAP B. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-2">
            <span>KALLAKURICHI, TAMIL NADU, INDIA</span>
            <span>&bull;</span>
            <span className="text-cyan-400">AUDIO: {isSoundEnabled ? 'ENABLED' : 'MUTED'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
