import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { skillsData, skillCategories } from '../../data/skillsData';
import { SkillItem, SkillCategory } from '../../types/portfolio';
import { 
  ArrowLeft, 
  Cpu, 
  Code, 
  Database, 
  Wrench, 
  Shield, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Search
} from 'lucide-react';

export const SkillsScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skillsData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'Programming': return Code;
      case 'Core Computer Science': return Database;
      case 'Development Tools': return Wrench;
      case 'AI and Machine Learning': return Cpu;
      case 'Cybersecurity': return Shield;
      default: return Terminal;
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectSkill = (skill: SkillItem) => {
    soundEngine.playSelect();
    setActiveSkill(skill);
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SECTOR 02 // [0x2B_TOOL]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            TECH LAB: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Interactive Skills Constellation</span>
          </h1>
        </div>

        <button
          onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
          className="self-start sm:self-auto flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 font-mono text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO WORLD MAP</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            onClick={() => { soundEngine.playHover(); setSelectedCategory('All'); }}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Modules ({skillsData.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { soundEngine.playHover(); setSelectedCategory(cat); }}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Grid: Skills Matrix + Inspector HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Technology Nodes Matrix (Col 7) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill.id === skill.id;
            const Icon = getCategoryIcon(skill.category);

            return (
              <button
                key={skill.id}
                onClick={() => handleSelectSkill(skill)}
                onMouseEnter={() => soundEngine.playHover()}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-[1.02]'
                    : 'bg-[#080d19]/80 hover:bg-[#0c1322] border-slate-800/80 hover:border-slate-700'
                }`}
                aria-pressed={isSelected}
                aria-label={`Select skill ${skill.name}`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${
                    isSelected ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-emerald-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    // 0x{skill.id.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <div className="font-display font-bold text-sm text-slate-100 group-hover:text-white">
                  {skill.name}
                </div>
                <div className="text-[11px] font-sans text-slate-400 line-clamp-1 mt-1">
                  {skill.shortDesc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Technical Inspector HUD (Col 5) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="p-6 rounded-3xl bg-[#080d1a] border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.12)] backdrop-blur-xl">
            
            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold">
                <Terminal className="w-4 h-4" />
                <span>TECH LAB // HUD INSPECTOR</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                ACTIVE_NODE
              </span>
            </div>

            {/* Selected Node Details */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{activeSkill.category}</span>
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                  {activeSkill.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {activeSkill.shortDesc}
                </p>
              </div>

              {/* Practical Usage Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HOW I APPLY & STUDY IT</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                  {activeSkill.howIUseIt}
                </p>
              </div>

              {/* Associated Projects */}
              {activeSkill.relevantProjects && activeSkill.relevantProjects.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ASSOCIATED LAB DEPLOYMENTS</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.relevantProjects.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-900/60 text-emerald-300 text-xs font-mono"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Ground Truth Guarantee */}
              <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>VERIFIED IT SKILL // NO FABRICATED RATINGS</span>
                <span className="text-emerald-400 font-semibold">[VERIFIED]</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
