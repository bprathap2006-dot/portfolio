import React from 'react';
import { profileData } from '../../data/profileData';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#home');
  };

  return (
    <footer className="relative bg-[#f5f3ee] border-t border-slate-200/90 py-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Credentials */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="font-display font-extrabold text-slate-900 text-sm">
            {profileData.name}
          </div>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <span>B.Tech IT (2023–2027) &bull; A.K.T Memorial College of Engineering</span>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <span className="font-semibold text-blue-600">CGPA 7.90</span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="/Prathap-B-Resume.pdf"
            download="Prathap-B-Resume.pdf"
            className="inline-flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium"
            title="Download verified resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 shadow-soft-sm transition-all hover:-translate-y-0.5"
          title="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
        <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <p>Deployed on Cloudflare Pages &bull; Verified Academic Portfolio</p>
      </div>
    </footer>
  );
};
