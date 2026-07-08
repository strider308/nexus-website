// Nexus Structured Content Model
// Single source of truth for branding, copy, case studies, and configuration.

export interface ServiceItem {
  name: string;
  description: string;
  bestFit: string;
}

export interface CaseStudyCapabilities {
  title: string;
  bullets: string[];
}

export interface CaseStudySalesSheet {
  problem: string;
  headline: string;
  differentiators: string;
  cta: string;
  note: string;
}

export interface CaseStudy {
  id: string;
  label: string;
  category: string;
  tagline: string;
  status: string;
  statusType: "available" | "beta" | "waitlist";
  ctaPrimaryText: string;
  ctaPrimaryUrl: string;
  ctaSecondaryText: string;
  ctaSecondaryUrl: string;
  problem: string;
  quote: string;
  workflow: string[];
  designedFor?: string[];
  capabilities: CaseStudyCapabilities[];
  integrations: string;
  disclaimer: string;
  salesSheet: CaseStudySalesSheet;
  colorKey: string; // references CSS variables e.g., --color-c-clinicos
}

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

// Dynamic environment variables with safe static fallbacks for build-time compilation
// TODO: Define these variables in your deployment dashboard (e.g. Vercel) before building
const siteUrl = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_SITE_URL || "https://nexus-workflows.com") : "https://nexus-workflows.com";
const contactEmail = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@nexus-workflows.com") : "hello@nexus-workflows.com";
const contactUrl = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_CONTACT_URL || `mailto:${contactEmail}`) : `mailto:${contactEmail}`;
const xUrl = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_X_URL || "https://x.com/nexus") : "https://x.com/nexus";
const linkedinUrl = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/nexus") : "https://linkedin.com/company/nexus";
const githubUrl = typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/nexus") : "https://github.com/nexus";

// TODO: Replace placeholders with your actual production domain and email settings before deployment.
export const METADATA: SiteMetadata = {
  title: "Nexus — Custom Workflow Systems & Automation",
  description: "Nexus builds custom software and automation for complex workflows. See seven shipped proof systems built end-to-end — clinics, restaurants, security, teams, and more — then bring us yours.",
  canonicalUrl: siteUrl,
  email: contactEmail,
  domain: siteUrl.replace(/^https?:\/\//, ""),
  socials: {
    x: xUrl,
    linkedin: linkedinUrl,
    github: githubUrl
  }
};

export const HERO = {
  eyebrow: "Custom Workflow Systems",
  title: "Nexus",
  tagline: "We build custom software and automation for complex workflows. The seven systems below are shipped proof of range.",
  proofTagline: "Seven systems shipped. Five industries. Built by one founder.",
  ctaText: "Start a conversation",
  ctaUrl: contactUrl,
  version: "22 June 2026",
  metaCount: "7 shipped proof systems · 5 industries"
};

export const PROOF_STRIP = [
  "7 systems shipped",
  "5 industries",
  "Built end-to-end",
  "Custom workflows, not templates"
];

export const PROBLEM = {
  eyebrow: "Company Brochure",
  title: "The Problem",
  intro: "Important work often does not fail because people are careless. It fails because the process is scattered.",
  cases: [
    "A clinic runs on phone calls, registers, token slips, patient files, billing notes, diagnostic orders, and pharmacy handoffs.",
    "A restaurant moves between table requests, kitchen tickets, staff memory, billing tools, and owner spreadsheets.",
    "A team loses decisions between chat threads, task boards, files, meetings, and personal reminders."
  ],
  quote: "Who owns this? What changed? What happens next? Where is the latest information? Can the right person see the right thing at the right time?",
  conclusion: "Nexus builds software for those moments. We turn fragmented workflows into clearer systems."
};

export const SERVICES = {
  eyebrow: "Services Brochure",
  title: "Custom software and automation for complex workflows.",
  sub: "Bring us a messy workflow — in any industry. We'll help you map it, design it, and build software that makes it easier to operate.",
  intro: "Every engagement starts with understanding the real workflow, not a feature list. We've built systems for clinics, restaurants, security teams, async teams, safety products, and solo founders — the industries below are what we've done, not the limit of what we do. If your workflow has roles, handoffs, and a \"who owns this?\" problem, it's a fit.",
  workWith: [
    {
      title: "Founders & operators",
      bullets: [
        "You know your domain deeply but need a technical partner who can see the whole system",
        "You're replacing paper, spreadsheets, or a patchwork of disconnected tools",
        "You need software built, not just advised on"
      ]
    },
    {
      title: "Product & engineering teams",
      bullets: [
        "You need extra capacity for a defined build, not a headcount commitment",
        "You're hardening a product before wider rollout or a security-sensitive launch",
        "You want a team that has shipped in your problem space before"
      ]
    }
  ],
  items: [
    {
      name: "Product strategy & workflow design",
      description: "Turn a messy operational problem into a clear product concept, workflow, prototype, or pilot plan.",
      bestFit: "Founders with a product idea · Businesses with manual operations"
    },
    {
      name: "Custom SaaS product development",
      description: "Design and build focused SaaS products for role-based, workflow-heavy use cases.",
      bestFit: "Founder-led SaaS products · Multi-user web applications"
    },
    {
      name: "Multi-role operational systems",
      description: "Create systems where customers, operators, staff, administrators, and owners each see the right part of the same workflow.",
      bestFit: "Clinics · Restaurants · Agencies · Operational teams"
    },
    {
      name: "UX & workflow modernization",
      description: "Replace fragmented paper, spreadsheets, chats, and disconnected tools with clearer digital journeys.",
      bestFit: "Businesses replacing paper registers or spreadsheet-based operations"
    },
    {
      name: "Private-beta & pilot rollout",
      description: "Prepare products for real-user validation with controlled access, feedback loops, and rollout boundaries.",
      bestFit: "Products approaching first real users"
    },
    {
      name: "Security-conscious engineering",
      description: "Design authentication, authorization, tenant isolation, auditability, and safer product workflows.",
      bestFit: "Products handling sensitive data or multi-tenant systems"
    },
    {
      name: "Product hardening & reliability review",
      description: "Identify failure points and strengthen product behavior before wider rollout.",
      bestFit: "Products that work but need more robustness"
    },
    {
      name: "AI-assisted workflow features",
      description: "Add carefully scoped AI support for summaries, drafting, prioritization, and operational assistance with human oversight.",
      bestFit: "Products with operational complexity that benefits from AI assistance"
    }
  ] as ServiceItem[],
  disclaimer: "Service scope, deliverables, timelines, integrations, and implementation responsibilities depend on the agreed engagement. Security-conscious engineering does not replace qualified security review, compliance assessment, or penetration testing. AI-assisted features should be designed with appropriate human oversight and should not be used as autonomous decision-makers where professional judgment is required.",
  closingTitle: "See what we've built, then tell us what you need",
  closingText: "The seven systems below were each designed and built end-to-end by one founder, across five unrelated industries. They're proof of range, not a menu — read them as evidence of what Nexus can do with your workflow."
};

export const FOUNDER = {
  eyebrow: "Company Brochure",
  title: "The founder",
  text1: "Nexus is built and run by one founder — not a large agency, not a studio with account managers between you and the build. I came from operational contexts before engineering ones — clinics, kitchens, security audits, and early-stage startups — which is why the software above is organized around roles and handoffs instead of feature lists.",
  text2: "Every case study in this reference was scoped, designed, and built by me end to end. For larger engagements or tighter timelines, I bring in trusted contractors for additional capacity — but I stay hands-on through architecture and delivery on every project. If you work with Nexus, you're working directly with the person who understands your system, not someone relaying to a team you'll never talk to.",
  limitsTitle: "We don't hide our limits",
  limitsText1: "We do not believe software should hide its limits. Health products should not pretend to diagnose. Safety products should not guarantee safety. Security tools should not promise total protection.",
  limitsText2: "Trust begins with useful software — and honest communication about what it does.",
  contactIntro: "Whether you are running a clinic, restaurant, team, product, safety workflow, or software platform — the right system can make the work easier to understand and easier to operate."
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "clinicos",
    label: "ClinicOS",
    category: "Outpatient Clinic Operations Platform",
    tagline: "Run the patient journey from enquiry to pharmacy through one connected workflow.",
    status: "Early access — demos available now",
    statusType: "available",
    ctaPrimaryText: "Book a demo",
    ctaPrimaryUrl: "/demo#clinicos",
    ctaSecondaryText: "Map your clinic journey",
    ctaSecondaryUrl: "#clinicos-sheet",
    problem: "In many outpatient clinics, the patient journey is divided across too many places. A phone enquiry becomes a receptionist note. A same-day booking becomes a token slip. A doctor delay becomes repeated patient questions. A consultation becomes a handwritten prescription. A billing counter recreates the same information. The owner understands the day only after asking multiple people.",
    quote: "The patient journey is connected in real life. The clinic system should be connected too.",
    workflow: ["Enquiry", "Registration", "Appointment / Token", "Arrival", "Queue", "Consultation", "Diagnostics", "Billing", "Pharmacy", "Follow-up"],
    designedFor: ["Independent outpatient clinics", "Family-owned clinics", "Multi-speciality clinics", "Doctor-owned clinics", "Polyclinics", "Clinics with attached pharmacy", "Growing clinic groups"],
    capabilities: [
      {
        title: "Front Desk",
        bullets: [
          "Patient and family registration",
          "One contact number, multiple profiles",
          "Appointment booking and walk-in handling",
          "Same-day token issuing",
          "Doctor schedule visibility",
          "Arrival confirmation and delay handling"
        ]
      },
      {
        title: "Queue & Consultation",
        bullets: [
          "Live queue movement with audit history",
          "Multiple doctors, specialities, chambers",
          "Encounter records and digital prescriptions",
          "Diagnostic order direction",
          "Prescription-to-pharmacy handoff",
          "Follow-up booking"
        ]
      },
      {
        title: "Billing & Pharmacy",
        bullets: [
          "Consultation, diagnostic, and pharmacy charges",
          "Daily collection summaries and cash reconciliation",
          "Batch and expiry verification",
          "Medicine dispensing workflow",
          "Inventory and procurement management"
        ]
      },
      {
        title: "Owner & Manager View",
        bullets: [
          "Patient volumes and session utilization",
          "Waiting-time trends and delay visibility",
          "Revenue by service, doctor, diagnostics, pharmacy",
          "Near-expiry and stock-out alerts",
          "Full audit history"
        ]
      }
    ],
    integrations: "ClinicOS connects with the services clinics already depend on. Payment processing is supported via UPI, card terminals, and cash. Appointment reminder SMS can be routed through a configured SMS gateway. Diagnostic order slips are printable to any connected printer. Pharmacy dispensing records are internal by default. Integration with external laboratory information systems or third-party EMRs is available as a deployment configuration — confirm specifics during onboarding.",
    disclaimer: "ClinicOS is an outpatient clinic operations platform. Product capabilities, integrations, billing, pharmacy, diagnostic, and deployment details may vary by configuration. Queue and arrival times are estimates, not promises. ClinicOS does not provide medical advice. Clinical decisions remain with qualified professionals. Any legal, regulatory, compliance, certification, or medical claims require separate approval before publication.",
    salesSheet: {
      problem: "Many clinics do not have one shared view of the patient journey. Reception manages calls and arrivals. Doctors manage consultations. Billing manages charges. Diagnostics manages test orders. Pharmacy manages prescriptions. Owners try to understand the day after it has already happened. Every handoff creates another place for information to be repeated, delayed, or lost.",
      headline: "Run the entire outpatient journey through one connected clinic workflow.",
      differentiators: "Built around real outpatient flow · Family-aware patient access · Front desk to pharmacy continuity",
      cta: "Book a ClinicOS demo",
      note: "Queue and arrival times are estimates, not promises. ClinicOS does not provide medical advice. Clinical decisions remain with qualified professionals."
    },
    colorKey: "var(--c-clinicos)"
  },
  {
    id: "aarogya",
    label: "Aarogya",
    category: "Personal Health Information & Routine Tracker",
    tagline: "Organize everyday health information into one clearer personal record.",
    status: "Joining the waitlist now",
    statusType: "waitlist",
    ctaPrimaryText: "Explore Aarogya",
    ctaPrimaryUrl: "/demo#aarogya",
    ctaSecondaryText: "Join the waitlist",
    ctaSecondaryUrl: "#aarogya-sheet",
    problem: "Everyday health information often lives in too many places. A blood-pressure reading is written in a notebook. A glucose value is stored in a device. A prescription is saved as a photo. A lab report is buried in a file. A medicine routine is remembered from habit. A doctor visit happens before the user can summarize what changed.",
    quote: "Your health information should not depend on memory alone.",
    workflow: ["Log", "Track", "Understand", "Summarize", "Share when needed"],
    capabilities: [
      {
        title: "Metric Tracking",
        bullets: [
          "Blood-pressure logging",
          "Blood-glucose logging",
          "Weight tracking",
          "Trend visualization",
          "Source attribution",
          "Weekly summaries"
        ]
      },
      {
        title: "Routines & Context",
        bullets: [
          "Meal logging with Indian food context",
          "Medication logging and routine support",
          "Lifestyle and activity notes",
          "Time-of-day context",
          "Reminder direction"
        ]
      },
      {
        title: "Reports & Summaries",
        bullets: [
          "Lab-report upload direction",
          "Exportable personal health summary",
          "Doctor-visit preparation view",
          "Metric trend summaries"
        ]
      },
      {
        title: "Privacy & Sharing",
        bullets: [
          "User-controlled records",
          "Consent-aware sharing",
          "Export and deletion direction",
          "Selected information sharing"
        ]
      }
    ],
    integrations: "Aarogya stores all data locally to the user's account. Readings can be exported as CSV or PDF for sharing with a doctor or for personal records. Future support for wearable device sync (fitness bands, connected glucometers) is on the roadmap — confirm availability at sign-up. Aarogya does not currently integrate with hospital or clinic systems.",
    disclaimer: "Aarogya is a personal health information and routine tracker. It does not provide medical diagnosis, emergency monitoring, or treatment advice. It does not replace qualified medical care. Users should not change medication or treatment based solely on this product.",
    salesSheet: {
      problem: "Personal health information is often scattered. Readings are in devices. Reports are in files. Medicines are remembered from prescriptions. Meals and routines are tracked inconsistently. Important context is forgotten before the next doctor visit.",
      headline: "Organize everyday health information into one clearer personal record.",
      differentiators: "Built for everyday health organization · Calm, non-alarmist experience · India-aware direction",
      cta: "Explore Aarogya",
      note: "Aarogya does not provide medical diagnosis, emergency monitoring, or treatment advice. Users should not change medication based solely on the product."
    },
    colorKey: "var(--c-aarogya)"
  },
  {
    id: "restaurantos",
    label: "RestaurantOS",
    category: "Restaurant Ordering & Operations Platform",
    tagline: "Connect every table, kitchen, service, and owner workflow.",
    status: "Pilot programme — limited restaurants",
    statusType: "beta",
    ctaPrimaryText: "Book a demo",
    ctaPrimaryUrl: "/demo#restaurantos",
    ctaSecondaryText: "Discuss a pilot",
    ctaSecondaryUrl: "#restaurantos-sheet",
    problem: "In many restaurants, the service journey moves through too many disconnected places. An order is written down or entered into a system. The kitchen receives part of the context. Special instructions are repeated verbally. Service staff check what is ready. The owner reviews the day through a mix of POS data, staff memory, and manual notes.",
    quote: "The customer experience is one journey. The restaurant system should be one journey too.",
    workflow: ["Scan", "Order", "Prepare", "Serve", "Bill", "Review"],
    capabilities: [
      {
        title: "Customer Ordering",
        bullets: [
          "QR table access and menu browsing",
          "Multiple order rounds",
          "Special instructions",
          "Availability status",
          "Order progress visibility"
        ]
      },
      {
        title: "Kitchen & Service",
        bullets: [
          "Live order queue with item-level status",
          "Ready-item signaling",
          "Service staff table view",
          "Bill request handling"
        ]
      },
      {
        title: "Billing & Admin",
        bullets: [
          "Table-level billing direction",
          "Discount and tax handling where configured",
          "Menu management and availability control"
        ]
      },
      {
        title: "Owner View",
        bullets: [
          "Live floor overview",
          "Order volume and revenue summary",
          "Daily and shift summaries",
          "Menu item performance"
        ]
      }
    ],
    integrations: "RestaurantOS works with standard hardware found in most restaurants. QR code menus print to any standard printer. Kitchen display works on any tablet or wall-mounted screen with a browser. Billing connects to UPI, card readers, and cash. Receipt printing is supported on thermal printers via standard protocols. POS terminal compatibility and third-party accounting integrations (Tally, Zoho Books) should be confirmed per deployment.",
    disclaimer: "RestaurantOS is a restaurant ordering and operations platform. Operational outcomes depend on restaurant setup, staff adoption, configuration, and connected systems. Payment, billing, tax, inventory, and integration details should be confirmed for each deployment.",
    salesSheet: {
      problem: "Restaurant work is often split across printed menus, verbal instructions, kitchen notes, POS systems, staff memory, payment tools, and owner spreadsheets. When these views are disconnected, the restaurant becomes harder to operate.",
      headline: "Connect the table, kitchen, floor, billing, and owner view.",
      differentiators: "Not just a QR menu · Role-specific restaurant views · Built for busy operating conditions",
      cta: "Book a RestaurantOS demo",
      note: "Operational results depend on restaurant setup, staff adoption, configuration, service model, and connected systems."
    },
    colorKey: "var(--c-restaurant)"
  },
  {
    id: "shipwright",
    label: "ShipWright",
    category: "Async Team Execution Workspace",
    tagline: "Keep projects, tasks, files, decisions, blockers, and check-ins connected.",
    status: "Private beta — apply to join",
    statusType: "beta",
    ctaPrimaryText: "Request a walkthrough",
    ctaPrimaryUrl: "/demo#shipwright",
    ctaSecondaryText: "Apply for private-beta",
    ctaSecondaryUrl: "#shipwright-sheet",
    problem: "Teams rarely lose work because it doesn't exist. They lose it because it scatters. The task is in one tool. The discussion is in chat. The file is in a drive. The decision was made in a meeting. The blocker was mentioned once and forgotten. The status update has to be rebuilt every week.",
    quote: "Work moves faster when context stays with it.",
    workflow: ["Plan", "Assign", "Discuss", "Check in", "Resolve blockers", "Ship"],
    capabilities: [
      {
        title: "Plan & organize",
        bullets: [
          "Workspaces",
          "Projects & milestones",
          "Tasks & ownership",
          "Files & notes"
        ]
      },
      {
        title: "Communicate & decide",
        bullets: [
          "Team check-ins",
          "Comments & discussions",
          "Decision history",
          "Blocker visibility"
        ]
      },
      {
        title: "Remember & report",
        bullets: [
          "Project summaries",
          "Operational context",
          "Team memory"
        ]
      }
    ],
    integrations: "ShipWright sends daily check-in reminders and task deadline nudges via email. Slack notifications are available as an optional integration — team members can receive task updates and check-in prompts without leaving their existing tools. File attachments are supported for tasks. Calendar integrations for deadline visibility are on the roadmap.",
    disclaimer: "ShipWright is an async team execution workspace. Team outcomes depend on adoption, workflow setup, communication norms, and how consistently teams use the workspace.",
    salesSheet: {
      problem: "Teams rarely lose work because the work does not exist. They lose it because the work is scattered. The task is in one tool. The discussion is in chat. The file is in a drive. The decision was made in a meeting. The blocker was mentioned once and forgotten.",
      headline: "Keep projects, decisions, blockers, and files connected.",
      differentiators: "Built for context continuity · Async-first execution · Operational memory",
      cta: "Request a ShipWright walkthrough",
      note: "Team outcomes depend on adoption, workflow setup, and communication norms."
    },
    colorKey: "var(--c-shipwright)"
  },
  {
    id: "securescan",
    label: "SecureScan",
    category: "Developer-Focused Web-Security Scanning Platform",
    tagline: "Bring repeatable security checks closer to development work.",
    status: "Available — technical demos running now",
    statusType: "available",
    ctaPrimaryText: "Request a demo",
    ctaPrimaryUrl: "/demo#securescan",
    ctaSecondaryText: "Review your workflow",
    ctaSecondaryUrl: "#securescan-sheet",
    problem: "Security findings often arrive too late or in a form developers cannot easily act on. Reports are disconnected from the development workflow. Findings are hard to prioritize. Issues are not re-checked consistently. Security becomes a one-off event instead of a repeatable habit.",
    quote: "A security finding is only useful when the developer who can fix it sees it at the right time.",
    workflow: ["Scan", "Classify", "Prioritize", "Fix", "Re-scan", "Report"],
    capabilities: [
      {
        title: "Automated Checks",
        bullets: [
          "Scheduled vulnerabilities scan",
          "Finding reports",
          "Automated checks on PRs",
          "Detailed scans history"
        ]
      },
      {
        title: "Developer Context",
        bullets: [
          "Developer-readable findings",
          "Evidence and payload disclosure",
          "Remediation steps",
          "Codebase links"
        ]
      }
    ],
    integrations: "SecureScan integrates with GitHub Actions and GitLab CI for automated scans on every pull request or deployment. Findings export as JSON, CSV, or PDF for import into Jira, Linear, or any issue tracker. Slack notifications alert the team when new Critical or High findings are detected. API access is available for teams building custom security dashboards or integrating with existing DevSecOps tooling.",
    disclaimer: "Automated scanning can help identify common security risks, but it cannot guarantee that an application is secure and does not replace qualified security review, secure development practices, code review, threat modeling, penetration testing, or compliance assessment.",
    salesSheet: {
      problem: "Security findings often arrive too late or in a form developers struggle to act on. Reports are disconnected from the development workflow. Findings are hard to prioritize. Teams lose track of what was fixed and what still matters. Security becomes a one-off event instead of a repeatable habit.",
      headline: "Run repeatable web-security checks before issues disappear into release pressure.",
      differentiators: "Developer-readable findings · Repeatable review rhythm · Built near delivery workflows",
      cta: "Request a technical demo",
      note: "Automated scanning cannot guarantee that an application is secure and does not replace qualified security review or penetration testing."
    },
    colorKey: "var(--c-securescan)"
  },
  {
    id: "safedate",
    label: "SafeDate",
    category: "Dating-Safety Preparation & Check-in Product",
    tagline: "Plan, share, and close the loop around dating safety without fear-based design.",
    status: "Early access — available now",
    statusType: "available",
    ctaPrimaryText: "Explore SafeDate",
    ctaPrimaryUrl: "/demo#safedate",
    ctaSecondaryText: "Create a safety plan",
    ctaSecondaryUrl: "#safedate-sheet",
    problem: "Modern dating often starts digitally, but the safety planning around meeting someone is still informal. A friend may know part of the plan. A location may be shared in a message. A check-in may be forgotten. The loop may never be closed.",
    quote: "Safety planning should feel like preparation, not alarm.",
    workflow: ["Plan", "Share context", "Check in", "Update contact", "Close the loop"],
    designedFor: ["Dating safety preparation", "Sharing date details", "Timed check-ins", "Trusted contacts loops"],
    capabilities: [
      {
        title: "Date Planning & Sharing",
        bullets: [
          "Date planning",
          "Trusted-contact sharing",
          "Check-in reminders",
          "Consent-aware sharing",
          "Privacy controls",
          "Safety notes",
          "Emergency-boundary guidance",
          "Post-date closeout"
        ]
      }
    ],
    integrations: "SafeDate reaches trusted contacts via SMS and email — no app install required on their end. Push notifications are available for SafeDate users on mobile. The product does not integrate with phone emergency services directly; if you believe you are in danger, contact emergency services first.",
    disclaimer: "SafeDate cannot guarantee personal safety, predict another person's behavior, prevent harm, or replace emergency services. Users should contact appropriate emergency support when they believe they are in danger.",
    salesSheet: {
      problem: "Modern dating often starts digitally, but the safety planning around meeting someone is still informal. A friend may know part of the plan. A check-in may be forgotten. Important context may be scattered. The loop may never be closed.",
      headline: "Plan, share, and close the loop around dating safety.",
      differentiators: "Non-fear-based safety design · Consent-aware sharing · Clear closeout",
      cta: "Explore SafeDate",
      note: "SafeDate cannot guarantee personal safety, predict another person's behavior, or replace emergency services."
    },
    colorKey: "var(--c-safedate)"
  },
  {
    id: "buildpublic",
    label: "BuildPublic",
    category: "Founder Execution & Public-Progress Workspace",
    tagline: "Manage the build privately. Share the journey publicly.",
    status: "Available — start today",
    statusType: "available",
    ctaPrimaryText: "Start building",
    ctaPrimaryUrl: "/demo#buildpublic",
    ctaSecondaryText: "Create project page",
    ctaSecondaryUrl: "#buildpublic-sheet",
    problem: "Building in public sounds simple, but execution and storytelling live in different places. Tasks are private. Notes are scattered. Progress is hard to summarize. Public updates are inconsistent. Launch history disappears across social posts.",
    quote: "Private execution. Public momentum.",
    workflow: ["Plan", "Build", "Log progress", "Select updates", "Publish", "Learn"],
    capabilities: [
      {
        title: "Workspace features",
        bullets: [
          "Private tasks",
          "Milestones",
          "Notes & build logs",
          "Progress updates",
          "Public project pages",
          "Launch timelines",
          "Founder accountability",
          "Audience-facing updates",
          "Learning loops",
          "Private / public tagging"
        ]
      }
    ],
    integrations: "BuildPublic public project pages generate an RSS feed — anyone can subscribe to your progress updates in any feed reader. Optional cross-posting to X and LinkedIn lets you push a public update to your existing audience with one click. GitHub integration is on the roadmap, allowing commits to automatically generate progress log entries.",
    disclaimer: "BuildPublic does not guarantee audience growth, customer acquisition, revenue, funding, product success, launch performance, or social-platform reach. Users should avoid publishing confidential information, personal data, customer data, credentials, or unapproved claims. Public sharing should remain intentional and controlled.",
    salesSheet: {
      problem: "Building in public sounds simple, but execution and storytelling live in different places. Tasks are private. Notes are scattered. Progress is hard to summarize. Public updates are inconsistent. Launch history disappears across social posts.",
      headline: "Build privately. Share selected progress publicly.",
      differentiators: "Private execution first · Selective public storytelling · Founder accountability",
      cta: "Start building in public",
      note: "BuildPublic does not guarantee audience growth, funding, or launch performance. Public sharing should remain intentional and controlled."
    },
    colorKey: "var(--c-buildpublic)"
  }
];

export const MASTER_DISCLAIMER = "Product capabilities, integrations, and deployment details may vary by configuration. Health-related products do not provide medical diagnosis, emergency monitoring, or treatment advice. Clinic and pharmacy workflows remain subject to qualified professional judgment and applicable requirements. Safety products cannot guarantee personal safety or predict another person's behavior. Automated security scanning cannot guarantee that an application is secure and does not replace qualified security review or penetration testing. Any legal, regulatory, compliance, or certification claims require separate approval before publication.";
