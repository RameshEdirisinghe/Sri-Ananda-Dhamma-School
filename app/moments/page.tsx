import ContentLayout from "@/components/layout/ContentLayout";
import MomentsTabs from "@/components/ui/moments/MomentsTabs";
import { Sparkles } from "lucide-react";

export default function MomentsPage() {
  return (
    <ContentLayout
      title="Moments of Glory"
      subtitle="Celebrating achievements and memories that shaped our journey — from awards and certificates to cherished events."
      icon={<Sparkles className="text-accent" size={28} strokeWidth={1.5} />}
    >
      <MomentsTabs />
    </ContentLayout>
  );
}
