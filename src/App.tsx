import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { NexusCanvas } from './components/layout/NexusCanvas';
import { GameHUD } from './components/game/GameHUD';
import { GameFooter } from './components/game/GameFooter';
import { StartScreen } from './components/game/StartScreen';
import { WorldMap } from './components/game/WorldMap';
import { TerminalDrawer } from './components/game/TerminalDrawer';

// Dedicated Sector Screens
import { AboutScreen } from './components/screens/AboutScreen';
import { SkillsScreen } from './components/screens/SkillsScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { DeepShieldScreen } from './components/screens/DeepShieldScreen';
import { ZeroDayScreen } from './components/screens/ZeroDayScreen';
import { ExperienceScreen } from './components/screens/ExperienceScreen';
import { EducationScreen } from './components/screens/EducationScreen';
import { ResearchScreen } from './components/screens/ResearchScreen';
import { AchievementsScreen } from './components/screens/AchievementsScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { ResumeScreen } from './components/screens/ResumeScreen';

const PortfolioGameRouter: React.FC = () => {
  const { currentRoute, showStartScreen, isDarkMode } = useGame();

  // If StartScreen is active, present the Cyberpunk 2077-styled title menu
  if (showStartScreen) {
    return (
      <div className="relative min-h-screen bg-[#04060c] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
        <StartScreen />
        <TerminalDrawer />
      </div>
    );
  }

  // Active sector screen renderer
  const renderCurrentSector = () => {
    switch (currentRoute) {
      case '/about':
        return <AboutScreen />;
      case '/skills':
        return <SkillsScreen />;
      case '/projects':
        return <ProjectsScreen />;
      case '/projects/deepshield':
        return <DeepShieldScreen />;
      case '/projects/zero-day-mitigation':
        return <ZeroDayScreen />;
      case '/experience':
        return <ExperienceScreen />;
      case '/education':
        return <EducationScreen />;
      case '/research':
        return <ResearchScreen />;
      case '/achievements':
        return <AchievementsScreen />;
      case '/contact':
        return <ContactScreen />;
      case '/resume':
        return <ResumeScreen />;
      case '/':
      default:
        return <WorldMap />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#04060c] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic Computational Cyber Canvas */}
      <NexusCanvas isDarkMode={isDarkMode} />

      {/* Persistent Sci-Fi Top Navigation HUD */}
      <GameHUD />

      {/* Main Game World / Dedicated Sector Stage */}
      <main className="relative z-10">
        {renderCurrentSector()}
      </main>

      {/* Terminal Easter Egg Drawer (Command Line ~) */}
      <TerminalDrawer />

      {/* Cyberpunk Game Exploration Footer */}
      <GameFooter />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <PortfolioGameRouter />
    </GameProvider>
  );
};

export default App;
