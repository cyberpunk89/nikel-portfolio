"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface WorkGridProps {
  projects: Project[];
  showAll?: boolean;
}

const projectDescriptions: Record<string, string> = {
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

const cardColors: Record<string, { border: string; glow: string; tag: string }> = {
  doula: { border: "rgba(203, 166, 247, 0.3)", glow: "rgba(203, 166, 247, 0.2)", tag: "mauve" },
  "sagefund-design-challenge": { border: "rgba(166, 227, 161, 0.3)", glow: "rgba(166, 227, 161, 0.2)", tag: "green" },
  "sirelo-homepage-redesign-journey": { border: "rgba(250, 179, 135, 0.3)", glow: "rgba(250, 179, 135, 0.2)", tag: "peach" },
  "coorpid-design-challenge": { border: "rgba(137, 180, 250, 0.3)", glow: "rgba(137, 180, 250, 0.2)", tag: "blue" },
  "sirelo-interaction-design": { border: "rgba(148, 226, 213, 0.3)", glow: "rgba(148, 226, 213, 0.2)", tag: "teal" },
  bbc: { border: "rgba(249, 226, 175, 0.3)", glow: "rgba(249, 226, 175, 0.2)", tag: "yellow" },
  "beautiful-homes": { border: "rgba(250, 179, 135, 0.3)", glow: "rgba(250, 179, 135, 0.2)", tag: "peach" },
  "sagefund-branding": { border: "rgba(166, 227, 161, 0.3)", glow: "rgba(166, 227, 161, 0.2)", tag: "green" },
  "ui-design": { border: "rgba(137, 180, 250, 0.3)", glow: "rgba(137, 180, 250, 0.2)", tag: "blue" },
};

function WorkCard({ project, index }: { project: Project; index: number }) {
  const colorConfig = cardColors[project.slug] || cardColors.doula;
  const tagClass = `tag-${colorConfig.tag}`;
  const description = projectDescriptions[project.slug] || project.description || "";

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-300 ease-out h-full flex flex-col"
          style={{
            background: "linear-gradient(145deg, rgba(49, 50, 68, 0.95) 0%, rgba(30, 30, 46, 0.98) 100%)",
            border: `1px solid ${colorConfig.border}`,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${colorConfig.glow} 0%, transparent 60%)`,
            }}
          />

          <div
            className="relative aspect-video bg-surface-hover overflow-hidden shrink-0"
            style={{
              boxShadow: `inset 0 0 0 1px ${colorConfig.border}`,
            }}
            title={project.title}
          >
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/20 font-mono text-6xl opacity-50">
                  {project.slug.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            <div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="p-5 lg:p-6 relative flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={tagClass}>{project.client || "Project"}</span>
              {project.tags?.[0] && (
                <span className="text-xs text-foreground/40 font-mono truncate max-w-[120px]" title={project.tags[0]}>
                  {project.tags[0]}
                </span>
              )}
            </div>

            <h3
              className="text-base md:text-lg lg:text-xl font-medium mb-3 group-hover:text-accent transition-colors duration-300 font-mono line-clamp-1 text-balance"
              title={project.title}
            >
              {project.title}
            </h3>

            <p
              className="text-sm text-foreground/60 line-clamp-2 mb-4 leading-relaxed flex-1"
              title={description}
            >
              {description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-sm text-accent font-mono opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                View Case Study
              </motion.span>
              <motion.span
                className="text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                style={{ transitionDelay: "50ms" }}
              >
                →
              </motion.span>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkGrid({ projects, showAll = false }: WorkGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {displayProjects.map((project, index) => (
        <WorkCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}