import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { NexusCanvas } from './components/layout/NexusCanvas';
import { StartScreen } from './components/game/StartScreen';
import { GameHUD } from './components/game/GameHUD';
import { WorldMap } from './components/game/WorldMap';
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
import { TerminalDrawer } from './components/game/TerminalDrawer';
import { profileData } from './data/profileData';
import { Shield } from 'lucide-react';

const ScreenRouter: React.FC = () => {
  const { currentRoute, showStartScreen, isDarkMode } = useGame();

  if (showStartScreen) {
    return <StartScreen />;
  }

  const renderActiveScreen = () => {
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
    <div className="relative min-h-screen bg-[#04060c] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Persistent Subtle Canvas Background */}
      <NexusCanvas isDarkMode={isDarkMode} />

      {/* Global Interactive Game HUD */}
      <GameHUD />

      {/* Active Dedicated Screen View */}
      <main className="relative z-10 flex-1">
        {renderActiveScreen()}
      </main>

      {/* Persistent Terminal CLI Easter Egg Drawer */}
      <TerminalDrawer />

      {/* Minimalist Futuristic Footer Bar */}
      <footer className="relative z-10 border-t border-slate-900 bg-[#03050a] py-4 px-4 sm:px-8 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-400 font-semibold">{profileData.name}</span>
          <span>//</span>
          <span>B.Tech IT (2023–2027) • AKT MCET</span>
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <span className="text-slate-500 hidden sm:inline">Press ~ for CLI</span>
          <span>•</span>
          <span className="flex items-center space-x-1 text-cyan-400/80">
            <Shield className="w-3 h-3 text-cyan-400" />
            <span>Cloudflare Pages SPA Ready</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <GameProvider>
      <ScreenRouter />
    </GameProvider>
  );
};

export default App;
