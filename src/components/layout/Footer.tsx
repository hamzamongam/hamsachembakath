import { Container } from "../layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-8 md:py-0 text-neutral-400">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <p className="text-balance text-sm leading-loose">
            Built by{" "}
            <span className="font-medium text-white">Hamsa Chembakath</span>.
          </p>
          <p className="text-xs text-neutral-500">
            Senior Next.js Developer serving Kerala (Malappuram, Kochi, Kozhikode, Koratty, Manjeri)
          </p>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
