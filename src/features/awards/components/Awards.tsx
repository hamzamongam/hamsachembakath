"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { awardsData } from "../data/awards";

export function Awards() {
  const { title, subtitle, description } = awardsData;

  return (
    <section className="py-24 relative bg-black/10 overflow-hidden">
      {/* Background glow ball */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-cyan-950/20 via-neutral-900/60 to-purple-950/20 border border-cyan-500/15 p-8 md:p-14 relative overflow-hidden group shadow-2xl backdrop-blur-md"
        >
          {/* Pulsing Decor Icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-12 opacity-5 pointer-events-none"
          >
            <AwardIcon className="w-72 h-72 text-cyan-500" />
          </motion.div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="shrink-0 bg-cyan-500/10 p-5 rounded-2xl border border-cyan-500/25 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <AwardIcon className="w-12 h-12 text-cyan-400 group-hover:text-purple-400 transition-colors duration-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3.5xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors duration-500">
                {title}
              </h2>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-semibold mb-4 text-lg">
                {subtitle}
              </p>
              <p className="text-neutral-300 leading-relaxed max-w-2xl text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
