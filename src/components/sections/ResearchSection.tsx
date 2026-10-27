import React from 'react';
import { researchData } from '../../data/researchData';
import { Calendar, Building, ShieldCheck, Cpu } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Research & Scholarly Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Peer-reviewed research and technical exploration.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Investigating reinforcement learning algorithms for autonomous zero-day attack mitigation in resource-constrained networks.
          </p>
        </div>

        {/* Dedicated Research Paper Editorial Feature Card */}
        <div className="max-w-5xl mx-auto p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-lg hover:border-blue-500/40 transition-all duration-300">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60">
              International Conference Paper
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              <span>{researchData.institution}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{researchData.conference} ({researchData.year})</span>
            </span>
          </div>

          {/* Paper Title */}
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-snug">
            {researchData.title}
          </h3>

          {/* Research Topic Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {researchData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-stone-50 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 border border-stone-200/60 dark:border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Editorial Content Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300">
            
            {/* Problem Statement */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-slate-850 border border-stone-200/60 dark:border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 font-display font-bold text-slate-900 dark:text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {researchData.problemStatement}
              </p>
            </div>

            {/* Methodology */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-slate-850 border border-stone-200/60 dark:border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 font-display font-bold text-slate-900 dark:text-white text-sm">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>The Methodology</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {researchData.methodology}
              </p>
            </div>

          </div>

          {/* Research Significance Summary */}
          <div className="mt-6 p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50 space-y-2">
            <span className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider block">
              Scholarly Significance
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
