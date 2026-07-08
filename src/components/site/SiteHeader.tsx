"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { HERO } from "@/lib/content/nexus";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Cover", href: "#cover" },
  { label: "Services", href: "#services-brochure" },
  { label: "Company", href: "#company-brochure" },
  { label: "What We've Built", href: "#case-studies" },
  { label: "Legal & Disclaimers", href: "#disclaimers" },
];

const sectionLabels: Record<string, string> = {
  cover: "Overview",
  "services-brochure": "Services",
  "company-brochure": "Company Brochure",
  "company-founder": "Founder Profile",
  "case-studies": "What We've Built",
  clinicos: "ClinicOS",
  aarogya: "Aarogya",
  restaurantos: "RestaurantOS",
  shipwright: "ShipWright",
  securescan: "SecureScan",
  safedate: "SafeDate",
  buildpublic: "BuildPublic",
  disclaimers: "Disclaimers",
};

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("cover");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sectionLabels[id]) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all main sections
    const sections = [
      "cover",
      "services-brochure",
      "company-brochure",
      "company-founder",
      "case-studies",
      "clinicos",
      "aarogya",
      "restaurantos",
      "shipwright",
      "securescan",
      "safedate",
      "buildpublic",
      "disclaimers",
    ];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getCrumbLabel = () => {
    return sectionLabels[activeSection] || "Overview";
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300">
      <div className="flex h-14 md:h-16 max-w-7xl mx-auto px-4 md:px-8 items-center justify-between">
        
        {/* Logo and Breadcrumbs */}
        <div className="flex items-center gap-4">
          <a 
            href="#cover" 
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary focus-visible:ring-2 focus-visible:ring-primary/50 outline-none rounded-[4px]"
          >
            Nexus
          </a>
          <span className="text-muted-foreground/40 font-light select-none">|</span>
          <div className="text-xs md:text-sm text-muted-foreground font-medium truncate max-w-[150px] sm:max-w-none">
            <span className="hidden sm:inline">Nexus <span aria-hidden="true">&rsaquo;</span> </span><span className="text-foreground transition-colors">{getCrumbLabel()}</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/50 outline-none rounded-[4px] px-1 py-0.5 ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a 
            href={HERO.ctaUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none")}
          >
            Start a conversation
          </a>
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="h-9 w-9 p-0 text-foreground" aria-label="Toggle navigation" />
            }>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l border-border px-6 py-8">
              <div className="flex flex-col gap-6">
                <div className="font-display text-2xl font-bold text-primary mb-4">Nexus</div>
                <nav className="flex flex-col gap-4 text-base font-medium">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className={`py-2 border-b border-border/50 transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 outline-none rounded-[4px] ${
                          isActive ? "text-primary font-bold" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
                <a 
                  href={HERO.ctaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "default" }), "w-full bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] mt-6 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none")}
                >
                  Start a conversation
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
