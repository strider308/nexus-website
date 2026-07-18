"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { motion } from "motion/react";

export default function AccessibilityPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 flex flex-col justify-between select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col gap-8 relative z-10 px-6 md:px-12 flex-1 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-[#2a7d8a] uppercase font-bold">
            ACCESSIBILITY PRACTICES
          </span>
          <h1 className="type-heading text-4xl md:text-5xl tracking-tight text-[#dedbc8]">
            Accessibility Statement
          </h1>
          <div className="h-[1px] bg-[#dedbc8]/14 w-full my-4" />
          
          <div className="flex flex-col gap-6 text-sm md:text-base font-normal text-gray-300 leading-relaxed font-sans">
            <p>
              Nexus is committed to digital accessibility. We design our web pages with Web Content Accessibility Guidelines (WCAG) 2.2 Level AA principles in mind to improve the user experience for everyone.
            </p>
            <p>
              The website undergoes ongoing review and refinement to ensure that usability and access are steadily improved. We welcome feedback on our current implementation.
            </p>
            
            <h2 className="text-xl font-mono uppercase tracking-wider text-[#dedbc8] mt-4 font-bold">
              Accessibility Features Support
            </h2>
            
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong>Keyboard Navigation:</strong> Standard keyboard access can be used to navigate interactive components, menus, and forms.
              </li>
              <li>
                <strong>Reduced Motion Support:</strong> The website respects operating-system preferences for reduced motion (`prefers-reduced-motion`). When active, all camera panning, high-framerate WebGL scene motion, GSAP timeline animations, and scroll-linked effects are paused or replaced with static layouts.
              </li>
              <li>
                <strong>Semantic HTML Structure:</strong> The interface is structured using semantic HTML headings, landmarks, lists, and form labels to support compatibility with standard screen readers and assistive systems.
              </li>
              <li>
                <strong>Contrast and Typography:</strong> Text size, layout structure, and font choices are designed to support legibility and clear contrast ratios across the site.
              </li>
            </ul>

            <h2 className="text-xl font-mono uppercase tracking-wider text-[#dedbc8] mt-4 font-bold">
              Feedback and Contact
            </h2>
            <p>
              If you experience accessibility difficulties or wish to request assistance, please share your feedback with us at: <a href="mailto:hello@nexus-workflows.com" className="text-[#2a7d8a] hover:underline font-mono font-bold">hello@nexus-workflows.com</a>.
            </p>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
