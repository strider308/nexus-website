import { PROOF_STRIP } from "@/lib/content/nexus";

export function ProofStrip() {
  return (
    <section className="w-full bg-[#1A2B4C] border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          {PROOF_STRIP.map((item, index) => (
            <div key={item} className="flex flex-col items-center justify-center relative">
              {/* Divider lines between elements on desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-px h-6 bg-white/15" />
              )}
              
              <span className="text-xs md:text-sm font-mono font-bold tracking-wider text-white/70 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
