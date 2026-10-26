import React from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Target
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Algorithmic Problem Solving",
      desc: "Deconstructing challenging software and algorithmic bottlenecks into structured, testable, and maintainable solutions."
    },
    {
      icon: Cpu,
      title: "Intelligent Systems & AI",
      desc: "Investigating deep neural classification, acoustic feature representation (Librosa), and tensor computation."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Mitigation",
      desc: "Analyzing packet telemetry via Scapy and formulating autonomous reinforcement learning mitigation for campus LANs."
    },
    {
      icon: Lightbulb,
      title: "Practical Engineering",
      desc: "Transforming theoretical computer science models and academic lab ideas into functioning, production-ready systems."
    },
    {
      icon: Users,
      title: "Continuous Learning",
      desc: "Broadening technical capabilities across software development, AI systems engineering, and cybersecurity."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Engineering software with logic, intelligence, and security.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            I am an undergraduate Information Technology student at A.K.T Memorial College of Engineering and Technology (2023–2027), passionate about applying solid computer science principles to build impactful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Technical Philosophy (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#faf9f6] border border-slate-200/90 shadow-soft-sm space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-900 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>My Background & Focus</span>
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                My curiosity in technology began with a desire to understand how software works below the surface. Over the course of my B.Tech studies, I have maintained a strong academic standing (CGPA 7.90) while committing significant time to practical project engineering.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Rather than treating machine learning frameworks or networking protocols as opaque abstractions, I study their internal mechanics—from acoustic waveform preprocessing and Mel-spectrogram extraction for synthetic voice forensics, to low-level packet inspection and autonomous reinforcement learning mitigation for network threats.
              </p>

              <blockquote className="p-4 rounded-xl bg-white border-l-4 border-blue-600 text-sm font-serif italic text-slate-800 shadow-sm">
                &ldquo;I build software at the intersection of logic, intelligence, and security.&rdquo;
              </blockquote>
            </div>

            {/* Target Career Objective Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
              <div className="flex items-center space-x-2 text-blue-600 font-display font-semibold text-sm">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Career Focus & Opportunities</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Currently seeking software developer internships, graduate programs, and junior software engineering roles across software development, AI systems engineering, and cybersecurity.
              </p>
            </div>
          </div>

          {/* Core Pillars Grid (Col 5) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 pb-1">
              Core Engineering Pillars
            </div>
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-soft-sm transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
