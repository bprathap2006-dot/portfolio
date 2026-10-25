import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface SignalButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const SignalButton: React.FC<SignalButtonProps> = ({
  href = '#contact',
  onClick,
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
      className={`relative inline-flex items-center space-x-3 px-6 py-3.5 rounded-lg font-mono text-sm tracking-wide font-medium text-amber-200 bg-amber-950/30 hover:bg-amber-950/50 border border-amber-500/40 hover:border-amber-400 shadow-[0_4px_16px_rgba(245,158,11,0.15)] group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 overflow-hidden ${className}`}
      aria-label="Initiate Contact with Prathap B"
    >
      {/* Animated signal path */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
      </span>

      <span className="tracking-wide group-hover:text-amber-100 transition-colors">
        Initiate Contact
      </span>

      <Send 
        className={`w-3.5 h-3.5 text-amber-400 transition-transform duration-300 ${
          isHovered ? 'translate-x-1 -translate-y-0.5' : ''
        }`} 
      />
    </a>
  );
};
