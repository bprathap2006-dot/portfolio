import React from 'react';
import { profileData } from '../../data/profileData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-stone-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 py-12 text-slate-500 dark:text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200/60 dark:border-slate-800">
          
          {/* Brand & Mission Statement */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                PRATHAP B
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">&bull;</span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">Aspiring Software Developer</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profileData.tagline}
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center space-x-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 transition-colors flex items-center space-x-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All verified portfolio details preserved with integrity.
          </div>
          <div className="flex items-center space-x-2">
            <span>B.Tech Information Technology (2023–2027)</span>
            <span>&bull;</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">A.K.T MCET</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
