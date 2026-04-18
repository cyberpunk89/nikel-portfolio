"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SaturnIconLarge } from "./SaturnIcon";

const stats = [
  { value: "5+", label: "Years exp." },
  { value: "50+", label: "User interviews" },
  { value: "3", label: "Design systems" },
];

const tickerSkills = [
  "Figma",
  "UX Research",
  "Design Systems",
  "Interaction Design",
  "Prototyping",
  "Usability Testing",
  "A/B Testing",
  "Information Architecture",
  "Stakeholder Management",
  "Mobile-First Design",
  "WCAG Accessibility",
  "Journey Mapping",
  "Wireframing",
  "Design Sprints",
];

export default function HeroV2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[90vh] pt-36 pb-0 px-6 relative hero-gradient flex flex-col overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 pixel-grid pointer-events-none" />
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203, 166, 247, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(137, 180, 250, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative flex-1 flex flex-col justify-center">
        {/* Current role status pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-mono px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(166, 227, 161, 0.08)",
              border: "1px solid rgba(166, 227, 161, 0.22)",
              color: "#a6e3a1",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#a6e3a1" }}
            />
            CURRENTLY: LEAD UI/UX @ STELLOS (SHAREP)
          </span>
        </motion.div>

        <div className="flex items-center gap-8 lg:gap-16">
          {/* Left: text content */}
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
            >
              I&apos;m{" "}
              <span className="font-mono relative inline-block">
                <span className="gradient-text-bold">Nikel</span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #cba6f7, #f5c2e7, #fab387)",
                  }}
                  initial={{ scaleX: 0, originX: "0%" }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                />
              </span>{" "}
              — a UI/UX designer who turns complex, messy problems into interfaces people actually enjoy using.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-foreground/60 max-w-2xl mb-8"
            >
              5+ years across B2B SaaS, fintech, and e-commerce. Based in Belgium. Currently open to new work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-primary font-mono font-medium rounded-lg text-sm"
              >
                Let&apos;s talk →
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 ghost-btn font-mono font-medium rounded-lg text-sm"
              >
                View work ↓
              </Link>
            </motion.div>

            {/* Domain expertise pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              <span className="tag-mauve">B2B SaaS</span>
              <span className="tag-peach">Fintech</span>
              <span className="tag-blue">E-commerce</span>
            </motion.div>
          </div>

          {/* Right: decorated Saturn */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex relative shrink-0"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Decorative orbit rings */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 288 288"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="144"
                  cy="144"
                  rx="126"
                  ry="34"
                  stroke="rgba(203, 166, 247, 0.18)"
                  strokeWidth="1"
                  strokeDasharray="5 9"
                />
                <ellipse
                  cx="144"
                  cy="144"
                  rx="88"
                  ry="22"
                  stroke="rgba(245, 194, 231, 0.12)"
                  strokeWidth="0.75"
                  strokeDasharray="3 7"
                />
                {/* Pixel satellite markers */}
                <rect x="267" y="142" width="4" height="4" fill="#cba6f7" opacity="0.6" />
                <rect x="17" y="142" width="4" height="4" fill="#fab387" opacity="0.5" />
                <rect x="144" y="112" width="3" height="3" fill="#94e2d5" opacity="0.5" />
                <rect x="230" y="124" width="2" height="2" fill="#89b4fa" opacity="0.4" />
                <rect x="55" y="155" width="2" height="2" fill="#f5c2e7" opacity="0.4" />
              </svg>

              {/* Floating annotation tags */}
              <motion.span
                className="absolute top-6 right-2 text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap z-20"
                style={{
                  backgroundColor: "rgba(203, 166, 247, 0.12)",
                  border: "1px solid rgba(203, 166, 247, 0.28)",
                  color: "#cba6f7",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                FIGMA ✦
              </motion.span>
              <motion.span
                className="absolute bottom-10 left-1 text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap z-20"
                style={{
                  backgroundColor: "rgba(166, 227, 161, 0.1)",
                  border: "1px solid rgba(166, 227, 161, 0.25)",
                  color: "#a6e3a1",
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                UX_RESEARCH ✦
              </motion.span>
              <motion.span
                className="absolute top-20 left-2 text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap z-20"
                style={{
                  backgroundColor: "rgba(137, 180, 250, 0.1)",
                  border: "1px solid rgba(137, 180, 250, 0.25)",
                  color: "#89b4fa",
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                SYSTEMS ✦
              </motion.span>

              {/* Saturn */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  filter: [
                    "drop-shadow(0 0 20px rgba(203, 166, 247, 0.3))",
                    "drop-shadow(0 0 45px rgba(203, 166, 247, 0.55))",
                    "drop-shadow(0 0 20px rgba(203, 166, 247, 0.3))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <SaturnIconLarge className="w-44 h-44 text-accent" />
              </motion.div>

              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: "rgba(203, 166, 247, 0.08)",
                  animationDuration: "3s",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-border/25 py-6 flex items-center justify-around"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.08 }}
              className="flex flex-col items-center"
            >
              <p className="text-2xl md:text-3xl font-bold font-mono gradient-text-bold leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills ticker */}
      <div
        className="border-t border-border/20 py-3 overflow-hidden"
        style={{ backgroundColor: "rgba(49, 50, 68, 0.35)" }}
      >
        <div className="skills-ticker flex whitespace-nowrap">
          {[...tickerSkills, ...tickerSkills].map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[11px] font-mono text-foreground/35 px-5"
            >
              {skill}
              <span className="ml-5 text-accent/25">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
