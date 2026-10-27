import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck 
} from 'lucide-react';

export const ResumeScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownload = () => {
    soundEngine.playScan();
    setDownloadState('downloading');
    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 3000);
    }, 400);
  };

  const handleOpenNewTab = () => {
    soundEngine.playSelect();
    window.open('/Prathap-B-Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-900/40 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ORIGINAL RESUME ARCHIVE // [VERIFIED_PDF]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Curriculum Vitae: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Prathap B</span>
          </h1>
        </div>

        {/* Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 font-mono text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>WORLD MAP</span>
          </button>

          <button
            onClick={handleDownload}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
            title="Download original untouched PDF"
          >
            {downloadState === 'success' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>DOWNLOAD COMPLETE</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-950" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenNewTab}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs transition-colors"
            title="Open original document in dedicated tab"
          >
            <span>OPEN IN NEW TAB</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-cyan-300">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>
            AUTHENTIC DOCUMENT: Original unmodified 2-page PDF preserved byte-for-byte with declaration, signature area, and academic credentials.
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 flex items-center space-x-1 flex-shrink-0">
          <FileCheck className="w-3 h-3 text-cyan-400" />
          <span>451 KB // PDF-1.7</span>
        </span>
      </div>

      {/* Embedded Document Viewer Container */}
      <div className="relative rounded-3xl bg-[#080d1a] border border-cyan-500/40 p-2 sm:p-4 shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-hidden">
        
        {/* Frame Top Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/80 rounded-xl mb-3 font-mono text-[11px] text-slate-400 border border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-300 font-semibold truncate">PRATHAPB.RESUME.pdf</span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <a 
              href="/Prathap-B-Resume.pdf" 
              download="Prathap-B-Resume.pdf"
              className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save</span>
            </a>
            <a 
              href="/Prathap-B-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Full Screen</span>
            </a>
          </div>
        </div>

        {/* Embedded Object / Iframe Viewer */}
        <div className="w-full h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <object
            data="/Prathap-B-Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Original Resume PDF of Prathap B"
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4 font-mono text-slate-300">
              <FileText className="w-12 h-12 text-cyan-400 animate-pulse" />
              <p className="text-sm">
                PDF viewer plugin not detected in browser. Click below to view or download the authentic resume.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs"
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          </object>
        </div>

      </div>

    </div>
  );
};
