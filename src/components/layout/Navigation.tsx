import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({
  isDarkMode,
  onToggleTheme,
  activeSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#05070d]/85 backdrop-blur-md border-b border-cyan-900/30 shadow-[0_4px_25px_rgba(0,0,0,0.6)]'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / System Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md p-1"
            aria-label="PRATHAP // NEXUS Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              P//
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                PRATHAP <span className="text-cyan-400 font-mono text-xs">// NEXUS</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:inline">
                DEV_WS // 2027
              </span>
            </div>
          </a>

          {/* Desktop Nav Items Control Bar */}
          <nav 
            className="hidden lg:flex items-center p-1 rounded-full bg-[#090e1a]/80 border border-slate-800/80 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)] backdrop-blur-md"
            aria-label="Main Navigation"
          >
            <ul className="flex items-center space-x-1">
              {NAV_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => handleNavClick(sec.id)}
                      className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        isActive
                          ? 'text-cyan-200 bg-cyan-950/70 shadow-[0_0_12px_rgba(0,240,255,0.25)] border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_#00f0ff]" />
                      )}
                      {sec.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons: GitHub, LinkedIn, Theme, Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* GitHub Shortcut */}
            <a
              href="https://github.com/bprathap2006-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-slate-700/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn Shortcut */}
            <a
              href="https://www.linkedin.com/in/prathap-b-0b226639b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 border border-slate-700/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-300 bg-slate-800/60 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <nav
            className="lg:hidden mt-3 p-4 rounded-xl bg-[#090e1a]/95 border border-cyan-900/40 shadow-2xl backdrop-blur-xl animate-fade-in"
            aria-label="Mobile Navigation"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {NAV_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    className={`text-left px-3.5 py-2.5 rounded-lg font-mono text-xs font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-200 bg-cyan-950/60 border border-cyan-500/40'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-cyan-400/60 mr-1.5">//</span>
                    {sec.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-3 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>STATUS: ONLINE</span>
              <span className="text-cyan-400">AKT MCET 2027</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
