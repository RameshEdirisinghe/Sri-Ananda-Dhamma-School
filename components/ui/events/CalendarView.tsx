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
      <div className="lg:sticky top-24 h-fit self-start w-full lg:w-[350px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] bg-white rounded-[1.5rem] p-6 border border-neutral-100/60">
        <style jsx global>{`
          .react-calendar {
            width: 100% !important;
            border: none !important;
            font-family: inherit !important;
          }
          .react-calendar__navigation {
            margin-bottom: 1.5rem !important;
          }
          .react-calendar__navigation button {
            color: #333 !important;
            font-weight: 700 !important;
            font-size: 1rem !important;
          }
          .react-calendar__month-view__weekdays {
            text-transform: uppercase !important;
            font-weight: 700 !important;
            font-size: 0.75rem !important;
            color: #666 !important;
            margin-bottom: 1rem !important;
          }
          .react-calendar__tile {
            padding: 0.75rem 0.5rem !important;
            font-size: 0.875rem !important;
            border-radius: 0.75rem !important;
            transition: all 0.2s ease !important;
          }
          .react-calendar__tile:hover {
            background-color: rgba(245, 158, 11, 0.05) !important;
          }
          .react-calendar__tile--active {
            background: #f97316 !important;
            color: white !important;
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3) !important;
          }
          .react-calendar__tile--now {
            background: rgba(249, 115, 22, 0.1) !important;
            color: #f97316 !important;
            font-weight: 700 !important;
          }
        `}</style>
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
          className="calendar-custom"
          value={selectedDate ?? new Date()}
        />
      </div>
    </div>
  );
}