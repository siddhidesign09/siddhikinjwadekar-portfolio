import React, { useState } from "react";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Heart, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Download, 
  Sparkles, 
  Layers, 
  Users, 
  Compass, 
  Camera, 
  Dumbbell
} from "lucide-react";
import { Link } from "../router/RouterContext";
import { PERSONAL_DETAILS } from "../data/portfolioData";

export const AboutPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("siddhikinj18@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918424960525");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
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
            About · Siddhi Kinjawadekar
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">

        {/* 1. Hero Section */}
        <section className="space-y-8">
          {/* Greeting tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>HELLO! · ABOUT ME</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading, Role, Location, Biography & Why Designing */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.1]">
                  This is Siddhi Kinjawadekar.
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-mono text-[#5D5F5F] pt-1">
                  <span className="text-[#EA6C11] font-semibold">Junior UI/UX Designer</span>
                  <span className="text-black/20">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#EA6C11]" />
                    Based in Pune, India
                  </span>
                </div>
              </div>

              {/* Biography Section */}
              <div className="space-y-4 text-base sm:text-lg text-[#454747] leading-relaxed pt-2">
                <div className="p-1 border-l-2 border-[#EA6C11] pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-1">
                    Biography
                  </span>
                  <p className="text-lg sm:text-xl text-[#141414] font-normal leading-snug">
                    I'm a UX designer currently pursuing my Master's in User Experience Design with a strong interest in teaching, mentoring, and supporting students in understanding design thinking, UX processes, and digital product design.
                  </p>
                </div>

                {/* Why Designing */}
                <div className="pt-6 space-y-3 border-t border-black/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#EA6C11] block font-semibold">
                    Why Designing
                  </span>
                  <div className="space-y-3 text-sm sm:text-base text-[#454747]">
                    <p className="leading-relaxed">
                      I enjoy simplifying complex user experience challenges into practical design solutions.
                    </p>
                    <p className="leading-relaxed">
                      I believe users learn and interact best through clear, well-structured interfaces and meaningful interactions.
                    </p>
                    <p className="leading-relaxed">
                      I aim to design seamless digital experiences, apply design thinking, and iterate through user feedback to enhance usability.
                    </p>
                  </div>
                </div>

                {/* Quick Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://drive.google.com/file/d/10zcVjKSjYeYAvrOoDvDAmffdgnHssG7b/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-black/20 text-[#141414] text-xs font-mono hover:border-black/50 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#EA6C11]" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
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
        </section>

        {/* 2. Professional Experience & Education (Reference's dual presentation) */}
        <section className="space-y-12 pt-8 border-t border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left: Work Experience */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                  <Briefcase className="w-3.5 h-3.5 text-[#EA6C11]" />
                  <span>CAREER &amp; EXPERIENCE</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                  Work Experience
                </h2>
              </div>

              <div className="space-y-4">
                {/* 1. Current Position */}
                <div className="p-6 rounded-xl bg-white border border-[#EA6C11]/30 shadow-xs relative overflow-hidden space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#EA6C11]/10 text-[#EA6C11] text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Current Position · Present / Ongoing
                    </span>
                    <span className="text-xs font-mono text-[#8E9090]">
                      Pune, India
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#141414]">
                      Junior UI/UX Designer
                    </h3>
                    <p className="text-sm text-[#EA6C11] font-medium">
                      Three Matters Lab Pvt Ltd
                    </p>
                  </div>

                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Active role contributing to interface design, user research, workflow simplification, and scalable component architecture across digital products.
                  </p>
                </div>

                {/* 2. Tata Motors */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/5 text-[#5D5F5F] text-[10px] font-mono uppercase tracking-wider">
                      Internship
                    </span>
                    <span className="text-xs font-mono text-[#8E9090]">
                      TMCV Functions
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#141414]">
                      UI/UX Design Intern
                    </h3>
                    <p className="text-xs text-[#5D5F5F]">
                      Tata Motors (TMCV) Corporate Functions
                    </p>
                  </div>

                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Supported UX research, corporate internal tool interfaces, and process mapping for large-scale enterprise workflows.
                  </p>
                </div>

                {/* 3. Polycrafts Tech */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/5 text-[#5D5F5F] text-[10px] font-mono uppercase tracking-wider">
                      Internship
                    </span>
                    <span className="text-xs font-mono text-[#8E9090]">
                      Product Tech
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#141414]">
                      UI/UX Design Intern
                    </h3>
                    <p className="text-xs text-[#5D5F5F]">
                      Polycrafts Tech Pvt Ltd
                    </p>
                  </div>

                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Designed digital screens, user flows, and wireframes with an emphasis on visual consistency, responsiveness, and usability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Education */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#EA6C11]" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                  Education
                </h2>
              </div>

              <div className="space-y-4">
                {/* Master Degree */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#EA6C11] uppercase font-semibold">
                      Pursuing · 2024–2026
                    </span>
                    <span className="text-xs font-mono text-[#8E9090]">Pune</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#141414]">
                    Master Degree in User Experience Design
                  </h3>
                  <p className="text-xs text-[#5D5F5F]">
                    MIT World Peace University
                  </p>
                  <p className="text-[11px] text-[#8E9090] pt-1 leading-relaxed">
                    Specializing in advanced UX methodologies, cognitive interaction design, service design, and academic research.
                  </p>
                </div>

                {/* Bachelor Degree */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#5D5F5F] uppercase">
                      2020–2024
                    </span>
                    <span className="text-xs font-mono text-[#8E9090]">Pune</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#141414]">
                    Bachelor Degree in Product Design
                  </h3>
                  <p className="text-xs text-[#5D5F5F]">
                    Ajeenkya D Y Patil University
                  </p>
                  <p className="text-[11px] text-[#8E9090] pt-1 leading-relaxed">
                    Form, ergonomics, design thinking, iterative prototyping, and human-centered design principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Know Me More Section */}
        <section className="space-y-6 pt-8 border-t border-black/[0.08]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
            <BookOpen className="w-3.5 h-3.5 text-[#EA6C11]" />
            <span>PHILOSOPHY &amp; MENTORSHIP</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
            Know Me More
          </h2>

          <div className="p-8 sm:p-12 rounded-2xl bg-[#F6F4ED] border border-black/10 space-y-4 max-w-4xl">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#EA6C11] block font-semibold">
              Learning &amp; Mentorship Philosophy
            </span>
            <blockquote className="text-lg sm:text-2xl font-serif italic text-[#141414] leading-relaxed">
              "I believe meaningful learning emerges when complex ideas are approached with clarity, curiosity, and thoughtful guidance. By creating an environment that encourages questioning and structured exploration, students gain confidence in both their understanding and their ability to apply knowledge. My aim is to support this learning process with patience, empathy, and a strong respect for academic growth."
            </blockquote>
            <p className="text-xs font-mono text-[#5D5F5F] pt-2">
              — Siddhi Kinjawadekar · Product Designer &amp; Design Mentor
            </p>
          </div>
        </section>

        {/* 4. Core Skills & Methodologies (inspired by reference's skill accordion) */}
        <section className="space-y-8 pt-8 border-t border-black/[0.08]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
              <Layers className="w-3.5 h-3.5 text-[#EA6C11]" />
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
              Core Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#EA6C11]" />
                <h3 className="text-sm font-semibold text-[#141414]">Design &amp; Research</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-[#5D5F5F]">
                <li>· User Journey Mapping</li>
                <li>· User-Centered Design</li>
                <li>· Design Thinking Frameworks</li>
                <li>· Wireframing &amp; Flow Architecture</li>
                <li>· Information Hierarchy</li>
                <li>· Usability Review &amp; Testing</li>
                <li>· Rapid Interactive Prototyping</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA6C11]" />
                <h3 className="text-sm font-semibold text-[#141414]">Tools &amp; Systems</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-[#5D5F5F]">
                <li>· Figma &amp; FigJam</li>
                <li>· Whimsical &amp; Miro</li>
                <li>· Scalable Design Systems</li>
                <li>· Component Libraries &amp; Tokens</li>
                <li>· Low-Code Builders &amp; Logic</li>
                <li>· Responsive Breakpoint Craft</li>
                <li>· Engineering Handoff Specs</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#EA6C11]" />
                <h3 className="text-sm font-semibold text-[#141414]">Teaching &amp; Mentorship</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-[#5D5F5F]">
                <li>· Design Thinking Guidance</li>
                <li>· UX Process Workshops</li>
                <li>· Student Mentorship</li>
                <li>· Academic Research Support</li>
                <li>· Empathetic Design Feedback</li>
                <li>· Portfolio &amp; Case Study Guidance</li>
                <li>· Cross-Functional Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Interests & Creative Pursuits (Reference's Hobbies Grid) */}
        <section className="space-y-8 pt-8 border-t border-black/[0.08]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
              <Heart className="w-3.5 h-3.5 text-[#EA6C11]" />
              <span>BEYOND THE DESK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
              My Interests
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Mentoring</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Design Systems</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Traveling</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Photography</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Fitness</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/10 text-center space-y-2 hover:border-[#EA6C11] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EA6C11]/10 text-[#EA6C11] mx-auto flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-[#141414] block">Creative Craft</span>
            </div>
          </div>
        </section>

        {/* 6. Contact Information Section (no form, clickable email & tel per instruction 7) */}
        <section className="space-y-8 pt-8 border-t border-black/[0.08]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
              <Mail className="w-3.5 h-3.5 text-[#EA6C11]" />
              <span>DIRECT CONTACT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-[#5D5F5F] max-w-2xl">
              Whether you want to discuss design craft, mentoring opportunities, or collaborate on digital product design, feel free to reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#8E9090] block">
                  Email Address
                </span>
                <a
                  href="mailto:siddhikinj18@gmail.com"
                  className="text-base font-medium text-[#141414] hover:text-[#EA6C11] transition-colors break-all"
                >
                  siddhikinj18@gmail.com
                </a>
                <p className="text-xs text-[#5D5F5F]">
                  Click to launch your email client.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-black/5 hover:bg-black/10 text-[#141414] rounded transition-colors w-fit"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#8E9090] block">
                  Phone Number
                </span>
                <a
                  href="tel:+918424960525"
                  className="text-base font-medium text-[#141414] hover:text-[#EA6C11] transition-colors"
                >
                  +91 8424960525
                </a>
                <p className="text-xs text-[#5D5F5F]">
                  Click to dial directly on mobile devices.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-black/5 hover:bg-black/10 text-[#141414] rounded transition-colors w-fit"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3 h-3" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#8E9090] block">
                  Location &amp; Availability
                </span>
                <div className="flex items-center gap-2 text-base font-medium text-[#141414]">
                  <MapPin className="w-4 h-4 text-[#EA6C11]" />
                  <span>Pune, India</span>
                </div>
                <p className="text-xs text-[#5D5F5F] leading-relaxed">
                  Junior UI/UX Designer at Three Matters Lab Pvt Ltd. Available for design discussions &amp; mentoring.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={PERSONAL_DETAILS.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EA6C11] hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
