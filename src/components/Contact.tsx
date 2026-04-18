"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const commands = [
  { id: "email", label: "email", action: "mailto:ketkaleninad@gmail.com" },
  { id: "linkedin", label: "linkedin", action: "https://www.linkedin.com/in/ninad-ketkale" },
  { id: "behance", label: "behance", action: "https://www.behance.net/nikeldesign" },
  { id: "medium", label: "medium", action: "https://medium.com/@nikel_design" },
];

const bootSequence = [
  { text: "Initializing connection protocol...", delay: 0 },
  { text: "Loading available channels...", delay: 400 },
  { text: "Ready to receive commands.", delay: 800 },
  { text: "Type 'help' to see available options.", delay: 1200 },
];

export default function Contact() {
  const [output, setOutput] = useState<{ text: string; color: string }[]>([]);
  const [input, setInput] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      for (const line of bootSequence) {
        await new Promise(resolve => setTimeout(resolve, line.delay % 400 || 400));
        setOutput(prev => [...prev, { text: line.text, color: "var(--green)" }]);
      }
      setInitialized(true);
      setTimeout(() => setShowHint(true), 500);
    };
    init();
  }, []);

  

  const handleCommand = (cmd: string) => {
    const command = commands.find(c => c.id === cmd || c.label === cmd);
    if (command) {
      window.open(command.action, "_blank");
      setOutput(prev => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: `> Opening ${command.label}...`, color: "var(--accent)" },
      ]);
    } else if (cmd === "help") {
      setOutput(prev => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: "> Available commands:", color: "var(--green)" },
        ...commands.map(c => ({ text: `  ${c.label.padEnd(12)}→ ${c.label}`, color: "var(--blue)" })),
      ]);
    } else if (cmd === "clear") {
      setOutput([]);
    } else if (cmd) {
      setOutput(prev => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: `> Command not found: ${cmd}`, color: "var(--peach)" },
        { text: "> Type 'help' for available commands", color: "var(--green)" },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim().toLowerCase());
      setInput("");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 font-mono"
        >
          <span className="gradient-text-bold">Let&apos;s Work Together</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono w-full max-w-full overflow-hidden"
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(49, 50, 68, 0.98) 0%, rgba(30, 30, 46, 0.99) 100%)",
              border: "2px solid var(--border)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(203, 166, 247, 0.1)",
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{
                background: "var(--surface-hover)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f38ba8" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fab387" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#a6e3a1" }} />
              </div>
              <span className="text-xs" style={{ color: "var(--foreground)", opacity: 0.5 }}>
                nikel@portfolio:~/contact
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--green)", opacity: 0.6 }} />
                <span className="text-xs" style={{ color: "var(--green)", opacity: 0.8 }}>online</span>
              </div>
            </div>

            <div
              className="p-4 md:p-6 min-h-[300px] max-h-[400px] overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {output.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm mb-1 whitespace-pre-wrap"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}

              {initialized && (
                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <span style={{ color: "var(--green)" }}>›</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={showHint ? "Type 'help' or click links below..." : ""}
                      className="bg-transparent border-none outline-none flex-1 text-sm"
                      style={{ color: "var(--foreground)" }}
                    />
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4"
                      style={{ backgroundColor: "var(--green)" }}
                    />
                  </form>

                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/30"
                    >
                      <p className="text-xs mb-3" style={{ color: "var(--foreground)", opacity: 0.5 }}>
                        Quick links — click or type command:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {commands.map((cmd) => (
                          <motion.a
                            key={cmd.id}
                            href={cmd.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg text-sm font-mono transition-colors"
                            style={{
                              background: "var(--surface)",
                              border: "1px solid var(--border)",
                              color: "var(--foreground)",
                            }}
                          >
                            {cmd.label}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--green)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--green)" }} />
              open to work
            </span>
            <span style={{ color: "var(--border)" }}>|</span>
            <span className="text-xs font-mono" style={{ color: "var(--foreground)", opacity: 0.5 }}>
              Roeselare, Belgium
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}