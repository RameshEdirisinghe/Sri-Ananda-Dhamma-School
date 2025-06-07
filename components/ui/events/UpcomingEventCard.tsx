"use client";
import { FC, useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import clsx from "clsx";

type Props = {
  title: string;
  date: string; // ISO
  type: "Meditation" | "Trip" | "Competition" | "Other";
  description: string;
  location?: string;
  registerUrl?: string;
  image?: string;
};

const typeColors: Record<Props["type"], string> = {
  Meditation: "bg-orange-100 text-orange-700",
  Trip: "bg-yellow-100 text-yellow-700",
  Competition: "bg-blue-100 text-blue-700",
  Other: "bg-gray-200 text-gray-800",
};

const UpcomingEventCard: FC<Props> = ({
  title,
  date,
  type,
  description,
  location,
  registerUrl,
  image,
}) => {
  const [countdown, setCountdown] = useState("");
  const [status, setStatus] = useState<"upcoming" | "past" | "coming_soon">("upcoming");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(date).getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setCountdown("Event Ended");
        setStatus("past");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown(`${days}d ${hrs}h ${mins}m`);
      setStatus(days > 7 ? "coming_soon" : "upcoming");
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div
      className={clsx(
        "group bg-white rounded-xl overflow-hidden shadow-sm transition-all cursor-pointer max-w-md w-full border",
        status === "past" && "opacity-60 grayscale"
      )}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      <div className="p-4 space-y-3">
        {/* Type Tag */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={clsx(
              "text-xs px-2 py-1 rounded-full font-medium",
              typeColors[type]
            )}
          >
            {type}
          </span>

          {/* Status Badge */}
          {status === "coming_soon" && (
            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full flex items-center gap-1">
              <Info size={12} /> Coming Soon
            </span>
          )}
          {status === "past" && (
            <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded-full">
              Event Ended
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold font-serif text-textPrimary group-hover:text-primary transition">
          {title}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Calendar size={16} /> {new Date(date).toLocaleDateString()}
        </p>

        {location && (
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <MapPin size={16} /> {location}
          </p>
        )}

        {status !== "past" && (
          <p className="text-sm text-orange-600 font-medium flex items-center gap-2">
            <Clock size={16} /> {countdown}
          </p>
        )}

        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {registerUrl && status !== "past" && (
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-white bg-primary hover:bg-orange-600 transition px-4 py-2 rounded-md"
          >
            Register
          </a>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventCard;
