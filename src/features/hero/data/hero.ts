import type { HeroData } from "../types/hero.types";

export const heroData: HeroData = {
  badge: "Open to Senior Frontend Roles",
  headline: {
    prefix: "Senior",
    highlight: "React & Next.js",
    suffix: "Engineer",
  },
  subheadline:
    "Specialize in building scalable SaaS products, high-performance web architectures, and intuitive UI systems. 7+ years of experience delivering for product-based companies.",
  actions: [
    {
      label: "View Featured Work",
      href: "#projects",
      primary: true,
    },
    {
      label: "Download CV",
      href: "/hamsa-chembakath-02-2026.pdf",
      primary: false,
    },
  ],
  profileImage: "/profile.png",
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
