import { useEffect, useState } from "react";
import facultyData from "@/content/faculty-data.json";

export interface Teacher {
  name: string;
  photo: string;
  title: string;
  started: string;
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
