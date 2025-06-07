// src/hooks/useMomentsData.ts
import moments from "@/content/moments.json";

interface Achievement {
  title: string;
  year: string;
  type: string;
  story: string;
  media: string;
  isVideo?: boolean;
}

interface Album {
  title: string;
  year: string;
  cover: string;
}

export function useMomentsData(): {
  achievements: Achievement[];
  albums: Album[];
} {
  return {
    achievements: moments.achievements,
    albums: moments.albums
  };
}
