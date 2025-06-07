import ResourceTabs from "@/components/ui/resources/ResourceTabs";
import ContentLayout from "@/components/layout/ContentLayout";
import { BookText } from "lucide-react";

export default function ResourcesPage() {
  return (
    <ContentLayout
      title="The Knowledge Vault"
      subtitle="Access all available books, papers, and guides — curated for self-paced growth and exam excellence."
      icon={<BookText size={28} strokeWidth={1.5} />}
    >
      <ResourceTabs />
    </ContentLayout>
  );
}
