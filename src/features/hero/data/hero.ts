import { HeroData } from "../types/hero.types";

export const heroData: HeroData = {
  badge: "Available for new opportunities",
  headline: {
    prefix: "Senior",
    highlight: "React & Next.js",
    suffix: "Developer",
  },
  subheadline:
    "With 7+ years of experience building high-performance web applications. I specialize in scalable frontend architecture, modern TypeScript, and enterprise-grade UI systems.",
  actions: [
    {
      label: "View Featured Work",
      href: "#projects",
      primary: true,
    },
    {
      label: "Download CV",
      href: "/resume.pdf",
      primary: false,
    },
  ],
  techStack: {
    title: "Powering modern experiences with",
    items: [
      { name: "React", iconName: "React" },
      { name: "Next.js", iconName: "NextJS" },
      { name: "TypeScript", iconName: "TypeScript" },
      { name: "Tailwind CSS", iconName: "Tailwind" },
      { name: "Vite", iconName: "Vite" },
      { name: "TanStack", iconName: "TanStack" },
    ],
  },
};
