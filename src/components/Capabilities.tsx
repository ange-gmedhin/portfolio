import {
  Layers,
  Compass,
  Server,
  Zap,
  Gauge,
  Users,
  BrainCircuit,
  CheckCircle2,
} from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export function Capabilities() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Operational Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            What I Actually Do
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Software engineering doesn't start with code and it doesn't end with a commit. My role spans product scoping, system architecture, full-stack implementation, server infrastructure, and team mentorship.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const isFullSpan = index === 6; // Explore AI
            return (
              <div
                key={cap.id}
                id={`capability-${cap.id}`}
                className={`group rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 transition-all hover:bg-slate-900/90 flex flex-col justify-between ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-slate-900/80 via-slate-900/90 to-purple-950/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(cap.icon)}
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-100 mb-1 group-hover:text-amber-300 transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {cap.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {cap.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
