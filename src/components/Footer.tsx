import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-bg-primary border-t border-border py-16 text-text-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center font-mono font-bold text-gold text-xs">
                AGB
              </div>
              <span className="font-display font-bold text-base text-text-primary">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-text-secondary max-w-md leading-relaxed font-mono">
              "I don't just write code. I take software from idea to production." Full-Stack Engineer and Technical Project Lead based in Ethiopia.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono pt-2 text-text-muted">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" /> Hostinger / VPS Production Ready
              </span>
              <span>•</span>
              <span>SPA React + Vite</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-text-primary font-bold uppercase text-[11px] tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#work" className="hover:text-gold transition-colors">
                  Engineering Case Studies
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold transition-colors">
                  What I Actually Do
                </a>
              </li>
              <li>
                <a href="#beyond-code" className="hover:text-gold transition-colors">
                  Beyond Code (Hosting & Ops)
                </a>
              </li>
              <li>
                <a href="#how-i-work" className="hover:text-gold transition-colors">
                  How I Work & Docs
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-gold transition-colors">
                  Leadership (Requirements to Release)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gold transition-colors">
                  Skills & Technologies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-text-primary font-bold uppercase text-[11px] tracking-wider mb-3">
              Direct Contact
            </div>
            <div className="space-y-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-gold hover:underline break-all transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <div className="text-text-muted text-[11px]">
                Location: {PERSONAL_INFO.location}
              </div>
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.cvPath}
                  download="Angosom_Gebremedhin_Berhe_CV.pdf"
                  className="inline-flex items-center gap-1.5 text-text-primary hover:text-gold transition-colors"
                >
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-text-muted">
          <div>
            © {new Date().getFullYear()} Angosom Gebremedhin Berhe. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Engineered for Hostinger / VPS Production</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}