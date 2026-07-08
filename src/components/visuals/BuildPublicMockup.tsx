import React from "react";

export function BuildPublicMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BuildPublic interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F0F4F1"/>
      {/* Header */}
      <rect width="800" height="44" fill="#2A5A3A"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="white" opacity=".7">BuildPublic</text>
      <text x="16" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Meera Iyer · Fieldnotes app</text>
      <text x="780" y="20" font-family="sans-serif" font-size="10" fill="white" opacity=".7" text-anchor="end">Public page live</text>
      <rect x="668" y="24" width="116" height="14" rx="7" fill="white" opacity=".15"/>
      <text x="726" y="34" font-family="sans-serif" font-size="9" fill="white" opacity=".7" text-anchor="middle">fieldnotes.buildpublic.co</text>

      {/* Private side */}
      <rect x="16" y="56" width="380" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <rect x="16" y="56" width="380" height="36" rx="8" fill="#1A2B4C" opacity=".06"/>
      <rect x="16" y="74" width="380" height="18" fill="#1A2B4C" opacity=".06"/>
      <text x="28" y="76" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">MY TASKS</text>
      <rect x="316" y="64" width="68" height="20" rx="4" fill="#2A5A3A"/>
      <text x="350" y="78" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">🔒 Private</text>

      <text x="28" y="112" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">THIS WEEK</text>
      <rect x="28" y="118" width="14" height="14" rx="3" fill="#2A5A3A"/>
      <text x="35" y="129" font-family="sans-serif" font-size="9" fill="white" text-anchor="middle">✓</text>
      <text x="50" y="130" font-family="sans-serif" font-size="12" fill="#6B6B6B" text-decoration="line-through">Launch beta waitlist page</text>

      <rect x="28" y="140" width="14" height="14" rx="3" fill="#2A5A3A"/>
      <text x="35" y="151" font-family="sans-serif" font-size="9" fill="white" text-anchor="middle">✓</text>
      <text x="50" y="152" font-family="sans-serif" font-size="12" fill="#6B6B6B" text-decoration="line-through">Write first 3 blog posts</text>

      <rect x="28" y="162" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5"/>
      <text x="50" y="174" font-family="sans-serif" font-size="12" fill="#1A2B4C" font-weight="600">Get 50 waitlist signups</text>
      <text x="382" y="174" font-family="sans-serif" font-size="10" fill="#E07A20" text-anchor="end" font-weight="600">↑ 31 so far</text>

      <rect x="28" y="184" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5"/>
      <text x="50" y="196" font-family="sans-serif" font-size="12" fill="#1A2B4C">Cold email 20 potential users</text>

      <rect x="28" y="206" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5"/>
      <text x="50" y="218" font-family="sans-serif" font-size="12" fill="#1A2B4C">Record product demo video</text>

      <text x="28" y="242" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">NEXT WEEK</text>
      <rect x="28" y="248" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5" opacity=".5"/>
      <text x="50" y="260" font-family="sans-serif" font-size="12" fill="#6B6B6B">Launch on Product Hunt</text>
      
      <rect x="28" y="268" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5" opacity=".5"/>
      <text x="50" y="280" font-family="sans-serif" font-size="12" fill="#6B6B6B">Onboard first 10 beta users</text>
      
      <rect x="28" y="288" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" stroke-width="1.5" opacity=".5"/>
      <text x="50" y="300" font-family="sans-serif" font-size="12" fill="#6B6B6B">Integrate Stripe payments</text>

      {/* Divider */}
      <rect x="404" y="56" width="2" height="272" fill="#2A5A3A" opacity=".2"/>
      <rect x="396" y="180" width="18" height="18" rx="9" fill="#2A5A3A"/>
      <text x="405" y="192" font-family="sans-serif" font-size="10" fill="white" text-anchor="middle">→</text>

      {/* Public log side */}
      <rect x="414" y="56" width="370" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <rect x="414" y="56" width="370" height="36" rx="8" fill="#2A5A3A" opacity=".08"/>
      <rect x="414" y="74" width="370" height="18" fill="#2A5A3A" opacity=".08"/>
      <text x="426" y="74" font-family="sans-serif" font-size="11" font-weight="700" fill="#2A5A3A">PUBLIC PROGRESS LOG</text>
      <rect x="700" y="64" width="72" height="20" rx="4" fill="#E4F0E6"/>
      <text x="736" y="78" font-family="sans-serif" font-size="9" font-weight="700" fill="#2A5A3A" text-anchor="middle">🌐 Public</text>

      <rect x="426" y="100" width="4" height="200" rx="2" fill="#E4F0E6"/>

      <circle cx="428" cy="112" r="5" fill="#2A5A3A"/>
      <text x="444" y="107" font-family="sans-serif" font-size="10" fill="#6B6B6B">Today, 11:42 AM</text>
      <text x="444" y="122" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Waitlist hit 31 signups 🎉</text>
      <text x="444" y="138" font-family="sans-serif" font-size="11" fill="#6B6B6B">Running DMs to researchers. Target 50 by Friday.</text>

      <circle cx="428" cy="176" r="5" fill="#2A5A3A" opacity=".6"/>
      <text x="444" y="171" font-family="sans-serif" font-size="10" fill="#6B6B6B">Yesterday</text>
      <text x="444" y="186" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Published post #3: &quot;Why notes app in 2026&quot;</text>
      <text x="444" y="202" font-family="sans-serif" font-size="11" fill="#6B6B6B">280 readers. Best post so far.</text>

      <circle cx="428" cy="240" r="5" fill="#2A5A3A" opacity=".4"/>
      <text x="444" y="235" font-family="sans-serif" font-size="10" fill="#6B6B6B">30 Jun</text>
      <text x="444" y="250" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Beta waitlist page went live</text>
      <text x="444" y="266" font-family="sans-serif" font-size="11" fill="#6B6B6B">Built in 2 days. Tracked publicly.</text>
      
      <rect x="426" y="308" width="346" height="12" rx="3" fill="#2A5A3A" opacity=".1"/>
      <text x="599" y="318" font-family="sans-serif" font-size="9" font-weight="700" fill="#2A5A3A" text-anchor="middle">+ Share a new update</text>
    </svg>
  );
}
