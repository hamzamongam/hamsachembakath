"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { blogPosts } from "../data/posts";

export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="block h-full"
        >
          <CardSpotlight className="h-full group">
            <div className="p-8 flex flex-col h-full">
              <div className="flex gap-2 mb-4 flex-wrap">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-neutral-400 text-sm mb-6 grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </CardSpotlight>
        </Link>
      ))}
    </div>
  );
}
