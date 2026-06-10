'use client';
import Image from 'next/image';
import { useSectionContent } from '@/hooks/useSectionContent';

interface Teacher {
  name: string;
  dhammaRole: string;
  professionalRole?: string;
  education?: string;
  image: string;
}

export default function TeachersSection() {
  const { teachers } = useSectionContent<{ teachers: Teacher[] }>('teachers');

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral text-center mb-16 tracking-tight">
        Faces Behind the Wisdom
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {teachers.map((t, i) => (
          <div
            key={i}
            className="group bg-white rounded-[1.5rem] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-neutral-100/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center"
          >
            {/* Framed image */}
            <div className="relative w-36 h-36 mb-6 rounded-full bg-white shadow-sm border border-neutral-100">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="rounded-full object-cover border-4 border-white group-hover:scale-[1.03] transition-transform duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-neutral text-center mb-2 group-hover:text-primary transition-colors">
              {t.name}
            </h3>

            {/* Dhamma Role (highlighted) */}
            <p className="text-sm text-primary font-bold text-center mb-3 uppercase tracking-wider">
              {t.dhammaRole}
            </p>

            {/* Job title (optional) */}
            {t.professionalRole && (
              <p className="text-sm text-neutral-soft font-medium text-center mb-2">
                {t.professionalRole}
              </p>
            )}

            {/* Education (italic small) */}
            {t.education && (
              <p className="text-xs text-neutral-400 italic text-center mt-2 leading-relaxed">
                {t.education}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
