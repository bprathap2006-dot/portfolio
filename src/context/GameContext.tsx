import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { soundEngine } from '../utils/soundEngine';

export type NexusRoute =
  | '/'
  | '/about'
  | '/skills'
  | '/projects'
  | '/projects/deepshield'
  | '/projects/zero-day-mitigation'
  | '/experience'
  | '/education'
  | '/research'
  | '/achievements'
  | '/contact'
  | '/resume';

interface GameContextType {
  currentRoute: NexusRoute;
  showStartScreen: boolean;
  setShowStartScreen: (show: boolean) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  navigateTo: (route: string) => void;
  activeSectorName: string;
  activeSectorCoord: string;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Section coordinate map for navigation
const SECTOR_COORDS: Record<string, { name: string; coord: string }> = {
  '/': { name: 'DEVELOPER OVERVIEW', coord: 'SECTION_00' },
  '/about': { name: 'DEVELOPER PROFILE', coord: 'SECTION_01' },
  '/skills': { name: 'TECHNOLOGY STACK', coord: 'SECTION_02' },
  '/projects': { name: 'PROJECT SHOWCASE', coord: 'SECTION_03' },
  '/projects/deepshield': { name: 'DEEPSHIELD AI', coord: 'PROJECT_03A' },
  '/projects/zero-day-mitigation': { name: 'ZERO-DAY MITIGATION', coord: 'PROJECT_03B' },
  '/experience': { name: 'EXPERIENCE', coord: 'SECTION_04' },
  '/education': { name: 'ACADEMIC QUALIFICATIONS', coord: 'SECTION_05' },
  '/research': { name: 'RESEARCH & INNOVATION', coord: 'SECTION_06' },
  '/achievements': { name: 'CREDENTIALS', coord: 'SECTION_07' },
  '/contact': { name: "LET'S CONNECT", coord: 'SECTION_08' },
  '/resume': { name: 'PROFESSIONAL RESUME', coord: 'RESUME_DOC' },
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Normalize pathname or hash to known route
  const getInitialRoute = (): NexusRoute => {
    if (typeof window === 'undefined') return '/';
    let path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    if (path === '/' && window.location.hash) {
      const hashPath = '/' + window.location.hash.replace(/^#\/?/, '').toLowerCase().replace(/\/$/, '');
      if (hashPath in SECTOR_COORDS) {
        path = hashPath;
      }
    }
    if (path in SECTOR_COORDS) {
      return path as NexusRoute;
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<NexusRoute>(getInitialRoute);
  
  // Show start screen if at root and hasn't started yet in session
  const [showStartScreen, setShowStartScreen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const initial = getInitialRoute();
    if (initial !== '/') return false;
    try {
      return !sessionStorage.getItem('nexus_exploration_started');
    } catch {
      return true;
    }
  });

  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(() => soundEngine.getSoundState());
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Theme State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('nexus_theme');
      return savedTheme ? savedTheme === 'dark' : true;
    } catch {
      return true;
    }
  });

  // Sync theme with HTML root class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('nexus_theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('nexus_theme', 'light'); } catch {}
    }
  }, [isDarkMode]);

  // Synchronize route with browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const newRoute = getInitialRoute();
      setCurrentRoute(newRoute);
      if (newRoute !== '/') {
        setShowStartScreen(false);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Global keyboard shortcuts (Escape, ~ for CLI)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        soundEngine.playKey();
      } else if (e.key === 'Escape') {
        if (isTerminalOpen) {
          setIsTerminalOpen(false);
        } else if (currentRoute !== '/') {
          navigateTo('/');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen, currentRoute]);

  const toggleSound = () => {
    const newState = soundEngine.toggleSound();
    setIsSoundEnabled(newState);
  };

  const toggleTheme = () => {
    soundEngine.playSelect();
    setIsDarkMode((prev) => !prev);
  };

  const toggleTerminal = () => {
    soundEngine.playKey();
    setIsTerminalOpen((prev) => !prev);
  };

  const navigateTo = (route: string) => {
    const normalized = (route.toLowerCase().replace(/\/$/, '') || '/') as NexusRoute;
    if (normalized in SECTOR_COORDS) {
      soundEngine.playWarp();
      setCurrentRoute(normalized);
      if (normalized !== '/') {
        setShowStartScreen(false);
      }
      try {
        if (window.location.pathname !== normalized) {
          window.history.pushState(null, '', normalized);
        }
      } catch {}
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sectorInfo = SECTOR_COORDS[currentRoute] || SECTOR_COORDS['/'];

  return (
    <GameContext.Provider
      value={{
        currentRoute,
        showStartScreen,
        setShowStartScreen,
        isSoundEnabled,
        toggleSound,
        isDarkMode,
        toggleTheme,
        isTerminalOpen,
        toggleTerminal,
        navigateTo,
        activeSectorName: sectorInfo.name,
        activeSectorCoord: sectorInfo.coord,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
