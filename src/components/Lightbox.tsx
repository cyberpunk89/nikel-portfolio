"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  children: React.ReactNode;
}

export default function Lightbox({ children }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => {
    const fullSrc = src.startsWith("/") ? src : `/${src}`;
    setImageSrc(fullSrc);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setImageSrc(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeLightbox();
      }
    };

    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" && target.closest(".project-content")) {
        const src = target.getAttribute("src");
        if (src) {
          e.preventDefault();
          openLightbox(src);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleImageClick, true);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleImageClick, true);
    };
  }, [isOpen, openLightbox, closeLightbox]);

  return (
    <>
      <div className="project-content cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && imageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageSrc}
                alt=""
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))" }}
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono">
              Click anywhere or press ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
