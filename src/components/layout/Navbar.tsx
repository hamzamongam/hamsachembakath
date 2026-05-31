import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl supports-backdrop-filter:bg-black/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-white">
          Hamsa<span className="text-neutral-500">.dev</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <Link href="#about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="#skills" className="transition-colors hover:text-white">
            Skills
          </Link>
          <Link
            href="#experience"
            className="transition-colors hover:text-white"
          >
            Experience
          </Link>
          <Link href="#projects" className="transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-neutral-400 hover:text-white hover:bg-white/10"
            >
              <Link
                href="https://github.com/hamsachembakath"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-neutral-400 hover:text-white hover:bg-white/10"
            >
              <Link
                href="https://www.linkedin.com/in/hamsa-c-671569190/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-neutral-400 hover:text-white hover:bg-white/10"
            >
              <Link href="mailto:hamsa.mongam@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <Button
            asChild
            className="hidden md:inline-flex bg-white text-black hover:bg-neutral-200"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
