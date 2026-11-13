import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Layers, 
  GitBranch, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  Workflow, 
  Sliders, 
  Check, 
  ShieldCheck, 
  Split,
  Eye,
  FileCode,
  CornerDownRight,
  Maximize2
} from "lucide-react";
import { Link, useRouter } from "../router/RouterContext";

interface SectionNav {
  id: string;
  label: string;
}

const SECTIONS: SectionNav[] = [
  { id: "impact", label: "Impact at a Glance" },
  { id: "product-summary", label: "The Product in 30 Seconds" },
  { id: "the-problem", label: "The Problem" },
  { id: "flow-ecosystem", label: "Understanding the Ecosystem" },
  { id: "core-insight", label: "The Insight That Changed My Approach" },
  { id: "mental-model", label: "Creating a Clear Mental Model" },
  { id: "exploring-design", label: "Exploring the Design" },
  { id: "conditional-logic", label: "The Hardest Part: Conditional Logic" },
  { id: "validation-errors", label: "Validation & Error Handling" },
  { id: "lifecycle-states", label: "Designing Beyond Creation" },
  { id: "wireframes-to-final", label: "From Exploration to Final Design" },
  { id: "reflections", label: "What This Project Taught Me" }
];

export const BitaminWhatsAppFlowsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeSection, setActiveSection] = useState<string>("impact");

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
            Case Study 02 · FORK
          </span>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>B2B SaaS · Conversational Automation · Web Application</span>
          </div>

          {/* Project Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              Making Complex WhatsApp Journeys Easier to Build
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              Designing a visual Flow builder that turns technical configurations into understandable interactions.
            </p>
          </div>

          {/* Introductory Narrative */}
          <div className="max-w-3xl space-y-3 pt-2 text-base sm:text-lg text-[#454747] leading-relaxed">
            <p>
              Creating an interactive WhatsApp journey sounds straightforward until you start thinking about everything happening behind each interaction. A user selects an option. That response needs to be stored. A condition decides what happens next. Another screen appears. And the entire experience needs to follow WhatsApp's technical rules.
            </p>
            <p>
              At FORK, I worked on translating that complexity into a visual Flow-building experience that business users could understand without writing JSON or configuring backend logic.
            </p>
          </div>

          {/* Metadata Grid matching reference 4-column layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">My Role</span>
              <span className="font-semibold text-[#141414] text-sm block">UX / Product Designer</span>
              <span className="text-[#5D5F5F] text-[11px]">Platform: Web Application</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Team &amp; Stakeholders</span>
              <span className="font-semibold text-[#141414] text-sm block">Product Team</span>
              <span className="text-[#5D5F5F] text-[11px]">Stakeholders &amp; Developers</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Timeline &amp; Scope</span>
              <span className="font-semibold text-[#141414] text-sm block">3 Months</span>
              <span className="text-[#5D5F5F] text-[11px]">End-to-End Design</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Responsibilities</span>
              <span className="font-semibold text-[#141414] text-xs block leading-tight">
                Product Research, UX Architecture, Interaction Design, User Flows, Wireframing, UI Design, Prototyping &amp; Usability Review
              </span>
            </div>
          </div>
              {/* Hero Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                <img
                  src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/1st%20image%20Flows.jpg"
                  alt="FORK WhatsApp Flow builder showing connected screens and component settings"
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
            <label htmlFor="mobile-toc-flows" className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-2">
              Jump to Section
            </label>
            <select
              id="mobile-toc-flows"
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
                  <span className="text-xs font-mono text-[#EA6C11] block">Core Focus</span>
                  <h3 className="text-lg font-semibold text-[#141414]">Visual Understanding</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Helping business users understand screens, components, data, and outcomes visually without code.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Interaction Approaches</span>
                  <h3 className="text-lg font-semibold text-[#141414]">5 Logic Directions</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Different interaction patterns explored to introduce IF / SWITCH conditional branching intuitively.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Scope</span>
                  <h3 className="text-lg font-semibold text-[#141414]">End-to-End Design</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    From initial Flow canvas creation to real-time validation and lifecycle management.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The Product in 30 Seconds */}
            <section id="product-summary" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>02</span>
                <span>/</span>
                <span>CONTEXT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Product in 30 Seconds
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#454747] leading-relaxed">
                <p>
                  WhatsApp Flows allows businesses to create structured, interactive experiences inside WhatsApp.
                </p>
                <p>
                  At FORK, I worked on translating that complexity into a visual Flow-building experience that business users could understand without writing JSON or configuring backend logic.
                </p>
                <p>
                  Creating an interactive WhatsApp journey sounds straightforward until you start thinking about everything happening behind each interaction. A user selects an option. That response needs to be stored. A condition decides what happens next. Another screen appears. And the entire experience needs to follow WhatsApp's technical rules.
                </p>
              </div>
            </section>

            {/* Section 3: The Problem */}
            <section id="the-problem" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>03</span>
                <span>/</span>
                <span>THE CHALLENGE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Problem
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Behind WhatsApp interactive experiences are screens, components, navigation rules, variables and conditional logic. These could include customer forms, registrations, selections, information collection or multi-step journeys.
                </p>
                <p>
                  In a traditional configuration-driven approach, users need to understand how components are structured, how data moves between screens and how different actions affect the journey. For someone creating a customer interaction, that is a lot to keep track of.
                </p>
                
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-3 my-4">
                  <span className="text-xs font-mono font-semibold text-[#EA6C11] uppercase tracking-wider block">
                    The Cognitive Bottlenecks
                  </span>
                  <p className="text-sm text-[#141414] font-medium">
                    A text field is easy to understand. So is a button. The real complexity begins when someone asks:
                  </p>
                  <ul className="space-y-2 text-xs text-[#5D5F5F] font-mono">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA6C11]" />
                      "What happens after this button is clicked?"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA6C11]" />
                      "Where does the information go?"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA6C11]" />
                      "What if the customer selects a different answer?"
                    </li>
                  </ul>
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif text-[#141414] border-l-2 border-[#EA6C11] pl-6 py-2 my-6">
                  "A visual builder isn't useful if users still have to think like developers."
                </blockquote>

                <div className="p-6 rounded-xl bg-[#141414] text-white space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">My Design Challenge</span>
                  <p className="text-base sm:text-lg font-light leading-snug">
                    How might we help businesses build complex WhatsApp experiences visually, while keeping the underlying rules and relationships understandable?
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Understanding the Ecosystem */}
            <section id="flow-ecosystem" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>04</span>
                <span>/</span>
                <span>SYSTEM DISCOVERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Understanding the WhatsApp Flow Ecosystem
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Before exploring the interface, I studied the WhatsApp Flows framework and its documentation.
                </p>
                <p>
                  I looked at supported components, screen transitions, variables, data handling, conditional logic, validation and approval requirements.
                </p>
                <p>
                  This research helped me understand an important constraint: The builder couldn't behave like a completely open-ended design canvas. It had to guide users toward configurations that the WhatsApp framework actually supports.
                </p>

                {/* Framework Constraint Callout */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs my-4 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11] block">
                    Core Architectural Discovery
                  </span>
                  <p className="text-lg font-serif text-[#141414]">
                    "The goal wasn't to hide every rule. It was to communicate rules when they became relevant."
                  </p>
                  <p className="text-xs text-[#5D5F5F] pt-1">
                    Instead of front-loading JSON schemas and technical restrictions, the interface exposes validation constraints contextually as the user constructs the journey.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: The Insight That Changed My Approach */}
            <section id="core-insight" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>05</span>
                <span>/</span>
                <span>KEY PIVOT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Insight That Changed My Approach
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Initially, it was tempting to think about the builder as a collection of components.
                </p>
                <p>
                  But I realized the bigger challenge wasn't adding elements to a screen. It was understanding how those elements worked together.
                </p>

                {/* Big typography statement */}
                <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] text-white text-center space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                    The Foundational Insight
                  </span>
                  <p className="text-2xl sm:text-3xl font-serif leading-tight">
                    "Components are simple. Relationships make them complex."
                  </p>
                  <p className="text-xs font-mono text-slate-400 max-w-xl mx-auto pt-2">
                    That shifted my focus from designing individual configuration panels to designing the complete interaction model.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Creating a Clear Mental Model */}
            <section id="mental-model" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>06</span>
                <span>/</span>
                <span>INFORMATION ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Creating a Clear Mental Model
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  To help users construct journeys progressively without cognitive overload, I organized the experience around an explicit 5-tier hierarchy:
                </p>


                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/Flows%202nd%20image%20%20digram.png"
                    alt="WhatsApp Flow hierarchy diagram and information architecture"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 7: Exploring the Design */}
            <section id="exploring-design" className="scroll-mt-36 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>07</span>
                <span>/</span>
                <span>INTERACTION EXPLORATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Exploring the Design
              </h2>

              <div className="space-y-6">
                {/* 01. Making structure visible */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">01.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Making the structure visible</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    I explored a visual builder that helps users see which screens exist, how they connect, and where each interaction leads. The idea was to reduce the need to mentally reconstruct an entire customer journey from separate configuration panels.
                  </p>
                </div>

                {/* 02. Keeping component settings contextual */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">02.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Keeping component settings contextual</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Different components require different information. A text component doesn't need the same configuration as an interactive list or media upload. Instead of exposing every property at once, I structured the experience so settings relate to the component being configured. This keeps the workspace focused while still supporting more advanced interactions.
                  </p>
                </div>

                {/* 03. Making navigation understandable */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">03.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Making navigation understandable</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    A Flow isn't just a collection of screens. Users need to understand the relationship between an action and its destination.
                  </p>
                  
                  {/* Sequence box */}
                  <div className="ml-7 my-3 p-4 rounded-lg bg-[#FAF9F5] border border-black/5 font-mono text-xs flex items-center justify-between">
                    <span className="font-semibold text-black">Current Screen</span>
                    <span className="text-[#EA6C11]">➔ User Action ➔</span>
                    <span className="font-semibold text-black">Next Screen</span>
                  </div>

                  <p className="text-xs text-[#5D5F5F] pl-7">
                    I explored ways to make the sequence visible. This also helps reveal disconnected or incomplete journeys before submission.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/3rd%20image%20Flows.jpg"
                    alt="Component configuration and screen navigation explorations"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 8: The Hardest Part: Conditional Logic */}
            <section id="conditional-logic" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>08</span>
                <span>/</span>
                <span>COMPLEX LOGIC</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Hardest Part: Conditional Logic
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  One of the most challenging areas was designing IF / SWITCH interactions.
                </p>
                <p>
                  Imagine a business asking customers whether they're new or returning. A returning customer might need account-related options, while a new customer needs registration.
                </p>
                <p>
                  The underlying logic is straightforward, but how should a non-technical user create it? I explored five directions:
                </p>

                {/* 5 Approaches Comparison */}
                <div className="space-y-3 pt-2">
                  {[
                    {
                      num: "01",
                      title: "Condition within a component",
                      desc: "Configure logic while editing the relevant field inside the component inspector."
                    },
                    {
                      num: "02",
                      title: "Separate condition node",
                      desc: "Make IF / SWITCH a visible node in the Flow canvas between screens."
                    },
                    {
                      num: "03",
                      title: "Apply condition to an existing field",
                      desc: "Add logic after the basic screen structure is created."
                    },
                    {
                      num: "04",
                      title: "Conditional outcome panel",
                      desc: "Define the condition, result and destination together in a unified panel."
                    },
                    {
                      num: "05",
                      title: "Inline logic",
                      desc: "Keep conditions inside contextual component properties without canvas clutter."
                    }
                  ].map((item, idx) => (
                    <div
                      key={item.num}
                      className="p-5 rounded-xl border border-black/10 bg-white"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-semibold text-[#EA6C11]">{item.num}.</span>
                            <h4 className="text-sm font-semibold text-[#141414]">{item.title}</h4>
                          </div>
                          <p className="text-xs text-[#5D5F5F] pl-6 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                          Direction {idx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-[#454747] pt-2">
                  Each approach offered a different balance between clarity, flexibility and visual complexity. The exploration helped identify how conditional behaviour could remain understandable as journeys became more sophisticated.
                </p>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/4th%20image%20Flows.jpg"
                    alt="Side-by-side comparison of the five IF and SWITCH conditional logic concepts"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 9: Validation & Error Handling */}
            <section id="validation-errors" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>09</span>
                <span>/</span>
                <span>ERROR PREVENTION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing for What Happens When Things Go Wrong
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  A Flow can fail validation for several reasons. A component might be missing required information. A connection might be incomplete. A configuration might not be supported.
                </p>
                <p>
                  I focused on making validation actionable. Instead of simply showing that something is invalid, the experience should explain:
                </p>

                {/* Actionable Formula */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-[10px] font-mono text-[#8E9090] uppercase block">Step 1</span>
                      <h4 className="text-sm font-semibold text-black mt-1">What's wrong</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1">Clear issue description</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-[10px] font-mono text-[#8E9090] uppercase block">Step 2</span>
                      <h4 className="text-sm font-semibold text-black mt-1">Where it happened</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1">Precise screen &amp; field anchor</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-[10px] font-mono text-[#8E9090] uppercase block">Step 3</span>
                      <h4 className="text-sm font-semibold text-black mt-1">What needs to change</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1">Direct remedy action</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#454747]">
                  I also explored feedback for media upload requirements and configuration errors. The intention was to help users recover without having to inspect every screen manually.
                </p>
              </div>
            </section>

            {/* Section 10: Lifecycle States */}
            <section id="lifecycle-states" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>10</span>
                <span>/</span>
                <span>SYSTEM STATES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing Beyond Creation: Lifecycle &amp; Deletion
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  One of the important lessons from this project was that a Flow doesn't stop being a product object once it is created.
                </p>
                <p>
                  It moves through different lifecycle states:
                </p>

                {/* Lifecycle Pipeline */}
                <div className="p-6 rounded-xl bg-white border border-black/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="px-3 py-2 bg-slate-100 rounded text-slate-700 font-semibold">Draft</span>
                    <span className="text-[#EA6C11]">➔</span>
                    <span className="px-3 py-2 bg-amber-50 border border-amber-200 text-amber-900 font-semibold">Submitted</span>
                    <span className="text-[#EA6C11]">➔</span>
                    <span className="px-3 py-2 bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">Approved</span>
                    <span className="text-[#EA6C11]">➔</span>
                    <span className="px-3 py-2 bg-emerald-600 text-white font-semibold">Active</span>
                  </div>
                  <p className="text-xs text-[#5D5F5F] pt-3 leading-relaxed">
                    Those states affect what users can do. For example, an approved Flow cannot be edited like a draft. Rather than silently disabling the edit action, I designed the experience to explain why editing is restricted.
                  </p>
                </div>

                <p className="pt-2">
                  Deletion needed similar consideration. A Flow might already be connected to templates, bot journeys or other experiences. Removing it without communicating those dependencies could cause problems elsewhere.
                </p>

              

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/5th%20image%20Flows.jpg"
                    alt="WhatsApp Flow approval states, restricted editing, and dependency-aware deletion"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 11: From Exploration to Final Design */}
            <section id="wireframes-to-final" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>11</span>
                <span>/</span>
                <span>REFINEMENT &amp; DELIVERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                From Exploration to Final Design
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I worked through low-fidelity structures, component configurations, connection patterns, validation states and lifecycle interactions.
                </p>
                <p>
                  The designs were reviewed iteratively with the product and development teams to ensure that the interaction model remained usable while respecting technical limitations.
                </p>
                <p>
                  The resulting design brings Flow creation, screen building, component configuration, conditional logic, validation and lifecycle management into one structured experience.
                </p>
              </div>
            </section>

            {/* Section 12: What This Project Taught Me */}
            <section id="reflections" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>12</span>
                <span>/</span>
                <span>RETROSPECTIVE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                What This Project Taught Me
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  This project pushed me to think beyond individual screens. I had to consider how information moves, how actions connect, how system constraints affect behaviour and what happens when a user makes a mistake.
                </p>
                <p>
                  The biggest lesson was that a visual interface isn't automatically an intuitive interface.
                </p>

                {/* Takeaway Card */}
                <div className="p-8 rounded-2xl bg-[#141414] text-white space-y-3 mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                    My Biggest Takeaway
                  </span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "The real value of a visual builder is helping people understand relationships and outcomes, not simply giving them a canvas to work on."
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Case Study Navigation */}
            <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="button"
                onClick={() => navigate("/work/bitamin-catalogs-products")}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Prev Project: Catalogs &amp; Products</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/work/fitpulse")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white hover:bg-black text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Next Project: FitPulse</span>
                <ArrowRight className="w-4 h-4 text-[#EA6C11]" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
