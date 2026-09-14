import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aligned with merged section structure
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#home"
          id="brand-logo"
          className="group flex items-center gap-3 text-text-primary hover:text-gold transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-surface border border-border group-hover:border-gold/60 flex items-center justify-center font-mono font-bold text-gold text-sm tracking-tighter transition-all shadow-inner">
            AGB
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-text-primary group-hover:text-gold transition-colors">
              Angosom Gebremedhin
            </span>
            <span className="font-mono text-[11px] text-text-muted tracking-normal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Full-Stack & Lead Systems Engineer
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${sectionId}`}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-gold bg-gold/10 border border-gold/30 shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvPath}
            download="Angosom_Gebremedhin_Berhe_CV.pdf"
            id="nav-cv-button"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gold hover:bg-gold-light text-bg-primary text-xs font-mono font-bold tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-text-primary"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-bg-primary/98 border-b border-border px-4 pt-4 pb-6 space-y-3 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1 pb-3 border-b border-border">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm font-mono rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-gold bg-gold/10 font-bold border border-gold/30'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download="Angosom_Gebremedhin_Berhe_CV.pdf"
              className="w-full py-2.5 px-4 rounded-lg bg-gold hover:bg-gold-light text-bg-primary font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg border border-border text-text-primary text-center text-xs font-mono font-medium hover:bg-surface transition-all"
            >
              Contact Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}