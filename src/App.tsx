import React, { useState, useEffect } from 'react';
import { NexusBootSequence } from './components/effects/NexusBootSequence';
import { NexusCanvas } from './components/layout/NexusCanvas';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  // Check if boot sequence was already shown in this session
  const [showBootSequence, setShowBootSequence] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem('nexus_boot_completed');
    } catch {
      return false;
    }
  });

  // Dark / Light Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('nexus_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default dark
    } catch {
      return true;
    }
  });

  // Active section tracking
  const [activeSection, setActiveSection] = useState<string>('home');

  // Synchronize theme with HTML document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nexus_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nexus_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleBootComplete = () => {
    setShowBootSequence(false);
    try {
      sessionStorage.setItem('nexus_boot_completed', 'true');
    } catch {
      // sessionStorage unavailable fallback
    }
  };

  // ScrollSpy to determine active section for navigation marker
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'research', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070d] text-slate-100 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Signature Experience: Nexus Boot Sequence */}
      {showBootSequence && (
        <NexusBootSequence onComplete={handleBootComplete} />
      )}

      {/* Persistent Canvas Background */}
      <NexusCanvas isDarkMode={isDarkMode} />

      {/* Custom Interactive Navigation Control Bar */}
      <Navigation
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
