import React, { useState } from 'react';
import { skillsData, skillCategories } from '../../data/skillsData';
import { SkillItem, SkillCategory } from '../../types/portfolio';
import { 
  Code, 
  Database, 
  Wrench, 
  Cpu, 
  Shield, 
  Terminal
} from 'lucide-react';

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
    <section id="skills" className="relative py-24 border-t border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Tools, languages, and core computer science foundations.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Technologies I use across software engineering, machine learning forensics, and cybersecurity research. Grouped honestly without arbitrary proficiency percentages.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            {skillCategories.map((cat) => {
              const count = skillsData.filter((s) => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Layout: Grid of Skills + Active Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skills Cards (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill.id === skill.id;
              const Icon = getCategoryIcon(skill.category);

              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 shadow-studio-sm'
                      : 'bg-white dark:bg-slate-900 border-stone-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} />
                    <span className="text-[10px] text-slate-400 font-mono">
                      {skill.category.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-sm ${isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-white'}`}>
                    {skill.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {skill.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Practical Application Inspector (Col 5) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-studio-md space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Technology Profile
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {activeSkill.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {activeSkill.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                  {activeSkill.shortDesc}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  How I apply this in my work:
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-stone-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-stone-200/60 dark:border-slate-800">
                  {activeSkill.howIUseIt}
                </p>
              </div>

              {activeSkill.relevantProjects && activeSkill.relevantProjects.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                    Associated Work & Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkill.relevantProjects.map((proj, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
