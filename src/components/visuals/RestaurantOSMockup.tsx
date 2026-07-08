import React from "react";

export function RestaurantOSMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RestaurantOS interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#FAF4EE"/>
      {/* Header */}
      <rect width="800" height="44" fill="#A05C1A"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="white" opacity=".7">RestaurantOS</text>
      <text x="16" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="white">The Spice Garden · 7:42 PM · 6 tables active</text>
      <rect x="644" y="12" width="140" height="22" rx="4" fill="white" opacity=".2"/>
      <text x="714" y="27" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">₹ 18,240 today</text>

      {/* Floor plan */}
      <rect x="16" y="56" width="260" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#A05C1A">FLOOR PLAN</text>
      
      {/* Tables */}
      <rect x="28" y="88" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T1</text>
      <text x="58" y="127" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">4 pax</text>
      
      <rect x="100" y="88" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="130" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T2</text>
      <text x="130" y="127" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">2 pax</text>
      
      <rect x="172" y="88" width="60" height="56" rx="6" fill="#E5E8ED" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="202" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="middle">T3</text>
      <text x="202" y="127" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Free</text>

      <rect x="28" y="156" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T4</text>
      <text x="58" y="195" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">6 pax</text>
      
      <rect x="100" y="156" width="60" height="56" rx="6" fill="#E5E8ED" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="130" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="middle">T5</text>
      <text x="130" y="195" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Free</text>
      
      <rect x="172" y="156" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="202" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T6</text>
      <text x="202" y="195" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">2 pax</text>

      <rect x="28" y="224" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="247" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T7</text>
      <text x="58" y="263" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">4 pax</text>
      
      <rect x="100" y="224" width="60" height="56" rx="6" fill="#D4AC0D"/>
      <text x="130" y="247" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T8</text>
      <text x="130" y="263" font-family="sans-serif" font-size="9" fill="white" text-anchor="middle">Billing</text>
      
      <rect x="172" y="224" width="60" height="56" rx="6" fill="#E5E8ED" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="202" y="247" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="middle">T9</text>
      <text x="202" y="263" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Free</text>

      {/* Active order panel */}
      <rect x="288" y="56" width="260" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <rect x="288" y="56" width="260" height="36" rx="8" fill="#A05C1A"/>
      <rect x="288" y="74" width="260" height="18" fill="#A05C1A"/>
      <text x="418" y="79" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">Table 4 — Order #112</text>
      <text x="418" y="94" font-family="sans-serif" font-size="10" fill="white" opacity=".8" text-anchor="middle">6 guests · opened 7:18 PM</text>

      <rect x="300" y="104" width="236" height="1" fill="#E5E8ED"/>
      <text x="300" y="118" font-family="sans-serif" font-size="10" fill="#6B6B6B">Item</text>
      <text x="500" y="118" font-family="sans-serif" font-size="10" fill="#6B6B6B" text-anchor="end">Qty</text>
      <text x="524" y="118" font-family="sans-serif" font-size="10" fill="#6B6B6B" text-anchor="end">Price</text>

      <text x="300" y="136" font-family="sans-serif" font-size="11" fill="#1A2B4C" font-weight="600">Paneer Butter Masala</text>
      <text x="500" y="136" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">×2</text>
      <text x="524" y="136" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹640</text>
      
      <text x="300" y="154" font-family="sans-serif" font-size="11" fill="#1A2B4C" font-weight="600">Dal Makhani</text>
      <text x="500" y="154" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">×1</text>
      <text x="524" y="154" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹280</text>
      
      <text x="300" y="172" font-family="sans-serif" font-size="11" fill="#1A2B4C" font-weight="600">Garlic Naan</text>
      <text x="500" y="172" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">×6</text>
      <text x="524" y="172" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹300</text>
      
      <text x="300" y="190" font-family="sans-serif" font-size="11" fill="#1A2B4C" font-weight="600">Chicken Biryani</text>
      <text x="500" y="190" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">×2</text>
      <text x="524" y="190" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹560</text>
      
      <text x="300" y="208" font-family="sans-serif" font-size="11" fill="#1A2B4C" font-weight="600">Mango Lassi</text>
      <text x="500" y="208" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">×4</text>
      <text x="524" y="208" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹360</text>

      <rect x="300" y="218" width="236" height="1" fill="#E5E8ED"/>
      <text x="300" y="234" font-family="sans-serif" font-size="11" fill="#6B6B6B">Subtotal</text>
      <text x="524" y="234" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">₹2,140</text>
      
      <text x="300" y="250" font-family="sans-serif" font-size="11" fill="#6B6B6B">GST (5%)</text>
      <text x="524" y="250" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">₹107</text>
      
      <text x="300" y="268" font-family="sans-serif" font-size="13" font-weight="700" fill="#1A2B4C">Total</text>
      <text x="524" y="268" font-family="sans-serif" font-size="13" font-weight="700" fill="#1A2B4C" text-anchor="end">₹2,247</text>

      <rect x="300" y="284" width="114" height="32" rx="4" fill="#A05C1A"/>
      <text x="357" y="304" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">Print bill</text>
      
      <rect x="422" y="284" width="114" height="32" rx="4" fill="#FAF4EE" stroke="#A05C1A" stroke-width="1.5"/>
      <text x="479" y="304" font-family="sans-serif" font-size="11" font-weight="700" fill="#A05C1A" text-anchor="middle">Add items</text>

      {/* Kitchen queue panel */}
      <rect x="560" y="56" width="224" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="572" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#A05C1A">KITCHEN QUEUE</text>
      <text x="764" y="78" font-family="sans-serif" font-size="10" fill="#6B6B6B" text-anchor="end">3 tickets</text>

      <rect x="572" y="86" width="200" height="66" rx="6" fill="#FFF3E0" stroke="#E07A20" stroke-width="1.5"/>
      <text x="584" y="103" font-family="sans-serif" font-size="10" font-weight="700" fill="#E07A20">T1 · #108 · 18 min ago</text>
      <text x="584" y="119" font-family="sans-serif" font-size="11" fill="#1A2B4C">Chicken Tikka ×1</text>
      <text x="584" y="135" font-family="sans-serif" font-size="11" fill="#1A2B4C">Butter Chicken ×2</text>
      <rect x="680" y="134" width="82" height="12" rx="3" fill="#E07A20" opacity=".2"/>
      <text x="721" y="143" font-family="sans-serif" font-size="9" fill="#E07A20" font-weight="700" text-anchor="middle">PREPARING</text>

      <rect x="572" y="160" width="200" height="54" rx="6" fill="#F2F7F3" stroke="#5A7F5E" stroke-width="1.5"/>
      <text x="584" y="177" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E">T4 · #112 · 7 min ago</text>
      <text x="584" y="193" font-family="sans-serif" font-size="11" fill="#1A2B4C">Dal Makhani ×1, Biryani ×2</text>
      <rect x="680" y="198" width="82" height="12" rx="3" fill="#5A7F5E" opacity=".2"/>
      <text x="721" y="207" font-family="sans-serif" font-size="9" fill="#5A7F5E" font-weight="700" text-anchor="middle">FIRED</text>

      <rect x="572" y="222" width="200" height="44" rx="6" fill="#F4F6FA" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="584" y="239" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">T6 · #113 · just now</text>
      <text x="584" y="255" font-family="sans-serif" font-size="11" fill="#1A2B4C">Garlic Naan ×4</text>

      <rect x="572" y="282" width="200" height="36" rx="4" fill="#A05C1A"/>
      <text x="672" y="304" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">Mark T4 as ready</text>
    </svg>
  );
}
