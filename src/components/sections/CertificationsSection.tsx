import React from 'react';
import { certificationsData, technicalActivitiesData } from '../../data/certificationsData';
import { Award, Presentation } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications and technical activities.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Standardized national examinations, domain certifications, and technical symposium participations.
          </p>
        </div>

        {/* 2-Column Layout: Certifications on Left, Activities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
              National Assessments & Certifications
            </span>

            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-sm hover:shadow-studio-md hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.scoreOrDetail && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900 flex-shrink-0">
                      {cert.scoreOrDetail}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Technical Activities */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
              Workshops & Technical Exhibitions
            </span>

            {technicalActivitiesData.map((act) => (
              <div
                key={act.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-sm hover:shadow-studio-md hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5">
                      <Presentation className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {act.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {act.institution}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 flex-shrink-0">
                    {act.type}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
