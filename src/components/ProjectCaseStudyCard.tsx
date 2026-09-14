import { useState } from 'react';
import {
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types/portfolio';
import { ProjectWorkflowDiagram } from './ProjectWorkflowDiagram';

interface ProjectCaseStudyCardProps {
  project: ProjectCaseStudy;
  index: number;
  key?: string;
}

export function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  return (
    <article
      id={`case-study-${project.id}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        project.isFlagship
          ? 'bg-surface border-border shadow-xl shadow-black/40'
          : project.isRnD
          ? 'bg-surface/90 border-purple-800/40'
          : 'bg-surface/80 border-border'
      }`}
    >
      {/* Case Study Header Banner */}
      <div className="p-6 sm:p-8 border-b border-border bg-bg-primary/40">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-gold font-bold bg-surface px-2.5 py-1 rounded border border-border">
              CASE STUDY // 0{index + 1}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                project.isRnD
                  ? 'bg-purple-950/80 text-purple-300 border border-purple-700/60'
                  : 'bg-gold/10 text-gold-light border border-gold/30'
              }`}
            >
              {project.tag}
            </span>
            <span className="text-xs font-mono text-text-muted hidden sm:inline">
              {project.category}
            </span>
          </div>

          {project.metrics && (
            <div className="flex items-center gap-4 text-xs font-mono">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="bg-surface px-2.5 py-1 rounded border border-border">
                  <span className="text-text-muted mr-1.5">{m.label}:</span>
                  <span className="text-gold font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gold-light font-mono mt-1">
          {project.subtitle}
        </p>

        <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-4xl">
          {project.summary}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/60">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Workflow Diagram Component */}
      {project.diagramType && (
        <div className="p-6 sm:p-8 bg-bg-primary/20 border-b border-border">
          <ProjectWorkflowDiagram diagramType={project.diagramType} steps={project.workflow} />
        </div>
      )}

      {/* Case Study Deep Dive: Answering the 7 core engineering questions */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Problem */}
          <div className="p-5 rounded-xl bg-bg-primary/50 border border-border space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem Context</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* 2. What Was Built */}
          <div className="p-5 rounded-xl bg-bg-primary/50 border border-border space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 3. Role & Execution Ownership */}
        <div className="p-4 rounded-xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>My Engineering Role:</span>
          </div>
          <p className="text-xs sm:text-sm text-text-primary font-medium">
            {project.role}
          </p>
        </div>

        {/* 4 & 5. Technical Difficulties & Verified Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-bg-primary/50 border border-border space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold">
              <Cpu className="w-4 h-4" />
              <span>What Was Technically Difficult</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.difficulties}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-bg-primary/50 border border-border space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Production Result</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* 6. Key Engineering Learning */}
        <div className="p-5 rounded-xl bg-gold/5 border border-gold/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold">
            <Lightbulb className="w-4 h-4" />
            <span>Key Engineering Takeaway</span>
          </div>
          <p className="text-xs sm:text-sm text-text-primary leading-relaxed italic">
            "{project.learning}"
          </p>
        </div>
      </div>
    </article>
  );
}