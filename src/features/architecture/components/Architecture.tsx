import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { architectureData } from "../data/architecture";

export function Architecture() {
  const { title, subtitle, description, items } = architectureData;

  return (
    <section
      id="architecture"
      className="py-24 bg-neutral-950/20 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={`relative bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-primary/25 hover:bg-neutral-900/65 transition-all duration-500 rounded-2xl p-7 shadow-2xl overflow-hidden group ${item.className || ""}`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl text-white font-bold mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
