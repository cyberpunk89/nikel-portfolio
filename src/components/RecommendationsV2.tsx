"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      ? <span key={i} className="font-semibold" style={{ color: accent }}>{part}</span>
      : part;
  });
}

function simplifyDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function RecCard({ rec, index }: { rec: Recommendation; index: number }) {
  const meta = companyMeta[rec.company] || { color: "#cba6f7", name: rec.company, logo: null };
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background: "rgba(22, 23, 33, 0.98)",
          border: `1px solid ${meta.color}20`,
          borderLeft: `3px solid ${meta.color}`,
        }}
      >
        {/* Ambient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${meta.color}06 0%, transparent 50%)` }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Author column — left on even, right on odd (desktop) */}
          <div className={`md:w-52 shrink-0 flex flex-row md:flex-col gap-4 md:gap-3 items-start ${!isLeft ? "md:order-last" : ""}`}>
            <div className="flex items-center gap-3 md:gap-0 md:flex-col md:items-start">
              {meta.logo && (
                <div className="w-8 h-8 rounded-md overflow-hidden relative shrink-0 md:mb-3">
                  <Image src={meta.logo} alt={meta.name} fill className="object-contain" />
                </div>
              )}
              <div>
                <p className="font-semibold text-sm text-foreground leading-tight">{rec.name}</p>
                <p className="text-xs mt-0.5" style={{ color: meta.color }}>{rec.title}</p>
                <p className="text-[11px] text-foreground/35 font-mono mt-0.5">{meta.name}</p>
              </div>
            </div>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded shrink-0 self-start"
              style={{ backgroundColor: `${meta.color}12`, color: `${meta.color}99` }}
            >
              {simplifyDate(rec.date)}
            </span>
          </div>

          {/* Quote */}
          <div className="flex-1 min-w-0">
            {/* Large decorative quote mark */}
            <div
              className="text-5xl font-serif leading-none mb-3 select-none"
              style={{ color: meta.color, opacity: 0.25 }}
              aria-hidden
            >
              &ldquo;
            </div>
            <p className="text-sm md:text-base leading-7 text-foreground/80">
              {renderWithBold(rec.text, boldTermsByIndex[index] || [], meta.color)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecommendationsV2() {
  const recs: Recommendation[] = recommendations.recommendations;

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

        <div className="flex flex-col gap-4">
          {recs.map((rec, index) => (
            <RecCard key={rec.name} rec={rec} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/ninad-ketkale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 ghost-btn font-mono text-sm rounded-lg"
          >
            View on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
