"use client";
import { useSectionContent } from "@/hooks/useSectionContent";
import Image from "next/image";

export default function OriginStory() {
  const { title, body, quote, image, alt } = useSectionContent<{
    title: string;
    body: string;
    quote: string;
    image: string;
    alt: string;
  }>("origin");

  return (
    <section className="relative bg-primary-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fadeIn">
        {/* Left: Image */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-neutral-100">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 shadow-inner rounded-[2rem] border border-black/5 pointer-events-none" />
        </div>

        {/* Right: Text Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral mb-8 tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-neutral-soft text-base md:text-lg leading-relaxed mb-10">
            {body}
          </p>

          {/* Highlighted Quote */}
          <blockquote className="relative bg-[#FAF9F6] border border-neutral-100/60 px-8 py-8 rounded-[1.5rem] shadow-sm italic text-neutral text-base md:text-lg leading-relaxed">
            <svg
              className="absolute top-6 left-6 w-8 h-8 text-primary opacity-20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.5 11C10.3284 11 11 10.3284 11 9.5V5.5C11 4.67157 10.3284 4 9.5 4H6.5C5.67157 4 5 4.67157 5 5.5V9.5C5 10.3284 5.67157 11 6.5 11H7V13H5V20H10V13H8V11H9.5ZM18.5 11C19.3284 11 20 10.3284 20 9.5V5.5C20 4.67157 19.3284 4 18.5 4H15.5C14.6716 4 14 4.67157 14 5.5V9.5C14 10.3284 14.6716 11 15.5 11H16V13H14V20H19V13H17V11H18.5Z" />
            </svg>
            <p className="ml-10 relative z-10">&quot;{quote}&quot;</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
