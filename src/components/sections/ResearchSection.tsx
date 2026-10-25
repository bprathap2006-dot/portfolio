import React from 'react';
import { researchData } from '../../data/researchData';
import { BookOpen, Calendar, Building, Shield, Cpu, Network } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 06 // SCHOLARLY INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Technical Exploration</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Investigating autonomous threat containment algorithms for network topologies with stringent hardware constraints.
          </p>
        </div>

        {/* Dedicated Research Paper Exploration Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0c1425] via-[#080d1a] to-[#050811] border border-cyan-500/40 shadow-[0_0_45px_rgba(0,240,255,0.1)]">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-700">
              International Conference Research
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
              <Building className="w-3.5 h-3.5 text-cyan-400" />
              <span>{researchData.institution}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-violet-950/60 text-violet-300 border border-violet-800">
              <Calendar className="w-3.5 h-3.5 text-violet-400" />
              <span>{researchData.conference} ({researchData.year})</span>
            </span>
          </div>

          {/* Paper Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 leading-snug">
            {researchData.title}
          </h3>

          {/* Research Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {researchData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300/90"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Accessible Deep Dive Breakdown */}
          <div className="mt-8 space-y-5 text-sm sm:text-base">
            
            {/* The Challenge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>The Core Security Challenge</span>
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {researchData.problemStatement}
              </p>
            </div>

            {/* Reinforcement Learning Methodology */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold flex items-center space-x-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Proposed RL Mitigation Architecture</span>
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {researchData.methodology}
              </p>
            </div>

            {/* Key Significance */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 font-semibold flex items-center space-x-1.5">
                <Network className="w-4 h-4 text-violet-400" />
                <span>Academic & Engineering Significance</span>
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {researchData.significance}
              </p>
            </div>

          </div>

          {/* Ground-truth disclosure note */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>PRESENTED AT 4TH INT. CONF. // SURYA GROUP OF INSTITUTIONS (2026)</span>
            <span className="text-cyan-400 font-semibold">[VERIFIED ENTRY]</span>
          </div>

        </div>

      </div>
    </section>
  );
};
