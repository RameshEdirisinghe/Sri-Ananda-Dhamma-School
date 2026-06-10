"use client";
import { FC, useEffect } from "react";
import { X, Calendar, Tag, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white md:text-neutral md:bg-neutral-100/50 md:hover:bg-neutral-100 flex items-center justify-center transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Visual Column */}
            <div className="md:w-1/2 relative bg-neutral-900 flex items-center justify-center overflow-hidden h-[300px] md:h-auto">
              {isVideo ? (
                <video
                  src={media}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={media}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Overlay Gradient for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 text-white md:hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-primary px-2 py-1 rounded-full mb-2 inline-block">
                  {type}
                </span>
                <h2 className="text-xl font-serif font-bold leading-tight">{title}</h2>
              </div>
            </div>

            {/* content Column */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-[#FDFCFB] relative">
              <div className="hidden md:block space-y-6">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  <div className="flex items-center gap-1.5">
                    <Tag size={12} />
                    {type}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-primary/20" />
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {year}
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral leading-tight">
                  {title}
                </h2>
                <div className="h-1 w-12 bg-primary/20 rounded-full" />
              </div>

              <div className="mt-8 relative">
                <Quote size={40} className="absolute -top-6 -left-4 text-primary/5 -z-0" />
                <div className="relative z-10">
                  <p className="text-neutral-soft text-lg leading-relaxed italic font-medium whitespace-pre-line first-letter:text-4xl first-letter:font-serif first-letter:text-primary first-letter:mr-1">
                    {story}
                  </p>
                </div>
              </div>

              {/* Decorative base accent */}
              <div className="mt-12 pt-8 border-t border-neutral-100 flex items-center justify-between opacity-50">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-muted">
                  School Archives
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-primary/30" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StoryPopup;
