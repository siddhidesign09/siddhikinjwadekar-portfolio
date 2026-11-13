import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Layers, Layout, Smartphone, Zap } from "lucide-react";
import { Link, useRouter } from "../router/RouterContext";
import { Project, PROJECTS } from "../data/portfolioData";
import { findProject } from "../utils/portfolioUtils";

interface CaseStudyDetailViewProps {
  projectSlug: string;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({ projectSlug }) => {
  const { navigate } = useRouter();
  const project = findProject(PROJECTS, projectSlug);
  const [activeSection, setActiveSection] = useState("overview");

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-3xl font-serif text-[#141414] mb-4">Case Study Not Found</h1>
        <p className="text-[#5D5F5F] mb-8">The requested project detail page could not be located.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-white text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    );
  }

  const sections = [
    { id: "overview", label: "Project Overview" },
    { id: "context", label: "Sector & Context" },
    { id: "impact", label: "Impact & Deliverables" },
    { id: "scope", label: "Scope & Responsibilities" },
    { id: "design-thinking", label: "Design Process" }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131]">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-black/[0.06] bg-[#FAF9F5]/80 backdrop-blur-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#EA6C11] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Works</span>
          </Link>

          <span className="text-[11px] font-mono text-[#8E9090]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Case Study Hero */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>{project.category} · {project.platform}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              {project.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Role</span>
              <span className="font-semibold text-[#141414] text-sm block">{project.role}</span>
              <span className="text-[#5D5F5F] text-[11px]">{project.platform}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Timeline</span>
              <span className="font-semibold text-[#141414] text-sm block">{project.timeline}</span>
              <span className="text-[#5D5F5F] text-[11px]">Design Execution</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Sector</span>
              <span className="font-semibold text-[#141414] text-sm block truncate">{project.sector}</span>
              <span className="text-[#5D5F5F] text-[11px]">{project.category}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Deliverables</span>
              <span className="font-semibold text-[#141414] text-xs block leading-tight">
                UX Research, Wireframes, High-Fidelity UI &amp; Prototyping
              </span>
            </div>
          </div>

          {/* Hero Visual Mockup Placeholder */}
          <div className="mt-12 relative rounded-2xl bg-gradient-to-br from-[#F5F2EB] to-[#ECE7DC] border border-black/10 p-8 sm:p-16 text-center space-y-4 shadow-sm">
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-black/30" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-black/30" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-black/30" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-black/30" />

            <div className="max-w-md mx-auto p-8 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-black">{project.title}</h3>
              <p className="text-xs text-[#5D5F5F]">{project.subtitle}</p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-black/50">
                [{project.placeholderLabel}]
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-36 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#141414] font-semibold">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[#EA6C11]">Navigation</span>
              </div>

              <nav className="space-y-1 text-xs font-medium">
                {sections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      setActiveSection(sec.id);
                      scrollTo(sec.id);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md transition-all flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-[#FAF9F5] text-[#141414] font-semibold border-l-2 border-[#EA6C11]"
                        : "text-[#5D5F5F] hover:text-black hover:bg-black/[0.02]"
                    }`}
                  >
                    <span className="truncate pr-2">
                      <span className="font-mono text-[10px] text-[#8E9090] mr-2">0{idx + 1}</span>
                      {sec.label}
                    </span>
                    {activeSection === sec.id && <ChevronRight className="w-3.5 h-3.5 text-[#EA6C11] shrink-0" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Case Study Content */}
          <main className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <section id="overview" className="scroll-mt-36 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">01 / OVERVIEW</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-[#454747] leading-relaxed">
                {project.summary}
              </p>
            </section>

            {/* Impact */}
            <section id="impact" className="scroll-mt-36 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">02 / IMPACT AT A GLANCE</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
                Impact &amp; Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-1">
                    <span className="text-xs font-mono text-[#8E9090] block">{metric.label}</span>
                    <h3 className="text-base font-semibold text-[#141414]">{metric.value}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Scope */}
            <section id="scope" className="scroll-mt-36 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">03 / RESPONSIBILITIES</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
                Scope &amp; Responsibilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-black/5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA6C11] shrink-0" />
                    <span className="text-xs font-medium text-[#2F3131]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Nav */}
            <div className="pt-12 border-t border-black/[0.08] flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Back to Selected Works</span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
