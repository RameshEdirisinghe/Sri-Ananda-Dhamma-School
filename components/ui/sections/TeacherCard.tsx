import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserCircle, Briefcase, GraduationCap } from "lucide-react";

interface Teacher {
  name: string;
  dhammaRole?: string;
  job?: string; // note: it's 'job' in teachers.json, not 'professionalRole'
  education?: string;
  image?: string;
}

const TeacherCard: FC<Teacher> = ({
  name,
  dhammaRole = "Dhamma Teacher",
  job,
  education,
  image,
}) => {
  const displayJob = job && job.trim() !== "-" && job.trim() !== "" ? job : null;
  const displayEducation = education && education.trim() !== "-" && education.trim() !== "" ? education : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(139,90,43,0.08)] transition-all duration-500 border border-neutral-100 overflow-hidden hover:-translate-y-2 flex flex-col items-center"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#8B5A2B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative w-32 h-32 mb-6 rounded-full shadow-md bg-[#FAF9F6] flex items-center justify-center border-4 border-white z-10 group-hover:border-[#8B5A2B]/20 transition-colors duration-500">
        {image && image.trim() !== "" ? (
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <UserCircle className="w-16 h-16 text-neutral-300" />
        )}
      </div>

      <div className="text-center z-10 w-full flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-neutral-900 mb-1.5 group-hover:text-[#8B5A2B] transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B5A2B] mb-4 bg-[#8B5A2B]/5 py-1 px-3 rounded-full inline-block mx-auto">
          {dhammaRole}
        </p>

        <div className="flex-1 flex flex-col justify-center space-y-3 mt-2 w-full">
          {displayJob && (
            <div className="flex items-start justify-center gap-2 text-neutral-500 text-xs">
              <Briefcase className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
              <p className="line-clamp-2 text-center">{displayJob}</p>
            </div>
          )}

          {displayEducation && (
            <div className="flex items-start justify-center gap-2 text-neutral-500 text-xs">
              <GraduationCap className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
              <p className="line-clamp-3 text-center italic">{displayEducation}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherCard;
