'use client';
import { useSectionContent } from '@/hooks/useSectionContent';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

export default function QuoteBubbles() {
  const { quotes } = useSectionContent<{ quotes: string[] }>('quotes');

  return (
    <div className="relative py-12 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" />
      <div className="flex flex-col gap-8 items-center w-full px-4">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="max-w-2xl w-full bg-white rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-neutral-100 p-8 md:p-10 text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <MessageSquareQuote className="w-10 h-10 text-primary/30 mb-2" />
            <span className="text-lg md:text-xl italic text-neutral-soft leading-relaxed">&quot;{quote}&quot;</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
