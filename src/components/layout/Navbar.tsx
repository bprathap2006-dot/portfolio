import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

interface NavbarProps {
  onNavigateToResume?: () => void;
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

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Scroll spy for active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToResume) {
      onNavigateToResume();
    } else {
      window.location.href = '/resume';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/80 shadow-soft-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
            aria-label="Prathap B - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-tight group-hover:bg-blue-600 transition-colors shadow-sm">
              PB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                PRATHAP B
              </span>
              <span className="text-[10px] font-sans font-medium text-slate-600 tracking-wider uppercase -mt-0.5">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {/* Subtle active animated underline marker */}
                  {isActive && (
                    <span 
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-blue-600 rounded-full transition-all" 
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Social Links & Resume Action */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* GitHub */}
            <a
              href="https://github.com/bprathap2006-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all hover:-translate-y-0.5"
              aria-label="GitHub Profile"
              title="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4 text-slate-700" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prathap-b-0b226639b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
            </a>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-soft-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              title="View and download original verified resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleResumeClick}
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium"
            >
              Resume
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f6] border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-soft-xl">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/bprathap2006-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-black"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/prathap-b-0b226639b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-600"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold"
            >
              <span>Download PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
