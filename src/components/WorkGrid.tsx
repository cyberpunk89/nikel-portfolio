"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const cardColors: Record<string, string> = {
  doula: "mauve",
  "sagefund-design-challenge": "green",
  "sirelo-homepage-redesign-journey": "peach",
  "coorpid-design-challenge": "blue",
  "sirelo-interaction-design": "teal",
  bbc: "yellow",
  "beautiful-homes": "peach",
  "sagefund-branding": "green",
  "ui-design": "blue",
};

export default function WorkGrid({ projects, showAll = false }: WorkGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {displayProjects.map((project, index) => {
        const cardColor = cardColors[project.slug] || "mauve";
        const cardClass = `retro-card-${cardColor}`;
        
        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`} className="group block">
              <div className={`${cardClass} rounded-xl overflow-hidden`}>
                <div className="aspect-video bg-surface-hover overflow-hidden relative">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-foreground/20 font-mono text-6xl opacity-50">
                        {project.slug.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className={`tag-${cardColor}`}>
                      {project.client || "Project"}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-all duration-300 font-mono line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm line-clamp-2 mb-3 h-10 overflow-hidden">
                    {projectDescriptions[project.slug] || project.description}
                  </p>
                  <div className="flex items-center text-sm text-accent">
                    <span className="group-hover:translate-x-2 transition-transform">
                      View Case Study
                    </span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}