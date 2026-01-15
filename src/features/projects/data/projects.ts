import type { ProjectsData } from "../types/projects.types";

export const projectsData: ProjectsData = {
  title: "Featured Projects",
  subtitle: "Portfolio",
  description:
    "A collection of projects that demonstrate my technical capabilities and problem-solving skills.",
  items: [
    {
      title: "DocuTalk AI",
      description:
        "An intelligent document analysis platform allowing users to chat with their PDFs. Built with RAG architecture (Retrieval-Augmented Generation) for accurate, context-aware responses.",
      tags: [
        "Next.js 15",
        "TypeScript",
        "OpenAI API",
        "Pinecone",
        "Tailwind CSS",
      ],
      links: {
        demo: "#",
        github: "https://github.com/hamsachembakath",
      },
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization and complex filtering systems.",
      tags: ["React", "TanStack Query", "Recharts", "Zustand", "Shadcn UI"],
      links: {
        demo: "#",
        github: "https://github.com/hamsachembakath",
      },
    },
    {
      title: "TaskFlow Pro",
      description:
        "A collaborative project management tool featuring drag-and-drop boards, real-time updates, and team collaboration workspaces.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "dnd-kit"],
      links: {
        demo: "#",
        github: "https://github.com/hamsachembakath",
      },
    },
  ],
};
