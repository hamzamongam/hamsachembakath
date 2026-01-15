"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { educationData } from "../data/education";

export function Education() {
  const { title, subtitle, description, items } = educationData;

  return (
    <section id="education" className="py-24 relative bg-neutral-950">
      <Container>
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/20 bg-primary/5"
          >
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-neutral-400">{description}</p>
        </div>

        <div className="relative max-w-2xl mx-auto space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {items.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Dot */}
              <div className="absolute left-4 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-neutral-950 border border-primary ring-4 ring-neutral-950" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-xl font-bold text-white">
                  {edu.qualification}
                </h3>
                <span className="text-sm font-mono text-primary/80 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                  {edu.period}
                </span>
              </div>
              <div className="text-base text-neutral-300 font-medium mb-2">
                {edu.institution}
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-prose">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
