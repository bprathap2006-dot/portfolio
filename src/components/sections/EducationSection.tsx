import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-white/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Academic Credentials & Education
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Rigorous undergraduate studies in Information Technology, complemented by strong higher secondary and foundational education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className={`p-7 sm:p-9 rounded-3xl border transition-all duration-300 ${
                idx === 0
                  ? 'bg-[#faf9f6] border-blue-200 shadow-soft-sm'
                  : 'bg-white border-slate-200/90 shadow-soft-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {edu.statusNote || 'Academic Credential'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-sans font-medium text-slate-700">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end space-y-1.5 text-xs font-sans">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    <span>{edu.period}</span>
                  </span>

                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Score: {edu.score}</span>
                  </span>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-4 space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <p key={hIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      &bull; {h}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
