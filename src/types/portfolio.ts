export interface ProofPoint {
  label: string;
  metric: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface ProjectWorkflowStep {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  isFlagship?: boolean;
  isRnD?: boolean;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  difficulties: string;
  result: string;
  learning: string;
  metrics?: { label: string; value: string }[];
  workflow?: ProjectWorkflowStep[];
  diagramType?: 'restaurant' | 'offline' | 'payment' | 'ai';
}

export interface AdditionalProject {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  highlights: string;
}

export interface ExperienceRole {
  role: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
}

export interface ExperienceCompany {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export interface DocumentationArtifact {
  id: string;
  title: string;
  category: string;
  filename: string;
  description: string;
  previewCode: string;
  keyTakeaway: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: 'Core Production' | 'Advanced' | 'Working Knowledge'; note?: string }[];
}
