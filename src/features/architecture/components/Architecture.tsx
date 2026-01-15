import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { architectureData } from "../data/architecture";

export function Architecture() {
  const { title, subtitle, description, items } = architectureData;

  return (
    <section
      id="architecture"
      className="py-24 bg-neutral-900 border-t border-white/5"
    >
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
          {items.map((item) => (
            <Card
              key={item.title}
              className={`bg-white/5 border-white/10 ${item.className || ""}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
