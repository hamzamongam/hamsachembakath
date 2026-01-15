import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData } from "../data/projects";

export function Projects() {
  const { title, subtitle, description, items } = projectsData;

  return (
    <section id="projects" className="py-24 bg-neutral-900">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader>
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-neutral-900 text-neutral-300 border-neutral-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4 pt-4 border-t border-white/5">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/10 bg-transparent text-neutral-300 hover:text-white hover:bg-white/5"
                  asChild
                >
                  <Link href={project.links.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
                {project.links.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/10 bg-transparent text-neutral-300 hover:text-white hover:bg-white/5"
                    asChild
                  >
                    <Link href={project.links.github}>
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
