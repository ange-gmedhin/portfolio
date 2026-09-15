import { useState } from 'react';
import {
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (
    value: string,
    type: 'email' | 'phone'
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);

      window.setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: Contact */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-gold mb-4">
                CONTACT
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight">
                Let's talk.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary">
                If you'd like to discuss a project, engineering role,
                research opportunity, or collaboration, you can reach me
                directly.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 border-y border-border divide-y divide-border">

              {/* Email */}
              <div className="py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex items-start gap-4 min-w-0">
                  <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />

                  <div className="min-w-0">
                    <p className="text-sm text-text-muted">
                      Email
                    </p>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="mt-1 block text-base sm:text-lg font-medium text-text-primary hover:text-gold transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(PERSONAL_INFO.email, 'email')
                    }
                    className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                  >
                    {copied === 'email' ? (
                      <>
                        <Check className="w-4 h-4 text-gold" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-text-primary hover:text-gold transition-colors"
                  >
                    Email me
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              {PERSONAL_INFO.phone && (
                <div className="py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />

                    <div>
                      <p className="text-sm text-text-muted">
                        Phone
                      </p>

                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="mt-1 block text-base sm:text-lg font-medium text-text-primary hover:text-gold transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(PERSONAL_INFO.phone, 'phone')
                      }
                      className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                    >
                      {copied === 'phone' ? (
                        <>
                          <Check className="w-4 h-4 text-gold" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>

                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-medium text-text-primary hover:text-gold transition-colors"
                    >
                      Call me
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              )}

            </div>

            {/* Secondary links */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download CV
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Availability */}
          <aside className="lg:col-span-5 lg:flex lg:items-center">
            <div className="w-full lg:border-l lg:border-border lg:pl-12">

              <div className="flex items-center gap-3 mb-7">
                <div className="flex items-center justify-center w-9 h-9 rounded-full border border-border">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Currently open to
                  </p>

                  <p className="text-xs text-text-muted mt-0.5">
                    New opportunities and collaborations
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Full-stack engineering
                </li>

                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Project leadership
                </li>

                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Software projects
                </li>

                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                  Research collaboration
                </li>
              </ul>

              <div className="mt-10 pt-7 border-t border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />

                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Based in Ethiopia
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      Working with teams and organizations internationally.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}