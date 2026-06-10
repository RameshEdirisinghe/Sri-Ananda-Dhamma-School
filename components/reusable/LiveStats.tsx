"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import stats from "@/content/live-stats.json";
import * as LucideIcons from "lucide-react";

interface Stat {
  label: string;
  value: number;
  icon: keyof typeof LucideIcons;
}

export default function LiveStats() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const statsSection = document.getElementById("live-stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="live-stats" className="w-full bg-[#FAF9F6] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 text-center">
          {(stats as Stat[]).map((stat, index) => {
            const Icon = LucideIcons[stat.icon] as React.FC<React.SVGProps<SVGSVGElement>>;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-neutral-100 hover:shadow-[0_20px_40px_rgba(139,90,43,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#8B5A2B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {Icon && (
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-primary/10">
                    <Icon className="w-8 h-8" />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-neutral tracking-tight">
                  {visible ? <CountUp end={stat.value} duration={2.5} separator="," /> : 0}
                  {stat.label === "Years Running" && <span className="text-primary ml-1">+</span>}
                </div>
                <div className="text-sm md:text-base text-neutral-soft mt-2 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
