import { useState } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Compass,
  MapPin,
  CalendarCheck,
  CheckCircle2,
  Sliders,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

export function PracticalAI() {
  // Interactive mini simulation of the recommendation heuristic
  const [selectedDuration, setSelectedDuration] = useState('3 Days');
  const [selectedInterest, setSelectedInterest] = useState('Ancient Architecture & Heritage');
  const [selectedMobility, setSelectedMobility] = useState('Moderate Walking');

  const itineraries: Record<string, { title: string; stops: string[]; guideType: string; highlight: string }> = {
    'Ancient Architecture & Heritage': {
      title: 'Axumite & Rock-Hewn Architectural Circuit',
      stops: ['Gheralta Rock Churches (Abuna Yemata Guh)', 'Yeha Moon Temple ruins', 'Debre Damo cliff access'],
      guideType: 'Certified Archaeological Heritage Guide',
      highlight: '6th-century architectural joinery & ancient stone masonry inspection.',
    },
    'Cultural & Living Traditions': {
      title: 'Monastic Living Heritage & Community Exchange',
      stops: ['Wukro Chirkos sacred grounds', 'Teklehaimanot traditional craft quarter', 'Local mountain community lodge'],
      guideType: 'Local Community Cultural Historian',
      highlight: 'Living liturgical traditions, ancient manuscript preservation, and artisan weaving.',
    },
    'Scenic Landscapes & Treks': {
      title: 'Gheralta Escarpment & Plateau Ridge Exploration',
      stops: ['Hawzen plain panorama', 'Maryam Korkor sandstone peak', 'Sunset over Guh cliffs'],
      guideType: 'Experienced Mountain Safety Guide',
      highlight: 'Panoramic rift valley viewpoints and certified route safety.',
    },
  };

  const currentResult = itineraries[selectedInterest] || itineraries['Ancient Architecture & Heritage'];

  return (
    <section id="ai-research" className="py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
            // Applied Intelligence & R&D
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Practical AI, not AI decoration.
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            I don't bolt buzzwords onto landing pages. My interest in artificial intelligence is grounded in solving real-world domain problems—combining a strong software engineering foundation with constraint-aware recommendation algorithms.
          </p>
        </div>

        {/* Honest Positioning Statement Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/30 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
                Positioning Statement // Honest Engineering
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-100">
                Strong software engineering foundation, moving toward intelligent systems.
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                I do not claim a decade of artificial intelligence specialization. Instead, I bring 3+ years of production full-stack engineering, databases, and systems architecture, and apply machine intelligence where it delivers verifiable, contextual value to users and local economies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-800/40 text-xs font-mono shrink-0 space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold">
                <BrainCircuit className="w-4 h-4" />
                <span>R&D Scope</span>
              </div>
              <div className="text-slate-400">• Recommendation logic & heuristics</div>
              <div className="text-slate-400">• Preference constraint satisfaction</div>
              <div className="text-slate-400">• Grounded local service verification</div>
            </div>
          </div>
        </div>

        {/* The Pipeline: Smart Tourism Tigray */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-slate-800 text-xs font-mono">
            <span className="text-purple-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>CASE STUDY: SMART TOURISM TIGRAY (R&D)</span>
            </span>
            <span className="text-slate-400">Interactive Architectural Prototype</span>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Preferences */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                <Sliders className="w-4 h-4" />
                <span>Step 1: User Preference Inputs</span>
              </div>

              {/* Interest */}
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-2 font-mono">
                  Primary Interest & Focus:
                </label>
                <div className="space-y-2">
                  {[
                    'Ancient Architecture & Heritage',
                    'Cultural & Living Traditions',
                    'Scenic Landscapes & Treks',
                  ].map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterest(interest)}
                      className={`w-full text-left p-3 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                        selectedInterest === interest
                          ? 'bg-purple-950/50 border-purple-500 text-purple-200 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-2 font-mono">
                  Available Travel Duration:
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {['2 Days', '3 Days', '5 Days'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDuration(d)}
                      className={`py-2 rounded-lg border text-center transition-colors cursor-pointer ${
                        selectedDuration === d
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobility */}
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-2 font-mono">
                  Physical Terrain / Mobility:
                </label>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {['Moderate Walking', 'Challenging Climb'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSelectedMobility(m)}
                      className={`py-2 px-2 rounded-lg border text-center transition-colors cursor-pointer ${
                        selectedMobility === m
                          ? 'bg-purple-900/60 text-purple-200 font-bold border-purple-600'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Output of Recommendation Engine */}
            <div className="lg:col-span-7 rounded-xl bg-slate-900/70 border border-slate-800 p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 font-mono text-xs">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CalendarCheck className="w-4 h-4" />
                  <span>SYNTHESIZED PERSONALIZED ITINERARY</span>
                </span>
                <span className="text-slate-400">{selectedDuration} Itinerary</span>
              </div>

              <div>
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                  Engine Output //
                </div>
                <h4 className="text-lg font-display font-bold text-slate-100">
                  {currentResult.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  Optimized for: <span className="text-amber-400">{selectedInterest}</span> • {selectedMobility}
                </p>
              </div>

              {/* Generated Stops */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-slate-400">Sequential Site Checkpoints:</div>
                {currentResult.stops.map((stop, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5 font-mono text-slate-200">
                      <span className="w-5 h-5 rounded bg-purple-950 text-purple-300 flex items-center justify-center font-bold text-[10px]">
                        {sIdx + 1}
                      </span>
                      <span>{stop}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono hidden sm:inline">
                      Verified Route
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Local Service Connection */}
              <div className="p-4 rounded-lg bg-slate-950 border border-amber-500/30 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Grounding: Connected Local Operator</span>
                </div>
                <div className="text-slate-300 text-xs font-sans">
                  {currentResult.guideType} assigned based on safety protocol and language fluency.
                </div>
                <div className="text-[11px] text-slate-400 italic">
                  Key Experience: "{currentResult.highlight}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
