import { BookOpenText, Users } from "lucide-react";
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
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
          <BookOpenText className="w-5 h-5" />
          <h2 className="text-lg sm:text-xl">Overview</h2>
        </div>
        <p className="text-textSecondary max-w-prose">{faculty.overview}</p>
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
