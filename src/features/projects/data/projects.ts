import type { ProjectsData } from "../types/projects.types";

export const projectsData: ProjectsData = {
  title: "Latest Projects",
  subtitle: "Featured Work",
  description:
    "A collection of products where I drove technical architecture and business impact.",
  items: [
    {
      title: "The Canadian Home",
      role: "Senior Frontend Engineer",
      description:
        "A comprehensive property marketplace handling thousands of listings. I architected the search experience using virtualized lists and synced global state with URL parameters to ensure every filter combination was shareable and SEO-friendly.",
      outcomes: [
        "Reduced page load time by 40% via ISR",
        "Increased organic traffic with Core Web Vitals optimization",
        "Built reusable Design System used across 3 apps",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      links: {
        demo: "https://thecanadianhome.com/",
      },
    },
    {
      title: "AgentRoof",
      role: "Lead Frontend Engineer",
      description:
        "All-in-one Real Estate CRM helping REALTORS® grow their business. I built the lead management system and integrated marketing tools into a unified Next.js dashboard, focusing on complex data visualization and real-time updates.",
      outcomes: [
        "Delivered Custom CRM Dashboard for 500+ agents",
        "Integrated automated lead generation pipelines",
        "Optimized mobile experience for field usage",
      ],
      tags: ["Next.js", "React", "TanStack Query", "Tailwind"],
      links: {
        demo: "https://agentroof.com/",
      },
    },
    {
      title: "Cocoshoppy",
      role: "Frontend Developer",
      description:
        "E-commerce platform empowering rural producers. I developed the vendor dashboard and consumer storefront, focusing on accessibility and ease of use for non-technical users in low-bandwidth areas.",
      outcomes: [
        "Connected local artisans to global markets",
        "Simplified vendor onboarding flow",
        "Fast mobile-first UI for rural connectivity",
      ],
      tags: ["React", "Node.js", "Redux", "PWA"],
      links: {
        demo: "https://www.cocoshoppy.com/",
      },
    },
    {
      title: "Deantz",
      role: "Web Developer",
      description:
        "Digital agency site showcasing data insights. Built with a focus on animation performance and technical SEO to drive organic leads for the agency's services.",
      outcomes: [
        "Improved site performance scores to 90+",
        "Implemented custom SEO tools and schema",
        "Built responsive component library",
      ],
      tags: ["Web Development", "SEO Tools", "Performance"],
      links: {
        demo: "https://deantz.com/",
      },
    },
    {
      title: "Arantis Pharma",
      role: "Frontend Developer",
      description:
        "Corporate digital presence for a pharma leader. Delivered a secure, accessible, and compliant product showcase platform with multi-language support.",
      outcomes: [
        "Professional corporate identity refresh",
        "Accessible product catalog (WCAG compliance)",
        "Multi-language support architecture",
      ],
      tags: ["Modern Web Technologies", "Accessibility", "i18n"],
      links: {
        demo: "https://www.arantispharma.com/",
      },
    },
  ],
};
