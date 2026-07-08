"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MessageSquare } from "lucide-react";
import { HERO } from "@/lib/content/nexus";

export function FinalCTA() {

  return (
    <AnimatedSection id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="relative border border-border rounded-[12px] bg-muted/20 p-8 md:p-12 text-center overflow-hidden shadow-sm">
          {/* Subtle decoration background radial gradient */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to see how it fits your workflow?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-8">
              Bring us your messy workflow. We&apos;ll help you map the first buildable version.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={HERO.ctaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold px-8 py-6 rounded-[6px] transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 shadow-sm flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                Start a conversation
              </a>
              <a 
                href="/case-studies"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent hover:bg-muted text-primary border-border font-semibold px-8 py-6 rounded-[6px] transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 outline-none"
                )}
              >
                <span className="flex items-center gap-2">
                  Browse proof systems
                </span>
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono mt-4">
              You&apos;ll get a founder-led scoping reply, not a generic sales script.
            </p>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
