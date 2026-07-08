import { FOUNDER, METADATA } from "@/lib/content/nexus";
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

            {/* Limits Callout */}
            <div className="border border-border/80 rounded-[8px] p-6 bg-background">
              <h3 className="font-display text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#2E6FAD]" />
                {FOUNDER.limitsTitle}
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed font-light mb-3">
                {FOUNDER.limitsText1}
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed font-light">
                {FOUNDER.limitsText2}
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
                    href={`${METADATA.canonicalUrl}/contact`} 
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
