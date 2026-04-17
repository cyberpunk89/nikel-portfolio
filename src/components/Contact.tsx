"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const commands = [
  { id: "email", label: "email", action: "mailto:ketkaleninad@gmail.com" },
  { id: "linkedin", label: "linkedin", action: "https://www.linkedin.com/in/ninad-ketkale" },
  { id: "behance", label: "behance", action: "https://www.behance.net/nikeldesign" },
  { id: "medium", label: "medium", action: "https://medium.com/@nikel_design" },
];

const terminalLines = [
  "Initializing connection protocol...",
  "Loading available channels...",
  "Ready to connect.",
];

export default function Contact() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      for (const line of terminalLines) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setOutput(prev => [...prev, line]);
      }
      setInitialized(true);
    };
    init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd: string) => {
    const command = commands.find(c => c.id === cmd || c.label === cmd);
    if (command) {
      window.open(command.action, "_blank");
      setOutput(prev => [...prev, `> Executing ${command.label}...`, `> Opening ${command.action}`]);
    } else if (cmd === "help") {
      setOutput(prev => [...prev, "> Available commands:", ...commands.map(c => `  ${c.label}${' '.repeat(12 - c.label.length)}-${' '}${c.label}`)]);
    } else if (cmd === "clear") {
      setOutput([]);
    } else if (cmd) {
      setOutput(prev => [...prev, `> Command not found: ${cmd}`, "> Type 'help' for available commands"]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setOutput(prev => [...prev, `> ${input}`]);
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
            className="rounded-lg overflow-hidden"
            style={{ 
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--border)',
              boxShadow: '0 0 30px rgba(0,0,0,0.3)'
            }}
          >
            {/* Terminal header */}
            <div 
              className="px-4 py-2 flex items-center gap-2"
              style={{ backgroundColor: 'var(--surface-hover)', borderBottom: '2px solid var(--border)' }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f38ba8' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fab387' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a6e3a1' }} />
              </div>
              <span className="ml-4 text-xs" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                nikel@portfolio:~/contact
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-3 md:p-4 min-h-[250px] md:min-h-[300px]">
              {output.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm mb-1"
                  style={{ color: 'var(--green)' }}
                >
                  {line}
                </motion.div>
              ))}

              {initialized && (
                <>
                  <div className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                    &gt; Available commands:
                  </div>
                  {commands.map((cmd) => (
                    <motion.a
                      key={cmd.id}
                      href={cmd.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: 'var(--accent)' }}
                      className="block text-sm mb-1 cursor-pointer"
                      style={{ color: 'var(--blue)' }}
                    >
                      {'  '}{cmd.label}{' '.repeat(12 - cmd.label.length)}- {cmd.label}
                    </motion.a>
                  ))}
                  
                  <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex items-center text-sm">
                      <span style={{ color: 'var(--green)' }}>❯</span>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a command..."
                        className="bg-transparent border-none outline-none ml-2 flex-1 text-sm"
                        style={{ color: 'var(--foreground)' }}
                      />
                      <span 
                        className="w-2 h-4 ml-1"
                        style={{ backgroundColor: cursorVisible ? 'var(--green)' : 'transparent' }}
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Quick click section */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
              Or click directly:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {commands.map((cmd) => (
                <motion.a
                  key={cmd.id}
                  href={cmd.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(203, 166, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-mono"
                  style={{ 
                    backgroundColor: 'var(--surface)',
                    border: '2px solid var(--surface-hover)',
                    color: 'var(--foreground)'
                  }}
                >
                  {cmd.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <span className="text-xs font-mono" style={{ color: 'var(--green)' }}>
              ● open to work
            </span>
            <span className="mx-2" style={{ color: 'var(--surface-hover)' }}>|</span>
            <span className="text-xs font-mono" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
              Roeselare, Belgium
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}