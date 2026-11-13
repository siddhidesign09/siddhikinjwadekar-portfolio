import React from "react";
import { ArrowDownRight, Download, Sparkles, User } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5D5F5F]">
              <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
              <span>Junior UI/UX Designer</span>
              <span className="text-black/30">/</span>
              <span>Pune, India</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              I design digital products that <span className="font-serif italic text-[#1F2121]">simplify complexity & scale</span>.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#5D5F5F] leading-relaxed max-w-2xl">
              Hi, I'm <strong className="font-medium text-[#141414]">Siddhi Kinjawadekar</strong>. I specialize in designing scalable digital product experiences—from business automation and conversational commerce to multi-role SaaS ecosystems.
            </p>

            <p className="text-sm sm:text-base text-[#5D5F5F] leading-relaxed max-w-2xl">
              My approach connects user research and information architecture with deliberate interface craft, ensuring complex systems feel approachable, predictable, and clear for every user.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#141414] hover:bg-black transition-all rounded-sm shadow-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#EA6C11] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="/assets/aistudio/Case_Studies_1bddce2b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#141414] bg-transparent border border-black/20 hover:border-black/60 transition-all rounded-sm"
              >
                <Download className="w-4 h-4 text-[#EA6C11]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

         
{/* Right Column: Designer Portrait */}
<div className="lg:col-span-5 flex justify-center lg:justify-end">
  <div className="relative w-full max-w-md">
    <div className="relative aspect-[4/5] rounded-xl border border-black/10 overflow-hidden shadow-sm">
      <img
        src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Self-Image/629c5d96-1208-408a-b075-038c17246546.jpeg"
        alt="Siddhi Kinjawadekar - UI/UX Designer"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
