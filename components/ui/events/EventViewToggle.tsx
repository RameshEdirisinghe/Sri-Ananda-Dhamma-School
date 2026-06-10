"use client";
import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  view: "list" | "calendar";
  onChange: (view: "list" | "calendar") => void;
};

const EventViewToggle: FC<Props> = ({ view, onChange }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center p-1.5 bg-neutral-100/80 rounded-[2rem] border border-neutral-200/50 shadow-inner w-fit">
        <button
          onClick={() => onChange("list")}
          className={`relative px-8 py-3 text-sm font-bold rounded-[1.5rem] transition-all duration-300 ${
            view === "list"
              ? "text-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              : "text-neutral-soft hover:text-primary hover:bg-white/50"
          }`}
        >
          {view === "list" && (
            <motion.div
              layoutId="event-view-tab"
              className="absolute inset-0 bg-white rounded-[1.5rem] z-0"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">List View</span>
        </button>
        <button
          onClick={() => onChange("calendar")}
          className={`relative px-8 py-3 text-sm font-bold rounded-[1.5rem] transition-all duration-300 ${
            view === "calendar"
              ? "text-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              : "text-neutral-soft hover:text-primary hover:bg-white/50"
          }`}
        >
          {view === "calendar" && (
            <motion.div
              layoutId="event-view-tab"
              className="absolute inset-0 bg-white rounded-[1.5rem] z-0"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">Calendar View</span>
        </button>
      </div>
    </div>
  );
};

export default EventViewToggle;
