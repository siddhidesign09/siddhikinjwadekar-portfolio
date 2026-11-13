import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Dumbbell, 
  Users, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  LayoutDashboard,
  Building2,
  Clock,
  Activity,
  Award
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
  { id: "gym-research", label: "Research Across Four Gyms" },
  { id: "research-insights", label: "What the Research Revealed" },
  { id: "information-architecture", label: "Turning Research into Structure" },
  { id: "three-experiences", label: "Three Connected Role Experiences" },
  { id: "design-system-flows", label: "Design System & Key Flows" },
  { id: "v1-v2-iterations", label: "What Changed Between V1 & V2" },
  { id: "usability-refinement", label: "Usability Testing & Refinement" },
  { id: "final-experience", label: "The Final Experience" },
  { id: "reflections", label: "What This Project Taught Me" }
];

export const FitPulsePage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeSection, setActiveSection] = useState<string>("impact");
  const [activeRoleTab, setActiveRoleTab] = useState<"owner" | "trainer" | "member">("owner");

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
            Case Study 03 · Academic Thesis
          </span>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>Academic Thesis · Health &amp; Fitness / SaaS · Mobile &amp; Web</span>
          </div>

          {/* Project Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              Bringing the Entire Gym Experience Together
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              Designing FitPulse, a connected management experience for gym owners, trainers and members.
            </p>
          </div>

          {/* Introductory Narrative */}
          <div className="max-w-3xl space-y-3 pt-2 text-base sm:text-lg text-[#454747] leading-relaxed">
            <p>
              A gym is more than a place where people work out. Behind every membership, training session and fitness goal, there's a lot happening — payments, schedules, workout plans, communication and day-to-day management. But these activities don't always happen in one place.
            </p>
            <p>
              For my thesis project, I explored how a single digital platform could connect the people running a gym with the people training in it. That idea became FitPulse.
            </p>
          </div>

          {/* Metadata Grid matching reference 4-column layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">My Role</span>
              <span className="font-semibold text-[#141414] text-sm block">UI/UX Designer</span>
              <span className="text-[#5D5F5F] text-[11px]">Academic Thesis Project</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Sector &amp; Domain</span>
              <span className="font-semibold text-[#141414] text-sm block">Health &amp; Fitness</span>
              <span className="text-[#5D5F5F] text-[11px]">Gym Management / Multi-Role SaaS</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Project Scope</span>
              <span className="font-semibold text-[#141414] text-sm block">105+ Screens</span>
              <span className="text-[#5D5F5F] text-[11px]">4 Gyms Researched in Ambernath</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Responsibilities</span>
              <span className="font-semibold text-[#141414] text-xs block leading-tight">
                UX Research, User Personas, Information Architecture, User Flows, Wireframing, UI Design &amp; Prototyping
              </span>
            </div>
          </div>

              {/* Hero Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-xs p-3 sm:p-5 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/Shot.jpg.png"
                  alt="FitPulse connected gym management app compositions across owner, trainer, and member roles"
                  className="block max-h-[540px] w-auto max-w-full h-auto mx-auto"
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
            <label htmlFor="mobile-toc-fitpulse" className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-2">
              Jump to Section
            </label>
            <select
              id="mobile-toc-fitpulse"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Research Scope</span>
                  <h3 className="text-lg font-semibold text-[#141414]">4 Gyms</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    On-site research, interviews, and observations conducted in Ambernath.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">User Groups</span>
                  <h3 className="text-lg font-semibold text-[#141414]">3 Core Roles</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Gym owners, trainers, and gym members connected in one platform.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Design Volume</span>
                  <h3 className="text-lg font-semibold text-[#141414]">105+ Screens</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    40+ member screens, 30+ trainer screens, and 35+ owner/manager screens.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Refinement</span>
                  <h3 className="text-lg font-semibold text-[#141414]">2 Iterations</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Visual and usability issues discovered in V1 were resolved in V2.
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
                  FitPulse is a gym management app designed to connect gym operations, trainer workflows and member experiences.
                </p>
                <p>
                  Behind every membership, training session and fitness goal, there's a lot happening — payments, schedules, workout plans, communication and day-to-day management. But these activities don't always happen in one place.
                </p>
                <p>
                  For my thesis project, I explored how a single digital platform could connect the people running a gym with the people training in it. That idea became FitPulse.
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
                <blockquote className="text-xl sm:text-2xl font-serif text-[#141414] border-l-2 border-[#EA6C11] pl-6 py-2 my-6">
                  "Everyone is part of the same gym, but everyone needs something different."
                </blockquote>
                <p>
                  When I started exploring gym management, I realized the problem wasn't limited to tracking memberships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#141414] block">Owners</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Owners needed visibility into their business, staff management, payment tracking, and member renewals.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#141414] block">Trainers</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Trainers needed an organized way to manage their clients, schedule sessions, and share workout/diet plans.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#141414] block">Members</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Members wanted easier access to plans, progress, and sessions, and motivation to stay engaged.
                    </p>
                  </div>
                </div>
                <p>
                  These needs were connected, but they weren't identical. Designing one generic dashboard for everyone wouldn't solve the problem.
                </p>
                <div className="p-6 rounded-xl bg-[#141414] text-white space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">Core Thesis Question</span>
                  <p className="text-base sm:text-lg font-light leading-snug">
                    How might we create a connected gym management platform that supports three different user roles without making the experience complicated for any of them?
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Research Across Four Gyms */}
            <section id="gym-research" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>04</span>
                <span>/</span>
                <span>ON-SITE RESEARCH</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Understanding the People Behind the Product
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I conducted on-site research and interviews with four gyms in Ambernath:
                </p>

                {/* 4 Gyms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-lg bg-white border border-black/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EA6C11]/10 flex items-center justify-center text-[#EA6C11] font-mono text-xs font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black">Powerzone Hardcore</h4>
                      <p className="text-xs text-[#5D5F5F]">Ambernath · High member volume</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EA6C11]/10 flex items-center justify-center text-[#EA6C11] font-mono text-xs font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black">Fitness House</h4>
                      <p className="text-xs text-[#5D5F5F]">Ambernath · Focus on personal training</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EA6C11]/10 flex items-center justify-center text-[#EA6C11] font-mono text-xs font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black">Complete Fitness</h4>
                      <p className="text-xs text-[#5D5F5F]">Ambernath · Mixed community gym</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EA6C11]/10 flex items-center justify-center text-[#EA6C11] font-mono text-xs font-bold">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black">Galaxy Fitness</h4>
                      <p className="text-xs text-[#5D5F5F]">Ambernath · Commercial fitness center</p>
                    </div>
                  </div>
                </div>

                <p>
                  The research involved gym owners, trainers, and members, using qualitative interviews, surveys, and contextual observation to understand their day-to-day activities and friction points.
                </p>
                <p>
                  I also studied existing gym management platforms, including <strong>Gym ERP</strong>, <strong>Gymneshia</strong>, and <strong>FitSvw</strong>, to identify gaps in personalization, interface consistency, and communication.
                </p>
              </div>
            </section>

            {/* Section 5: What the Research Revealed */}
            <section id="research-insights" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>05</span>
                <span>/</span>
                <span>RESEARCH FINDINGS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                What the Research Revealed
              </h2>

              <div className="space-y-6 pt-2">
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">01.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Owners wanted more control without more administrative work.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Managing staff, memberships, payments, and promotions across different processes made everyday operations harder to coordinate. They needed a clearer overview of their gym without endless spreadsheet maintenance.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">02.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Trainers needed a better way to stay organized.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Creating workout plans, sharing diets, scheduling sessions, and communicating with multiple clients required consistent coordination. They needed an experience built around their daily workflow.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">03.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Members wanted fitness to feel more personal.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Members needed easy access to their workout plans, session bookings, membership information, and progress. They also needed motivation to stay engaged beyond their time at the gym.
                  </p>
                </div>
              </div>

              {/* Big Core Insight Card */}
              <div className="p-8 rounded-2xl bg-[#141414] text-white text-center space-y-3 mt-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                  The Foundational Insight
                </span>
                <p className="text-2xl sm:text-3xl font-serif leading-tight">
                  "One connected platform could support all three groups, but the interface had to adapt to what each person was trying to accomplish."
                </p>
              </div>
            </section>

            {/* Section 6: Turning Research into Structure */}
            <section id="information-architecture" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>06</span>
                <span>/</span>
                <span>STRUCTURE &amp; MAPPING</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Turning Research into Structure
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  After gathering insights, I created personas and empathy maps for the three user groups.
                </p>
                <p>
                  I used journey mapping to understand their goals and frustrations, then explored feature priorities through brainstorming, card sorting, and MoSCoW prioritization.
                </p>
                <p>
                  Rather than designing all possible features at once, I focused on establishing a clear structure for each role, defining three core modules:
                </p>

                {/* 3 Core Modules */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-amber-700 uppercase block">For Owners</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Business management, staff, clients, memberships, payments, analytics and promotions.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-cyan-700 uppercase block">For Trainers</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Client schedules, personalized plans, attendance, communication and payments.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-emerald-700 uppercase block">For Members</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Workouts, diet plans, bookings, membership renewals, progress tracking and engagement.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/persona.png"
                    alt="FitPulse three user personas, user journeys, and feature prioritization"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 7: Three Connected Role Experiences */}
            <section id="three-experiences" className="scroll-mt-36 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>07</span>
                <span>/</span>
                <span>ROLE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing Three Experiences That Feel Connected
              </h2>

              <div className="space-y-6">
                <p className="text-base text-[#454747] leading-relaxed">
                  All three roles belonged to the same ecosystem, but their priorities were different. This became the most interesting part of FitPulse.
                </p>

                {/* 01. Owner */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">01.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">The owner's experience</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    The owner's dashboard needed to make gym operations easier to understand. I focused on organizing business-related information and actions around staff, clients, memberships, payments and performance. The goal was to reduce the effort required to find information and manage everyday activities.
                  </p>
                </div>

                {/* 02. Trainer */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">02.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">The trainer's experience</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    For trainers, the priority was managing people and plans. I designed workflows around creating personalized workouts, sharing diet plans, scheduling sessions and communicating with clients. The experience needed to support repeated tasks without feeling administrative.
                  </p>
                </div>

                {/* 03. Member */}
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">03.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">The member's experience</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    For members, the product needed to feel more motivating and personal. I focused on workout and diet access, booking sessions, tracking goals, managing memberships and discovering relevant fitness content. The goal was to make the app useful both inside and outside the gym.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/image%203%20dasboards.png"
                    alt="FitPulse three role-based dashboards for owner, trainer, and member"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 8: Design System & Key Flows */}
            <section id="design-system-flows" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>08</span>
                <span>/</span>
                <span>DESIGN SYSTEM</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                From Wireframes to High-Fidelity Designs
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I developed the information architecture and user flows for important journeys such as session booking, workout-plan sharing and payment tracking.
                </p>
                <p>
                  These flows helped me define what each user needed to see, which actions should be prioritized and how information would move across the system.
                </p>

                {/* Design System Details */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11] block">
                    FitPulse Design Language
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-xs font-semibold text-[#8E9090] uppercase tracking-wider block mb-1">Typography</span>
                      <h4 className="text-sm font-semibold text-black">Mulish Sans-Serif</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1 leading-relaxed">
                        Geometric proportions with high legibility across mobile displays and dense data tables.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-xs font-semibold text-[#8E9090] uppercase tracking-wider block mb-1">Color Palette</span>
                      <h4 className="text-sm font-semibold text-black">Deep-Blue &amp; Yellow</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1 leading-relaxed">
                        Anchored in high-contrast deep navy with energetic yellow and emerald accents.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-xs font-semibold text-[#8E9090] uppercase tracking-wider block mb-1">Component Craft</span>
                      <h4 className="text-sm font-semibold text-black">Rounded &amp; Energetic</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1 leading-relaxed">
                        Friendly border radiuses and clear tap targets optimized for on-the-floor gym usage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/design%20system.png"
                    alt="FitPulse user flows, design system components, and wireframe explorations"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 9: What Changed Between V1 and V2 */}
            <section id="v1-v2-iterations" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>09</span>
                <span>/</span>
                <span>ITERATIVE REFINEMENT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                What Changed Between V1 and V2
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  The first version helped reveal areas that needed improvement. Some screens had issues with visual contrast, information density and hierarchy.
                </p>
                <p>
                  Rather than treating the first design as final, I refined the interface to improve:
                </p>

                {/* 5 Improvement Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-lg bg-white border border-black/10 space-y-1">
                    <h4 className="text-xs font-semibold text-black">Readability through stronger contrast</h4>
                    <p className="text-[11px] text-[#5D5F5F]">Strengthened color ratios to ensure immediate scannability in variable gym lighting.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 space-y-1">
                    <h4 className="text-xs font-semibold text-black">Navigation clarity across different roles</h4>
                    <p className="text-[11px] text-[#5D5F5F]">Streamlined bottom bars and drawers to prevent accidental role confusion.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 space-y-1">
                    <h4 className="text-xs font-semibold text-black">Dashboard personalization</h4>
                    <p className="text-[11px] text-[#5D5F5F]">Tailored top widgets to today's immediate agenda and member priorities.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 space-y-1">
                    <h4 className="text-xs font-semibold text-black">Spacing and visual hierarchy</h4>
                    <p className="text-[11px] text-[#5D5F5F]">Generous breathing room separating primary workout cards from secondary metrics.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-black/10 sm:col-span-2 space-y-1">
                    <h4 className="text-xs font-semibold text-black">Information density and clutter</h4>
                    <p className="text-[11px] text-[#5D5F5F]">Eliminated non-essential dashboard widgets in favor of clean progressive disclosure.</p>
                  </div>
                </div>

                <p className="text-xs text-[#5D5F5F] pt-2">
                  These changes made the interface significantly more focused and easier to scan.
                </p>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/image%205%20v1%20vs%20v2.png"
                    alt="FitPulse V1 vs V2 screen comparisons with annotations explaining design refinements"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 10: Usability Testing & Refinement */}
            <section id="usability-refinement" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>10</span>
                <span>/</span>
                <span>USABILITY REVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Usability Testing &amp; Refinement
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Usability testing and design feedback informed the refinement process.
                </p>
                <p>
                  I revisited the layouts and interaction patterns to make sure important information was easier to find and role-specific tasks were clearer.
                </p>
                
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#EA6C11] block mb-1">
                    Design Challenge &amp; Solution
                  </span>
                  <p className="text-lg font-serif text-[#141414]">
                    "One of the biggest challenges was balancing feature-rich dashboards with simple navigation."
                  </p>
                  <p className="text-xs text-[#5D5F5F] pt-1 leading-relaxed">
                    This reinforced the importance of prioritizing information instead of giving every feature equal visual weight.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: The Final Experience */}
            <section id="final-experience" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>11</span>
                <span>/</span>
                <span>DELIVERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Final Experience
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  FitPulse brings gym management, training and member engagement into one connected product concept.
                </p>
                <p>
                  The final design includes separate experiences for owners, trainers and members, supported by shared visual patterns and role-specific workflows.
                </p>
                <p>
                  The result is a high-fidelity, multi-role gym management concept that demonstrates how one platform can support different needs without making every user navigate the same interface.
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
                  FitPulse was an important learning experience because it required me to design beyond a single user journey.
                </p>
                <p>
                  I had to understand how different people interact with the same service, how their needs overlap and where their workflows need to remain separate. It also helped me become more comfortable designing data-heavy dashboards and iterating on large sets of screens.
                </p>

                {/* Takeaway Card */}
                <div className="p-8 rounded-2xl bg-[#141414] text-white space-y-3 mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                    My Biggest Takeaway
                  </span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "A connected product doesn't mean giving everyone the same experience. It means designing different experiences that work together."
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Case Study Navigation */}
            <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="button"
                onClick={() => navigate("/work/bitamin-whatsapp-flows")}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Prev Project: WhatsApp Flows</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/work/duolingo-conversational-confidence")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white hover:bg-black text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Next Project: Duolingo</span>
                <ArrowRight className="w-4 h-4 text-[#EA6C11]" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
