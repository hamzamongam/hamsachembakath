"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Spotlight } from "../ui/spotlight";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 lg:py-56 antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <Container className="flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className="mb-8 px-4 py-1.5 text-sm font-medium border border-white/10 bg-white/5 text-neutral-300 backdrop-blur-md"
          >
            Available for new opportunities
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Digital Products
          </span>{" "}
          that matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl leading-relaxed"
        >
          I'm <span className="font-semibold text-white">Hamsa Chembakath</span>
          , a Senior Frontend Architect. I specialize in crafting
          high-performance SaaS applications using Next.js, modern TypeScript,
          and beautiful, accessible UI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-base rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
            asChild
          >
            <Link href="#projects">
              View Featured Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-neutral-800 text-white hover:bg-neutral-800"
            asChild
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download CV <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Floating Icons Band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 w-full max-w-4xl"
        >
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
            Powering modern experiences with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale-0">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                <Icons.React className="h-8 w-8" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                <Icons.NextJS className="h-8 w-8 [&_path]:fill-white" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                <Icons.TypeScript className="h-8 w-8" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                <Icons.Tailwind className="h-8 w-8" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
