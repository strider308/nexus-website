import { FOUNDER, METADATA, HERO } from "@/lib/content/nexus";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mail, Globe, MapPin, DollarSign, ExternalLink, ShieldCheck } from "lucide-react";

export function FounderSection() {
  return (
    <AnimatedSection id="company-founder" className="w-full py-16 md:py-24 border-b border-border bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Limits */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            
            {/* Bio */}
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
                {FOUNDER.title}
              </h2>
              <p className="text-base text-foreground/80 leading-relaxed font-light mb-4">
                {FOUNDER.text1}
              </p>
              <p className="text-base text-foreground/80 leading-relaxed font-light">
                {FOUNDER.text2}
              </p>
            </div>

            {/* Founder Operating Model */}
            <div className="border border-border rounded-[8px] p-6 bg-background">
              <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-3 block">
                Operating Model
              </span>
              <h3 className="font-display text-lg font-bold text-primary mb-3">
                Founder-Led Where It Matters
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-light mb-4">
                Nexus is not a loose agency. It is a founder-led studio with repeatable systems. We handle scoping, architecture, workflow modeling, UX design, and QA standards directly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/60">
                <div>
                  <h4 className="text-xs font-bold text-primary mb-2">Founder-Led</h4>
                  <ul className="flex flex-col gap-1.5 text-[11px] font-light text-muted-foreground">
                    <li>· Discovery & Scoping</li>
                    <li>· System Architecture</li>
                    <li>· Workflow Modeling</li>
                    <li>· UX Systems Design</li>
                    <li>· Implementation Standards</li>
                    <li>· Final QA & Verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary mb-2">Supported Capacity</h4>
                  <ul className="flex flex-col gap-1.5 text-[11px] font-light text-muted-foreground">
                    <li>· Specialist Contractors</li>
                    <li>· Custom API Integrations</li>
                    <li>· UI Asset Production</li>
                    <li>· Continuous QA Testing</li>
                    <li>· Deployment Assistance</li>
                    <li>· Documentation Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trust & Limits */}
            <div className="border border-[#C0392B]/20 rounded-[8px] p-6 bg-[#C0392B]/5">
              <h3 className="font-display text-lg font-bold text-[#C0392B] mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Trust &amp; Limits
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed font-light mb-3">
                Nexus is committed to building useful, reliable software. That starts with honest constraints: health tools do not provide medical diagnosis, safety check-ins cannot guarantee personal safety, and security tools do not replace manual threat penetration testing.
              </p>
              <p className="text-xs text-foreground/75 leading-relaxed font-light">
                All proof systems and demo walkthroughs are mock models built to demonstrate range, not active commercial entities. AI integrations are scoped for drafting and summary support, requiring human-in-the-loop review before actions are executed.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Pricing Table */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-4">
              {FOUNDER.contactIntro}
            </div>

            {/* Contact Rows Grid */}
            <div className="border border-border rounded-[8px] overflow-hidden bg-background">
              
              <div className="grid grid-cols-12 border-b border-border/60">
                <div className="col-span-4 bg-muted/30 px-5 py-4 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  WEBSITE
                </div>
                <div className="col-span-8 px-5 py-4 text-sm font-medium text-primary">
                  <a href={METADATA.canonicalUrl} className="hover:underline text-[#2E6FAD] flex items-center gap-1.5">
                    {METADATA.domain}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-border/60">
                <div className="col-span-4 bg-muted/30 px-5 py-4 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  EMAIL
                </div>
                <div className="col-span-8 px-5 py-4 text-sm font-medium text-primary">
                  <a href={`mailto:${METADATA.email}`} className="hover:underline text-[#2E6FAD]">
                    {METADATA.email}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-border/60">
                <div className="col-span-4 bg-muted/30 px-5 py-4 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  DEMOS
                </div>
                <div className="col-span-8 px-5 py-4 text-sm font-medium text-primary">
                  <a href={`${METADATA.canonicalUrl}/demo`} className="hover:underline text-[#2E6FAD] flex items-center gap-1.5">
                    {METADATA.domain}/demo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-border/60">
                <div className="col-span-4 bg-muted/30 px-5 py-4 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  PRICING
                </div>
                <div className="col-span-8 px-5 py-4 text-xs md:text-sm font-light text-muted-foreground leading-relaxed">
                  Contact us — pricing is based on product, deployment scale, and configuration.{" "}
                  <a 
                    href={HERO.ctaUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E6FAD] hover:underline font-semibold block mt-1 focus-visible:ring-1 focus-visible:ring-[#2E6FAD]/50 outline-none rounded-[2px]"
                  >
                    Start a conversation &rarr;
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-4 bg-muted/30 px-5 py-4 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  LOCATION
                </div>
                <div className="col-span-8 px-5 py-4 text-sm font-medium text-foreground/80">
                  India
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
