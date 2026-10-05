// Single source of truth for all portfolio content.
// Update this file (not the components) when your resume changes.
import images from "../constants/image";

export const profile = {
  name: "Jayaprakash M",
  firstName: "Jayaprakash",
  title: "Full Stack Developer",
  headline: "I build complete web products, from database to UI.",
  intro:
    "3 years of building and shipping production web apps across logistics, healthcare, wellness and manufacturing. I work across the whole stack: responsive React & Next.js interfaces, Node.js & NestJS APIs, PostgreSQL data models, and deployment on AWS.",
  location: "Coimbatore, India",
  availability: "Open to opportunities · Open to relocation",
  email: "prakashdev2403@gmail.com",
  resume: "/Jayaprakash-M.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/jayaprakash-m-dev/",
    github: "https://github.com/Jayaprakash11dev",
  },
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "5", label: "Production apps shipped" },
  { value: "4", label: "Industries served" },
  { value: "2", label: "Junior devs mentored" },
];

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer who enjoys owning a feature from the first sketch to production. On the frontend I build component-driven React and Next.js applications: responsive, accessible interfaces translated faithfully from Figma, with clean state management and a close eye on performance.",
    "On the backend I design PostgreSQL schemas and build REST APIs with Node.js, Express and NestJS. I care about the things that keep a product fast and reliable as it grows: SQL query optimization, indexing, Redis caching, Docker, and CI/CD with GitHub Actions.",
    "Because I work on both sides, I design APIs around what the UI actually needs and catch integration issues early. I work in an Agile team, review pull requests, and mentor two junior developers on Git workflow, React patterns, REST conventions and writing testable code.",
  ],
  focus: [
    "Scalable React & Next.js architecture (App Router, SSR/SSG)",
    "Accessible, responsive UI systems with Tailwind CSS",
    "Type-safe APIs with NestJS, Prisma & PostgreSQL",
    "Shipping with confidence: tests in CI, zero-downtime deploys",
  ],
};

export const experience = [
  {
    company: "AceAssured",
    url: "https://aceassured.com/",
    role: "Full Stack Developer",
    period: "Dec 2023 — Present",
    location: "Coimbatore, India",
    highlights: [
      "Own 5 production applications end to end across logistics, healthcare, wellness and manufacturing, from database schema design through the deployed frontend.",
      "Build responsive, accessible React and Next.js front ends from Figma designs, with reusable component libraries styled in Tailwind CSS.",
      "Rewrote heavy reporting queries with Common Table Expressions (CTEs) and partial/composite indexes, sharply cutting response times on endpoints that were timing out.",
      "Manage complex client state with Redux Toolkit and server state with data-fetching and caching patterns; build multi-step forms with React Hook Form and schema validation.",
      "Introduced Redis for session storage and hot-endpoint caching, reducing repeated database reads and making dashboards load near-instantly.",
      "Improve front-end performance through code splitting, lazy loading, image optimization and memoization, keeping data-heavy dashboards fast and responsive.",
      "Built GitHub Actions CI/CD running lint, typecheck and automated tests against a PostgreSQL service container, with zero-downtime deploys via NGINX and PM2.",
      "Integrate front ends with REST APIs using typed clients, centralized error handling and role-aware routing that mirrors backend RBAC.",
      "Containerized 2 services with Docker and Docker Compose so a new developer can start the full stack with one command.",
      "Review pull requests and mentor 2 junior developers on Git workflow, React patterns, REST conventions and writing testable code.",
    ],
    tech: [
      "React",
      "Node.js",
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redux Toolkit",
      "Redis",
      "Tailwind CSS",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
  },
];

export const featuredProjects = [
  {
    name: "Garment Boss",
    subtitle: "B2B Garment Supply Chain Platform",
    period: "Jul 2026 — Present",
    summary:
      "A multi-tenant B2B supply chain platform built as a Turborepo monorepo: a Next.js web portal and an Expo React Native mobile app on top of a NestJS API and a 47-model Prisma schema.",
    frontend: [
      "Next.js portal and Expo React Native app sharing types and business logic across the monorepo.",
      "Role-specific dashboards and navigation for five user types.",
      "Reconciliation UI for resolving line-level mismatches between purchase orders, invoices and goods tallies.",
      "Document upload and review flow for invoice and catalogue data extracted by AI.",
    ],
    backend: [
      "NestJS API over a 47-model Prisma / PostgreSQL schema with tenant isolation and RBAC.",
      "Three-way PO / invoice / goods-tally reconciliation engine.",
      "Google Document AI integration behind a swappable provider interface.",
      "91 Jest test suites running in CI against PostgreSQL.",
    ],
    image: images.garmentBossImage,
    link: "https://abc-garment-boss-web.vercel.app",
    metrics: [
      { value: "47", label: "Prisma models" },
      { value: "2", label: "Client apps" },
      { value: "91", label: "Test suites" },
    ],
    tech: [
      "Next.js",
      "NestJS",
      "React Native / Expo",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Turborepo",
      "Document AI",
      "Jest",
    ],
  },
  {
    name: "Hidden Honey Exclusives",
    subtitle: "Membership & Subscription Platform",
    period: "Apr 2026 — Jun 2026",
    summary:
      "A full-stack subscription platform covering memberships, community and Shopify orders: a Next.js App Router front end on a NestJS 11, Prisma and PostgreSQL backend.",
    frontend: [
      "Next.js App Router front end using server and client components where each fits.",
      "Membership, community and checkout experiences, built responsive and mobile-first.",
      "Front-end types generated from the OpenAPI spec, giving a type-safe API client with no contract drift.",
    ],
    backend: [
      "NestJS 11 API with Prisma and PostgreSQL.",
      "Stripe billing with idempotent webhook handling, so duplicate deliveries can never double-charge.",
      "Shopify order integration alongside memberships and community.",
    ],
    image: images.hiddenHoneyImage,
    link: "https://hiddenhoneyexclusives.com/",
    tech: [
      "Next.js App Router",
      "NestJS 11",
      "React",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "OpenAPI",
      "Shopify",
    ],
  },
  {
    name: "Causeway",
    subtitle: "B2B Logistics Platform",
    period: "May 2025 — Oct 2025",
    summary:
      "A shipment and booking management system for B2B logistics, with shipment tracking, invoicing, delivery management, multi-payment and collective booking.",
    frontend: [
      "React admin and customer dashboards for bookings, shipment tracking, credit summaries and invoicing.",
      "Multi-payment and collective-booking flows with form validation and clear status feedback.",
    ],
    backend: [
      "MySQL schema design and Node.js / Express.js REST APIs.",
      "JWT authentication and Role-Based Access Control enforced by middleware on every endpoint.",
    ],
    image: images.causewayImage,
    link: "https://causeway-temporary-testing-vercel.vercel.app",
    tech: ["React", "Node.js", "Tailwind CSS", "Express.js", "MySQL", "JWT", "RBAC"],
  },
];

export const moreProjects = [
  {
    name: "Repelta",
    description:
      "Healthcare campaign dashboards where MRs and admins run campaigns, assign technicians and allocate machines state by state, while technicians maintain patient records.",
    image: images.repeltaImage,
    link: "https://psp.repelta.com/",
    tech: ["React", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    name: "Unschool",
    description:
      "Online education platform connecting students with teachers, with an interactive live map that shows active educators by location.",
    image: images.unschoolImage,
    link: "https://community.theunschoolersmap.org/",
    tech: ["React", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    name: "Inplass",
    description:
      "Searchable FAQ and knowledge base for a hotel management app, with a rich-text editor and file uploads for admins.",
    image: images.inplassImage,
    link: "https://support.inplass.online/",
    tech: ["React", "Tailwind", "Node.js", "Firebase"],
  },
  {
    name: "Bharath Home Medicare",
    description:
      "Medical slot booking UI with online and offline flows: 8 hourly slots a day, capped at 100 bookings per slot.",
    image: images.bharathImage,
    link: "https://ibm-front-end.vercel.app/",
    tech: ["React", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    name: "AMET Clinic Management",
    description:
      "Separate admin and doctor portals for a university clinic: student visits, prescriptions, medical forms, health reports and attendance logs.",
    image: images.ametImage,
    link: "https://cms-admin.priddemo.in/",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
];

// The first two groups render as equal-width headline cards.
export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router, SSR/SSG)",
      "TypeScript",
      "Redux Toolkit",
      "React Hooks & Context",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Web Performance",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "RESTful Web Services",
      "MVC",
      "Swagger / OpenAPI",
      "Prisma",
      "Multi-Tenancy",
      "Webhooks",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Query Optimization", "Indexing", "RDBMS", "NoSQL"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, Lightsail, S3)", "DigitalOcean", "Vercel", "Docker", "GitHub Actions", "CI/CD", "NGINX", "PM2", "Linux"],
  },
  {
    group: "Auth & Security",
    items: ["JWT", "OAuth 2.0", "RBAC", "bcrypt", "Rate Limiting", "Helmet.js", "API Security"],
  },
  {
    group: "Mobile & UI Tooling",
    items: ["React Native / Expo", "Figma to Code", "Headless UI", "Vite", "Turborepo"],
  },
  {
    group: "Testing & Tools",
    items: ["Jest", "React Testing Library", "Supertest", "Unit & Integration Testing", "Git", "GitHub", "Postman", "Agile / Scrum", "Code Reviews"],
  },
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
];

export const education = [
  {
    school: "Park College of Engineering and Technology",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    period: "2018 — 2022",
    detail: "GPA 7.47 · Coimbatore, India",
  },
];

export const certifications = [
  {
    title: "React Frontend Development",
    issuer: "QTree Technologies, Coimbatore",
    period: "Dec 2022",
  },
];
