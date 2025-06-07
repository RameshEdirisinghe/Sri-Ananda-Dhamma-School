"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useResourcesData } from "@/hooks/useResourcesData";

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
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Guard against undefined data
  if (!grades?.length || !subjects?.length || !years?.length) {
    return <p className="text-sm text-muted">Loading filters...</p>;
  }

  const toggleFilter = (category: FilterCategory, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const getButtonStyle = (active: boolean) =>
    `px-4 py-2 text-sm rounded-full border transition ${
      active
        ? "bg-primary text-white border-primary"
        : "bg-white text-textSecondary border-borderGray hover:bg-muted"
    }`;

  const chunkArray = (arr: string[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <div className="w-full mb-8">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-primary font-medium mb-4"
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
        {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <div
        className={`grid gap-4 transition-all duration-300 overflow-hidden ${
          showFilters ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Grade Filters (chunked into rows of 6) */}
        {chunkArray(grades?.filter(Boolean) ?? [], 6).map((gradeGroup, i) => (
          <div key={i} className="flex flex-wrap gap-3 mb-2">
            {gradeGroup.map((grade) => (
              <button
                key={grade}
                className={getButtonStyle(activeFilters.grade === grade)}
                onClick={() => toggleFilter("grade", grade)}
              >
                {grade}
              </button>
            ))}
          </div>
        ))}

        {/* Subject Filters */}
        <div className="flex flex-wrap gap-3">
          {subjects.map((subject: string) => (
            <button
              key={subject}
              className={getButtonStyle(activeFilters.subject === subject)}
              onClick={() => toggleFilter("subject", subject)}
            >
              {subject}
            </button>
          ))}
        </div>

        {/* Year Filters */}
        <div className="flex flex-wrap gap-3">
          {years.map((year: string) => (
            <button
              key={year}
              className={getButtonStyle(activeFilters.year === year)}
              onClick={() => toggleFilter("year", year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
