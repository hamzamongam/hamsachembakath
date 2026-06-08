/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl supports-backdrop-filter:bg-black/60">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white group"
        >
          {/* Brand Logo matching favicon */}
          <svg
            className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="logoGlowGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="#030712"
              stroke="url(#logoGlowGrad)"
              strokeWidth="2"
            />
            <path
              d="M11 12l-3 4 3 4"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12l3 4-3 4"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 11v10M19 11v10M13 16h6"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            Hamsa<span className="text-neutral-500">.dev</span>
          </span>
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
