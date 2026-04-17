"use client";

import { motion } from "framer-motion";

const tagColors = ["tag-mauve", "tag-peach", "tag-green", "tag-blue", "tag-teal", "tag-yellow"];

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
  {
    category: "Gaming",
    iconType: "gaming",
    title: "PlayStation",
    description: "Been gaming since PS2. Currently stuck in Elden Ring.",
    color: "text-blue",
  },
  {
    category: "Creative",
    iconType: "illustration",
    title: "Illustration",
    description: "Doodle in Procreate when I should be working. Occasionally good.",
    color: "text-peach",
  },
  {
    category: "Lifestyle",
    iconType: "coffee",
    title: "Coffee",
    description: "Obsessed with pour-over. Judge people who drink instant.",
    color: "text-yellow",
  },
  {
    category: "Tabletop",
    iconType: "dnd",
    title: "D&D",
    description: "DM for 5 years. My campaigns have too many NPCs but great lore.",
    color: "text-green",
  },
  {
    category: "Lifestyle",
    iconType: "cooking",
    title: "Cooking",
    description: "Can make a decent curry. Burnt toast is my signature dish.",
    color: "text-accent",
  },
  {
    category: "Creative",
    iconType: "art",
    title: "Art",
    description: "Museum visits when traveling. Love surrealism and pixel art.",
    color: "text-teal",
  },
  {
    category: "Lifestyle",
    iconType: "travel",
    title: "Travel",
    description: "Been to 15 countries. Still get lost in Belgium sometimes.",
    color: "text-mauve",
  },
  {
    category: "Creative",
    iconType: "reading",
    title: "Reading",
    description: "Sci-fi and fantasy mainly. Currently reading Project Hail Mary.",
    color: "text-green",
  },
];

export default function Interests() {
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
          <span className="gradient-text-bold">When I'm Not Designing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-12"
        >
          A collection of things that keep me sane outside of work.
        </motion.p>

        <div className="interest-scroll flex gap-4 md:gap-6 overflow-x-visible pb-4 px-2 pt-14">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="interest-card w-56 sm:w-64 md:w-72 flex-shrink-0"
            >
              <div className="retro-card-mauve rounded-xl p-6 cursor-default group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10">
                    <PixelIcon type={interest.iconType} className={`w-full h-full ${interest.color}`} />
                  </div>
                  <span className={`${tagColors[index % tagColors.length]} text-xs px-2 py-1 rounded-full`}>
                    {interest.category}
                  </span>
                </div>
                <h3 className={`text-lg font-medium mb-2 ${interest.color}`}>
                  {interest.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-sm text-foreground/40 font-mono"
        >
          ← Scroll to see more → 
        </motion.p>
      </div>
    </section>
  );
}