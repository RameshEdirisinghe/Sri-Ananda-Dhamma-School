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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Faces Behind the Wisdom
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teachers.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center p-6 border border-borderGray"
          >
            {/* Framed image */}
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-100 to-white blur-sm scale-110" />
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="rounded-full object-cover border-4 border-white relative z-10"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-textPrimary text-center mb-1">
              {t.name}
            </h3>

            {/* Dhamma Role (highlighted) */}
            <p className="text-sm text-primary font-medium text-center mb-1">
              {t.dhammaRole}
            </p>

            {/* Job title (optional) */}
            {t.professionalRole && (
              <p className="text-sm text-gray-600 text-center mb-1">
                {t.professionalRole}
              </p>
            )}

            {/* Education (italic small) */}
            {t.education && (
              <p className="text-xs text-gray-500 italic text-center">
                {t.education}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
