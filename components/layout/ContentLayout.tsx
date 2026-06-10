'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  center?: boolean; // Kept for compatibility but design relies on strong left-aligned structure
}

export default function ContentLayout({
  title,
  subtitle,
  icon,
  children,
}: ContentLayoutProps) {
  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* ---------- HEADER ZONE: Strong & Modern ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-300/40 bg-white/30">
        
        {/* 1. Massive Background Watermark Text (Industrial/Modern) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-[0.035]">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[8rem] sm:text-[12rem] md:text-[18rem] font-black whitespace-nowrap uppercase tracking-tighter"
          >
            {title}
          </motion.h1>
        </div>

        {/* 2. Abstract Geometric Accent (Moving Laser Line) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent">
          <motion.div 
            initial={{ left: "-35%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/3 h-full bg-primary shadow-[0_0_12px_rgba(185,128,65,0.8)]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            
            {/* Title Block with Strong Vertical Bar */}
            <div className="flex items-stretch gap-4 md:gap-5 lg:w-[55%]">
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-2 md:w-3 bg-neutral origin-top"
              />
              <div className="py-1">
                {icon && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary/80 mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl"
                  >
                    <div className="scale-110">{icon}</div>
                  </motion.div>
                )}
                
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral tracking-tighter uppercase leading-[0.9]"
                >
                  {title}
                </motion.h2>

                {/* Strong subtle accent dots below title */}
                <div className="flex gap-1.5 mt-5">
                  {[0,1,2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="w-1.5 h-1.5 bg-primary/40 rounded-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitle Block */}
            {subtitle && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:w-[40%]"
              >
                <div className="p-5 md:p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
                  <p className="text-base md:text-lg text-neutral-soft font-medium leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* ---------- CONTENT ZONE ---------- */}
      <section className="relative z-10 py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </section>
    </div>
  );
}
