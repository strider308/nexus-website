import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { METADATA } from "@/lib/content/nexus";

export const metadata = {
  title: "Privacy Policy — Nexus",
  description: "Nexus privacy policies and compliance parameters.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-grow py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            Legal Statement
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-zinc dark:prose-invert font-light text-foreground/80 leading-relaxed text-sm md:text-base flex flex-col gap-6">
            
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-[6px] p-4 text-xs text-amber-800 dark:text-amber-200 mb-6 font-medium">
              <strong>TODO for Operators:</strong> This page is a launch placeholder. It requires legal review and validation of actual data processing compliance before deployed publicly.
            </div>

            <p>
              Last Updated: 22 June 2026
            </p>

            <h2 className="font-display text-xl font-bold text-primary mt-6 mb-2">
              1. Overview
            </h2>
            <p>
              This Privacy Policy explains how Nexus (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles information in relation to our workflow tools, proof-of-work software applications, and services. We are committed to transparency and respecting the privacy of our website visitors and pilot program users.
            </p>

            <h2 className="font-display text-xl font-bold text-primary mt-6 mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you choose to share directly with us, such as when you request a demo, join a waitlist, or write to our contact email address ({METADATA.email}). This may include:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Name and contact details (email, phone number).</li>
              <li>Professional profile and company workflow information.</li>
              <li>Analytics records indicating how you interact with our proof-of-work demos.</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-primary mt-6 mb-2">
              3. How We Use Information
            </h2>
            <p>
              We process information solely to operate, maintain, and improve our services, including:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Configuring pilot installations and booking custom developer consultation meetings.</li>
              <li>Analyzing application performance to resolve operational bottlenecks.</li>
              <li>Delivering product announcements or project logs you have subscribed to receive.</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-primary mt-6 mb-2">
              4. Third-Party Disclosures &amp; Limits
            </h2>
            <p>
              We do not sell, lease, or rent customer lists. We share data only with trusted infrastructure providers (such as hosting, database, and form tools) required to run the website, or when legally compelled to protect our users and rights.
            </p>

            <h2 className="font-display text-xl font-bold text-primary mt-6 mb-2">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or would like to request access or deletion of your information, please contact us at:{" "}
              <a href={`mailto:${METADATA.email}`} className="text-[#2E6FAD] hover:underline font-medium">
                {METADATA.email}
              </a>.
            </p>

          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
