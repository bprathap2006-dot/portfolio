import React, { useState } from 'react';
import { profileData } from '../../data/profileData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const HeroSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);

    const link = document.createElement('a');
    link.href = '/Prathap-B-Resume.pdf';
    link.download = 'Prathap-B-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 700);
  };

  return (
    <section 
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline, Bio, Actions (Col 7) */}
          <div className="lg:col-span-7 space-y-7 text-left animate-fade-up">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Available for 2026 / 2027 Internship & Engineering Roles</span>
            </div>

            {/* Main Editorial Presentation */}
            <div className="space-y-3">
              <div className="text-sm font-sans font-semibold text-slate-600 tracking-wider uppercase">
                {profileData.professionalTitle}
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                PRATHAP <span className="text-blue-600">B</span>
              </h1>

              {/* Exact Tagline Quote */}
              <p className="text-xl sm:text-2xl font-serif text-slate-700 italic pt-1">
                &ldquo;Building ideas into intelligent software.&rdquo;
              </p>
            </div>

            {/* Core Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
              I am a B.Tech Information Technology student interested in software development, artificial intelligence, and cybersecurity. I focus on turning complex problem spaces into robust, maintainable, and verifiable software implementations.
            </p>

            {/* Credential Details Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-200/90 text-xs font-sans">
              <div className="space-y-0.5">
                <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Degree</span>
                <span className="font-semibold text-slate-900 flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span className="truncate">B.Tech IT</span>
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Graduation</span>
                <span className="font-semibold text-slate-900 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>2027</span>
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Academic CGPA</span>
                <span className="font-bold text-slate-900 flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>7.90 / 10.0</span>
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600 uppercase text-[10px] tracking-wider block font-medium">Location</span>
                <span className="font-semibold text-slate-900 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span className="truncate">Kallakurichi, TN</span>
                </span>
              </div>
            </div>

            {/* Three Working Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              
              {/* Button 1: Explore My Work */}
              <button
                onClick={(e) => handleScrollTo('projects', e)}
                onMouseEnter={() => setIsExploreHovered(true)}
                onMouseLeave={() => setIsExploreHovered(false)}
                className="relative group px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-soft-sm hover:shadow-soft-hover hover:-translate-y-0.5 flex items-center space-x-2.5 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Explore My Work</span>
                <ArrowRight 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExploreHovered ? 'translate-x-1' : ''
                  }`} 
                />
                {/* Drawn accent line beneath button */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/40 transition-transform duration-300 ${
                    isExploreHovered ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                />
              </button>

              {/* Button 2: Download Resume */}
              <button
                onClick={handleDownloadResume}
                disabled={downloading}
                className="relative px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 text-sm font-semibold tracking-wide border border-slate-300/80 hover:border-slate-400 shadow-soft-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                title="Download original verified resume PDF"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Resume Downloaded</span>
                  </>
                ) : (
                  <>
                    <FileText className={`w-4 h-4 text-blue-600 ${downloading ? 'animate-bounce' : ''}`} />
                    <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
                  </>
                )}
              </button>

              {/* Button 3: Let's Connect */}
              <button
                onClick={(e) => handleScrollTo('contact', e)}
                className="px-5 py-3.5 rounded-full bg-transparent hover:bg-slate-100/70 text-slate-700 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors flex items-center space-x-2 border border-transparent hover:border-slate-300/60"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Let&apos;s Connect</span>
              </button>

            </div>

            {/* Direct Social Links */}
            <div className="pt-2 flex items-center space-x-4 text-xs font-sans text-slate-600">
              <span>Connect on:</span>
              <a
                href="https://github.com/bprathap2006-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-slate-700 hover:text-slate-900 font-medium hover:underline"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>&bull;</span>
              <a
                href="https://www.linkedin.com/in/prathap-b-0b226639b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Refined Portrait Frame (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Soft ambient lighting accent behind portrait */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-200/40 via-amber-100/30 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

              {/* Editorial Portrait Container */}
              <div className="relative rounded-2xl bg-white p-3 border border-slate-200/90 shadow-soft-xl group-hover:shadow-soft-hover transition-all duration-300">
                
                {/* Image Frame */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src="/images/prathap-profile.jpg"
                    alt="Prathap B - Aspiring Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle vignette/sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial Caption Plate */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs">
                  <div>
                    <h2 className="font-display font-bold text-slate-900 text-sm">
                      PRATHAP B
                    </h2>
                    <p className="text-slate-600 text-[11px] font-sans">
                      A.K.T Memorial College of Engineering
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-blue-600 text-[11px]">
                      B.Tech IT
                    </span>
                    <span className="text-slate-600 text-[10px]">
                      Class of 2027
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
