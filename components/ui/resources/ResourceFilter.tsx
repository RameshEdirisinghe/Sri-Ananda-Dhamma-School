"use client";

import { ChevronDown, ChevronUp, Filter, Trash2 } from "lucide-react";
import { useState } from "react";
import { useResourcesData } from "@/hooks/useResourcesData";
import { motion, AnimatePresence } from "framer-motion";

type FilterCategory = "grade" | "subject" | "year";

type ActiveFilters = {
  grade: string | null;
  subject: string | null;
  year: string | null;
};

export default function ResourceFilter({
  activeFilters = { grade: null, subject: null, year: null },
  setActiveFilters = () => {},
}: {
  activeFilters?: ActiveFilters;
  setActiveFilters?: React.Dispatch<React.SetStateAction<ActiveFilters>>;
}) {
  const { grades, subjects, years } = useResourcesData();
  const [showFilters, setShowFilters] = useState(true);

  if (!grades?.length || !subjects?.length || !years?.length) {
    return <p className="text-sm text-muted animate-pulse">Initializing filters...</p>;
  }

  const toggleFilter = (category: FilterCategory, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({ grade: null, subject: null, year: null });
  };

  const hasActiveFilters = Object.values(activeFilters).some((v) => v !== null);

  const getButtonStyle = (active: boolean) =>
    `px-4 py-2 text-xs font-bold rounded-full border transition-all duration-300 ${
      active
        ? "bg-primary text-white border-primary shadow-md transform scale-105"
        : "bg-white text-neutral-soft border-neutral-200 hover:border-primary/50 hover:text-primary"
    }`;

  const FilterSection = ({ 
    title, 
    items, 
    category 
  }: { 
    title: string; 
    items: string[]; 
    category: FilterCategory 
  }) => (
    <div className="space-y-3">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-muted flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            className={getButtonStyle(activeFilters[category] === item)}
            onClick={() => toggleFilter(category, item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 border-b border-neutral-200/50 pb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-neutral font-bold text-sm group"
        >
          <div className={`p-1.5 rounded-lg transition-colors ${showFilters ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-soft group-hover:bg-neutral-200'}`}>
            <Filter size={14} />
          </div>
          {showFilters ? "Refine Archives" : "Show Library Filters"}
          {showFilters ? <ChevronUp size={16} className="opacity-40" /> : <ChevronDown size={16} className="opacity-40" />}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-state-error hover:opacity-80 transition-opacity"
          >
            <Trash2 size={12} />
            Reset All
          </button>
        )}
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white">
              <FilterSection title="Academic Grade" items={grades.filter(Boolean)} category="grade" />
              <FilterSection title="Curriculum Subject" items={subjects} category="subject" />
              <FilterSection title="Published Year" items={years} category="year" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
