"use client";

import { Gallery, GalleryItem } from "@/components/ui/gallery";
import { useEffect, useRef, useState } from "react";

const galleryProjects: GalleryItem[] = [
  {
    image: "/images/event-3.jpg",
    title: "Annual Prize Giving",
    subtitle: "Ceremony • 2024",
    cta: "View Album",
    link: "/gallery"
  },
  {
    image: "/images/moments.jpg",
    title: "Dhamma School Day",
    subtitle: "Celebration • Community",
    cta: "Explore Moments",
    link: "/gallery"
  },
  {
    image: "/images/thidisa.jpg",
    title: "Thidisa Exhibition",
    subtitle: "Art & Culture • Exhibition",
    cta: "View Event",
    link: "/gallery"
  },
  {
    image: "/images/album-2.jpg",
    title: "Poson Poya Program",
    subtitle: "Religious • Gathering",
    cta: "View Memories",
    link: "/gallery"
  }
];

export default function HomeGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-semibold text-[#8B5A2B] mb-4">
              <span className="w-8 h-[2px] bg-[#8B5A2B] rounded-full" />
              Captured Moments
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              A Legacy of <br className="hidden md:block" />
              <span className="text-[#8B5A2B]">Spiritual Growth.</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
             <p className="text-neutral-500 max-w-md text-base leading-relaxed">
               Explore the vibrant journey of our students through our visual gallery, showcasing events, achievements, and everyday life at the Dhamma School.
             </p>
          </div>
        </div>

        {/* Gallery */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <Gallery items={galleryProjects} autoCycleMs={6000} />
        </div>
      </div>
    </section>
  );
}
