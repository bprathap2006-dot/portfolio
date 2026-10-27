import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  return (
    <section id="experience" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Industrial internship and practical manufacturing exposure.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on plant-floor insight into automotive manufacturing workflows, quality assurance, safety standards, and operational efficiency.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-400/20 space-y-8">
          
          <div className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            </div>

            {/* Experience Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-md hover:shadow-studio-lg hover:border-blue-500/40 transition-all duration-300">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-100 dark:border-slate-800 gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {exp.organization}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {exp.role} &bull; <span className="font-normal text-slate-500">{exp.badge}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Key Competencies & Exposure Areas */}
              <div className="mt-6 pt-5 border-t border-stone-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-3">
                  Core Operational Competencies & Takeaways
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.keyLearnings.map((learning, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
