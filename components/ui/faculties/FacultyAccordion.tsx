import { useFacultyData } from '@/hooks/useFacultyData';
import TeacherCard from './TeacherCard';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FacultyAccordion() {
  const facultyData = useFacultyData();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {facultyData.map((section, index) => (
        <div key={section.level} className="border border-borderGray rounded-md overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-4 py-3 bg-muted text-primary font-medium"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {section.level}
            {openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {openIndex === index && (
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
              {section.teachers.map((t) => (
                <TeacherCard key={t.name} {...t} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
