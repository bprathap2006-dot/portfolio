import React from 'react';
import { certificationsData, technicalActivitiesData } from '../../data/certificationsData';
import { Award, Presentation } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B] bg-[#F5F1EA]/40 dark:bg-[#161B26]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            07 &bull; Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Certifications and technical activities.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Standardized national assessments, domain certifications, and hands-on technical symposium participations.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#18181B] dark:text-[#F4F4F5] uppercase tracking-wider block mb-2">
              National Assessments & Certifications
            </span>

            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-7 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm hover:shadow-editorial-md hover:border-blue-600/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#18181B] dark:text-[#F4F4F5]">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-0.5 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.scoreOrDetail && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60 flex-shrink-0">
                      {cert.scoreOrDetail}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Technical Activities */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#18181B] dark:text-[#F4F4F5] uppercase tracking-wider block mb-2">
              Workshops & Technical Exhibitions
            </span>

            {technicalActivitiesData.map((act) => (
              <div
                key={act.id}
                className="p-7 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm hover:shadow-editorial-md hover:border-blue-600/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5">
                      <Presentation className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#18181B] dark:text-[#F4F4F5]">
                        {act.title}
                      </h3>
                      <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-0.5 font-medium">
                        {act.institution}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60 flex-shrink-0">
                    {act.type}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
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
