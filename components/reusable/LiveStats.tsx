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
    <section id="live-stats" className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {(stats as Stat[]).map((stat, index) => {
          const Icon = LucideIcons[stat.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-200"
            >
              {Icon && <Icon className="w-8 h-8 mx-auto text-accent" />}
              <div className="text-4xl font-bold text-primary mt-2">
                {visible ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.label === "Years Running" && "+"}
              </div>
              <div className="text-sm text-neutral-muted mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
