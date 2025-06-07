"use client";

import { useRef, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useEventsData } from "@/hooks/useEventsData";
import UpcomingEventCard from "./UpcomingEventCard";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

export default function CalendarView() {
  const events = useEventsData();
  const isLarge = useIsLargeScreen();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const getEventsForDate = (date: Date) => {
    const day = format(date, "yyyy-MM-dd");
    return events.filter((e) => e.date.slice(0, 10) === day);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const dayEvents = getEventsForDate(date);
    return dayEvents.length ? (
      <div className="mt-1 flex justify-center gap-1">
        {dayEvents.map((e, i) => (
          <span
            key={`${e.title}-${i}`}
            title={e.title}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              e.type === "Meditation"
                ? "bg-orange-500"
                : e.type === "Trip"
                ? "bg-yellow-500"
                : e.type === "Competition"
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    ) : null;
  };

  const filteredEvents = selectedDate
    ? getEventsForDate(selectedDate)
    : isLarge
    ? events
    : getEventsForDate(new Date());

  useEffect(() => {
    if (cardsRef.current && !isLarge) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedDate, isLarge]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 items-start w-full max-w-7xl mx-auto px-4 py-10">
      {/* Event Cards Section */}
      <div
        ref={cardsRef}
        className={`w-full space-y-6 ${
          isLarge ? "h-[calc(100vh-10rem)] overflow-y-auto pr-2" : ""
        }`}
      >
        {selectedDate && isLarge && (
          <button
            onClick={() => setSelectedDate(null)}
            className="text-sm text-primary hover:underline"
          >
            Clear Filter
          </button>
        )}

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, i) => (
            <UpcomingEventCard key={`${event.title}-${i}`} {...event} />
          ))
        ) : (
          <p className="text-sm text-gray-500 italic text-center">
            No events on this day.
          </p>
        )}
      </div>

      {/* Calendar Section */}
      <div className="lg:sticky top-24 h-fit self-start w-full lg:w-[320px] shadow-md bg-white rounded-xl p-4 border border-gray-100">
        <Calendar
          onClickDay={(date) => {
            if (
              selectedDate &&
              format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
            ) {
              setSelectedDate(null);
            } else {
              setSelectedDate(date);
            }
          }}
          tileContent={tileContent}
          className="!border-none text-sm"
          value={selectedDate ?? new Date()}
        />
      </div>
    </div>
  );
}