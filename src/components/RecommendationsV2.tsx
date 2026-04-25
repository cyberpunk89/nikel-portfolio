"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import recommendations from "../../content/rec.json";

import scalarLogo from "@/media/company_logo/scalar.jpg";
import sagefundLogo from "@/media/company_logo/sagefund_logo.jpg";
import { StaticImageData } from "next/image";

interface Recommendation {
  name: string;
  title: string;
  company: string;
  date: string;
  relationship: string;
  text: string;
}

const companyMeta: Record<string, { logo: StaticImageData; color: string; name: string }> = {
  scalar:     { logo: scalarLogo,   color: "#cba6f7", name: "Scalar (ZF Group)" },
  sagewealth: { logo: sagefundLogo, color: "#a6e3a1", name: "Sagewealth" },
};

const boldTermsByIndex = [
  ["talent", "passion", "skilled", "intuitive", "sharp eye for detail", "proactive listener", "values feedback", "kind", "talented", "great asset"],
  ["versatile", "solid work", "focused", "speed", "optimize", "right questions", "collaborative", "skilled", "reliable"],
  ["never disappoints", "ZERO hesitations", "thoughtful", "great grasp", "easy to work with", "safe hands", "10/10"],
];

function renderWithBold(text: string, terms: string[], accent: string) {
  let marked = text;
  terms.forEach((term) => {
    marked = marked.replace(new RegExp(`(${term})`, "gi"), "@@$1@@");
  });
  return marked.split("@@").map((part, i) => {
    const isBold = terms.some((t) => t.toLowerCase() === part.toLowerCase());
    return isBold
      ? <span key={i} style={{ color: accent }}>{part}</span>
      : part;
  });
}

function simplifyDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function RecCard({ rec, index }: { rec: Recommendation; index: number }) {
  const meta = companyMeta[rec.company] || { color: "#cba6f7", name: rec.company, logo: null };

  return (
    <motion.div
      className="relative overflow-hidden min-h-72 flex flex-col font-mono"
      style={{
        background: "rgba(17, 17, 27, 0.8)",
        border: `2px solid ${meta.color}40`,
        boxShadow: `0 0 20px ${meta.color}10, inset 0 0 20px ${meta.color}05`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Terminal scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.15) 2px, rgba(0,0,0,.15) 4px)",
      }} />

      {/* Main quote area */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-10 relative z-10">
        {/* Command prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-xs mb-4 opacity-50"
          style={{ color: meta.color }}
        >
          $ recommendation.output:
        </motion.div>

        {/* Quote output */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm md:text-base leading-7"
          style={{ color: "#cdd6f4" }}
        >
          &gt; {renderWithBold(rec.text, boldTermsByIndex[index] || [], meta.color)}
        </motion.p>
      </div>

      {/* Footer — Author details scaled down */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border-t p-6 relative z-10"
        style={{ borderColor: `${meta.color}30`, background: `${meta.color}05` }}
      >
        <div className="flex items-end gap-4 justify-between">
          {/* Left: Author info */}
          <div className="flex items-center gap-3 min-w-0">
            {meta.logo && (
              <div className="w-10 h-10 rounded border shrink-0 relative overflow-hidden" style={{ borderColor: `${meta.color}60` }}>
                <Image src={meta.logo} alt={meta.name} fill className="object-contain" />
              </div>
            )}
            <div className="text-[11px] space-y-0.5 min-w-0">
              <div>
                <span className="opacity-50">by</span> <span style={{ color: meta.color }} className="font-semibold">{rec.name}</span>
              </div>
              <div className="opacity-60">
                {rec.title} @ {meta.name}
              </div>
            </div>
          </div>

          {/* Right: Date */}
          <motion.div
            className="text-[10px] opacity-50 whitespace-nowrap"
            style={{ color: meta.color }}
          >
            {simplifyDate(rec.date)}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function RecommendationsV2() {
  const recs: Recommendation[] = recommendations.recommendations;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % recs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + recs.length) % recs.length);

  return (
    <section className="py-24 px-6">
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
            <span className="text-teal">■</span> [05] RECOMMENDATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="gradient-text-bold">Straight from LinkedIn</span>
          </h2>
          <div className="section-gradient-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-10 max-w-2xl"
        >
          What colleagues and collaborators say — unedited.
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          <div aria-live="polite" aria-atomic="true" aria-label={`Recommendation ${current + 1} of ${recs.length}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <RecCard rec={recs[current]} index={current} />
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ focusRing: "2px", focusRingOffset: "2px" }}
                aria-label="Previous recommendation"
              >
                <svg
                  className="w-5 h-5 text-foreground/60 hover:text-foreground/90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-label="Next recommendation"
              >
                <svg
                  className="w-5 h-5 text-foreground/60 hover:text-foreground/90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex gap-2 items-center">
              {recs.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: current === index ? 32 : 8,
                    height: 8,
                    backgroundColor: current === index ? "rgba(203, 166, 247, 0.8)" : "rgba(203, 166, 247, 0.2)",
                  }}
                  aria-label={`Go to recommendation ${index + 1}`}
                  aria-current={current === index}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-sm font-mono text-foreground/50">
              {current + 1} / {recs.length}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/ninad-ketkale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 ghost-btn font-mono text-sm rounded-lg"
          >
            View all on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
