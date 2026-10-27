import React, { useState } from 'react';
import { FileText, Download, Check } from 'lucide-react';

interface DocumentButtonProps {
  resumeUrl?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'nav';
}

export const DocumentButton: React.FC<DocumentButtonProps> = ({
  resumeUrl = '/Prathap-B-Resume.pdf',
  className = '',
  variant = 'secondary',
}) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDownloadStatus('downloading');

    // Trigger download of actual authentic PDF
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Prathap-B-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadStatus('success');
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 2500);
    }, 600);
  };

  const isNav = variant === 'nav';

  return (
    <a
      href={resumeUrl}
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        isNav
          ? `inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors ${className}`
          : `relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-slate-800 hover:text-blue-600 bg-white hover:bg-slate-50 border border-stone-200/90 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:hover:bg-slate-800/90 shadow-studio-sm hover:shadow-studio-md active:scale-[0.98] transition-all duration-200 group ${className}`
      }
      aria-label="Download Resume"
      title="Download original Prathap-B-Resume.pdf"
    >
      <span className="relative z-10 flex items-center space-x-2">
        {/* Animated Document Icon */}
        <FileText 
          className={`w-4 h-4 transition-transform duration-300 ${
            downloadStatus === 'downloading' 
              ? 'animate-bounce text-blue-600' 
              : isHovered 
              ? '-translate-y-0.5 text-blue-600' 
              : 'text-slate-500 dark:text-slate-400'
          }`} 
        />
        
        <span>
          {downloadStatus === 'downloading'
            ? 'Downloading...'
            : downloadStatus === 'success'
            ? 'Downloaded!'
            : 'Download Resume'}
        </span>

        {downloadStatus === 'success' ? (
          <Check className="w-4 h-4 text-emerald-600 animate-scale-in" />
        ) : (
          <Download 
            className={`w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
              isHovered ? 'translate-y-0.5' : ''
            }`} 
          />
        )}
      </span>
    </a>
  );
};
