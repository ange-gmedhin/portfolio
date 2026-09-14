import { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Terminal,
  Settings,
  Globe,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) return <Code2 className="w-4 h-4 text-amber-400" />;
    if (category.includes('Backend')) return <Server className="w-4 h-4 text-blue-400" />;
    if (category.includes('Databases')) return <Database className="w-4 h-4 text-emerald-400" />;
    if (category.includes('Infrastructure')) return <Terminal className="w-4 h-4 text-yellow-400" />;
    if (category.includes('Leadership')) return <Settings className="w-4 h-4 text-indigo-400" />;
    if (category.includes('Platforms')) return <Globe className="w-4 h-4 text-cyan-400" />;
    return <Sparkles className="w-4 h-4 text-purple-400" />;
  };

  const getBadgeClass = (level: string) => {
    switch (level) {
      case 'Core Production':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Advanced':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Working Knowledge':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-slate-800/80 bg-[#0B0F17]/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
              // Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
              Curated Technical Competencies
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Organized by engineering discipline and production depth—not an unstructured wall of logos, but verified capabilities applied across 8+ web applications.
            </p>
          </div>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Core Production
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Advanced
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Applied / R&D
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-800/80">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-base font-display font-bold text-slate-100">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 font-sans">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <div className="text-[11px] text-slate-400 font-sans leading-tight">
                          {skill.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
