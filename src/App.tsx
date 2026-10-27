import React, { useEffect } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { StudioCanvas } from './components/layout/StudioCanvas';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ResumeScreen } from './components/screens/ResumeScreen';
import { DeepShieldScreen } from './components/screens/DeepShieldScreen';
import { ZeroDayScreen } from './components/screens/ZeroDayScreen';

const MainEditorialPortfolio: React.FC = () => {
  const { isDarkMode, toggleTheme, activeSection, setActiveSection } = useGame();

  // Scroll spy to update active section in navigation smoothly
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'research',
      'certifications',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800 dark:bg-[#0B0F19] dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200 transition-colors duration-200">
      
      {/* Refined Understated Studio Canvas Background */}
      <StudioCanvas isDarkMode={isDarkMode} />

      {/* Clean Floating Studio Navigation */}
      <Navigation
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Single-Page Editorial Flow */}
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

      {/* Clean Professional Footer */}
      <Footer />

    </div>
  );
};

const PortfolioAppRouter: React.FC = () => {
  const { currentRoute, isDarkMode, toggleTheme, activeSection } = useGame();

  if (currentRoute === '/resume') {
    return (
      <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800 dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-200">
        <StudioCanvas isDarkMode={isDarkMode} />
        <Navigation
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />
        <main className="relative z-10">
          <ResumeScreen />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentRoute === '/projects/deepshield') {
    return (
      <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800 dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-200">
        <StudioCanvas isDarkMode={isDarkMode} />
        <Navigation
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />
        <main className="relative z-10">
          <DeepShieldScreen />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentRoute === '/projects/zero-day-mitigation') {
    return (
      <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800 dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-200">
        <StudioCanvas isDarkMode={isDarkMode} />
        <Navigation
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />
        <main className="relative z-10">
          <ZeroDayScreen />
        </main>
        <Footer />
      </div>
    );
  }

  return <MainEditorialPortfolio />;
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <PortfolioAppRouter />
    </GameProvider>
  );
};

export default App;
