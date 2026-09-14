import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  Users,
  Terminal,
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export function ExperienceTimeline() {
  const progressionSteps = [
    { title: 'Developer', desc: 'Writing clean code & fixing bugs', period: '2022' },
    { title: 'Full-Stack Engineer', desc: 'Architecture, APIs, offline PWAs & deployments', period: '2023 - 2025' },
    { title: 'Technical Project Manager', desc: 'Leading 4+ production projects, client scope & mentoring 8+ interns', period: '2025 - Present' },
  ];

  return (
    <section id="experience" className="py-24 border-b border-slate-800/80 bg-[#0B0F17]/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Professional Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Work Experience & Career Trajectory
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            A clear progression of increasing technical ownership—evolving from hands-on full-stack development into architectural design, production hosting, and technical project management.
          </p>
        </div>

        {/* Career Progression Bar */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>CAREER GROWTH TRAJECTORY</span>
            </span>
            <span>Ahaz Electronic & Software Solutions PLC</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {progressionSteps.map((step, idx) => {
              const isLatest = idx === 2;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col justify-between ${
                    isLatest
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                      : 'bg-slate-900/70 border-slate-800 text-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className={isLatest ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800">
                        {step.period}
                      </span>
                    </div>
                    <div className="font-display font-bold text-base text-slate-100 mb-1">
                      {step.title}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-sans mt-2">
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
                  ? 'bg-slate-900/80 border-slate-700 shadow-xl'
                  : 'bg-slate-900/40 border-slate-800'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-amber-400 font-bold">
                      {WORK_EXPERIENCE.company}
                    </span>
                    {role.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-100">
                    {role.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{role.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{WORK_EXPERIENCE.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {role.summary}
                </p>

                <div className="pt-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Key Responsibilities & Leadership Delivery:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {role.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-300 leading-relaxed font-sans">
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
