import { ArrowDown, FileText, Github, Linkedin, Mail, Server, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { PERSONAL_INFO, PROOF_POINTS } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden engineering-grid border-b border-slate-800/80"
    >
      {/* Background ambient lighting - subtle, disciplined */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Engineering Sub-Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>FULL-STACK ENGINEER × PROJECT LEAD</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.08]">
                I build software from <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">idea to production</span>.
              </h1>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                I don't just write code. Based in Ethiopia, I design, develop, deploy, and lead real-world software systems. From stakeholder requirements and architectural blueprints to full-stack code, hosting, and post-launch stability.
              </p>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#work"
                id="hero-cta-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                id="hero-cta-cv"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2 border-l border-slate-800 pl-4 my-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="hero-social-email"
                  aria-label="Email Angosom Gebremedhin Berhe"
                  title="Send email to angosomgmedhin120@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  aria-label="Angosom's LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  aria-label="Angosom's GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Technical Project Manager & Full-Stack Developer at Ahaz Solutions</span>
            </div>
          </div>

          {/* Right Column: Execution Blueprint & Core Evidence */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Card top bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-slate-400">production-pipeline.sh</span>
                </div>
                <span className="text-amber-400 font-semibold">STAGE: PRODUCTION</span>
              </div>

              {/* Execution Flow Steps */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="mt-0.5 text-amber-400">01</div>
                  <div>
                    <div className="text-slate-200 font-semibold">Requirements & Architecture</div>
                    <div className="text-slate-400 text-[11px]">Translating business needs to specifications & data schemas</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto mt-0.5 shrink-0" />
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="mt-0.5 text-amber-400">02</div>
                  <div>
                    <div className="text-slate-200 font-semibold">Full-Stack Development</div>
                    <div className="text-slate-400 text-[11px]">React, Laravel, MySQL, REST APIs, and Offline PWAs</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto mt-0.5 shrink-0" />
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="mt-0.5 text-amber-400">03</div>
                  <div>
                    <div className="text-slate-200 font-semibold">Infrastructure & Deployment</div>
                    <div className="text-slate-400 text-[11px]">Hostinger, VPS, Domain, DNS, SSL, and zero-downtime release</div>
                  </div>
                  <Server className="w-4 h-4 text-amber-400 ml-auto mt-0.5 shrink-0" />
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="mt-0.5 text-amber-400">04</div>
                  <div>
                    <div className="text-slate-200 font-semibold">Team Leadership & Mentorship</div>
                    <div className="text-slate-400 text-[11px]">Jira sprint tracking, code reviews, and coaching 8+ interns</div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 ml-auto mt-0.5 shrink-0" />
                </div>
              </div>

              {/* Terminal footer status */}
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-400" />
                  Systems Operating: 100%
                </span>
                <span className="text-slate-400">Mekelle / Addis Ababa, ET</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Points Strip: Evidence of experience, NOT generic counters */}
        <div className="mt-16 pt-10 border-t border-slate-800/70">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
            // Verified Track Record & Professional Scope
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROOF_POINTS.map((item, idx) => (
              <div
                key={idx}
                id={`proof-point-${idx}`}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-amber-400">
                    {item.metric}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1.5">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
