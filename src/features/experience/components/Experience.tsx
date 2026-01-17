"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experienceData } from "../data/experience";
import type { ExperienceItem } from "../types/experience.types";

function ExperienceCard({
  job,
  index,
}: {
  job: ExperienceItem;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 -translate-x-1/2 top-0 md:left-1/2 md:-translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-neutral-950 border-2 border-primary ring-4 ring-neutral-950" />
      </div>

      {/* Content Card */}
      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${
          index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
        }`}
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors duration-300">
          <div
            className={`flex flex-col gap-2 mb-4 ${
              index % 2 === 0 ? "items-start" : "md:items-end"
            }`}
          >
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
              >
                {job.period}
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <div className="text-neutral-300 font-medium">{job.company}</div>
            <div className="text-sm text-neutral-500">{job.location}</div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul
                  className={`space-y-2 text-neutral-400 leading-relaxed text-sm list-disc pb-4 ${
                    index % 2 === 0 ? "pl-4 text-left" : "md:list-none md:pl-0"
                  }`}
                >
                  {job.points.map((point) => (
                    // Using point content as key if unique, otherwise fallback to index if duplicates exist
                    // (Assuming unique points for now to satisfy lint, or better, use index if static list)
                    <li key={point.substring(0, 20)}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              /* Optional: Show first point as preview when collapsed */
              <p className="text-neutral-500 text-sm italic mb-4 line-clamp-2">
                {job.points[0]}...
              </p>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-primary hover:bg-primary/10 h-8 self-start"
          >
            {isOpen ? (
              <>
                Show Less <ChevronUp className="ml-1 h-3 w-3" />
              </>
            ) : (
              <>
                Details <ChevronDown className="ml-1 h-3 w-3" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Spacer for the other side in desktop view */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

export function Experience() {
  const { title, subtitle, description, items } = experienceData;

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-neutral-950"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
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

        <div className="relative max-w-full mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((job, index) => (
              <ExperienceCard key={job.company} job={job} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
