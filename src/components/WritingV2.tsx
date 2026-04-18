"use client";

import { motion } from "framer-motion";
import { MediumArticle } from "@/lib/projects";

interface WritingV2Props {
  articles: MediumArticle[];
}

function formatDate(dateString: string) {
  try {
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  } catch {
    return dateString;
  }
}

function estimateReadTime(content: string): string {
  const words = content.replace(/<\/?[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

export default function WritingV2({ articles }: WritingV2Props) {
  const displayed = articles.slice(0, 5);

  return (
    <section id="writing" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header — intentionally smaller than other sections */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-mono text-foreground/35 tracking-[0.2em] mb-1.5 flex items-center gap-2">
              <span className="text-peach">■</span> [02] WRITING
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="gradient-text-bold">From the Blog</span>
            </h2>
          </div>
          <a
            href="https://medium.com/@nikel_design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-foreground/40 hover:text-accent transition-colors shrink-0"
          >
            All on Medium →
          </a>
        </motion.div>

        <div className="section-gradient-line mb-8" />

        {displayed.length > 0 ? (
          <div className="divide-y" style={{ borderColor: "rgba(108, 112, 134, 0.12)" }}>
            {displayed.map((article, index) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group flex items-center gap-4 py-4 hover:pl-2 transition-all duration-200"
              >
                <span
                  className="text-[10px] font-mono shrink-0 w-5 text-right"
                  style={{ color: "rgba(108, 112, 134, 0.4)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="flex-1 text-sm font-medium text-foreground/75 group-hover:text-foreground transition-colors line-clamp-1">
                  {article.title}
                </p>

                <div className="flex items-center gap-3 shrink-0 text-[11px] font-mono text-foreground/30">
                  <span className="hidden sm:block">{formatDate(article.pubDate)}</span>
                  <span className="hidden sm:block">·</span>
                  <span>{estimateReadTime(article.content)}</span>
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-foreground/40 font-mono">
            <span className="text-accent">›</span> Unable to reach Medium.{" "}
            <a href="https://medium.com/@nikel_design" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Visit directly →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
