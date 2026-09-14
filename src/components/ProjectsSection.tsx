import { useState } from 'react';
import { ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-gold font-mono text-xs uppercase tracking-wider mb-3">
            // Engineering Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Featured Systems & Production Deliveries
          </h2>
          <p className="mt-3 text-text-secondary text-base leading-relaxed">
            Real-world systems taken from business requirements to live production. Presented as detailed engineering case studies detailing architecture, technical hurdles, and measurable business outcomes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
                : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
            }`}
          >
            All Case Studies ({FEATURED_PROJECTS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('flagship')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedFilter === 'flagship'
                ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
                : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
            }`}
          >
            Production Flagships
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('offline')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedFilter === 'offline'
                ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
                : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
            }`}
          >
            Offline-First PWA
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('rnd')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedFilter === 'rnd'
                ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
                : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
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
      <div className="mt-16 pt-12 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-surface/60 border border-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-gold font-bold uppercase mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Extended Track Record</span>
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              More Systems I've Built ({ADDITIONAL_PROJECTS.length + FEATURED_PROJECTS.length}+ Total Deliveries)
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Additional web platforms, e-commerce storefronts, internal enterprise tools, and architecture implementations.
            </p>
          </div>

          <button
            type="button"
            id="toggle-additional-projects"
            onClick={() => setShowAdditional(!showAdditional)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface hover:bg-surface-hover text-text-primary border border-border text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer"
          >
            <span>{showAdditional ? 'Collapse Archive' : `Expand Systems Archive (${ADDITIONAL_PROJECTS.length})`}</span>
            {showAdditional ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-gold" />}
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
                className="rounded-xl bg-surface/40 border border-border/80 p-5 hover:border-gold/30 hover:bg-surface/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2">
                    <span className="text-gold-light font-semibold">{proj.category}</span>
                    <span>SYS-0{idx + 5}</span>
                  </div>
                  <h4 className="text-base font-display font-bold text-text-primary mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/80 space-y-2">
                  <div className="text-[11px] text-text-secondary font-sans">
                    <span className="font-semibold text-text-muted font-mono mr-1">Highlight:</span>
                    {proj.highlights}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-bg-primary text-[10px] font-mono text-text-secondary border border-border"
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
  );
}