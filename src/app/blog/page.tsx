"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-12 bg-black text-white">
      <Container className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-xl">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Blog Coming Soon
            </h1>

            <p className="text-lg text-neutral-400 leading-relaxed">
              I'm currently writing comprehensive articles on Next.js
              architecture, performance optimization, and SaaS best practices.
              Stay tuned!
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
