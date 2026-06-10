"use client";
import { Lightbulb, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartSuggestions({ related }: { related: string[] }) {
  if (!related.length) return null;

  return (
    <div className="mt-16 bg-white/40 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 text-accent rounded-xl">
          <Lightbulb size={20} />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-neutral">Extended Learning</h2>
          <p className="text-xs text-neutral-soft font-medium uppercase tracking-widest">Recommended for your curriculum</p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
        {related.map((title, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="min-w-[280px] bg-white p-6 rounded-2xl shadow-soft border border-neutral-100 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                <BookOpen size={12} />
                <span>Article</span>
              </div>
              <h3 className="font-bold text-neutral leading-snug group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-neutral-muted">
              <span>View Resource</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
