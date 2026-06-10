import { Users } from "lucide-react";
import { motion } from "framer-motion";
import TeacherCard from "./TeacherCard";
import FacultyAchievements from "./FacultyAchievements";
import FacultyMedia from "./FacultyMedia";

interface Teacher {
  name: string;
  image?: string;
  dhammaRole?: string;
  education?: string;
  job?: string;
  testimonial?: string;
}

interface Faculty {
  level: string;
  overview?: string;
  achievements?: string[];
  videos?: string[];
  photos?: string[];
  teachers: Teacher[];
}

export default function FacultySection({ faculty }: { faculty: Faculty }) {
  return (
    <div className="space-y-12">
      {/* Center-Aligned Blended Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16"
      >
        {/* Minimalist Top Accent */}
        <div className="flex gap-1.5 mb-5 opacity-80">
          <span className="w-1.5 h-1.5 rounded-sm bg-primary/30" />
          <span className="w-1.5 h-1.5 rounded-sm bg-primary/60" />
          <span className="w-1.5 h-1.5 rounded-sm bg-primary" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-neutral mb-4 tracking-tighter uppercase relative group">
          {faculty.level}
        </h2>
        
        {faculty.overview && (
          <p className="text-base md:text-lg text-neutral-soft leading-relaxed max-w-2xl px-4">
            {faculty.overview}
          </p>
        )}
      </motion.div>

      {/* Teachers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Users className="w-5 h-5" />
          <h2 className="text-lg sm:text-xl">Teachers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.teachers.map((t) => (
            <TeacherCard key={t.name} {...t} />
          ))}
        </div>
      </motion.div>

      <FacultyAchievements items={faculty.achievements ?? []} />
      <FacultyMedia
        videos={faculty.videos ?? []}
        photos={faculty.photos ?? []}
      />
    </div>
  );
}
