import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

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
      className={`relative inline-flex items-center space-x-2.5 px-5 py-3 rounded-lg font-mono text-sm text-slate-200 bg-[#070b14] hover:bg-[#0c1220] border border-slate-700/80 hover:border-violet-500/60 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${className}`}
      aria-label="Explore GitHub profile of Prathap B"
    >
      {/* Terminal prompt symbol */}
      <span className="text-violet-400 font-bold">&gt;_</span>
      
      {/* Label with moving cursor */}
      <span className="flex items-center">
        <span className="tracking-wide">git checkout /bprathap</span>
        <span 
          className={`inline-block w-2 h-3.5 ml-1 bg-violet-400 transition-opacity ${
            isHovered ? 'animate-pulse opacity-100' : 'opacity-60'
          }`}
        />
      </span>

      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-300 transition-colors ml-1" />
    </a>
  );
};
