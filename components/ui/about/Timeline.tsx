"use client";
import { motion } from "framer-motion";
import { useSectionContent } from "@/hooks/useSectionContent";

interface Milestone {
  year: number;
  title: string;
  desc: string;
  image: string;
}

export default function Timeline() {
  const { leftMilestones, rightMilestones } = useSectionContent<{
    leftMilestones: Milestone[];
    rightMilestones: Milestone[];
  }>("timeline");

  const allMilestones = [...leftMilestones, ...rightMilestones];

  return (
    <section className="px-4 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-16">
        Milestones of Growth
      </h2>

      {/* 👉 Large screens: two column parallel timeline */}
      <div className="hidden lg:grid grid-cols-2 gap-12 relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-300 transform -translate-x-1/2" />

        {/* Left Column */}
        <div className="pr-12 space-y-16">
          {leftMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute right-[-1.45rem] top-2 w-3 h-3 bg-primary rounded-full shadow" />
              <h4 className="text-lg font-bold text-neutral mb-1">
                {item.title}{" "}
                <span className="text-sm text-primary font-medium">({item.year})</span>
              </h4>
              <p className="text-sm text-neutral-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="pl-12 space-y-16">
          {rightMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute left-[-1.45rem] top-2 w-3 h-3 bg-primary rounded-full shadow" />
              <h4 className="text-lg font-bold text-neutral mb-1">
                {item.title}{" "}
                <span className="text-sm text-primary font-medium">({item.year})</span>
              </h4>
              <p className="text-sm text-neutral-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👉 Small/Mid screens: single vertical timeline */}
      <div className="lg:hidden border-l-2 border-orange-300 pl-6 space-y-16 mt-10">
        {allMilestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute left-[-0.4rem] top-2 w-3 h-3 bg-primary rounded-full shadow" />
            <h4 className="text-lg font-bold text-neutral mb-1">
              {item.title}{" "}
              <span className="text-sm text-primary font-medium">({item.year})</span>
            </h4>
            <p className="text-sm text-neutral-muted">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
