import { PROOF_STRIP } from "@/lib/content/nexus";

export function ProofStrip() {
  return (
    <section className="w-full bg-[#101010] border-b border-[#DEDBC8]/10 py-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-noise" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          {PROOF_STRIP.map((item, index) => (
            <div key={item} className="flex flex-col items-center justify-center relative">
              {/* Divider lines between elements on desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-px h-6 bg-[#DEDBC8]/10" />
              )}
              
              <span className="text-xs md:text-sm font-mono font-bold tracking-wider text-[#DEDBC8]/80 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
