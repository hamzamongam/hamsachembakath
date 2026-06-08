"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import type { BlogPost as BlogPostType } from "../data/types";

export function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-neutral-400 hover:text-cyan-400 transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-cyan-300 prose-code:bg-cyan-500/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-cyan-500 prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Render HTML content
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </article>
  );
}
