import { Lightbulb } from 'lucide-react';
import { ProjectCaseStudy } from '../types/portfolio';
import { ProjectWorkflowDiagram } from './ProjectWorkflowDiagram';

interface ProjectCaseStudyCardProps {
  project: ProjectCaseStudy;
  index: number;
}

export function ProjectCaseStudyCard({
  project,
  index,
}: ProjectCaseStudyCardProps) {
  return (
    <article
      id={`case-study-${project.id}`}
      className="border-t border-border pt-10 lg:pt-14"
    >
      {/* Project heading */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-gold">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="text-sm text-text-muted">
              {project.category}
            </span>

            {project.isRnD && (
              <span className="text-sm text-text-muted">
                R&D
              </span>
            )}
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-lg text-text-secondary">
            {project.subtitle}
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
            {project.summary}
          </p>

          {project.metrics && (
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="text-lg font-semibold text-text-primary">
                    {metric.value}
                  </span>

                  <span className="ml-2 text-sm text-text-muted">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project visual */}
      {project.image && (
        <div className="mt-10 overflow-hidden border border-border">
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Story */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <p className="text-sm font-medium text-gold mb-3">
              THE CHALLENGE
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
              {project.problem}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gold mb-3">
              WHAT I DID
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
              {project.solution}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gold mb-3">
              MY ROLE
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
              {project.role}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border-l border-border pl-6">
            <p className="text-sm font-medium text-gold mb-3">
              RESULT
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-text-primary">
              {project.result}
            </p>

            {project.difficulties && (
              <div className="mt-8">
                <p className="text-sm font-medium text-text-muted mb-3">
                  Technical challenge
                </p>

                <p className="text-sm leading-relaxed text-text-secondary">
                  {project.difficulties}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Workflow */}
      {project.diagramType && (
        <div className="mt-12">
          <ProjectWorkflowDiagram
            diagramType={project.diagramType}
          />
        </div>
      )}

      {/* Technology */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs text-text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Optional insight */}
      {project.learning && (
        <div className="mt-8 flex gap-3 max-w-3xl">
          <Lightbulb className="w-4 h-4 text-gold shrink-0 mt-1" />

          <p className="text-sm leading-relaxed text-text-secondary">
            {project.learning}
          </p>
        </div>
      )}
    </article>
  );
}