"use client";
import { FC, useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "group bg-white rounded-[2rem] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-neutral-100/60 hover:-translate-y-1.5 flex flex-col md:flex-row max-w-4xl w-full",
        status === "past" && "opacity-70 grayscale"
      )}
    >
      {/* Date Box (Mobile Hero / Desktop Side) */}
      <div className="w-full md:w-32 bg-primary/5 flex flex-col items-center justify-center py-6 px-4 border-b md:border-b-0 md:border-r border-neutral-100">
        <span className="text-primary text-3xl font-bold leading-none mb-1">
          {format(new Date(date), "dd")}
        </span>
        <span className="text-neutral-soft text-sm font-bold uppercase tracking-wider">
          {format(new Date(date), "MMM")}
        </span>
      </div>

      <div className="flex-1 flex flex-col pt-8 pb-7 px-8">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            <span
              className={clsx(
                "text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest",
                typeColors[type]
              )}
            >
              {type}
            </span>

            {status === "coming_soon" && (
              <span className="text-[10px] px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-bold uppercase tracking-widest flex items-center gap-1">
                <Info size={10} /> Coming Soon
              </span>
            )}
            {status === "past" && (
              <span className="text-[10px] px-2.5 py-1 bg-neutral-200 text-neutral-600 rounded-full font-bold uppercase tracking-widest">
                Past Event
              </span>
            )}
          </div>

          {status !== "past" && (
            <div className="flex items-center gap-1.5 text-primary">
              <Clock size={14} className="animate-pulse" />
              <span className="text-xs font-bold tracking-tight">{countdown}</span>
            </div>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-neutral mb-4 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
          {location && (
            <div className="flex items-center gap-2 text-neutral-soft text-sm font-medium">
              <MapPin size={16} className="text-primary/40" />
              <span>{location}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-neutral-soft text-sm font-medium">
            <Calendar size={16} className="text-primary/40" />
            <span>{format(new Date(date), "EEEE, p")}</span>
          </div>
        </div>

        <p className="text-neutral-soft text-base leading-relaxed mb-8 line-clamp-3 md:line-clamp-none">
          {description}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-6">
          {registerUrl && status !== "past" ? (
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:shadow-lg hover:brightness-105 active:scale-95 transition-all text-sm tracking-wide"
            >
              Register Now
            </a>
          ) : (
             <div className="text-neutral-soft/40 text-sm font-medium italic">
                Registration details following soon
             </div>
          )}
          
          <div className="w-10 h-px bg-neutral-100 hidden md:block" />
        </div>
      </div>

      {image && (
        <div className="w-full md:w-64 lg:w-72 shrink-0 h-48 md:h-auto relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        </div>
      )}
    </motion.div>
  );
};

export default UpcomingEventCard;
