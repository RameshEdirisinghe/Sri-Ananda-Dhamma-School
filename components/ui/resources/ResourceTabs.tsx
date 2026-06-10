"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResourceGrid from "./ResourceGrid";
import ResourceFilter from "./ResourceFilter";
import { useResourcesData } from "@/hooks/useResourcesData";

type ActiveFilters = {
  grade: string | null;
  subject: string | null;
  year: string | null;
};

export default function ResourceTabs() {
  const { types } = useResourcesData();
  const [activeTab, setActiveTab] = useState<string>("");

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    grade: null,
    subject: null,
    year: null,
  });

  useEffect(() => {
    if (types.length && !activeTab) {
      setActiveTab(types[0]);
    }
  }, [types, activeTab]);

  if (!types.length) return <div className="text-center py-20 opacity-50">Loading archives...</div>;

  return (
    <div className="space-y-12">
      {/* Premium Desktop Tabs */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100/80 rounded-[2rem] border border-neutral-200/50 shadow-inner">
          {types.map((type: string) => {
            const isActive = activeTab === type;
            return (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`relative px-8 py-3 text-sm font-bold rounded-[1.5rem] transition-all duration-300 capitalize ${
                  isActive
                    ? "text-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    : "text-neutral-soft hover:text-primary hover:bg-white/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="resource-tab-bg"
                    className="absolute inset-0 bg-white rounded-[1.5rem] z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-neutral-50/50 rounded-[2.5rem] p-8 lg:p-12 border border-neutral-100">
        <ResourceFilter activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
        
        <motion.div
          key={activeTab + JSON.stringify(activeFilters)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12"
        >
          {activeTab && (
            <ResourceGrid type={activeTab} activeFilters={activeFilters} />
          )}
        </motion.div>
      </div>
    </div>
  );
}
