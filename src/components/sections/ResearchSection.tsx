import React from 'react';
import { researchData } from '../../data/researchData';
import { Calendar, Building, ShieldCheck, Cpu } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            06 &bull; Scholarly Publication Feature
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Peer-reviewed research and technical exploration.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Investigating reinforcement learning algorithms for autonomous zero-day attack mitigation in resource-constrained networks.
          </p>
        </div>

        {/* Polished Editorial Publication Feature Card */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-lg hover:border-blue-600/40 transition-all duration-300">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
              International Conference Paper
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              <span>{researchData.institution}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{researchData.conference} ({researchData.year})</span>
            </span>
          </div>

          {/* Paper Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] leading-snug">
            {researchData.title}
          </h3>

          {/* Research Topic Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {researchData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#FBF9F5] dark:bg-[#0F1219] text-xs font-mono text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Editorial Content Breakdown */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
            
            {/* The Problem Statement */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-2">
              <div className="flex items-center space-x-2 font-display font-bold text-[#18181B] dark:text-[#F4F4F5] text-sm">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>The Research Bottleneck</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {researchData.problemStatement}
              </p>
            </div>

            {/* Methodology */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-2">
              <div className="flex items-center space-x-2 font-display font-bold text-[#18181B] dark:text-[#F4F4F5] text-sm">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Proposed RL Methodology</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {researchData.methodology}
              </p>
            </div>

          </div>

          {/* Scholarly Significance */}
          <div className="mt-6 p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 space-y-2">
            <span className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider block">
              Scholarly Significance & Findings
            </span>
            <p className="text-xs sm:text-sm text-blue-950 dark:text-blue-100 leading-relaxed font-sans">
              {researchData.significance}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
