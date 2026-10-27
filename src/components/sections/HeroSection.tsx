import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profileData';
import { useGame } from '../../context/GameContext';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Check, 
  Download, 
  GraduationCap, 
  MapPin, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useGame();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success'>('idle');
  const [exploreActive, setExploreActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [welcomeStep, setWelcomeStep] = useState<number>(0);

  // Requirement 4: Welcome Animation Sequence
  // Step 0: Initial soft backdrop
  // Step 1: "Welcome to my portfolio" fades in (0ms - 400ms)
  // Step 2: Transitions to name PRATHAP B & role (400ms - 1000ms)
  // Step 3: Photo reveals from side (1000ms - 1600ms)
  // Step 4: Headline "Building ideas into intelligent software" (1600ms - 2200ms)
  // Step 5: Action buttons enter staggered (2200ms+)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWelcomeStep(5);
      return;
    }

    const t1 = setTimeout(() => setWelcomeStep(1), 80);
    const t2 = setTimeout(() => setWelcomeStep(2), 500);
    const t3 = setTimeout(() => setWelcomeStep(3), 1050);
    const t4 = setTimeout(() => setWelcomeStep(4), 1600);
    const t5 = setTimeout(() => setWelcomeStep(5), 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

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
    }, 600);
  };

  const handleExploreClick = () => {
    setExploreActive(true);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '#projects');
      }
      setExploreActive(false);
    }, 280);
  };

  const handleContactClick = () => {
    setContactActive(true);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '#contact');
      }
      setContactActive(false);
    }, 250);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Requirement 3: Soft ambient background matching tones of Prathap's photograph */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Soft warm ivory / amber tint from photo's skin tones */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F5EDE4] dark:bg-[#1E2638]/40 blur-3xl opacity-70 animate-pulse-subtle" />
        {/* Soft cobalt teal accent wash */}
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-[#E0EDFA] dark:bg-[#152238]/30 blur-3xl opacity-60" />
        
        {/* Subtle animated curved SVG lines echoing creative studio elegance */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 250 C 300 120, 700 380, 1300 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="text-[#D6D0C5] dark:text-[#2A344A] transition-all duration-1000"
          />
          <path
            d="M -50 480 C 400 350, 800 600, 1350 420"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#E8E4DC] dark:text-[#1F2636]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Introduction (Approx 60% desktop width) */}
          <div className="lg:col-span-7 space-y-6 text-left order-1">
            
            {/* Step 1 & 2: Welcome message & name reveal */}
            <div className="space-y-3">
              <div 
                className={`inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
                  welcomeStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse" />
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {welcomeStep < 2 ? 'Welcome to my portfolio' : 'Creative Developer Portfolio'}
                </span>
                <span className="text-[#A1A1AA]">&bull;</span>
                <span className="text-[#71717A] dark:text-[#A1A1AA] font-mono text-[11px]">
                  B.Tech IT 2027
                </span>
              </div>

              {/* Large Editorial Name Heading */}
              <h1 
                className={`text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight leading-[0.98] transition-all duration-700 ${
                  welcomeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                PRATHAP <span className="text-blue-600 dark:text-blue-400">B</span>
              </h1>
            </div>

            {/* Step 2 & 4: Role & Headline Reveal */}
            <div 
              className={`space-y-2 pt-1 transition-all duration-700 delay-100 ${
                welcomeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-tight flex items-center space-x-2">
                <span>Aspiring Software Developer</span>
                <span className="w-8 h-px bg-blue-600/60 inline-block" />
                <span className="text-xs font-mono font-medium text-[#71717A] dark:text-[#A1A1AA]">
                  Full-Stack &bull; AI &bull; Cybersecurity
                </span>
              </p>

              <h2 
                className={`text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] leading-snug transition-all duration-700 ${
                  welcomeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                &ldquo;Building ideas into intelligent software.&rdquo;
              </h2>
            </div>

            {/* Introduction prose */}
            <p 
              className={`text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] font-sans leading-relaxed max-w-xl transition-all duration-700 ${
                welcomeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              I am an Information Technology student at A.K.T Memorial College of Engineering and Technology graduating in April 2027. I specialize in algorithmic problem solving, deep neural acoustics, and autonomous zero-day network defense.
            </p>

            {/* Mobile-Only Portrait Placement (Requirement 2: below intro, before primary buttons on mobile) */}
            <div className="lg:hidden my-6 flex justify-center">
              <div className="relative w-64 max-w-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EAE3D9] shadow-editorial-md border border-[#E8E4DC] dark:border-[#232A3B]">
                  <img
                    src="/images/prathap-profile.jpg"
                    alt="Prathap B - Aspiring Software Developer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="font-display font-bold text-sm">Prathap B</div>
                      <div className="text-[11px] text-slate-200">B.Tech IT (2027) &bull; CGPA 7.90</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Credential Badges */}
            <div 
              className={`pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#52525B] dark:text-[#A1A1AA] transition-all duration-700 ${
                welcomeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="flex items-center space-x-1.5 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>AKT MCET (2023–2027)</span>
              </span>
              <span className="flex items-center space-x-1.5 font-medium">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[#18181B] dark:text-[#F4F4F5] font-semibold">Official CGPA: 7.90</span>
              </span>
              <span className="flex items-center space-x-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kallakurichi, Tamil Nadu, India</span>
              </span>
            </div>

            {/* Requirement 6: Unique Button Click Animations & Staggered Entrance */}
            <div 
              className={`pt-3 flex flex-wrap gap-3.5 items-center transition-all duration-700 ${
                welcomeStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* Explore Projects Button with subtle arrow movement & accent-line animation */}
              <button
                onClick={handleExploreClick}
                className={`group relative inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-editorial-sm hover:shadow-editorial-md transition-all duration-300 hover:-translate-y-0.5 btn-accent-line ${
                  exploreActive ? 'scale-95 bg-blue-800' : ''
                }`}
                title="Scroll to projects showcase"
              >
                <span>Explore Projects</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  exploreActive ? 'translate-x-2' : 'group-hover:translate-x-1'
                }`} />
              </button>

              {/* Download Resume Button with brief document icon animation followed by real PDF download */}
              <a
                href="/Prathap-B-Resume.pdf"
                onClick={handleDownloadResume}
                download="Prathap-B-Resume.pdf"
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#18181B] dark:text-[#F4F4F5] bg-white dark:bg-[#161B26] hover:bg-[#F5F1EA] dark:hover:bg-[#1F2636] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-sm hover:shadow-editorial-md transition-all duration-300 hover:-translate-y-0.5"
                title="Download verified original resume PDF"
              >
                <FileText className={`w-4 h-4 text-blue-600 transition-transform duration-300 ${
                  downloadState === 'downloading' ? 'animate-bounce text-blue-700 scale-110' : 'group-hover:-translate-y-0.5'
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

              {/* View Resume in Tab/Screen */}
              <button
                onClick={() => navigateTo('/resume')}
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 rounded-xl text-xs font-semibold text-[#52525B] hover:text-blue-600 dark:text-[#A1A1AA] dark:hover:text-blue-400 hover:bg-[#F5F1EA] dark:hover:bg-[#161B26] transition-colors"
                title="View original verified resume in dedicated reader"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>

              {/* Contact Button with subtle signal-line animation */}
              <button
                onClick={handleContactClick}
                className={`inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-[#F4F4F5] hover:bg-[#F5F1EA] dark:hover:bg-[#161B26] transition-all duration-200 hover:-translate-y-0.5 ${
                  contactActive ? 'bg-[#EDE8E0] dark:bg-[#1F2636] scale-95' : ''
                }`}
              >
                <Mail className={`w-4 h-4 transition-transform duration-200 ${contactActive ? 'rotate-12 text-blue-600' : 'text-[#71717A]'}`} />
                <span>Contact</span>
              </button>

            </div>

            {/* Restrained Code/Connect Links */}
            <div 
              className={`pt-2 flex items-center space-x-4 text-xs text-[#71717A] dark:text-[#A1A1AA] transition-all duration-700 ${
                welcomeStep >= 5 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="font-medium text-[#52525B] dark:text-[#A1A1AA]">Direct Profiles:</span>
              
              {/* GitHub with code-inspired hover animation */}
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-black dark:hover:text-white flex items-center space-x-1 font-semibold transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-6" />
                <span className="group-hover:underline">GitHub</span>
              </a>
              
              <span>&bull;</span>
              
              {/* LinkedIn with connected-line animation */}
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1 font-semibold transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                <span className="group-hover:underline">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Asymmetric Tall Portrait (Approx 40% desktop width, Requirement 2) */}
          <div 
            className={`hidden lg:flex lg:col-span-5 justify-center lg:justify-end order-2 transition-all duration-1000 ${
              welcomeStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative group w-full max-w-[340px] xl:max-w-[370px]">
              
              {/* Soft abstract backdrop shapes matching photo palette (Requirement 2 & 3) */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#EAE2D7] via-[#F5EEE6] to-[#E3EAF4] dark:from-[#1A2234] dark:via-[#161D2B] dark:to-[#1C273C] -rotate-2 -z-20 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.02]" />
              
              {/* Offset decorative asymmetric frame layer */}
              <div className="absolute inset-0 rounded-[2rem] rounded-tr-[4rem] rounded-bl-[3rem] bg-[#DCD5C9] dark:bg-[#20293B] translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Gentle floating accent element (Requirement 2) */}
              <div className="absolute -top-3.5 -right-3.5 z-20 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#161B26]/95 backdrop-blur-md border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md flex items-center space-x-1.5 text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5] animate-float-gentle">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                <span>Graduating 2027</span>
              </div>

              {/* Tall Portrait Container with Custom Asymmetric Frame */}
              <div className="relative rounded-[2rem] rounded-tr-[4rem] rounded-bl-[3rem] overflow-hidden bg-white dark:bg-[#161B26] p-2.5 sm:p-3 border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-xl transition-all duration-500">
                
                {/* Real Photo Crop (authentic uploaded image preserved) */}
                <div className="w-full aspect-[3.7/5] rounded-[1.6rem] rounded-tr-[3.4rem] rounded-bl-[2.4rem] overflow-hidden bg-[#F5EFEB] dark:bg-[#0F1219] relative group">
                  <img
                    src="/images/prathap-profile.jpg"
                    alt="Prathap B - Aspiring Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.photo-fallback');
                      if (fb) (fb as HTMLElement).style.display = 'flex';
                    }}
                  />
                  {/* Fallback to initials if image path fails */}
                  <div className="photo-fallback hidden w-full h-full flex-col items-center justify-center bg-[#18181B] text-white font-serif text-4xl">
                    PB
                  </div>
                  {/* Subtle soft lens highlight overlay that enhances photo integration */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-amber-100/10 pointer-events-none" />
                </div>

                {/* Elegant Portrait Footer Caption */}
                <div className="mt-3 px-2 pb-1 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-display font-extrabold text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
                      Prathap B
                    </h3>
                    <p className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] font-mono">
                      AKT MCET &bull; CGPA 7.90
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
