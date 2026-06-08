import {
  Database,
  LayoutGrid,
  Lock,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { skillsData } from "../data/skills";

// Helper to map category to icon
const CategoryIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Frontend Core":
      return <LayoutGrid className="h-5 w-5 text-neutral-300" />;
    case "Styling & UI":
      return <Database className="h-5 w-5 text-primary" />;
    case "State & Data":
      return <Database className="h-5 w-5 text-neutral-300" />;
    case "Backend & Auth":
      return <Lock className="h-5 w-5 text-primary" />;
    case "Testing & Build Tools":
      return <Wrench className="h-5 w-5 text-neutral-300" />;
    case "Digital Marketing & SEO":
      return <TrendingUp className="h-5 w-5 text-primary" />;
    case "AI & Workflow":
      return <Sparkles className="h-5 w-5 text-primary" />;
    default:
      return null;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      {/* Decor pattern */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/10 -z-10 blur-[100px] rounded-full opacity-50" />

      <Container>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-neutral-800 text-neutral-300 border-neutral-700"
          >
            Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Technical Proficiency
          </h2>
          <p className="text-lg text-neutral-400">
            A comprehensive toolset refined over 7 years of building
            production-grade applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <CardSpotlight
              key={category}
              className="flex flex-col h-full bg-neutral-900/40 backdrop-blur-md border-white/5 group rounded-2xl"
            >
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300 shrink-0 border border-white/5">
                      <CategoryIcon name={category} />
                    </div>
                    <h3 className="text-lg text-neutral-200 group-hover:text-white font-semibold transition-colors duration-300 tracking-wide">
                      {category}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/5 text-neutral-450 font-normal border border-white/5 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </Container>
    </section>
  );
}
