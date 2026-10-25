import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

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
      className={`relative inline-flex items-center space-x-3 px-5 py-3 rounded-lg font-mono text-sm text-slate-200 bg-[#070b14] hover:bg-[#0c1220] border border-slate-700/80 hover:border-blue-500/60 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${className}`}
      aria-label="Connect with Prathap B on LinkedIn"
    >
      {/* Connected nodes SVG animation */}
      <span className="relative flex items-center justify-center w-5 h-5">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current text-blue-400">
          <circle cx="6" cy="6" r="3" strokeWidth="1.8" className={isHovered ? 'animate-ping' : ''} />
          <circle cx="18" cy="18" r="3" strokeWidth="1.8" />
          <circle cx="18" cy="6" r="2.5" strokeWidth="1.5" />
          <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" strokeWidth="1.8" strokeDasharray={isHovered ? "2 2" : "none"} />
          <line x1="8.5" y1="6" x2="15.5" y2="6" strokeWidth="1.5" />
        </svg>
      </span>

      <span className="tracking-wide text-slate-200 group-hover:text-blue-300 transition-colors">
        Connect on LinkedIn
      </span>

      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-300 transition-colors" />
    </a>
  );
};
