import type { ProjectsData } from "../types/projects.types";

export const projectsData: ProjectsData = {
  title: "Latest Projects",
  subtitle: "Featured Work",
  description:
    "A collection of projects that demonstrate my technical capabilities and problem-solving skills.",
  items: [
    {
      title: "The Canadian Home",
      description:
        "A comprehensive real estate platform for buying and selling properties in Canada, featuring advanced property search and market insights.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        demo: "https://thecanadianhome.com/",
      },
    },
    {
      title: "AgentRoof",
      description:
        "All-in-one Real Estate CRM and Marketing platform helping REALTORS® grow their business with custom websites and lead generation tools.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      links: {
        demo: "https://agentroof.com/",
      },
    },
    {
      title: "Cocoshoppy",
      description:
        "A village-centric e-commerce startup connecting rural products with broader markets, empowering local artisans and producers.",
      tags: ["React", "Node.js"],
      links: {
        demo: "https://www.cocoshoppy.com/",
      },
    },
    {
      title: "Deantz",
      description:
        "Digital agency specializing in brand data insights, SEO, and web development to help businesses grow their online presence.",
      tags: ["Web Development", "SEO Tools"],
      links: {
        demo: "https://deantz.com/",
      },
    },
    {
      title: "Arantis Pharma",
      description:
        "Corporate digital presence for a leading pharmaceutical company, showcasing their products and commitment to healthcare.",
      tags: ["Modern Web Technologies"],
      links: {
        demo: "https://www.arantispharma.com/",
      },
    },
  ],
};
