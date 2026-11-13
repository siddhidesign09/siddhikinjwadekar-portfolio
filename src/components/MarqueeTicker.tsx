import React from "react";

const DISCIPLINES = [
  "Product Strategy",
  "Information Architecture",
  "User Research & Testing",
  "Design Systems & Tokens",
  "Wireframing & Prototyping",
  "Conversational UX & Flows",
  "Multi-Role SaaS Architecture",
  "Developer & Cross-Functional Alignment",
  "Usability Reviews",
  "Rapid 24-Hour Design Sprints"
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full border-y border-black/[0.08] bg-[#FAF9F5] py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
        {[...DISCIPLINES, ...DISCIPLINES].map((discipline, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#454747] hover:text-black transition-colors">
              {discipline}
            </span>
            <span className="text-[#EA6C11] text-xs font-serif">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
