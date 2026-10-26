import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { projectsData } from '../../data/projectsData';
import { 
  ArrowLeft, 
  FlaskConical, 
  Radio, 
  Network, 
  ArrowRight, 
  Copy, 
  Check
} from 'lucide-react';

export const ProjectsScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyTitle = (id: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playSuccess();
    navigator.clipboard.writeText(title);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>SECTOR 03 // [0x3C_LABS]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            PROJECT DIMENSION: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">Flagship Research Missions</span>
          </h1>
        </div>

        <button
          onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
          className="self-start sm:self-auto flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 font-mono text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO WORLD MAP</span>
        </button>
      </div>

      {/* Intro Mission Dispatch */}
      <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 mb-8 flex items-center justify-between font-mono text-xs text-purple-200">
        <div className="flex items-center space-x-2.5">
          <FlaskConical className="w-4 h-4 text-purple-400" />
          <span>EXPLORATION LAB: Select a research mission below to launch its full-screen architectural telemetry.</span>
        </div>
        <span className="text-[10px] text-purple-400 hidden sm:inline">[2 ACTIVE MISSIONS]</span>
      </div>

      {/* Two Flagship Missions Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Mission A: DeepShield */}
        <div 
          onClick={() => { soundEngine.playSelect(); navigateTo('/projects/deepshield'); }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1224] via-[#090e1a] to-[#060913] border border-cyan-500/40 hover:border-cyan-300 shadow-[0_0_35px_rgba(0,240,255,0.1)] hover:shadow-[0_0_50px_rgba(0,240,255,0.25)] transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                MISSION 03A // AUDIO FORENSICS
              </span>
              <span className="text-[11px] font-mono text-amber-400">
                Final-Year In Progress
              </span>
            </div>

            {/* Mini Waveform Graphic Preview */}
            <div className="p-4 rounded-2xl bg-[#060a14] border border-cyan-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-2">
                <span className="flex items-center space-x-1.5">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  <span>SPECTRAL WAVEFORM TELEMETRY</span>
                </span>
                <span className="text-slate-500">SIMULATED</span>
              </div>
              <div className="h-16 flex items-center justify-between gap-1">
                {[40, 75, 30, 90, 60, 85, 40, 100, 70, 35, 90, 80, 45, 95, 75, 50, 85, 30].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-gradient-to-t from-cyan-600 via-cyan-400 to-violet-400 rounded-full"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                DeepShield
              </h2>
              <p className="text-xs font-mono text-cyan-300/90 mt-0.5">
                AI-Based Fake Voice Detection System Using Deep Learning
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              An AI-based project exploring fake or manipulated voice detection using audio preprocessing, feature extraction (Librosa MFCCs), and deep-learning-based classification.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'TensorFlow', 'Librosa', 'NumPy', 'Scikit-learn', 'Deep Learning'].map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={(e) => handleCopyTitle('deepshield', projectsData[0].fullTitle, e)}
              className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800"
              title="Copy Full Project Title"
            >
              {copiedId === 'deepshield' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Title</span>
                </>
              )}
            </button>

            <span className="flex items-center space-x-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>LAUNCH MISSION BRIEFING</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Mission B: RL Zero-Day Mitigation */}
        <div 
          onClick={() => { soundEngine.playSelect(); navigateTo('/projects/zero-day-mitigation'); }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#120e24] via-[#0b091a] to-[#070613] border border-violet-500/40 hover:border-violet-300 shadow-[0_0_35px_rgba(139,92,246,0.1)] hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-950 text-violet-300 border border-violet-800">
                MISSION 03B // AUTONOMOUS DEFENSE
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                Conference Paper 2026
              </span>
            </div>

            {/* Mini Topology Graphic Preview */}
            <div className="p-4 rounded-2xl bg-[#080614] border border-violet-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-violet-400 mb-2">
                <span className="flex items-center space-x-1.5">
                  <Network className="w-3.5 h-3.5 text-violet-400" />
                  <span>CAMPUS NETWORK TOPOLOGY</span>
                </span>
                <span className="text-slate-500">CONCEPTUAL</span>
              </div>
              <div className="h-16 flex items-center justify-around">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-cyan-400 flex items-center justify-center font-mono text-[9px] text-cyan-300">
                  GW
                </div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-400" />
                <div className="w-11 h-11 rounded-xl bg-violet-950 border-2 border-violet-400 flex items-center justify-center font-mono text-[9px] text-violet-200 font-bold">
                  RL_AGENT
                </div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-violet-400 to-emerald-400" />
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-400 flex items-center justify-center font-mono text-[9px] text-emerald-300">
                  SINK
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-extrabold text-white group-hover:text-violet-300 transition-colors">
                RL Zero-Day Mitigation
              </h2>
              <p className="text-xs font-mono text-violet-300/90 mt-0.5">
                Autonomous Zero-Day Attack Mitigation for Academic Networks
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              A cybersecurity research project exploring network traffic analysis and reinforcement-learning-based approaches to detecting and mitigating zero-day attacks in resource-constrained academic networks.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'TensorFlow', 'Scapy', 'Reinforcement Learning'].map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={(e) => handleCopyTitle('zeroday', projectsData[1].fullTitle, e)}
              className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800"
              title="Copy Full Project Title"
            >
              {copiedId === 'zeroday' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Title</span>
                </>
              )}
            </button>

            <span className="flex items-center space-x-1.5 text-xs font-mono font-bold text-violet-400 group-hover:translate-x-1 transition-transform">
              <span>LAUNCH MISSION BRIEFING</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
