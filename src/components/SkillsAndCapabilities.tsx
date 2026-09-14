import { useState } from 'react';
import {
  Layers,
  Compass,
  Server,
  Zap,
  Gauge,
  Users,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Terminal,
  Settings,
  Globe,
  Sparkles,
  Sliders,
  MapPin,
  CalendarCheck,
  FileCode2,
  Copy,
  Check,
  Workflow,
  Cpu,
} from 'lucide-react';
import { CAPABILITIES, SKILL_CATEGORIES, DOCUMENTATION_ARTIFACTS } from '../data/portfolioData';

type TabType = 'scope' | 'stack' | 'lifecycle' | 'ai';

export function SkillsAndCapabilities() {
  const [activeTab, setActiveTab] = useState<TabType>('scope');

  // --- Skills Section State ---
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const skillCategories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];
  const filteredSkillCategories =
    selectedSkillCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedSkillCategory);

  // --- Practical AI State ---
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

  // --- How I Work State ---
  const [activeDocId, setActiveDocId] = useState(DOCUMENTATION_ARTIFACTS[0]?.id || '');
  const [copied, setCopied] = useState(false);
  const activeDoc = DOCUMENTATION_ARTIFACTS.find((d) => d.id === activeDocId) || DOCUMENTATION_ARTIFACTS[0];

  const lifecycleSteps = [
    { num: '01', name: 'Understand', desc: 'Requirements & business context', detail: 'Deep dive into operational pains, budget limits, user roles, and core objectives before writing any code.' },
    { num: '02', name: 'Design', desc: 'Architecture & user flow', detail: 'Data schemas, API endpoint contracts, network boundaries, and wireframe user journeys to eliminate structural blindspots.' },
    { num: '03', name: 'Build', desc: 'Frontend + backend + integrations', detail: 'Iterative, type-safe full-stack implementation using React, Laravel/Node.js, automated test verification, and clean Git commits.' },
    { num: '04', name: 'Test', desc: 'Validation & refinement', detail: 'Testing edge-cases: offline network drops, concurrent orders, invalid payment payloads, and cross-device responsiveness.' },
    { num: '05', name: 'Deploy', desc: 'Hosting, domain, SSL & production', detail: 'Provisioning VPS, DNS record cutovers, SSL certificate installation, and zero-downtime release.' },
    { num: '06', name: 'Improve', desc: 'Monitoring, optimization & iteration', detail: 'Analyzing database query execution times, monitoring user feedback, and refining features based on real operating metrics.' },
  ];

  const handleCopySpec = () => {
    if (activeDoc) {
      navigator.clipboard.writeText(activeDoc.previewCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCapabilityIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5 text-gold" />;
      case 'Compass': return <Compass className="w-5 h-5 text-info" />;
      case 'Server': return <Server className="w-5 h-5 text-success" />;
      case 'Zap': return <Zap className="w-5 h-5 text-gold-light" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-info" />;
      case 'Users': return <Users className="w-5 h-5 text-gold" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-gold-light" />;
      default: return <Layers className="w-5 h-5 text-gold" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) return <Code2 className="w-4 h-4 text-gold" />;
    if (category.includes('Backend')) return <Server className="w-4 h-4 text-info" />;
    if (category.includes('Databases')) return <Database className="w-4 h-4 text-success" />;
    if (category.includes('Infrastructure')) return <Terminal className="w-4 h-4 text-warning" />;
    if (category.includes('Leadership')) return <Settings className="w-4 h-4 text-gold-light" />;
    if (category.includes('Platforms')) return <Globe className="w-4 h-4 text-info" />;
    return <Sparkles className="w-4 h-4 text-gold" />;
  };

  const getBadgeClass = (level: string) => {
    switch (level) {
      case 'Core Production': return 'bg-gold/15 text-gold-light border-gold/30';
      case 'Advanced': return 'bg-info/15 text-info border-info/30';
      case 'Working Knowledge': return 'bg-surface-hover text-text-secondary border-border';
      default: return 'bg-surface text-text-secondary border-border';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-border text-gold font-mono text-xs uppercase tracking-wider mb-3">
          // Engineering Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
          Capabilities, Tech Stack & Workflow
        </h2>
        <p className="mt-3 text-text-secondary text-base leading-relaxed">
          From architectural scoping and full-stack execution to engineering runbooks and applied intelligent systems.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 mb-8 border-b border-border/60 font-mono text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('scope')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
            activeTab === 'scope'
              ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
              : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Operational Scope</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('stack')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
            activeTab === 'stack'
              ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
              : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>Tech Stack</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('lifecycle')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
            activeTab === 'lifecycle'
              ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
              : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
          }`}
        >
          <Workflow className="w-4 h-4" />
          <span>Lifecycle & Documentation</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
            activeTab === 'ai'
              ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
              : 'bg-surface text-text-secondary border-border hover:border-text-muted hover:text-text-primary'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Applied AI (R&D)</span>
        </button>
      </div>

      {/* ================= TAB 1: OPERATIONAL SCOPE ================= */}
      {activeTab === 'scope' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const isFullSpan = index === 6;
            return (
              <div
                key={cap.id}
                className={`group rounded-xl bg-surface/60 border border-border hover:border-gold/40 p-6 transition-all hover:bg-surface-hover flex flex-col justify-between ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-surface/80 via-surface/90 to-bg-secondary' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCapabilityIcon(cap.icon)}
                    </div>
                    <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-text-primary mb-1 group-hover:text-gold transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono text-gold-light mb-3">{cap.subtitle}</div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{cap.description}</p>
                </div>

                <div className="pt-4 border-t border-border/80 space-y-2">
                  {cap.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold/80 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ================= TAB 2: TECH STACK ================= */}
      {activeTab === 'stack' && (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    selectedSkillCategory === cat
                      ? 'bg-gold text-bg-primary font-bold border-gold shadow-sm'
                      : 'bg-surface text-text-secondary border-border hover:border-text-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-gold" /> Core Production
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-info" /> Advanced
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-text-muted" /> Applied / R&D
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-2xl bg-surface/60 border border-border hover:border-gold/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
                    {getCategoryIcon(cat.category)}
                    <h3 className="text-base font-display font-bold text-text-primary">{cat.category}</h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-5 font-sans">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="p-2.5 rounded-lg bg-bg-primary/80 border border-border">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-text-primary">{skill.name}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getBadgeClass(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.note && (
                          <div className="text-[11px] text-text-muted font-sans leading-tight">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: LIFECYCLE & DOCUMENTATION ================= */}
      {activeTab === 'lifecycle' && (
        <div className="space-y-12">
          {/* 6-Stage Grid */}
          <div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-6">
              6-Stage Development Lifecycle
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifecycleSteps.map((step) => (
                <div key={step.num} className="p-6 rounded-xl bg-surface/60 border border-border hover:border-gold/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-gold font-bold bg-gold/10 px-2.5 py-0.5 rounded border border-gold/20">
                      STAGE {step.num}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-text-primary mb-1">{step.name}</h4>
                  <div className="text-xs font-mono text-gold-light mb-2">{step.desc}</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Artifacts Explorer */}
          <div className="rounded-2xl bg-bg-secondary border border-border p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-gold font-bold uppercase mb-1">
                  <FileCode2 className="w-4 h-4" />
                  <span>Engineering Specs</span>
                </div>
                <h4 className="text-xl font-display font-bold text-text-primary">
                  Documentation Artifacts
                </h4>
              </div>

              {/* Artifact Tabs */}
              <div className="flex flex-wrap gap-2">
                {DOCUMENTATION_ARTIFACTS.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveDocId(doc.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeDocId === doc.id
                        ? 'bg-gold text-bg-primary font-bold'
                        : 'bg-surface text-text-secondary border border-border hover:border-text-muted'
                    }`}
                  >
                    {doc.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Spec Terminal */}
            {activeDoc && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-surface/60 border border-border">
                    <div className="text-[10px] font-mono text-text-muted uppercase">Target File</div>
                    <div className="font-mono text-xs text-gold-light font-bold mt-0.5 break-all">
                      {activeDoc.filename}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface/60 border border-border">
                    <div className="text-[10px] font-mono text-text-muted uppercase">Purpose</div>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">{activeDoc.description}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gold/10 border border-gold/30">
                    <div className="text-[10px] font-mono text-gold uppercase">Key Value</div>
                    <p className="text-xs text-text-primary mt-1 italic">"{activeDoc.keyTakeaway}"</p>
                  </div>
                </div>

                <div className="lg:col-span-8 rounded-xl bg-bg-primary border border-border overflow-hidden font-mono text-xs">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border text-text-secondary">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      <span>{activeDoc.filename}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopySpec}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-hover text-text-primary text-[11px] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-success" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-text-muted" />
                          <span>Copy Spec</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-5 overflow-x-auto max-h-[360px] text-text-secondary text-xs leading-relaxed">
                    <pre>
                      <code>{activeDoc.previewCode}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= TAB 4: APPLIED AI (R&D) ================= */}
      {activeTab === 'ai' && (
        <div className="space-y-8">
          {/* Honest Positioning */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-wider">
                  Positioning Statement // Honest Engineering
                </span>
                <h3 className="text-2xl font-display font-bold text-text-primary">
                  Full-stack engineering foundation, moving toward intelligent systems.
                </h3>
                <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
                  I bring production full-stack engineering, databases, and systems architecture, applying machine intelligence where it delivers verifiable, contextual value to users.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-primary border border-border text-xs font-mono shrink-0 space-y-2">
                <div className="flex items-center gap-2 text-gold font-bold">
                  <BrainCircuit className="w-4 h-4" />
                  <span>R&D Focus</span>
                </div>
                <div className="text-text-muted">• Recommendation heuristics</div>
                <div className="text-text-muted">• Preference constraint satisfaction</div>
                <div className="text-text-muted">• Local service verification</div>
              </div>
            </div>
          </div>

          {/* Interactive Case Study Simulator */}
          <div className="rounded-2xl bg-bg-secondary border border-border p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-border text-xs font-mono">
              <span className="text-gold font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>CASE STUDY: SMART TOURISM TIGRAY (R&D)</span>
              </span>
              <span className="text-text-muted">Interactive Prototype</span>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold uppercase">
                  <Sliders className="w-4 h-4" />
                  <span>User Inputs</span>
                </div>

                <div>
                  <label className="text-xs text-text-secondary block mb-2 font-mono">
                    Primary Interest & Focus:
                  </label>
                  <div className="space-y-2">
                    {['Ancient Architecture & Heritage', 'Cultural & Living Traditions', 'Scenic Landscapes & Treks'].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setSelectedInterest(interest)}
                        className={`w-full text-left p-3 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                          selectedInterest === interest
                            ? 'bg-gold/15 border-gold text-gold-light font-bold'
                            : 'bg-surface border-border text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-text-secondary block mb-2 font-mono">Travel Duration:</label>
                  <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                    {['2 Days', '3 Days', '5 Days'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDuration(d)}
                        className={`py-2 rounded-lg border text-center transition-colors cursor-pointer ${
                          selectedDuration === d
                            ? 'bg-gold text-bg-primary font-bold border-gold'
                            : 'bg-surface text-text-secondary border-border hover:border-text-muted'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Output */}
              <div className="lg:col-span-7 rounded-xl bg-surface/70 border border-border p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border font-mono text-xs">
                  <span className="flex items-center gap-2 text-success font-bold">
                    <CalendarCheck className="w-4 h-4" />
                    <span>SYNTHESIZED ITINERARY</span>
                  </span>
                  <span className="text-text-muted">{selectedDuration} Itinerary</span>
                </div>

                <div>
                  <h4 className="text-lg font-display font-bold text-text-primary">{currentResult.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 font-mono">
                    Optimized for: <span className="text-gold">{selectedInterest}</span>
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-text-muted">Sequential Checkpoints:</div>
                  {currentResult.stops.map((stop, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-lg bg-bg-primary border border-border flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 font-mono text-text-primary">
                        <span className="w-5 h-5 rounded bg-surface text-gold flex items-center justify-center font-bold text-[10px]">
                          {sIdx + 1}
                        </span>
                        <span>{stop}</span>
                      </div>
                      <span className="text-[10px] text-success font-mono">Verified</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-bg-primary border border-gold/30 font-mono text-xs space-y-2">
                  <div className="flex items-center gap-2 text-gold font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Connected Local Operator</span>
                  </div>
                  <div className="text-text-secondary text-xs font-sans">{currentResult.guideType}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}