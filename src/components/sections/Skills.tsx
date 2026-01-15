import { Database, LayoutGrid, Lock, Wrench } from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
    default:
      return null;
  }
};

const skillsData = {
  "Frontend Core": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js 15",
    "Vite.js",
    "TanStack Router",
    "TanStack Start",
  ],
  "Styling & UI": [
    "Tailwind CSS",
    "Shadcn UI",
    "Ant Design",
    "Bootstrap",
    "Hero UI",
    "Material UI",
    "CSS Modules",
    "SCSS",
    "Figma Design",
  ],
  "State & Data": [
    "Redux",
    "Zustand",
    "RTK Query",
    "React Query",
    "oRPC/TRPC",
    "Zod.js",
    "Yup.js",
    "React Hook Form",
  ],
  "Backend & Auth": [
    "Node.js",
    "Express.js",
    "NestJS",
    "Hono",
    "Auth.js",
    "Better Auth",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
  ],
  "Testing & Build Tools": ["Vitest", "Jest", "Cypress", "Rollup", "Webpack"],
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/40">
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
            <Card
              key={category}
              className="group h-full border-white/5 bg-neutral-900/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                    <CategoryIcon name={category} />
                  </div>
                  <CardTitle className="text-lg text-neutral-200 group-hover:text-white transition-colors">
                    {category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/5 text-neutral-400 font-normal border border-white/5 hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
