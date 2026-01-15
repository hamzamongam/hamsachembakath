import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            size="lg"
            className="h-12 px-8 text-base min-w-[200px]"
            asChild
          >
            <Link href="mailto:contact@hamsa.dev">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base min-w-[200px]"
            asChild
          >
            <Link
              href="https://www.linkedin.com/in/hamzamongam/"
              target="_blank"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
