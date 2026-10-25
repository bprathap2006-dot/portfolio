import React from 'react';
import { profileData } from '../../data/profileData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Mail, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060b] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-display font-bold text-sm text-slate-200 tracking-wider">
                PRATHAP // NEXUS
              </span>
              <span className="text-cyan-400 font-mono text-[11px]">// V2.0</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {profileData.tagline}
            </p>
          </div>

          {/* Social Icons & Back-to-top */}
          <div className="flex items-center space-x-4">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-800/80 transition-colors flex items-center space-x-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[10px]">TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All verified portfolio data maintained with integrity.
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-cyan-400" />
              <span>Cloudflare Pages Ready</span>
            </span>
            <span>•</span>
            <span className="text-slate-400">AKT MCET IT (2023–2027)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
