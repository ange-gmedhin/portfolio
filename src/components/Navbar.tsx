import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
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

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Beyond Code', href: '#beyond-code' },
    { label: 'How I Work', href: '#how-i-work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#home"
          id="brand-logo"
          className="group flex items-center gap-3 text-slate-100 hover:text-amber-400 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 group-hover:border-amber-500/60 flex items-center justify-center font-mono font-bold text-amber-400 text-sm tracking-tighter transition-all shadow-inner">
            AGB
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
              Angosom Gebremedhin
            </span>
            <span className="font-mono text-[11px] text-slate-400 tracking-normal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Full-Stack & TPM • Ethiopia
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.substring(1)}`}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold tracking-wide transition-all shadow-sm shadow-amber-500/20 active:scale-95"
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
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download="Angosom_Gebremedhin_Berhe_CV.pdf"
              className="w-full py-2.5 px-4 rounded-md bg-amber-500 text-slate-950 text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 px-4 rounded-md border border-slate-700 text-slate-200 text-center text-sm font-medium hover:bg-slate-800/60"
            >
              Contact Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
