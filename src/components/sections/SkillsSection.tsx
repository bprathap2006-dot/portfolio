import React, { useState } from 'react';
import { skillsData, skillCategories } from '../../data/skillsData';
import { SkillItem, SkillCategory } from '../../types/portfolio';
import { Cpu, Terminal, Shield, Database, Code, Wrench, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skillsData[0]);

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

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

  return (
    <section id="skills" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODULE 02 // TECHNICAL ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            THE TOOLCHAIN: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Interactive Constellation</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Select any technology node to inspect its architectural context, practical usage, and associated project deployments.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-full font-mono text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Modules ({skillsData.length})
            </button>
            {skillCategories.map((cat) => {
              const count = skillsData.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Constellation Grid + Interactive HUD Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Constellation Nodes Grid (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill.id === skill.id;
              const Icon = getCategoryIcon(skill.category);

              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                      : 'bg-[#090e1a]/70 hover:bg-[#0d1424] border-slate-800/80 hover:border-slate-700'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Select skill ${skill.name}`}
                >
                  {/* Active Indicator bar */}
                  {isSelected && (
                    <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-400" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-md ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-cyan-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      // {skill.category.slice(0, 4).toUpperCase()}
                    </span>
                  </div>

                  <div className="font-display font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[11px] font-sans text-slate-400 line-clamp-1 mt-1">
                    {skill.shortDesc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: HUD Inspector Panel (Col 5) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-2xl bg-[#0a101d] border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.12)] backdrop-blur-md font-sans">
              
              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider">
                    TOOLCHAIN INSPECTOR HUD
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  NODE_ID: {activeSkill.id.toUpperCase()}
                </span>
              </div>

              {/* Selected Technology Header */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{activeSkill.category}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-100 mt-1">
                  {activeSkill.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {activeSkill.shortDesc}
                </p>
              </div>

              {/* Usage & Practical Study Context */}
              <div className="space-y-4 pt-3 border-t border-slate-800/80">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>How I Apply & Study It</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                    {activeSkill.howIUseIt}
                  </p>
                </div>

                {/* Relevant Projects */}
                {activeSkill.relevantProjects && activeSkill.relevantProjects.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Associated Projects & Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeSkill.relevantProjects.map((p, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-900/60 text-cyan-300 text-xs font-mono"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Ground-truth disclosure note */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>VERIFIED IT SKILL // NO FABRICATED RATINGS</span>
                <span className="text-cyan-400 font-semibold">[READY]</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
