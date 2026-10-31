import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { 
  User, 
  Cpu, 
  FlaskConical, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Radio, 
  ArrowRight, 
  Compass, 
  Crosshair,
  ChevronRight
} from 'lucide-react';

interface SectorNode {
  id: string;
  route: string;
  title: string;
  shortLabel: string;
  category: string;
  buttonLabel: string;
  icon: React.ElementType;
  colorHex: string;
  glowColor: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  coordinates: string;
  previewDesc: string;
  metric: string;
  x: number;
  y: number;
}

const SECTOR_NODES: SectorNode[] = [
  {
    id: 'identity-core',
    route: '/about',
    title: 'DEVELOPER PROFILE',
    shortLabel: 'PROFILE',
    category: 'PROFESSIONAL DOSSIER',
    buttonLabel: 'Explore Profile',
    icon: User,
    colorHex: '#00f0ff',
    glowColor: 'rgba(0, 240, 255, 0.4)',
    textColor: 'text-cyan-300',
    borderColor: 'border-cyan-400',
    bgColor: 'bg-cyan-950/70',
    coordinates: 'SECTION_01',
    previewDesc: 'Professional Background & Technical Journey of Prathap B.',
    metric: 'B.Tech IT (2027) • AKT MCET',
    x: 50,
    y: 16,
  },
  {
    id: 'tech-lab',
    route: '/skills',
    title: 'TECHNOLOGY STACK',
    shortLabel: 'SKILLS',
    category: 'PROGRAMMING & TOOLS',
    buttonLabel: 'Explore Technologies',
    icon: Cpu,
    colorHex: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-400',
    bgColor: 'bg-emerald-950/70',
    coordinates: 'SECTION_02',
    previewDesc: 'Programming Languages, Frameworks & Development Tools.',
    metric: '17 Verified Modules',
    x: 77,
    y: 27,
  },
  {
    id: 'project-dimension',
    route: '/projects',
    title: 'PROJECT SHOWCASE',
    shortLabel: 'PROJECTS',
    category: 'AI & CYBERSECURITY',
    buttonLabel: 'View Projects',
    icon: FlaskConical,
    colorHex: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-400',
    bgColor: 'bg-purple-950/70',
    coordinates: 'SECTION_03',
    previewDesc: 'AI Applications & Cybersecurity Solutions: DeepShield and Reinforcement Learning Defense.',
    metric: '2 Flagship Architectures',
    x: 84,
    y: 60,
  },
  {
    id: 'experience-archive',
    route: '/experience',
    title: 'EXPERIENCE',
    shortLabel: 'EXPERIENCE',
    category: 'INDUSTRIAL EXPERIENCE',
    buttonLabel: 'Explore Experience',
    icon: Briefcase,
    colorHex: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-400',
    bgColor: 'bg-amber-950/70',
    coordinates: 'SECTION_04',
    previewDesc: 'Industrial training at Hanon Systems Pvt. Ltd., Chennai: automotive manufacturing & quality assurance.',
    metric: 'Hanon Systems • July 2025',
    x: 68,
    y: 84,
  },
  {
    id: 'academic-vault',
    route: '/resume',
    title: 'PROFESSIONAL RESUME',
    shortLabel: 'RESUME',
    category: 'ACADEMIC QUALIFICATIONS',
    buttonLabel: 'View Resume',
    icon: GraduationCap,
    colorHex: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    textColor: 'text-sky-300',
    borderColor: 'border-sky-400',
    bgColor: 'bg-sky-950/70',
    coordinates: 'SECTION_05',
    previewDesc: 'Academic Qualifications & Technical Credentials (B.Tech IT, AKT MCET, CGPA 7.90).',
    metric: 'CGPA 7.90 • First Class Standing',
    x: 32,
    y: 84,
  },
  {
    id: 'research-terminal',
    route: '/research',
    title: 'RESEARCH & INNOVATION',
    shortLabel: 'RESEARCH',
    category: 'PUBLICATIONS',
    buttonLabel: 'Explore Research',
    icon: BookOpen,
    colorHex: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.4)',
    textColor: 'text-indigo-300',
    borderColor: 'border-indigo-400',
    bgColor: 'bg-indigo-950/70',
    coordinates: 'SECTION_06',
    previewDesc: 'Reinforcement Learning & Intelligent Security Systems for Academic Networks.',
    metric: '4th Int. Conference (2026)',
    x: 16,
    y: 60,
  },
  {
    id: 'achievement-module',
    route: '/achievements',
    title: 'CREDENTIALS',
    shortLabel: 'CERTIFICATIONS',
    category: 'VERIFIED CREDENTIALS',
    buttonLabel: 'View Credentials',
    icon: Award,
    colorHex: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    textColor: 'text-yellow-300',
    borderColor: 'border-yellow-400',
    bgColor: 'bg-yellow-950/70',
    coordinates: 'SECTION_07',
    previewDesc: 'NPTEL Java Certification, TCS iON NQT (59.91%), St. Anne\'s Project Expo, and Idhaya XAI Workshop.',
    metric: '2 Certs • 2 Technical Expos',
    x: 23,
    y: 27,
  },
  {
    id: 'contact-portal',
    route: '/contact',
    title: "LET'S CONNECT",
    shortLabel: 'CONNECT',
    category: 'PROFESSIONAL NETWORKING',
    buttonLabel: 'Contact Me',
    icon: Radio,
    colorHex: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    textColor: 'text-rose-300',
    borderColor: 'border-rose-400',
    bgColor: 'bg-rose-950/70',
    coordinates: 'SECTION_08',
    previewDesc: 'Internship Opportunities & Professional Networking with direct communication channels.',
    metric: 'Email • Phone • Direct Relay',
    x: 50,
    y: 50,
  },
];

export const WorldMap: React.FC = () => {
  const { navigateTo } = useGame();
  const [activeHoverSector, setActiveHoverSector] = useState<SectorNode | null>(SECTOR_NODES[0]);

  const handleSectorSelect = (sector: SectorNode) => {
    soundEngine.playSelect();
    navigateTo(sector.route);
  };

  const handleSectorHover = (sector: SectorNode) => {
    soundEngine.playHover();
    setActiveHoverSector(sector);
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Background Star Map / Technical Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:28px_28px]" />
      
      {/* Top Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs tracking-wider backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>PRATHAP B // DEVELOPER PORTFOLIO</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          PRATHAP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">B</span>
        </h1>

        <p className="text-xs sm:text-sm text-cyan-200/90 font-mono max-w-xl mx-auto leading-relaxed uppercase tracking-wider font-semibold">
          SOFTWARE DEVELOPMENT • ARTIFICIAL INTELLIGENCE • CYBERSECURITY
        </p>

        <p className="text-xs text-slate-400 font-mono max-w-xl mx-auto leading-relaxed uppercase">
          ASPIRING SOFTWARE DEVELOPER • AI ENTHUSIAST • CYBERSECURITY RESEARCHER
        </p>
      </div>

      {/* DESKTOP CONSTELLATION MAP (hidden on mobile, visible lg:) */}
      <div className="hidden lg:block relative w-[780px] h-[520px] mx-auto z-10">
        
        {/* SVG Energy Conduits & Orbital Paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 780 520">
          <defs>
            <radialGradient id="hubPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Concentric Orbital Rings */}
          <circle cx="390" cy="260" r="210" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="390" cy="260" r="140" fill="url(#hubPulse)" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2 6" opacity="0.4" />
          <circle cx="390" cy="260" r="70" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />

          {/* Connection Lines from Center Hub to Sectors */}
          {SECTOR_NODES.slice(0, 7).map((sector) => {
            const sx = (sector.x / 100) * 780;
            const sy = (sector.y / 100) * 520;
            const isHovered = activeHoverSector?.id === sector.id;

            return (
              <g key={sector.id}>
                <line
                  x1="390"
                  y1="260"
                  x2={sx}
                  y2={sy}
                  stroke={isHovered ? sector.colorHex : '#1e293b'}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  strokeDasharray={isHovered ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />
                {isHovered && (
                  <circle cx={(390 + sx) / 2} cy={(260 + sy) / 2} r="3" fill={sector.colorHex} className="animate-ping" />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Command Hub featuring Real Profile Photo */}
        <div 
          onClick={() => { soundEngine.playSelect(); navigateTo('/about'); }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#070c18] border-2 border-cyan-400/70 shadow-[0_0_40px_rgba(0,240,255,0.35)] flex flex-col items-center justify-center p-1.5 z-20 cursor-pointer group hover:scale-105 hover:border-cyan-300 transition-all"
          title="PRATHAP B // DEVELOPER PROFILE"
        >
          <div className="relative w-26 h-26 rounded-full overflow-hidden border border-dashed border-cyan-400/60 flex items-center justify-center bg-slate-900 w-full h-full">
            <img 
              src="/images/prathap-profile.jpg" 
              alt="Prathap B"
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col items-center justify-end pb-1.5">
              <span className="font-display font-extrabold text-[11px] text-white tracking-wide">
                PRATHAP B
              </span>
              <span className="text-[8px] font-mono text-cyan-300 font-semibold tracking-tighter uppercase">
                DEVELOPER PROFILE &bull; 7.90
              </span>
            </div>
          </div>
        </div>

        {/* 7 Orbiting Sector Nodes */}
        {SECTOR_NODES.slice(0, 7).map((sector) => {
          const Icon = sector.icon;
          const isHovered = activeHoverSector?.id === sector.id;

          return (
            <div
              key={sector.id}
              style={{
                left: `${sector.x}%`,
                top: `${sector.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-30"
            >
              <button
                onClick={() => handleSectorSelect(sector)}
                onMouseEnter={() => handleSectorHover(sector)}
                onFocus={() => handleSectorHover(sector)}
                className={`relative group flex flex-col items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 rounded-full transition-transform duration-300 ${
                  isHovered ? 'scale-125 z-40' : 'hover:scale-110'
                }`}
                aria-label={`Open ${sector.title}`}
              >
                <span 
                  className={`absolute -inset-2 rounded-full border border-dashed transition-all duration-300 ${
                    isHovered ? 'animate-spin-slow opacity-100' : 'opacity-0'
                  }`}
                  style={{ borderColor: sector.colorHex }}
                />

                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-xl backdrop-blur-md ${
                    isHovered 
                      ? 'bg-slate-900 border-white shadow-[0_0_25px_var(--glow)]' 
                      : `${sector.bgColor} ${sector.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                  }`}
                  style={{ '--glow': sector.glowColor } as React.CSSProperties}
                >
                  <Icon className={`w-6 h-6 ${sector.textColor}`} />
                </div>

                <div className={`mt-2 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider font-semibold whitespace-nowrap transition-colors border shadow-md ${
                  isHovered ? 'bg-cyan-400 text-slate-950 border-white font-bold' : 'bg-slate-900/90 text-slate-300 border-slate-700'
                }`}>
                  {sector.title}
                </div>
              </button>
            </div>
          );
        })}

        {/* 8th Sector: Contact */}
        <div 
          className="absolute left-1/2 bottom-2 -translate-x-1/2 z-30"
        >
          <button
            onClick={() => handleSectorSelect(SECTOR_NODES[7])}
            onMouseEnter={() => handleSectorHover(SECTOR_NODES[7])}
            onFocus={() => handleSectorHover(SECTOR_NODES[7])}
            className={`group px-4 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900/90 border border-rose-500/60 hover:border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center space-x-2 font-mono text-xs text-rose-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
              activeHoverSector?.id === SECTOR_NODES[7].id ? 'scale-110 border-white' : ''
            }`}
          >
            <Radio className="w-4 h-4 text-rose-400 animate-pulse" />
            <span className="font-bold tracking-wider">[ 08. LET&apos;S CONNECT ]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* DESKTOP HOVER HUD INSPECTOR PREVIEW */}
      {activeHoverSector && (
        <div className="hidden lg:flex relative z-20 mt-6 w-full max-w-2xl items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#090f1d]/90 border border-cyan-500/40 shadow-2xl backdrop-blur-xl animate-fade-in font-mono">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[11px] text-cyan-400">
              <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>SECTION: {activeHoverSector.coordinates}</span>
              <span className="text-slate-500">//</span>
              <span className="text-slate-400">{activeHoverSector.category}</span>
            </div>
            <h3 className="text-lg font-display font-bold text-white flex items-center space-x-2">
              <span>{activeHoverSector.title}</span>
              <span className="text-xs font-mono text-slate-400 font-normal">({activeHoverSector.shortLabel})</span>
            </h3>
            <p className="text-xs text-slate-300 font-sans max-w-md">
              {activeHoverSector.previewDesc}
            </p>
            <div className="text-[11px] text-amber-300 font-semibold pt-1">
              STATUS: {activeHoverSector.metric}
            </div>
          </div>

          <button
            onClick={() => handleSectorSelect(activeHoverSector)}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white flex-shrink-0"
          >
            <span>{activeHoverSector.buttonLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* MOBILE / TOUCH RESPONSIVE SECTOR GRID */}
      <div className="lg:hidden w-full max-w-xl mx-auto z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {SECTOR_NODES.map((sector, idx) => {
          const Icon = sector.icon;

          return (
            <button
              key={sector.id}
              onClick={() => handleSectorSelect(sector)}
              className="p-4 rounded-2xl bg-[#090e1a]/90 hover:bg-[#0d1424] border border-slate-800 hover:border-cyan-500/60 shadow-lg text-left transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2.5 rounded-xl ${sector.bgColor} ${sector.borderColor} border`}>
                  <Icon className={`w-5 h-5 ${sector.textColor}`} />
                </div>
                <div className="text-[10px] font-mono text-cyan-400/80">
                  SECTION_0{idx + 1}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans line-clamp-2 mt-1">
                  {sector.previewDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-amber-400/90 font-semibold truncate max-w-[170px]">{sector.metric}</span>
                <span className="flex items-center space-x-0.5 text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>{sector.buttonLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
