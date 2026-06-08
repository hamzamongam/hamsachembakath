import type { MetadataRoute } from "next";
import { blogPosts } from "@/features/blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hamsadev.com";

  // Static routes
  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Dynamic blog routes
  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
