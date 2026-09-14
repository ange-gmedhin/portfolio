import {
  Server,
  Network,
  Rocket,
  MessageSquare,
  Users,
  Mail,
  Terminal,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export function BeyondCode() {
  const deploymentStages = [
    { name: 'Developer', desc: 'Codebase engineering' },
    { name: 'Git', desc: 'Branching & version control' },
    { name: 'Build', desc: 'Optimized static & server bundles' },
    { name: 'Deployment', desc: 'Zero-downtime release procedure' },
    { name: 'Hostinger / VPS', desc: 'cPanel, hPanel, Linux VPS' },
    { name: 'Domain + DNS + SSL', desc: 'Records routing & TLS encryption' },
    { name: 'Production App', desc: 'Live, audited, and reachable' },
  ];

  return (
    <section id="beyond-code" className="py-24 border-b border-border bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-gold font-mono text-xs uppercase tracking-wider mb-3">
            // Operational Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Software doesn't end when the code is finished.
          </h2>
          <p className="mt-3 text-text-secondary text-base leading-relaxed font-sans">
            Many developers leave once the code runs on their local laptop. I take ownership of the operational lifecycle: provisioning servers, configuring DNS routing, setting up company email infrastructure, managing client expectations, and supporting production systems.
          </p>
        </div>

        {/* Hosting & Deployment Visual Architecture Diagram */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-border font-mono text-xs">
            <span className="text-gold font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>PRODUCTION HOSTING & DEPLOYMENT PIPELINE</span>
            </span>
            <span className="text-text-muted">Hostinger • Linux VPS • DNS Delegation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 relative">
            {deploymentStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-bg-primary border border-border flex flex-col justify-between relative group hover:border-gold/40 transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono text-text-muted mb-1">
                    0{idx + 1}
                  </div>
                  <div className="text-xs font-bold font-display text-text-primary group-hover:text-gold transition-colors">
                    {stage.name}
                  </div>
                </div>
                <div className="text-[11px] text-text-muted font-sans mt-2">
                  {stage.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct static Hostinger public_html deploy
              </span>
              <span className="flex items-center gap-1.5 text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Full Linux VPS daemon & database control
              </span>
            </div>
            <span className="text-text-muted">Zero broken deployment handoffs</span>
          </div>
        </div>

        {/* 5 Operational Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {/* 1. Hosting */}
          <div className="p-6 rounded-xl bg-surface/40 border border-border hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center text-gold mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Hosting & Provisioning
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed font-sans">
              Hands-on management of production hosting environments tailored to project scale and budget constraints.
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary font-mono">
              <li className="flex items-center gap-2">
                <span className="text-gold">•</span> Hostinger Shared & Cloud setups
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">•</span> Ubuntu Linux VPS configuration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">•</span> Production deployment runbooks
              </li>
            </ul>
          </div>

          {/* 2. Infrastructure */}
          <div className="p-6 rounded-xl bg-surface/40 border border-border hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center text-blue-400 mb-4">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Infrastructure & DNS
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed font-sans">
              Connecting raw server IP addresses to user-facing domain names with security and routing integrity.
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary font-mono">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span> Domain names & registrar config
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span> DNS routing (A, CNAME, MX, TXT)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">•</span> SSL/TLS certificates & HTTPS
              </li>
            </ul>
          </div>

          {/* 3. Delivery */}
          <div className="p-6 rounded-xl bg-surface/40 border border-border hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center text-emerald-400 mb-4">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Release Delivery
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed font-sans">
              Executing orderly software handoffs, rollout timelines, and post-launch stability support.
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary font-mono">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span> Release planning & milestone staging
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span> Live smoke testing & verification
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span> Post-release bug fixing & support
              </li>
            </ul>
          </div>

          {/* 4. Communication */}
          <div className="p-6 rounded-xl bg-surface/40 border border-border hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center text-amber-400 mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Client Communication
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed font-sans">
              Bridging non-technical business goals into precise engineering constraints without jargon friction.
            </p>
            <ul className="space-y-1.5 text-xs text-text-secondary font-mono">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span> Stakeholder requirements gathering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span> Technical scope boundaries
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span> Transparent sprint progress updates
              </li>
            </ul>
          </div>

          {/* 5. Team Leadership & Agile */}
          <div className="p-6 rounded-xl bg-surface/40 border border-border hover:border-gold/30 transition-colors md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center text-indigo-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Team, Mentorship & Agile Process
            </h3>
            <p className="text-xs text-text-muted mb-4 leading-relaxed font-sans">
              Managing engineering execution using Jira and Agile/Scrum. Mentored 8+ junior developers and university interns in real codebases, teaching Git branch strategies, defensive code reviews, and structured system delivery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-2.5 rounded bg-bg-primary border border-border text-text-secondary">
                <div className="text-gold font-bold">Jira / Scrum</div>
                <div className="text-[11px] text-text-muted mt-0.5">Sprints & backlog grooming</div>
              </div>
              <div className="p-2.5 rounded bg-bg-primary border border-border text-text-secondary">
                <div className="text-gold font-bold">8+ Mentored</div>
                <div className="text-[11px] text-text-muted mt-0.5">Junior devs & interns</div>
              </div>
              <div className="p-2.5 rounded bg-bg-primary border border-border text-text-secondary">
                <div className="text-gold font-bold">Code Reviews</div>
                <div className="text-[11px] text-text-muted mt-0.5">Security & quality guards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Capability Panels: Web Platforms & Operational Email */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Web Platforms (WordPress + Frameworks) */}
          <div className="p-6 rounded-2xl bg-surface/50 border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-gold uppercase tracking-wider">
                Web Platforms
              </span>
              <Code2 className="w-4 h-4 text-text-muted" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-2">
              I choose the technology according to the problem.
            </h3>
            <p className="text-xs text-text-muted leading-relaxed mb-4 font-sans">
              Every client problem does not need the same heavy architecture. I comfortably engineer custom React single-page applications, resilient Laravel microservices, or custom WordPress implementations when fast non-technical content management is the right business decision.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['React', 'Laravel', 'CodeIgniter', 'WordPress', 'PHP', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-text-secondary font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Email & Domain Management */}
          <div className="p-6 rounded-2xl bg-surface/50 border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                System Reachability
              </span>
              <Mail className="w-4 h-4 text-text-muted" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-2">
              Keeping business systems reachable, secure, and operational.
            </h3>
            <p className="text-xs text-text-muted leading-relaxed mb-4 font-sans">
              A software product cannot serve users if business emails land in spam or domains fail to resolve. I handle professional domain delegation, DNS record synchronization, and business email setups so businesses stay reliably connected.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
              <div className="p-2 rounded bg-bg-primary border border-border text-center">
                <span className="text-text-muted block text-[10px]">DNS</span>
                <span className="text-text-primary font-bold">A / CNAME</span>
              </div>
              <div className="p-2 rounded bg-bg-primary border border-border text-center">
                <span className="text-text-muted block text-[10px]">SECURITY</span>
                <span className="text-text-primary font-bold">SSL / HTTPS</span>
              </div>
              <div className="p-2 rounded bg-bg-primary border border-border text-center">
                <span className="text-text-muted block text-[10px]">MAIL</span>
                <span className="text-text-primary font-bold">MX Records</span>
              </div>
              <div className="p-2 rounded bg-bg-primary border border-border text-center">
                <span className="text-text-muted block text-[10px]">DELIVERY</span>
                <span className="text-text-primary font-bold">SPF / TXT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}