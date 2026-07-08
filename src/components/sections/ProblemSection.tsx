import { PROBLEM } from "@/lib/content/nexus";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function ProblemSection() {
  return (
    <AnimatedSection id="company-brochure" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement (Left Column) */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-8">
              {PROBLEM.intro}
            </h2>
            
            <blockquote className="border-l-4 border-[#2E6FAD] pl-6 py-2 my-6 font-display text-xl md:text-2xl text-primary italic leading-relaxed max-w-lg">
              &ldquo;{PROBLEM.quote}&rdquo;
            </blockquote>
          </div>

          {/* Cards & Details (Right Column) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <StaggerContainer className="flex flex-col gap-4">
              {PROBLEM.cases.map((text, idx) => {
                // Infer type for labeling
                let label = "Workflow Node";
                if (text.includes("clinic")) label = "Outpatient Clinic";
                else if (text.includes("restaurant")) label = "Restaurant Service";
                else if (text.includes("team")) label = "Async Team Execution";

                return (
                  <StaggerItem key={idx}>
                    <div className="border border-border rounded-[8px] p-6 bg-muted/20 hover:border-[#1A2B4C]/40 transition-colors duration-300">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2 block">
                        {label}
                      </span>
                      <p className="text-base text-foreground/80 leading-relaxed font-light">
                        {text}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 pl-2 border-l-2 border-border/80">
              {PROBLEM.conclusion}
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
