"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { heroData } from "../data/hero";
import { TechStackItem } from "../types/hero.types";

export function Hero() {
  const { badge, headline, subheadline, actions, techStack } = heroData;

  // We'll alternate these in the typewriter, but for now let's just use the first dynamic line or construct a single sentence.
  // Actually, let's keep it simple and just type out the role for now.
  const typewriterContent = [
    { text: "Building", className: "text-neutral-400" },
    { text: "digital", className: "text-neutral-400" },
    { text: "experiences", className: "text-neutral-400" },
    { text: "that", className: "text-neutral-400" },
    { text: "matter.", className: "text-cyan-400 font-bold" },
  ];

  return (
    <section className="relative overflow-hidden w-full antialiased">
      <AuroraBackground className="py-20 md:py-32 lg:py-48 h-auto min-h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-10"
          fill="white"
        />

        <Container className="flex flex-col items-center text-center relative z-20 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-8 px-4 py-1.5 text-sm font-medium border border-white/10 bg-white/5 text-neutral-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 break-words"
          >
            {headline.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-600">
              {headline.highlight}
            </span>{" "}
            {headline.suffix}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 mb-8 text-base sm:text-xl md:text-2xl font-mono min-h-[1.5em]"
          >
            <TypewriterEffect
              words={typewriterContent}
              cursorClassName="bg-cyan-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-base md:text-lg text-neutral-400 mb-10 leading-relaxed"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {actions.map((action) => (
              <Button
                key={action.label}
                size="lg"
                variant={action.primary ? "default" : "outline"}
                className={`h-14 px-8 text-base rounded-full transition-all duration-300 ${
                  action.primary
                    ? "bg-white text-black hover:bg-neutral-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "border-neutral-800 text-white hover:bg-white/10 hover:border-white/20"
                }`}
                asChild
              >
                {action.href.startsWith("/") || action.href.startsWith("#") ? (
                  <Link href={action.href}>
                    {action.label}{" "}
                    {action.label.includes("Work") ? (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    ) : (
                      <Download className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                ) : (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.label}{" "}
                    {action.label.includes("CV") ? (
                      <Download className="ml-2 h-4 w-4" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </a>
                )}
              </Button>
            ))}
          </motion.div>

          {/* Floating Icons Band */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 w-full max-w-4xl"
          >
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              {techStack.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {techStack.items.map((item: TechStackItem) => {
                const Icon = Icons[item.iconName];
                return (
                  <div
                    key={item.name}
                    className="group relative flex flex-col items-center justify-center"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                    <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                      {/* @ts-ignore - Dynamic icon rendering */}
                      <Icon
                        className={`h-8 w-8 text-neutral-400 group-hover:text-white transition-colors duration-300 ${item.iconName === "NextJS" ? "group-hover:[&_path]:fill-white" : ""}`}
                      />
                    </div>
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-white transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </AuroraBackground>
    </section>
  );
}
