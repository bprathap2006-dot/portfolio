import React, { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

interface ResumeScreenProps {
  onBack?: () => void;
}

export const ResumeScreen: React.FC<ResumeScreenProps> = ({ onBack }) => {
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

  const handleBackToPortfolio = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Navigation & Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              <span>// Verified Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Original Curriculum Vitae: <span className="text-blue-600">Prathap B</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
              Authentic original PDF preserved byte-for-byte with unmodified layout, declaration, and signature area.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleBackToPortfolio}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-soft-sm transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-soft-sm hover:shadow-soft-md transition-all hover:-translate-y-0.5"
              title="Download original untouched PDF"
            >
              {downloadState === 'success' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenNewTab}
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold shadow-soft-sm transition-all hover:-translate-y-0.5"
              title="Open original document in dedicated tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Verification Banner */}
        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>
              <strong>Byte-for-Byte Preservation:</strong> Layout, content, academic coursework, declaration, and signature areas are untouched.
            </span>
          </div>
          <span className="text-[11px] font-mono text-blue-700 font-semibold flex-shrink-0">
            SIZE: 451 KB (PDF)
          </span>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-soft-xl overflow-hidden min-h-[750px] flex flex-col">
          <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Prathap-B-Resume.pdf</span>
            </div>
            <a
              href="/Prathap-B-Resume.pdf"
              download="Prathap-B-Resume.pdf"
              className="text-blue-600 hover:underline flex items-center space-x-1"
            >
              <span>Download</span>
              <Download className="w-3 h-3" />
            </a>
          </div>

          {/* Actual Embedded Document */}
          <div className="flex-1 w-full min-h-[720px] bg-slate-50 relative">
            <object
              data="/Prathap-B-Resume.pdf"
              type="application/pdf"
              className="w-full h-full min-h-[720px]"
              aria-label="Prathap B Original Resume PDF Document"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                <FileText className="w-16 h-16 text-blue-600" />
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Prathap B — Original Resume PDF
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Your browser does not support inline PDF viewing. You can download or view the authentic original resume directly below.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/Prathap-B-Resume.pdf"
                    download="Prathap-B-Resume.pdf"
                    className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-md"
                  >
                    Download Resume PDF
                  </a>
                  <a
                    href="/Prathap-B-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs"
                  >
                    Open in New Tab
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

      </div>
    </div>
  );
};
