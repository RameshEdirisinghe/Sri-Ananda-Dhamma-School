"use client";
import { FC, useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  year: string;
  type: string;
  story: string;
  media: string;
  isVideo?: boolean;
}

const StoryPopup: FC<Props> = ({
  open,
  onClose,
  title,
  year,
  type,
  story,
  media,
  isVideo,
}) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-[9999] w-[95%] max-w-2xl bg-white rounded-2xl shadow-xl p-6 animate-popup-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-textSecondary hover:text-red-500"
        >
          <X size={20} />
        </button>

        <div className="text-xs text-accent uppercase mb-2">
          🏷️ {type} · 📅 {year}
        </div>

        <h2 className="text-2xl font-serif font-bold text-textPrimary mb-4">
          {title}
        </h2>

        {isVideo ? (
          <video src={media} controls className="w-full rounded-lg mb-4" />
        ) : (
          <img src={media} alt={title} className="w-full rounded-lg mb-4" />
        )}

        <blockquote className="text-[15px] text-textSecondary leading-relaxed whitespace-pre-line italic">
          “{story}”
        </blockquote>
      </div>

      <style jsx>{`
        @keyframes popup-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popup-in {
          animation: popup-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StoryPopup;
