import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/lib/content/nexus";

const almarai = Almarai({
  variable: "--font-sans",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.canonicalUrl),
  title: METADATA.title,
  description: METADATA.description,
  alternates: {
    canonical: METADATA.canonicalUrl,
  },
  openGraph: {
    type: "website",
    title: METADATA.title,
    description: METADATA.description,
    url: METADATA.canonicalUrl,
    images: [
      {
        url: `${METADATA.canonicalUrl}/og-cover.png`,
        width: 1200,
        height: 630,
        alt: "Nexus — Custom Software & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [`${METADATA.canonicalUrl}/og-cover.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexus",
    "url": METADATA.canonicalUrl,
    "description": "Nexus builds custom software and automation for complex workflows across any industry. The seven systems listed here — spanning clinic operations, personal health, restaurants, team execution, web security, dating safety, and founder tools — are proof-of-work case studies, not a fixed product catalog.",
    "foundingLocation": { "@type": "Place", "addressCountry": "IN" },
    "dateModified": "2026-06-22",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": METADATA.email,
      "contactType": "sales",
      "availableLanguage": "English"
    },
    "sameAs": [
      METADATA.socials.x,
      METADATA.socials.linkedin,
      METADATA.socials.github
    ],
    "makesOffer": [
      {
        "@type": "Service",
        "name": "Custom Software & Automation Development",
        "serviceType": "Software development",
        "description": "Custom software, automation, and workflow systems built end-to-end for founders, operators, and product teams across any industry. Includes product strategy, multi-role operational systems, UX modernization, private-beta rollout, security-conscious engineering, and AI-assisted workflow features.",
        "areaServed": "Worldwide",
        "url": `${METADATA.canonicalUrl}/#services-brochure`
      },
      {
        "@type": "SoftwareApplication",
        "name": "ClinicOS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Outpatient clinic operations platform covering patient registration, appointment booking, queue management, consultation, diagnostics, billing, and pharmacy.",
        "featureList": "Patient registration, appointment booking, live queue management, digital prescriptions, diagnostic orders, billing, pharmacy, owner dashboard",
        "url": `${METADATA.canonicalUrl}/case-studies#clinicos`
      },
      {
        "@type": "SoftwareApplication",
        "name": "Aarogya",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Web",
        "description": "Personal health information and routine tracker for blood pressure, blood glucose, weight, and medication. User-controlled data with export and deletion.",
        "featureList": "Metric logging, trend visualization, weekly summaries, medication reminders, data export, data deletion",
        "url": `${METADATA.canonicalUrl}/case-studies#aarogya`
      },
      {
        "@type": "SoftwareApplication",
        "name": "RestaurantOS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Restaurant ordering and operations platform covering QR menu, table ordering, kitchen queue, billing, and owner dashboard.",
        "featureList": "QR menu, table ordering, kitchen display, billing, cash reconciliation, inventory management, owner dashboard",
        "url": `${METADATA.canonicalUrl}/case-studies#restaurantos`
      },
      {
        "@type": "SoftwareApplication",
        "name": "ShipWright",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Async team execution workspace for task ownership, daily check-ins, progress tracking, and team accountability.",
        "featureList": "Task ownership, daily check-ins, progress tracking, team accountability, async-first workflow",
        "url": `${METADATA.canonicalUrl}/case-studies#shipwright`
      },
      {
        "@type": "SoftwareApplication",
        "name": "SecureScan",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "description": "Developer-focused web-security scanning platform for authorized vulnerability detection, finding reports, and severity classification.",
        "featureList": "Automated vulnerability scanning, finding severity levels, detailed reports, scan history",
        "url": `${METADATA.canonicalUrl}/case-studies#securescan`
      },
      {
        "@type": "SoftwareApplication",
        "name": "SafeDate",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Web",
        "description": "Dating-safety preparation and check-in product. Users share date plans with trusted contacts and set timed check-ins.",
        "featureList": "Date plan sharing, trusted contact network, timed check-ins, consent-aware sharing",
        "url": `${METADATA.canonicalUrl}/case-studies#safedate`
      },
      {
        "@type": "SoftwareApplication",
        "name": "BuildPublic",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Founder execution and public-progress workspace. Private task management with a public-facing progress log for accountability and audience building.",
        "featureList": "Private task management, public progress log, milestone sharing, founder accountability",
        "url": `${METADATA.canonicalUrl}/case-studies#buildpublic`
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${almarai.variable} ${instrumentSerif.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "80px" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground animate-fade-in">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#DEDBC8] text-black px-4 py-2 rounded-full z-[200] font-mono font-bold text-xs uppercase tracking-wider outline-none focus:ring-2 focus:ring-[#DEDBC8] focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
