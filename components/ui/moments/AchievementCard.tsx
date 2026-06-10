"use client";
import { FC, useState } from "react";
import { Calendar, Sparkles, ArrowRight } from "lucide-react";
import StoryPopup from "./StoryPopup";
import { motion } from "framer-motion";

type Props = {
  title: string;
  year: string;
  type: string;
  story: string;
  media: string;
  isVideo?: boolean;
};

const AchievementCard: FC<Props> = ({ title, year, type, story, media, isVideo }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        onClick={() => setOpen(true)}
        className="group relative bg-white/70 backdrop-blur-md rounded-[2rem] overflow-hidden border border-neutral-200/50 hover:border-primary/30 shadow-soft hover:shadow-xl transition-all duration-500 cursor-pointer break-inside-avoid mb-8"
      >
        {/* Media Container */}
        <div className="aspect-[4/3] w-full bg-neutral-100 overflow-hidden relative">
          {isVideo ? (
            <video
              src={media}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              playsInline
              onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
              onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
            />
          ) : (
            <img
              src={media}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}

          {/* Type Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-primary/10">
              {type}
            </span>
          </div>

          {/* Year Overlay */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral/80 backdrop-blur-sm text-white text-[11px] font-medium rounded-lg">
              <Calendar size={12} className="opacity-70" />
              {year}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-neutral leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="h-0.5 w-8 bg-primary/20 group-hover:w-16 transition-all duration-500 rounded-full" />
          </div>

          <p className="text-neutral-soft text-sm leading-relaxed line-clamp-3 italic opacity-80">
            &quot;{story.slice(0, 120)}...&quot;
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80 group-hover:text-primary flex items-center gap-2 transition-all">
              Discover Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <Sparkles size={16} className="text-primary/20 group-hover:text-primary/40 transition-colors" />
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
      </motion.div>

      <StoryPopup
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        year={year}
        type={type}
        story={story}
        media={media}
        isVideo={isVideo}
      />
    </>
  );
};

export default AchievementCard;
