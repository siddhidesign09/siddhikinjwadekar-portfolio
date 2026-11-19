import React, { useState } from "react";
import { Figma, Cpu, Compass, Eye, Users, Check, ArrowRight } from "lucide-react";
import { DESIGN_PROCESS_STEPS } from "../data/portfolioData";

export const ToolkitBento: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5D5F5F]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>TOOLKIT & PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            I'm highly skilled in the tools that matter.
          </h2>
          <p className="text-base sm:text-lg text-[#5D5F5F] max-w-2xl font-light">
            Modern tools, systematic workflows, and structured discovery methods that turn ideas into scalable digital products.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Bento Card 1: Figma & Design Systems (col-span-1 md:col-span-7) */}
          <div className="col-span-1 md:col-span-7 min-w-0 rounded-xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-black/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-black/10 flex items-center justify-center text-[#141414]">
                <Figma className="w-5 h-5 text-[#EA6C11]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#141414]">
                Figma & Design Systems
              </h3>
              <p className="text-sm sm:text-base text-[#5D5F5F] leading-relaxed">
                Expert-level UI/UX design, interactive prototyping, auto-layout architecture, and multi-tier component libraries with design tokens for seamless engineering handoff.
              </p>
            </div>

            {/* Visual token representation */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2.5 rounded bg-[#FAF9F5] border border-black/5 text-center">
                <span className="text-[10px] font-mono text-black/50 block">Design Tokens</span>
                <span className="text-xs font-semibold text-black">Spacing & Radius</span>
              </div>
              <div className="p-2.5 rounded bg-[#FAF9F5] border border-black/5 text-center">
                <span className="text-[10px] font-mono text-black/50 block">Auto-Layout</span>
                <span className="text-xs font-semibold text-black">Responsive UI</span>
              </div>
              <div className="p-2.5 rounded bg-[#FAF9F5] border border-black/5 text-center">
                <span className="text-[10px] font-mono text-black/50 block">Components</span>
                <span className="text-xs font-semibold text-black">Variants & Slots</span>
              </div>
              <div className="p-2.5 rounded bg-[#FAF9F5] border border-black/5 text-center">
                <span className="text-[10px] font-mono text-black/50 block">Handoff</span>
                <span className="text-xs font-semibold text-black">Dev Ready</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Modern AI & Prototyping Workflows (col-span-1 md:col-span-5) */}
          <div className="col-span-1 md:col-span-5 min-w-0 rounded-xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-black/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-black/10 flex items-center justify-center text-[#141414]">
                <Cpu className="w-5 h-5 text-[#EA6C11]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#141414]">
                AI & Rapid Prototyping
              </h3>
              <p className="text-sm text-[#5D5F5F] leading-relaxed">
                Leveraging modern AI-assisted workflows and low-fidelity tools like Whimsical for rapid user journey mapping, stress-testing edge cases, and 24-hour sprint execution.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#5D5F5F] font-mono">
              <span>Velocity & Validation</span>
              <span className="text-[#EA6C11]">✦ High Agility</span>
            </div>
          </div>
          {/* Bento Card 3: User Research & Usability Testing (col-span-1 md:col-span-5) */}
          <div className="col-span-1 md:col-span-5 min-w-0 rounded-xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-black/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-black/10 flex items-center justify-center text-[#141414]">
                <Eye className="w-5 h-5 text-[#EA6C11]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#141414]">
                User Research & Testing
              </h3>
              <p className="text-sm text-[#5D5F5F] leading-relaxed">
                On-site contextual research, stakeholder interviews, heuristic evaluations, and error-recovery validation. Designing for real user pain points, not guesses.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-xs text-[#5D5F5F]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono">Tested with real business users</span>
            </div>
          </div>

          {/* Bento Card 4: Cross-Functional Alignment (col-span-1 md:col-span-7) */}
          <div className="col-span-1 md:col-span-7 min-w-0 rounded-xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-black/30 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-black/10 flex items-center justify-center text-[#141414]">
                <Users className="w-5 h-5 text-[#EA6C11]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#141414]">
                Cross-Functional Collaboration
              </h3>
              <p className="text-sm sm:text-base text-[#5D5F5F] leading-relaxed">
                Working in lockstep with product managers, developers, and founders. Bridging technical constraints (like WhatsApp API rules) into clear interface decisions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-3 text-xs font-mono text-[#5D5F5F]">
              <span className="px-3 py-1 bg-[#FAF9F5] rounded border border-black/5">Product Team</span>
              <span className="px-3 py-1 bg-[#FAF9F5] rounded border border-black/5">Engineering Alignment</span>
              <span className="px-3 py-1 bg-[#FAF9F5] rounded border border-black/5">Business Stakeholders</span>
            </div>
          </div>

          {/* Bento Card 5: Interactive Design Process Stepper (col-span-1 md:col-span-12) */}
          <div className="col-span-1 md:col-span-12 min-w-0 rounded-xl bg-[#FAF9F5] border border-black/10 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                  END-TO-END METHODOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#141414] mt-1">
                  My Design Process
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8E9090]">
                Step 0{activeStep + 1} of 05
              </span>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-black/10 pb-4">
              {DESIGN_PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col text-left p-3 rounded-lg transition-all ${
                    activeStep === idx
                      ? "bg-white shadow-xs border border-black/10 text-[#141414]"
                      : "text-[#5D5F5F] hover:text-black hover:bg-black/[0.02]"
                  }`}
                >
                  <span className="text-[11px] font-mono font-medium text-[#EA6C11]">
                    {step.step}
                  </span>
                  <span className="text-sm font-semibold tracking-tight">
                    {step.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <div className="mt-6 p-6 rounded-lg bg-white border border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#FAF9F5] text-[#EA6C11] border border-[#EA6C11]/20">
                  Phase {DESIGN_PROCESS_STEPS[activeStep].step} · {DESIGN_PROCESS_STEPS[activeStep].name}
                </div>
                <h4 className="text-lg sm:text-xl font-normal text-[#141414]">
                  {DESIGN_PROCESS_STEPS[activeStep].title}
                </h4>
                <p className="text-sm text-[#5D5F5F] leading-relaxed">
                  {DESIGN_PROCESS_STEPS[activeStep].detail}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 4))}
                  className="px-3 py-1.5 text-xs font-mono border border-black/10 rounded hover:bg-slate-50 transition-colors"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < 4 ? prev + 1 : 0))}
                  className="px-3 py-1.5 text-xs font-mono text-white bg-[#141414] rounded hover:bg-black transition-colors"
                >
                  Next Step ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
