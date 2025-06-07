"use client";

import { useState } from "react";
import EventViewToggle from "@/components/ui/events/EventViewToggle";
import CalendarView from "@/components/ui/events/CalendarView";
import ContentLayout from "@/components/layout/ContentLayout";
import { CalendarIcon } from "lucide-react";
import UpcomingEventsGrid from "@/components/ui/events/UpcomingEventsGrid";
// This page serves as the main entry point for the events section, allowing users to toggle between a list view and a calendar view of upcoming events.

export default function EventsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <ContentLayout
      title="Events and Details"
      subtitle="Join us on our journey of spiritual growth through guided meditation retreats, youth trips, competitions, and community gatherings. Discover upcoming events, mark your calendar, and stay connected with your Dhamma family."
      icon={<CalendarIcon className="text-accent" size={28} strokeWidth={1.5} />}
    >
      {/* 👇 Small/Mid screens: toggle view */}
      <div className="block lg:hidden">
        <EventViewToggle view={view} onChange={setView} />
        <div className="mt-6">
          {view === "list" ? <UpcomingEventsGrid /> : <CalendarView />}
        </div>
      </div>

      {/* 👇 Large screens: show only CalendarView (handles calendar + event list) */}
      <div className="hidden lg:block">
        <CalendarView />
      </div>
    </ContentLayout>
  );
}
