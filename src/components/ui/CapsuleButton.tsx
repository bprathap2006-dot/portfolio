import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CapsuleButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  onClick,
  href = '#projects',
  className = '',
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);

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
      className={`relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-studio-md hover:shadow-studio-lg transition-all duration-200 group overflow-hidden ${className}`}
      aria-label="Explore My Work"
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>{children || 'Explore My Work'}</span>
        <ArrowRight 
          className={`w-4 h-4 transition-transform duration-200 ${
            isHovered ? 'translate-x-1.5' : 'translate-x-0'
          }`} 
        />
      </span>

      {/* Drawing Accent Line Beneath the Button */}
      <span 
        className={`absolute bottom-0 left-0 h-[2.5px] bg-white/70 transition-all duration-300 ease-out ${
          isHovered || isClicked ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </a>
  );
};
