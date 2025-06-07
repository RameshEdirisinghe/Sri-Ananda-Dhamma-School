"use client";

import { useState, useEffect } from "react";
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

  // ✅ Lifting filter state here
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

  if (!types.length) return <div className="text-center">Loading resources...</div>;

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        {types.map((type: string) => (
          <button
            key={type}
            className={`text-sm font-medium pb-1 border-b-2 transition ${
              activeTab === type
                ? "border-primary text-primary"
                : "border-transparent text-textSecondary hover:text-primary"
            }`}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ✅ Pass filters down as props */}
      <ResourceFilter activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
      {activeTab && (
        <ResourceGrid type={activeTab} activeFilters={activeFilters} />
      )}
    </div>
  );
}
