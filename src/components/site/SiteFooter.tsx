import { METADATA, HERO } from "@/lib/content/nexus";

export function SiteFooter() {
  return (
    <footer className="w-full bg-black border-t border-[#DEDBC8]/10 text-gray-400 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-noise" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Large Logo display */}
        <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#E1E0CC] mb-2 select-none">
          Nexus<span className="text-[#DEDBC8] font-light">*</span>
        </div>
        
        <p className="text-sm text-gray-400 font-light mb-8 max-w-sm leading-relaxed">
          Custom software and automation for complex workflows.
        </p>

        {/* Page Links */}
        <div className="flex flex-wrap gap-6 justify-center mb-8 text-xs font-mono font-bold uppercase tracking-wider">
          <a href="/services" className="text-[#DEDBC8]/80 hover:text-white transition-colors">Services</a>
          <a href="/case-studies" className="text-[#DEDBC8]/80 hover:text-white transition-colors">Case Studies</a>
          <a href="/demo" className="text-[#DEDBC8]/80 hover:text-white transition-colors">Demo Library</a>
          <a href="/resources" className="text-[#DEDBC8]/80 hover:text-white transition-colors">Resources</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-8 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href={METADATA.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on X"
            className="text-gray-400 hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
          <a
            href={METADATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={METADATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexus on GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Separator line */}
        <div className="w-full max-w-xl h-px bg-[#DEDBC8]/10 mb-8" />

        {/* Metadata and Legal */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full max-w-4xl text-xs text-gray-500 font-mono font-bold">
          <div>
            &copy; {new Date().getFullYear()} Nexus &middot; Version: {HERO.version}
          </div>
          <div className="flex gap-4">
            <a 
              href="/privacy-policy" 
              className="hover:text-white underline transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-white underline transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/sitemap.xml" 
              className="hover:text-white underline transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
