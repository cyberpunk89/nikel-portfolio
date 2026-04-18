"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(30, 30, 46, 0.95)" : "rgba(30, 30, 46, 0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0, 0, 0, 0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108, 112, 134, 0.3)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.2 }}
            className="relative h-8 w-8"
          >
            <SaturnIcon className="w-full h-full text-accent" />
          </motion.div>
          <span className="text-lg font-semibold font-mono text-foreground group-hover:text-accent transition-colors">
            Nikel
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-foreground/60 hover:text-accent transition-colors relative py-2"
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
        </nav>

        <motion.button
          className="md:hidden p-2 text-foreground rounded-lg transition-colors hover:bg-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-current mb-1.5"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1, scaleX: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-current mb-1.5"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-current"
          />
        </motion.button>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden overflow-hidden"
      >
        <nav className="flex flex-col p-4 gap-2 border-t border-border/30">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -10 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-mono text-foreground/70 hover:text-accent transition-colors py-3 block border-b border-border/20 last:border-0"
              >
                <span className="text-accent/50 mr-2">›</span>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}