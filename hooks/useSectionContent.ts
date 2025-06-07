import origin from "@/content/origin.json";
import vision from "@/content/vision.json";
import teachers from "@/content/teachers.json";
import milestones from "@/content/milestones.json";
import stats from "@/content/live-stats.json";
import quotes from "@/content/quotes.json";

export function useSectionContent<T = unknown>(section: SectionKey): T {
  switch (section) {
    case "origin": return origin as T;
    case "vision": return vision as T;
    case "teachers": return teachers as T;
    case "timeline": return milestones as T;
    case "stats": return stats as T;
    case "quotes": return quotes as T;
    default: throw new Error(`Unknown section: ${section}`);
  }
}

type SectionKey =
  | "origin"
  | "vision"
  | "teachers"
  | "timeline"
  | "stats"
  | "quotes";