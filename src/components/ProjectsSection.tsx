import { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Terminal, Sparkles, FolderGit2 } from 'lucide-react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudyCard } from './ProjectCaseStudyCard';

export function ProjectsSection() {
  const [showAdditional, setShowAdditional] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'flagship' | 'offline' | 'rnd'>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'flagship') return p.isFlagship && !p.isRnD;
    if (selectedFilter === 'offline') return p.diagramType === 'offline';
    if (selectedFilter === 'rnd') return p.isRnD;
    return true;
  });

  return (
    <section id="work" className="py-24 border-b border-slate-800/80 bg-[#0B0F17]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
              // Engineering Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
              Featured Systems & Production Deliveries
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Real-world systems taken from business requirements to live production. Presented as detailed engineering case studies detailing architecture, technical hurdles, and measurable business outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              All Case Studies (4)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('flagship')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedFilter === 'flagship'
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              Production Flagships
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('offline')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedFilter === 'offline'
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              Offline-First PWA
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('rnd')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedFilter === 'rnd'
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              Applied AI / R&D
            </button>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Expandable "More Systems I've Built" Section */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-1">
                <FolderGit2 className="w-4 h-4" />
                <span>Extended Track Record</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100">
                More Systems I've Built (8+ Total Deliveries)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Additional web platforms, e-commerce storefronts, internal enterprise tools, and architecture thesis implementations.
              </p>
            </div>

            <button
              type="button"
              id="toggle-additional-projects"
              onClick={() => setShowAdditional(!showAdditional)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer"
            >
              <span>{showAdditional ? 'Collapse Archive' : 'Expand Systems Archive (6)'}</span>
              {showAdditional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expandable Grid */}
          {showAdditional && (
            <div
              id="additional-projects-grid"
              className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300"
            >
              {ADDITIONAL_PROJECTS.map((proj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/40 border border-slate-800/90 p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span className="text-amber-400/90">{proj.category}</span>
                      <span>SYS-0{idx + 5}</span>
                    </div>
                    <h4 className="text-base font-display font-bold text-slate-100 mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] text-slate-300 font-sans">
                      <span className="font-semibold text-slate-400 font-mono mr-1">Highlight:</span>
                      {proj.highlights}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
