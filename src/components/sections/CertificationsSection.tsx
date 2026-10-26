import React from 'react';
import { certificationsData, technicalActivitiesData } from '../../data/certificationsData';
import { CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 bg-white/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Certifications & Technical Activities
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Verified external certifications, national assessments, and specialized engineering workshop participations.
          </p>
        </div>

        {/* Certifications & Assessments Grid */}
        <div className="space-y-8 max-w-5xl">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Professional Certifications & National Tests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 sm:p-8 rounded-3xl bg-[#faf9f6] border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 inline-block">
                      Verified Certification
                    </span>

                    <div>
                      <h4 className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-sans font-medium text-blue-600 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {cert.scoreOrDetail && (
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-sans">
                      <span className="text-slate-500">Verified Result / Detail:</span>
                      <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        {cert.scoreOrDetail}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Exhibitions & Workshops */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 pt-4">
              Expos & Specialized Engineering Workshops
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalActivitiesData.map((act) => (
                <div
                  key={act.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block">
                      {act.type}
                    </span>

                    <div>
                      <h4 className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                        {act.title}
                      </h4>
                      <p className="text-xs font-sans font-medium text-emerald-700 mt-0.5">
                        {act.institution}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs text-slate-500 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Academic Participation</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
