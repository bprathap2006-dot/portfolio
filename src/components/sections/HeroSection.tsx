import React from 'react';
import { profileData } from '../../data/profileData';
import { CapsuleButton } from '../ui/CapsuleButton';
import { DocumentButton } from '../ui/DocumentButton';
import { SignalButton } from '../ui/SignalButton';
import { TerminalButton } from '../ui/TerminalButton';
import { NetworkButton } from '../ui/NetworkButton';
import { MapPin, GraduationCap, Award, Calendar } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Bio, Actions (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Title Badge / Focus Area */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{profileData.professionalTitle} &bull; B.Tech IT</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                PRATHAP <span className="text-blue-600 dark:text-blue-400">B</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-display font-semibold text-slate-700 dark:text-slate-200">
                &ldquo;{profileData.tagline}&rdquo;
              </p>
            </div>

            {/* Concise Editorial Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl">
              I am a B.Tech Information Technology student at A.K.T Memorial College of Engineering and Technology, interested in software development, artificial intelligence, and cybersecurity.
            </p>

            {/* 3 Prominent Working Actions */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              <CapsuleButton href="#projects">
                Explore My Work
              </CapsuleButton>
              <DocumentButton resumeUrl="/Prathap-B-Resume.pdf" />
              <SignalButton href="#contact">
                Let&apos;s Connect
              </SignalButton>
            </div>

            {/* Direct Social Links */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <TerminalButton url={profileData.githubUrl} />
              <NetworkButton url={profileData.linkedinUrl} />
            </div>

            {/* Key Verified Details Badge Bar */}
            <div className="pt-4 border-t border-stone-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="truncate">B.Tech IT</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Grad: 2027</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">CGPA: 7.90</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="truncate" title="Kallakurichi, Tamil Nadu, India">Kallakurichi, TN</span>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Portrait in Elegant Frame (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Subtle ambient back-glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-slate-200/20 to-transparent dark:from-blue-600/15 dark:via-slate-800/20 blur-xl pointer-events-none group-hover:scale-105 transition-transform duration-500" />

              {/* Refined Portrait Card */}
              <div className="relative w-72 sm:w-80 rounded-2xl bg-white dark:bg-slate-900 p-3 border border-stone-200/90 dark:border-slate-800 shadow-studio-lg group-hover:shadow-studio-xl transition-all duration-300">
                
                {/* Image Frame */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 dark:bg-slate-800 relative">
                  <img
                    src="/images/prathap-profile.jpg"
                    alt="Prathap B - Aspiring Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback in case of image load delay
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                      if (fb) (fb as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="photo-fallback hidden w-full h-full flex-col items-center justify-center bg-slate-900 text-white font-display font-bold text-3xl">
                    PB
                  </div>
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Portrait Caption */}
                <div className="mt-3.5 px-1 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white">
                      Prathap B
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      A.K.T Memorial College of Eng. & Tech
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Roles</span>
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
