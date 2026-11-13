import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Clock, 
  Sparkles, 
  Layers, 
  Check, 
  ChevronRight, 
  Bot, 
  Code2, 
  Briefcase, 
  ExternalLink,
  Target,
  FileText,
  Split,
  Eye,
  CheckCircle2
} from "lucide-react";
import { Link, useRouter } from "../router/RouterContext";

interface SectionNav {
  id: string;
  label: string;
}

const SECTIONS: SectionNav[] = [
  { id: "impact", label: "Impact at a Glance" },
  { id: "the-challenge", label: "The 24-Hour Challenge" },
  { id: "abun-overview", label: "Part A: Sprint 01 — Abun" },
  { id: "abun-problem", label: "Abun: Problem & Approach" },
  { id: "abun-decisions", label: "Abun: 3 Focused Decisions" },
  { id: "abun-outcome", label: "Abun: The Redesign Outcome" },
  { id: "servicehive-overview", label: "Part B: Sprint 02 — ServiceHive" },
  { id: "servicehive-problem", label: "ServiceHive: The Problem" },
  { id: "servicehive-landing", label: "ServiceHive: Landing Page Flow" },
  { id: "servicehive-outcome", label: "ServiceHive: The Outcome" },
  { id: "reflections", label: "What Both Sprints Taught Me" }
];

export const DesignSprintPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeSection, setActiveSection] = useState<string>("impact");
  const [activeSprintTab, setActiveSprintTab] = useState<"abun" | "servicehive">("abun");
  const [activeChatbotPath, setActiveChatbotPath] = useState<"technical" | "business">("technical");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <span className="text-[11px] font-mono text-[#8E9090] hidden sm:inline">
            Case Study 05 · 24-Hour Design Sprints
          </span>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>Rapid Design Sprints · AI Platforms · Web &amp; Conversational UI</span>
          </div>

          {/* Project Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              Design Decisions, Made Under Pressure
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              Two rapid design challenges exploring how clarity, trust and usability can be improved within 24 hours.
            </p>
          </div>

          {/* Introductory Narrative */}
          <div className="max-w-3xl space-y-3 pt-2 text-base sm:text-lg text-[#454747] leading-relaxed">
            <p>
              Not every design project gives you weeks to research, explore and refine. Sometimes you have just one day to understand a problem, decide what matters and turn your thinking into something tangible. That's what made these 24-hour UX design sprints interesting.
            </p>
            <p>
              I worked on two different experiences: an AI content platform called <strong>Abun</strong> and an AI-powered service platform concept called <strong>ServiceHive</strong>. Both required quick decisions, but each had a different problem to solve.
            </p>
          </div>

          {/* Metadata Grid matching reference 4-column layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">My Role</span>
              <span className="font-semibold text-[#141414] text-sm block">UI/UX Designer</span>
              <span className="text-[#5D5F5F] text-[11px]">24-Hour Design Sprints</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Project Scope</span>
              <span className="font-semibold text-[#141414] text-sm block">2 Sprints in 1 Case Study</span>
              <span className="text-[#5D5F5F] text-[11px]">Part A: Abun · Part B: ServiceHive</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Core Methodology</span>
              <span className="font-semibold text-[#141414] text-sm block">Rapid UX Analysis</span>
              <span className="text-[#5D5F5F] text-[11px]">Information Hierarchy &amp; High-Fi UI</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Key Deliverables</span>
              <span className="font-semibold text-[#141414] text-xs block leading-tight">
                UX Analysis, Information Architecture, Landing Page Redesign &amp; Conversational UI
              </span>
            </div>
          </div>

              {/* Hero Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                <img
                  src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/24hrs-sprint/Cover%20main%20image%2024hrs.png"
                  alt="Abun and ServiceHive 24-hour UX design sprint showcase"
                  className="block w-full h-auto"
                />
              </div>
          </div>
      </header>

      {/* Main Two-Column Case Study Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Table of Contents Navigation (Mandatory per reference) */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-36 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#141414] font-semibold">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[#EA6C11]">12 Sections</span>
              </div>

              <nav className="space-y-1 text-xs font-medium" aria-label="Case Study Table of Contents">
                {SECTIONS.map((sec, idx) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-all flex items-center justify-between group ${
                        isActive
                          ? "bg-[#FAF9F5] text-[#141414] font-semibold border-l-2 border-[#EA6C11]"
                          : "text-[#5D5F5F] hover:text-black hover:bg-black/[0.02]"
                      }`}
                    >
                      <span className="truncate pr-2">
                        <span className="font-mono text-[10px] text-[#8E9090] mr-2">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        {sec.label}
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#EA6C11] shrink-0" />}
                    </button>
                  );
                })}
              </nav>

              
            </div>
          </aside>

          {/* Mobile TOC bar */}
          <div className="lg:hidden col-span-1 mb-8 p-4 rounded-xl bg-white border border-black/10 sticky top-32 z-30 shadow-xs">
            <label htmlFor="mobile-toc-sprint" className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-2">
              Jump to Section
            </label>
            <select
              id="mobile-toc-sprint"
              value={activeSection}
              onChange={(e) => scrollTo(e.target.value)}
              className="w-full text-xs font-medium bg-[#FAF9F5] border border-black/15 rounded-md p-2.5 text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#EA6C11]"
            >
              {SECTIONS.map((sec, idx) => (
                <option key={sec.id} value={sec.id}>
                  {idx + 1}. {sec.label}
                </option>
              ))}
            </select>
          </div>

          {/* Right Column: Main Case Study Narrative & Deliverables */}
          <main className="lg:col-span-8 space-y-20 sm:space-y-28">

            {/* Section 1: Impact at a Glance */}
            <section id="impact" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>01</span>
                <span>/</span>
                <span>OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Impact at a Glance
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Format</span>
                  <h3 className="text-lg font-semibold text-[#141414]">24-Hour Sprints</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Rapid problem analysis, design exploration, and high-fidelity execution within 24 hours.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Challenges</span>
                  <h3 className="text-lg font-semibold text-[#141414]">2 Platforms</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Abun (AI content platform) and ServiceHive (AI service platform concept).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Design Directions</span>
                  <h3 className="text-lg font-semibold text-[#141414]">2 Distinct Styles</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    A light, approachable AI content UI and a dark, tech-focused service &amp; chatbot experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The 24-Hour Challenge */}
            <section id="the-challenge" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>02</span>
                <span>/</span>
                <span>CONTEXT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The 24-Hour Challenge
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#454747] leading-relaxed">
                <p>
                  Not every design project gives you weeks to research, explore and refine. Sometimes you have just one day to understand a problem, decide what matters and turn your thinking into something tangible. That's what made these 24-hour UX design sprints interesting.
                </p>
                <p>
                  I worked on two different experiences: an AI content platform called <strong>Abun</strong> and an AI-powered service platform concept called <strong>ServiceHive</strong>. Both required quick decisions, but each had a different problem to solve.
                </p>
                
                <div className="p-6 rounded-xl bg-[#141414] text-white space-y-2 my-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">Sprint Principle</span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "When time is limited, knowing what not to design becomes just as important."
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Part A: Sprint 01 — Abun */}
            <section id="abun-overview" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                <span>03</span>
                <span>/</span>
                <span>PART A · SPRINT 01</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Sprint 01 — Abun: Making an AI Content Platform Easier to Understand
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Abun is an AI-powered content and SEO platform. The primary audience included small business owners, content creators and marketing professionals looking for simpler ways to manage AI-assisted content.
                </p>
                <p>
                  The redesign challenge was to improve the clarity, structure and visual presentation of its website so visitors could understand the product's value more quickly.
                </p>
              </div>
            </section>

            {/* Section 4: Abun Problem & Approach */}
            <section id="abun-problem" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>04</span>
                <span>/</span>
                <span>ABUN PROBLEM &amp; APPROACH</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Problem &amp; Focused Questions
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  AI products can offer a lot of capabilities, but communicating those capabilities clearly is a challenge of its own. A visitor shouldn't have to read through a complicated landing page to understand what a product does or why it might be useful.
                </p>
                
                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#EA6C11] block mb-1">
                    The Abun Design Question
                  </span>
                  <p className="text-lg font-serif text-[#141414]">
                    "How might we make Abun's value easier to understand while creating a clearer path toward trying the product?"
                  </p>
                </div>

                <p className="pt-2">
                  A short design sprint doesn't leave much room for exploring every possible solution. I had to understand the core problem quickly, identify the most important user needs and prioritize changes that would make the biggest difference. Rather than trying to redesign everything, I focused on four questions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-lg bg-white border border-black/10 font-mono text-xs">
                    <span className="text-[#EA6C11] font-semibold block mb-1">01. What should users understand first?</span>
                    <p className="text-[#5D5F5F]">Immediate value proposition without AI jargon.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 font-mono text-xs">
                    <span className="text-[#EA6C11] font-semibold block mb-1">02. Where might they feel confused?</span>
                    <p className="text-[#5D5F5F]">Overlapping feature lists and unclear pricing models.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 font-mono text-xs">
                    <span className="text-[#EA6C11] font-semibold block mb-1">03. What action should they take next?</span>
                    <p className="text-[#5D5F5F]">Zero-friction trial without credit card friction.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 font-mono text-xs">
                    <span className="text-[#EA6C11] font-semibold block mb-1">04. How can UI make it clearer?</span>
                    <p className="text-[#5D5F5F]">Progressive reading hierarchy and single primary CTA.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Abun 3 Focused Decisions */}
            <section id="abun-decisions" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>05</span>
                <span>/</span>
                <span>ABUN DESIGN DECISIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Three Focused Design Decisions
              </h2>

              <div className="space-y-6 pt-2">
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">01.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Making information easier to scan</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    I started by looking at how the landing page communicated its information. The focus was on identifying what users needed to see first and how the content could be organized into a more natural reading flow. I reorganized the layout to create a clearer sequence between the product introduction, benefits and next action. The goal was to help visitors understand the offering without having to process too much information at once.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">02.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Creating a consistent visual language</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    I then explored a cleaner visual direction. I introduced a light, modern interface with a more consistent approach to typography, spacing, colours and components. Subtle gradients helped establish a contemporary visual identity while keeping the overall experience approachable.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">03.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Giving the page one clear direction</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Instead of competing calls to action, I emphasized <strong>Start for Free</strong> as the primary next step. This helped establish a clearer visual and interaction hierarchy.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Abun Outcome */}
            <section id="abun-outcome" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>06</span>
                <span>/</span>
                <span>ABUN OUTCOME</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Abun Outcome
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  The sprint produced a high-fidelity landing page redesign focused on clearer messaging, more consistent visual hierarchy and a simplified path toward product exploration.
                </p>
                <p>
                  The project demonstrated how a small number of focused design decisions can improve the clarity of a digital experience without requiring a complete product redesign.
                </p>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/24hrs-sprint/Abun%20Landing%20Page.jpg"
                    alt="Original Abun website alongside the redesigned landing page"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 7: Part B: Sprint 02 — ServiceHive */}
            <section id="servicehive-overview" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600">
                <span>07</span>
                <span>/</span>
                <span>PART B · SPRINT 02</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Sprint 02 — ServiceHive: Designing a Clearer AI Service Experience
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  The second challenge focused on <strong>ServiceHive</strong>, an AI service platform concept.
                </p>
                <p>
                  Unlike Abun, this experience needed to communicate a more technology-oriented offering while supporting visitors with different goals. Some users would be interested in technical capabilities and integrations. Others would want to understand business value, pricing or how to schedule a demonstration.
                </p>
                <p>
                  I wanted the design to support both without overwhelming either group.
                </p>
              </div>
            </section>

            {/* Section 8: ServiceHive Problem */}
            <section id="servicehive-problem" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>08</span>
                <span>/</span>
                <span>SERVICEHIVE PROBLEM</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Problem: Different Users, Different Answers
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Not every visitor comes to a website looking for the same answer.
                </p>
                <p>
                  A technical decision-maker might want documentation or integration details. A business manager might care more about benefits, cost and the next steps.
                </p>
                <p>
                  If both users are presented with the same undifferentiated information, the experience becomes harder to navigate.
                </p>

                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 block mb-1">
                    The ServiceHive Design Question
                  </span>
                  <p className="text-lg font-serif text-[#141414]">
                    "How might we help visitors find the information relevant to them while keeping the overall experience clear and trustworthy?"
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: ServiceHive Landing Page Flow */}
            <section id="servicehive-landing" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>09</span>
                <span>/</span>
                <span>LANDING PAGE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing the Landing Page
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I structured the experience around a simple progression:
                </p>

                {/* Flow Diagram */}
                <div className="p-6 rounded-xl bg-white border border-black/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-semibold text-black">
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Awareness</span>
                    <span className="text-cyan-600">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Trust</span>
                    <span className="text-cyan-600">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Benefits</span>
                    <span className="text-cyan-600">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Action</span>
                  </div>
                  <p className="text-xs text-[#5D5F5F] pt-3 leading-relaxed">
                    The idea was to first help visitors understand the offering, then build confidence and guide them toward an appropriate next step.
                  </p>
                </div>

                <p className="pt-2">
                  I explored a dark visual direction with blue accents to communicate a technology-focused identity. Consistent spacing, typography and visual hierarchy helped make the content easier to navigate. I also introduced prominent calls to action to keep important next steps accessible.
                </p>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/24hrs-sprint/Slide%2016_9%20-%201.jpg"
                    alt="ServiceHive landing page exploration and high-fidelity design"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            

            {/* Section 10: ServiceHive Outcome */}
            <section id="servicehive-outcome" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>11</span>
                <span>/</span>
                <span>SERVICEHIVE OUTCOME</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The ServiceHive Outcome
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  The final concept combines a structured landing page with a dual-path conversational experience.
                </p>
                <p>
                  The landing page introduces the service and communicates its value, while the chatbot offers more focused assistance based on the visitor's needs.
                </p>
                <p>
                  Together, they demonstrate an approach to balancing product communication, user trust and task-oriented interaction.
                </p>
              </div>
            </section>

            {/* Section 11: What Both Sprints Taught Me */}
            <section id="reflections" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>12</span>
                <span>/</span>
                <span>RETROSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                What Both Sprints Taught Me
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  These projects were different in visual style and product context, but they taught me a similar lesson.
                </p>
                <p>
                  Under time pressure, it's easy to jump straight into making screens look better. The more useful approach is to identify the problem first, decide what matters most and make every design decision support that priority.
                </p>
                <p>
                  Working within a 24-hour format helped me become more deliberate about information hierarchy, visual consistency and user journeys. It also pushed me to communicate design decisions more clearly instead of relying on visual polish alone.
                </p>
                <p>
                  These sprints reminded me that a thoughtful design process doesn't always need to be long. What matters is being able to understand the problem, prioritize the right decisions and create a solution that responds to real user needs.
                </p>

                {/* Big Takeaway Card */}
                <div className="p-8 rounded-2xl bg-[#141414] text-white space-y-3 mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                    My Biggest Takeaway
                  </span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "Designing quickly isn't about skipping the thinking. It's about knowing where to focus it."
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Case Study Navigation */}
            <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="button"
                onClick={() => navigate("/work/duolingo-conversational-confidence")}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Prev Project: Duolingo</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white hover:bg-black text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Return to All Selected Works</span>
                <ArrowRight className="w-4 h-4 text-[#EA6C11]" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
