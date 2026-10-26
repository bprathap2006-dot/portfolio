import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { researchData } from '../../data/researchData';
import { 
  ArrowLeft, 
  Calendar, 
  Building, 
  Shield, 
  Cpu, 
  Network
} from 'lucide-react';

export const ResearchScreen: React.FC = () => {
  const { navigateTo } = useGame();

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-indigo-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>SECTOR 06 // [0x61_PAPER]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            RESEARCH TERMINAL: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Conference Publication</span>
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

      {/* Main Research Terminal Dossier */}
      <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0c0a1c] via-[#080914] to-[#05060e] border border-indigo-500/40 shadow-2xl space-y-6">
        
        {/* Event & Paper Title */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700 font-bold">
              PEER-REVIEWED CONFERENCE PROCEEDING
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
              <Building className="w-3.5 h-3.5 text-indigo-400" />
              <span>{researchData.institution}</span>
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>{researchData.conference} ({researchData.year})</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
            {researchData.title}
          </h2>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {researchData.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-indigo-900/60 text-indigo-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Paper Abstract Style Breakdown */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center space-x-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>THE CYBERSECURITY CHALLENGE</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {researchData.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>REINFORCEMENT LEARNING MITIGATION METHODOLOGY</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {researchData.methodology}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-bold flex items-center space-x-2">
              <Network className="w-4 h-4 text-indigo-400" />
              <span>ENGINEERING SIGNIFICANCE & CONSTRAINTS</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {researchData.significance}
            </p>
          </div>

        </div>

        {/* Ground-truth disclosure note */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>PRESENTED AT 4TH INT. CONF. // SURYA GROUP OF INSTITUTIONS (2026)</span>
          <span className="text-indigo-400 font-bold">[VERIFIED ENTRY]</span>
        </div>

      </div>

    </div>
  );
};
