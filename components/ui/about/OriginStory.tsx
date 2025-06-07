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
    <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <Image src={image} alt={alt} width={500} height={400} className="rounded-xl shadow" />
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-neutral text-base mb-4">{body}</p>
        <blockquote className="text-primary bg-orange-50 p-4 rounded-xl italic border-l-4 border-orange-400 shadow">
          {quote}
        </blockquote>
      </div>
    </section>
  );
}
