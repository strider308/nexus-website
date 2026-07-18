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

// Single-source branding and operations configuration
export const BRAND_CONFIG = {
  // Brand name and identity keys (configure here to change brand site-wide)
  shortName: "Nexus",
  logoText: "NEXUS",
  methodologyName: "The Nexus Method",
  tagline: "Custom Workflow Systems & Automation",
  
  // Operational details (marked as placeholders until confirmed)
  legalName: "[DECISION REQUIRED: Legal Entity Name]", 
  tradingName: "[DECISION REQUIRED: Trading Name]",
  domain: "nexus-workflows.com",
  email: "hello@nexus-workflows.com",
  operatingCountry: "India",
  location: "[DECISION REQUIRED: Service Location]",
  
  // Social profile pointers (cleared if unverified)
  socials: {
    x: "", // [DECISION REQUIRED: Social Profile URL]
    linkedin: "", // [DECISION REQUIRED: Social Profile URL]
    github: "" // [DECISION REQUIRED: Social Profile URL]
  },
  
  // CTA hierarchy
  primaryCTA: "Request a workflow diagnostic",
  secondaryCTA: "Explore the systems",
  
  // Date and copyright values
  estYear: "2026",
  copyright: "© 2026 [DECISION REQUIRED: Legal Entity Name]. All rights reserved.",
  
  // Process steps (using methodology language)
  process: [
    { step: "01", title: "Map the workflow.", desc: "Document roles, states, inputs, and handoffs." },
    { step: "02", title: "Design the system.", desc: "Construct a clean logical stack built for operational clarity." },
    { step: "03", title: "Build the software.", desc: "Deliver role-aware web platforms and robust automations." }
  ],
  primaryStatement: "Custom software and automation for complex workflows.",
  supportingStatement: "We map fragmented operations, design the system around them, and build the software that connects the work.",
  proofStatement: "Seven proof systems across five industries."
};

// Deprecated alias for backwards compatibility
export const BRAND = BRAND_CONFIG;

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
  privacyPolicy: [
    "Last Updated: July 17, 2026",
    "1. Data Collection and Processing Principles: Nexus (operating as a professional B2B custom software design studio) enforces strict data minimization. We only collect name, business email, company details, and workflow information that you explicitly submit through our online intake form or send directly to our email hello@nexus-workflows.com. We do not use third-party behavioral cookies, tracking pixels, or cross-site advertisement trackers.",
    "2. Scope and Legal Basis: Processing of your contact details is performed under the legal basis of pre-contractual steps and contract performance (GDPR Article 6(1)(b)) or legitimate interests in addressing commercial queries. We use your details solely to review your system requirements, conduct workflow diagnostics, draft software architecture blueprints, and communicate about our custom integration services.",
    "3. Storage and Data Retention: We store lead submission records and diagnostic data securely on encrypted, access-restricted databases. We do not sell or trade your details to marketing list brokers or external aggregators. Lead records that do not proceed to a formal commercial contract engagement are systematically purged from our active files within 180 days of final communication, or immediately upon user request.",
    "4. Security and Server Infrastructure: All client communications and form transfers are encrypted in transit using transport layer security (HTTPS TLS 1.3). In case of database integration or hosting transitions, data is held strictly on infrastructure located in certified Vercel or AWS server regions. Access to diagnostic drafts is restricted exclusively to authorized development engineers subject to strict non-disclosure obligations.",
    "5. Your Data Rights: Depending on your jurisdiction (such as the European Economic Area under GDPR or India under DPDP Act), you have the right to request access to, correction of, porting of, or deletion of your personal data. To exercise these rights, or to submit a data processing query, contact our privacy officer at hello@nexus-workflows.com."
  ],
  termsOfService: [
    "Last Updated: July 17, 2026",
    "1. Acceptance of Terms: By accessing this website or submitting a diagnostic request, you accept and agree to be bound by these Terms of Service. If you disagree with any portion of these terms, you must immediately cease accessing this site.",
    "2. Scope of Custom Services: Nexus provides custom software engineering, automation strategy, and API integration consultancy. The seven systems presented in our catalog (ClinicOS, Aarogya, RestaurantOS, ShipWright, SecureScan, SafeDate, BuildPublic) are demonstration builds, prototypes, and reference systems showcasing our engineering capability. They are not off-the-shelf software-as-a-service products, nor does this catalog constitute a public offering of pre-packaged licenses.",
    "3. Liability Limitations & Important Disclaimers: All proof systems are provided 'as is' without warranties of any kind. SecureScan is a repository scanning utility and is not a substitute for certified third-party penetration testing or compliance auditing. Aarogya is a personal tracker and does not provide clinical or medical diagnostic guidance. SafeDate is a companion scheduling helper and does not guarantee physical security or protection. The client assumes full liability and operational responsibility for the configuration, deployment, compliance, and oversight of any software delivered by Nexus.",
    "4. Intellectual Property: The design layouts, custom three-dimensional animations, and source code patterns exhibited on this website are the intellectual property of Nexus. Case study names and screenshots serve as reference portfolios of custom software architectures built by our studio.",
    "5. Dispute Resolution & Governing Law: These terms, along with any separate professional software development agreements, are governed by the laws of India, without regard to conflicts of law provisions. Any legal disputes arising out of the use of this website shall be resolved exclusively within the courts of New Delhi, India."
  ]
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
  title: `${BRAND_CONFIG.shortName} — ${BRAND_CONFIG.tagline}`,
  description: `${BRAND_CONFIG.shortName} builds custom software and automation for complex workflows. See seven proof systems built end-to-end — clinics, restaurants, security, teams, and more — then request a workflow diagnostic.`,
  canonicalUrl: `https://${BRAND_CONFIG.domain}`,
  email: BRAND_CONFIG.email,
  domain: BRAND_CONFIG.domain,
  socials: BRAND_CONFIG.socials
};
