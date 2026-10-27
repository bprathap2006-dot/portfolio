import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { certificationsData, technicalActivitiesData } from '../../data/certificationsData';
import { 
  ArrowLeft, 
  Award, 
  Presentation
} from 'lucide-react';

export const AchievementsScreen: React.FC = () => {
  const { navigateTo } = useGame();

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-yellow-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-yellow-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span>SECTOR 07 // [0x72_CREST]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ACHIEVEMENT MODULE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">Credentials & Expos</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Column 1: Standardized Technical Certifications */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-800 text-yellow-400 font-display font-bold text-lg">
            <Award className="w-5 h-5 text-yellow-400" />
            <span>Standardized Certifications</span>
          </div>

          <div className="space-y-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-[#080d1a] border border-yellow-500/30 hover:border-yellow-400 shadow-xl transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  {cert.scoreOrDetail && (
                    <span className="px-2.5 py-1 rounded-xl text-xs font-mono bg-yellow-950/80 text-yellow-300 border border-yellow-800 font-bold whitespace-nowrap">
                      {cert.scoreOrDetail}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Technical Activities & Workshops */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-800 text-orange-400 font-display font-bold text-lg">
            <Presentation className="w-5 h-5 text-orange-400" />
            <span>Expos & Workshops</span>
          </div>

          <div className="space-y-4">
            {technicalActivitiesData.map((act) => (
              <div
                key={act.id}
                className="p-6 rounded-3xl bg-[#080d1a] border border-orange-500/30 hover:border-orange-400 shadow-xl transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">
                      {act.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">
                      {act.institution}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl text-xs font-mono bg-orange-950/80 text-orange-300 border border-orange-800 font-semibold whitespace-nowrap">
                    {act.type}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
