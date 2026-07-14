// Minimal Content Model for the Rebuilt Nexus Website
// Single source of truth for branding copy, proof systems, and services.

export interface ProofSystem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  industry: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const BRAND = {
  name: "Nexus",
  primaryStatement: "Custom software and automation for complex workflows.",
  supportingStatement: "We map fragmented operations, design the system around them, and build the software that connects the work.",
  process: [
    { step: "01", title: "Map the workflow.", desc: "Document roles, states, inputs, and handoffs." },
    { step: "02", title: "Design the system.", desc: "Construct a clean logical stack built for operational clarity." },
    { step: "03", title: "Build the software.", desc: "Deliver role-aware web platforms and robust automations." }
  ],
  proofStatement: "Seven systems across five industries.",
  primaryCTA: "Bring us the workflow.",
  secondaryCTA: "Explore the systems."
};

export const PROOF_SYSTEMS: ProofSystem[] = [
  {
    id: "clinicos",
    name: "ClinicOS",
    category: "Outpatient Clinic Operations",
    tagline: "Run the patient journey from enquiry to pharmacy through one connected workflow.",
    industry: "Healthcare",
    color: "#2a7d8a"
  },
  {
    id: "aarogya",
    name: "Aarogya",
    category: "Personal Health Information Tracker",
    tagline: "Organize everyday health readings and records into one clearer personal dossier.",
    industry: "Healthcare / Wellness",
    color: "#2e6fad"
  },
  {
    id: "restaurantos",
    name: "RestaurantOS",
    category: "Ordering & Dining Floor Operations",
    tagline: "Connect table orders, kitchen tickets, billing reconciliation, and owner dashboards.",
    industry: "Food & Beverage",
    color: "#c87b3a"
  },
  {
    id: "shipwright",
    name: "ShipWright",
    category: "Async Team Workspace",
    tagline: "Keep projects, tasks, files, decisions, and blocker check-ins tightly synchronized.",
    industry: "SaaS / Operations",
    color: "#8b7bc4"
  },
  {
    id: "securescan",
    name: "SecureScan",
    category: "Developer Security Scanner",
    tagline: "Run repeatable web-security scanning loops directly near delivery workflows.",
    industry: "Cybersecurity / DevSecOps",
    color: "#2a7d8a"
  },
  {
    id: "safedate",
    name: "SafeDate",
    category: "Safety Planning Companion",
    tagline: "Plan, share dates, and close the safety check-in loop with trusted contacts.",
    industry: "Consumer Tech",
    color: "#c44a7a"
  },
  {
    id: "buildpublic",
    name: "BuildPublic",
    category: "Founder Execution Workspace",
    tagline: "Manage engineering tasks privately while publishing selected milestone summaries.",
    industry: "SaaS / Creator Economy",
    color: "#dedbc8"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "workflows",
    title: "Custom Workflow Systems",
    description: "Design and build role-aware operational software platforms tailored around your handoffs."
  },
  {
    id: "automation",
    title: "Automation Layers",
    description: "Connect APIs, database triggers, and message hooks to automate operational steps."
  },
  {
    id: "dashboards",
    title: "Operational Dashboards",
    description: "Provide managers and owners with real-time insight into volumes, throughput, and delays."
  },
  {
    id: "beta",
    title: "Private-Beta Product Builds",
    description: "Scope, prototype, and build early stage software and launch pilots with active user bounds."
  },
  {
    id: "modernization",
    title: "UX and System Modernization",
    description: "Refactor legacy registers, spreadsheet logs, and verbal handoffs into clean digital pathways."
  }
];

export const LEGAL = {
  privacyPolicy: "This Privacy Policy describes how Nexus collects, uses, and discloses information in connection with this site. We only process data necessary for providing our services. Security measures are implemented to guard against unauthorized access.",
  termsOfService: "By using this site, you agree to these terms. Nexus provides custom software planning and engineering. All outcomes depend on adoption, setup, and norms. Automated scanning does not guarantee total protection; medical/safety products do not replace professional advice."
};

export const CONTACT = {
  email: "hello@nexus-workflows.com",
  url: "mailto:hello@nexus-workflows.com"
};

export interface SiteMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  email: string;
  domain: string;
  socials: {
    x: string;
    linkedin: string;
    github: string;
  };
}

export const METADATA: SiteMetadata = {
  title: "Nexus — Custom Workflow Systems & Automation",
  description: "Nexus builds custom software and automation for complex workflows. See seven shipped proof systems built end-to-end — clinics, restaurants, security, teams, and more — then bring us yours.",
  canonicalUrl: "https://nexus-workflows.com",
  email: "hello@nexus-workflows.com",
  domain: "nexus-workflows.com",
  socials: {
    x: "https://x.com/nexus",
    linkedin: "https://linkedin.com/company/nexus",
    github: "https://github.com/nexus"
  }
};
