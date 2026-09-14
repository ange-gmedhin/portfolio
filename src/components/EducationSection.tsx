import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-20 border-b border-border bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-gold font-mono text-xs uppercase tracking-wider mb-3">
            // Academic Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
            Education & Theoretical Rigor
          </h2>
          <p className="mt-2 text-text-secondary text-sm leading-relaxed font-sans">
            A high-distinction academic background in software engineering providing the theoretical grounding behind my system architectures.
          </p>
        </div>

        {/* Education Card Container */}
        <div className="rounded-2xl bg-surface/60 border border-border p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gold/15 text-gold border border-gold/30">
                    {EDUCATION_DATA.honors}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    CGPA: <strong className="text-text-primary">{EDUCATION_DATA.gpa}</strong> / 4.00
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm font-mono text-gold mt-0.5">
                  {EDUCATION_DATA.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5 bg-bg-primary px-3 py-1.5 rounded-md border border-border">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Graduated {EDUCATION_DATA.graduationDate}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-bg-primary px-3 py-1.5 rounded-md border border-border">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Thesis Highlight */}
          <div className="mt-6 p-4 rounded-xl bg-bg-primary border border-border">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-text-primary uppercase mb-1">
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Undergraduate Thesis: {EDUCATION_DATA.thesisTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mt-2">
              {EDUCATION_DATA.thesisDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}