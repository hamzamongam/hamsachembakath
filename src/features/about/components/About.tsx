"use client";

import { Container } from "@/components/layout/Container";
import { aboutData } from "../data/about";

export function About() {
  const { title, paragraphs, keywords } = aboutData;

  const highlightText = (text: string) => {
    // Simple logic to bold specific keywords
    let enrichedText: (string | React.ReactNode)[] = [text];

    keywords.forEach((keyword) => {
      enrichedText = enrichedText.flatMap((part) => {
        if (typeof part !== "string") return [part];
        const split = part.split(keyword);
        const result = [];
        for (let i = 0; i < split.length; i++) {
          result.push(split[i]);
          if (i < split.length - 1) {
            result.push(
              <strong key={i + keyword} className="font-medium text-foreground">
                {keyword}
              </strong>,
            );
          }
        }
        return result;
      });
    });
    return enrichedText;
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p}>{highlightText(p)}</p>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto aspect-square sm:aspect-4/5 lg:aspect-square max-h-[500px] lg:max-h-[600px] group">
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Animated Gradient Border Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-[1px] group-hover:from-cyan-500 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-700 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl bg-muted overflow-hidden">
                {/* Banner Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent z-20 opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Darker Shade Overlays */}
                <div className="absolute inset-0 bg-black/40 z-10 hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/50 to-transparent z-10" />

                {/* biome-ignore lint/performance/noImgElement: Custom onError fallback is implemented */}
                <img
                  src="/profile.webp"
                  alt="Hamsa Chembakath"
                  className="object-cover w-full h-full grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.03]"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith(".webp")) {
                      e.currentTarget.src = "/profile.png";
                    } else {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) {
                        fallback.classList.remove("hidden");
                        fallback.classList.add("flex");
                      }
                    }
                  }}
                />
                
                {/* Fallback if image missing */}
                <div className="hidden absolute inset-0 items-center justify-center bg-linear-to-br from-background to-muted z-0">
                  <div className="text-center p-8">
                    <div className="text-4xl font-bold text-foreground/10 select-none">
                      GROWTH
                    </div>
                    <div className="text-4xl font-bold text-foreground/10 select-none">
                      ENGINEERING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
