"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface GalleryItem {
  image: string;
  title: string;
  subtitle?: string;
  cta?: string;
  link?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
  autoCycleMs?: number;
}

const smoothTransition = {
  type: "spring" as const,
  stiffness: 180,
  damping: 28,
  mass: 0.8,
};

const fadeTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const Gallery = ({ items, className, autoCycleMs = 5000 }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setCycleKey((k) => k + 1);
  }, [items.length]);

  useEffect(() => {
    if (isPaused || items.length <= 1 || autoCycleMs <= 0) return;
    const timer = setInterval(advance, autoCycleMs);
    return () => clearInterval(timer);
  }, [isPaused, advance, items.length, autoCycleMs]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setCycleKey((k) => k + 1);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: horizontal expand */}
      <div
        className="hidden md:flex gap-3 lg:gap-4"
        style={{ height: "min(34rem, 58vh)" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden cursor-pointer bg-black rounded-[2rem]"
              initial={false}
              animate={{ flex: isActive ? 4 : 1 }}
              transition={smoothTransition}
              onMouseEnter={() => handleSelect(index)}
              onClick={() => handleSelect(index)}
            >
              {/* Image with Unified Filter */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ 
                  scale: isActive ? 1.03 : 1.12,
                  filter: isActive ? "brightness(0.85) contrast(1.05) saturate(1.0)" : "brightness(0.5) contrast(0.9) saturate(0.8) blur(0px)"
                }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              {/* Texture & Gradient Overlays */}
              <div className={cn(
                "absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out",
                "bg-black/5", 
                isActive
                  ? "bg-gradient-to-t from-black/90 via-black/40 to-black/10"
                  : "bg-gradient-to-t from-black/95 via-black/70 to-black/30"
              )} />

              {/* Progress bar at top */}
              <AnimatePresence mode="wait">
                {isActive && autoCycleMs > 0 && items.length > 1 && (
                  <motion.div
                    key={`progress-${cycleKey}`}
                    className="absolute top-0 left-0 right-0 h-[3px] bg-white/40 origin-left z-20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isPaused ? undefined : 1 }}
                    exit={{ scaleX: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: autoCycleMs / 1000, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </AnimatePresence>

              {/* Index number */}
              <div className="absolute top-6 left-6 z-20">
                <span className={cn(
                  "font-mono text-sm transition-all duration-300 font-medium",
                  isActive ? "text-white/90" : "text-white/40"
                )}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 z-20">
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={fadeTransition}
                    >
                      <div className="w-10 h-px bg-white/50 mb-5" />
                      {item.subtitle && (
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 mb-3">
                          {item.subtitle}
                        </p>
                      )}
                      <h3 className="font-semibold text-3xl lg:text-4xl xl:text-5xl text-white mb-6 leading-[1.1]">
                        {item.title}
                      </h3>
                      {item.link && item.cta && (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-3 text-[12px] font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors group/link"
                        >
                          <span className="border-b border-white/30 pb-1 group-hover/link:border-white/80 transition-colors duration-300">
                            {item.cta}
                          </span>
                          <ArrowRight size={16} className="transform group-hover/link:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      )}
                    </motion.div>
                  ) : (
                     <motion.div
                       key="collapsed"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.3 }}
                       className="flex flex-col items-center justify-end pb-10 h-full text-center"
                     >
                       <h3 className="font-medium text-sm lg:text-base text-white/60 whitespace-nowrap tracking-wider uppercase"
                         style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                       >
                         {item.title}
                       </h3>
                     </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: navigation dots */}
      {items.length > 1 && (
        <div className="hidden md:flex items-center justify-center gap-8 mt-10">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className="flex items-center gap-3 group/dot p-2"
            >
              <div className={cn(
                "h-[2px] transition-all duration-300 rounded-full",
                activeIndex === index
                  ? "w-10 bg-[#8B5A2B]"
                  : "w-5 bg-[#8B5A2B]/20 group-hover/dot:bg-[#8B5A2B]/40 group-hover/dot:w-8"
              )} />
              {item.subtitle && (
                <span className={cn(
                  "text-[11px] font-bold tracking-widest uppercase transition-colors duration-300",
                  activeIndex === index
                    ? "text-[#8B5A2B]"
                    : "text-[#8B5A2B]/50 group-hover/dot:text-[#8B5A2B]/80"
                )}>
                  {item.subtitle}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-6 md:hidden">
        {items.map((item, index) => {
          const content = (
            <>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.7] contrast-[1.0] saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {item.subtitle && (
                  <p className="text-[11px] font-bold tracking-widest uppercase text-white/70 mb-2">
                    {item.subtitle}
                  </p>
                )}
                <h3 className="font-semibold text-3xl text-white mb-4">{item.title}</h3>
                {item.cta && (
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-wider uppercase text-white/90">
                    {item.cta}
                    <ArrowRight size={16} />
                  </span>
                )}
              </div>
            </>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black overflow-hidden rounded-[2rem] border border-black/5 shadow-xl"
            >
              {item.link ? (
                <Link href={item.link} className="block relative aspect-[4/5] overflow-hidden group">
                  {content}
                </Link>
              ) : (
                <div className="block relative aspect-[4/5] overflow-hidden group">
                  {content}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
