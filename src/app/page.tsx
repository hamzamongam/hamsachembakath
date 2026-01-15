import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/features/about";
import { Architecture } from "@/features/architecture";
import { Awards } from "@/features/awards";
import { Contact } from "@/features/contact";
import { Education } from "@/features/education";
import { Experience } from "@/features/experience";
import { Hero } from "@/features/hero"; // Updated import
import { Projects } from "@/features/projects";
import { Skills } from "@/features/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
