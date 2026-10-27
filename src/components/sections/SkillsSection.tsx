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
    <section id="skills" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            02 &bull; Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Tools, languages, and core computer science foundations.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            Technologies I actively use across software engineering, machine learning forensics, and cybersecurity research. Grouped honestly without arbitrary proficiency percentages.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-[#F5F1EA] dark:bg-[#161B26] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white'
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
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-[#F5F1EA] dark:bg-[#161B26] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Layout: Clean Skill Cards + Active Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skill Cards List (Col 7) */}
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
                      ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 shadow-editorial-sm'
                      : 'bg-white dark:bg-[#161B26] border-[#E8E4DC] dark:border-[#232A3B] hover:border-[#D6D0C5] dark:hover:border-[#374151] hover:bg-[#FBF9F5] dark:hover:bg-[#1C2230]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-[#71717A]'}`} />
                    <span className="text-[10px] font-mono text-[#71717A] dark:text-[#A1A1AA]">
                      {skill.category.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-sm ${
                    isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-[#18181B] dark:text-[#F4F4F5]'
                  }`}>
                    {skill.name}
                  </h3>

                  <p className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] mt-1 line-clamp-2 leading-relaxed">
                    {skill.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Context Panel (Col 5) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Technology Dossier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F5F1EA] dark:bg-[#1F2636] text-[#52525B] dark:text-[#A1A1AA]">
                  {activeSkill.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#18181B] dark:text-[#F4F4F5]">
                  {activeSkill.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1 font-medium">
                  {activeSkill.shortDesc}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5] block">
                  Practical Application in Projects:
                </span>
                <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed bg-[#F5F1EA]/60 dark:bg-[#0F1219] p-3.5 rounded-xl border border-[#E8E4DC]/80 dark:border-[#232A3B]">
                  {activeSkill.howIUseIt}
                </p>
              </div>

              {activeSkill.relevantProjects && activeSkill.relevantProjects.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5] block mb-2">
                    Associated Work:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkill.relevantProjects.map((proj, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60"
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
