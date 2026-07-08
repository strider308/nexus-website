import { METADATA, HERO } from "@/lib/content/nexus";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#1A2B4C] text-white/90 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        {/* Large Logo display */}
        <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
          Nexus
        </div>
        
        <p className="text-sm text-white/60 font-light mb-8 max-w-sm leading-relaxed">
          Custom software and automation for complex workflows.
        </p>

        {/* Page Links */}
        <div className="flex flex-wrap gap-6 justify-center mb-8 text-xs font-semibold uppercase tracking-wider">
          <a href="/services" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</a>
          <a href="/demo" className="text-white/80 hover:text-white transition-colors">Demo Library</a>
          <a href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-8">
          <a
            href={METADATA.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on X / Twitter"
            className="text-white/60 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            X (Twitter)
          </a>
          <a
            href={METADATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on LinkedIn"
            className="text-white/60 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={METADATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on GitHub"
            className="text-white/60 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Separator line */}
        <div className="w-full max-w-xl h-px bg-white/10 mb-8" />

        {/* Metadata and Legal */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full max-w-4xl text-[11px] text-white/60">
          <div>
            &copy; {new Date().getFullYear()} Nexus &middot; Version: {HERO.version}
          </div>
          <div className="flex gap-4">
            <a 
              href="/privacy-policy" 
              className="hover:text-white underline transition-colors focus-visible:ring-1 focus-visible:ring-white/40 outline-none rounded-[2px] px-1"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-white underline transition-colors focus-visible:ring-1 focus-visible:ring-white/40 outline-none rounded-[2px] px-1"
            >
              Terms of Service
            </a>
            <a 
              href="/sitemap.xml" 
              className="hover:text-white underline transition-colors focus-visible:ring-1 focus-visible:ring-white/40 outline-none rounded-[2px] px-1"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
