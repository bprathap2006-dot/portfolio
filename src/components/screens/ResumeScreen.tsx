import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
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
    window.open('/Prathap-B-Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-[92vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fade-in font-sans">
      
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC] dark:border-[#232A3B] mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span>Verified Curriculum Vitae (PDF)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Original Resume: <span className="text-blue-600 dark:text-blue-400">Prathap B</span>
          </h1>
        </div>

        {/* Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold transition-all shadow-editorial-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-editorial-sm hover:shadow-editorial-md transition-all"
            title="Download original untouched PDF"
          >
            {downloadState === 'success' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Downloaded!</span>
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
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold transition-all shadow-editorial-sm"
            title="Open original document in separate browser tab"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900 dark:text-blue-200">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span>
            Authentic document: Original unmodified 2-page PDF preserved byte-for-byte with declaration, signature area, and academic credentials.
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-white dark:bg-[#161B26] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B] flex items-center space-x-1 flex-shrink-0 font-mono text-[11px]">
          <FileCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>451 KB &bull; PDF-1.7</span>
        </span>
      </div>

      {/* Embedded Document Viewer Container */}
      <div className="relative rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] p-2 sm:p-4 shadow-editorial-lg overflow-hidden">
        
        {/* Frame Top Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#F5F1EA] dark:bg-[#0F1219] rounded-xl mb-3 text-xs text-[#71717A] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 font-semibold text-[#18181B] dark:text-[#F4F4F5] truncate">Prathap-B-Resume.pdf</span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-semibold">
            <a 
              href="/Prathap-B-Resume.pdf" 
              download="Prathap-B-Resume.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save</span>
            </a>
            <a 
              href="/Prathap-B-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white flex items-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Full Screen</span>
            </a>
          </div>
        </div>

        {/* Embedded Object / Iframe Viewer */}
        <div className="w-full h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
          <object
            data="/Prathap-B-Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Original Resume PDF of Prathap B"
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4 text-[#52525B] dark:text-[#A1A1AA]">
              <FileText className="w-12 h-12 text-blue-600" />
              <p className="text-sm">
                PDF preview not directly supported in this browser viewport. Click below to view or download the authentic resume.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-editorial-sm"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] text-[#18181B] dark:text-[#F4F4F5] font-semibold text-xs"
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
