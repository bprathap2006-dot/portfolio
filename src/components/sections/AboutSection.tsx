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
  const technicalInterests = [
    {
      icon: Code2,
      title: "Algorithmic Problem Solving",
      desc: "Deconstructing challenging software and algorithmic bottlenecks into structured, testable, and maintainable solutions."
    },
    {
      icon: Cpu,
      title: "Intelligent Systems & AI",
      desc: "Investigating deep neural classification, acoustic feature representation (Librosa), and signal forensics for real-world scenarios."
    },
    {
      icon: ShieldCheck,
      title: "Network Security & Defense",
      desc: "Analyzing raw packet telemetry using Scapy and formulating reinforcement learning mitigation policies for resource-constrained LANs."
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
    <section id="about" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B] bg-[#F5F1EA]/40 dark:bg-[#161B26]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            01 &bull; Profile Dossier
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Curious about systems, algorithms, and secure architectures.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            I am an undergraduate Information Technology student at A.K.T Memorial College of Engineering and Technology (graduating in 2027), dedicated to turning computational logic into functional, resilient software.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative and Education Summary (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Story Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm space-y-4">
              <h3 className="text-lg font-display font-bold text-[#18181B] dark:text-[#F4F4F5] flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>My Journey & Philosophy</span>
              </h3>
              
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                My interest in engineering began with an urge to understand what happens beneath high-level abstractions. Rather than treating neural classifiers or network protocols as closed black boxes, I focus on understanding their foundational data flows.
              </p>
              
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                From pre-processing audio frequency spectra for synthetic voice detection to inspecting raw packet flows for anomaly containment, I enjoy working where software logic directly solves critical security and intelligence challenges.
              </p>

              <blockquote className="pt-3 border-t border-[#F0ECE4] dark:border-[#232A3B] font-serif text-sm italic text-[#18181B] dark:text-[#F4F4F5] border-l-2 border-blue-600 pl-3">
                &ldquo;I build software at the intersection of logic, intelligence, and security.&rdquo;
              </blockquote>
            </div>

            {/* Education Summary Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block">
                Education Summary
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                  <span className="text-[#71717A]">Degree</span>
                  <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5]">B.Tech Information Technology</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                  <span className="text-[#71717A]">Institution</span>
                  <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5]" title={profileData.college}>AKT MCET, Tamil Nadu</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                  <span className="text-[#71717A]">Study Period</span>
                  <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5]">2023 – 2027 (Expected 2027)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                  <span className="text-[#71717A]">CGPA</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">7.90 / 10.0</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#71717A]">Location</span>
                  <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5]">{profileData.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Personal Technical Interests (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block mb-2">
              Core Technical Interests & Pillars
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalInterests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm hover:shadow-editorial-md hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#18181B] dark:text-[#F4F4F5] mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
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
