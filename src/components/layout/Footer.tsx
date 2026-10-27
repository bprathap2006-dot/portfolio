import React from 'react';
import { profileData } from '../../data/profileData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#E8E4DC] dark:border-[#232A3B] bg-[#FBF9F5]/90 dark:bg-[#0F1219]/90 py-14 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E4DC]/70 dark:border-[#232A3B]">
          
          {/* Brand & Editorial Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-extrabold text-base text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
                PRATHAP B
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">&bull;</span>
              <span className="text-[#71717A] dark:text-[#A1A1AA] font-medium">Aspiring Software Developer</span>
            </div>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-serif italic">
              &ldquo;{profileData.tagline}&rdquo;
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center space-x-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F1EA] hover:bg-[#E8E4DC] dark:bg-[#161B26] dark:hover:bg-[#1F2636] text-[#52525B] hover:text-[#18181B] dark:text-[#A1A1AA] dark:hover:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F5F1EA] hover:bg-[#E8E4DC] dark:bg-[#161B26] dark:hover:bg-[#1F2636] text-[#52525B] hover:text-blue-600 dark:text-[#A1A1AA] dark:hover:text-blue-400 border border-[#E8E4DC] dark:border-[#232A3B] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-[#F5F1EA] hover:bg-[#E8E4DC] dark:bg-[#161B26] dark:hover:bg-[#1F2636] text-[#52525B] hover:text-blue-600 dark:text-[#A1A1AA] dark:hover:text-blue-400 border border-[#E8E4DC] dark:border-[#232A3B] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60 transition-transform duration-200 hover:-translate-y-0.5 flex items-center space-x-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All verified portfolio details preserved with integrity.
          </div>
          <div className="flex items-center space-x-2">
            <span>B.Tech Information Technology (2023–2027)</span>
            <span>&bull;</span>
            <span className="font-semibold text-[#18181B] dark:text-[#F4F4F5]">A.K.T MCET, Kallakurichi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
