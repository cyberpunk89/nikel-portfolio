"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface WorkV2Props {
  projects: Project[];
}

const projectDescriptions: Record<string, string> = {
  "scalar-home-redesign": "From complex drill-downs to intuitive widgets. How user research led to a modular home screen for fleet dispatchers.",
  doula: "A full UX upgrade of a pregnancy companion app.",
  "sagefund-design-challenge": "Exploring what a research-first approach looks like in practice.",
  "sirelo-homepage-redesign-journey": "From cluttered to clear. A full homepage redesign that moved the needle.",
  "coorpid-design-challenge": "Service design for a high-stakes B2B onboarding flow.",
  "sirelo-interaction-design": "Designing a tool that's functional and — somehow — fun to use.",
  bbc: "One of my earliest case studies — a UX redesign of the BBC News app.",
  "beautiful-homes": "Designing a dynamic desktop experience for Asian Paints.",
  "sagefund-branding": "Building the brand identity for a sustainable fintech from scratch.",
  "ui-design": "A self-directed series of UI exercises.",
};

const cardColors: Record<string, { border: string; glow: string; tag: string; accent: string }> = {
  "scalar-home-redesign": { border: "rgba(243, 139, 168, 0.3)", glow: "rgba(243, 139, 168, 0.12)", tag: "red", accent: "#f38ba8" },
  doula: { border: "rgba(203, 166, 247, 0.3)", glow: "rgba(203, 166, 247, 0.12)", tag: "mauve", accent: "#cba6f7" },
  "sagefund-design-challenge": { border: "rgba(166, 227, 161, 0.3)", glow: "rgba(166, 227, 161, 0.12)", tag: "green", accent: "#a6e3a1" },
  "sirelo-homepage-redesign-journey": { border: "rgba(250, 179, 135, 0.3)", glow: "rgba(250, 179, 135, 0.12)", tag: "peach", accent: "#fab387" },
  "coorpid-design-challenge": { border: "rgba(137, 180, 250, 0.3)", glow: "rgba(137, 180, 250, 0.12)", tag: "blue", accent: "#89b4fa" },
  "sirelo-interaction-design": { border: "rgba(148, 226, 213, 0.3)", glow: "rgba(148, 226, 213, 0.12)", tag: "teal", accent: "#94e2d5" },
  bbc: { border: "rgba(249, 226, 175, 0.3)", glow: "rgba(249, 226, 175, 0.12)", tag: "yellow", accent: "#f9e2af" },
  "beautiful-homes": { border: "rgba(250, 179, 135, 0.3)", glow: "rgba(250, 179, 135, 0.12)", tag: "peach", accent: "#fab387" },
  "sagefund-branding": { border: "rgba(166, 227, 161, 0.3)", glow: "rgba(166, 227, 161, 0.12)", tag: "green", accent: "#a6e3a1" },
  "ui-design": { border: "rgba(137, 180, 250, 0.3)", glow: "rgba(137, 180, 250, 0.12)", tag: "blue", accent: "#89b4fa" },
};

const fallbackColor = { border: "rgba(203, 166, 247, 0.3)", glow: "rgba(203, 166, 247, 0.12)", tag: "mauve", accent: "#cba6f7" };

function FeaturedCard({ project }: { project: Project }) {
  const colors = cardColors[project.slug] || fallbackColor;
  const description = projectDescriptions[project.slug] || project.description || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div
          className="card-bg relative rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${colors.glow} 0%, transparent 60%)`,
            }}
          />

          <div className="flex flex-col md:flex-row">
            {/* Thumbnail — left 55% */}
            <div className="relative md:w-[55%] aspect-video md:aspect-auto overflow-hidden shrink-0">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-hover">
                  <span className="text-foreground/10 font-mono text-8xl">
                    {project.slug.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
              />
              {/* Featured badge */}
              <div
                className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: `${colors.accent}18`,
                  border: `1px solid ${colors.accent}50`,
                  color: colors.accent,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full animate-pulse"
                  style={{ backgroundColor: colors.accent }}
                />
                FEATURED
              </div>
            </div>

            {/* Content — right 45% */}
            <div className="md:w-[45%] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`tag-${colors.tag}`}>{project.client || "Project"}</span>
                  {project.tags?.[0] && (
                    <span className="text-[11px] text-foreground/40 font-mono">
                      {project.tags[0]}
                    </span>
                  )}
                  {project.date && (
                    <span className="text-[11px] text-foreground/30 font-mono ml-auto">
                      {project.date.slice(0, 4)}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl lg:text-2xl font-semibold mb-4 font-mono group-hover:text-accent transition-colors duration-300 leading-snug"
                  className="text-foreground"
                >
                  {project.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {description}
                </p>

                {project.tags && project.tags.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(1, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${colors.accent}10`,
                          border: `1px solid ${colors.accent}30`,
                          color: `${colors.accent}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="flex items-center gap-2 text-sm font-mono transition-all duration-300 group-hover:gap-3"
                style={{ color: colors.accent }}
              >
                <span>View Case Study</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const colors = cardColors[project.slug] || fallbackColor;
  const description = projectDescriptions[project.slug] || project.description || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <article
          className="card-bg relative rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
          style={{ border: `1px solid ${colors.border}` }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${colors.glow} 0%, transparent 60%)`,
            }}
          />

          {/* Thumbnail */}
          <div className="relative aspect-video bg-surface-hover overflow-hidden shrink-0">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/10 font-mono text-5xl">
                  {project.slug.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-4 lg:p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2.5">
              <span className={`tag-${colors.tag}`}>{project.client || "Project"}</span>
              {project.date && (
                <span className="text-[10px] font-mono text-foreground/30">
                  {project.date.slice(0, 4)}
                </span>
              )}
            </div>

            <h3
              className="text-base font-medium mb-2 font-mono group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug flex-1"
              className="text-foreground"
            >
              {project.title}
            </h3>

            <p className="text-xs text-foreground/50 line-clamp-2 mb-3 leading-relaxed">
              {description}
            </p>

            <div
              className="flex items-center gap-1.5 text-xs font-mono mt-auto opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
              style={{ color: colors.accent }}
            >
              <span>Case Study</span>
              <span>→</span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function WorkV2({ projects }: WorkV2Props) {
  const [featured, ...rest] = projects.slice(0, 4);
  const gridProjects = rest.slice(0, 3);

  return (
    <section id="work" className="py-24 px-6">
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
            <span className="text-accent">■</span> [01] SELECTED WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="gradient-text-bold">Case Studies</span>
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
          A mix of case studies, redesigns, and design challenges. Each one taught me something — about users, about systems, about when to push back on the brief.
        </motion.p>

        {/* Featured card */}
        {featured && <FeaturedCard project={featured} />}

        {/* Grid of remaining */}
        {gridProjects.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {gridProjects.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 ghost-btn font-mono text-sm rounded-lg"
          >
            View all work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
