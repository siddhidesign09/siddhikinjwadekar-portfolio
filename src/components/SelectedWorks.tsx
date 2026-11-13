import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Project, PROJECTS } from "../data/portfolioData";
import { Link } from "../router/RouterContext";

interface SelectedWorksProps {
  onSelectProject?: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = () => {
  return (
    <section id="works" className="scroll-mt-24 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference typography and hierarchy */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5D5F5F]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Selected Works
          </h2>
          <p className="text-base sm:text-lg text-[#5D5F5F] max-w-2xl font-light">
            In-depth case studies covering complex workflow simplification, visual builders, multi-role ecosystems, and rapid design execution.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile (Change 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.id}
              href={project.route}
              className="group cursor-pointer flex flex-col justify-between rounded-xl bg-white border border-black/10 hover:border-black/30 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden text-inherit no-underline"
            >
              {/* Card Thumbnail / Preview Frame (16:10 consistent proportion) */}
              <div className={`relative aspect-[16/10] border-b border-black/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col justify-between ${
                project.id === "fitpulse" || project.id === "duolingo" ? "bg-white" : "bg-[#F5F3EC]"
              }`}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                      project.id === "duolingo"
                        ? "object-contain p-8"
                        : project.id === "fitpulse"
                          ? "object-contain p-3"
                          : "object-cover"
                    }`}
                  />
                )}

                {/* 4 Corner notches on thumbnail */}
                <span className="absolute top-2 left-2 z-20 w-2 h-2 border-t border-l border-black/30 group-hover:border-[#EA6C11] transition-colors" />
                <span className="absolute top-2 right-2 z-20 w-2 h-2 border-t border-r border-black/30 group-hover:border-[#EA6C11] transition-colors" />
                <span className="absolute bottom-2 right-2 z-20 w-2 h-2 border-b border-r border-black/30 group-hover:border-[#EA6C11] transition-colors" />
                <span className="absolute bottom-2 left-2 z-20 w-2 h-2 border-b border-l border-black/30 group-hover:border-[#EA6C11] transition-colors" />

                {/* Top Row in thumbnail */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-sm bg-white/95 backdrop-blur-xs border border-black/10 text-[11px] font-mono tracking-wider uppercase text-[#141414] shadow-2xs">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-sm bg-white/95 backdrop-blur-xs border border-black/10 text-xs font-mono text-[#141414] shadow-2xs">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Row in thumbnail */}
                <div className="flex items-center justify-end z-10">
                  <span className="px-2 py-0.5 rounded-sm bg-white/95 backdrop-blur-xs border border-black/10 text-[10px] font-mono text-[#141414] shadow-2xs">
                    {project.timeline}
                  </span>
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#5D5F5F] font-mono">
                    <span>{project.role}</span>
                    <span>·</span>
                    <span>{project.platform}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-[#141414] group-hover:text-black leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#5D5F5F] leading-relaxed line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Scope tags as clean unboxed typography (Anti-Pill discipline) */}
                <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5D5F5F]">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {tIdx < 2 && <span className="text-black/20">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#141414] group-hover:text-[#EA6C11] transition-colors">
                    Read Case Study
                  </span>
                  <div className="w-8 h-8 rounded-full border border-black/10 group-hover:border-[#EA6C11] group-hover:bg-[#EA6C11]/10 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 text-[#141414] group-hover:text-[#EA6C11] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
