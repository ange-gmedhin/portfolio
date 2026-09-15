import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';

import { PERSONAL_INFO, PROOF_POINTS } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main hero */}
        <div className="min-h-[680px] lg:min-h-[720px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-24 md:py-32">

          {/* LEFT: INTRODUCTION */}
          <div className="lg:col-span-7">

            {/* Role */}
            <p className="mb-6 text-sm font-medium tracking-wide text-gold">
              FULL-STACK ENGINEER · PROJECT LEAD
            </p>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] text-text-primary">
              Angosom
              <br />
              Gebremedhin Berhe
            </h1>

            {/* Main statement */}
            <p className="mt-8 max-w-2xl text-2xl sm:text-3xl leading-snug font-medium text-text-primary">
              I build and lead digital products
              from requirements to production.
            </p>

            {/* Supporting text */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary">
              I am a software engineer with 3+ years of experience building
              web applications, business systems, APIs, and digital products
              for real organizations.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gold text-bg-primary font-semibold text-sm transition-colors hover:bg-gold/90"
              >
                View my work
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-border bg-surface text-text-primary font-medium text-sm transition-colors hover:bg-surface/70"
              >
                <FileText className="w-4 h-4 text-gold" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-1">

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Angosom"
                className="p-2.5 rounded-md text-text-muted hover:text-gold transition-colors"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-md text-text-muted hover:text-gold transition-colors"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-md text-text-muted hover:text-gold transition-colors"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Location / context */}
            <div className="mt-8 pt-6 border-t border-border max-w-lg">
              <p className="text-sm text-text-muted">
                Based in Ethiopia · Building software for businesses and
                organizations.
              </p>
            </div>
          </div>

          {/* RIGHT: SIMPLE VISUAL */}
          <div className="lg:col-span-5">

            <div className="relative">

              {/* Main visual */}
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">

                {/* Replace this area with a REAL project screenshot later */}
                <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] bg-bg-secondary flex items-center justify-center p-8">

                  <div className="w-full max-w-sm">

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-text-muted">
                        Selected work
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold text-text-primary">
                        From idea to production
                      </h2>
                    </div>

                    <div className="space-y-3">

                      <div className="p-5 rounded-xl border border-border bg-bg-primary">
                        <p className="text-xs text-text-muted">
                          01
                        </p>

                        <p className="mt-2 text-sm font-semibold text-text-primary">
                          Understand the problem
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-text-muted">
                          Requirements, users and business needs.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-border bg-bg-primary">
                        <p className="text-xs text-text-muted">
                          02
                        </p>

                        <p className="mt-2 text-sm font-semibold text-text-primary">
                          Build the system
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-text-muted">
                          Product, backend, APIs and integrations.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-border bg-bg-primary">
                        <p className="text-xs text-text-muted">
                          03
                        </p>

                        <p className="mt-2 text-sm font-semibold text-text-primary">
                          Deliver and maintain
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-text-muted">
                          Deployment, hosting and ongoing improvement.
                        </p>
                      </div>

                    </div>

                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="text-xs text-text-muted">
                        React · Laravel · Node.js · PHP · MySQL
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Small project link */}
              <div className="mt-4 flex justify-end">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors"
                >
                  See selected projects
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Proof */}
        <div className="border-t border-border">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {PROOF_POINTS.map((item, index) => (
              <div
                key={index}
                className={`
                  py-8 sm:py-10
                  pr-5 sm:pr-8
                  ${index > 0 ? 'pl-5 sm:pl-8 border-l border-border' : ''}
                `}
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gold">
                  {item.metric}
                </div>

                <div className="mt-1 text-sm text-text-secondary">
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