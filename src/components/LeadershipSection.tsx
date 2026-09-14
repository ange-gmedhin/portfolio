import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Users,
  MessageSquare,
  FileCheck2,
  Cpu,
  GitPullRequest,
  CheckCircle2,
  Send,
} from 'lucide-react';

export function LeadershipSection() {
  const lifecycleFlow = [
    { title: 'Client', role: 'Discovery', desc: 'Direct stakeholder interview, understanding business bottlenecks & constraints' },
    { title: 'Requirements', role: 'Scoping', desc: 'Translating needs into functional specs & non-functional bounds' },
    { title: 'Architecture', role: 'Design', desc: 'Data modeling, API contracts, offline resilience & service design' },
    { title: 'Team Planning', role: 'Agile/Jira', desc: 'Sprint backlog grooming, epic division, and assignment to engineers' },
    { title: 'Development', role: 'Implementation', desc: 'Full-stack execution, defensive coding, and type-safe components' },
    { title: 'Testing', role: 'Validation', desc: 'Workflow verification, high-concurrency stress tests & bug fixing' },
    { title: 'Deployment', role: 'Release', desc: 'Hostinger / Linux VPS setup, DNS configuration, and SSL cutover' },
    { title: 'Delivery', role: 'Operations', desc: 'Client handoff, staff user onboarding, and ongoing production monitoring' },
  ];

  return (
    <section id="leadership" className="py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Engineering Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            From Requirements to Release
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Technical leadership is not an abstract title—it is the discipline of taking personal accountability across the entire software delivery pipeline, shielding teams from ambiguity, and mentoring emerging talent.
          </p>
        </div>

        {/* The 8-Step Lifecycle Visualization */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80 font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>THE COMPLETE DELIVERY CHAIN (END-TO-END)</span>
            </span>
            <span>4+ Production Systems Led</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecycleFlow.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-amber-400 font-bold">STAGE 0{idx + 1}</span>
                    <span className="text-slate-400">{step.role}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Leadership in Practice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90">
            <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-2">
              Mentorship of 8+ Interns & Junior Devs
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              I bridge academic computer science theory into production-ready software engineering: teaching Git rebase/merge etiquette, PR reviews, defensive API validation, and database normalization.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div>• Weekly 1-on-1 code walkthroughs</div>
              <div>• Real production task assignment</div>
              <div>• Empathy & constructive engineering culture</div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90">
            <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-2">
              Direct Stakeholder Alignment
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Working directly with founders, restaurant owners, and non-profit directors to capture ambiguous wishes, define boundaries, and set transparent milestones that prevent budget overruns.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div>• Scope containment & change control</div>
              <div>• Technical tradeoffs explained in plain terms</div>
              <div>• Demonstrated milestone demos</div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90">
            <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-2">
              Zero-Downtime Production Cutover
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Leadership means taking personal responsibility when the software goes live. I verify server configurations, manage DNS TTL propagation, and run post-deploy smoke tests before declaring a release complete.
            </p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div>• Hostinger & Linux VPS configuration</div>
              <div>• Pre-release database backup & migration</div>
              <div>• Immediate live incident mitigation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
