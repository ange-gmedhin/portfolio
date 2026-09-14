import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types/portfolio';
import { ProjectWorkflowDiagram } from './ProjectWorkflowDiagram';

interface ProjectCaseStudyCardProps {
  project: ProjectCaseStudy;
  index: number;
  key?: string;
}

export function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <article
      id={`case-study-${project.id}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        project.isFlagship
          ? 'bg-slate-900/80 border-slate-700/80 shadow-xl shadow-black/40'
          : project.isRnD
          ? 'bg-slate-900/60 border-purple-800/50'
          : 'bg-slate-900/60 border-slate-800'
      }`}
    >
      {/* Case Study Header Banner */}
      <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-amber-400 font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              CASE STUDY // 0{index + 1}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                project.isRnD
                  ? 'bg-purple-950 text-purple-300 border border-purple-700'
                  : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
              }`}
            >
              {project.tag}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          {project.metrics && (
            <div className="flex items-center gap-4 text-xs font-mono">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                  <span className="text-slate-400 mr-1.5">{m.label}:</span>
                  <span className="text-amber-300 font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-amber-400/90 font-mono mt-1">
          {project.subtitle}
        </p>

        <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-4xl">
          {project.summary}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800/60">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Workflow Diagram Component */}
      {project.diagramType && (
        <div className="p-6 sm:p-8 bg-slate-950/30 border-b border-slate-800/80">
          <ProjectWorkflowDiagram diagramType={project.diagramType} steps={project.workflow} />
        </div>
      )}

      {/* Case Study Deep Dive: Answering the 7 core engineering questions */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Problem */}
          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem Context</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* 2. What Was Built */}
          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 3. Role & Execution Ownership */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>My Engineering Role:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200">
            {project.role}
          </p>
        </div>

        {/* 4 & 5. Technical Difficulties & Verified Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              <Cpu className="w-4 h-4" />
              <span>What Was Technically Difficult</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.difficulties}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Production Result</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* 6. Key Engineering Learning */}
        <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
            <Lightbulb className="w-4 h-4" />
            <span>Key Engineering Takeaway</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
            "{project.learning}"
          </p>
        </div>
      </div>
    </article>
  );
}
