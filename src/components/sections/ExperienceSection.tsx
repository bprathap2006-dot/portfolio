import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#faf9f6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Plant-Floor Industrial Training
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Hands-on exposure to automotive manufacturing systems, production assembly workflows, operational quality control, and industrial safety metrics.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 space-y-6"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                        {exp.organization}
                      </h3>
                      <div className="text-sm font-sans font-semibold text-blue-600 mt-0.5">
                        {exp.role}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Competencies & Responsibilities */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Key Exposure & Operations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.keyLearnings.map((h, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#faf9f6] border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-normal">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
