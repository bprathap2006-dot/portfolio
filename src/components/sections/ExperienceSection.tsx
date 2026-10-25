import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 04 // INDUSTRIAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Industrial Internship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Practical Exposure</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Hands-on plant floor exposure to automotive manufacturing cycles, operational safety, and quality metrics.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#090e1a]/80 border border-slate-800 backdrop-blur-md shadow-xl hover:border-cyan-500/40 transition-colors"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-display font-bold text-slate-100">
                      {exp.organization}
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-cyan-300 mt-1 font-semibold">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Honest Summary */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Competencies & Exposure */}
              <div className="mt-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>KEY INDUSTRIAL EXPOSURE & COMPETENCIES</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.keyLearnings.map((learning, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ground-truth disclosure note */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>* Presented truthfully as an industrial manufacturing training internship.</span>
                <span className="text-cyan-400 font-semibold">[VERIFIED ON-SITE]</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
