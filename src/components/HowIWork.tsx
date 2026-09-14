import { useState } from 'react';
import {
  FileCode2,
  FileText,
  Workflow,
  Database,
  Terminal,
  Layers,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { DOCUMENTATION_ARTIFACTS } from '../data/portfolioData';

export function HowIWork() {
  const [activeDocId, setActiveDocId] = useState(DOCUMENTATION_ARTIFACTS[0].id);
  const [copied, setCopied] = useState(false);

  const activeDoc = DOCUMENTATION_ARTIFACTS.find((d) => d.id === activeDocId) || DOCUMENTATION_ARTIFACTS[0];

  const steps = [
    {
      num: '01',
      name: 'Understand',
      desc: 'Requirements & business context',
      detail: 'Deep dive with stakeholders into operational pains, budget limits, user roles, and core objectives before writing any code.',
    },
    {
      num: '02',
      name: 'Design',
      desc: 'Architecture & user flow',
      detail: 'Data schemas, API endpoint contracts, network boundaries, and wireframe user journeys to eliminate structural blindspots.',
    },
    {
      num: '03',
      name: 'Build',
      desc: 'Frontend + backend + integrations',
      detail: 'Iterative, type-safe full-stack implementation using React, Laravel/Node.js, automated test verification, and clean Git commits.',
    },
    {
      num: '04',
      name: 'Test',
      desc: 'Validation & refinement',
      detail: 'Testing edge-cases: offline network drops, concurrent orders, invalid payment payloads, and cross-device responsiveness.',
    },
    {
      num: '05',
      name: 'Deploy',
      desc: 'Hosting, domain, SSL & production',
      detail: 'Provisioning Hostinger or Linux VPS, DNS record cutovers, SSL certificate installation, and zero-downtime release.',
    },
    {
      num: '06',
      name: 'Improve',
      desc: 'Monitoring, optimization & iteration',
      detail: 'Analyzing database query execution times, monitoring user feedback, and refining features based on real operating metrics.',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeDoc.previewCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-i-work" className="py-24 border-b border-slate-800/80 bg-[#0B0F17]/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Engineering Lifecycle & Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            How I Work
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            A repeatable 6-stage engineering process that takes software from an ambiguous conversation to a stable, well-documented production deployment.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    STAGE {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-100 mb-1">
                  {step.name}
                </h3>
                <div className="text-xs font-mono text-amber-400/90 mb-3">
                  {step.desc}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Artifacts Explorer */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-1">
                <FileCode2 className="w-4 h-4" />
                <span>Documentation Artifacts</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                The Artifacts of Serious Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Code is only half the deliverable. Clear technical specifications, architectural blueprints, database contracts, and deployment runbooks are what keep systems maintainable.
              </p>
            </div>

            {/* Document Tabs */}
            <div className="flex flex-wrap gap-2">
              {DOCUMENTATION_ARTIFACTS.map((doc) => (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setActiveDocId(doc.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    activeDocId === doc.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {doc.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Artifact Preview Terminal */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left metadata */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">File Target</div>
                <div className="font-mono text-xs text-amber-300 font-bold mt-0.5 break-all">
                  {activeDoc.filename}
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase mt-3">Classification</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  {activeDoc.category}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Context & Purpose</div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {activeDoc.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/30">
                <div className="text-[10px] font-mono text-amber-400 uppercase">Why It Matters</div>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed italic">
                  "{activeDoc.keyTakeaway}"
                </p>
              </div>
            </div>

            {/* Right code/spec viewer */}
            <div className="lg:col-span-8 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{activeDoc.filename}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 overflow-x-auto max-h-[380px] text-slate-300 text-xs leading-relaxed bg-[#070A0F]">
                <pre>
                  <code>{activeDoc.previewCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
