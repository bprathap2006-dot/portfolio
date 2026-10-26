import React, { useState } from 'react';
import { skillsData, skillCategories } from '../../data/skillsData';
import { SkillCategory } from '../../types/portfolio';
import { Code, Database, Wrench, Cpu, Shield } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Programming': return Code;
      case 'Core Computer Science': return Database;
      case 'Development Tools': return Wrench;
      case 'AI and Machine Learning': return Cpu;
      case 'Cybersecurity': return Shield;
      default: return Code;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#faf9f6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Tools, technologies, and core competencies.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Verified technical modules across software engineering, machine learning forensics, and cybersecurity protocols.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            {skillCategories.map((cat) => {
              const count = skillsData.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-sans font-medium text-slate-600 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {skill.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-sans">
                  <span>Usage Context:</span>
                  <span className="text-slate-800 font-medium truncate max-w-[170px]" title={skill.howIUseIt}>
                    {skill.howIUseIt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
