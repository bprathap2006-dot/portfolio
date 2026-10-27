import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const ResumeScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 2500);
    }, 400);
  };

  const handleOpenNewTab = () => {
    window.open('/Prathap-B-Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-[92vh] pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC] dark:border-[#232A3B] mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
            Verified Document Dossier
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Curriculum Vitae: <span className="text-blue-600 dark:text-blue-400">Prathap B</span>
          </h1>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold shadow-editorial-sm transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all hover:-translate-y-0.5"
            title="Download original untouched PDF"
          >
            {downloadState === 'success' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Downloaded Successfully</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume (PDF)</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenNewTab}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#F5F1EA] dark:bg-[#161B26] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold transition-colors"
            title="Open original document in dedicated tab"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900 dark:text-blue-200">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span>
            <strong>Authentic Document:</strong> Original 2-page PDF preserved byte-for-byte with unmodified declaration, layout, and credentials.
          </span>
        </div>
        <span className="font-mono text-[11px] text-blue-700 dark:text-blue-400">
          SIZE: 451 KB (PDF)
        </span>
      </div>

      {/* Embedded Native PDF Viewer Frame */}
      <div className="w-full rounded-3xl overflow-hidden bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-lg">
        <div className="bg-[#F5F1EA] dark:bg-[#0F1219] px-4 py-2.5 border-b border-[#E8E4DC] dark:border-[#232A3B] flex items-center justify-between text-xs text-[#71717A]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 inline-block" />
            <span className="font-mono text-[11px]">Prathap-B-Resume.pdf</span>
          </div>
          <span className="text-[11px]">2 Pages &bull; Standard Academic Layout</span>
        </div>

        <div className="w-full h-[800px] bg-[#F5F1EA] dark:bg-[#0F1219] flex flex-col items-center justify-center relative">
          <object
            data="/Prathap-B-Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Embedded PDF Viewer for Prathap B's Resume"
          >
            <div className="p-10 text-center space-y-4 max-w-md">
              <FileText className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-lg font-bold text-[#18181B] dark:text-[#F4F4F5]">
                PDF Preview Not Embedded by Your Browser
              </h3>
              <p className="text-xs text-[#71717A]">
                You can download the original resume or open it in a new tab:
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="px-4 py-2 rounded-xl bg-[#F5F1EA] dark:bg-[#161B26] text-[#18181B] dark:text-[#F4F4F5] text-xs font-semibold"
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
