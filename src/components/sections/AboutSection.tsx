import React from 'react';
import { profileData } from '../../data/profileData';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Layers,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Solving Technical Problems",
      desc: "Deconstructing challenging software and algorithmic bottlenecks into structured, testable, and maintainable solutions."
    },
    {
      icon: Layers,
      title: "Learning Tools & Frameworks",
      desc: "Continuously broadening my developer toolkit across modern languages, development workflows, and system architectures."
    },
    {
      icon: Lightbulb,
      title: "Building Practical Software",
      desc: "Transforming engineering hypotheses and academic theory into working full-stack and machine learning applications."
    },
    {
      icon: Cpu,
      title: "Intelligent Systems & AI",
      desc: "Investigating how neural models, feature representations, and deep neural nets decipher complex real-world data."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Mitigation",
      desc: "Exploring packet analysis, anomaly telemetry, and autonomous reinforcement learning mitigation for modern networks."
    },
    {
      icon: Users,
      title: "Collaborative Engineering",
      desc: "Engaging in code reviews, sharing learnings with peer developers, and embracing cross-functional teamwork."
    }
  ];

  return (
    <section id="about" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 01 // IDENTITY & PASSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            A little about the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">mind behind the code.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I am an Information Technology student at A.K.T Memorial College of Engineering and Technology, driven by an eagerness to build practical software, explore artificial intelligence, and strengthen cybersecurity architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Technical Philosophy (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/80 border border-slate-800 backdrop-blur-md shadow-xl space-y-4">
              <h3 className="text-lg font-display font-semibold text-cyan-300 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>My Journey & Philosophy</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My journey in technology began with a curiosity about how software systems process decisions under the hood. As an IT undergraduate, I have immersed myself in software engineering, core computer science principles, and hands-on laboratory experimentation.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Rather than treating machine learning or network protocols as abstract black boxes, I enjoy exploring the mathematical logic and data flows that govern them—from feature extraction on acoustic waveforms to low-level packet analysis using Scapy.
              </p>

              <div className="pt-2 border-t border-slate-800/80">
                <blockquote className="font-mono text-xs sm:text-sm text-cyan-200/90 italic border-l-2 border-cyan-400 pl-3">
                  “I build software at the intersection of logic, intelligence, and security.”
                </blockquote>
              </div>
            </div>

            {/* Core Interest Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#090e1a]/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-slate-200">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Profile Panel (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#080d19] border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.08)]">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                    ACADEMIC & PROFILE SNAPSHOT
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Degree & Expected Graduation */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    DEGREE & STANDING
                  </div>
                  <div className="text-slate-100 font-semibold text-sm">
                    {profileData.degree}
                  </div>
                  <div className="text-cyan-400 text-[11px] mt-0.5">
                    Expected Graduation: {profileData.graduationYear} (Sep 2023 – Apr 2027)
                  </div>
                  <div className="text-slate-400 text-[11px] mt-1">
                    {profileData.college}
                  </div>
                </div>

                {/* CGPA */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider">
                      CUMULATIVE GPA
                    </div>
                    <div className="text-slate-100 font-bold text-base mt-0.5">
                      {profileData.cgpa} / 10.0
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-500/40 text-[11px] font-semibold">
                      Current Standing
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider">
                      BASE LOCATION
                    </div>
                    <div className="text-slate-200 font-semibold text-xs mt-0.5">
                      {profileData.location}
                    </div>
                  </div>
                </div>

                {/* Focus */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    PRIMARY ENGINEERING FOCUS
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px]">
                      Software Development
                    </span>
                    <span className="px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 text-[10px]">
                      Artificial Intelligence
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[10px]">
                      Cybersecurity
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
