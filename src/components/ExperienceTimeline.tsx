import {
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export function ExperienceTimeline() {
  const progressionSteps = [
    { title: 'Software Developer', desc: 'Full-stack feature engineering, bug fixes & database scripts', period: '2023' },
    { title: 'Full-Stack Engineer', desc: 'Architecture, REST APIs, offline PWAs & production deployments', period: '2024 - 2025' },
    { title: 'Technical Project Lead & Systems Engineer', desc: 'Leading 4+ production systems, client scope & mentoring 8+ devs', period: '2025 - Present' },
  ];

  return (
    <section id="experience" className="py-24 border-b border-border bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-gold font-mono text-xs uppercase tracking-wider mb-3">
            // Professional Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Work Experience & Career Trajectory
          </h2>
          <p className="mt-3 text-text-secondary text-base leading-relaxed font-sans">
            A clear progression of increasing technical ownership—evolving from hands-on full-stack development into architectural design, production hosting, and technical project leadership.
          </p>
        </div>

        {/* Career Progression Bar */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-border font-mono text-xs text-text-muted">
            <span className="text-gold font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span>CAREER GROWTH TRAJECTORY</span>
            </span>
            <span>{WORK_EXPERIENCE.company}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {progressionSteps.map((step, idx) => {
              const isLatest = idx === 2;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    isLatest
                      ? 'bg-gold/10 border-gold/40 text-text-primary'
                      : 'bg-surface border-border text-text-secondary'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={isLatest ? 'text-gold font-bold' : 'text-text-muted'}>
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-bg-primary border border-border text-text-muted">
                        {step.period}
                      </span>
                    </div>
                    <div className="font-display font-bold text-base text-text-primary mb-1">
                      {step.title}
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary font-sans mt-2">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Roles Stack */}
        <div className="space-y-8">
          {WORK_EXPERIENCE.roles.map((role, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                role.isCurrent
                  ? 'bg-surface/90 border-border shadow-xl'
                  : 'bg-surface/40 border-border'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-gold font-bold">
                      {WORK_EXPERIENCE.company}
                    </span>
                    {role.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary">
                    {role.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-text-muted">
                  <div className="flex items-center gap-1.5 bg-bg-primary px-3 py-1.5 rounded-md border border-border">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{role.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-bg-primary px-3 py-1.5 rounded-md border border-border">
                    <MapPin className="w-3.5 h-3.5 text-text-muted" />
                    <span>{WORK_EXPERIENCE.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {role.summary}
                </p>

                <div className="pt-3">
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                    Key Responsibilities & Leadership Delivery:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {role.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-bg-primary border border-border flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-xs text-text-secondary leading-relaxed font-sans">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}