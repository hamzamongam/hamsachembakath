import { HeroData } from "../types/hero.types";

export const heroData: HeroData = {
  badge: "Available for new opportunities",
  headline: {
    prefix: "Engineering",
    highlight: "Digital Growth",
    suffix: "& Experiences.",
  },
  subheadline:
    "I'm Hamsa Chembakath, a Senior Frontend Architect & Growth Engineer. I build high-performance SaaS applications that rank high, load fast, and convert visitors into customers.",
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
