import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  GitBranch 
} from 'lucide-react';

export const DeepShieldScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copied, setCopied] = useState(false);
  const project = projectsData[0];

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(project.fullTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const pipelineSteps = [
    {
      step: '01',
      title: 'Raw Acoustic Audio Ingestion',
      desc: 'Ingesting raw waveform signals (.wav format) at consistent sampling frequency (22,050 Hz).',
      tool: 'Python Wave / SoundFile',
    },
    {
      step: '02',
      title: 'Signal Preprocessing & Normalization',
      desc: 'Silent interval trimming, DC offset cancellation, pre-emphasis filtering, and peak amplitude scaling.',
      tool: 'NumPy Signal Processing',
    },
    {
      step: '03',
      title: 'Spectral Feature Extraction',
      desc: 'Extracting Mel-Frequency Cepstral Coefficients (MFCCs), spectral centroid, roll-off, and zero-crossing rate.',
      tool: 'Librosa Acoustic Forensics',
    },
    {
      step: '04',
      title: 'Deep Neural Classification',
      desc: 'Feeding 2D feature matrices into sequential CNN/Dense layers to isolate synthetic acoustic artifacts.',
      tool: 'TensorFlow / Keras',
    },
    {
      step: '05',
      title: 'Veracity Assessment',
      desc: 'Outputting probability scores distinguishing authentic vocal resonance from synthetic cloning.',
      tool: 'Classification Head',
    },
  ];

  return (
    <div className="relative min-h-[92vh] pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Header with Return Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-slate-800 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
            <span>Project Deep Dive &bull; AI / Audio Forensics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            {project.name}
          </h1>
        </div>

        <button
          onClick={() => navigateTo('/')}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-stone-50 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 text-xs font-semibold shadow-sm transition-all self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>
      </div>

      {/* Main Content Card */}
      <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-lg space-y-8">
        
        {/* Full Title & Status */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
              AI-Based Acoustic Forensics
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
              {project.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            {project.fullTitle}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {project.fullDescription}
          </p>
        </div>

        {/* 5-Step Pipeline Walkthrough */}
        <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
            End-to-End Processing Pipeline
          </span>

          <div className="space-y-3">
            {pipelineSteps.map((step) => (
              <div 
                key={step.step}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-stone-200 dark:border-slate-700 self-start sm:self-center">
                  {step.tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
            Architectural Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {project.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 dark:bg-slate-850 border border-stone-200/60 dark:border-slate-800 flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="pt-2">
          <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
            Core Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Repository Notice & Copy Action */}
        <div className="pt-4 border-t border-stone-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <GitBranch className="w-4 h-4 text-blue-600" />
            <span>Repository in active development. Source code will be published upon academic review.</span>
          </div>

          <button
            onClick={handleCopyTitle}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Title Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Project Title</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
