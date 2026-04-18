"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import WorkMosaic from "@/components/WorkMosaic";

interface FilterCategory {
  name: string;
  tags: string[];
}

const filterCategories: FilterCategory[] = [
  {
    name: "Discipline",
    tags: ["UX Research", "UI Design", "Interaction Design", "Service Design", "Information Architecture", "Brand Identity"],
  },
  {
    name: "Type",
    tags: ["Case Study", "Design Challenge", "Redesign"],
  },
  {
    name: "Platform",
    tags: ["Mobile App", "Web App", "Website", "Game UI", "Tool Design"],
  },
  {
    name: "Industry",
    tags: ["Fintech", "E-commerce", "Banking", "Healthcare", "Logistics", "Media", "Sustainable Design"],
  },
];

function FilterCheckbox({ 
  label, 
  checked, 
  onChange 
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-surface cursor-pointer transition-colors">
      <div 
        className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
          checked 
            ? "bg-accent border-accent" 
            : "border-foreground/30 hover:border-foreground/50"
        }`}
        onClick={(e) => {
          e.preventDefault();
          onChange();
        }}
      >
        {checked && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-background">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-foreground/70">{label}</span>
    </label>
  );
}

function FilterCategorySection({ 
  category, 
  selectedTags,
  onToggleTag
}: { 
  category: FilterCategory;
  selectedTags: Set<string>;
  onToggleTag: (tag: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const hasSelection = category.tags.some(tag => selectedTags.has(tag));

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-2 text-left"
      >
        <span className="text-sm font-medium flex items-center gap-2">
          {category.name}
          {hasSelection && (
            <span className="w-2 h-2 rounded-full bg-accent" />
          )}
        </span>
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-foreground/40"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3 px-2">
              {category.tags.map(tag => (
                <FilterCheckbox
                  key={tag}
                  label={tag}
                  checked={selectedTags.has(tag)}
                  onChange={() => onToggleTag(tag)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileFilterDrawer({ 
  isOpen, 
  onClose,
  selectedTags,
  onToggleTag,
  onClear,
  projectCount
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
            className="fixed bottom-0 left-0 right-0 bg-background rounded-t-2xl z-50 md:hidden max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold font-mono">Filters</h3>
              <button onClick={onClose} className="p-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {filterCategories.map(category => (
                <div key={category.name} className="mb-4">
                  <h4 className="text-sm font-medium text-foreground/60 mb-2 px-2">{category.name}</h4>
                  <div className="space-y-1">
                    {category.tags.map(tag => (
                      <FilterCheckbox
                        key={tag}
                        label={tag}
                        checked={selectedTags.has(tag)}
                        onChange={() => onToggleTag(tag)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-border flex gap-3">
              <button
                onClick={onClear}
                className="flex-1 py-3 px-4 rounded-lg border border-border text-sm font-mono hover:bg-surface transition-colors"
              >
                Clear all
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-lg bg-accent text-background text-sm font-mono font-medium hover:opacity-90 transition-opacity"
              >
                Show {projectCount} {projectCount === 1 ? 'project' : 'projects'}
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
    
    const categoryGroups: Record<string, string[]> = {};
    filterCategories.forEach(cat => {
      categoryGroups[cat.name] = cat.tags;
    });
    
    const selectedCategories: Record<string, boolean> = {};
    selectedTags.forEach(tag => {
      Object.entries(categoryGroups).forEach(([catName, tags]) => {
        if (tags.includes(tag)) {
          selectedCategories[catName] = true;
        }
      });
    });
    
    const categoryTagMap: Record<string, string[]> = {};
    Object.entries(categoryGroups).forEach(([catName, tags]) => {
      const tagsInSelection = tags.filter(t => selectedTags.has(t));
      if (tagsInSelection.length > 0) {
        categoryTagMap[catName] = tagsInSelection;
      }
    });
    
    return projects.filter(project => {
      const projectTags = project.tags || [];
      
      return Object.entries(categoryTagMap).every(([, tags]) => {
        return tags.some(tag => projectTags.includes(tag));
      });
    });
  }, [selectedTags, projects]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedTags(new Set());
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      next.delete(tag);
      return next;
    });
  };

  const hasActiveFilters = selectedTags.size > 0;

  return (
    <div className="flex gap-8">
      <aside className="hidden md:block w-56 shrink-0">
        <div className="sticky top-24">
          <p className="text-[10px] font-mono text-foreground/35 tracking-[0.2em] mb-3 flex items-center gap-2">
            <span className="text-accent">■</span> FILTERS
          </p>
          <div
            className="overflow-hidden rounded-xl"
            style={{
              background: "linear-gradient(145deg, rgba(49, 50, 68, 0.8) 0%, rgba(30, 30, 46, 0.95) 100%)",
              border: "1px solid rgba(108, 112, 134, 0.2)",
            }}
          >
            {filterCategories.map(category => (
              <FilterCategorySection
                key={category.name}
                category={category}
                selectedTags={selectedTags}
                onToggleTag={toggleTag}
              />
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-foreground/50 font-mono">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
          
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-accent text-background text-xs flex items-center justify-center">
                {selectedTags.size}
              </span>
            )}
          </button>
        </div>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {Array.from(selectedTags).map(tag => (
              <motion.button
                key={tag}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => removeTag(tag)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-mono hover:bg-accent/20 transition-colors"
              >
                {tag}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            ))}
            <button
              onClick={clearFilters}
              className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors px-2 py-1.5"
            >
              Clear all
            </button>
          </div>
        )}

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
