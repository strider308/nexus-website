export interface NexusSceneConfig {
  id: string;
  slug: string;
  chapterNumber: string;
  chapterTitle: string;
  eyebrow: string;
  title: string;
  summary: string;
  sourceContentIds: string[];
  desktop: {
    videoPoster: string;
    videoMp4?: string;
    videoWebm?: string;
    aspectRatio: number;
  };
  mobile: {
    videoPoster: string;
    videoMp4?: string;
    videoWebm?: string;
    aspectRatio: number;
  };
  reducedMotion: {
    posterImage: string;
    altDescription: string;
  };
  timeline: {
    startScrollRatio: number;
    endScrollRatio: number;
  };
  analyticsEvent: string;
}

export const NEXUS_SCENE_MANIFEST: NexusSceneConfig[] = [
  {
    id: "scene-1",
    slug: "frontier",
    chapterNumber: "01",
    chapterTitle: "THE FRONTIER",
    eyebrow: "CUSTOM SOFTWARE & AUTOMATION ENGINE",
    title: "We Build Systems That Turn Operational Chaos Into Compounding Advantage.",
    summary: "High-friction business processes, fragmented tools, and manual data entry bleed up to 30% of enterprise margin. Nexus engineers unified, multi-role software systems tailored to your exact operational bottleneck.",
    sourceContentIds: ["hero", "proof-strip"],
    desktop: {
      videoPoster: "/media/scene-1-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-1-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-1-static.webp",
      altDescription: "Isometric diorama representing fragmented business operations before Nexus integration.",
    },
    timeline: {
      startScrollRatio: 0.0,
      endScrollRatio: 0.14,
    },
    analyticsEvent: "frontier_viewed",
  },
  {
    id: "scene-2",
    slug: "chaos",
    chapterNumber: "02",
    chapterTitle: "THE COST OF CHAOS",
    eyebrow: "THE HIDDEN COST OF MANUAL WORKFLOWS",
    title: "Disconnected Tools Drain Executive & Operational Velocity.",
    summary: "When data lives in spreadsheets, chat apps, and legacy databases, your team wastes hundreds of hours on manual reconciliation. Scaling headcount without software automation multiplies cost without increasing throughput.",
    sourceContentIds: ["problem-section"],
    desktop: {
      videoPoster: "/media/scene-2-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-2-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-2-static.webp",
      altDescription: "Diorama interior showing stalled paperwork queues and disconnected data streams.",
    },
    timeline: {
      startScrollRatio: 0.14,
      endScrollRatio: 0.28,
    },
    analyticsEvent: "chaos_viewed",
  },
  {
    id: "scene-3",
    slug: "engine",
    chapterNumber: "03",
    chapterTitle: "THE NEXUS ENGINE",
    eyebrow: "UNIFIED ARCHITECTURE",
    title: "Custom Software Built Around Your Exact Operational Bottlenecks.",
    summary: "We design and deploy full-stack systems spanning multi-role web apps, automated data pipelines, role-based access control, and real-time operational dashboards.",
    sourceContentIds: ["services-brochure"],
    desktop: {
      videoPoster: "/media/scene-3-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-3-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-3-static.webp",
      altDescription: "Central glowing Nexus engine diorama connecting isolated business nodes.",
    },
    timeline: {
      startScrollRatio: 0.28,
      endScrollRatio: 0.42,
    },
    analyticsEvent: "engine_viewed",
  },
  {
    id: "scene-4",
    slug: "ledger",
    chapterNumber: "04",
    chapterTitle: "PROOF LEDGER",
    eyebrow: "PROOF-OF-WORK CASE STUDIES",
    title: "7 Production Workflows Deployed Across Healthcare, Operations, Security & Logistics.",
    summary: "Explore ClinicOS, Aarogya, RestaurantOS, ShipWright, SecureScan, SafeDate, and BuildPublic — production platforms engineered with zero-fluff execution.",
    sourceContentIds: ["case-studies-section", "proof-ledger"],
    desktop: {
      videoPoster: "/media/scene-4-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-4-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-4-static.webp",
      altDescription: "Highway of miniature working case study modules.",
    },
    timeline: {
      startScrollRatio: 0.42,
      endScrollRatio: 0.57,
    },
    analyticsEvent: "ledger_viewed",
  },
  {
    id: "scene-5",
    slug: "scale",
    chapterNumber: "05",
    chapterTitle: "COMPOUNDING VALUE",
    eyebrow: "LONG-TERM ARCHITECTURAL ADVANTAGE",
    title: "Zero Vendor Lock-In. 100% Code Ownership. Infinite Extensibility.",
    summary: "Off-the-shelf SaaS forces your business to adapt to its limitations. Nexus delivers clean, modular code bases you fully own, eliminating recurring seat license taxes.",
    sourceContentIds: ["why-nexus-compounds"],
    desktop: {
      videoPoster: "/media/scene-5-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-5-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-5-static.webp",
      altDescription: "Synchronized operating network diorama highlighting compounding system velocity.",
    },
    timeline: {
      startScrollRatio: 0.57,
      endScrollRatio: 0.71,
    },
    analyticsEvent: "scale_viewed",
  },
  {
    id: "scene-6",
    slug: "trust",
    chapterNumber: "06",
    chapterTitle: "TRUST & GOVERNANCE",
    eyebrow: "ENGAGEMENT TRACKS & SECURITY GUARANTEES",
    title: "Clear Scope. Zero Bloat. Transparent Execution.",
    summary: "Choose between our Diagnostic System Audit, Fixed-Scope Sprint, or Dedicated Systems Engine. Security-conscious engineering with zero third-party data leaks.",
    sourceContentIds: ["engagement-models", "trust-limits-section"],
    desktop: {
      videoPoster: "/media/scene-6-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-6-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-6-static.webp",
      altDescription: "Fortified data vault structure displaying security compliance and engagement tiers.",
    },
    timeline: {
      startScrollRatio: 0.71,
      endScrollRatio: 0.85,
    },
    analyticsEvent: "trust_viewed",
  },
  {
    id: "scene-7",
    slug: "initiate",
    chapterNumber: "07",
    chapterTitle: "INITIATE SYSTEM",
    eyebrow: "DIRECT FOUNDER ENGAGEMENT",
    title: "Ready to Build Your Custom Operational Advantage?",
    summary: "Tell us about your operational bottleneck. We reply within 24 hours with a preliminary architecture breakdown and fixed-scope delivery plan.",
    sourceContentIds: ["founder-section", "final-cta"],
    desktop: {
      videoPoster: "/media/scene-7-poster.webp",
      aspectRatio: 1.777,
    },
    mobile: {
      videoPoster: "/media/scene-7-poster-m.webp",
      aspectRatio: 0.5625,
    },
    reducedMotion: {
      posterImage: "/media/scene-7-static.webp",
      altDescription: "Illuminated control center terminal with intake form.",
    },
    timeline: {
      startScrollRatio: 0.85,
      endScrollRatio: 1.0,
    },
    analyticsEvent: "initiate_viewed",
  },
];
