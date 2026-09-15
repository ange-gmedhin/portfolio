import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Server,
  Users,
  Workflow,
} from 'lucide-react';

const lifecycleSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Clarify the problem, users, requirements, constraints, and what success should look like.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Plan the architecture, database, APIs, user flows, and technical approach before implementation.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop the frontend, backend, integrations, and core workflows with production use in mind.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Validate real scenarios, edge cases, responsiveness, data integrity, and failure conditions.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'Handle deployment, hosting, domains, SSL, configuration, and handover to the people using the system.',
  },
  {
    number: '06',
    title: 'Improve',
    description:
      'Fix problems, respond to feedback, optimize performance, and continue improving the product after launch.',
  },
];

const technologyGroups = [
  {
    icon: Code2,
    title: 'Frontend',
    technologies: 'React · JavaScript · Tailwind CSS',
  },
  {
    icon: Server,
    title: 'Backend',
    technologies: 'Laravel · PHP · Node.js · Python',
  },
  {
    icon: Database,
    title: 'Data',
    technologies: 'MySQL · SQLite · IndexedDB',
  },
  {
    icon: Workflow,
    title: 'APIs & Integrations',
    technologies: 'REST APIs · Stripe · Chapa',
  },
  {
    icon: GitBranch,
    title: 'Delivery',
    technologies: 'Git · Hosting · DNS · SSL',
  },
  {
    icon: Users,
    title: 'Leadership',
    technologies: 'Requirements · Jira · Mentorship · Delivery',
  },
];

export function SkillsAndCapabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 lg:py-32 bg-bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">

          <p className="text-sm font-medium tracking-wide text-gold mb-4">
            WHAT I DO
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight">
            I work across the full product lifecycle.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary">
            My work goes beyond writing application code. I help turn
            requirements into systems, take them through development and
            deployment, and stay involved when they reach real users.
          </p>
        </div>

        {/* Lifecycle */}
        <div className="mb-20">

          <div className="flex items-center gap-3 mb-8">
            <Workflow className="w-5 h-5 text-gold" />

            <h3 className="text-xl font-display font-semibold text-text-primary">
              How I work
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">

            {lifecycleSteps.map((step) => (
              <div
                key={step.number}
                className="bg-bg-primary p-6 sm:p-7"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-gold">
                    {step.number}
                  </span>

                  <CheckCircle2 className="w-4 h-4 text-text-muted" />
                </div>

                <h4 className="text-xl font-display font-semibold text-text-primary">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Capability statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">

          <div className="lg:col-span-5">

            <p className="text-sm font-medium tracking-wide text-gold mb-4">
              CORE CAPABILITIES
            </p>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary leading-tight">
              From the first requirement to a working system.
            </h3>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-text-secondary">
              I am most comfortable when a project requires both technical
              implementation and practical decision-making. That means
              understanding the problem, choosing an appropriate approach,
              building it, and making sure it works outside the development
              environment.
            </p>

            <a
              href="#work"
              className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-text-primary hover:text-gold transition-colors"
            >
              See the work behind this
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Technology groups */}
          <div className="lg:col-span-7">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {technologyGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div
                    key={group.title}
                    className="p-5 rounded-xl border border-border bg-surface/50"
                  >
                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-lg bg-bg-primary border border-border flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>

                      <h4 className="text-sm font-semibold text-text-primary">
                        {group.title}
                      </h4>

                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                      {group.technologies}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-t border-border pt-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-text-secondary">
              The technologies change from project to project. The important
              part is being able to understand the problem and take
              responsibility for delivering the right solution.
            </p>

            <div className="flex items-center gap-2 text-sm text-text-muted shrink-0">
              <Server className="w-4 h-4 text-gold" />
              <span>Development · Delivery · Production</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}