import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserCircle } from 'lucide-react';

interface Teacher {
  name: string;
  dhammaRole: string;
  professionalRole?: string;
  education?: string;
  image: string;
}

const TeacherCard: FC<Teacher> = ({ name, dhammaRole, professionalRole, education, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-borderGray overflow-hidden"
    >
      <div className="flex flex-col items-center text-center p-6 bg-muted">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="rounded-full border-4 border-white shadow object-cover"
          />
        ) : (
          <UserCircle className="w-24 h-24 text-muted" />
        )}

        <h3 className="mt-4 text-lg font-semibold text-textPrimary">{name}</h3>

        <p className="text-sm text-primary font-medium">{dhammaRole}</p>

        {professionalRole && (
          <p className="text-sm text-gray-600 mt-1">{professionalRole}</p>
        )}

        {education && (
          <p className="text-xs text-gray-500 italic mt-1 text-center">{education}</p>
        )}
      </div>
    </motion.div>
  );
};

export default TeacherCard;
