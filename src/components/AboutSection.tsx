import { Terminal, MapPin, Compass, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-slate-800/80 bg-[#0B0F17]/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider">
              // Background & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
              Taking responsibility from idea to production.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a full-stack software engineer and technical project manager based in Ethiopia. I build software because I enjoy solving tangible, practical operational problems—whether that means architecting an offline-first system for remote quarry sites with zero internet connectivity or building a 7-language restaurant platform serving thousands of guests.
              </p>

              <p>
                My trajectory has grown naturally from hands-on software development into end-to-end technical leadership. Writing clean code is vital, but software only creates value when it is properly scoped, securely hosted, supported by reliable DNS and email configurations, and handed over to end users without friction.
              </p>

              <p>
                Today at Ahaz Solutions, I lead production projects from initial stakeholder discovery through architecture, sprint execution in Jira, live server provisioning, and client delivery. At the same time, I mentor university interns and junior developers, instilling the habits of defensive programming, careful code reviews, and production resilience.
              </p>
            </div>

            {/* Core Values / Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Real-World Grounding</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Designing for real environments: spotty WiFi, kitchen noise, multiple currencies, and diverse languages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Empathetic Leadership</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Transparent client commitments paired with active, constructive mentorship for junior engineers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dossier Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
                <span className="text-amber-400 font-bold">ENGINEER DOSSIER</span>
                <span>STATUS: ACTIVE</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Full Name</span>
                  <span className="text-slate-100 font-bold">{PERSONAL_INFO.name}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-100 font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Current Role</span>
                  <span className="text-amber-300 font-bold text-right">
                    Full-Stack Dev & Technical Project Manager
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Company</span>
                  <span className="text-slate-200 font-semibold">
                    Ahaz Electronic & Software Solutions
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Degree</span>
                  <span className="text-slate-200">
                    BSc Software Eng (GPA 3.94 / 4.00)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Specialty</span>
                  <span className="text-emerald-400 font-bold">
                    Full-Stack + TPM + Hosting + Applied AI
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 leading-relaxed">
                "I measure the success of an application not by how clever the code looks, but by whether it stays online, operates securely, and solves the user's problem every single day."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
