'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  center?: boolean;
}

export default function ContentLayout({
  title,
  subtitle,
  icon,
  children,
  center = true,
}: ContentLayoutProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] to-[#F3E8DC] py-14 sm:py-16">
      {/* Ambient glow ring */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={clsx(
            'space-y-4',
            center ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-3xl'
          )}
        >
          {icon && (
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-accent"
              >
                {icon}
              </motion.div>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-textPrimary tracking-tight leading-snug">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          <div className="flex justify-center mt-2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="origin-left h-1 w-16 bg-accent/60 rounded-full"
            />
          </div>
        </motion.div>

        {/* Content area */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
