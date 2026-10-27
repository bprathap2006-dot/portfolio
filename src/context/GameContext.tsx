import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PortfolioRoute =
  | '/'
  | '/about'
  | '/skills'
  | '/projects'
  | '/projects/deepshield'
  | '/projects/zero-day-mitigation'
  | '/experience'
  | '/education'
  | '/research'
  | '/certifications'
  | '/contact'
  | '/resume';

interface GameContextType {
  currentRoute: PortfolioRoute;
  isDarkMode: boolean;
  toggleTheme: () => void;
  navigateTo: (route: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialRoute = (): PortfolioRoute => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    if (path === '/resume') return '/resume';
    if (path === '/projects/deepshield') return '/projects/deepshield';
    if (path === '/projects/zero-day-mitigation') return '/projects/zero-day-mitigation';
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<PortfolioRoute>(getInitialRoute);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Light-first theme preference (default to light per request)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('nexus_theme');
      return savedTheme === 'dark'; // Only dark if explicitly set
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('nexus_theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('nexus_theme', 'light'); } catch {}
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navigateTo = (route: string) => {
    // If it's a hash anchor like '#projects', scroll to it smoothly
    if (route.startsWith('#')) {
      const target = document.querySelector(route);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', route);
        setActiveSection(route.replace('#', ''));
      }
      return;
    }

    // Normal path navigation
    setCurrentRoute(route as PortfolioRoute);
    try {
      window.history.pushState({}, '', route);
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Browser back/forward navigation sync
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <GameContext.Provider
      value={{
        currentRoute,
        isDarkMode,
        toggleTheme,
        navigateTo,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
