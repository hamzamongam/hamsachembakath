"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Terminal, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTerminal } from "../hooks/useTerminal";

export function TerminalOverlay() {
  const { isOpen, setIsOpen, history, executeCommand } = useTerminal();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && bottomRef.current && history) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-black border border-white/20 rounded-full shadow-2xl hover:border-primary/50 text-white transition-colors"
      >
        <Terminal className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[600px] sm:h-[400px] z-50 bg-black/90 backdrop-blur-xl border border-white/10 sm:rounded-xl shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 drag-handle cursor-move">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-neutral-400">
                  hamsa@portfolio:~
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-neutral-300 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
              {history.map((entry) => (
                <div key={entry.id} className="whitespace-pre-wrap break-words">
                  {entry.type === "command" && (
                    <div className="flex items-center text-neutral-500">
                      <span className="mr-2">$</span>
                      <span className="text-white">{entry.content}</span>
                    </div>
                  )}
                  {entry.type === "response" && (
                    <div className="text-green-400/90 ml-4">
                      {entry.content}
                    </div>
                  )}
                  {entry.type === "error" && (
                    <div className="text-red-400 ml-4">{entry.content}</div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white/5 border-t border-white/10 flex items-center"
            >
              <span className="text-green-500 mr-2">➜</span>
              <span className="text-cyan-500 mr-2">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/20"
                placeholder="Type 'help'..."
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
