import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Education and foundational milestones.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Undergraduate coursework in Information Technology coupled with a rigorous foundation in mathematics, computer science, and systems engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-400/20 space-y-8">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-blue-600 animate-pulse' : 'bg-slate-400'}`} />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-md hover:shadow-studio-lg hover:border-blue-500/40 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 dark:border-slate-800 gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                {/* Score & Status Badges */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>Score: {edu.score}</span>
                  </div>

                  {edu.statusNote && (
                    <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      <span>{edu.statusNote}</span>
                    </div>
                  )}

                  {edu.location && (
                    <div className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Coursework Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-slate-800 space-y-1.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <p key={hIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
