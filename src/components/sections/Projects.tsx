import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projects = [
  {
    title: "The Canadian Home",
    description:
      "A comprehensive real estate platform for buying and selling properties in Canada, featuring advanced property search and market insights.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      demo: "https://thecanadianhome.com/",
      github: undefined,
    },
    featured: true,
  },
  {
    title: "AgentRoof",
    description:
      "All-in-one Real Estate CRM and Marketing platform helping REALTORS® grow their business with custom websites and lead generation tools.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    links: {
      demo: "https://agentroof.com/",
    },
    featured: true,
  },
  {
    title: "Cocoshoppy",
    description:
      "A village-centric e-commerce startup connecting rural products with broader markets, empowering local artisans and producers.",
    tech: ["React", "Node.js"],
    links: {
      demo: "https://www.cocoshoppy.com/",
    },
    featured: false,
  },
  {
    title: "Deantz",
    description:
      "Digital agency specializing in brand data insights, SEO, and web development to help businesses grow their online presence.",
    tech: ["Web Development", "SEO Tools"],
    links: {
      demo: "https://deantz.com/",
    },
    featured: false,
  },
  {
    title: "Arantis Pharma",
    description:
      "Corporate digital presence for a leading pharmaceutical company, showcasing their products and commitment to healthcare.",
    tech: ["Modern Web Technologies"],
    links: {
      demo: "https://www.arantispharma.com/",
    },
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/20 bg-primary/5"
            >
              Featured Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Latest Projects
            </h2>
            <p className="text-lg text-neutral-400">
              A selection of case studies demonstrating complex problem solving
              and architectural decisions.
            </p>
          </div>
          <Button
            variant="ghost"
            className="gap-2 group text-neutral-300 hover:text-white hover:bg-white/10"
          >
            View All Projects{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={`${index}-${project.title}`}
              className="flex flex-col h-full bg-neutral-900/40 backdrop-blur-md border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group relative overflow-hidden"
            >
              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-neutral-100 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-0">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base pt-2 leading-relaxed text-neutral-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-normal bg-white/5 text-neutral-300 border border-white/5 hover:border-white/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                {project.links.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    asChild
                  >
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />{" "}
                      Code
                    </Link>
                  </Button>
                )}
                <Button
                  size="sm"
                  className="w-full group/btn bg-white text-black hover:bg-neutral-200"
                  asChild
                >
                  <Link href={project.links.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />{" "}
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
