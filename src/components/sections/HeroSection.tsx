import React, { useState } from 'react';
import { profileData } from '../../data/profileData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Check, 
  Download, 
  GraduationCap, 
  MapPin, 
  Award 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const HeroSection: React.FC = () => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadState('downloading');

    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 2500);
    }, 500);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 sm:pt-40 pb-20 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Introduction (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small introduction */}
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-[#71717A] dark:text-[#A1A1AA] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Large name */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight leading-[0.98]">
              PRATHAP <span className="text-blue-600 dark:text-blue-400">B</span>
            </h1>

            {/* Role & Headline */}
            <div className="space-y-2 pt-1">
              <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-tight">
                Aspiring Software Developer
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] leading-snug">
                &ldquo;Building ideas into intelligent software.&rdquo;
              </h2>
            </div>

            {/* Short professional introduction */}
            <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] font-sans leading-relaxed max-w-xl">
              I am a B.Tech Information Technology student at A.K.T Memorial College of Engineering and Technology, interested in software development, artificial intelligence, and cybersecurity.
            </p>

            {/* Key Verified Details Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#52525B] dark:text-[#A1A1AA]">
              <span className="flex items-center space-x-1.5 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>B.Tech IT (2023–2027)</span>
              </span>
              <span className="flex items-center space-x-1.5 font-medium">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[#18181B] dark:text-[#F4F4F5] font-semibold">CGPA: 7.90</span>
              </span>
              <span className="flex items-center space-x-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kallakurichi, Tamil Nadu, India</span>
              </span>
            </div>

            {/* The 3 Prominent Working Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3.5 items-center">
              
              {/* Explore My Work */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-editorial-sm hover:shadow-editorial-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Download Resume */}
              <a
                href="/Prathap-B-Resume.pdf"
                onClick={handleDownloadResume}
                download="Prathap-B-Resume.pdf"
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#18181B] dark:text-[#F4F4F5] bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm hover:shadow-editorial-md transition-all duration-200 hover:-translate-y-0.5"
                title="Download verified original resume PDF"
              >
                <FileText className={`w-4 h-4 text-blue-600 transition-transform duration-200 ${
                  downloadState === 'downloading' ? 'animate-bounce' : 'group-hover:-translate-y-0.5'
                }`} />
                <span>
                  {downloadState === 'downloading'
                    ? 'Downloading...'
                    : downloadState === 'success'
                    ? 'Downloaded!'
                    : 'Download Resume'}
                </span>
                {downloadState === 'success' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Download className="w-3.5 h-3.5 text-[#71717A] group-hover:translate-y-0.5 transition-transform" />
                )}
              </a>

              {/* Get in Touch */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-[#F4F4F5] hover:bg-[#F5F1EA] dark:hover:bg-[#161B26] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#71717A]" />
                <span>Get in Touch</span>
              </button>

            </div>

            {/* Social Links Subtext */}
            <div className="pt-2 flex items-center space-x-4 text-xs text-[#71717A] dark:text-[#A1A1AA]">
              <span className="font-medium">Direct Links:</span>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white flex items-center space-x-1 font-semibold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>&bull;</span>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1 font-semibold transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Refined Portrait Composition (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Offset decorative backdrop frame */}
              <div className="absolute inset-0 rounded-2xl bg-[#E8E4DC] dark:bg-[#1F2636] translate-x-3 translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Refined Portrait Card */}
              <div className="relative w-72 sm:w-80 rounded-2xl bg-white dark:bg-[#161B26] p-3 border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-lg transition-all duration-300">
                
                {/* Real Photo Crop */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F5F1EA] dark:bg-[#0F1219] relative">
                  <img
                    src="/images/prathap-profile.jpg"
                    alt="Prathap B - Aspiring Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                      if (fb) (fb as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="photo-fallback hidden w-full h-full flex-col items-center justify-center bg-[#18181B] text-white font-serif text-3xl">
                    PB
                  </div>
                </div>

                {/* Portrait Caption */}
                <div className="mt-3.5 px-1 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
                      Prathap B
                    </h3>
                    <p className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                      B.Tech IT &bull; AKT MCET (2027)
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold text-[11px] border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
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
