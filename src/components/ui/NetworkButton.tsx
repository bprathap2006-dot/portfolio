import React, { useState } from 'react';
import { LinkedinIcon } from './BrandIcons';

interface NetworkButtonProps {
  url?: string;
  className?: string;
}

export const NetworkButton: React.FC<NetworkButtonProps> = ({
  url = 'https://www.linkedin.com/in/prathap-b-0b226639b',
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
      className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-stone-200/90 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 shadow-studio-sm hover:shadow-studio-md transition-all duration-200 group ${className}`}
      aria-label="LinkedIn Profile (opens in new tab)"
      title="View LinkedIn Profile: https://www.linkedin.com/in/prathap-b-0b226639b"
    >
      <LinkedinIcon 
        className={`w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-transform duration-200 ${
          isHovered ? '-translate-y-0.5 scale-105' : ''
        }`} 
      />
      <span>LinkedIn</span>
    </a>
  );
};
