import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FacultyAchievements({ items }: { items: string[] }) {
  if (!items?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2 text-primary font-semibold">
        <Trophy className="w-5 h-5" />
        <h2 className="text-lg sm:text-xl">Achievements</h2>
      </div>

      <ul className="space-y-2 pl-4 list-disc text-textSecondary bg-accent/5 p-4 rounded-lg">
        {items.map((item, i) => (
          <li key={i} className="text-sm">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
