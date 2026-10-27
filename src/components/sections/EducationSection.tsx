import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B] bg-[#F5F1EA]/40 dark:bg-[#161B26]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            05 &bull; Academic Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Education and academic milestones.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Rigorous undergraduate study in Information Technology combined with foundational mathematics, physics, and computer science.
          </p>
        </div>

        {/* Clean Academic Timeline */}
        <div className="max-w-4xl mx-auto relative pl-7 sm:pl-9 border-l-2 border-blue-600/30 dark:border-blue-500/20 space-y-8">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-2 w-5 h-5 rounded-full bg-white dark:bg-[#161B26] border-2 border-blue-600 flex items-center justify-center shadow-sm group-hover:scale-125 transition-transform">
                <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-blue-600' : 'bg-slate-400'}`} />
              </div>

              {/* Education Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md hover:shadow-editorial-lg hover:border-blue-600/40 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#F0ECE4] dark:border-[#232A3B] gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA] mt-1">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1EA] dark:bg-[#0F1219] text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B]">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                {/* Score & Status Badges */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200/80 dark:border-amber-900/60 text-amber-900 dark:text-amber-300 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>Score: {edu.score}</span>
                  </div>

                  {edu.statusNote && (
                    <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                      <span>{edu.statusNote}</span>
                    </div>
                  )}

                  {edu.location && (
                    <div className="inline-flex items-center space-x-1 text-xs text-[#71717A] dark:text-[#A1A1AA]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Coursework Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-[#F0ECE4] dark:border-[#232A3B] space-y-1.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <p key={hIdx} className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] flex items-start space-x-2">
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
