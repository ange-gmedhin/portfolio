import {
  ArrowRight,
  CalendarCheck,
  CreditCard,
  Database,
  Globe,
  Mail,
  MapPin,
  RefreshCw,
  Server,
  Smartphone,
  Utensils,
  Users,
  WifiOff,
} from 'lucide-react';

interface ProjectWorkflowDiagramProps {
  diagramType: 'restaurant' | 'offline' | 'payment' | 'ai';
}

const diagrams = {
  restaurant: {
    title: 'How it works',
    subtitle: 'Restaurant booking and ordering workflow',
    steps: [
      {
        label: 'Customer',
        description: 'Booking or order',
        icon: Globe,
      },
      {
        label: 'Service',
        description: 'Reservation and order handling',
        icon: Smartphone,
      },
      {
        label: 'Kitchen & Bar',
        description: 'Orders routed to the right station',
        icon: Utensils,
      },
      {
        label: 'Billing',
        description: 'Totals, taxes and receipts',
        icon: CreditCard,
      },
      {
        label: 'Management',
        description: 'Reports and operational data',
        icon: Users,
      },
    ],
    footer: '7 languages · Reservations · Ordering · Billing · Reporting',
  },

  offline: {
    title: 'System flow',
    subtitle: 'Offline-first data synchronization',
    steps: [
      {
        label: 'Application',
        description: 'Users continue working normally',
        icon: Smartphone,
      },
      {
        label: 'Local data',
        description: 'Transactions stored in IndexedDB',
        icon: Database,
      },
      {
        label: 'Offline queue',
        description: 'Changes remain available without internet',
        icon: WifiOff,
      },
      {
        label: 'Sync',
        description: 'Queued changes upload when connected',
        icon: RefreshCw,
      },
      {
        label: 'Server',
        description: 'Laravel API and central database',
        icon: Server,
      },
    ],
    footer: 'IndexedDB · Service Worker · Laravel · MySQL',
  },

  payment: {
    title: 'Payment flow',
    subtitle: 'Donation and operational notification workflow',
    steps: [
      {
        label: 'Donor',
        description: 'Selects campaign and amount',
        icon: Users,
      },
      {
        label: 'Payment',
        description: 'Secure Stripe checkout',
        icon: CreditCard,
      },
      {
        label: 'Webhook',
        description: 'Payment status is recorded',
        icon: Server,
      },
      {
        label: 'Receipt',
        description: 'Confirmation sent to donor',
        icon: Mail,
      },
      {
        label: 'Dashboard',
        description: 'Staff monitor donations',
        icon: Users,
      },
    ],
    footer: 'One-time donations · Recurring donations · Staff management',
  },

  ai: {
    title: 'Research concept',
    subtitle: 'Personalized tourism recommendation flow',
    steps: [
      {
        label: 'Preferences',
        description: 'Duration, interests and mobility',
        icon: Users,
      },
      {
        label: 'Recommendation',
        description: 'Evaluate available options',
        icon: MapPin,
      },
      {
        label: 'Tourism data',
        description: 'Places, services and routes',
        icon: Database,
      },
      {
        label: 'Itinerary',
        description: 'Generate a personalized route',
        icon: CalendarCheck,
      },
    ],
    footer: 'R&D concept · Tourism data · Recommendation logic',
  },
};

export function ProjectWorkflowDiagram({
  diagramType,
}: ProjectWorkflowDiagramProps) {
  const diagram = diagrams[diagramType];

  return (
    <div className="border-y border-border py-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-gold">
          {diagram.title}
        </p>

        <p className="mt-1 text-sm text-text-secondary">
          {diagram.subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {diagram.steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className="flex flex-1 items-center"
            >
              <div className="flex-1 py-2 lg:px-5 lg:first:pl-0">
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />

                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {step.label}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < diagram.steps.length - 1 && (
                <ArrowRight className="hidden lg:block h-4 w-4 shrink-0 text-text-muted" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-7 pt-5 border-t border-border">
        <p className="text-xs text-text-muted">
          {diagram.footer}
        </p>
      </div>
    </div>
  );
}