"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UsersThree,
  ChatCircle,
  Flask,
  FigmaLogo,
  SquaresFour,
  Cursor,
  TreeStructure,
  Palette,
  MapTrifold,
  FlowArrow,
  Eye,
  DeviceMobile,
  Briefcase,
  Repeat,
  Lightning,
  ArrowsClockwise,
  Brain,
  Globe,
  Flag,
  Lightbulb,
  Toolbox,
  Translate,
} from "@phosphor-icons/react";
import BrandLogo from "./BrandLogos";

const skillCategories = [
  {
    id: "design-research",
    title: "Design & Research",
    icon: Lightbulb,
    accent: "#cba6f7",
    items: [
      { name: "UX Research", context: "100+ interviews", icon: UsersThree },
      { name: "User Interviews", context: "qual & quant", icon: ChatCircle },
      { name: "Usability Testing", context: "moderated & unmoderated", icon: Flask },
      { name: "Wireframing & Prototyping", context: "Figma, Principle", icon: FigmaLogo },
      { name: "Interaction Design", context: "micro-interactions", icon: Cursor },
      { name: "Information Architecture", context: "complex flows", icon: TreeStructure },
      { name: "Design Systems", context: "built from scratch", icon: Palette },
      { name: "Journey Mapping", context: "end-to-end", icon: MapTrifold },
      { name: "A/B Testing", context: "data-driven decisions", icon: FlowArrow },
      { name: "Accessibility (WCAG)", context: "inclusive by default", icon: Eye },
      { name: "Responsive Design", context: "mobile-first", icon: DeviceMobile },
      { name: "Stakeholder Management", context: "C-suite to engineers", icon: Briefcase },
    ],
  },
  {
    id: "tools",
    title: "Tools I Live In",
    icon: Toolbox,
    accent: "#a6e3a1",
    items: [
      { name: "Figma", context: "daily driver", icon: "figma" },
      { name: "Sketch", context: "legacy projects", icon: "sketch" },
      { name: "Miro", context: "workshops & mapping", icon: "miro" },
      { name: "After Effects", context: "motion graphics", icon: "after-effects" },
      { name: "Zeplin", context: "handoffs", icon: "zeplin" },
      { name: "Hotjar", context: "analytics & recordings", icon: "hotjar" },
      { name: "Google Analytics", context: "traffic insights", icon: "google-analytics" },
      { name: "Pendo", context: "in-app guidance", icon: "pendo" },
      { name: "Maze", context: "rapid testing", icon: "maze" },
      { name: "Datadog", context: "product metrics", icon: "datadog" },
    ],
  },
  {
    id: "process",
    title: "How I Work",
    icon: Lightning,
    accent: "#fab387",
    items: [
      { name: "Agile", context: "scrum & kanban", icon: Repeat },
      { name: "Design Sprints", context: "5-day deep dives", icon: Lightning },
      { name: "Lean UX", context: "build-measure-learn", icon: ArrowsClockwise },
      { name: "Design Thinking", context: "empathy-first", icon: Brain },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Translate,
    accent: "#89b4fa",
    items: [
      { name: "English", context: "fluent", icon: Flag },
      { name: "Dutch", context: "A1 — still learning", icon: Globe },
    ],
  },
];

const brandTools = ["figma", "sketch", "miro", "after-effects", "zeplin", "hotjar", "google-analytics", "pendo", "maze", "datadog"];

function SkillPill({
  name,
  context,
  icon,
  accent,
}: {
  name: string;
  context: string;
  icon: React.ComponentType<{ size: number; weight: "fill" | "regular" }> | string;
  accent: string;
}) {
  const isBrand = typeof icon === "string" && brandTools.includes(icon);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl shrink-0 group cursor-default"
      style={{
        background: `linear-gradient(135deg, ${accent}10 0%, transparent 100%)`,
        border: `1px solid ${accent}30`,
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
        {isBrand ? (
          <BrandLogo name={icon as string} size={20} />
        ) : (
          <IconComponent icon={icon as React.ComponentType<{ size: number; weight?: "fill" | "regular" }>} size={20} />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-foreground truncate">{name}</span>
        <span className="text-xs text-foreground/50 truncate">{context}</span>
      </div>
    </motion.div>
  );
}

function IconComponent({
  icon,
  size,
}: {
  icon: React.ComponentType<{ size: number; weight?: "fill" | "regular" }>;
  size: number;
}) {
  const Icon = icon;
  return <Icon size={size} weight="fill" />;
}

function BrandIcon({ name, size }: { name: string; size: number }) {
  return <BrandLogo name={name} size={size} />;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("design-research");

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono"
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

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category, catIndex) => {
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                  onClick={() => setActiveCategory(isActive ? category.id : category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl text-left transition-all relative"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${category.accent}08 0%, rgba(30, 30, 46, 0.95) 100%)`
                      : "linear-gradient(135deg, rgba(49, 50, 68, 0.6) 0%, rgba(30, 30, 46, 0.8) 100%)",
                    border: `1px solid ${isActive ? category.accent : "rgba(108, 112, 134, 0.2)"}`,
                  }}
                >
                  <div
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: category.accent,
                      boxShadow: isActive ? `0 0 8px ${category.accent}` : "none",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <IconComponent icon={category.icon} size={18} />
                    <h3 className="text-sm font-mono font-medium text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(49, 50, 68, 0.7) 0%, rgba(30, 30, 46, 0.9) 100%)",
                  border: "1px solid rgba(108, 112, 134, 0.15)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(203, 166, 247, 0.08) 0%, transparent 40%),
                      radial-gradient(circle at 80% 80%, rgba(166, 227, 161, 0.08) 0%, transparent 40%)
                    `,
                  }}
                />

                {skillCategories
                  .filter((c) => c.id === activeCategory)
                  .map((category) => (
                    <div key={category.id} className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <SkillPill
                            key={item.name}
                            name={item.name}
                            context={item.context}
                            icon={item.icon}
                            accent={category.accent}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}