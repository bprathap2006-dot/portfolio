import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  onToggle,
  className = '',
}) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-cyan-300 bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${className}`}
      aria-label={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDarkMode ? 'Toggle Light Theme' : 'Toggle Dark Theme'}
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4 text-amber-400 animate-spin-slow transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
