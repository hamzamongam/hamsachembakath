import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { projectsData } from "../data/projects";

export function Projects() {
  const { title, subtitle, description, items } = projectsData;

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <Container>
        <div className="mb-16 md:text-center max-w-3xl mx-auto relative z-10">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-neutral-400">{description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {items.map((project) => (
            <CardSpotlight
              key={project.title}
              className="flex flex-col h-full bg-neutral-900/40 backdrop-blur-md border-white/5"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 w-fit rounded-xl border border-primary/20">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">
                    {project.role}
                  </span>
                </div>
                <CardTitle className="text-xl text-white font-semibold tracking-wide">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-neutral-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                {project.outcomes && (
                  <ul className="mb-6 space-y-2">
                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-neutral-400/80 text-xs flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/5 text-neutral-300 border border-white/5 hover:bg-primary/20 hover:text-primary hover:border-primary/20 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </CardSpotlight>
          ))}
        </div>
      </Container>
    </section>
  );
}
