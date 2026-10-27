import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { profileData } from '../../data/profileData';

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
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
      setScrolled(window.scrollY > 25);
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
          ? 'py-3 bg-[#FAF9F6]/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-slate-800 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="PRATHAP B Home"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-display font-bold text-sm flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                PRATHAP B
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans -mt-0.5 hidden sm:inline">
                Aspiring Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-stone-200/90 dark:border-slate-800 shadow-sm backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            <ul className="flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-blue-950/50'
                          : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span 
                          className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full animate-fade-in"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Header Actions: Socials, Resume, Theme */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* GitHub */}
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 transition-transform hover:-translate-y-0.5" />
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 transition-transform hover:-translate-y-0.5" />
            </a>

            {/* Direct Resume Action */}
            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 bg-white hover:bg-slate-50 border border-stone-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:hover:bg-slate-800 transition-colors shadow-sm"
              title="Download verified resume PDF"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in space-y-4">
          <ul className="grid grid-cols-2 gap-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-stone-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between">
            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center space-x-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-black"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
