import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FacultyAchievements({ items }: { items: string[] }) {
  if (!items?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pt-6"
    >
      <div className="flex items-center gap-3 text-primary font-bold">
        <Trophy className="w-6 h-6" />
        <h2 className="text-2xl sm:text-3xl tracking-tight text-neutral">Key Achievements</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-start gap-4 p-5 rounded-[1.25rem] bg-white border border-neutral-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mt-0.5 bg-primary/10 p-2 rounded-xl text-primary shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-neutral-soft leading-relaxed flex-1">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
