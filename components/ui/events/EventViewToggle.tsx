"use client";
import { FC } from "react";

type Props = {
  view: "list" | "calendar";
  onChange: (view: "list" | "calendar") => void;
};

const EventViewToggle: FC<Props> = ({ view, onChange }) => {
  return (
    <div className="flex gap-2 items-center justify-end mb-4">
      <button
        onClick={() => onChange("list")}
        className={`px-4 py-2 rounded-md text-sm ${
          view === "list"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        List View
      </button>
      <button
        onClick={() => onChange("calendar")}
        className={`px-4 py-2 rounded-md text-sm ${
          view === "calendar"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Calendar View
      </button>
    </div>
  );
};

export default EventViewToggle;
