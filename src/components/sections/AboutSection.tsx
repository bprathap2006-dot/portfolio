import React from 'react';
import { profileData } from '../../data/profileData';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  BookOpen 
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
      desc: "Investigating deep neural networks, acoustic feature representations (Librosa), and signal classification for real-world scenarios."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Defense",
      desc: "Analyzing packet telemetry using Scapy and formulating reinforcement learning mitigation policies for resource-constrained LANs."
    },
    {
      icon: Lightbulb,
      title: "Practical Software Engineering",
      desc: "Transforming theoretical computer science models and academic lab concepts into production-ready, functioning systems."
    },
    {
      icon: Users,
      title: "Collaborative Engineering",
      desc: "Learning continuously from peer developers, open-source communities, and interdisciplinary technical teams."
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Curious about systems, algorithms, and secure architectures.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am an undergraduate Information Technology student at A.K.T Memorial College of Engineering and Technology (graduating in 2027), dedicated to turning computational theory into functional, resilient software.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-sm space-y-4">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>My Journey & Philosophy</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                My interest in engineering began with an urge to understand what happens beneath high-level abstractions. Rather than treating neural classifiers or network protocols as closed black boxes, I focus on understanding their foundational data flows.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                From pre-processing audio frequency spectra for synthetic voice detection to inspecting raw packet flows for anomaly containment, I enjoy working where software logic directly solves critical security and intelligence challenges.
              </p>

              <blockquote className="pt-3 border-t border-stone-100 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 italic border-l-2 border-blue-600 pl-3">
                &ldquo;I build software at the intersection of logic, intelligence, and security.&rdquo;
              </blockquote>
            </div>

            {/* Quick Facts Card */}
            <div className="p-6 rounded-2xl bg-stone-50/80 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 space-y-3 text-xs">
              <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                Profile Snapshot
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60 dark:border-slate-800">
                <span className="text-slate-500">Degree:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">B.Tech Information Technology</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60 dark:border-slate-800">
                <span className="text-slate-500">Institution:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200" title={profileData.college}>AKT MCET, Tamil Nadu</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60 dark:border-slate-800">
                <span className="text-slate-500">Academic Standing:</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">7.90 CGPA</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Location:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{profileData.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Core Technical Focus Pillars
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-sm hover:shadow-studio-md hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
