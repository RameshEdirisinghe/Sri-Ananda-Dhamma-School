import { useEffect, useState } from "react";
import rawJson from "@/content/resources.json";

// Interfaces
export interface ResourceItem {
  type: string;
  title: string;
  fileType: string;
  fileUrl: string;
  previewable?: boolean;
  grade?: string;
  subject?: string;
  year?: string;
}

export interface ResourcesData {
  types: string[];
  grades: string[];
  subjects: string[];
  years: string[];
  resources: ResourceItem[];
}

interface RawResourcesJson {
  types: string[];
  grades: string[];
  subjects: string[];
  years: string[];
  resources: ResourceItem[];
}

export function useResourcesData(): ResourcesData {
  const [data, setData] = useState<ResourcesData>({
    types: [],
    grades: [],
    subjects: [],
    years: [],
    resources: [],
  });

  useEffect(() => {
    const json = rawJson as unknown as RawResourcesJson;

    const extractedTypes = json.types
    const extractedGrades = json.grades
    const extractedSubjects = json.subjects
    const extractedYears = json.years
    const extractedResources = json.resources;

    setData({
      types: extractedTypes,
      grades: extractedGrades,
      subjects: extractedSubjects,
      years: extractedYears,
      resources: extractedResources,
    });
  }, []);

  return data;
}
