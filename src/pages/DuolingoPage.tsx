import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Mic, 
  Globe2, 
  Flame, 
  ChevronRight, 
  Check, 
  HelpCircle, 
  Volume2, 
  Award,
  Smile,
  Compass,
  Headphones,
  CheckCircle2
} from "lucide-react";
import { Link, useRouter } from "../router/RouterContext";

interface SectionNav {
  id: string;
  label: string;
}

const SECTIONS: SectionNav[] = [
  { id: "impact", label: "Impact at a Glance" },
  { id: "product-summary", label: "The Product in 30 Seconds" },
  { id: "the-problem", label: "The Problem & 4 Challenges" },
  { id: "the-learner", label: "Understanding the Learner" },
  { id: "core-insight", label: "The Insight That Shaped the Concept" },
  { id: "four-features", label: "Four Connected Features" },
  { id: "live-rooms", label: "01. Live Rooms Lobby" },
  { id: "ai-cohost", label: "02. AI Co-Host Experience" },
  { id: "cultural-capsules", label: "03. Cultural Capsules" },
  { id: "progress-tracking", label: "04. Progress Tracking" },
  { id: "design-language", label: "Duolingo Design Language" },
  { id: "reflections", label: "What This Project Taught Me" }
];

export const DuolingoPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeSection, setActiveSection] = useState<string>("impact");
  const [activeMockupTab, setActiveMockupTab] = useState<"lobby" | "cohost" | "culture" | "progress">("lobby");

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
            Case Study 04 · 4 Days 
          </span>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#58CC02]">
            <span className="w-2 h-2 rounded-full bg-[#58CC02]" />
            <span>EdTech · Conversational AI · Independent Feature Concept</span>
          </div>

          {/* Project Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              Helping Language Learners Find Their Voice
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              Exploring how Duolingo could bridge the gap between learning a language and confidently speaking it.
            </p>
          </div>

          {/* Introductory Narrative */}
          <div className="max-w-3xl space-y-3 pt-2 text-base sm:text-lg text-[#454747] leading-relaxed">
            <p>
              Learning a new language can be exciting. You complete lessons, remember new words, maintain your streak and gradually get better at understanding what you read or hear.
            </p>
            <p>
              But then someone asks you a question in that language. And suddenly, knowing the answer and being able to say it feel like two completely different things. That gap between learning and speaking became the starting point for my Duolingo feature exploration.
            </p>
          </div>


          {/* Metadata Grid matching reference 4-column layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">My Role</span>
              <span className="font-semibold text-[#141414] text-sm block">UX/UI Designer</span>
              <span className="text-[#5D5F5F] text-[11px]">Independent Concept</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Sector &amp; Domain</span>
              <span className="font-semibold text-[#141414] text-sm block">EdTech / Language Learning</span>
              <span className="text-[#5D5F5F] text-[11px]">Conversational AI &amp; Mobile UX</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Tools Used</span>
              <span className="font-semibold text-[#141414] text-sm block">Whimsical AI &amp; Figma</span>
              <span className="text-[#5D5F5F] text-[11px]">Wireframing &amp; High-Fi UI</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E9090] block uppercase tracking-wider text-[10px]">Responsibilities</span>
              <span className="font-semibold text-[#141414] text-xs block leading-tight">
                UX Research, Feature Conceptualization, User Persona, Wireframing &amp; UI Design
              </span>
            </div>
          </div>

              {/* Hero Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-xs p-6 sm:p-10 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Duolingo/duolingo-symbol-icon-logo-png-transparent%201.jpg"
                  alt="Duolingo Live Rooms and AI Co-Host feature concept artwork"
                  className="block max-h-64 w-auto max-w-full h-auto mx-auto"
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
                <span className="text-[11px] font-mono text-[#58CC02]">12 Sections</span>
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
                          ? "bg-[#FAF9F5] text-[#141414] font-semibold border-l-2 border-[#58CC02]"
                          : "text-[#5D5F5F] hover:text-black hover:bg-black/[0.02]"
                      }`}
                    >
                      <span className="truncate pr-2">
                        <span className="font-mono text-[10px] text-[#8E9090] mr-2">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        {sec.label}
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#58CC02] shrink-0" />}
                    </button>
                  );
                })}
              </nav>

              
            </div>
          </aside>

          {/* Mobile TOC bar */}
          <div className="lg:hidden col-span-1 mb-8 p-4 rounded-xl bg-white border border-black/10 sticky top-32 z-30 shadow-xs">
            <label htmlFor="mobile-toc-duo" className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-2">
              Jump to Section
            </label>
            <select
              id="mobile-toc-duo"
              value={activeSection}
              onChange={(e) => scrollTo(e.target.value)}
              className="w-full text-xs font-medium bg-[#FAF9F5] border border-black/15 rounded-md p-2.5 text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#58CC02]"
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
                  <span className="text-xs font-mono text-[#58CC02] block">Core Challenge</span>
                  <h3 className="text-lg font-semibold text-[#141414]">Confidence Gap</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Addressing the gap between learning grammar and confidently speaking with real people.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#58CC02] block">Concept Ecosystem</span>
                  <h3 className="text-lg font-semibold text-[#141414]">4 Connected Features</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Live Rooms, AI Co-Host, Cultural Capsules, and Progress Tracking.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#58CC02] block">Primary Focus</span>
                  <h3 className="text-lg font-semibold text-[#141414]">Active Practice</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Turning passive lesson completion into low-pressure, supportive spoken practice.
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
                  Duolingo makes language learning approachable through short lessons, interactive exercises and gamification.
                </p>
                <p>
                  For this project, I explored an additional layer of the learning experience: real-world conversation.
                </p>
                <p>
                  The concept introduces live speaking rooms, AI-supported conversations, cultural learning and personalized feedback. The goal was to help learners move from understanding a language to feeling comfortable using it.
                </p>
              </div>
            </section>

            {/* Section 3: The Problem & 4 Challenges */}
            <section id="the-problem" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>03</span>
                <span>/</span>
                <span>THE CHALLENGE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Problem: Knowing vs Speaking
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <blockquote className="text-xl sm:text-2xl font-serif text-[#141414] border-l-2 border-[#58CC02] pl-6 py-2 my-6">
                  "Knowing the words doesn't always mean having the confidence to speak."
                </blockquote>
                <p>
                  Language learners can build vocabulary and grammar knowledge but still struggle with spontaneous conversations.
                </p>
                <p>
                  Speaking introduces a different kind of pressure. You have to think quickly, understand another person, choose your words and respond — often while worrying about making mistakes.
                </p>
                <p>
                  Through my research and product exploration, I identified four connected challenges:
                </p>

                {/* 4 Connected Challenges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">01. Practice Scarcity</span>
                    <h4 className="text-sm font-semibold text-black">Limited opportunities for real-time speaking practice</h4>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Most digital tools focus on text input, tapping cards, or passive listening exercises.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">02. Psychological Barrier</span>
                    <h4 className="text-sm font-semibold text-black">Fear of making mistakes</h4>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Learners feel social anxiety speaking with fluent or native speakers without safety nets.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">03. Missing Context</span>
                    <h4 className="text-sm font-semibold text-black">Lack of cultural context</h4>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Knowing dictionary definitions does not teach conversational etiquette, tone, or colloquial nuances.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">04. Invisible Progress</span>
                    <h4 className="text-sm font-semibold text-black">Difficulty understanding speaking progress</h4>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Hard to measure verbal confidence compared to visual XP points or level progress bars.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#141414] text-white space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#58CC02]">My Design Question</span>
                  <p className="text-base sm:text-lg font-light leading-snug">
                    How might we help language learners practice real conversations in a way that feels supportive, engaging and less intimidating?
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Understanding the Learner Persona */}
            <section id="the-learner" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>04</span>
                <span>/</span>
                <span>USER PERSONA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Understanding the Learner
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I explored the needs of learners who want to improve their speaking skills but aren't yet confident enough to communicate freely.
                </p>
                <p>
                  To give the problem a more human perspective, I developed a persona around a working professional learning German for career opportunities.
                </p>

                {/* Persona Profile Card */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/5 pb-3">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#58CC02] block">Target Learner Persona</span>
                      <h3 className="text-lg font-semibold text-black">Marcus · Professional Learning German</h3>
                    </div>
                    <span className="text-xs font-mono text-[#8E9090] bg-[#FAF9F5] px-3 py-1 rounded border border-black/5">
                      Target Level: B1 (Intermediate)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-semibold text-black block">Study Habits:</span>
                      <p className="text-[#5D5F5F] leading-relaxed">
                        Studies during daily commutes and evening free time. Consistently maintains his Duolingo streak.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-semibold text-black block">The Core Friction:</span>
                      <p className="text-[#5D5F5F] leading-relaxed">
                        Understands written exercises and audio lessons, but experiences paralyzing anxiety when speaking with other people.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5 font-serif italic text-xs text-[#454747]">
                    "His challenge isn't a lack of interest. It's the lack of a comfortable space to turn knowledge into conversation."
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Duolingo/Screenshot%202025-10-29%20105624.png"
                    alt="User persona, pain points, and conversational confidence opportunity mapping"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 5: The Insight That Shaped the Concept */}
            <section id="core-insight" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>05</span>
                <span>/</span>
                <span>CONCEPT FOUNDATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                The Insight That Shaped the Concept
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I realized that speaking confidence is not built through knowledge alone. Learners need opportunities to practice, make mistakes, receive feedback and try again.
                </p>
                <p>
                  But pushing someone directly into a conversation with strangers can feel intimidating.
                </p>
                <p>
                  So I started thinking about how the experience could gradually support learners, organizing the journey into four progressive stages:
                </p>

                {/* 4-Stage Progression */}
                <div className="p-6 rounded-xl bg-white border border-black/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-semibold text-black">
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Prepare</span>
                    <span className="text-[#58CC02]">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Practice</span>
                    <span className="text-[#58CC02]">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Receive Feedback</span>
                    <span className="text-[#58CC02]">➔</span>
                    <span className="px-3 py-2 bg-[#FAF9F5] rounded border border-black/10">Improve</span>
                  </div>
                  <p className="text-xs text-[#5D5F5F] pt-3 leading-relaxed">
                    This progressive scaffold became the structural foundation of the proposed feature.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Four Connected Features */}
            <section id="four-features" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>06</span>
                <span>/</span>
                <span>ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing the Experience: Four Feature Pillars
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  To address the confidence gap holistically, I designed four connected capabilities that work in harmony:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">01. Live Rooms</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Situation-based speaking sessions where learners connect based on interests and proficiency.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">02. AI Co-Host</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Gentle, real-time scaffolding that offers prompts, corrections, and prevents awkward silences.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">03. Cultural Capsules</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      Short 60-second audio/video context cards introducing etiquette, tone, and social nuances before speaking.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#58CC02] block">04. Progress Tracking</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      AI-generated summaries, pronunciation insights, and grammar feedback tied to Duolingo streaks.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Duolingo/Screenshot%202025-10-29%20105516.png"
                    alt="Four Duolingo conversational feature screens: Live Rooms, AI Co-Host, Cultural Capsules, and Progress Dashboard"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 7: 01. Live Rooms Lobby */}
            <section id="live-rooms" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>07</span>
                <span>/</span>
                <span>FEATURE PILLAR 1</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                01. Live Rooms Lobby — Making Conversation Accessible
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I designed a central space where learners could discover live speaking sessions based on real-world topics.
                </p>
                <p>
                  Instead of generic practice exercises, the rooms focus on realistic situations such as job interviews, café conversations, ordering food, or everyday interactions.
                </p>
                <p>
                  The concept includes AI-assisted matching based on proficiency and interests. Learners can join a live room instantly or schedule a session for later. The intention was to make speaking practice feel relevant, intentional, and easier to approach.
                </p>
              </div>
            </section>

            {/* Section 8: 02. AI Co-Host */}
            <section id="ai-cohost" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>08</span>
                <span>/</span>
                <span>FEATURE PILLAR 2</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                02. AI Co-Host — Making Mistakes Feel Less Intimidating
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  One of the biggest barriers to speaking is the fear of getting something wrong.
                </p>
                <p>
                  I introduced an AI Co-Host concept that could support learners during conversations through prompts, gentle corrections, and adaptive difficulty.
                </p>
                <p>
                  The AI can also help moderate sessions so that all participants have balanced opportunities to speak. Rather than replacing human interaction, the idea was to make the transition toward human conversation feel far more comfortable and supportive.
                </p>
              </div>
            </section>

            {/* Section 9: 03. Cultural Capsules */}
            <section id="cultural-capsules" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>09</span>
                <span>/</span>
                <span>FEATURE PILLAR 3</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                03. Cultural Capsules — Learning Beyond Vocabulary
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Language is also about context. Tone, humour, gestures, and social expectations can change how a conversation is understood.
                </p>
                <p>
                  I explored short audio or video learning moments that introduce relevant cultural information before a speaking session. For example, a learner joining a café conversation could first understand common expressions or conversational etiquette (such as how to ask for the bill politely in Berlin).
                </p>
                <p>
                  This connects grammatical knowledge with everyday communicative etiquette.
                </p>
              </div>
            </section>

            {/* Section 10: 04. Progress Tracking */}
            <section id="progress-tracking" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>10</span>
                <span>/</span>
                <span>FEATURE PILLAR 4</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                04. Progress Tracking — Making Improvement Visible
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  After a speaking session, learners need more than a simple completion message.
                </p>
                <p>
                  I designed a feedback concept that provides AI-generated summaries, pronunciation insights, grammar feedback, and recommendations for the next session.
                </p>
                <p>
                  Connecting this progress with familiar Duolingo motivation patterns, such as streaks and speaking milestones, encourages continued long-term practice.
                </p>
              </div>
            </section>

            {/* Section 11: Duolingo Design Language */}
            <section id="design-language" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>11</span>
                <span>/</span>
                <span>DESIGN CRAFT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Bringing the Concept into Duolingo's Design Language
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I explored the feature through low- and high-fidelity wireframes using Whimsical AI and Figma.
                </p>
                <p>
                  An important consideration was making the new experience feel connected to Duolingo rather than like a completely separate product.
                </p>
                <p>
                  I maintained a friendly visual direction through rounded cards, vibrant colours, and familiar character-led elements. At the same time, I introduced clearer spaces for conversation, session information, and feedback.
                </p>
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#58CC02] block mb-1">
                    Design Balance
                  </span>
                  <p className="text-lg font-serif text-[#141414]">
                    "The challenge was to balance the playful learning experience with interactions that required more focus."
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Reflections & Learnings */}
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
                  The final concept connects four stages of conversational learning:
                </p>

                <div className="p-5 rounded-xl bg-[#FAF9F5] border border-black/10 text-xs font-mono font-medium text-black flex flex-wrap items-center justify-between gap-2">
                  <span>Discover a Room</span>
                  <span className="text-[#58CC02]">➔</span>
                  <span>Prepare with Cultural Context</span>
                  <span className="text-[#58CC02]">➔</span>
                  <span>Practice with AI Support</span>
                  <span className="text-[#58CC02]">➔</span>
                  <span>Review Feedback</span>
                </div>

                <p className="pt-2">
                  Each feature addresses a different part of the same problem. Live Rooms create opportunities to speak. The AI Co-Host offers support during practice. Cultural Capsules add real-world context. Progress feedback helps learners recognize where they are improving. Together, they form a concept for making speaking practice a more natural part of language learning.
                </p>
                <p>
                  This project helped me think more deeply about the difference between completing tasks and building confidence. A learner might successfully finish several lessons without feeling ready to use what they've learned. That made me think about how products can support emotional needs alongside functional ones.
                </p>

                {/* Takeaway Card */}
                <div className="p-8 rounded-2xl bg-[#141414] text-white space-y-3 mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#58CC02]">
                    My Biggest Takeaway
                  </span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "Sometimes the most meaningful design opportunity isn't helping users do more. It's helping them feel confident enough to use what they already know."
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Case Study Navigation */}
            <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="button"
                onClick={() => navigate("/work/fitpulse")}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Prev Project: FitPulse</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/work/24-hour-ux-design-sprint")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white hover:bg-black text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Next Project: 24-Hour UX Sprints</span>
                <ArrowRight className="w-4 h-4 text-[#EA6C11]" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
