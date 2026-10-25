import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, ChevronRight, X } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const NexusBootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const steps = [
    { text: "INITIALIZING PRATHAP.NEXUS KERNEL", icon: Cpu, latency: "0.2ms" },
    { text: "LOADING PROJECT MODULES & TELEMETRY", icon: Terminal, latency: "0.8ms" },
    { text: "CONNECTING TO THE DEVELOPER PROFILE", icon: Shield, latency: "1.2ms" }
  ];

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Step progression
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 600);

    // Progress bar progression
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 85);

    // Auto dismiss after ~2 seconds
    const completeTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 400);
    }, 2200);

    // Keyboard shortcut to skip: Escape or Space
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setIsFadingOut(true);
        setTimeout(onComplete, 150);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 150);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#05070d] transition-opacity duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="System Initialization"
    >
      {/* Background ambient grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative w-full max-w-lg mx-4 p-6 sm:p-8 rounded-xl bg-[#090e1a]/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-md">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-900/40 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 font-semibold">
              PRATHAP // NEXUS_BOOT_V2.0
            </span>
          </div>
          <button
            onClick={handleSkip}
            className="flex items-center space-x-1 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700"
            title="Skip Intro (ESC)"
          >
            <span>SKIP [ESC]</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Steps Log */}
        <div className="space-y-3 font-mono text-xs sm:text-sm mb-6 min-h-[110px]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = idx < stepIndex || (idx === stepIndex && progress > 90);
            const isCurrent = idx === stepIndex;
            const isPending = idx > stepIndex;

            return (
              <div
                key={idx}
                className={`flex items-center justify-between transition-all duration-300 ${
                  isPending ? 'opacity-25' : isCurrent ? 'text-cyan-300 font-medium' : 'text-slate-400'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-cyan-400 animate-spin' : isCompleted ? 'text-emerald-400' : 'text-slate-600'}`} />
                  <span className="tracking-wide">{step.text}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono flex items-center space-x-1">
                  {isCompleted ? (
                    <span className="text-emerald-400 font-semibold">[OK]</span>
                  ) : isCurrent ? (
                    <span className="text-cyan-400 animate-pulse">RUNNING</span>
                  ) : (
                    <span>QUEUED</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>CALIBRATING WORKSTATION</span>
            <span className="text-cyan-400">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>MEM: OK // LATENCY: 0.12ms</span>
          <span className="flex items-center text-cyan-400/80">
            CLICK ANYWHERE OR WAIT TO ENTER <ChevronRight className="w-3 h-3 ml-0.5 inline" />
          </span>
        </div>
      </div>
    </div>
  );
};
