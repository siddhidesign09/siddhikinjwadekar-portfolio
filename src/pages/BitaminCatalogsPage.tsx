import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet, 
  RefreshCw, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Database,
  Sliders,
  Check
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
  { id: "system-discovery", label: "Understanding the System" },
  { id: "what-i-learned", label: "What I Learned" },
  { id: "design-direction", label: "Design Direction" },
  { id: "designing-the-experience", label: "Designing the Experience" },
  { id: "error-recovery", label: "Error Recovery & Duplicates" },
  { id: "product-workspace", label: "Product List Workspace" },
  { id: "wireframes-to-screens", label: "Wireframes to High-Fi" },
  { id: "final-experience", label: "The Final Experience" },
  { id: "reflections", label: "What This Project Taught Me" }
];

export const BitaminCatalogsPage: React.FC = () => {
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
            Case Study 01 · FORK
          </span>
        </div>
      </div>

      {/* Case Study Hero Section */}
      <header className="pt-12 sm:pt-20 pb-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>B2B SaaS · Conversational Commerce · Web Application</span>
          </div>

          {/* Project Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141414] leading-[1.12]">
              Making Product Catalogs Easier to Manage
            </h1>
            <p className="text-xl sm:text-2xl text-[#5D5F5F] font-light leading-snug">
              Designing a scalable catalog experience for businesses selling through WhatsApp.
            </p>
          </div>

          {/* Introductory Narrative */}
          <div className="max-w-3xl space-y-3 pt-2 text-base sm:text-lg text-[#454747] leading-relaxed">
            <p>
              Managing five products is simple. Managing hundreds, each with different prices, images, variants and platform requirements, is a completely different story.
            </p>
            <p>
              At FORK, I worked on designing a Catalogs &amp; Products experience that helps businesses manage their inventory without getting caught up in the technical complexity behind it. The goal wasn't to remove advanced capabilities. It was to make them feel approachable.
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
                Product Research, Information Architecture, User Flows, Wireframing, UI Design, Prototyping &amp; Usability Review
              </span>
            </div>
          </div>
              {/* Hero Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                <img
                  src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/1st%20image%20Catalog.jpg"
                  alt="FORK Catalogs & Products dashboard, product list, and bulk upload experience"
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
            <label htmlFor="mobile-toc" className="text-xs font-mono uppercase tracking-wider text-[#8E9090] block mb-2">
              Jump to Section
            </label>
            <select
              id="mobile-toc"
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
                  <span className="text-xs font-mono text-[#EA6C11] block">Creation Flow</span>
                  <h3 className="text-lg font-semibold text-[#141414]">2 Creation Methods</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Individual product entry and Excel-based bulk upload with row validation.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">End-to-End Scope</span>
                  <h3 className="text-lg font-semibold text-[#141414]">Complete Lifecycle</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Catalog setup, product creation, validation and error recovery.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/10 shadow-xs space-y-2">
                  <span className="text-xs font-mono text-[#EA6C11] block">Key Design Focus</span>
                  <h3 className="text-lg font-semibold text-[#141414]">Accessible Operations</h3>
                  <p className="text-xs text-[#5D5F5F] leading-relaxed">
                    Making complex inventory operations easy to understand and recover without panic.
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
                  It is a business automation platform that helps businesses manage customer engagement, marketing, commerce and workflows through WhatsApp and connected channels.
                </p>
                <p>
                  <strong>Catalogs &amp; Products</strong> is one part of that ecosystem. It allows businesses to create catalogs, connect them to their WhatsApp Business Account, manage products and keep their product information organized.
                </p>
                <p>
                  What looks like a straightforward inventory tool on the surface involves a surprisingly complex system underneath. A single product can have multiple images, attributes, variants, identifiers and validation requirements. When hundreds of products are involved, even a small error can turn into a frustrating task.
                </p>
                <p className="font-medium text-[#141414]">
                  That's where the design challenge began.
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
                  "Adding products should not feel like managing a spreadsheet full of errors."
                </blockquote>
                <p>
                  Businesses need a quick and reliable way to manage their products. But they don't all work in the same way.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#141414] block">Small Businesses</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      A small merchant might want to add one product at a time, upload an image, set a price, and move on immediately.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-white border border-black/10 space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#141414] block">Larger Businesses</span>
                    <p className="text-xs text-[#5D5F5F] leading-relaxed">
                      A larger retail brand might need to bulk-upload hundreds of products at once, handle duplicates, correct mismatched data, and sync everything with WhatsApp.
                    </p>
                  </div>
                </div>
                <p>
                  Designing separate experiences for every scenario would make the product difficult to navigate. Putting every possible option on one screen would be just as overwhelming.
                </p>
                <div className="p-6 rounded-xl bg-[#141414] text-white space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">Core Question</span>
                  <p className="text-base sm:text-lg font-light leading-snug">
                    How might we make product management simple for small businesses while still giving larger businesses the flexibility and control they need?
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Understanding the System Before Designing It */}
            <section id="system-discovery" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>04</span>
                <span>/</span>
                <span>SYSTEM DISCOVERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Understanding the System Before Designing It
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  Before jumping into screens, I spent time understanding how product catalogs work within Meta and WhatsApp.
                </p>
                <p>
                  I explored how WhatsApp Business Accounts connect to catalogs, what product information is required by the API, how variants are structured, and what happens when a product fails validation during synchronization.
                </p>
                
                {/* Key Principle Distinction */}
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs my-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11] block">
                    Core Design Principle
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-xs font-semibold text-[#EA6C11] uppercase tracking-wider block mb-1">Under the Hood</span>
                      <h4 className="text-sm font-semibold text-black">What the system needs to know</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1 leading-relaxed">
                        API endpoints, token authentication, webhook synchronization, payload formats, and Meta status codes.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#FAF9F5] border border-black/5">
                      <span className="text-xs font-semibold text-[#EA6C11] uppercase tracking-wider block mb-1">On the Surface</span>
                      <h4 className="text-sm font-semibold text-black">What the user actually needs to see</h4>
                      <p className="text-xs text-[#5D5F5F] mt-1 leading-relaxed">
                        Whether their catalog is connected, whether their products are ready, and what specific action to take if something goes wrong.
                      </p>
                    </div>
                  </div>
                </div>

               {/* Ecosystem Diagram Schematic */}
              <div className="rounded-lg overflow-hidden bg-white mt-4">
              <img
              src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/2nd%20flow%20Catalog.png"
              alt="Ecosystem diagram connecting Business, WhatsApp Business Account, Catalog, and Products"
              className="block w-full h-auto"
            />
             </div>
                </div>
            </section>

            {/* Section 5: What I Learned */}
            <section id="what-i-learned" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>05</span>
                <span>/</span>
                <span>KEY INSIGHTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                What I Learned: Three Insights That Shaped the Experience
              </h2>

              <div className="space-y-6 pt-2">
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">01.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Bulk upload should save time, not create more work.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Uploading an Excel file is useful until one incorrect row causes the entire process to fail. I wanted users to be able to continue with valid products while fixing only the ones that needed attention.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">02.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Error messages should help people move forward.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    A message saying "Upload failed" doesn't tell users much. They need to understand what went wrong, where it happened, and how to correct it without digging into documentation.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-[#EA6C11]">03.</span>
                    <h3 className="text-lg font-semibold text-[#141414]">Simplicity doesn't mean removing control.</h3>
                  </div>
                  <p className="text-sm text-[#5D5F5F] leading-relaxed pl-7">
                    Businesses still need to manage variants, duplicates, product attributes, and synchronization. The challenge was to introduce those capabilities at the right moment instead of displaying everything upfront.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Turning Insights into a Design Direction */}
            <section id="design-direction" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>06</span>
                <span>/</span>
                <span>DESIGN DIRECTION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Turning Insights into a Design Direction
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I structured the experience around two core objects:
                </p>
                
                <div className="p-6 rounded-xl bg-white border border-black/10 text-center space-y-2">
                  <span className="text-lg font-mono font-bold text-black">Catalog ➔ Products</span>
                  <p className="text-xs text-[#5D5F5F]">
                    A catalog acts as the container. Products sit within it, with their own information, variants, and management actions.
                  </p>
                </div>

                <p className="pt-2">
                  From there, I mapped the broader journey:
                </p>

                {/* Journey Flow */}
                  <p className="text-xs text-[#5D5F5F] pt-2">
                    Mapping the complete journey helped me identify situations that might otherwise have been missed, especially around validation, duplicate products, and error recovery.
                  </p>
                    
                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/1st%20flow%20Catalog.png"
                    alt="End-to-end user flow"
                    className="block w-full h-auto m-0 p-0"
                  />
                </div>

              </div>
            </section>

            {/* Section 7: Designing the Experience */}
            <section id="designing-the-experience" className="scroll-mt-36 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>07</span>
                <span>/</span>
                <span>EXECUTION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Designing the Experience
              </h2>

              <div className="space-y-8">
                {/* 01. Simple catalog setup */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#141414]">01. Starting with a simple catalog setup</h3>
                  <p className="text-sm text-[#454747] leading-relaxed">
                    I kept catalog creation focused on the information needed to get started. Instead of asking users to configure everything immediately, the experience guides them through creating a catalog and connecting the relevant WhatsApp Business Account. The intention was to make the first step feel manageable.
                  </p>
                </div>

                {/* 02. Essential info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#141414]">02. Designing product creation around essential information</h3>
                  <p className="text-sm text-[#454747] leading-relaxed">
                    Not every product needs the same level of detail. I organized product creation around essential fields such as name, description, price, category, identifiers, and images. Additional attributes, including size, colour, material, and pattern, could be introduced when relevant. This gave users a simpler starting point without limiting more advanced product structures.
                  </p>
                </div>

                {/* 03. Forgiving bulk upload */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#141414]">03. Making bulk upload more forgiving</h3>
                  <p className="text-sm text-[#454747] leading-relaxed">
                    This was one of the most important parts of the project. Instead of treating an uploaded Excel file as one successful or failed action, I designed a workflow that validates products and separates them into two groups:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-200">
                      <span className="text-xs font-mono font-semibold text-emerald-800 uppercase block mb-1">
                        Ready to Upload
                      </span>
                      <p className="text-xs text-emerald-900 leading-relaxed">
                        Products with valid information ready to sync immediately to Meta without waiting for failed rows.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200">
                      <span className="text-xs font-mono font-semibold text-amber-800 uppercase block mb-1">
                        Needs Attention
                      </span>
                      <p className="text-xs text-amber-900 leading-relaxed">
                        Products containing errors, isolated for quick inline fixing without re-uploading the entire spreadsheet.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5D5F5F]">
                    Users can continue with valid products or open a focused error-correction experience. They don't have to search through the entire spreadsheet again.
                  </p>

                  <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                    <img
                      src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/2nd%20image%20Catalog.jpg"
                      alt="Excel bulk upload validation and error recovery flow"
                      className="block w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Error Recovery & Duplicates */}
            <section id="error-recovery" className="scroll-mt-36 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>08</span>
                <span>/</span>
                <span>ERROR STATES &amp; EDGE CASES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Helping Users Recover from Errors &amp; Handle Duplicates
              </h2>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-3">
                  <h3 className="text-lg font-semibold text-[#141414]">04. Helping users recover from errors</h3>
                  <p className="text-sm text-[#454747] leading-relaxed">
                    I designed the <strong>Fix Errors</strong> experience to show only the rows that require correction. Once those fields are updated, users can validate again and continue. This may seem like a small interaction, but it changes the experience from <em>"something went wrong"</em> to <em>"here's what you need to fix."</em>
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-black/10 space-y-3">
                  <h3 className="text-lg font-semibold text-[#141414]">05. Giving users control over duplicates</h3>
                  <p className="text-sm text-[#454747] leading-relaxed">
                    Bulk uploads can contain products that already exist. Rather than silently deleting or merging them, the experience identifies duplicates and presents options such as <strong>Keep Both</strong> or <strong>Merge</strong>. The intention was to make potentially destructive decisions visible and intentional.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Product List as a Workspace */}
            <section id="product-workspace" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>09</span>
                <span>/</span>
                <span>CENTRAL WORKSPACE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                Making the Product List a Working Space
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  The product list needed to be more than a table. I designed it as a central workspace where users could scan products, review information, identify errors, manage variants, edit details, and perform catalog-related actions.
                </p>
                <p>
                  The focus was on making everyday management efficient without requiring users to navigate through multiple unrelated screens.
                </p>
                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/3rd%20image%20Catalog.jpg"
                    alt="Product creation, duplicate handling, error recovery, and product list workspace screens"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 10: Wireframes to High-Fi */}
            <section id="wireframes-to-screens" className="scroll-mt-36 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5D5F5F]">
                <span>10</span>
                <span>/</span>
                <span>ITERATION &amp; REFINEMENT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal text-[#141414] tracking-tight">
                From Wireframes to a More Complete Experience
              </h2>
              <div className="space-y-4 text-base text-[#454747] leading-relaxed">
                <p>
                  I explored different information hierarchies, table structures, creation flows, confirmation patterns, and empty states before refining the interface.
                </p>
                <p>
                  The designs were reviewed with the product and development teams to understand technical constraints and improve interaction behaviour. A recurring question during these reviews was:
                </p>
                <div className="p-6 rounded-xl bg-white border border-black/10 shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#EA6C11] block mb-1">
                    Guiding Review Question
                  </span>
                  <p className="text-xl font-serif text-[#141414]">
                    "What does the user need to know right now to take the next step confidently?"
                  </p>
                  <p className="text-xs text-[#5D5F5F] mt-2">
                    That question helped keep the experience focused even when the underlying functionality became more complex.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-xs">
                  <img
                    src="https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/4th%20image%20Catalog.jpg"
                    alt="Early wireframes alongside refined high-fidelity product catalog screens"
                    className="block w-full h-auto"
                  />
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
                  The resulting design brings catalog setup, product creation, bulk upload, validation, error recovery, variants, imagery, and synchronization into one structured workflow.
                </p>
                <p>
                  It supports businesses with different inventory sizes while keeping the core experience understandable. Rather than exposing Meta's technical architecture, the interface organizes tasks around familiar business concepts.
                </p>
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
                  This project changed how I think about complex product experiences. I learned that simplifying an interface doesn't necessarily mean removing features. Sometimes it means doing more work behind the scenes so users don't have to.
                </p>
                <p>
                  It also reinforced how important error states are. They're not secondary screens to design at the end; for a product-management workflow, they're part of the main experience.
                </p>
                
                <div className="p-8 rounded-2xl bg-[#141414] text-white space-y-3 mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EA6C11]">
                    My Biggest Takeaway
                  </span>
                  <p className="text-xl sm:text-2xl font-serif leading-snug">
                    "Good product design makes complex systems feel manageable without taking away the control users need."
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Case Study Navigation */}
            <div className="pt-12 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5D5F5F] hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#EA6C11]" />
                <span>Back to All Works</span>
              </Link>

              <button
                type="button"
                onClick={() => navigate("/work/bitamin-whatsapp-flows")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white hover:bg-black text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Next Project: WhatsApp Flows</span>
                <ArrowRight className="w-4 h-4 text-[#EA6C11]" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
