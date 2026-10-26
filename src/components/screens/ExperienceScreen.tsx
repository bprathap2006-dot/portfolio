import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { experienceData } from '../../data/experienceData';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export const ExperienceScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const exp = experienceData[0];

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SECTOR 04 // [0x4F_HANON]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            EXPERIENCE ARCHIVE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">Industrial Training Log</span>
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

      {/* Main Experience Card */}
      <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#140e06] via-[#0b0a12] to-[#060810] border border-amber-500/30 shadow-2xl space-y-6">
        
        {/* Organization & Role */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800 mb-2 inline-block">
              {exp.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {exp.organization}
            </h2>
            <div className="text-sm font-mono text-amber-300 font-semibold mt-1">
              ROLE: {exp.role}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{exp.period}</span>
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{exp.location}</span>
            </span>
          </div>
        </div>

        {/* Honest Industrial Overview */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            INDUSTRIAL MISSION SUMMARY
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            {exp.summary}
          </p>
        </div>

        {/* Key Competencies Acquired */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>PRACTICAL PLANT FLOOR COMPETENCIES</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exp.keyLearnings.map((learning, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ground-truth disclosure note */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>* Presented honestly as an industrial automotive manufacturing training internship.</span>
          <span className="text-amber-400 font-bold">[ON-SITE EXPOSURE]</span>
        </div>

      </div>

    </div>
  );
};
