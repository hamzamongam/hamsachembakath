import { HeroData } from "../types/hero.types";

export const heroData: HeroData = {
  badge: "Available for new opportunities",
  headline: {
    prefix: "Building",
    highlight: "Digital Products",
    suffix: "that matter.",
  },
  subheadline:
    "I'm Hamsa Chembakath, a Senior Frontend Architect. I specialize in crafting high-performance SaaS applications using Next.js, modern TypeScript, and beautiful, accessible UI systems.",
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
