import React from 'react';
import { certificationsData, technicalActivitiesData } from '../../data/certificationsData';
import { Award, Presentation } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 07 // CREDENTIALS & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Technical Activities</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Verified external certifications and technical participations in workshops and project expos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Certifications */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-cyan-300 flex items-center space-x-2 pb-2 border-b border-slate-800">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Standardized Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-100">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                    {cert.scoreOrDetail && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-semibold whitespace-nowrap">
                        {cert.scoreOrDetail}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Technical Activities */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-violet-300 flex items-center space-x-2 pb-2 border-b border-slate-800">
              <Presentation className="w-5 h-5 text-violet-400" />
              <span>Expos & Workshops</span>
            </h3>

            <div className="space-y-4">
              {technicalActivitiesData.map((act) => (
                <div
                  key={act.id}
                  className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 hover:border-violet-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-100">
                        {act.title}
                      </h4>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        {act.institution}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-950/80 text-violet-300 border border-violet-800 whitespace-nowrap">
                      {act.type}
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
