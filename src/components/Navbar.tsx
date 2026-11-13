import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";
import { useRouter, withBasePath } from "../router/RouterContext";

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = "home", onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  const handleNavClick = (sectionId: string, pageName: string) => {
    setMobileMenuOpen(false);
    if (pageName === "about") {
      navigate("/about");
      return;
    }
    if (onNavigate) {
      onNavigate(pageName);
    }
    if (currentPath !== "/") {
      navigate("/");
      setTimeout(() => {
        if (sectionId.startsWith("#")) {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 50);
    } else {
      if (sectionId.startsWith("#")) {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Original SK Logo */}
        <a
          href={withBasePath("/")}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#top", "home");
          }}
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA6C11] rounded-sm"
          aria-label="Siddhi Kinjawadekar - Home"
        >
          <img
            src={withBasePath("/sk-logo.png")}
            alt="Siddhi Kinjawadekar - Design, Identity, Visual Storytelling"
            className="h-10 sm:h-11 w-auto object-contain transition-opacity group-hover:opacity-90"
            onError={(e) => {
              // Graceful fallback to original path if relative alias issues arise
              (e.currentTarget as HTMLImageElement).src =
                withBasePath("/assets/aistudio/f7b7e6ef-df87-4a61-b3d8-83a3d543690d_08dd6e38.png");
            }}
          />
        </a>

        {/* Zone 2: Navigation Links (Work, About, Contact) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#454747]" aria-label="Main Navigation">
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#works", "home");
            }}
            className="hover:text-black transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#EA6C11] after:transition-all"
          >
            Work
          </a>
          <button
            type="button"
            onClick={() => handleNavClick("#about", "about")}
            className={`transition-colors py-1 text-left relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#EA6C11] after:transition-all ${
              currentPath === "/about"
                ? "text-black font-semibold after:w-full"
                : "text-[#454747] hover:text-black after:w-0 hover:after:w-full"
            }`}
          >
            About
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact", "home");
            }}
            className="hover:text-black transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#EA6C11] after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Download Resume / Get In Touch) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="https://drive.google.com/file/d/10zcVjKSjYeYAvrOoDvDAmffdgnHssG7b/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-transparent border border-black/20 hover:border-black/60 transition-all rounded-sm overflow-hidden"
          >
            {/* 4 Corner notch markers */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#EA6C11] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#EA6C11] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#EA6C11] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#EA6C11] opacity-0 group-hover:opacity-100 transition-opacity" />

            <Download className="w-3.5 h-3.5 text-[#EA6C11] transition-transform group-hover:translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#454747] hover:text-black rounded-lg focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] bg-[#FAF9F5] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#works", "home");
              }}
              className="text-base font-medium text-[#2F3131] hover:text-[#EA6C11] py-2"
            >
              Work
            </a>
            <button
              type="button"
              onClick={() => handleNavClick("#about", "about")}
              className={`text-base font-medium text-left py-2 ${
                currentPath === "/about" ? "text-[#EA6C11] font-semibold" : "text-[#2F3131] hover:text-[#EA6C11]"
              }`}
            >
              About
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact", "home");
              }}
              className="text-base font-medium text-[#2F3131] hover:text-[#EA6C11] py-2"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 border-t border-black/[0.08]">
            <a
              href="https://drive.google.com/file/d/10zcVjKSjYeYAvrOoDvDAmffdgnHssG7b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-black border border-black/30 rounded-sm"
            >
              <Download className="w-4 h-4 text-[#EA6C11]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
