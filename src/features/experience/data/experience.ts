import type { ExperienceData } from "../types/experience.types";

export const experienceData: ExperienceData = {
  title: "Work Experience",
  subtitle: "Career Path",
  description:
    "A timeline of my professional journey and the organizations I've contributed to.",
  items: [
    {
      company: "Maple Tech Space",
      location: "Infopark Thrissur, Koratty, Kerala",
      role: "Senior React / Next.js Developer",
      period: "2021 – Present",
      description: "",
      points: [
        "Performance Engineering: Spearheaded the optimization of thecanadianhome.com, a high-traffic real estate marketplace. Resolved critical API bottlenecks by implementing advanced caching and streaming strategies in Next.js, significantly improving SEO scores and user retention.",
        "Feature Architecture: Designed and implemented a complex Map-based property search engine and an integrated real-time chat system for buyer-agent communication.",
        "Enterprise Tooling: Architected the frontend for a custom internal CRM, streamlining lead management and property workflows.",
      ],
    },
    {
      company: "Personal SaaS Project: skoohub.com",
      location: "Remote / Malappuram, Kerala",
      role: "Full-Stack Developer",
      period: "2024 – Present",
      description: "",
      points: [
        "Product Architecture: Building a comprehensive School Management System from the ground up using TanStack Start and oRPC for a fully type-safe, high-performance SaaS experience.",
        "Security & Data: Implemented robust authentication using BetterAuth and architected complex data schemas using Prisma ORM with PostgreSQL.",
        "End-to-End Ownership: Managed entire product lifecycle, including UI/UX design in Figma and scalable backend infrastructure.",
      ],
    },
    {
      company: "Capo International Trading Co.",
      location: "Malappuram, Kerala",
      role: "React/Next.js Developer",
      period: "2020 – 2021",
      description: "",
      points: [
        "E-commerce Delivery: Developed cocoshoppy.com, an end-to-end grocery e-commerce platform. Managed the complete integration of product catalogs and secure Payment Gateways.",
        "Real-time Systems: Integrated Socket.io for live order alerts and real-time dashboard updates, reducing order processing time. Admin Infrastructure: Built a comprehensive Admin Dashboard for inventory control and order tracking.",
        "Mobile Outreach: Developed a companion mobile application using Flutter (WebView) to expand market reach to mobile users.",
      ],
    },
    {
      company: "Riosis Pvt Ltd",
      location: "Angadipuram, Malappuram, Kerala (near Manjeri)",
      role: "Front-End Developer",
      period: "2019 – 2020",
      description: "",
      points: [
        "Dashboard Engineering: Led the frontend development of an Enterprise Banking CRM Dashboard using Vue.js and Nuxt.js.",
        "UI Design Excellence: Balanced roles as a UI Designer and Developer to deliver pixel-perfect PSD-to-HTML conversions and high-fidelity user interfaces.",
      ],
    },
    {
      company: "Multiple Companies",
      location: "Kerala / Various Locations",
      role: "Early Career (2013 – 2019)",
      period: "2013 – 2019",
      description: "",
      points: [
        "HTML Developer: at Deantz Pvt Ltd - Technopark, Thiruvananthapuram, Kerala",
        "Graphic Designer: at MK Group of companies, Vengara, Malappuram, Kerala",
        "Graphic Designer: at Berhama Studio - Ras Al Khaimah - UAE",
      ],
    },
  ],
};
