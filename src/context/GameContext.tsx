import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { soundEngine } from '../utils/soundEngine';

export type PortfolioRoute =
  | '/'
  | '/resume'
  | '/projects/deepshield'
  | '/projects/zero-day-mitigation';

interface GameContextType {
  currentRoute: PortfolioRoute;
  navigateTo: (route: string) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
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
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(() => soundEngine.getSoundState());

  const navigateTo = (route: string) => {
    // If navigating to dedicated sub-page
    if (route === '/resume' || route === '/projects/deepshield' || route === '/projects/zero-day-mitigation') {
      setCurrentRoute(route as PortfolioRoute);
      window.history.pushState(null, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to a section on the home page (e.g. '/' or '/#projects')
    if (currentRoute !== '/') {
      setCurrentRoute('/');
      window.history.pushState(null, '', route);
      setTimeout(() => {
        const hash = route.includes('#') ? route.split('#')[1] : '';
        if (hash) {
          const elem = document.getElementById(hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const hash = route.replace(/^\/?#?/, '');
      if (hash) {
        const elem = document.getElementById(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentRoute(route);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleSound = () => {
    const next = soundEngine.toggleSound();
    setIsSoundEnabled(next);
  };

  return (
    <GameContext.Provider
      value={{
        currentRoute,
        navigateTo,
        isSoundEnabled,
        toggleSound,
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
