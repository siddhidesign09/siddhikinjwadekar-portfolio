import React, { useState } from "react";
import { Check, Copy, ArrowUpRight, MapPin, Download } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";
import { useRouter, withBasePath } from "../router/RouterContext";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeWordIdx, setActiveWordIdx] = useState(0);
  const { currentPath, navigate } = useRouter();
  const cyclingWords = ["design", "shape", "elevate"];

  // Toggle cycling word on interval or click
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % cyclingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNav = (target: string) => {
    if (target === "about") {
      navigate("/about");
      return;
    }
    if (currentPath !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24 bg-[#141414] text-white pt-24 sm:pt-28 pb-12 rounded-t-3xl border-t border-black/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EA6C11]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Section Header matching reference */}
        <div className="mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50">
            <span className="w-2 h-2 rounded-full bg-[#EA6C11]" />
            <span>GET IN TOUCH</span>
          </div>

          {/* Cycling headline inspired by reference "Let's design / shape / elevate incredible work together" */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
            Let's{" "}
            <span className="font-serif italic text-[#EA6C11] underline decoration-white/30 decoration-1 underline-offset-8 transition-all">
              {cyclingWords[activeWordIdx]}
            </span>
            <br />
            incredible work together.
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl font-light pt-2">
            Junior UI/UX Designer at Three Matters Lab Pvt Ltd. I am always interested in discussing digital product design, UX systems, and design mentorship.
          </p>
        </div>

        {/* Direct Contact Cards (Replacing Form per Change 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Direct Contact Card */}
          <div className="p-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="text-base sm:text-lg font-medium text-white hover:text-[#EA6C11] transition-colors break-all"
              >
                {PERSONAL_DETAILS.email}
              </a>
              <p className="text-xs text-white/50 leading-relaxed">
                Send an email directly or copy the address to your clipboard.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="p-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block">
                Location &amp; Current Role
              </span>
              <div className="flex items-center gap-2 text-white font-medium text-base sm:text-lg">
                <MapPin className="w-4 h-4 text-[#EA6C11]" />
                <span>{PERSONAL_DETAILS.location}</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                Junior UI/UX Designer at Three Matters Lab Pvt Ltd. Active in design systems and mentorship.
              </p>
            </div>

            {/* Location & Availability info */}
          </div>

          {/* Professional Links Card */}
          <div className="p-8 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={PERSONAL_DETAILS.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#EA6C11]" />
                </a>
                <a
                  href={withBasePath("/assets/aistudio/Case_Studies_1bddce2b.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors"
                >
                  <span>Resume (PDF)</span>
                  <Download className="w-3 h-3 text-[#EA6C11]" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-white/40 font-mono">
              Always happy to connect and talk design craft.
            </p>
          </div>
        </div>

        {/* Bottom Navigation & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Authentic SK Logo - True Colors preserved on clean pill surface */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav("#top")}
              className="bg-white px-3 py-1.5 rounded-md border border-white/20 focus:outline-none"
            >
              <img
                src={withBasePath("/sk-logo.png")}
                alt="Siddhi Kinjawadekar Logo"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    withBasePath("/assets/aistudio/f7b7e6ef-df87-4a61-b3d8-83a3d543690d_08dd6e38.png");
                }}
              />
            </button>
          </div>

          {/* Footer Quick Links */}
          <div className="flex items-center gap-8 text-xs font-mono text-white/60">
            <button
              type="button"
              onClick={() => handleNav("#top")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNav("#works")}
              className="hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              type="button"
              onClick={() => handleNav("about")}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-white/40 text-center md:text-right">
            © 2026 Siddhi Kinjawadekar · Design, Identity &amp; Visual Storytelling
          </div>
        </div>
      </div>
    </footer>
  );
};
