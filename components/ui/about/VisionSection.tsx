'use client';
import { useSectionContent } from '@/hooks/useSectionContent';

export default function VisionSection() {
  const { title, description, values } = useSectionContent<{
    title: string;
    description: string;
    values: string[];
  }>('vision');

  return (
    <section className="py-24 px-4 bg-[#FAF9F6] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6 tracking-tight">{title}</h2>
      <p className="max-w-3xl mx-auto text-lg text-neutral-soft leading-relaxed mb-12">{description}</p>
      <div className="flex flex-wrap justify-center gap-5">
        {values.map((val, i) => (
          <div
            key={i}
            className="px-8 py-4 bg-white rounded-full shadow-sm hover:shadow-md border border-neutral-100/80 text-neutral font-bold tracking-wide hover:-translate-y-1 transition-all duration-300"
          >
            {val}
          </div>
        ))}
      </div>
    </section>
  );
}
