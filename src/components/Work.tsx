"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import WorkGrid from "./WorkGrid";

interface WorkProps {
  projects: Project[];
}

export default function Work({ projects }: WorkProps) {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-mono"
        >
          <span className="gradient-text-bold">Selected Work</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-12 max-w-2xl"
        >
          A mix of case studies, redesigns, and design challenges. Each one taught me something — about users, about systems, about when to push back on the brief.
        </motion.p>
        
        <WorkGrid projects={projects} showAll={false} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm font-mono text-foreground/60 hover:text-accent transition-colors"
          >
            View all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}