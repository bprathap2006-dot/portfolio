import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

interface SignalButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SignalButton: React.FC<SignalButtonProps> = ({
  href = '#contact',
  className = '',
  children,
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
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-slate-700 hover:text-blue-600 bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 active:scale-[0.98] transition-all duration-200 group ${className}`}
      aria-label="Let's Connect"
    >
      <span className="relative z-10 flex items-center space-x-2">
        <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
        <span>{children || "Let's Connect"}</span>
        <ArrowUpRight 
          className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
            isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
          }`} 
        />
      </span>
    </a>
  );
};
