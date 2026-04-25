"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface WorkMosaicProps {
  projects: Project[];
  className?: string;
}

const cardColors: Record<string, string> = {
  doula: "mauve",
  "sagefund-design-challenge": "green",
  "sirelo-homepage-redesign-journey": "peach",
  "coorpid-design-challenge": "teal",
  "sirelo-interaction-design": "peach",
  bbc: "yellow",
  "beautiful-homes": "peach",
  "sagefund-branding": "green",
  twitchapp: "mauve",
};

const randomColors = ["mauve", "peach", "yellow", "teal", "green", "blue", "red"];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
  }
  return Math.abs(hash);
}

function getCardColor(slug: string): string {
  if (cardColors[slug]) {
    return cardColors[slug];
  }
  const hash = hashString(slug);
  return randomColors[hash % randomColors.length];
}

const colorHex: Record<string, string> = {
  mauve: "#cba6f7", peach: "#fab387", yellow: "#f9e2af",
  teal: "#94e2d5", green: "#a6e3a1", blue: "#89b4fa", red: "#f38ba8",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardColor = getCardColor(project.slug);
  const accent = colorHex[cardColor] || "#cba6f7";
  const year = (() => { const y = new Date(project.date).getFullYear(); return isNaN(y) ? "—" : y; })();

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <article
          className="card-bg rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300"
          style={{
            border: `1px solid ${accent}28`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${accent}0a 0%, transparent 60%)` }}
          />

          {/* Thumbnail */}
          <div className="md:w-72 w-full h-48 md:h-auto shrink-0 bg-surface-hover overflow-hidden relative">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/10 font-mono text-5xl">
                  {project.slug.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`tag-${cardColor}`}>{project.client || "Project"}</span>
                <span className="text-[11px] text-foreground/35 font-mono">{year}</span>
              </div>
              <h3
                className="text-base md:text-lg font-medium font-mono mb-2 leading-snug transition-colors duration-300"
                style={{ color: "#cdd6f4" }}
              >
                <span className="group-hover:text-accent transition-colors duration-300">{project.title}</span>
              </h3>
              <p className="text-sm text-foreground/55 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded font-mono"
                    style={{ backgroundColor: `${accent}10`, color: `${accent}cc`, border: `1px solid ${accent}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-xs font-mono opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-3"
                style={{ color: accent }}
              >
                Read →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function WorkMosaic({ projects, className = "" }: WorkMosaicProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-foreground/40 font-mono">No projects match your filters.</p>
        <p className="text-sm text-foreground/30 mt-2">Try adjusting your filter selection.</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}
