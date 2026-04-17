"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] pt-32 pb-16 px-6 relative hero-gradient flex flex-col justify-between">
      <div className="absolute inset-0 pixel-grid pointer-events-none" />
      <div className="max-w-6xl mx-auto relative flex-1 flex flex-col justify-center">
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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-6xl mx-auto pb-8"
      >
        <p className="text-sm text-foreground/50 font-mono animate-bounce">
          Press start to explore ↓
        </p>
      </motion.div>
    </section>
  );
}