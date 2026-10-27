import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Radio, 
  Layers, 
  Copy, 
  Check, 
  ExternalLink, 
  Activity,
  CheckCircle2
} from 'lucide-react';

export const DeepShieldScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(2); // default Librosa extraction step
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
    <div className="relative min-h-[92vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fade-in font-sans">
      
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC] dark:border-[#232A3B] mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span>Project Detail &bull; AI Forensics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            DeepShield: <span className="text-blue-600 dark:text-blue-400">AI Fake Voice Detection</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] text-xs font-semibold transition-all shadow-editorial-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Mission Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
        {/* Left Column: Mission Details (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                Status: {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
                {project.fullTitle}
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1 font-mono">
                B.Tech IT Engineering Capstone &bull; A.K.T Memorial College of Engineering and Technology
              </p>
            </div>

            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="pt-3 border-t border-[#F0ECE4] dark:border-[#232A3B] flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyTitle}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1A2234] text-xs font-medium text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B] transition-colors"
                title="Copy formal academic project title to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Full Project Title'}</span>
              </button>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-editorial-sm transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>

          </div>

          {/* Technical Stack Tags */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block mb-3">
              Engineering Architecture & Toolchain
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Audio Waveform & Feature Visualizer (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4] dark:border-[#232A3B] text-xs">
              <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
                <Radio className="w-4 h-4" />
                <span>Acoustic Waveform Telemetry</span>
              </span>
              <span className="text-[11px] font-mono text-[#71717A] bg-[#F5F1EA] dark:bg-[#0F1219] px-2 py-0.5 rounded border border-[#E8E4DC] dark:border-[#232A3B]">
                22.05 kHz &bull; Librosa
              </span>
            </div>

            {/* Simulated Audio Spectrum Waveform */}
            <div className="h-32 flex items-center justify-between gap-1 px-2 bg-[#FBF9F5] dark:bg-[#0F1219] rounded-2xl p-4 border border-[#E8E4DC] dark:border-[#232A3B]">
              {[40, 75, 30, 90, 50, 85, 35, 95, 60, 25, 80, 70, 45, 85, 75, 50, 90, 40, 65, 95, 55, 35, 80, 45].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-blue-600 dark:bg-blue-500 rounded-sm transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    opacity: i % 2 === 0 ? 0.9 : 0.6,
                  }}
                />
              ))}
            </div>

            {/* Extracted Acoustic Indicators */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
                <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">MFCC Coefficients</div>
                <div className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm mt-0.5">13 Dimensions</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B]">
                <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">Sampling Rate</div>
                <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm mt-0.5">22,050 Hz Mono</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 5-Step Pipeline Walkthrough */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
          <Layers className="w-4 h-4 text-blue-600" />
          <span>Interactive 5-Stage Detection Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pipelineSteps.map((p, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={p.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isCurrent
                    ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 dark:border-blue-500 shadow-editorial-sm'
                    : 'bg-white dark:bg-[#161B26] border-[#E8E4DC] dark:border-[#232A3B] hover:bg-[#FBF9F5] dark:hover:bg-[#1C2230]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-[#71717A]'}`}>
                    STAGE {p.step}
                  </span>
                  {isCurrent && <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />}
                </div>
                <h4 className="font-display font-bold text-xs text-[#18181B] dark:text-[#F4F4F5] mb-1">
                  {p.title}
                </h4>
                <div className="text-[11px] font-mono text-[#71717A] dark:text-[#A1A1AA]">
                  {p.tool}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pipeline Stage Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm flex items-start space-x-3.5">
          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5] mr-1.5">
              Stage {pipelineSteps[activeStep].step} Details:
            </span>
            <span className="text-[#52525B] dark:text-[#A1A1AA]">
              {pipelineSteps[activeStep].desc}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
