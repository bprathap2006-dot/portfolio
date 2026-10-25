import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, AlertCircle } from 'lucide-react';

interface DocumentButtonProps {
  resumeUrl?: string;
  className?: string;
}

export const DocumentButton: React.FC<DocumentButtonProps> = ({
  resumeUrl = '/Prathap-B-Resume.pdf',
  className = '',
}) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDownloadStatus('downloading');

    try {
      // Verify that the PDF is genuinely reachable
      const response = await fetch(resumeUrl, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error('PDF file not reachable');
      }

      // Initiate download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'Prathap-B-Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus('success');
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3500);
    } catch {
      // Fallback: direct window open if head check fails or CORS
      try {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'Prathap-B-Resume.pdf');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 3500);
      } catch {
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus('idle'), 4000);
      }
    }
  };

  return (
    <div className="relative inline-block">
      <a
        href={resumeUrl}
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-mono text-sm tracking-wide font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/60 shadow-[0_4px_16px_rgba(0,0,0,0.4)] backdrop-blur-md overflow-hidden group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${className}`}
        aria-label="Download Resume PDF"
      >
        {/* Scanning Line Animation */}
        <span 
          className="absolute inset-x-0 h-[2px] bg-cyan-400/30 blur-[1px] pointer-events-none group-hover:bg-cyan-400/60 transition-colors duration-300"
          style={{
            animation: isHovered ? 'scanline 2s linear infinite' : 'scanline 5s linear infinite',
          }}
        />

        {/* Subtle lateral corner bracket indicators */}
        <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-cyan-400/40" />
        <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-cyan-400/40" />
        <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-cyan-400/40" />
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-cyan-400/40" />

        {/* Button Content */}
        <span className="relative z-10 flex items-center space-x-2.5">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>
            {downloadStatus === 'downloading'
              ? 'PREPARING PDF...'
              : downloadStatus === 'success'
              ? 'RESUME DISPATCHED'
              : downloadStatus === 'error'
              ? 'FILE UNAVAILABLE'
              : 'Download Resume'}
          </span>
          {downloadStatus === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-bounce" />
          ) : downloadStatus === 'error' ? (
            <AlertCircle className="w-4 h-4 text-amber-400" />
          ) : (
            <Download 
              className={`w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-transform duration-300 ${
                isHovered ? 'translate-y-0.5' : ''
              }`} 
            />
          )}
        </span>
      </a>

      {/* Restrained Document Preview Cue Tooltip */}
      {isHovered && downloadStatus === 'idle' && (
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 whitespace-nowrap shadow-xl pointer-events-none z-20 animate-fade-in"
        >
          [PDF 2.4KB // VERIFIED CV]
        </div>
      )}
    </div>
  );
};
