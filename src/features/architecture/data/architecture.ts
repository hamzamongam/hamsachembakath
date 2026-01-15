import type { ArchitectureData } from "../types/architecture.types";

export const architectureData: ArchitectureData = {
  title: "Engineering Approach",
  subtitle: "Philosophy",
  description:
    "I don't just write code; I design systems. My development philosophy is grounded in creating maintainable, scalable, and high-performance applications.",
  items: [
    {
      title: "Feature-First Architecture",
      description:
        "Codebases are organized by functionality, not file type. This ensures that related logic, styles, and tests are co-located, making the system easier to navigate and scale.",
      className: "md:col-span-2",
    },
    {
      title: "Type Safety & Reliability",
      description:
        "Leveraging TypeScript's full potential with strict mode, Zod for validation, and automated testing (Vitest/Jest) to catch errors before they reach production.",
    },
    {
      title: "Server & Client Simbiosis",
      description:
        "Utilizing Next.js App Router to perfectly balance Server Components for performance and Client Components for interactivity. Data fetching is optimized with TanStack Query.",
    },
  ],
};
