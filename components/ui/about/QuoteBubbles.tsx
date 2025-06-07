'use client';
import { useSectionContent } from '@/hooks/useSectionContent';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

export default function QuoteBubbles() {
  const { quotes } = useSectionContent<{ quotes: string[] }>('quotes');

  return (
    <div className="relative py-12 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" />
      <div className="flex flex-col gap-4 items-center">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="max-w-lg bg-orange-100 text-orange-800 px-4 py-3 rounded-xl shadow text-center italic text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <MessageSquareQuote className="w-4 h-4 text-orange-500" />
            <span>{quote}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
