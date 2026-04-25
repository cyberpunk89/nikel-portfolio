"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const commands = [
  { id: "email",    label: "email",    action: "mailto:ninad.ketkale@gmail.com",             icon: "✉" },
  { id: "linkedin", label: "linkedin", action: "https://www.linkedin.com/in/ninad-ketkale", icon: "in" },
  { id: "behance",  label: "behance",  action: "https://www.behance.net/nikeldesign",        icon: "be" },
  { id: "medium",   label: "medium",   action: "https://medium.com/@nikel_design",           icon: "m" },
];

const bootSequence = [
  "Initializing connection protocol...",
  "Loading available channels...",
  "Ready to receive commands.",
  "Type 'help' to see available options.",
];

const availabilityCards = [
  { label: "Status",    value: "Open to work",             color: "#a6e3a1", pulse: true },
  { label: "Roles",     value: "Full-time · Contract · Freelance", color: "#cba6f7", pulse: false },
  { label: "Location",  value: "Belgium (CET) · Remote OK", color: "#89b4fa", pulse: false },
];

export default function ContactV2() {
  const [output, setOutput] = useState<{ text: string; color: string }[]>([]);
  const [input, setInput] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      for (let i = 0; i < bootSequence.length; i++) {
        await new Promise((r) => setTimeout(r, i === 0 ? 300 : 400));
        if (cancelled) return;
        setOutput((prev) => [...prev, { text: bootSequence[i], color: "var(--green)" }]);
      }
      if (!cancelled) {
        setInitialized(true);
        setTimeout(() => !cancelled && setShowHint(true), 500);
      }
    };
    init();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const command = commands.find((c) => c.id === cmd || c.label === cmd);
    if (command) {
      window.open(command.action, "_blank");
      setOutput((prev) => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: `> Opening ${command.label}...`, color: "var(--accent)" },
      ]);
    } else if (cmd === "help") {
      setOutput((prev) => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: "> Available commands:", color: "var(--green)" },
        ...commands.map((c) => ({ text: `  ${c.label.padEnd(10)}→ opens ${c.label}`, color: "var(--blue)" })),
        { text: "  clear      → clears terminal", color: "var(--blue)" },
      ]);
    } else if (cmd === "clear") {
      setOutput([]);
    } else if (cmd === "whoami") {
      setOutput((prev) => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: "> nikel — UI/UX designer, Belgium", color: "var(--peach)" },
      ]);
    } else if (cmd) {
      setOutput((prev) => [
        ...prev,
        { text: `> ${cmd}`, color: "var(--foreground)" },
        { text: `> Command not found: ${cmd}`, color: "var(--peach)" },
        { text: "> Try 'help' for available commands", color: "var(--green)" },
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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-foreground/35 tracking-[0.2em] mb-2 flex items-center gap-2">
            <span className="text-accent">■</span> [07] CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="gradient-text-bold">Let&apos;s Work Together</span>
          </h2>
          <div className="section-gradient-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-8 max-w-2xl"
        >
          I respond fast. If you have an interesting problem, a project, or just want to talk design — reach out.
        </motion.p>

        {/* Availability cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
        >
          {availabilityCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                backgroundColor: `${card.color}08`,
                border: `1px solid ${card.color}22`,
              }}
            >
              {card.pulse ? (
                <span
                  className="w-2 h-2 rounded-full animate-pulse shrink-0"
                  style={{ backgroundColor: card.color }}
                />
              ) : (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: `${card.color}60` }}
                />
              )}
              <div>
                <p
                  className="text-[10px] font-mono tracking-widest"
                  style={{ color: `${card.color}80` }}
                >
                  {card.label.toUpperCase()}
                </p>
                <p className="text-xs font-mono" style={{ color: card.color }}>
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-mono"
        >
          <div
            className="card-bg rounded-xl overflow-hidden border-2 border-border"
            style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(203, 166, 247, 0.08)" }}
          >
            {/* Title bar */}
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ background: "var(--surface-hover)", borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f38ba8" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f9e2af" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#a6e3a1" }} />
              </div>
              <span className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>
                nikel@portfolio:~/contact
              </span>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--green)" }}
                />
                <span className="text-[11px]" style={{ color: "var(--green)", opacity: 0.8 }}>online</span>
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalBodyRef}
              className="p-5 md:p-6 min-h-[260px] max-h-[380px] overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: "var(--border) transparent" }}
              onClick={() => inputRef.current?.focus()}
            >
              {output.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm mb-1 whitespace-pre-wrap"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}

              {initialized && (
                <div className="mt-3">
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <span style={{ color: "var(--green)" }}>›</span>
                    <label htmlFor="terminal-input" className="sr-only">Type a command</label>
                    <input
                      ref={inputRef}
                      id="terminal-input"
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={showHint ? "Type 'help' or click a link below…" : ""}
                      className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-foreground/20"
                      style={{ color: "var(--foreground)" }}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4 shrink-0"
                      style={{ backgroundColor: "var(--green)" }}
                    />
                  </form>

                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-5 pt-4 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p className="text-[11px] mb-3 tracking-widest" style={{ color: "var(--foreground)", opacity: 0.35 }}>
                        QUICK LINKS — click or type command
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {commands.map((cmd) => (
                          <motion.a
                            key={cmd.id}
                            href={cmd.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
                            style={{
                              background: "rgba(49, 50, 68, 0.8)",
                              border: "1px solid rgba(108, 112, 134, 0.25)",
                              color: "var(--foreground)",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(203, 166, 247, 0.4)";
                              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(108, 112, 134, 0.25)";
                              (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                            }}
                          >
                            <span className="text-[10px] opacity-50">{cmd.icon}</span>
                            <span>{cmd.label}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={bottomRef} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
