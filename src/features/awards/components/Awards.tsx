"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { awardsData } from "../data/awards";

export function Awards() {
  const { title, subtitle, description } = awardsData;

  return (
    <section className="py-24 relative bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-linear-to-br from-primary/20 to-neutral-900 border border-primary/20 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <AwardIcon className="w-64 h-64 text-primary" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="shrink-0 bg-primary/10 p-4 rounded-full border border-primary/30">
              <AwardIcon className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {title}
              </h2>
              <p className="text-primary font-medium mb-4">{subtitle}</p>
              <p className="text-neutral-300 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
