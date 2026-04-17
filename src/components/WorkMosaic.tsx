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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardColor = getCardColor(project.slug);
  const cardClass = `retro-card-${cardColor}`;

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className={`${cardClass} rounded-xl overflow-hidden min-h-36 flex flex-col md:flex-row`}>
          <div className="md:w-80 w-full h-48 md:h-auto shrink-0 bg-surface-hover overflow-hidden relative">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/20 font-mono text-4xl">
                  {project.slug.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className={`tag-${cardColor}`}>
                {project.client || "Project"}
              </span>
              <span className="text-xs text-foreground/40 font-mono">
                {(() => {
                  const year = new Date(project.date).getFullYear();
                  return isNaN(year) ? "—" : year;
                })()}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-medium group-hover:text-accent transition-colors font-mono line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/60 line-clamp-1 mt-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags?.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded bg-surface-hover text-foreground/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
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
