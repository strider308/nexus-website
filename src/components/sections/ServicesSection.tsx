import { SERVICES } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  return (
    <AnimatedSection id="services-brochure" className="w-full py-16 md:py-24 border-b border-border bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            {SERVICES.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
            {SERVICES.title}
          </h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
            {SERVICES.sub}
          </p>
          <p className="text-base text-foreground/80 leading-relaxed font-light">
            {SERVICES.intro}
          </p>
        </div>

        {/* Who We Work With */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.workWith.map((group, idx) => (
            <div key={idx} className="border border-border bg-background rounded-[8px] p-8 shadow-sm">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-6">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3 text-sm text-foreground/85 font-light leading-relaxed">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#2E6FAD] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Grid (Replaces the dry HTML table) */}
        <div className="mb-16">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
            Core Engagement Services
          </h3>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.items.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full border border-border bg-background hover:border-[#1A2B4C]/40 rounded-[8px] p-6 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <h4 className="font-display text-lg font-bold text-primary group-hover:text-[#2E6FAD] transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="border-t border-border/60 pt-4 flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-wider uppercase">
                      BEST FIT FOR
                    </span>
                    <span className="text-xs text-foreground/80 font-medium">
                      {service.bestFit}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Disclaimer Box */}
        <div className="border border-border/80 bg-background/50 rounded-[8px] p-5 text-[11px] text-muted-foreground leading-relaxed font-light mb-16">
          <strong className="text-foreground font-semibold uppercase tracking-wider block mb-1">
            Disclaimer
          </strong>
          {SERVICES.disclaimer}
        </div>

        {/* Closing Invitation Card */}
        <div className="relative border border-border rounded-[12px] bg-background p-8 md:p-12 text-center overflow-hidden shadow-md">
          {/* Subtle decoration background lines */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              {SERVICES.closingTitle}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-8">
              {SERVICES.closingText}
            </p>
            <a 
              href="#case-studies" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold px-8 py-6 rounded-[6px] transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 shadow-sm flex items-center gap-2"
              )}
            >
              See shipped systems
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
