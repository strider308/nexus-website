"use client";

import { FOUNDER, METADATA, HERO } from "@/lib/content/nexus";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mail, Globe, MapPin, DollarSign, ExternalLink } from "lucide-react";

export function FounderSection() {
  return (
    <AnimatedSection id="company-founder" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Operating Model */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Bio */}
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
                Founder Profile
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-6">
                {FOUNDER.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
                {FOUNDER.text1}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed font-light font-serif italic text-[#DEDBC8]">
                {FOUNDER.text2}
              </p>
            </div>

            {/* Founder Operating Model */}
            <div className="border border-[#DEDBC8]/10 rounded-[16px] p-6 bg-[#101010]">
              <span className="text-[8px] font-mono font-bold tracking-wider text-gray-500 uppercase mb-3 block">
                Operating Model
              </span>
              <h3 className="font-display text-base font-bold text-[#E1E0CC] mb-3">
                Founder-Led Where It Matters
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                Nexus is not a loose agency. It is a founder-led studio with repeatable systems. We handle scoping, architecture, workflow modeling, UX design, and QA standards directly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#DEDBC8]/5">
                <div>
                  <h4 className="text-xs font-bold text-[#DEDBC8] mb-2">Founder-Led</h4>
                  <ul className="flex flex-col gap-2 text-[11px] font-light text-gray-400">
                    <li>· Discovery & Scoping</li>
                    <li>· System Architecture</li>
                    <li>· Workflow Modeling</li>
                    <li>· UX Systems Design</li>
                    <li>· Implementation Standards</li>
                    <li>· Final QA & Verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#DEDBC8] mb-2">Supported Capacity</h4>
                  <ul className="flex flex-col gap-2 text-[11px] font-light text-gray-400">
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

          </div>

          {/* Right Column: Contact & Parameters Table */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="text-sm md:text-base font-light text-gray-400 leading-relaxed mb-4">
              {FOUNDER.contactIntro}
            </div>

            {/* Contact Rows Grid */}
            <div className="border border-[#DEDBC8]/10 rounded-[16px] overflow-hidden bg-[#101010]">
              
              <div className="grid grid-cols-12 border-b border-[#DEDBC8]/5">
                <div className="col-span-4 bg-black/25 px-5 py-4 text-xs font-mono font-bold text-gray-400 flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-gray-500" />
                  WEBSITE
                </div>
                <div className="col-span-8 px-5 py-4 text-xs sm:text-sm font-medium text-[#E1E0CC]">
                  <a href={METADATA.canonicalUrl} className="hover:underline text-[#DEDBC8] flex items-center gap-1.5 font-mono">
                    {METADATA.domain}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-[#DEDBC8]/5">
                <div className="col-span-4 bg-black/25 px-5 py-4 text-xs font-mono font-bold text-gray-400 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-gray-500" />
                  EMAIL
                </div>
                <div className="col-span-8 px-5 py-4 text-xs sm:text-sm font-medium text-[#E1E0CC]">
                  <a href={`mailto:${METADATA.email}`} className="hover:underline text-[#DEDBC8] font-mono">
                    {METADATA.email}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-[#DEDBC8]/5">
                <div className="col-span-4 bg-black/25 px-5 py-4 text-xs font-mono font-bold text-gray-400 flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-gray-500" />
                  DEMOS
                </div>
                <div className="col-span-8 px-5 py-4 text-xs sm:text-sm font-medium text-[#E1E0CC]">
                  <a href={`${METADATA.canonicalUrl}/demo`} className="hover:underline text-[#DEDBC8] flex items-center gap-1.5 font-mono">
                    {METADATA.domain}/demo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12 border-b border-[#DEDBC8]/5">
                <div className="col-span-4 bg-black/25 px-5 py-4 text-xs font-mono font-bold text-gray-400 flex items-center gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-gray-500" />
                  PRICING
                </div>
                <div className="col-span-8 px-5 py-4 text-xs md:text-sm font-light text-gray-400 leading-relaxed">
                  Contact us — pricing is based on product, deployment scale, and configuration.{" "}
                  <a 
                    href={HERO.ctaUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DEDBC8] hover:underline font-semibold block mt-1 outline-none"
                  >
                    Start a conversation &rarr;
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-4 bg-black/25 px-5 py-4 text-xs font-mono font-bold text-gray-400 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-gray-500" />
                  LOCATION
                </div>
                <div className="col-span-8 px-5 py-4 text-xs sm:text-sm font-medium text-gray-300">
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
