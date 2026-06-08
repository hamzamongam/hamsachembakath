import type { Metadata } from "next";
import { BlogList } from "@/features/blog/components/BlogList";

export const metadata: Metadata = {
  title: "Blog & Insights | Hamsa - Full Stack Developer",
  description:
    "Thoughts on web development, modern tech stacks, and current trends in the React ecosystem.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/50 mb-6">
            Blog & Insights
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Thoughts on web development, modern tech stacks, and current trends.
          </p>
        </div>
        <BlogList />
      </div>
    </main>
  );
}
