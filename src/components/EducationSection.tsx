import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-20 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Academic Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Education & Theoretical Rigor
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            A high-distinction academic background in software engineering providing the theoretical grounding behind my system architectures.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {EDUCATION_DATA.honors}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    GPA: <strong className="text-slate-100">{EDUCATION_DATA.gpa}</strong>
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-100">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm font-mono text-amber-400/90 mt-0.5">
                  {EDUCATION_DATA.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Graduated {EDUCATION_DATA.graduationDate}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase mb-1">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Undergraduate Thesis: {EDUCATION_DATA.thesisTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-2">
              {EDUCATION_DATA.thesisDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
