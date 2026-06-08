import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactData } from "../data/contact";

export function Contact() {
  const { title, subtitle, description, links } = contactData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return <Mail className="mr-2 h-4 w-4" />;
      case "Linkedin":
        return <Linkedin className="mr-2 h-4 w-4" />;
      case "Phone":
        return <Phone className="mr-2 h-4 w-4" />;
      case "Whatsapp":
        return <MessageCircle className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-neutral-950/20 border-t border-white/5 relative overflow-hidden"
    >
      {/* Centered Glowing Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/20 bg-primary/5"
          >
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg text-neutral-400 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {links.map((link) => (
              <Button
                key={link.label}
                size="lg"
                className="bg-white text-black hover:bg-neutral-200"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {getIcon(link.iconName)}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
