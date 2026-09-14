import { useState } from 'react';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Utensils,
  Receipt,
  BarChart3,
  Wifi,
  WifiOff,
  Database,
  RefreshCw,
  CreditCard,
  CheckCircle2,
  Mail,
  Users,
  Compass,
  Sparkles,
  MapPin,
  CalendarCheck,
} from 'lucide-react';
import { ProjectWorkflowStep } from '../types/portfolio';

interface ProjectWorkflowDiagramProps {
  diagramType: 'restaurant' | 'offline' | 'payment' | 'ai';
  steps?: ProjectWorkflowStep[];
}

export function ProjectWorkflowDiagram({ diagramType }: ProjectWorkflowDiagramProps) {
  // Interactive state for the offline PWA simulator
  const [networkSimState, setNetworkSimState] = useState<'online' | 'offline' | 'syncing'>('online');
  const [offlinePendingCount, setOfflinePendingCount] = useState(2);

  if (diagramType === 'restaurant') {
    return (
      <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-5 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Utensils className="w-3.5 h-3.5" />
            <span>OPERATIONAL WORKFLOW BLUEPRINT</span>
          </span>
          <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Real-time Routing • 7 Languages
          </span>
        </div>

        {/* Visual pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>01. Guest</span>
                <Globe className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="font-bold text-slate-200 text-xs">Booking / Ordering</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans">
                7 languages, table reservation & pre-ordering.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-amber-400/80 font-mono">Token Issued</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>02. Floor</span>
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="font-bold text-slate-200 text-xs">Waiter Terminal</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans">
                Handheld tablet order entry & table-side edits.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-blue-400/80 font-mono">Validated</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-amber-500/40 bg-amber-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>03. Routing</span>
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="font-bold text-amber-300 text-xs">Kitchen / Bar Dispatch</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans">
                Automatic split: drinks to Bar, meals to Kitchen KDS.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-emerald-400 font-mono">Zero Latency</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>04. Cashier</span>
                <Receipt className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="font-bold text-slate-200 text-xs">Automated Billing</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans">
                Group split calculations, tax breakdowns & receipts.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-emerald-400/80 font-mono">Reconciled</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>05. Admin</span>
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="font-bold text-slate-200 text-xs">Management Portal</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans">
                Live inventory tracking & staff audit logs.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-indigo-400/80 font-mono">4,350+ Bookings</div>
          </div>
        </div>
      </div>
    );
  }

  if (diagramType === 'offline') {
    return (
      <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-5 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800 text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>OFFLINE-FIRST ARCHITECTURE FLOW</span>
          </span>

          {/* Interactive Simulation Switch */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-md border border-slate-800">
            <span className="text-[10px] text-slate-400 px-1.5">Network Simulator:</span>
            <button
              type="button"
              onClick={() => {
                setNetworkSimState('online');
                setOfflinePendingCount(0);
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                networkSimState === 'online' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Online
            </button>
            <button
              type="button"
              onClick={() => {
                setNetworkSimState('offline');
                setOfflinePendingCount((c) => (c === 0 ? 3 : c + 1));
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                networkSimState === 'offline' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Simulate Outage
            </button>
            <button
              type="button"
              onClick={() => {
                setNetworkSimState('syncing');
                setTimeout(() => {
                  setNetworkSimState('online');
                  setOfflinePendingCount(0);
                }, 1200);
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                networkSimState === 'syncing' ? 'bg-blue-500/20 text-blue-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Trigger Sync
            </button>
          </div>
        </div>

        {/* Sync state diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
          <div className={`p-3 rounded-lg border transition-all ${
            networkSimState === 'online' ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200' : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-wider">State 01</span>
              <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="font-bold text-xs">ONLINE</div>
            <p className="text-[11px] mt-1 font-sans text-slate-400">
              Transactions stream instantly to central Laravel / MySQL server.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">State 02</span>
              <Database className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="font-bold text-xs text-slate-200">LOCAL DATA</div>
            <p className="text-[11px] mt-1 font-sans text-slate-400">
              IndexedDB stores tickets, truck weights, and aggregate grades in real-time.
            </p>
          </div>

          <div className={`p-3 rounded-lg border transition-all ${
            networkSimState === 'offline' ? 'bg-amber-950/30 border-amber-500/50 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-wider">State 03</span>
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="font-bold text-xs">OFFLINE MODE</div>
            <p className="text-[11px] mt-1 font-sans text-slate-400">
              Quarry scales keep printing signed tickets with deterministic sequence IDs.
            </p>
          </div>

          <div className={`p-3 rounded-lg border transition-all ${
            networkSimState === 'syncing' ? 'bg-blue-950/30 border-blue-500/50 text-blue-200 animate-pulse' : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-wider">State 04</span>
              <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${networkSimState === 'syncing' ? 'animate-spin' : ''}`} />
            </div>
            <div className="font-bold text-xs">AUTO-SYNC QUEUE</div>
            <p className="text-[11px] mt-1 font-sans text-slate-400">
              Network restored: background worker resolves conflicts and updates central database.
            </p>
          </div>
        </div>

        {/* Live Simulator Status Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Current Simulation:</span>
            {networkSimState === 'online' && (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Wifi className="w-3 h-3" /> All remote quarry scales synchronized
              </span>
            )}
            {networkSimState === 'offline' && (
              <span className="text-amber-400 font-semibold flex items-center gap-1">
                <WifiOff className="w-3 h-3" /> Connection dropped. {offlinePendingCount} tickets queued locally in IndexedDB
              </span>
            )}
            {networkSimState === 'syncing' && (
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin" /> Batch uploading queued quarry tickets to server...
              </span>
            )}
          </div>
          <span className="text-slate-400 hidden sm:inline">Conflict Strategy: Deterministic Monotonic IDs</span>
        </div>
      </div>
    );
  }

  if (diagramType === 'payment') {
    return (
      <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-5 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
          <span className="flex items-center gap-1.5 text-blue-400">
            <CreditCard className="w-3.5 h-3.5" />
            <span>PAYMENT & OPERATIONAL NOTIFICATION PIPELINE</span>
          </span>
          <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Stripe • 16+ Staff Operators
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 mb-1">01. Donor</div>
            <div className="font-bold text-slate-200 text-xs">Donation Pledge</div>
            <p className="text-[11px] text-slate-400 mt-1 font-sans">
              Supporter selects campaign, amount, one-off or monthly schedule.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-blue-500/30 bg-blue-500/5">
            <div className="text-blue-400 mb-1 flex items-center justify-between">
              <span>02. Gateway</span>
              <CreditCard className="w-3.5 h-3.5" />
            </div>
            <div className="font-bold text-blue-300 text-xs">Stripe Processing</div>
            <p className="text-[11px] text-slate-400 mt-1 font-sans">
              PCI-compliant card handling with 3D Secure verification.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 mb-1 flex items-center justify-between">
              <span>03. Webhook</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="font-bold text-slate-200 text-xs">Signature Validation</div>
            <p className="text-[11px] text-slate-400 mt-1 font-sans">
              Cryptographic verification ensuring idempotent transaction logging.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 mb-1 flex items-center justify-between">
              <span>04. Automated</span>
              <Mail className="w-3.5 h-3.5 text-yellow-400" />
            </div>
            <div className="font-bold text-slate-200 text-xs">Email Receipt</div>
            <p className="text-[11px] text-slate-400 mt-1 font-sans">
              Instant tax deductible receipt PDF generated and sent to donor.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 mb-1 flex items-center justify-between">
              <span>05. Dashboard</span>
              <Users className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <div className="font-bold text-slate-200 text-xs">16+ Staff Ops</div>
            <p className="text-[11px] text-slate-400 mt-1 font-sans">
              Staff track campaign targets, active subscriptions, and disbursements.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // AI Recommendation Diagram
  return (
    <div className="rounded-xl bg-slate-950/80 border border-purple-500/30 p-5 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
        <span className="flex items-center gap-1.5 text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RESEARCH & DEVELOPMENT ARCHITECTURE (APPLIED AI)</span>
        </span>
        <span className="text-[11px] bg-purple-950/50 text-purple-300 px-2 py-0.5 rounded border border-purple-700/50">
          Conceptual Blueprint • R&D
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center justify-between">
            <span>INPUT</span>
            <Compass className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="font-bold text-slate-200 text-xs">User Preferences</div>
          <p className="text-[11px] text-slate-400 mt-1 font-sans">
            Duration, physical mobility, historical/architectural weighting, and budget constraints.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-500/40">
          <div className="text-purple-300 mb-1 flex items-center justify-between">
            <span>CORE ENGINE</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="font-bold text-purple-200 text-xs">AI Recommendation</div>
          <p className="text-[11px] text-slate-400 mt-1 font-sans">
            Constraint-satisfaction algorithms evaluate distance matrices & opening hours.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center justify-between">
            <span>GROUNDING</span>
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="font-bold text-slate-200 text-xs">Tourism Services</div>
          <p className="text-[11px] text-slate-400 mt-1 font-sans">
            Queries verified local guides, registered lodges, and regional transport options.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center justify-between">
            <span>OUTPUT</span>
            <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="font-bold text-slate-200 text-xs">Personalized Itinerary</div>
          <p className="text-[11px] text-slate-400 mt-1 font-sans">
            Dynamic day-by-day travel route with booking checkpoints and verified guide contacts.
          </p>
        </div>
      </div>
    </div>
  );
}
