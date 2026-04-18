"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MediumArticle } from "@/lib/projects";

interface WritingProps {
  articles: MediumArticle[];
}

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return dateString;
  }
}

function extractFirstImage(content: string) {
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

function estimateReadTime(content: string): string {
  const wordCount = content.split(/<\/?[^>]+>/).join("").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

function WritingCard({ article, index }: { article: MediumArticle; index: number }) {
  const thumbnail = article.thumbnail || extractFirstImage(article.content);
  const readTime = estimateReadTime(article.content);

  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group block"
    >
      <div
        className="rounded-xl p-4 h-full transition-all duration-300"
        style={{
          background: "linear-gradient(145deg, rgba(49, 50, 68, 0.95) 0%, rgba(30, 30, 46, 0.98) 100%)",
          border: "1px solid rgba(203, 166, 247, 0.2)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {thumbnail && (
          <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3 relative">
            <Image
              src={thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, rgba(30, 30, 46, 0.8) 0%, transparent 50%)",
              }}
            />
          </div>
        )}

        <h3
          className="text-sm group-hover:text-accent transition-colors duration-300 font-medium line-clamp-2 mb-2 leading-snug"
          title={article.title}
        >
          {article.title}
        </h3>

        <div className="flex items-center gap-3 text-xs" style={{ color: "var(--foreground)", opacity: 0.5 }}>
          <span className="font-mono">{formatDate(article.pubDate)}</span>
          <span>·</span>
          <span className="font-mono">{readTime}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Writing({ articles }: WritingProps) {
  return (
    <section id="writing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 font-mono"
        >
          <span className="gradient-text-bold">Writing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/60 mb-8"
        >
          Latest on Medium →
        </motion.p>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <WritingCard key={article.link} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/60 mb-4">Unable to load articles from Medium.</p>
            <a
              href="https://medium.com/@nikel_design"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-lg inline-block"
            >
              Visit My Medium →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}