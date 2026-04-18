"use client";

import { motion } from "framer-motion";

const colorMap: Record<string, { hex: string; tagClass: string }> = {
  "text-blue":   { hex: "#89b4fa", tagClass: "blue" },
  "text-peach":  { hex: "#fab387", tagClass: "peach" },
  "text-yellow": { hex: "#f9e2af", tagClass: "yellow" },
  "text-green":  { hex: "#a6e3a1", tagClass: "green" },
  "text-accent": { hex: "#cba6f7", tagClass: "mauve" },
  "text-teal":   { hex: "#94e2d5", tagClass: "teal" },
  "text-mauve":  { hex: "#cba6f7", tagClass: "mauve" },
};

const PixelIcon = ({ type, className }: { type: string; className?: string }) => {
  const pixelStyle = { shapeRendering: "crispEdges" as const };
  switch (type) {
    case "gaming":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <rect x="2" y="6" width="20" height="12" fill="currentColor" rx="2" />
          <rect x="4" y="8" width="4" height="4" fill="#1e1e2e" rx="1" />
          <rect x="16" y="8" width="4" height="4" fill="#1e1e2e" rx="1" />
          <rect x="6" y="4" width="2" height="4" fill="currentColor" />
          <rect x="16" y="4" width="2" height="4" fill="currentColor" />
          <rect x="10" y="10" width="4" height="4" fill="#1e1e2e" />
          <rect x="11" y="8" width="2" height="2" fill="currentColor" />
        </svg>
      );
    case "illustration":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <path d="M4 4h16v2H4z" fill="currentColor" />
          <path d="M6 6h12v12H6z" fill="currentColor" />
          <path d="M8 8h2v2H8z" fill="#1e1e2e" />
          <path d="M12 10h4v2H12z" fill="currentColor" />
          <path d="M10 14h6v2H10z" fill="currentColor" />
          <rect x="18" y="4" width="2" height="10" fill="currentColor" rx="1" />
          <rect x="20" y="8" width="4" height="2" fill="currentColor" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <rect x="4" y="10" width="16" height="8" fill="currentColor" rx="1" />
          <rect x="2" y="18" width="20" height="2" fill="currentColor" />
          <rect x="6" y="4" width="2" height="4" fill="currentColor" />
          <rect x="10" y="2" width="2" height="6" fill="currentColor" />
          <rect x="14" y="4" width="2" height="4" fill="currentColor" />
          <rect x="18" y="6" width="2" height="2" fill="currentColor" />
        </svg>
      );
    case "dnd":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <path d="M6 4h12l-6 16z" fill="currentColor" />
          <rect x="12" y="2" width="2" height="2" fill="currentColor" />
          <rect x="10" y="8" width="2" height="2" fill="#1e1e2e" />
          <rect x="14" y="8" width="2" height="2" fill="#1e1e2e" />
          <rect x="12" y="10" width="2" height="2" fill="#1e1e2e" />
          <rect x="12" y="14" width="2" height="2" fill="#1e1e2e" />
        </svg>
      );
    case "cooking":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <rect x="6" y="8" width="12" height="10" fill="currentColor" rx="2" />
          <path d="M8 4h8v4H8z" fill="currentColor" />
          <rect x="6" y="6" width="12" height="2" fill="#1e1e2e" />
          <rect x="8" y="12" width="2" height="2" fill="#1e1e2e" />
          <rect x="14" y="12" width="2" height="2" fill="#1e1e2e" />
        </svg>
      );
    case "art":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <path d="M4 4h16v16H4z" fill="currentColor" />
          <rect x="2" y="8" width="4" height="4" fill="currentColor" rx="1" />
          <rect x="8" y="2" width="4" height="4" fill="currentColor" rx="1" />
          <rect x="14" y="8" width="4" height="4" fill="currentColor" rx="1" />
          <rect x="10" y="14" width="4" height="4" fill="currentColor" rx="1" />
          <rect x="16" y="16" width="4" height="4" fill="currentColor" rx="1" />
        </svg>
      );
    case "travel":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <path d="M4 4h16v16H4z" fill="currentColor" />
          <rect x="2" y="14" width="20" height="2" fill="currentColor" />
          <rect x="4" y="10" width="4" height="4" fill="#f9e2af" />
          <rect x="10" y="6" width="4" height="4" fill="#f9e2af" />
          <rect x="18" y="4" width="2" height="4" fill="currentColor" />
          <rect x="14" y="2" width="4" height="4" fill="#f9e2af" />
        </svg>
      );
    case "reading":
      return (
        <svg viewBox="0 0 24 24" className={className} {...pixelStyle}>
          <path d="M4 4h16v2H4z" fill="currentColor" />
          <path d="M6 6h12v12H6z" fill="currentColor" />
          <rect x="8" y="8" width="2" height="8" fill="#1e1e2e" />
          <rect x="10" y="10" width="2" height="6" fill="#1e1e2e" />
          <rect x="12" y="8" width="2" height="8" fill="#1e1e2e" />
          <rect x="14" y="10" width="2" height="6" fill="#1e1e2e" />
        </svg>
      );
    default:
      return null;
  }
};

const interests = [
  { category: "Gaming",    iconType: "gaming",       title: "PlayStation",  description: "Been gaming since PS2. Currently stuck in Elden Ring.",                      color: "text-blue" },
  { category: "Creative",  iconType: "illustration", title: "Illustration", description: "Doodle in Procreate when I should be working. Occasionally good.",           color: "text-peach" },
  { category: "Lifestyle", iconType: "coffee",       title: "Coffee",       description: "Obsessed with pour-over. Judge people who drink instant.",                   color: "text-yellow" },
  { category: "Tabletop",  iconType: "dnd",          title: "D&D",          description: "DM for 5 years. My campaigns have too many NPCs but great lore.",            color: "text-green" },
  { category: "Lifestyle", iconType: "cooking",      title: "Cooking",      description: "Can make a decent curry. Burnt toast is my signature dish.",                 color: "text-accent" },
  { category: "Creative",  iconType: "art",          title: "Art",          description: "Museum visits when traveling. Love surrealism and pixel art.",               color: "text-teal" },
  { category: "Lifestyle", iconType: "travel",       title: "Travel",       description: "Been to 15 countries. Still get lost in Belgium sometimes.",                 color: "text-mauve" },
  { category: "Creative",  iconType: "reading",      title: "Reading",      description: "Sci-fi and fantasy mainly. Currently reading Project Hail Mary.",           color: "text-green" },
];

export default function InterestsV2() {
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
            <span className="text-yellow">■</span> [06] INTERESTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="gradient-text-bold">When I&apos;m Not Designing</span>
          </h2>
          <div className="section-gradient-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-10"
        >
          A collection of things that keep me sane outside of work.
        </motion.p>

        {/* Scroll row */}
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            scrollbarColor: "var(--border) transparent",
          }}
        >
          {interests.map((interest, index) => {
            const c = colorMap[interest.color] || colorMap["text-accent"];

            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="flex-shrink-0 w-56 sm:w-64 snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="rounded-xl p-5 h-full cursor-default relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(49, 50, 68, 0.95) 0%, rgba(30, 30, 46, 0.98) 100%)",
                    border: `1px solid ${c.hex}30`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${c.hex}12 0%, transparent 70%)`,
                    }}
                  />

                  {/* Index + category row */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                      style={{
                        color: c.hex,
                        backgroundColor: `${c.hex}15`,
                        border: `1px solid ${c.hex}25`,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`tag-${c.tagClass} text-[10px]`}>
                      {interest.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 mb-3 relative z-10">
                    <PixelIcon
                      type={interest.iconType}
                      className={`w-full h-full ${interest.color}`}
                    />
                  </div>

                  {/* Text */}
                  <h3
                    className="text-base font-semibold mb-2 font-mono relative z-10"
                    style={{ color: c.hex }}
                  >
                    {interest.title}
                  </h3>
                  <p className="text-xs text-foreground/55 leading-relaxed relative z-10">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll hint — styled as keyboard shortcut */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex items-center justify-center gap-3"
        >
          <kbd
            className="text-[10px] font-mono px-2 py-1 rounded"
            style={{
              backgroundColor: "rgba(49, 50, 68, 0.7)",
              border: "1px solid rgba(108, 112, 134, 0.3)",
              color: "var(--foreground)",
              opacity: 0.5,
            }}
          >
            ←
          </kbd>
          <span className="text-[10px] font-mono text-foreground/30">scroll</span>
          <kbd
            className="text-[10px] font-mono px-2 py-1 rounded"
            style={{
              backgroundColor: "rgba(49, 50, 68, 0.7)",
              border: "1px solid rgba(108, 112, 134, 0.3)",
              color: "var(--foreground)",
              opacity: 0.5,
            }}
          >
            →
          </kbd>
        </motion.div>
      </div>
    </section>
  );
}
