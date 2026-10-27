import React, { useState } from 'react';
import { GithubIcon } from './BrandIcons';

interface TerminalButtonProps {
  url?: string;
  className?: string;
}

export const TerminalButton: React.FC<TerminalButtonProps> = ({
  url = 'https://github.com/bprathap2006-dot',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-stone-200/90 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 shadow-studio-sm hover:shadow-studio-md transition-all duration-200 group ${className}`}
      aria-label="GitHub Profile (opens in new tab)"
      title="View GitHub Profile: https://github.com/bprathap2006-dot"
    >
      <GithubIcon 
        className={`w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-transform duration-200 ${
          isHovered ? '-translate-y-0.5 rotate-[-4deg]' : ''
        }`} 
      />
      <span>GitHub</span>
    </a>
  );
};
