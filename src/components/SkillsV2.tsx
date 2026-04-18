"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UsersThree,
  ChatCircle,
  Flask,
  FigmaLogo,
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
    tagClass: "mauve",
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
    title: "Tools",
    icon: Toolbox,
    accent: "#a6e3a1",
    tagClass: "green",
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
    tagClass: "peach",
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
    tagClass: "blue",
    items: [
      { name: "English", context: "fluent", icon: Flag },
      { name: "Dutch", context: "A1 — still learning", icon: Globe },
    ],
  },
];

const brandTools = ["figma", "sketch", "miro", "after-effects", "zeplin", "hotjar", "google-analytics", "pendo", "maze", "datadog"];

function IconComponent({ icon, size }: { icon: React.ComponentType<{ size: number; weight?: "fill" | "regular" }>; size: number }) {
  const Icon = icon;
  return <Icon size={size} weight="fill" />;
}

function SkillPill({ name, context, icon, accent }: {
  name: string;
  context: string;
  icon: React.ComponentType<{ size: number; weight: "fill" | "regular" }> | string;
  accent: string;
}) {
  const isBrand = typeof icon === "string" && brandTools.includes(icon);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.15 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl shrink-0 group cursor-default"
      style={{
        background: `linear-gradient(135deg, ${accent}10 0%, transparent 100%)`,
        border: `1px solid ${accent}28`,
      }}
    >
      <div className="w-4 h-4 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity shrink-0"
        style={{ color: accent }}
      >
        {isBrand ? (
          <BrandLogo name={icon as string} size={16} />
        ) : (
          <IconComponent icon={icon as React.ComponentType<{ size: number; weight?: "fill" | "regular" }>} size={16} />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-foreground truncate leading-tight">{name}</span>
        <span className="text-[11px] text-foreground/40 truncate leading-tight">{context}</span>
      </div>
    </motion.div>
  );
}

export default function SkillsV2() {
  const [activeCategory, setActiveCategory] = useState("design-research");

  const active = skillCategories.find((c) => c.id === activeCategory)!;

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
            <span className="text-peach">■</span> [04] SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="gradient-text-bold">What I Bring</span>
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
          Not a list of buzzwords — these are the things I actually do day-to-day.
        </motion.p>

        {/* Tab strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-left transition-all duration-200 relative overflow-hidden"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${category.accent}12 0%, rgba(30, 30, 46, 0.95) 100%)`
                    : "rgba(49, 50, 68, 0.5)",
                  border: `1px solid ${isActive ? category.accent + "55" : "rgba(108, 112, 134, 0.18)"}`,
                  boxShadow: isActive ? `0 0 16px ${category.accent}18` : "none",
                }}
              >
                {/* Active glow line at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: category.accent }}
                  animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <span style={{ color: isActive ? category.accent : "rgba(205, 214, 244, 0.5)" }}>
                  <IconComponent icon={category.icon} size={15} />
                </span>
                <span
                  className="text-sm font-mono font-medium"
                  style={{ color: isActive ? category.accent : "rgba(205, 214, 244, 0.6)" }}
                >
                  {category.title}
                </span>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${category.accent}18`,
                    color: isActive ? category.accent : "rgba(205, 214, 244, 0.35)",
                  }}
                >
                  {category.items.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill pills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(49, 50, 68, 0.7) 0%, rgba(30, 30, 46, 0.9) 100%)",
                border: `1px solid ${active.accent}18`,
                boxShadow: `inset 0 0 60px ${active.accent}06`,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${active.accent}10 0%, transparent 70%)`,
                }}
              />

              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: active.accent }}>
                  <IconComponent icon={active.icon} size={14} />
                </span>
                <span className="text-[11px] font-mono tracking-widest text-foreground/40">
                  {active.title.toUpperCase()} — {active.items.length} SKILLS
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <SkillPill
                      name={item.name}
                      context={item.context}
                      icon={item.icon}
                      accent={active.accent}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
