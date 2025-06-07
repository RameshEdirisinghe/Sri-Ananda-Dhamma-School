"use client";

import ResourceCard from "./ResourceCard";
import { useResourcesData } from "@/hooks/useResourcesData";

export default function ResourceGrid({
  type,
  activeFilters,
}: {
  type: string;
  activeFilters: {
    grade: string | null;
    subject: string | null;
    year: string | null;
  };
}) {
  const { resources } = useResourcesData();

  // Prevent crash if resources is undefined or not an array
  if (!resources || !Array.isArray(resources)) {
    return <p className="text-sm text-muted">Loading resources...</p>;
  }

  const filtered = resources.filter((item) => {
    if (!item || typeof item !== "object") return false;

    const matchType = item.type === type;
    const matchGrade = activeFilters.grade ? item.grade === activeFilters.grade : true;
    const matchSubject = activeFilters.subject ? item.subject === activeFilters.subject : true;
    const matchYear = activeFilters.year ? item.year === activeFilters.year : true;

    return matchType && matchGrade && matchSubject && matchYear;
  });

  if (filtered.length === 0) {
    return <p className="text-sm text-gray-500">No resources found for selected filters.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((res) => (
        <ResourceCard key={`${res.title}-${res.fileUrl}`} {...res} />
      ))}
    </div>
  );
}
