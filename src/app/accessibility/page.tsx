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
            COMPLIANCE STATEMENT
          </span>
          <h1 className="type-heading text-4xl md:text-5xl tracking-tight text-[#dedbc8]">
            Accessibility Statement
          </h1>
          <div className="h-[1px] bg-[#dedbc8]/14 w-full my-4" />
          
          <div className="flex flex-col gap-6 text-sm md:text-base font-normal text-gray-300 leading-relaxed font-sans">
            <p>
              Nexus is committed to ensuring digital accessibility for individuals with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to achieve WCAG 2.2 Level AA compliance.
            </p>
            
            <h2 className="text-xl font-mono uppercase tracking-wider text-[#dedbc8] mt-4 font-bold">
              Key Features Supported
            </h2>
            
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong>Keyboard Accessibility:</strong> All interactive components, including menus, links, and forms, can be navigated using standard keyboards.
              </li>
              <li>
                <strong>Reduced Motion Support:</strong> The website respects the user&apos;s OS preference (`prefers-reduced-motion`). When active, all high-framerate WebGL rendering, GSAP camera movements, transitions, and scroll animations are automatically paused or replaced with high-contrast static equivalents.
              </li>
              <li>
                <strong>Screen Reader Compatibility:</strong> We use semantic HTML elements (headings, navigation landmarks, main content regions, label elements) to ensure standard compatibility with Jaws, NVDA, VoiceOver, and TalkBack screen readers.
              </li>
              <li>
                <strong>Contrast and Typography:</strong> Text sizes and color contrast meet or exceed the WCAG 2.2 AA target ratio (4.5:1 for regular text, 3:1 for large text).
              </li>
            </ul>

            <h2 className="text-xl font-mono uppercase tracking-wider text-[#dedbc8] mt-4 font-bold">
              Feedback and Contact
            </h2>
            <p>
              If you experience accessibility difficulties on our website or wish to request further assistance, please contact us at: <a href="mailto:hello@nexus-workflows.com" className="text-[#2a7d8a] hover:underline font-mono">hello@nexus-workflows.com</a>.
            </p>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
