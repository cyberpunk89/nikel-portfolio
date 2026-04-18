"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import Image from "next/image";
import recommendations from "../../content/rec.json";

import scalarLogo from "@/media/company_logo/scalar.jpg";
import sagefundLogo from "@/media/company_logo/sagefund_logo.jpg";
import { StaticImageData } from "next/image";

const companyLogos: Record<string, { logo: StaticImageData; color: string }> = {
  "scalar": { logo: scalarLogo, color: "#cba6f7" },
  "sagewealth": { logo: sagefundLogo, color: "#a6e3a1" },
};

const recommendationCompanies = [
  "scalar",
  "scalar",
  "sagewealth",
];

interface Recommendation {
  name: string;
  title: string;
  company: string;
  date: string;
  relationship: string;
  text: string;
}

const boldTerms = [
  [
    "talent",
    "passion",
    "skilled",
    "intuitive",
    "sharp eye for detail",
    "proactive listener",
    "values feedback",
    "kind",
    "talented",
    "great asset",
  ],
  [
    "versatile",
    "solid work",
    "focused",
    "speed",
    "optimize",
    "right questions",
    "collaborative",
    "skilled",
    "reliable",
  ],
  [
    "never disappoints",
    "ZERO hesitations",
    "thoughtful",
    "great grasp",
    "easy to work with",
    "safe hands",
    "10/10",
  ],
];

function parseTextWithBold(text: string, terms: string[]) {
  let result = text;
  terms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    result = result.replace(regex, "**$1**");
  });
  return result;
}

function renderTextWithBold(text: string, accent: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold" style={{ color: accent }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

function simplifyDate(date: string): string {
  const d = new Date(date);
  const shortMonth = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear();
  return `${shortMonth} ${year}`;
}

export default function Recommendations() {
  const recs: Recommendation[] = recommendations.recommendations;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % recs.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + recs.length) % recs.length);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono"
        >
          <span className="gradient-text-bold">Recommendations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-12"
        >
          What colleagues and collaborators have to say.
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "rgba(22, 23, 33, 0.98)",
                borderLeft: `3px solid ${companyLogos[recommendationCompanies[currentIndex]]?.color || "#cba6f7"}`,
                boxShadow: `0 0 60px ${companyLogos[recommendationCompanies[currentIndex]]?.color || "#cba6f7"}15`,
              }}
            >
              {(() => {
                const rec = recs[currentIndex];
                const companyKey = recommendationCompanies[currentIndex] || "";
                const companyData = companyLogos[companyKey];
                const companyLogo = companyData?.logo || null;
                const companyColor = companyData?.color || "#cba6f7";

                const textWithBold = parseTextWithBold(rec.text, boldTerms[currentIndex] || []);

                return (
                  <>
                    <div
                      className="absolute top-4 left-4 opacity-10 pointer-events-none"
                      style={{ color: companyColor }}
                    >
                      <Quotes size={28} weight="fill" />
                    </div>

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${companyColor}08 0%, transparent 50%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <p
                        className="text-base md:text-lg leading-7 mb-6"
                        style={{ color: "#cdd6f4" }}
                      >
                        "{renderTextWithBold(textWithBold, companyColor)}"
                      </p>

                      <div
                        className="pt-4 border-t flex items-center justify-between"
                        style={{ borderColor: `${companyColor}25` }}
                      >
                        <div>
                          <p className="font-semibold text-foreground">
                            {rec.name}
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: companyColor }}
                          >
                            {rec.title}
                          </p>
                          <p className="text-xs text-foreground/50 mt-1">
                            {rec.relationship}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          {companyLogo && (
                            <div className="w-6 h-6 rounded overflow-hidden relative">
                              <Image
                                src={companyLogo}
                                alt="Company logo"
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <span
                            className="text-xs font-mono px-2 py-1 rounded-full hidden md:block"
                            style={{
                              backgroundColor: `${companyColor}18`,
                              color: companyColor,
                            }}
                          >
                            {simplifyDate(rec.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-3 rounded-full hover:bg-surface-hover transition-colors items-center justify-center"
            style={{ left: "-3.5rem" }}
            aria-label="Previous"
          >
            <CaretLeft size={24} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-3 rounded-full hover:bg-surface-hover transition-colors items-center justify-center"
            style={{ right: "-3.5rem" }}
            aria-label="Next"
          >
            <CaretRight size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-4 relative">
          <button
            onClick={prev}
            className="md:hidden absolute left-4 p-3 rounded-full hover:bg-surface-hover transition-colors"
            aria-label="Previous"
          >
            <CaretLeft size={28} />
          </button>

          <div className="flex items-center gap-2">
            {recs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? "#cdd6f4" : "rgba(108, 112, 134, 0.3)",
                  transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Go to recommendation ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="md:hidden absolute right-4 p-3 rounded-full hover:bg-surface-hover transition-colors"
            aria-label="Next"
          >
            <CaretRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}