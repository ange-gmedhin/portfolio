import {
  ProofPoint,
  Capability,
  ProjectCaseStudy,
  AdditionalProject,
  ExperienceCompany,
  DocumentationArtifact,
  SkillCategory,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Angosom Gebremedhin Berhe',
  headline: 'Full-Stack Engineer × Technical Project Manager',
  coreStatement: 'I build software from idea to production.',
  supportingStatement:
    'Full-Stack Engineer and Technical Project Manager based in Ethiopia. I bridge product requirements, robust software architecture, hands-on full-stack development, production hosting, and practical engineering leadership.',
  quote: '"I don\'t just write code. I take software from idea to production."',
  email: 'angosomgmedhin120@gmail.com',
  location: 'Mekelle / Addis Ababa, Ethiopia',
  cvPath: '/cv.pdf',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
};

export const PROOF_POINTS: ProofPoint[] = [
  {
    metric: '3+',
    label: 'Years Professional Experience',
    description: 'Engineering resilient production systems and leading agile software lifecycles.',
  },
  {
    metric: '8+',
    label: 'Applications Built & Deployed',
    description: 'Full-stack platforms, offline PWAs, and enterprise systems delivered to production.',
  },
  {
    metric: '4+',
    label: 'Production Projects Led End-to-End',
    description: 'From initial client requirements and system architecture to live server deployment.',
  },
  {
    metric: '8+',
    label: 'Developers & Interns Mentored',
    description: 'Guiding junior engineers and university interns through code reviews and agile delivery.',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'build',
    title: 'Build',
    subtitle: 'Full-Stack Engineering',
    description: 'Design and develop responsive, reliable full-stack web applications and resilient systems from clean foundations.',
    bullets: [
      'Modern React interfaces with modular TypeScript',
      'Robust backend services with Laravel, CodeIgniter & Node.js',
      'Defensive RESTful API architecture & schema design',
    ],
    icon: 'Layers',
  },
  {
    id: 'lead',
    title: 'Lead',
    subtitle: 'Technical Project Management',
    description: 'Take software projects across the complete lifecycle from initial client discovery and architecture to sprint execution and delivery.',
    bullets: [
      'Sprint backlog grooming & sprint planning with Jira',
      'Agile/Scrum ceremonies & milestone tracking',
      'Direct client communication & scope containment',
    ],
    icon: 'Compass',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    subtitle: 'Hosting & Production Infrastructure',
    description: 'Provision hosting environments, configure servers, manage domains, and maintain zero-downtime production operations.',
    bullets: [
      'Hostinger & Linux VPS server provisioning',
      'Domain management, DNS routing & record setup',
      'SSL/TLS certificate automation & HTTPS enforcement',
    ],
    icon: 'Server',
  },
  {
    id: 'integrate',
    title: 'Integrate',
    subtitle: 'Payments, APIs & Workflows',
    description: 'Connect software systems to external payment gateways, automated transactional email pipelines, and 3rd-party services.',
    bullets: [
      'Stripe one-time and recurring subscription payments',
      'Webhook listeners with idempotency & error handling',
      'Automated transactional emails & operational notifications',
    ],
    icon: 'Zap',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    subtitle: 'Databases & System Performance',
    description: 'Engineer database models and application performance to prevent bottlenecks before they reach paying customers.',
    bullets: [
      'MySQL, SQLite & MongoDB schema design',
      'Query indexing, execution plan analysis & optimization',
      'Client-side caching & asset payload minimization',
    ],
    icon: 'Gauge',
  },
  {
    id: 'mentor',
    title: 'Mentor',
    subtitle: 'Engineering Team Growth',
    description: 'Cultivate strong engineering habits by actively coaching junior developers and university interns through real codebase tasks.',
    bullets: [
      'Constructive code reviews & architectural guidance',
      'Hands-on Git branching & PR workflow training',
      'Translating academic theory into production readiness',
    ],
    icon: 'Users',
  },
  {
    id: 'explore-ai',
    title: 'Explore AI',
    subtitle: 'Applied & Practical AI',
    description: 'Investigate and apply machine intelligence where it solves genuine product challenges rather than adding AI for decoration.',
    bullets: [
      'Traveler preference modeling & recommendation engines',
      'Knowledge retrieval & context-grounded workflows',
      'Researching practical AI integration for regional ecosystems',
    ],
    icon: 'BrainCircuit',
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'habesha-restaurant',
    title: 'Habesha Restaurant Management & Booking System',
    subtitle: 'From Customer Booking to Kitchen Workflow',
    category: 'Full-Stack Ecosystem',
    tag: 'Production Flagship',
    isFlagship: true,
    summary:
      'A complete multi-tier restaurant management ecosystem supporting 7 languages, online customer bookings, real-time waiter ordering, automated kitchen/bar routing, and dynamic bill splitting.',
    problem:
      'High-volume multi-lingual dining operations suffered from fragmented guest bookings, order communication bottlenecks between floor staff and kitchen/bar stations, and tedious manual bill calculations across large groups.',
    solution:
      'Architected and deployed a unified restaurant operating ecosystem: a 7-language guest booking/ordering interface, mobile-optimized floor waiter ordering, split kitchen/bar routing screens, automated bill splitting, and role-based staff administration.',
    role: 'Lead Full-Stack Engineer & System Architect (requirements, full-stack development, database schema, role permissions, live deployment).',
    technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'WebSockets', 'Tailwind CSS', 'Hostinger'],
    difficulties:
      'Synchronizing high-concurrency order updates across waiter handhelds and kitchen display terminals without race conditions, preventing double-billing on split checks, and maintaining instant UI responsiveness across 7 languages.',
    result:
      'Handled 4,350+ active users and guest bookings with zero lost kitchen tickets, reduced order-to-kitchen latency dramatically, and streamlined floor operations during peak dining hours.',
    learning:
      'Designing enterprise software requires prioritizing physical work environments: kitchen noise, speed of touch inputs under pressure, and linguistic diversity must shape the architecture as much as database design.',
    metrics: [
      { label: 'Active Users / Bookings', value: '4,350+' },
      { label: 'Supported Languages', value: '7 Languages' },
      { label: 'Integrated Roles', value: 'Admin, Waiter, Kitchen, Bar' },
    ],
    workflow: [
      { title: '1. Customer', description: 'Selects language (7 options), reserves table or browses digital menu for pre-order.' },
      { title: '2. Booking & Order', description: 'System validates table availability, generates reservation token, alerts host.' },
      { title: '3. Waiter Terminal', description: 'Floor staff captures table orders on mobile/tablet with table-side modifications.' },
      { title: '4. Kitchen / Bar Routing', description: 'Orders automatically split: drinks sent to Bar display, hot meals to Kitchen.' },
      { title: '5. Automated Billing', description: 'Auto splits group checks, calculates taxes/service, and prepares payment receipt.' },
      { title: '6. Management Portal', description: 'Real-time inventory deduction, daily revenue analytics, and staff audit logs.' },
    ],
    diagramType: 'restaurant',
  },
  {
    id: 'haile-aggregate',
    title: 'Haile Aggregate Production Management System',
    subtitle: 'Offline-First Engineering in Low-Connectivity Sites',
    category: 'Industrial Management',
    tag: 'Offline-First PWA',
    isFlagship: true,
    summary:
      'A resilient Progressive Web Application engineered for quarry and crushing sites operating in remote areas with unstable or non-existent internet connectivity.',
    problem:
      'Remote aggregate production quarries experience frequent network dropouts. Traditional cloud-only systems halted scale dispatching, lost haulage records, and caused massive manual ledger discrepancies between scale operators and central accounting.',
    solution:
      'Engineered an offline-first PWA featuring persistent client-side storage, an asynchronous sync queue, automatic background reconciliation when network restores, granular role security, and instant client-side PDF/Excel dispatch reports.',
    role: 'Lead Full-Stack Engineer (system architecture, service workers, local persistence engine, sync conflict resolution, production delivery).',
    technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Laravel', 'MySQL', 'PDF/Excel Engine'],
    difficulties:
      'Designing a deterministic conflict-resolution engine that prevents duplicate truck weigh-in tickets and preserves sequential ticket numbers when multiple scale operators sync bulk transactions simultaneously after hours offline.',
    result:
      '100% operational uptime at quarry sites during network outages, eliminating dispatch delays and providing management with verified daily production and tonnage reports.',
    learning:
      'In emerging and industrial markets, unstable connectivity is not an edge-case failure—it is the baseline reality. Offline-first architectures must be designed defensively from day one.',
    metrics: [
      { label: 'Offline Resilience', value: '100% Functional' },
      { label: 'Sync Architecture', value: 'Queue-Based Two-Way' },
      { label: 'Export Formats', value: 'PDF & Excel Automated' },
    ],
    workflow: [
      { title: 'ONLINE', description: 'Connected state: transactions stream directly to central database in real time.' },
      { title: 'LOCAL DATA', description: 'Every dispatch, truck weight, and aggregate grade written immediately to IndexedDB.' },
      { title: 'OFFLINE', description: 'Network drops: app functions seamlessly, generates signed tickets with local sequences.' },
      { title: 'SYNC QUEUE', description: 'Reconnection detected: background worker resolves conflicts and syncs batch transactions.' },
    ],
    diagramType: 'offline',
  },
  {
    id: 'misgana-charity',
    title: 'Misgana Charity & Donation Platform',
    subtitle: 'Payments, Recurring Donors & Operational Transparency',
    category: 'FinTech & Non-Profit',
    tag: 'Production FinTech',
    isFlagship: true,
    summary:
      'A secure international donation platform integrating Stripe for one-time and recurring contributions, automated donor notification pipelines, and multi-staff operational workflows.',
    problem:
      'The non-profit organization relied on disjointed payment methods and manual donor receipts, creating high drop-off rates for international supporters, tracking errors, and tedious administrative overhead.',
    solution:
      'Built a modern, high-conversion donation portal with Stripe integration supporting both one-off gifts and monthly pledges, automated tax receipt generation, webhook-driven email notifications, and an internal portal used by 16+ staff members.',
    role: 'Full-Stack Engineer (Stripe payment integration, webhook handlers, automated email workflows, staff dashboard, and server hosting).',
    technologies: ['React', 'Node.js', 'Stripe API', 'Express', 'MySQL', 'RESTful APIs', 'Nodemailer', 'VPS Hosting'],
    difficulties:
      'Guaranteeing webhook idempotency so donors are never double-billed during network retries, and designing secure subscription lifecycle management for recurring cancellations and card updates.',
    result:
      'Established a trusted international donation pipeline actively operated by 16+ staff members, automating receipt delivery and providing real-time campaign reconciliation.',
    learning:
      'Payment architecture requires extreme discipline: never trust client-side state for amounts, always verify cryptographic webhook signatures, and build clear audit trails for every monetary event.',
    metrics: [
      { label: 'Staff Operational Users', value: '16+ Members' },
      { label: 'Payment Modalities', value: 'One-Time & Recurring' },
      { label: 'Notification Delivery', value: 'Automated Real-time' },
    ],
    workflow: [
      { title: '1. Donor Pledge', description: 'Supporter selects campaign, currency, and one-off or recurring monthly schedule.' },
      { title: '2. Stripe Checkout', description: 'PCI-compliant card handling via Stripe Elements with 3D-Secure authentication.' },
      { title: '3. Webhook Listener', description: 'Backend cryptographically validates payment event and creates persistent record.' },
      { title: '4. Automated Receipt', description: 'Automated email dispatched with tax-deductible receipt PDF and donor reference.' },
      { title: '5. Staff Dashboard', description: '16+ staff members track campaign balances, donor cohorts, and export reports.' },
    ],
    diagramType: 'payment',
  },
  {
    id: 'smart-tourism-tigray',
    title: 'Smart Tourism Tigray',
    subtitle: 'Bridging Software Engineering & Intelligent Recommendation',
    category: 'Research & Development',
    tag: 'R&D Concept',
    isRnD: true,
    summary:
      'An applied research and software architecture project exploring AI-driven personalized itineraries and heritage service discovery for regional tourism.',
    problem:
      'Visitors to historical and cultural sites across Tigray face fragmented information, variable road conditions, and difficulty matching their limited schedule with certified local guides and heritage venues.',
    solution:
      'Researched and prototyped an intelligent recommendation system that synthesizes user travel constraints (duration, physical mobility, historical focus, budget) and matches them with verified local service providers into customized multi-day itineraries.',
    role: 'System Architect & Applied AI Researcher (domain modeling, recommendation logic design, user preference heuristic algorithms, architectural blueprint).',
    technologies: ['TypeScript', 'Python', 'AI Recommendation Algorithms', 'React', 'REST APIs', 'Graph Modeling'],
    difficulties:
      'Grounding recommendation algorithms in local geographic and logistical realities (seasonal accessibility, opening hours, local guide certification) rather than hallucinating theoretical routes.',
    result:
      'Produced a validated architectural blueprint and interactive prototype demonstrating how applied AI can drive tangible regional economic impact for local hospitality operators.',
    learning:
      'Practical AI is about contextual relevance, not model size. An intelligent system is only as valuable as the real-world operational accuracy of the data it connects.',
    metrics: [
      { label: 'Project Status', value: 'Research & Development' },
      { label: 'Architecture Type', value: 'Constraint-Aware RecSys' },
      { label: 'Target Ecosystem', value: 'Local Guides & Hospitality' },
    ],
    workflow: [
      { title: 'User Preferences', description: 'Traveler enters duration, interest weighting (architecture, history, nature), and mobility.' },
      { title: 'AI Recommendation', description: 'Algorithmic heuristic evaluates distance matrices, opening schedules, and ratings.' },
      { title: 'Tourism Services', description: 'System queries verified local providers (certified guides, registered lodges, drivers).' },
      { title: 'Personalized Itinerary', description: 'Outputs dynamic, day-by-day interactive itinerary with contact checkpoints.' },
    ],
    diagramType: 'ai',
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    title: 'Multi-Tenant E-Commerce Portal',
    category: 'E-commerce Systems',
    description:
      'Scalable digital storefront with dynamic catalog management, customer cart state persistence, checkout pipelines, and vendor inventory controls.',
    techStack: ['React', 'Laravel', 'MySQL', 'REST API', 'Tailwind CSS'],
    highlights: 'Multi-vendor inventory separation, responsive mobile purchasing, and order status lifecycle tracking.',
  },
  {
    title: 'Corporate Enterprise Management System',
    category: 'Management Systems',
    description:
      'Internal operations suite for employee attendance, asset dispatch, departmental expense logging, and administrative approval workflows.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Hostinger VPS'],
    highlights: 'Strict role-based access control, departmental audit logs, and exportable financial summaries.',
  },
  {
    title: 'Non-Profit Community Outreach Platform',
    category: 'Non-profit Platforms',
    description:
      'Centralized community portal for volunteer mobilization, event registration, and transparent public program updates.',
    techStack: ['React', 'Node.js', 'REST API', 'MySQL'],
    highlights: 'Automated volunteer scheduling, broadcast announcements, and public impact metrics.',
  },
  {
    title: 'Multi-Station Restaurant POS & Kitchen Hub',
    category: 'Restaurant Systems',
    description:
      'Dedicated kitchen ticket display and floor table layout management system built for high-throughput hospitality venues.',
    techStack: ['React', 'WebSockets', 'PHP', 'MySQL'],
    highlights: 'Real-time order state updates without page refreshes, table reassignment, and ticket timing alerts.',
  },
  {
    title: 'Undergraduate Thesis: Tour Guide Mobile Architecture',
    category: 'Offline-First & Mobile Architecture',
    description:
      'Comprehensive system architecture for location-aware tourist navigation, offline geo-cached audio commentary, and heritage mapping.',
    techStack: ['Mobile Architecture', 'Geo-Caching', 'SQLite', 'Software Engineering'],
    highlights: 'Graduated December 2022 with 3.94 / 4.00 GPA (Highest Distinction) from Microlink IT College.',
  },
  {
    title: 'Custom Content Management & Web Platforms',
    category: 'Web Platforms & CMS',
    description:
      'Tailored headless and modular content platforms engineered for clients requiring rapid non-technical editorial control and reliable performance.',
    techStack: ['WordPress', 'PHP', 'CodeIgniter', 'MySQL'],
    highlights: 'Custom post types, secure admin permissions, caching optimization, and domain/DNS setup.',
  },
];

export const WORK_EXPERIENCE: ExperienceCompany = {
  company: 'Ahaz Electronic and Software Solutions PLC',
  location: 'Ethiopia',
  roles: [
    {
      role: 'Full-Stack Developer & Technical Project Manager',
      period: 'Apr 2025 – Present',
      isCurrent: true,
      summary:
        'Promoted to lead production software engineering initiatives and technical project management across the full client and delivery lifecycle.',
      responsibilities: [
        'Lead 4+ production software projects from initial stakeholder discovery through architecture, development, testing, and deployment.',
        'Manage full hosting infrastructure, VPS provisioning, domain setup, DNS routing, and SSL security across all client systems.',
        'Direct agile/scrum processes using Jira: sprint planning, backlog grooming, risk management, and client status communication.',
        'Mentor junior developers and university interns in full-stack engineering practices, defensive code reviews, and Git workflows.',
        'Interface directly with clients to translate business requirements into technical scope and production architectures.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      period: 'Jan 2023 – Jan 2025',
      isCurrent: false,
      summary:
        'Built, deployed, and maintained robust web applications across frontend interfaces, backend services, and relational databases.',
      responsibilities: [
        'Engineered responsive web applications using React, Laravel, CodeIgniter, PHP, and MySQL.',
        'Architected and consumed RESTful APIs with secure authentication, input validation, and role-based permissions.',
        'Developed offline-capable Progressive Web Applications with local persistence and background synchronization.',
        'Optimized database schemas, indexing strategies, and SQL queries to reduce page load latencies and server load.',
        'Maintained web platforms, WordPress deployments, and business email infrastructure for corporate clients.',
      ],
    },
  ],
};

export const EDUCATION_DATA = {
  degree: 'BSc in Software Engineering',
  institution: 'Microlink Information Technology College',
  graduationDate: 'December 2022',
  gpa: '3.94 / 4.00',
  honors: 'Highest Distinction',
  thesisTitle: 'Tour Guide Mobile App Architecture',
  thesisDescription:
    'Researched and architected an offline-resilient mobile tour guide platform combining cached geographic datasets, location-aware points of interest, and localized audio playback.',
};

export const DOCUMENTATION_ARTIFACTS: DocumentationArtifact[] = [
  {
    id: 'requirements',
    title: 'Requirements & Scope Matrix',
    category: 'Planning & Discovery',
    filename: 'docs/01-system-requirements-spec.md',
    description: 'Transforming ambiguous client requests into testable functional specs, boundary constraints, and edge-case definitions.',
    keyTakeaway: 'Prevents scope creep and aligns technical delivery with actual business expectations before a single line of code is written.',
    previewCode: `# System Requirements Specification (SRS)
Project: Production Restaurant Management System
Scope: Floor Waiters, Kitchen Staff, Bar, & Online Guests

1. Functional Requirements:
   - FR-101: System must support 7 localized languages with zero reload latency.
   - FR-102: Waiter order dispatch must route drinks to Bar KDS and hot dishes to Kitchen KDS.
   - FR-103: Automated bill splitting must preserve arithmetic precision and prevent split race conditions.
2. Non-Functional Constraints:
   - NFR-201: Offline resilience: cached tickets must persist locally in case of WiFi dropout.
   - NFR-202: Ticket generation latency < 200ms under 50 concurrent staff terminals.`,
  },
  {
    id: 'architecture',
    title: 'System Architecture Blueprint',
    category: 'System Design',
    filename: 'docs/02-architecture-blueprint.md',
    description: 'Mapping data flow, network boundaries, decoupling mechanisms, and service separation across the application.',
    keyTakeaway: 'Ensures maintainability, security, and clear separation of concerns across frontend, backend, and persistence tiers.',
    previewCode: `┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  Client Tier    │       │  API & Logic    │       │  Data & Storage │
│  (React / PWA)  │ ───►  │ (Laravel/Node)  │ ───►  │ (MySQL/Indexes) │
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                         │
         ▼                         ▼                         ▼
  [Service Worker]        [Role Middleware]         [Replication/Sync]
  Local IndexedDB         JWT Auth & Guards         Audit Trail Logs`,
  },
  {
    id: 'api-spec',
    title: 'API Contracts & REST Schemas',
    category: 'Integration',
    filename: 'docs/03-api-contract-v1.json',
    description: 'Explicit request/response payloads, error dictionaries, and webhook signature verification schemas.',
    keyTakeaway: 'Guarantees reliable frontend-backend communication and seamless third-party service integration.',
    previewCode: `POST /api/v1/orders/split-bill
Content-Type: application/json
Authorization: Bearer <staff_jwt>

{
  "order_id": "ORD-48291",
  "table_number": 14,
  "split_type": "custom_items",
  "splits": [
    { "seat_index": 1, "item_ids": [102, 105], "payment_method": "cash" },
    { "seat_index": 2, "item_ids": [108, 114], "payment_method": "card" }
  ]
}

Response (200 OK):
{ "status": "success", "balance_remaining": 0.00, "receipt_tokens": ["RCT-991", "RCT-992"] }`,
  },
  {
    id: 'database-design',
    title: 'Database Schema & Query Optimization',
    category: 'Persistence',
    filename: 'docs/04-schema-and-indexing.sql',
    description: 'Normalized entity relationships, compound indexes for fast filtering, and transaction safety controls.',
    keyTakeaway: 'Prevents locking bottlenecks during high-volume operations and guarantees data integrity.',
    previewCode: `-- Aggregate Production & Scale Dispatch Schema
CREATE TABLE \`scale_tickets\` (
  \`id\` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  \`ticket_number\` VARCHAR(32) NOT NULL UNIQUE,
  \`quarry_site_id\` INT UNSIGNED NOT NULL,
  \`gross_tonnage\` DECIMAL(10,3) NOT NULL,
  \`tare_tonnage\` DECIMAL(10,3) NOT NULL,
  \`net_tonnage\` DECIMAL(10,3) GENERATED ALWAYS AS (\`gross_tonnage\` - \`tare_tonnage\`) STORED,
  \`sync_status\` ENUM('pending', 'synced', 'conflict') DEFAULT 'pending',
  \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_site_created\` (\`quarry_site_id\`, \`created_at\`),
  INDEX \`idx_sync_status\` (\`sync_status\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,
  },
  {
    id: 'deployment-runbook',
    title: 'Production Deployment Runbook',
    category: 'Infrastructure',
    filename: 'docs/05-production-runbook.md',
    description: 'Step-by-step procedures for server provisioning, domain DNS delegation, SSL certificates, and zero-downtime cutover.',
    keyTakeaway: 'Eliminates deployment uncertainty, ensures reproducible server environments, and keeps business systems online.',
    previewCode: `# Production Deployment Checklist
1. Environment Configuration:
   - Verify .env secrets and database connection pooling.
   - Run database migrations: php artisan migrate --force
2. Web Server & Reverse Proxy:
   - Configure Nginx virtual host with HTTP/2 and gzip compression.
   - Provision SSL via Let's Encrypt / Certbot: certbot --nginx -d app.example.com
3. DNS & Domain Routing:
   - Set A Record: @ -> 185.xxx.xxx.xxx (Hostinger / VPS IP)
   - Set CNAME: www -> app.example.com
   - Configure SPF & DMARC records for transactional email stability.
4. Health Checks:
   - Curl /api/health endpoint and verify 200 OK status.`,
  },
  {
    id: 'user-workflows',
    title: 'User Workflows & State Machines',
    category: 'UX & Logic',
    filename: 'docs/06-state-machines.md',
    description: 'Finite state machine diagrams showing exact transitions between states for orders, tickets, and payment flows.',
    keyTakeaway: 'Guarantees that impossible business states (e.g. an unpaid order marked as completed) are rejected at the code level.',
    previewCode: `Order State Machine:
[DRAFT] ────► [SUBMITTED] ────► [IN_KITCHEN / IN_BAR]
                   │                     │
                   ▼                     ▼
              [CANCELLED]          [READY_TO_SERVE]
                                         │
                                         ▼
                                     [SERVED]
                                         │
                                         ▼
                                [PAID / COMPLETED]`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Building high-performance, accessible, and responsive user interfaces with modular architecture.',
    skills: [
      { name: 'React', level: 'Core Production', note: 'Component design, hooks, state architecture' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 'Core Production', note: 'Type safety, async flows, DOM manipulation' },
      { name: 'PWA (Progressive Web Apps)', level: 'Advanced', note: 'Service Workers, IndexedDB, offline-first logic' },
      { name: 'Tailwind CSS', level: 'Core Production', note: 'Responsive design, fluid layouts, custom themes' },
      { name: 'HTML5 / Modern CSS', level: 'Core Production', note: 'Semantic markup, accessibility, CSS Grid/Flexbox' },
      { name: 'Bootstrap', level: 'Core Production', note: 'Rapid enterprise layouts & administrative dashboards' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Designing scalable backend systems, business logic, data persistence, and API contracts.',
    skills: [
      { name: 'Laravel (PHP)', level: 'Core Production', note: 'Eloquent ORM, middleware, service containers, queues' },
      { name: 'PHP & CodeIgniter', level: 'Core Production', note: 'MVC pattern, legacy modernization, fast execution' },
      { name: 'Node.js & Express', level: 'Advanced', note: 'REST microservices, webhooks, asynchronous processing' },
      { name: 'RESTful API Design', level: 'Core Production', note: 'Resource modeling, status codes, JWT authentication' },
      { name: 'Webhook Integration', level: 'Core Production', note: 'Stripe, payment handlers, idempotent processing' },
    ],
  },
  {
    category: 'Databases & Data Modeling',
    description: 'Structuring normalized relational schemas, optimizing query execution, and managing local offline data.',
    skills: [
      { name: 'MySQL', level: 'Core Production', note: 'Relational schema design, indexes, foreign keys, transactions' },
      { name: 'Database Query Optimization', level: 'Advanced', note: 'Execution plan analysis, index tuning, avoiding N+1' },
      { name: 'SQLite', level: 'Advanced', note: 'Local embedded storage, desktop/mobile app data stores' },
      { name: 'MongoDB', level: 'Working Knowledge', note: 'Document stores & semi-structured application data' },
      { name: 'IndexedDB', level: 'Advanced', note: 'Client-side browser database for offline PWA operations' },
    ],
  },
  {
    category: 'Infrastructure & Operations',
    description: 'Taking code from repositories into secure, high-uptime production environments.',
    skills: [
      { name: 'Hostinger Hosting', level: 'Core Production', note: 'Shared & cloud hosting, cPanel, hPanel, public_html' },
      { name: 'Linux VPS Environments', level: 'Advanced', note: 'Ubuntu server setup, SSH, process managers, Nginx' },
      { name: 'Domain & DNS Configuration', level: 'Core Production', note: 'A records, CNAME, MX, TXT, SPF/DKIM records' },
      { name: 'SSL / TLS Security', level: 'Core Production', note: 'Certbot, HTTPS redirection, security headers' },
      { name: 'Docker Fundamentals', level: 'Working Knowledge', note: 'Containerization & isolated environment setups' },
      { name: 'Production Email Configuration', level: 'Core Production', note: 'Domain-verified transactional & business emails' },
    ],
  },
  {
    category: 'Project Leadership & Tools',
    description: 'Orchestrating software lifecycles, team collaboration, and client delivery.',
    skills: [
      { name: 'Technical Project Management', level: 'Core Production', note: 'End-to-end delivery from requirements to release' },
      { name: 'Agile & Scrum Methodologies', level: 'Core Production', note: 'Sprint planning, daily standups, retrospectives' },
      { name: 'Jira & Backlog Management', level: 'Core Production', note: 'Epic breakdown, user stories, sprint tracking' },
      { name: 'Git & Version Control', level: 'Core Production', note: 'Branching strategies, clean pull requests, code reviews' },
      { name: 'Mentorship & Code Reviews', level: 'Core Production', note: 'Mentored 8+ junior developers and university interns' },
      { name: 'Postman', level: 'Core Production', note: 'API contract testing, environment variables, validation' },
    ],
  },
  {
    category: 'Web Platforms',
    description: 'Applying the right platform according to the specific business problem and budget.',
    skills: [
      { name: 'WordPress', level: 'Advanced', note: 'Custom themes, performance tuning, security hardening, CMS' },
      { name: 'Multi-Technology Synthesis', level: 'Core Production', note: 'React + Laravel + WordPress tailored to customer needs' },
    ],
  },
  {
    category: 'Emerging & Applied AI',
    description: 'Exploring machine intelligence with a practical, problem-solving mindset.',
    skills: [
      { name: 'Recommendation Systems', level: 'Working Knowledge', note: 'Constraint-aware recommendation algorithms (R&D)' },
      { name: 'Contextual AI Workflows', level: 'Working Knowledge', note: 'Applied AI for tourism, discovery & automation' },
    ],
  },
];
