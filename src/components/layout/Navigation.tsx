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
          ? 'py-3.5 bg-[#FBF9F5]/92 dark:bg-[#0F1219]/92 backdrop-blur-md border-b border-[#E8E4DC] dark:border-[#232A3B] shadow-[0_1px_4px_rgba(24,24,27,0.02)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-baseline space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1"
            aria-label="PRATHAP B - Return to top"
          >
            <span className="font-display font-extrabold text-base tracking-tight text-[#18181B] dark:text-[#F4F4F5] group-hover:text-blue-600 transition-colors">
              PRATHAP B
            </span>
            <span className="hidden md:inline-block text-[11px] font-sans font-medium text-[#71717A] dark:text-[#A1A1AA]">
              / Aspiring Software Developer
            </span>
          </a>

          {/* Center Navigation Links (Clean Active Underline) */}
          <nav 
            className="hidden lg:flex items-center space-x-7"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-xs font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-[#F4F4F5]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {/* Clean active-link underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Socials, Resume, Theme */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* GitHub */}
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-[#F4F4F5] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="GitHub Profile"
              title="GitHub Profile (https://github.com/bprathap2006-dot)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#52525B] hover:text-blue-600 dark:text-[#A1A1AA] dark:hover:text-blue-400 transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Clearly Visible Resume Action */}
            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              title="Download original verified resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#18181B] dark:text-[#F4F4F5] hover:bg-[#F5F1EA] dark:hover:bg-[#161B26] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E8E4DC] dark:border-[#232A3B] bg-[#FBF9F5]/98 dark:bg-[#0F1219]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in space-y-4 shadow-lg">
          <ul className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-[#52525B] dark:text-[#A1A1AA] hover:bg-[#F5F1EA] dark:hover:bg-[#161B26]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-[#E8E4DC] dark:border-[#232A3B] flex items-center justify-between">
            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center space-x-3 text-[#52525B] dark:text-[#A1A1AA]">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-black dark:hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-blue-600"
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
