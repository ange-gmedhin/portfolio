import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Layers3,
  Server,
  Users,
} from 'lucide-react';
import { PERSONAL_INFO, PROOF_POINTS } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg-primary border-b border-border"
    >
      {/* Ambient background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO INTRO
        ========================================================= */}
        <div className="min-h-[720px] lg:min-h-[760px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-28 md:py-36">

          {/* LEFT: MESSAGE */}
          <div className="lg:col-span-7">

            {/* Role */}
            <div className="inline-flex items-center gap-2.5 mb-7 px-3.5 py-2 rounded-full bg-surface border border-border text-xs font-mono uppercase tracking-wider text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Engineer · Project Lead
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-text-primary">
              I build software
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-yellow-200">
                that works in the real world.
              </span>
            </h1>

            {/* Supporting statement */}
            <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary">
              I turn ideas and business requirements into production-ready
              systems, handling everything from full-stack development to
              deployment, infrastructure, and project delivery.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">

              <a
                href="#work"
                id="hero-cta-work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gold hover:bg-gold/90 text-bg-primary font-semibold text-sm transition-all shadow-lg shadow-gold/10 hover:shadow-gold/20 active:scale-[0.98]"
              >
                View my work
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                id="hero-cta-cv"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface hover:bg-surface/80 text-text-primary border border-border font-medium text-sm transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-gold" />
                Download CV
              </a>

              {/* Social links */}
              <div className="flex items-center gap-1 ml-1 sm:ml-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Angosom"
                  className="p-3 rounded-lg text-text-muted hover:text-gold hover:bg-surface transition-colors"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg text-text-muted hover:text-gold hover:bg-surface transition-colors"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg text-text-muted hover:text-gold hover:bg-surface transition-colors"
                >
                  <Github className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>

            {/* Small credibility line */}
            <div className="mt-9 flex items-center gap-3 text-xs text-text-muted">
              <div className="h-px w-8 bg-border" />
              <span>
                Based in Ethiopia · Building systems for real businesses
              </span>
            </div>
          </div>

          {/* =========================================================
              RIGHT: VISUAL SYSTEM
          ========================================================= */}
          <div className="lg:col-span-5 relative">

            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Main visual card */}
            <div className="relative">

              {/* Main project preview */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">

                {/* Browser chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  </div>

                  <div className="px-3 py-1 rounded-md bg-bg-primary text-[10px] font-mono text-text-muted">
                    production
                  </div>
                </div>

                {/* Project visualization */}
                <div className="p-5 sm:p-7">

                  <div className="flex items-center justify-between mb-7">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-text-muted font-mono">
                        System overview
                      </div>

                      <div className="mt-1 text-lg font-semibold text-text-primary">
                        From idea → production
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                      <Layers3 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Architecture visualization */}
                  <div className="space-y-3">

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-16 rounded-xl border border-border bg-bg-primary flex items-center px-4">
                        <div>
                          <div className="text-xs font-semibold text-text-primary">
                            Product
                          </div>
                          <div className="text-[10px] text-text-muted mt-1">
                            Requirements · UX · Architecture
                          </div>
                        </div>
                      </div>

                      <div className="text-gold text-xs">→</div>
                    </div>

                    <div className="flex items-center gap-3 ml-6">
                      <div className="flex-1 h-16 rounded-xl border border-gold/20 bg-gold/[0.04] flex items-center px-4">
                        <div>
                          <div className="text-xs font-semibold text-text-primary">
                            Application
                          </div>
                          <div className="text-[10px] text-text-muted mt-1">
                            React · Laravel · Node · APIs
                          </div>
                        </div>
                      </div>

                      <div className="text-gold text-xs">→</div>
                    </div>

                    <div className="flex items-center gap-3 ml-12">
                      <div className="flex-1 h-16 rounded-xl border border-border bg-bg-primary flex items-center px-4">
                        <div>
                          <div className="text-xs font-semibold text-text-primary">
                            Infrastructure
                          </div>
                          <div className="text-[10px] text-text-muted mt-1">
                            Hosting · DNS · SSL · Deployment
                          </div>
                        </div>
                      </div>

                      <div className="text-emerald-400 text-xs">✓</div>
                    </div>

                  </div>

                  {/* Technology strip */}
                  <div className="mt-7 pt-5 border-t border-border flex flex-wrap gap-2">
                    {['React', 'Laravel', 'Node.js', 'MySQL', 'REST API'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[10px] font-mono text-text-muted"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating deployment card */}
              <div className="absolute -bottom-6 -left-5 sm:-left-8 px-4 py-3 rounded-xl bg-surface border border-border shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-text-muted font-mono">
                    Deployment
                  </div>
                  <div className="text-xs font-semibold text-text-primary">
                    Production ready
                  </div>
                </div>
              </div>

              {/* Floating leadership card */}
              <div className="absolute -top-5 -right-4 sm:-right-7 px-4 py-3 rounded-xl bg-surface border border-border shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gold/10">
                  <Users className="w-4 h-4 text-gold" />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-text-muted font-mono">
                    Leadership
                  </div>
                  <div className="text-xs font-semibold text-text-primary">
                    Project delivery
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            PROOF / NUMBERS
        ========================================================= */}
        <div className="border-t border-border">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">

            {PROOF_POINTS.map((item, idx) => (
              <div
                key={idx}
                id={`proof-point-${idx}`}
                className="py-8 px-5 sm:px-8 first:pl-0 last:pr-0"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-gold">
                  {item.metric}
                </div>

                <div className="mt-1 text-sm font-semibold text-text-primary">
                  {item.label}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}