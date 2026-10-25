import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CapsuleButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  onClick,
  href = '#projects',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-mono text-sm tracking-wider font-semibold uppercase text-cyan-200 bg-gradient-to-r from-cyan-950/70 via-blue-950/60 to-slate-900/80 backdrop-blur-md overflow-hidden group shadow-[0_0_20px_rgba(0,240,255,0.18)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${className}`}
      aria-label="Explore Projects"
    >
      {/* Traveling light border beam */}
      <span
        className={`absolute inset-0 rounded-full border border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300`}
      />
      <span
        className={`absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px] pointer-events-none`}
        style={{
          animation: isHovered ? 'spin 1.8s linear infinite' : 'none',
        }}
      />

      {/* Traveling light particle on border */}
      <span 
        className="absolute top-0 left-0 w-8 h-[2px] bg-cyan-300 shadow-[0_0_10px_#00f0ff] animate-[beam_2.5s_infinite]"
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center space-x-2.5">
        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        <span className="tracking-widest">Explore Projects</span>
        <ArrowRight 
          className={`w-4 h-4 text-cyan-300 transition-transform duration-300 ${
            isHovered ? 'translate-x-1.5 text-cyan-200' : ''
          }`} 
        />
      </span>
    </a>
  );
};
