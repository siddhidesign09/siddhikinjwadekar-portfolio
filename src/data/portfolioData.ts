/**
 * Core portfolio data and case study structures for Siddhi Kinjawadekar
 */

export interface Project {
  id: string;
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  timeline: string;
  platform: string;
  sector: string;
  scope: string[];
  summary: string;
  impactMetrics: { label: string; value: string }[];
  placeholderLabel: string;
  image?: string;
  tags: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "bitamin-catalogs",
    slug: "bitamin-catalogs-products",
    route: "/work/bitamin-catalogs-products",
    title: "Making Product Catalogs Easier to Manage",
    subtitle: "Designing a scalable catalog experience for businesses selling through WhatsApp.",
    category: "B2B SaaS / Commerce",
    role: "UX / Product Designer",
    timeline: "3 Months",
    platform: "Web Application",
    sector: "Conversational Commerce · WhatsApp Ecosystem",
    scope: [
      "Product Research",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Usability Review"
    ],
    summary: "At FORK, I worked on designing a Catalogs & Products experience that helps businesses manage their inventory without getting caught up in the technical complexity behind it. The goal wasn't to remove advanced capabilities. It was to make them feel approachable.",
    impactMetrics: [
      { label: "Product Creation", value: "2 Methods (Single & Bulk Excel)" },
      { label: "End-to-End Scope", value: "Setup, Validation & Sync" },
      { label: "Key Design Focus", value: "Approachable Error Recovery" }
    ],
    placeholderLabel: "FORK Catalogs & Products Dashboard Mockup",
    image: "https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Catalogs/1st%20image%20Catalog.jpg",
    tags: ["Web App", "Catalog Management", "Error Recovery", "WhatsApp API"],
    featured: true
  },
  {
    id: "whatsapp-flows",
    slug: "bitamin-whatsapp-flows",
    route: "/work/bitamin-whatsapp-flows",
    title: "Making Complex WhatsApp Journeys Easier to Build",
    subtitle: "Designing a visual Flow builder that turns technical configurations into understandable interactions.",
    category: "Visual Builder / Low-Code SaaS",
    role: "UX / Product Designer",
    timeline: "3 Months",
    platform: "Web Application",
    sector: "Automation & Interactive Messaging",
    scope: [
      "Product Research",
      "UX Architecture",
      "Interaction Design",
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototyping"
    ],
    summary: "At FORK, I translated complex WhatsApp Flows developer schemas into an accessible visual canvas, enabling businesses to create multi-step journeys, conditional logic (IF / SWITCH), and data-capturing forms without writing JSON or configuring backend logic.",
    impactMetrics: [
      { label: "Lifecycle Scope", value: "Draft to Approval & Active" },
      { label: "Logic Explorations", value: "5 IF / SWITCH Approaches" },
      { label: "Core Focus", value: "Visual Relationship Mapping" }
    ],
    placeholderLabel: "WhatsApp Flows Visual Canvas & Node Builder Mockup",
    image: "https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Flows/3rd%20image%20Flows.jpg",
    tags: ["Visual Canvas", "Conditional Logic", "Design Systems"],
    featured: true
  },
  {
    id: "fitpulse",
    slug: "fitpulse",
    route: "/work/fitpulse",
    title: "Bringing the Entire Gym Experience Together",
    subtitle: "Designing FitPulse, a connected management experience for gym owners, trainers and members.",
    category: "Health & Fitness SaaS",
    role: "UI/UX Designer",
    timeline: "Academic Thesis",
    platform: "Mobile & Web Application",
    sector: "Gym Operations & Fitness Management",
    scope: [
      "On-Site UX Research (4 Gyms)",
      "User Personas & Journey Mapping",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "UI Design & V1/V2 Iterations"
    ],
    summary: "For my thesis project, I explored how a single digital platform could connect the people running a gym with the people training in it. Researched 4 gyms in Ambernath and designed a high-fidelity, multi-role gym management concept spanning 105+ screens.",
    impactMetrics: [
      { label: "Screens Designed", value: "105+ Screens" },
      { label: "User Groups", value: "3 (Owners, Trainers, Members)" },
      { label: "Field Research", value: "4 Gyms in Ambernath" }
    ],
    placeholderLabel: "FitPulse 3-Dashboard Multi-Role Ecosystem Mockup",
    image: "https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/Gym-FitPulse/Shot.jpg.png",
    tags: ["Multi-Role SaaS", "Mobile App", "HealthTech", "105+ Screens"],
    featured: true
  },
  {
    id: "duolingo",
    slug: "duolingo-conversational-confidence",
    route: "/work/duolingo-conversational-confidence",
    title: "Helping Language Learners Find Their Voice",
    subtitle: "Exploring how Duolingo could bridge the gap between learning a language and confidently speaking it.",
    category: "EdTech / AI-Powered UX",
    role: "UX/UI Designer",
    timeline: "4 Days",
    platform: "Mobile Application",
    sector: "EdTech & Language Learning",
    scope: [
      "UX Research",
      "Feature Conceptualization",
      "User Persona & Pain Points",
      "Wireframing",
      "UI Design"
    ],
    summary: "Explored how Duolingo could bridge the conversational confidence gap through 4 connected feature concepts: Live Rooms Lobby, AI Co-Host for gentle conversational support, Cultural Capsules for real-world nuance, and Progress Feedback.",
    impactMetrics: [
      { label: "Core Challenge", value: "Conversational Confidence Gap" },
      { label: "Feature Concepts", value: "4 Connected Features" },
      { label: "Design Focus", value: "Active Speaking Practice" }
    ],
    placeholderLabel: "Duolingo Live Rooms & AI Co-Host Mockup",
    image: "https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/duolingo-symbol-icon-logo-png-transparent%201.jpg",
    tags: ["EdTech", "Conversational AI", "Mobile UX", "Feature Concept"],
    featured: true
  },
  {
    id: "design-sprints",
    slug: "24-hour-ux-design-sprint",
    route: "/work/24-hour-ux-design-sprint",
    title: "Design Decisions, Made Under Pressure",
    subtitle: "Two rapid design challenges exploring how clarity, trust and usability can be improved within 24 hours.",
    category: "AI Platforms / Rapid UX Sprints",
    role: "UI/UX Designer",
    timeline: "24-Hour Design Sprints",
    platform: "Web & Conversational UI",
    sector: "AI Content (Abun) & AI Services (ServiceHive)",
    scope: [
      "UX Analysis",
      "Information Hierarchy",
      "Landing Page Redesign",
      "Dual-Path Chatbot",
      "High-Fidelity Design"
    ],
    summary: "Demonstrated high-velocity design execution across two distinct AI platforms: restructuring Abun's value proposition into an approachable landing page, and crafting ServiceHive's dual-path (technical vs. business) conversational onboarding.",
    impactMetrics: [
      { label: "Sprint Duration", value: "24 Hours Each" },
      { label: "Platforms Designed", value: "Abun & ServiceHive" },
      { label: "Chatbot Paths", value: "Technical vs Business" }
    ],
    placeholderLabel: "Abun & ServiceHive 24-Hour Design Sprint Mockups",
    image: "https://raw.githubusercontent.com/siddhidesign09/case-study-images/refs/heads/main/24hrs-sprint/Cover%20main%20image%2024hrs.png",
    tags: ["Rapid Sprints", "AI Landing Page", "Conversational UX", "High Velocity"],
    featured: true
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Problem solving",
    description: "I don't start with solutions. I start by finding the real problem, often buried under assumptions the roadmap already moved past."
  },
  {
    number: "02",
    title: "Craft",
    description: "Great design is invisible, it never announces itself, it just feels right. I bring the craft that makes every detail disappear into the experience, long before it ships."
  },
  {
    number: "03",
    title: "Strategy",
    description: "I connect design decisions to business outcomes, not just user delight. Every UI choice ties back to data and what actually moves the metric that matters."
  },
  {
    number: "04",
    title: "Prototyping",
    description: "I create interactive, high-fidelity prototypes that communicate design intent clearly and enable rapid validation with real users."
  },
  {
    number: "05",
    title: "Collaboration",
    description: "No good idea survives alone. I work in lockstep with engineering, data, and product to keep momentum high and turn ideas into shipped work."
  },
  {
    number: "06",
    title: "Ownership",
    description: "I take projects end-to-end, from early strategy through shipped product, driving them forward at every stage without needing to be prompted."
  }
];

export const DESIGN_PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Understanding context & constraints",
    detail: "Conduct user interviews, analyze technical constraints (such as Meta/WhatsApp APIs), and map system workflows before drawing a single screen."
  },
  {
    step: "02",
    name: "Define",
    title: "Framing the real problem",
    detail: "Synthesize user research, create mental models, prioritize requirements using MoSCoW, and define what users actually need to see."
  },
  {
    step: "03",
    name: "Design",
    title: "Exploration & system craft",
    detail: "Iterate from low-fidelity wireframes to polished high-fidelity prototypes, building consistent design systems, tokens, and components."
  },
  {
    step: "04",
    name: "Validate",
    title: "Testing with real constraints",
    detail: "Review with developers, product managers, and users to evaluate error states, edge cases, recovery paths, and interaction density."
  },
  {
    step: "05",
    name: "Deliver",
    title: "Seamless engineering handoff",
    detail: "Package components, specs, error states, and responsive behavior for clean engineering implementation and post-launch QA."
  }
];

export const PERSONAL_DETAILS = {
  name: "Siddhi Kinjawadekar",
  role: "Junior UI/UX Designer",
  currentCompany: "Three Matters Lab Pvt Ltd",
  specialization: "Design · Identity · Visual Storytelling",
  email: "siddhikinj18@gmail.com",
  phone: "+91 8424960525",
  location: "Pune, India",
  availability: "Junior UI/UX Designer at Three Matters Lab Pvt Ltd · Present / Ongoing",
  links: {
    linkedin: "https://www.linkedin.com/in/siddhi-kinjawadekar18",
    github: "https://github.com"
  }
};
