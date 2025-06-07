"use client";
import { FC, useState } from "react";
import { Calendar, Sparkles } from "lucide-react";
import StoryPopup from "./StoryPopup";

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
      <div
        onClick={() => setOpen(true)}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer break-inside-avoid relative border border-borderGray"
      >
        {/* Media */}
        <div className="aspect-video w-full bg-muted rounded-t-2xl overflow-hidden relative">
          {isVideo ? (
            <video
              src={media}
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        {/* Text */}
        <div className="p-4 space-y-2">
          <p className="text-xs text-textSecondary tracking-wide">
            <Sparkles size={12} className="inline mr-1 text-accent" />
            {type} · <Calendar size={12} className="inline ml-1" /> {year}
          </p>
          <h3 className="font-serif text-lg font-bold text-textPrimary group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-sm text-textSecondary line-clamp-3 italic">
            {story.slice(0, 100)}...
          </p>
          <p className="text-sm text-accent font-medium group-hover:underline">
            → Read Full Story
          </p>
        </div>
      </div>

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
