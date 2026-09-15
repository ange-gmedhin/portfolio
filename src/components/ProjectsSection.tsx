import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudyCard } from './ProjectCaseStudyCard';

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-wide text-gold mb-4">
            SELECTED WORK
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight">
            Systems I've built and delivered.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary">
            A selection of production systems I've worked on from
            requirements and architecture through development,
            deployment, and ongoing improvement.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 lg:space-y-28">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCaseStudyCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Other Work */}
        {ADDITIONAL_PROJECTS.length > 0 && (
          <div className="mt-24 lg:mt-32 pt-12 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-3">
                  <FolderGit2 className="w-4 h-4 text-gold" />

                  <p className="text-sm font-medium tracking-wide text-gold">
                    OTHER WORK
                  </p>
                </div>

                <h3 className="text-2xl font-display font-bold text-text-primary">
                  More projects
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Other websites, internal tools, business platforms,
                  and integrations I've worked on throughout my career.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="divide-y divide-border border-y border-border">
                  {ADDITIONAL_PROJECTS.map((project) => (
                    <div
                      key={project.title}
                      className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-base font-semibold text-text-primary">
                          {project.title}
                        </h4>

                        <p className="mt-1 text-sm text-text-secondary">
                          {project.description}
                        </p>
                      </div>

                      <span className="text-xs text-text-muted shrink-0">
                        {project.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Closing statement */}
        <div className="mt-16 flex justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-gold transition-colors"
          >
            Have a project in mind?
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}