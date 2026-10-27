import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { educationData } from '../../data/educationData';
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  MapPin
} from 'lucide-react';

export const EducationScreen: React.FC = () => {
  const { navigateTo } = useGame();

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>SECTOR 05 // [0x50_AKT]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ACADEMIC VAULT: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">Education Milestones</span>
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

      {/* Academic Vault Timeline */}
      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={edu.id}
            className="p-6 sm:p-7 rounded-3xl bg-[#080d1a] border border-sky-500/30 shadow-xl space-y-4 hover:border-sky-400 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-3">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold">
                  VAULT_RECORD_0{idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5">
                  {edu.institution}
                </h2>
                <div className="text-sm font-mono text-cyan-300 font-semibold mt-0.5">
                  {edu.degree}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                <span className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-amber-950/70 text-amber-300 border border-amber-800/80 font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{edu.score}</span>
                </span>
              </div>
            </div>

            {/* Status & Location Details */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              {edu.statusNote && (
                <span className="px-3 py-1 rounded-xl bg-sky-950/70 text-sky-300 border border-sky-800 font-semibold">
                  STATUS: {edu.statusNote}
                </span>
              )}
              {edu.location && (
                <span className="flex items-center space-x-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </span>
              )}
            </div>

            {/* Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-1.5 pt-2">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-sky-400 font-mono font-bold mt-0.5">&gt;</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
