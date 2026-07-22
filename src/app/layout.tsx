import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/lib/content/nexus";

const almarai = Almarai({ variable: "--font-sans", subsets: ["arabic"], weight: ["400", "700", "800"] });
const canonical = METADATA.canonicalUrl;

export const metadata: Metadata = {
  ...(canonical ? { metadataBase: new URL(canonical), alternates: { canonical } } : {}),
  title: METADATA.title,
  description: METADATA.description,
  openGraph: { type: "website", title: METADATA.title, description: METADATA.description, ...(canonical ? { url: canonical } : {}) },
  twitter: { card: "summary_large_image", title: METADATA.title, description: METADATA.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexus",
    description: METADATA.description,
    ...(canonical ? { url: canonical } : {}),
    ...(METADATA.email ? { contactPoint: { "@type": "ContactPoint", email: METADATA.email, contactType: "sales", availableLanguage: "English" } } : {}),
    ...(Object.values(METADATA.socials).filter(Boolean).length ? { sameAs: Object.values(METADATA.socials).filter(Boolean) } : {}),
    makesOffer: [{ "@type": "Service", name: "Custom workflow software", description: "Founder-led workflow mapping and custom software development for operational teams." }],
  };
  return <html lang="en" className={`${almarai.variable} antialiased`}><body><a href="#main-content" className="sr-only fixed left-4 top-4 z-30 rounded-md bg-brand px-4 py-2 font-bold text-brand-foreground focus:not-sr-only">Skip to main content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
