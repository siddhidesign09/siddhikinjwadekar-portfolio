/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { RouterProvider, useRouter } from "./router/RouterContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { SelectedWorks } from "./components/SelectedWorks";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ToolkitBento } from "./components/ToolkitBento";
import { ContactFooter } from "./components/ContactFooter";
import { BitaminCatalogsPage } from "./pages/BitaminCatalogsPage";
import { BitaminWhatsAppFlowsPage } from "./pages/BitaminWhatsAppFlowsPage";
import { FitPulsePage } from "./pages/FitPulsePage";
import { DuolingoPage } from "./pages/DuolingoPage";
import { DesignSprintPage } from "./pages/DesignSprintPage";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudyDetailView } from "./pages/CaseStudyDetailView";

function PortfolioApp() {
  const { currentPath } = useRouter();

  // Route 0: Dedicated About Page
  if (currentPath === "/about") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <AboutPage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 1: Dedicated Bitamin - Catalogs & Products case study detail page
  if (currentPath === "/work/bitamin-catalogs-products") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <BitaminCatalogsPage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 2: Dedicated Bitamin - WhatsApp Flows case study detail page
  if (currentPath === "/work/bitamin-whatsapp-flows") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <BitaminWhatsAppFlowsPage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 3: Dedicated FitPulse case study detail page
  if (currentPath === "/work/fitpulse") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <FitPulsePage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 4: Dedicated Duolingo case study detail page
  if (currentPath === "/work/duolingo-conversational-confidence") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <DuolingoPage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 5: Dedicated 24-Hour UX Design Sprint (Abun & ServiceHive) case study detail page
  if (currentPath === "/work/24-hour-ux-design-sprint") {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <DesignSprintPage />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 2: Dynamic case study detail pages for other projects
  if (currentPath.startsWith("/work/")) {
    const slug = currentPath.replace("/work/", "");
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
        <Navbar />
        <main className="flex-1">
          <CaseStudyDetailView projectSlug={slug} />
        </main>
        <ContactFooter />
      </div>
    );
  }

  // Route 3: Master Homepage
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2F3131] flex flex-col selection:bg-[#EA6C11]/20 selection:text-[#EA6C11]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeTicker />
        <SelectedWorks />
        <ExpertiseSection />
        <ToolkitBento />
      </main>
      <ContactFooter />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <PortfolioApp />
    </RouterProvider>
  );
}
