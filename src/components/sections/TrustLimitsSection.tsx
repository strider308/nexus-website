"use client";

import { MASTER_DISCLAIMER, CASE_STUDIES, SERVICES } from "@/lib/content/nexus";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRODUCT_THEMES } from "@/lib/design-tokens";

export function TrustLimitsSection() {
  return (
    <AnimatedSection id="disclaimers" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            Trust &amp; Limits
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
            Transparent limits and disclaimers for each of our custom workflows.
          </p>
        </div>

        {/* Global Company Disclaimer */}
        <div className="border border-border bg-muted/20 rounded-[8px] p-6 text-xs md:text-sm text-foreground/80 leading-relaxed font-light mb-10">
          <strong className="text-primary font-bold uppercase tracking-wider block mb-2">
            Core Constraints &amp; Responsibility
          </strong>
          {MASTER_DISCLAIMER}
        </div>

        {/* Accordions mapping product disclaimers */}
        <div className="border border-border rounded-[8px] overflow-hidden bg-background">
          <Accordion className="w-full">
            {CASE_STUDIES.map((study) => {
              const theme = PRODUCT_THEMES[study.id];
              return (
                <AccordionItem key={study.id} value={study.id} className="border-b border-border last:border-b-0 px-6 py-1">
                  <AccordionTrigger className="text-xs md:text-sm font-semibold text-primary hover:no-underline flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: theme.primary }} />
                      <span>{study.label}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light pb-4 pt-1">
                    {study.disclaimer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
            
            {/* Services disclaimer as well */}
            <AccordionItem value="services" className="border-b border-border last:border-b-0 px-6 py-1">
              <AccordionTrigger className="text-xs md:text-sm font-semibold text-primary hover:no-underline flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-primary" />
                  <span>Services</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light pb-4 pt-1">
                {SERVICES.disclaimer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </AnimatedSection>
  );
}
