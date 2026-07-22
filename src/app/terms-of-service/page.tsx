import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { METADATA } from "@/lib/content/nexus";

export const metadata = {
  title: "Terms of Service — Nexus",
  description: "Nexus terms of service and compliance guidelines.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main id="main-content" className="flex-grow py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
            Legal Statement
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-zinc dark:prose-invert font-light text-[#E1E0CC]/80 leading-relaxed text-base flex flex-col gap-6">
            
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-[8px] p-4 text-sm text-amber-800 dark:text-amber-200 mb-6 font-medium">
              <strong>TODO for Operators:</strong> This page is a launch placeholder. It requires legal review and validation of actual terms of service parameters before deployed publicly.
            </div>

            <p>
              Last Updated: 22 June 2026
            </p>

            <h2 className="font-display text-xl font-bold text-[#E1E0CC] mt-6 mb-2">
              1. Acceptable Use of Demos &amp; Materials
            </h2>
            <p>
              By accessing this website, you agree to comply with these Terms of Service. All software applications shown (e.g. ClinicOS, Aarogya, RestaurantOS, ShipWright, SecureScan, SafeDate, BuildPublic) are proof-of-work representations of custom software capabilities. They are provided as-is for assessment purposes and do not represent a fixed subscription software offering.
            </p>

            <h2 className="font-display text-xl font-bold text-[#E1E0CC] mt-6 mb-2">
              2. Intellectual Property
            </h2>
            <p>
              All designs, components, source code, copy, layout frameworks, and graphical assets are the intellectual property of Nexus and its founder. You may not duplicate, redistribute, or reverse-engineer these materials without express written authorization.
            </p>

            <h2 className="font-display text-xl font-bold text-[#E1E0CC] mt-6 mb-2">
              3. Scope &amp; Disclaimer of Liability
            </h2>
            <p>
              NEITHER NEXUS NOR ITS FOUNDER RESPONDS FOR DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF THESE SYSTEM PREVIEWS. SPECIFICALLY:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Our personal health tracker applications do not diagnose or offer professional medical treatment advice.</li>
              <li>Our dating safety planning tools do not guarantee physical safety or replace common sense.</li>
              <li>Our automated vulnerability scanning products do not replace comprehensive human security engineering audits.</li>
              <li>AI-assisted features are tools to support workflows and always require active operator review.</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-[#E1E0CC] mt-6 mb-2">
              4. Governing Law
            </h2>
            <p>
              Any disputes arising out of the website or services will be governed by the laws applicable in India, without regard to conflicts of law guidelines.
            </p>

            <h2 className="font-display text-xl font-bold text-[#E1E0CC] mt-6 mb-2">
              5. Support and Queries
            </h2>
            <p>
              For legal inquiries, contact:{" "}
              <a href={`mailto:${METADATA.email}`} className="text-[#DEDBC8] hover:underline font-bold">
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
