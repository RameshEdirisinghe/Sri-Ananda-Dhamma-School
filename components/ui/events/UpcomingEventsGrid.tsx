import UpcomingEventCard from "./UpcomingEventCard";
import { useEventsData } from "@/hooks/useEventsData";

export default function UpcomingEventsGrid() {
  const events = useEventsData();

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {events.map((event, index) => (
        <UpcomingEventCard key={index} {...event} />
      ))}
    </div>
  );
}
