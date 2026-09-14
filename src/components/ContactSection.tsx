import { useState, type FormEvent } from 'react';
import {
  Mail,
  Copy,
  Check,
  FileText,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Production Project');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCreateEmailDraft = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Inquiring with Angosom Gebremedhin Berhe`);
    const body = encodeURIComponent(
      `Hello Angosom,\n\nMy name is ${senderName || '[Your Name]'}${
        senderOrg ? ` from ${senderOrg}` : ''
      }.\n\nInquiry Details (${inquiryType}):\n${
        senderMessage || 'I would like to discuss a potential software project / role.'
      }\n\nLooking forward to speaking with you.\n\nBest regards,\n${senderName || ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
            // Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Initiate Contact
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Available for full-stack engineering roles, technical project management, international contracts, graduate research collaboration, and end-to-end system deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PRIMARY EMAIL CHANNEL</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Direct Address:</span>
                <div className="font-mono text-sm sm:text-base font-bold text-amber-300 break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="direct-mailto-link"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>

            {/* CV Download Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                <FileText className="w-4 h-4" />
                <span>Formal Curriculum Vitae</span>
              </div>
              <h3 className="text-lg font-display font-bold text-slate-100">
                Download Full Technical Resume
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Includes complete chronological employment records, project architectures, verified GPA (3.94 / 4.00), and technical proficiencies.
              </p>
              <a
                href={PERSONAL_INFO.cvPath}
                download="Angosom_Gebremedhin_Berhe_CV.pdf"
                id="contact-cv-download"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-amber-500/20 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-slate-200 group-hover:text-amber-300">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-mono text-slate-200 group-hover:text-amber-300">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right: Direct Scope & Message Form (Frontend Mailto Generator) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="text-amber-400 font-bold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>STRUCTURED INQUIRY LAUNCHER</span>
                </span>
                <span>Direct Client & Recruiter Form</span>
              </div>

              <form onSubmit={handleCreateEmailDraft} className="space-y-5">
                {/* Inquiry Type */}
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2">
                    Inquiry Classification:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    {[
                      'Production Project',
                      'Full-Time Role',
                      'Technical Leadership',
                      'R&D / Academic',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`p-2 rounded-lg border text-center transition-colors cursor-pointer text-[11px] ${
                          inquiryType === type
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Org */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="text-xs font-mono text-slate-300 block mb-1.5">
                      Your Name / Representative:
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      placeholder="e.g. Dr. Yohannes / Sarah Smith"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-org" className="text-xs font-mono text-slate-300 block mb-1.5">
                      Company / University / Organization:
                    </label>
                    <input
                      id="inquiry-org"
                      type="text"
                      placeholder="e.g. Technology Venture / NGO"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="inquiry-message" className="text-xs font-mono text-slate-300 block mb-1.5">
                    Project Scope or Position Summary:
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    placeholder="Briefly describe system requirements, timelines, technical expectations, or opportunity details..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs font-sans placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-slate-400">
                    Generates an immediate pre-filled email draft to {PERSONAL_INFO.email}
                  </span>
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono tracking-wide transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Draft</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
