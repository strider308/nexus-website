"use client";

import { MASTER_DISCLAIMER, CASE_STUDIES, SERVICES } from "@/lib/content/nexus";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRODUCT_THEMES } from "@/lib/design-tokens";

export function TrustLimitsSection() {
  return (
    <AnimatedSection id="disclaimers" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
            Responsible Scoping
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
            Clear limits. Better trust.
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
            Transparent limits and disclaimers for each of our custom workflows.
          </p>
        </div>

        {/* Global Company Disclaimer */}
        <div className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[16px] p-6 text-xs md:text-sm text-gray-400 leading-relaxed font-light mb-10">
          <strong className="text-[#E1E0CC] font-bold uppercase tracking-wider block mb-3 font-mono text-[10px]">
            Core Constraints &amp; Responsibility
          </strong>
          {MASTER_DISCLAIMER}
        </div>

        {/* Accordions mapping product disclaimers */}
        <div className="border border-[#DEDBC8]/10 rounded-[16px] overflow-hidden bg-black">
          <Accordion className="w-full">
            {CASE_STUDIES.map((study) => {
              const theme = PRODUCT_THEMES[study.id];
              return (
                <AccordionItem key={study.id} value={study.id} className="border-b border-[#DEDBC8]/10 last:border-b-0 px-6 py-1">
                  <AccordionTrigger className="text-xs md:text-sm font-semibold text-[#E1E0CC] hover:no-underline flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: theme.primary }} />
                      <span>{study.label}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-gray-400 leading-relaxed font-light pb-4 pt-1">
                    {study.disclaimer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
            
            {/* Services disclaimer as well */}
            <AccordionItem value="services" className="border-b border-[#DEDBC8]/10 last:border-b-0 px-6 py-1">
              <AccordionTrigger className="text-xs md:text-sm font-semibold text-[#E1E0CC] hover:no-underline flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-[#DEDBC8]" />
                  <span>Services</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-gray-400 leading-relaxed font-light pb-4 pt-1">
                {SERVICES.disclaimer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </AnimatedSection>
  );
}
