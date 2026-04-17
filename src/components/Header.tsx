"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import SaturnIcon from "./SaturnIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="relative h-8 w-8"
          >
            <SaturnIcon className="w-full h-full text-accent" />
          </motion.div>
          <span className="text-lg font-semibold font-mono text-foreground group-hover:text-accent transition-colors">
            Nikel
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-foreground/60 hover:text-accent transition-colors relative"
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            className="block w-5 h-0.5 bg-current mb-1"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block w-5 h-0.5 bg-current mb-1"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -90 : 0 }}
            className="block w-5 h-0.5 bg-current"
          />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-mono text-foreground/70 hover:text-accent transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}