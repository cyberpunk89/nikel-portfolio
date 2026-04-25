"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import WorkMosaic from "@/components/WorkMosaic";

interface FilterCategory {
  name: string;
  tags: string[];
  color: string;
}

const filterCategories: FilterCategory[] = [
  {
    name: "Discipline",
    color: "#cba6f7",
    tags: ["UX Research", "UI Design", "Interaction Design", "Service Design", "Information Architecture", "Brand Identity"],
  },
  {
    name: "Type",
    color: "#89b4fa",
    tags: ["Case Study", "Design Challenge", "Redesign"],
  },
  {
    name: "Platform",
    color: "#94e2d5",
    tags: ["Mobile App", "Web App", "Website", "Game UI", "Tool Design"],
  },
  {
    name: "Industry",
    color: "#fab387",
    tags: ["Fintech", "E-commerce", "Banking", "Healthcare", "Logistics", "Media", "Sustainable Design"],
  },
];

function FilterRow({
  label,
  checked,
  color,
  onChange,
}: {
  label: string;
  checked: boolean;
  color: string;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-left transition-all duration-150 hover:bg-surface-hover/40"
      style={checked ? { backgroundColor: `${color}14` } : {}}
    >
      {/* Checkbox */}
      <span
        className="w-3.5 h-3.5 rounded-sm shrink-0 flex items-center justify-center transition-all duration-150 border"
        style={
          checked
            ? { backgroundColor: color, borderColor: color }
            : { backgroundColor: "transparent", borderColor: "var(--border)" }
        }
      >
        {checked && (
          <svg viewBox="0 0 10 8" fill="none" className="w-2 h-2" aria-hidden="true">
            <polyline points="1 4 3.5 6.5 9 1" stroke="rgba(30,30,46,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>

      {/* Label */}
      <span
        className="text-sm transition-colors duration-150 leading-none"
        style={{ color: checked ? color : "var(--foreground)", opacity: checked ? 1 : 0.75 }}
      >
        {label}
      </span>
    </button>
  );
}

function FilterPanel({
  selectedTags,
  onToggleTag,
  onClear,
}: {
  selectedTags: Set<string>;
  onToggleTag: (tag: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="space-y-4">
      {filterCategories.map((category) => (
        <div key={category.name}>
          {/* Category label */}
          <div className="flex items-center gap-2 px-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: category.color }} />
            <span className="text-[10px] font-mono tracking-widest uppercase text-foreground/50">
              {category.name}
            </span>
          </div>

          {/* Items */}
          <div className="space-y-0.5">
            {category.tags.map((tag) => (
              <FilterRow
                key={tag}
                label={tag}
                checked={selectedTags.has(tag)}
                color={category.color}
                onChange={() => onToggleTag(tag)}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedTags.size > 0 && (
        <button
          onClick={onClear}
          className="text-[10px] font-mono text-foreground/30 hover:text-foreground/55 transition-colors px-2 pt-1"
        >
          ✕ clear all
        </button>
      )}
    </div>
  );
}

function MobileFilterDrawer({
  isOpen,
  onClose,
  selectedTags,
  onToggleTag,
  onClear,
  projectCount,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedTags: Set<string>;
  onToggleTag: (tag: string) => void;
  onClear: () => void;
  projectCount: number;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 rounded-t-2xl z-50 md:hidden max-h-[85vh] flex flex-col"
            style={{
              background: "linear-gradient(145deg, rgba(49,50,68,0.98) 0%, rgba(30,30,46,0.99) 100%)",
              border: "1px solid rgba(108,112,134,0.2)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/30">
              <span className="text-xs font-mono text-foreground/40 tracking-widest uppercase">Filters</span>
              <button onClick={onClose} aria-label="Close filters" className="p-1.5 rounded-md hover:bg-surface transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-foreground/50" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <FilterPanel selectedTags={selectedTags} onToggleTag={onToggleTag} onClear={onClear} />
            </div>

            <div className="px-5 py-4 border-t border-border/30 flex gap-3">
              <button
                onClick={onClear}
                className="flex-1 py-2.5 px-4 rounded-lg border border-border/40 text-sm font-mono text-foreground/60 hover:bg-surface transition-colors"
              >
                Clear
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-lg bg-accent text-background text-sm font-mono font-medium hover:opacity-90 transition-opacity"
              >
                Show {projectCount} {projectCount === 1 ? "project" : "projects"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects;

    const categoryTagMap: Record<string, string[]> = {};
    filterCategories.forEach((cat) => {
      const active = cat.tags.filter((t) => selectedTags.has(t));
      if (active.length > 0) categoryTagMap[cat.name] = active;
    });

    return projects.filter((project) => {
      const projectTags = project.tags || [];
      return Object.values(categoryTagMap).every((tags) =>
        tags.some((tag) => projectTags.includes(tag))
      );
    });
  }, [selectedTags, projects]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  };

  const clearFilters = () => setSelectedTags(new Set());
  const removeTag = (tag: string) => {
    setSelectedTags((prev) => { const next = new Set(prev); next.delete(tag); return next; });
  };

  const hasActiveFilters = selectedTags.size > 0;

  return (
    <div className="flex gap-10">
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-52 shrink-0">
        <div className="sticky top-24">
          <div
            className="rounded-xl p-4"
            style={{
              background: "linear-gradient(145deg, rgba(49,50,68,0.7) 0%, rgba(30,30,46,0.85) 100%)",
              border: "1px solid rgba(108,112,134,0.18)",
            }}
          >
            <p className="text-xs font-mono text-foreground/70 tracking-[0.15em] mb-4 flex items-center gap-2">
              <span className="text-accent">■</span> FILTERS
            </p>
            <FilterPanel selectedTags={selectedTags} onToggleTag={toggleTag} onClear={clearFilters} />
          </div>
        </div>
      </aside>

      {/* Project list */}
      <div className="flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs text-foreground/40 font-mono">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            {hasActiveFilters && <span className="text-accent"> · filtered</span>}
          </p>

          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
            style={{ border: "1px solid rgba(108,112,134,0.25)", color: "rgba(205,214,244,0.6)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filters
            {hasActiveFilters && (
              <span className="w-4 h-4 rounded-full bg-accent text-background text-[10px] flex items-center justify-center font-bold">
                {selectedTags.size}
              </span>
            )}
          </button>
        </div>

        {/* Active filter pills */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-1.5 mb-5 overflow-hidden"
            >
              {Array.from(selectedTags).map((tag) => {
                const cat = filterCategories.find((c) => c.tags.includes(tag));
                const color = cat?.color ?? "#cba6f7";
                return (
                  <motion.button
                    key={tag}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    onClick={() => removeTag(tag)}
                    className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md transition-all"
                    style={{ backgroundColor: `${color}18`, border: `1px solid ${color}40`, color }}
                  >
                    {tag}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <WorkMosaic projects={filteredProjects} />
      </div>

      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClear={clearFilters}
        projectCount={filteredProjects.length}
      />
    </div>
  );
}
