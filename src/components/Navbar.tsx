import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Scroll state + hide on scroll down, reveal on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);
      setIsHidden(y > 480 && y > lastY && !mobileMenuOpen);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  // Lock body scroll + Escape to close
  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        isHidden ? '-translate-y-[110%]' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`relative rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'border-ink-700/70 bg-ink-950/85 shadow-xl shadow-black/30 backdrop-blur-xl'
              : 'border-white/5 bg-ink-950/40 backdrop-blur-md'
          }`}
        >
          <div className="flex h-14 items-center justify-between gap-3 px-3 sm:px-4">
            {/* ---- Brand ---- */}
<a href="#home" id="brand-logo" className="group flex min-w-0 items-center gap-2.5">
  <img
    src="/favicon_circle.png"
    alt="Angosom Gebremedhin"
    className="h-8 w-8 shrink-0 rounded-lg object-contain transition-transform group-hover:scale-105"
  />

  <span className="hidden truncate font-display text-sm font-semibold text-text-on-dark lg:block">
    Angosom Gebremedhin
  </span>
</a>

            {/* ---- Desktop nav (centered) ---- */}
            <nav
              id="desktop-nav"
              aria-label="Main Navigation"
              className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            >
              <ul className="flex items-center gap-0.5">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        id={`nav-link-${sectionId}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`group relative block px-3 py-2 text-[13px] font-medium transition-colors lg:px-3.5 ${
                          isActive
                            ? 'text-brown-soft'
                            : 'text-text-on-dark-muted hover:text-text-on-dark'
                        }`}
                      >
                        {link.label}
                        <span
                          className={`absolute inset-x-3 -bottom-0.5 h-px bg-brown-soft transition-transform duration-300 ease-out ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                          }`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ---- Actions ---- */}
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                id="nav-cv-button"
                className="hidden items-center gap-1.5 rounded-lg bg-brown px-3.5 py-2 text-[13px] font-semibold text-paper-50 shadow-sm transition-all duration-200 hover:bg-brown-deep hover:shadow-md hover:shadow-brown/20 active:scale-[0.98] sm:inline-flex"
              >
                <FileText className="h-3.5 w-3.5" />
                Download CV
              </a>
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-text-on-dark-muted transition-colors hover:text-text-on-dark md:hidden"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* ---- Mobile panel (animated, lives inside the pill) ---- */}
          <div
            id="mobile-nav-panel"
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
              mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav aria-label="Mobile Navigation" className="border-t border-ink-700/60 px-3 pb-4 pt-2">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <li
                      key={link.href}
                      className={`transition-all duration-300 ${
                        mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                      style={{ transitionDelay: mobileMenuOpen ? `${60 + i * 40}ms` : '0ms' }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          isActive
                            ? 'bg-ink-800 font-medium text-brown-soft'
                            : 'text-text-on-dark-muted hover:bg-ink-800/60 hover:text-text-on-dark'
                        }`}
                      >
                        {link.label}
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 transition-opacity ${
                            isActive ? 'text-brown-soft opacity-100' : 'opacity-0'
                          }`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brown px-4 py-2.5 text-sm font-semibold text-paper-50 transition-colors hover:bg-brown-deep"
              >
                <FileText className="h-4 w-4" />
                Download CV (PDF)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}