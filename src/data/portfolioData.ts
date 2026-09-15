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
    'Full-Stack Engineer and Technical Project Manager based in Ethiopia, working across requirements, architecture, development, deployment, and delivery.',
  quote: '"I build software from idea to production."',
  email: 'ange.gmedhin@gmail.com',
  phone: '+251 97 808 1418',
  location: 'Mekelle / Addis Ababa, Ethiopia',
  cvPath: '/cv.pdf',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
};

export const PROOF_POINTS: ProofPoint[] = [
  {
    metric: '3+',
    label: 'Years Experience',
    description: 'Building and maintaining production software.',
  },
  {
    metric: '8+',
    label: 'Applications Built',
    description: 'Web platforms, PWAs, management systems, and business tools.',
  },
  {
    metric: '4+',
    label: 'Projects Led',
    description: 'From requirements and architecture to deployment and delivery.',
  },
  {
    metric: '8+',
    label: 'Developers & Interns Mentored',
    description: 'Supporting junior developers through real production work.',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'build',
    title: 'Build',
    subtitle: 'Full-Stack Engineering',
    description:
      'Build reliable web applications across frontend, backend, APIs, and databases.',
    bullets: [
      'React and TypeScript interfaces',
      'Laravel, CodeIgniter, PHP, and Node.js backends',
      'REST APIs and database-driven systems',
    ],
    icon: 'Layers',
  },
  {
    id: 'lead',
    title: 'Lead',
    subtitle: 'Technical Project Management',
    description:
      'Take projects from client requirements through planning, development, and delivery.',
    bullets: [
      'Requirements and scope planning',
      'Jira, sprint planning, and delivery tracking',
      'Client communication and technical coordination',
    ],
    icon: 'Compass',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    subtitle: 'Hosting & Production',
    description:
      'Take applications from a repository to a working production environment.',
    bullets: [
      'Hostinger and Linux VPS environments',
      'Domains, DNS, and SSL configuration',
      'Production deployment and maintenance',
    ],
    icon: 'Server',
  },
  {
    id: 'integrate',
    title: 'Integrate',
    subtitle: 'Payments, APIs & Workflows',
    description:
      'Connect applications with payments, email services, and third-party APIs.',
    bullets: [
      'Stripe one-time and recurring payments',
      'Webhooks and API integrations',
      'Transactional email and notifications',
    ],
    icon: 'Zap',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    subtitle: 'Databases & Performance',
    description:
      'Improve data models, queries, and application performance as systems grow.',
    bullets: [
      'MySQL, SQLite, and MongoDB',
      'Indexes and query optimization',
      'Caching and efficient data handling',
    ],
    icon: 'Gauge',
  },
  {
    id: 'mentor',
    title: 'Mentor',
    subtitle: 'Engineering Team Growth',
    description:
      'Help junior developers and interns build practical engineering habits.',
    bullets: [
      'Code reviews and technical guidance',
      'Git and pull request workflows',
      'Connecting academic knowledge with production work',
    ],
    icon: 'Users',
  },
  {
    id: 'explore-ai',
    title: 'Explore AI',
    subtitle: 'Applied & Practical AI',
    description:
      'Explore practical AI applications where they can solve real product problems.',
    bullets: [
      'Recommendation systems',
      'Context-aware AI workflows',
      'Applied AI research for tourism and local services',
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
      'A multilingual restaurant platform covering online bookings, waiter ordering, kitchen and bar workflows, billing, and staff management.',
    problem:
      'The restaurant needed a single system to manage bookings, table orders, kitchen and bar communication, and group billing.',
    solution:
      'Built a unified platform with a 7-language customer interface, mobile waiter ordering, kitchen and bar routing, billing, and role-based staff access.',
    role:
      'Lead Full-Stack Engineer & System Architect across requirements, development, database design, permissions, and deployment.',
    technologies: [
      'React',
      'Laravel',
      'PHP',
      'MySQL',
      'REST APIs',
      'WebSockets',
      'Tailwind CSS',
      'Hostinger',
    ],
    difficulties:
      'Keeping order updates consistent across waiter devices and kitchen displays while supporting multilingual interfaces and split billing.',
    result:
      'Used for 4,350+ bookings and customer interactions across a multilingual restaurant operation.',
    learning:
      'Software for physical businesses must reflect how people actually work, especially under time pressure.',
    metrics: [
      { label: 'Bookings / Users', value: '4,350+' },
      { label: 'Languages', value: '7' },
      { label: 'Staff Roles', value: '4' },
    ],
    workflow: [
      {
        title: '1. Customer',
        description:
          'Selects a language, books a table, or browses the digital menu.',
      },
      {
        title: '2. Booking & Order',
        description:
          'The system manages availability and sends orders into the restaurant workflow.',
      },
      {
        title: '3. Waiter',
        description:
          'Staff captures and updates table orders from mobile devices.',
      },
      {
        title: '4. Kitchen / Bar',
        description:
          'Orders are routed to the appropriate preparation station.',
      },
      {
        title: '5. Billing',
        description:
          'The system calculates and manages group bills and receipts.',
      },
      {
        title: '6. Management',
        description:
          'Staff manage operations, records, and reports from the administration side.',
      },
    ],
    diagramType: 'restaurant',
  },

  {
    id: 'haile-aggregate',
    title: 'Haile Aggregate Production Management System',
    subtitle: 'Offline-First Engineering for Low-Connectivity Sites',
    category: 'Industrial Management',
    tag: 'Offline-First PWA',
    isFlagship: true,
    summary:
      'An offline-first PWA for aggregate production and dispatch operations in areas with unreliable internet connectivity.',
    problem:
      'Network interruptions could stop dispatch operations and create gaps between local records and central management.',
    solution:
      'Built an offline-capable application using local browser storage, a sync queue, background synchronization, role-based access, and report exports.',
    role:
      'Lead Full-Stack Engineer responsible for architecture, offline storage, synchronization, and production delivery.',
    technologies: [
      'React',
      'PWA',
      'Service Workers',
      'IndexedDB',
      'Laravel',
      'MySQL',
      'PDF / Excel',
    ],
    difficulties:
      'Keeping local transactions consistent and synchronizing them safely when connectivity returns.',
    result:
      'Allows site operations to continue during network interruptions and synchronizes records when the connection returns.',
    learning:
      'In low-connectivity environments, offline support should be part of the architecture from the beginning.',
    metrics: [
      { label: 'Architecture', value: 'Offline-First' },
      { label: 'Local Storage', value: 'IndexedDB' },
      { label: 'Reports', value: 'PDF & Excel' },
    ],
    workflow: [
      {
        title: 'ONLINE',
        description:
          'Transactions are synchronized with the central system.',
      },
      {
        title: 'LOCAL DATA',
        description:
          'Transactions are stored locally so work can continue without a connection.',
      },
      {
        title: 'OFFLINE',
        description:
          'The application continues handling dispatch operations.',
      },
      {
        title: 'SYNC',
        description:
          'Pending records are synchronized when connectivity returns.',
      },
    ],
    diagramType: 'offline',
  },

  {
    id: 'misgana-charity',
    title: 'Misgana Charity & Donation Platform',
    subtitle: 'Online Donations & Automated Operations',
    category: 'FinTech & Non-Profit',
    tag: 'Production Platform',
    isFlagship: true,
    summary:
      'A donation platform supporting one-time and recurring payments, automated notifications, and internal staff operations.',
    problem:
      'The organization needed a simpler way to collect international donations and manage donor records and receipts.',
    solution:
      'Built a donation platform with Stripe payments, recurring contributions, webhook processing, automated emails, and an internal staff dashboard.',
    role:
      'Full-Stack Engineer responsible for payment integration, webhooks, email workflows, dashboard features, and deployment.',
    technologies: [
      'React',
      'Node.js',
      'Stripe API',
      'Express',
      'MySQL',
      'REST APIs',
      'Nodemailer',
      'VPS Hosting',
    ],
    difficulties:
      'Handling payment events reliably and keeping donor records synchronized with Stripe events.',
    result:
      'Supports 16+ staff members and automates key donation and donor-notification workflows.',
    learning:
      'Payment systems require careful handling of events, records, and failure cases.',
    metrics: [
      { label: 'Staff Users', value: '16+' },
      { label: 'Payments', value: 'One-Time & Recurring' },
      { label: 'Notifications', value: 'Automated' },
    ],
    workflow: [
      {
        title: '1. Donation',
        description:
          'A donor selects a campaign and contribution type.',
      },
      {
        title: '2. Payment',
        description:
          'Stripe securely processes the payment.',
      },
      {
        title: '3. Webhook',
        description:
          'The backend receives and verifies the payment event.',
      },
      {
        title: '4. Notification',
        description:
          'The system sends the appropriate donor notification.',
      },
      {
        title: '5. Dashboard',
        description:
          'Staff review donations and campaign records.',
      },
    ],
    diagramType: 'payment',
  },

  {
    id: 'smart-tourism-tigray',
    title: 'Smart Tourism Tigray',
    subtitle: 'Exploring Personalized Tourism Recommendations',
    category: 'Research & Development',
    tag: 'R&D Concept',
    isRnD: true,
    summary:
      'An applied research project exploring personalized itineraries and digital discovery for tourism in Tigray.',
    problem:
      'Tourists often need to combine limited time, interests, accessibility, locations, and local services when planning a trip.',
    solution:
      'Designed a recommendation approach that considers traveler preferences and tourism data to create more relevant itineraries.',
    role:
      'System Architect & Applied AI Researcher focused on domain modeling, recommendation logic, and system architecture.',
    technologies: [
      'TypeScript',
      'Python',
      'Recommendation Algorithms',
      'React',
      'REST APIs',
      'Graph Modeling',
    ],
    difficulties:
      'Designing recommendations around real geographic, scheduling, and service constraints.',
    result:
      'Produced an architecture and prototype for exploring personalized tourism recommendations.',
    learning:
      'Useful AI depends on relevant data and real-world context, not AI for its own sake.',
    metrics: [
      { label: 'Status', value: 'Research & Development' },
      { label: 'Approach', value: 'Constraint-Aware' },
      { label: 'Focus', value: 'Tourism & Local Services' },
    ],
    workflow: [
      {
        title: 'User Preferences',
        description:
          'Traveler provides interests, duration, and practical constraints.',
      },
      {
        title: 'Recommendation',
        description:
          'The system evaluates available tourism options against those preferences.',
      },
      {
        title: 'Tourism Data',
        description:
          'Relevant locations and local services are considered.',
      },
      {
        title: 'Itinerary',
        description:
          'The system produces a personalized travel plan.',
      },
    ],
    diagramType: 'ai',
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    title: 'Multi-Tenant E-Commerce Portal',
    category: 'E-commerce Systems',
    description:
      'E-commerce platform with product management, persistent carts, checkout, and vendor inventory.',
    techStack: ['React', 'Laravel', 'MySQL', 'REST API', 'Tailwind CSS'],
    highlights:
      'Multi-vendor inventory, mobile purchasing, and order tracking.',
  },
  {
    title: 'Corporate Enterprise Management System',
    category: 'Management Systems',
    description:
      'Internal platform for attendance, assets, expenses, and administrative workflows.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Hostinger VPS'],
    highlights:
      'Role-based access, audit records, and exportable reports.',
  },
  {
    title: 'Non-Profit Community Outreach Platform',
    category: 'Non-Profit Platforms',
    description:
      'Community platform for volunteer coordination, event registration, and public updates.',
    techStack: ['React', 'Node.js', 'REST API', 'MySQL'],
    highlights:
      'Volunteer scheduling, announcements, and public program information.',
  },
  {
    title: 'Multi-Station Restaurant POS & Kitchen Hub',
    category: 'Restaurant Systems',
    description:
      'Restaurant system for table management, kitchen tickets, and real-time order updates.',
    techStack: ['React', 'WebSockets', 'PHP', 'MySQL'],
    highlights:
      'Real-time order updates, table reassignment, and kitchen ticket tracking.',
  },
  {
    title: 'Undergraduate Thesis: Tour Guide Mobile Architecture',
    category: 'Offline-First & Mobile Architecture',
    description:
      'Mobile architecture for location-aware tourism, offline geographic data, and heritage information.',
    techStack: ['Mobile Architecture', 'Geo-Caching', 'SQLite', 'Software Engineering'],
    highlights:
      'BSc Software Engineering thesis, completed in December 2022 with a 3.94 / 4.00 GPA.',
  },
  {
    title: 'Custom Content Management & Web Platforms',
    category: 'Web Platforms & CMS',
    description:
      'Custom websites and content platforms for organizations needing flexible editorial management.',
    techStack: ['WordPress', 'PHP', 'CodeIgniter', 'MySQL'],
    highlights:
      'Custom content structures, permissions, performance improvements, and domain setup.',
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
        'Leading software projects across requirements, technical planning, development, deployment, and client delivery.',
      responsibilities: [
        'Lead 4+ production projects from requirements through deployment.',
        'Manage hosting, VPS environments, domains, DNS, and SSL.',
        'Coordinate sprints, backlogs, priorities, and client communication using Jira.',
        'Mentor junior developers and university interns through production work.',
        'Translate business requirements into practical technical solutions.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      period: 'Jan 2023 – Jan 2025',
      isCurrent: false,
      summary:
        'Developed and maintained web applications across frontend, backend, databases, and production environments.',
      responsibilities: [
        'Built applications with React, Laravel, CodeIgniter, PHP, and MySQL.',
        'Designed and integrated REST APIs with authentication and role-based access.',
        'Built offline-capable PWAs using local storage and synchronization.',
        'Improved database queries, schemas, and application performance.',
        'Maintained WordPress sites, hosting environments, and business email systems.',
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
    'Designed an offline-capable mobile tour guide architecture using location-aware data, cached content, and localized audio.',
};

export const DOCUMENTATION_ARTIFACTS: DocumentationArtifact[] = [
  {
    id: 'requirements',
    title: 'Requirements & Scope Matrix',
    category: 'Planning & Discovery',
    filename: 'docs/01-system-requirements-spec.md',
    description:
      'Turning client requests into clear functional requirements, constraints, and edge cases.',
    keyTakeaway:
      'Clear requirements reduce scope problems and align development with business needs.',
    previewCode: `# System Requirements Specification
Project: Restaurant Management System

1. Functional Requirements:
   - Support multiple languages.
   - Route waiter orders to the correct station.
   - Support group bill splitting.

2. Non-Functional Requirements:
   - Preserve local transactions during connectivity loss.
   - Keep common staff actions responsive.`,
  },
  {
    id: 'architecture',
    title: 'System Architecture Blueprint',
    category: 'System Design',
    filename: 'docs/02-architecture-blueprint.md',
    description:
      'Mapping application layers, data flow, boundaries, and responsibilities.',
    keyTakeaway:
      'A clear architecture makes systems easier to maintain and extend.',
    previewCode: `┌─────────────────┐
│  Client Layer   │
│  React / PWA    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API & Logic    │
│ Laravel / Node  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Data & Storage  │
│ MySQL / SQLite  │
└─────────────────┘`,
  },
  {
    id: 'api-spec',
    title: 'API Contracts & REST Schemas',
    category: 'Integration',
    filename: 'docs/03-api-contract-v1.json',
    description:
      'Defining API requests, responses, errors, and integration boundaries.',
    keyTakeaway:
      'Clear API contracts keep frontend and backend development predictable.',
    previewCode: `POST /api/v1/orders/split-bill

{
  "order_id": "ORD-48291",
  "table_number": 14,
  "split_type": "custom_items",
  "splits": [
    {
      "seat_index": 1,
      "item_ids": [102, 105]
    }
  ]
}

Response:
{
  "status": "success",
  "balance_remaining": 0
}`,
  },
  {
    id: 'database-design',
    title: 'Database Schema & Query Optimization',
    category: 'Persistence',
    filename: 'docs/04-schema-and-indexing.sql',
    description:
      'Designing relationships, indexes, and queries for reliable application data.',
    keyTakeaway:
      'Good data modeling improves reliability and keeps applications responsive.',
    previewCode: `CREATE TABLE scale_tickets (
  id BIGINT UNSIGNED PRIMARY KEY,
  ticket_number VARCHAR(32) NOT NULL UNIQUE,
  quarry_site_id INT NOT NULL,
  gross_tonnage DECIMAL(10,3) NOT NULL,
  tare_tonnage DECIMAL(10,3) NOT NULL,
  sync_status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  INDEX idx_site_created (
    quarry_site_id,
    created_at
  )
);`,
  },
  {
    id: 'deployment-runbook',
    title: 'Production Deployment Runbook',
    category: 'Infrastructure',
    filename: 'docs/05-production-runbook.md',
    description:
      'Documenting repeatable steps for deployment, domains, SSL, and production configuration.',
    keyTakeaway:
      'A repeatable deployment process reduces errors and makes maintenance easier.',
    previewCode: `# Production Deployment

1. Configure environment variables
2. Run database migrations
3. Configure web server
4. Set domain and DNS records
5. Enable SSL / HTTPS
6. Verify application health

Deployment should be
repeatable, documented,
and easy to troubleshoot.`,
  },
  {
    id: 'user-workflows',
    title: 'User Workflows & State Machines',
    category: 'UX & Logic',
    filename: 'docs/06-state-machines.md',
    description:
      'Defining valid transitions for orders, tickets, and payment workflows.',
    keyTakeaway:
      'Explicit states make business rules easier to understand and enforce.',
    previewCode: `Order State:

[DRAFT]
   │
   ▼
[SUBMITTED]
   │
   ├──────► [CANCELLED]
   │
   ▼
[IN PROGRESS]
   │
   ▼
[READY]
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
    description:
      'Building responsive interfaces with reusable components and practical frontend architecture.',
    skills: [
      {
        name: 'React',
        level: 'Core Production',
        note: 'Components, hooks, state architecture',
      },
      {
        name: 'TypeScript & JavaScript',
        level: 'Core Production',
        note: 'Type safety, async flows, application logic',
      },
      {
        name: 'PWA',
        level: 'Advanced',
        note: 'Service Workers, IndexedDB, offline-first logic',
      },
      {
        name: 'Tailwind CSS',
        level: 'Core Production',
        note: 'Responsive layouts and design systems',
      },
      {
        name: 'HTML5 / Modern CSS',
        level: 'Core Production',
        note: 'Semantic markup, accessibility, Grid, Flexbox',
      },
      {
        name: 'Bootstrap',
        level: 'Core Production',
        note: 'Rapid layouts and administrative interfaces',
      },
    ],
  },

  {
    category: 'Backend & APIs',
    description:
      'Designing backend services, business logic, APIs, and application integrations.',
    skills: [
      {
        name: 'Laravel',
        level: 'Core Production',
        note: 'Eloquent, middleware, services, queues',
      },
      {
        name: 'PHP & CodeIgniter',
        level: 'Core Production',
        note: 'MVC applications and existing systems',
      },
      {
        name: 'Node.js & Express',
        level: 'Advanced',
        note: 'APIs, webhooks, asynchronous processing',
      },
      {
        name: 'RESTful API Design',
        level: 'Core Production',
        note: 'Resource design, authentication, validation',
      },
      {
        name: 'Webhook Integration',
        level: 'Core Production',
        note: 'Payments and event-driven workflows',
      },
    ],
  },

  {
    category: 'Databases & Data Modeling',
    description:
      'Designing application data models and improving query performance.',
    skills: [
      {
        name: 'MySQL',
        level: 'Core Production',
        note: 'Schemas, relationships, indexes, transactions',
      },
      {
        name: 'Database Query Optimization',
        level: 'Advanced',
        note: 'Indexes, query analysis, N+1 prevention',
      },
      {
        name: 'SQLite',
        level: 'Advanced',
        note: 'Local application storage',
      },
      {
        name: 'MongoDB',
        level: 'Working Knowledge',
        note: 'Document-based application data',
      },
      {
        name: 'IndexedDB',
        level: 'Advanced',
        note: 'Browser storage for offline applications',
      },
    ],
  },

  {
    category: 'Infrastructure & Operations',
    description:
      'Deploying and maintaining applications in real production environments.',
    skills: [
      {
        name: 'Hostinger Hosting',
        level: 'Core Production',
        note: 'Shared and cloud hosting environments',
      },
      {
        name: 'Linux VPS',
        level: 'Advanced',
        note: 'Ubuntu, SSH, Nginx, process management',
      },
      {
        name: 'Domain & DNS',
        level: 'Core Production',
        note: 'A, CNAME, MX, TXT, SPF, DKIM records',
      },
      {
        name: 'SSL / TLS',
        level: 'Core Production',
        note: 'HTTPS, certificates, security configuration',
      },
      {
        name: 'Docker',
        level: 'Working Knowledge',
        note: 'Containers and development environments',
      },
      {
        name: 'Production Email',
        level: 'Core Production',
        note: 'Business and transactional email setup',
      },
    ],
  },

  {
    category: 'Project Leadership & Tools',
    description:
      'Planning software work, coordinating teams, and delivering projects.',
    skills: [
      {
        name: 'Technical Project Management',
        level: 'Core Production',
        note: 'Requirements to release',
      },
      {
        name: 'Agile & Scrum',
        level: 'Core Production',
        note: 'Sprints, planning, standups, retrospectives',
      },
      {
        name: 'Jira',
        level: 'Core Production',
        note: 'Backlogs, epics, stories, sprint tracking',
      },
      {
        name: 'Git',
        level: 'Core Production',
        note: 'Branching, pull requests, code reviews',
      },
      {
        name: 'Mentorship & Code Reviews',
        level: 'Core Production',
        note: 'Guidance for junior developers and interns',
      },
      {
        name: 'Postman',
        level: 'Core Production',
        note: 'API testing and validation',
      },
    ],
  },

  {
    category: 'Web Platforms',
    description:
      'Choosing practical web technologies according to project needs and constraints.',
    skills: [
      {
        name: 'WordPress',
        level: 'Advanced',
        note: 'Custom themes, CMS, performance, security',
      },
      {
        name: 'Multi-Technology Synthesis',
        level: 'Core Production',
        note: 'React, Laravel, WordPress, and PHP',
      },
    ],
  },

  {
    category: 'Emerging & Applied AI',
    description:
      'Exploring practical AI applications for real product and research problems.',
    skills: [
      {
        name: 'Recommendation Systems',
        level: 'Working Knowledge',
        note: 'Constraint-aware recommendation research',
      },
      {
        name: 'Contextual AI Workflows',
        level: 'Working Knowledge',
        note: 'Tourism, discovery, and automation',
      },
    ],
  },
];