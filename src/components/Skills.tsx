"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Design & Research",
    color: "text-accent",
    tagClass: "tag-mauve",
    items: [
      "UX Research",
      "User Interviews",
      "Usability Testing",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Information Architecture",
      "Design Systems",
      "Journey Mapping",
      "A/B Testing",
      "Accessibility (WCAG)",
      "Responsive Design",
      "Stakeholder Management",
    ],
  },
  {
    title: "Tools I live in",
    color: "text-green",
    tagClass: "tag-green",
    items: [
      "Figma",
      "Sketch",
      "Miro",
      "Adobe After Effects",
      "Zeplin",
      "Hotjar",
      "Google Analytics",
      "Pendo",
      "Maze",
      "Datadog",
    ],
  },
  {
    title: "How I work",
    color: "text-peach",
    tagClass: "tag-peach",
    items: [
      "Agile",
      "Scrum",
      "Design Sprints",
      "Lean UX",
      "Design Thinking",
    ],
  },
  {
    title: "Languages",
    color: "text-blue",
    tagClass: "tag-blue",
    items: [
      "English (fluent)",
      "Dutch (A1, still learning — it's hard)",
    ],
  },
];

export default function Skills() {
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
          <span className="gradient-text-bold">What I Bring</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-12"
        >
          Not a list of buzzwords — these are the things I actually do day-to-day.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <h3 className={`text-lg font-medium mb-4 font-mono ${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.15) + (itemIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm px-3 py-2 rounded-lg ${category.tagClass} cursor-default transition-all`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}