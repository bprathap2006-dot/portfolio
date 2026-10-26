import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { profileData } from '../../data/profileData';
import { 
  ArrowLeft, 
  Radio, 
  Copy, 
  Check
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';

interface DeepShieldScreenProps {
  onBack?: () => void;
}

export const DeepShieldScreen: React.FC<DeepShieldScreenProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(2);
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

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/#projects';
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              <span>// Project Architecture Dossier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              DeepShield: <span className="text-blue-600">AI Fake Voice Detection</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
              Deep learning acoustic forensics identifying synthetic vocal cloning artifacts.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleBack}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-soft-sm transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          </div>
        </div>

        {/* Hero Project Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Details (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Status: {project.status}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-display font-extrabold text-slate-900">
                  {project.fullTitle}
                </h2>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  B.Tech IT Final-Year Engineering Project &bull; In Progress
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {project.fullDescription}
              </p>

              {/* Technologies Grid */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3 items-center">
                <button
                  onClick={handleCopyTitle}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copied ? 'Title Copied' : 'Copy Project Title'}</span>
                </button>

                <a
                  href={project.repoUrl || profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Audio Waveform Simulation (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center space-x-2">
                  <Radio className="w-4 h-4 text-blue-600 animate-pulse" />
                  <span>Spectral Waveform Telemetry</span>
                </div>
                <span className="text-[11px] font-mono text-blue-600">Librosa Audio Engine</span>
              </div>

              {/* Waveform Bar Graphic */}
              <div className="h-32 flex items-center justify-between gap-1 p-2 bg-slate-50 rounded-2xl border border-slate-100">
                {[30, 65, 45, 90, 60, 95, 40, 75, 100, 65, 30, 85, 70, 45, 90, 60, 40, 80, 25].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 text-xs text-blue-900 leading-relaxed space-y-1">
                <span className="font-bold block text-blue-950">Acoustic Artifact Isolation:</span>
                <p className="text-[11px]">
                  Synthesized speech often exhibits unnatural Phase coherence, high-frequency harmonic smearing, and micro-prosody irregularities detectable in MFCC feature tensors.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5-Step Pipeline Architecture Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
              End-to-End Forensics Pipeline
            </span>
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Acoustic Feature Extraction & Deep Classification Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipelineSteps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeStep === idx
                    ? 'bg-blue-50/70 border-blue-400 shadow-sm'
                    : 'bg-[#faf9f6] border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 font-mono">
                    STEP {step.step}
                  </span>
                  {activeStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>
                <h4 className="font-display font-bold text-xs text-slate-900 line-clamp-2">
                  {step.title}
                </h4>
                <span className="text-[10px] text-slate-600 font-mono mt-2 block">
                  {step.tool}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Deep Dive */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-display font-bold block mb-1">
              {pipelineSteps[activeStep].title} Details:
            </strong>
            <p>{pipelineSteps[activeStep].desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
