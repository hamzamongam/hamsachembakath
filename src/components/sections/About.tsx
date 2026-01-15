
import { Container } from "../layout/Container";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a Senior React / Next.js Developer with over 7 years of experience building modern web applications. 
                My journey is defined by a relentless curiosity and a pragmatic approach to solving real-world problems.
              </p>
              <p>
                Currently, I focus heavily on the <strong className="font-medium text-foreground">SaaS ecosystem</strong>, 
                architecting scalable frontends that prioritize user experience and performance. I believe in 
                "API-first" design and strict type safety using tools like TypeScript and ORPC.
              </p>
              <p>
                Self-taught and industry-proven, I&apos;ve worked with startups and established companies to ship 
                production-ready code. I don&apos;t just write code; I design systems that are maintainable, 
                testable, and effective.
              </p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl bg-muted overflow-hidden border">
             {/* Placeholder for an abstract image or code snippet image */}
             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-muted">
                <div className="text-center p-8">
                   <div className="text-4xl font-bold text-foreground/10 select-none">ARCHITECTURE</div>
                   <div className="text-4xl font-bold text-foreground/10 select-none">PERFORMANCE</div>
                   <div className="text-4xl font-bold text-foreground/10 select-none">CLEAN CODE</div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
