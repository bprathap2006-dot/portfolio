import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  Radio, 
  Layers, 
  Copy, 
  Check, 
  ExternalLink, 
  Compass, 
  Activity
} from 'lucide-react';

export const DeepShieldScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(2); // default Librosa extraction step
  const project = projectsData[0];

  const handleCopyTitle = () => {
    soundEngine.playSuccess();
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
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>MISSION BRIEFING // 0x3D_AUDIO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            DeepShield: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">AI Fake Voice Detection</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/projects'); }}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-mono text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PROJECTS</span>
          </button>
          
          <button
            onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700 font-mono text-xs transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>WORLD MAP</span>
          </button>
        </div>
      </div>

      {/* Hero Mission Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
        {/* Left Column: Mission Details (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-950/70 text-amber-300 border border-amber-600/50">
                Status: {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-white">
                {project.fullTitle}
              </h2>
              <p className="text-xs font-mono text-slate-400 mt-1">
                B.Tech IT Final-Year Engineering Project
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Actions: Copy Title + Repo Link */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={handleCopyTitle}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copy Full Project Title</span>
                  </>
                )}
              </button>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500 text-xs font-mono transition-colors"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="p-6 rounded-3xl bg-[#080d1a] border border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>TECHNICAL APPROACH & ARCHITECTURE HIGHLIGHTS</span>
            </h3>
            <ul className="space-y-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">&gt;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Waveform Simulator & Pipeline HUD (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Animated Waveform Visualizer */}
          <div className="p-6 rounded-3xl bg-[#070b16] border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.1)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-cyan-400">
              <div className="flex items-center space-x-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-bold tracking-wider">SPECTRAL SIMULATOR</span>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                CONCEPTUAL
              </span>
            </div>

            {/* Dynamic Waveform Display */}
            <div className="my-6 h-32 flex items-center justify-between gap-1 px-1">
              {[35, 80, 25, 95, 65, 85, 45, 100, 75, 40, 90, 85, 45, 100, 70, 50, 90, 30, 65, 95, 40, 80, 55, 30].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-cyan-600 via-cyan-400 to-violet-400 rounded-full transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    animation: `pulse ${1.1 + (i % 6) * 0.2}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>

            <div className="text-[10px] font-mono text-slate-400 italic text-center">
              * Illustrative model of MFCC acoustic energy bands across 24 frequency channels.
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="p-6 rounded-3xl bg-[#080d1a] border border-slate-800 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-slate-400">
              MISSION TOOLCHAIN
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-900 border border-cyan-900/60 text-xs text-cyan-300 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Interactive 5-Step Pipeline Telemetry */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-semibold">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>INTERACTIVE ACOUSTIC FORENSICS PIPELINE</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Click any phase to inspect data transformation
          </span>
        </div>

        {/* Pipeline Step Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {pipelineSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => { soundEngine.playHover(); setActiveStep(idx); }}
                className={`p-3.5 rounded-2xl text-left font-mono transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-xs text-cyan-400 font-bold mb-1">
                  PHASE [{step.step}]
                </div>
                <div className="text-xs font-display font-semibold line-clamp-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Readout */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-cyan-400 font-bold">
              PHASE {pipelineSteps[activeStep].step}: {pipelineSteps[activeStep].title}
            </span>
            <p className="text-slate-300 font-sans text-sm">
              {pipelineSteps[activeStep].desc}
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800 flex-shrink-0">
            ENGINE: {pipelineSteps[activeStep].tool}
          </div>
        </div>

      </div>

    </div>
  );
};
