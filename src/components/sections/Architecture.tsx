
import { Container } from "../layout/Container";
import { Layers, Server, Shield, Globe, Database, Cog } from "lucide-react";

export function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-muted/30">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How I Build</h2>
          <p className="text-lg text-muted-foreground">
            I prioritize maintainability, performance, and type safety. 
            My architectural approach often follows a domain-driven design structure 
            within the Next.js App Router for maximum scalability.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
           <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Layers className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">Feature-Based Structure</h3>
              </div>
              <p className="text-muted-foreground">
                 I organize code by features rather than file types. Each feature contains its 
                 own components, hooks, stores, and tests, making the codebase easy to navigate and scale.
              </p>
           </div>

           <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">Type Safety & Validation</h3>
              </div>
              <p className="text-muted-foreground">
                 End-to-end type safety is non-negotiable. I use Zod for runtime validation, 
                 ensuring that API responses and form inputs match the expected schema before they reach the UI.
              </p>
           </div>

           <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Server className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">Server-Side Strategy</h3>
              </div>
              <p className="text-muted-foreground">
                 Leveraging React Server Components (RSC) to reduce client bundle size. 
                 Data fetching happens on the server, with client components used sparingly for interactivity.
              </p>
           </div>
        </div>
        
        {/* Simple visual separator representing flow */}
        <div className="my-16 border-t border-dashed border-muted-foreground/30"></div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="p-6 rounded-xl bg-background border shadow-sm">
                <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold">Next.js App Router</h4>
            </div>
            <div className="p-6 rounded-xl bg-background border shadow-sm">
                <Cog className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold">TanStack Query</h4>
            </div>
             <div className="p-6 rounded-xl bg-background border shadow-sm">
                <Database className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold">Prisma / Drizzle</h4>
            </div>
             <div className="p-6 rounded-xl bg-background border shadow-sm">
                <Shield className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold">Auth.js</h4>
            </div>
        </div>

      </Container>
    </section>
  );
}
