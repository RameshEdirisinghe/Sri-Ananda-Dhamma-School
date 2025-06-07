import fallback from "@/content/login.json";
import type { PageContent } from "@/type/content";

// Async function to be called inside useEffect or server logic
export const getPageContent = async (slug: "login" | "register"): Promise<PageContent> => {
  try {
    const content = await import(`@/content/${slug}.json`);
    return content.default;
  } catch (error) {
    console.error(`Failed to load content for ${slug}.json`, error);
    return fallback;
  }
};
