"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export type TerminalOutput = {
  id: string;
  type: "command" | "response" | "error";
  content: string;
};

export const useTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      id: "welcome",
      type: "response",
      content: "Welcome to Hamsa's Portfolio Terminal v1.0.0",
    },
    {
      id: "help-prompt",
      type: "response",
      content: "Type 'help' to see available commands.",
    },
  ]);
  const router = useRouter();

  const commands = useMemo<Record<string, () => string | undefined>>(
    () => ({
      help: () => `Available commands:
  - help: Show this message
  - stack: Show tech stack JSON
  - contact: Show contact info
  - clear: Clear terminal
  - whoami: About current user
  - projects: Navigate to projects
  - blog: Read my thoughts`,

      stack: () =>
        JSON.stringify(
          {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
            performance: ["Vite", "TanStack Query"],
            tools: ["Cursor", "Antigravity", "Vibe Coding"],
          },
          null,
          2,
        ),

      contact: () => `Email: hamsa.mongam@gmail.com
Phone: +91 9562191932
WhatsApp: https://wa.me/919562191932`,

      whoami: () => "User: Visitor\nRole: Guest\nLocation: Internet",

      projects: () => {
        router.push("#projects");
        return "Navigating to projects section...";
      },

      blog: () => {
        router.push("/blog");
        return "Navigating to blog...";
      },

      clear: () => {
        setHistory([]);
        return undefined;
      },
    }),
    [router],
  );

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmedCmd = cmd.trim().toLowerCase();
      const cmdId = `cmd-${Date.now()}-${Math.random()}`;

      // Add command to history
      setHistory((prev) => [
        ...prev,
        { id: cmdId, type: "command", content: cmd },
      ]);

      if (!trimmedCmd) return;

      const responseId = `resp-${Date.now()}-${Math.random()}`;
      if (commands[trimmedCmd]) {
        const response = commands[trimmedCmd]();
        if (response) {
          setHistory((prev) => [
            ...prev,
            { id: responseId, type: "response", content: response },
          ]);
        }
      } else {
        setHistory((prev) => [
          ...prev,
          {
            id: responseId,
            type: "error",
            content: `Command not found: ${trimmedCmd}. Type 'help' for list.`,
          },
        ]);
      }
    },
    [commands],
  );

  // Toggle with keyboard shortcut (Cmd+J or Ctrl+J)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return { isOpen, setIsOpen, history, executeCommand };
};
