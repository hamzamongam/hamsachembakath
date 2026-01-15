import { Container } from "../layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-8 md:py-0 text-neutral-400">
      <Container className="flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <span className="font-medium text-white">Hamsa Chembakath</span>.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
