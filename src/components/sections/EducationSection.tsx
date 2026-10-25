import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Calendar, Award, MapPin, Sparkles } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 05 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Academic Milestones</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Rigorous undergraduate Information Technology coursework combined with foundational mathematics and sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#05070d] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 backdrop-blur-md shadow-lg hover:border-cyan-500/40 transition-colors">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-mono text-cyan-300 mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                {/* Score & Standing Badge */}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Score: {edu.score}</span>
                  </div>

                  {edu.statusNote && (
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      <span>{edu.statusNote}</span>
                    </div>
                  )}

                  {edu.location && (
                    <div className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-3.5 space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start space-x-2">
                        <span className="text-cyan-400 font-mono mt-0.5">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
