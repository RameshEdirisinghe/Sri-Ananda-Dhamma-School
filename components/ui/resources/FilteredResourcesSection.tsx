"use client";
import { useState } from "react";
import ResourceFilter from "./ResourceFilter";
import ResourceGrid from "./ResourceGrid";

type ActiveFilters = {
  grade: string | null;
  subject: string | null;
  year: string | null;
};

export default function FilteredResourcesSection({ type }: { type: string }) {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    grade: null,
    subject: null,
    year: null,
  });

  return (
    <div>
      <ResourceFilter activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
      <ResourceGrid type={type} activeFilters={activeFilters} />
    </div>
  );
}
