"use client";

import { motion } from "framer-motion";
import { MediumArticle } from "@/lib/projects";

interface WritingProps {
  articles: MediumArticle[];
}

export default function Writing({ articles }: WritingProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  const extractFirstImage = (content: string) => {
    const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {articles.map((article, index) => {
              const thumbnail = article.thumbnail || extractFirstImage(article.content);
              
              return (
                <motion.a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group block"
                >
                  <div className="retro-card-mauve rounded-lg p-3">
                    {thumbnail && (
                      <div className="aspect-[3/2] overflow-hidden rounded mb-2">
                        <img 
                          src={thumbnail} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-sm group-hover:text-accent transition-colors font-medium line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <span className="text-xs text-foreground/40 font-mono">
                      {formatDate(article.pubDate)}
                    </span>
                  </div>
                </motion.a>
              );
            })}
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