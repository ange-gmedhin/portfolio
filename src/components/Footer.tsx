import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="border-t border-border bg-bg-primary py-14 text-text-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">

          {/* Identity */}
          <div className="md:col-span-6">
            <a
              href="#home"
              className="inline-block font-display font-bold text-lg text-text-primary hover:text-gold transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-text-secondary">
              Full-Stack Engineer and Project Lead building and delivering
              digital products from requirements to production.
            </p>

            <p className="mt-5 text-xs text-text-muted">
              Based in {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-text-primary">
              Navigate
            </h3>

            <nav className="flex flex-col items-start gap-2.5 text-sm">
              <a
                href="#home"
                className="hover:text-gold transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-gold transition-colors"
              >
                About
              </a>

              <a
                href="#expertise"
                className="hover:text-gold transition-colors"
              >
                Expertise
              </a>

              <a
                href="#work"
                className="hover:text-gold transition-colors"
              >
                Selected Work
              </a>

              <a
                href="#contact"
                className="hover:text-gold transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-text-primary">
              Connect
            </h3>

            <div className="flex flex-col items-start gap-3 text-sm">

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-gold transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              {PERSONAL_INFO.linkedinUrl && (
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}

              {PERSONAL_INFO.githubUrl && (
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                className="mt-1 text-text-primary hover:text-gold transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] font-mono text-text-muted">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start sm:self-auto text-[11px] font-mono text-text-secondary hover:text-gold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}