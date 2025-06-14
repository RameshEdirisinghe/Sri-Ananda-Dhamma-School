import { useEffect, useState } from "react";
import facultyData from "@/content/faculty-data.json";

export interface Teacher {
  name: string;
  education: string;
  job: string;
  dhammaRole: string;
  image: string;
  badge?: string;
  testimonial?: string;
}

export interface Faculty {
  level: string;
  overview?: string;
  achievements?: string[];
  videos?: string[];
  photos?: string[];
  teachers: Teacher[];
}

export function useFacultyData(): Faculty[] {
  const [data, setData] = useState<Faculty[]>([]);

  useEffect(() => {
    setData(facultyData as Faculty[]);
  }, []);

  return data;
}
