import React from "react";
import { PHILOSOPHY_PILLARS } from "../data/portfolioData";

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4ED] border-y border-black/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5D5F5F]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#141414] max-w-3xl">
            Expertise built through shipping complex products
          </h2>
          <p className="text-base sm:text-lg text-[#5D5F5F] max-w-2xl font-light">
            Principles grounded in continuous discovery, cross-functional ownership, and rigorous craft.
          </p>
        </div>

        {/* 6-Card Grid matching reference structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl bg-[#FAF9F5] border border-black/10 hover:border-black/30 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Corner L-markers */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black/20 group-hover:border-[#EA6C11] transition-colors" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-black/20 group-hover:border-[#EA6C11] transition-colors" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-black/20 group-hover:border-[#EA6C11] transition-colors" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-black/20 group-hover:border-[#EA6C11] transition-colors" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#EA6C11]">
                    {pillar.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-[#EA6C11] transition-colors" />
                </div>

                <h3 className="text-xl font-normal text-[#141414] tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#5D5F5F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
