import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { StudioBackground } from './components/layout/StudioBackground';
import { Navbar } from './components/layout/Navbar';
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
import { ResumeScreen } from './components/screens/ResumeScreen';
import { DeepShieldScreen } from './components/screens/DeepShieldScreen';
import { ZeroDayScreen } from './components/screens/ZeroDayScreen';

const PortfolioRouter: React.FC = () => {
  const { currentRoute, navigateTo } = useGame();

  if (currentRoute === '/resume') {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900">
        <StudioBackground />
        <ResumeScreen onBack={() => navigateTo('/')} />
        <Footer />
      </div>
    );
  }

  if (currentRoute === '/projects/deepshield') {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900">
        <StudioBackground />
        <DeepShieldScreen onBack={() => navigateTo('/#projects')} />
        <Footer />
      </div>
    );
  }

  if (currentRoute === '/projects/zero-day-mitigation') {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900">
        <StudioBackground />
        <ZeroDayScreen onBack={() => navigateTo('/#projects')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900 font-sans">
      {/* Studio Background */}
      <StudioBackground />

      {/* Clean Professional Navbar */}
      <Navbar onNavigateToResume={() => navigateTo('/resume')} />

      {/* Main Editorial Content Sections */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection 
          onSelectProject={(id) => {
            if (id === 'deepshield' || id === 'project-deepshield') {
              navigateTo('/projects/deepshield');
            } else {
              navigateTo('/projects/zero-day-mitigation');
            }
          }} 
        />
        <ExperienceSection />
        <EducationSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <PortfolioRouter />
    </GameProvider>
  );
};

export default App;
