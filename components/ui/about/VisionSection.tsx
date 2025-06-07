'use client';
import { useSectionContent } from '@/hooks/useSectionContent';

export default function VisionSection() {
  const { title, description, values } = useSectionContent<{
    title: string;
    description: string;
    values: string[];
  }>('vision');

  return (
    <section className="py-24 px-4 bg-orange-50 text-center">
      <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>
      <p className="max-w-3xl mx-auto text-neutral mb-10">{description}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((val, i) => (
          <div
            key={i}
            className="px-6 py-3 bg-white rounded-full shadow text-primary font-semibold hover:scale-105 transition"
          >
            {val}
          </div>
        ))}
      </div>
    </section>
  );
}
