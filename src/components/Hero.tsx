"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SaturnIconLarge } from "./SaturnIcon";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-[80vh] pt-32 pb-16 px-6 relative hero-gradient flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 pixel-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-8 lg:gap-16">
          <div className="flex-1 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl mb-4 text-foreground/60 font-mono"
            >
              <span className="text-accent">›</span> Hey, welcome to my little corner of the internet.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight text-balance"
            >
              I&apos;m <span className="gradient-text-bold font-mono">Nikel</span> — a UI/UX designer who turns complex, messy problems into interfaces people actually enjoy using.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl text-foreground/60 max-w-2xl mb-6 md:mb-8"
            >
              5+ years of experience across B2B SaaS, fintech, and e-commerce. Based in Belgium. Currently open to new work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary font-mono font-medium rounded-lg"
              >
                Let&apos;s talk →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex relative"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: [
                    "drop-shadow(0 0 20px rgba(203, 166, 247, 0.3))",
                    "drop-shadow(0 0 40px rgba(203, 166, 247, 0.6))",
                    "drop-shadow(0 0 20px rgba(203, 166, 247, 0.3))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <SaturnIconLarge className="w-48 h-48 text-accent" />
              </motion.div>

              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: "rgba(203, 166, 247, 0.15)",
                  animationDuration: "3s",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-6xl mx-auto pb-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-foreground/40 font-mono">Scroll to explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-foreground/40"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}