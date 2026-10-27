import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  return (
    <section id="experience" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            04 &bull; Industrial Trainee Log
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Industrial internship and plant floor exposure.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Hands-on plant-floor insight into automotive manufacturing workflows, quality assurance, safety standards, and operational efficiency.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-7 sm:pl-9 border-l-2 border-blue-600/30 dark:border-blue-500/20 space-y-8">
          
          <div className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-2 w-5 h-5 rounded-full bg-white dark:bg-[#161B26] border-2 border-blue-600 flex items-center justify-center shadow-sm group-hover:scale-125 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            </div>

            {/* Experience Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md hover:shadow-editorial-lg hover:border-blue-600/40 transition-all duration-300">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#F0ECE4] dark:border-[#232A3B] gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
                      {exp.organization}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {exp.role} &bull; <span className="font-normal text-[#71717A] dark:text-[#A1A1AA]">{exp.badge}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1EA] dark:bg-[#0F1219] text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B]">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1EA] dark:bg-[#0F1219] text-[#52525B] dark:text-[#A1A1AA] border border-[#E8E4DC] dark:border-[#232A3B]">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="mt-5 text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Key Competencies & Exposure Areas */}
              <div className="mt-6 pt-5 border-t border-[#F0ECE4] dark:border-[#232A3B]">
                <span className="text-xs font-bold text-[#18181B] dark:text-[#F4F4F5] uppercase tracking-wider block mb-3">
                  Core Operational Competencies & Plant Exposure
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.keyLearnings.map((learning, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA]"
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
