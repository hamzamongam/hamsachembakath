"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Spotlight } from "@/components/ui/spotlight";
import { heroData } from "../data/hero";
import { TechStackItem } from "../types/hero.types";

export function Hero() {
  const { badge, headline, subheadline, actions, techStack } = heroData;

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
            {badge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white"
        >
          {headline.prefix}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-600">
            {headline.highlight}
          </span>{" "}
          {headline.suffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl leading-relaxed"
        >
          {subheadline.split("Hamsa Chembakath").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="font-semibold text-white">
                  Hamsa Chembakath
                </span>
              )}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {actions.map((action) => (
            <Button
              key={action.label}
              size="lg"
              variant={action.primary ? "default" : "outline"}
              className={`h-14 px-8 text-base rounded-full transition-colors ${
                action.primary
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "border-neutral-800 text-white hover:bg-neutral-800"
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
                <a href={action.href} target="_blank" rel="noopener noreferrer">
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
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale-0">
            {techStack.items.map((item: TechStackItem) => {
              const Icon = Icons[item.iconName];
              return (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                    {/* @ts-ignore - Dynamic icon rendering */}
                    <Icon
                      className={`h-8 w-8 ${item.iconName === "NextJS" ? "[&_path]:fill-white" : ""}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
