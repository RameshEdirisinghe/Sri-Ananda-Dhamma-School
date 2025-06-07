"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import LiveStats from "@/components/reusable/LiveStats";
import OriginStory from "@/components/ui/about/OriginStory";
import Timeline from "@/components/ui/about/Timeline";
import TeachersSection from "@/components/ui/about/TeacherSection";
import VisionSection from "@/components/ui/about/VisionSection";
import QuoteBubbles from "@/components/ui/about/QuoteBubbles";
import { BookText } from "lucide-react";

export default function AboutPage() {
  return (
    <ContentLayout
      title="Our Journey and Purpose"
      subtitle="From humble beginnings to a sanctuary of learning and peace — discover our story, guiding vision, and the hearts behind it all."
      icon={<BookText className="text-accent" size={28} strokeWidth={1.5} />}
    >
      <LiveStats />
      <OriginStory />
      <Timeline />
      <TeachersSection />
      <QuoteBubbles />
      <VisionSection />
    </ContentLayout>
  );
}
