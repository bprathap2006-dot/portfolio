import React, { useState } from 'react';
import { researchData } from '../../data/researchData';
import { Copy, Check } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const paper = researchData;

  const handleCopyCitation = () => {
    const citation = `Prathap B. "${paper.title}." ${paper.conference}, ${paper.institution}, ${paper.year}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="research" className="relative py-24 bg-[#faf9f6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Scholarly Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Conference Research Publication
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Peer-reviewed scholarly contribution in autonomous reinforcement learning and network threat mitigation.
          </p>
        </div>

        {/* Publication Showcase Card */}
        <div className="max-w-4xl p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 space-y-6">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              International Conference Paper &bull; 2026
            </span>
            <span className="text-xs font-sans text-slate-600">
              {paper.institution}
            </span>
          </div>

          {/* Paper Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-snug">
              &ldquo;{paper.title}&rdquo;
            </h3>
            <p className="text-xs font-sans text-slate-600 mt-2 font-medium">
              Author: <strong className="text-slate-800">Prathap B</strong> (Undergraduate Researcher, A.K.T Memorial College of Engineering and Technology)
            </p>
          </div>

          {/* Conference Details */}
          <div className="p-4 rounded-2xl bg-[#faf9f6] border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div>
              <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Conference</span>
              <span className="font-semibold text-slate-900">{paper.conference}</span>
            </div>
            <div>
              <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Organizer</span>
              <span className="font-semibold text-slate-900">{paper.institution}</span>
            </div>
            <div>
              <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Year</span>
              <span className="font-semibold text-slate-900">{paper.year}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
              Research Abstract:
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              {paper.summary}
            </p>
          </div>

          {/* Methodology & Problem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-bold">Problem Context:</strong>
              <p className="text-slate-600 leading-relaxed">{paper.problemStatement}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-bold">Mitigation Approach:</strong>
              <p className="text-slate-600 leading-relaxed">{paper.methodology}</p>
            </div>
          </div>

          {/* Keywords */}
          <div className="space-y-2 pt-2">
            <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
              Index Keywords:
            </h4>
            <div className="flex flex-wrap gap-2">
              {paper.tags.map((kw: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-800"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              <span>{copied ? 'Citation Copied to Clipboard' : 'Copy Academic Citation'}</span>
            </button>

            <span className="text-xs text-slate-600 font-sans italic">
              Paper presented at 4th International Conference, 2026.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
