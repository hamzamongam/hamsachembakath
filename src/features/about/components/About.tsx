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
              {paragraphs.map((p, index) => (
                <p key={index}>{highlightText(p)}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl bg-muted overflow-hidden border">
            <img
              src="/profile.jpg"
              alt="Hamsa Chembakath"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) {
                  fallback.classList.remove("hidden");
                  fallback.classList.add("flex");
                }
              }}
            />
            {/* Fallback if image missing */}
            <div className="hidden absolute inset-0 items-center justify-center bg-linear-to-br from-background to-muted">
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
      </Container>
    </section>
  );
}
