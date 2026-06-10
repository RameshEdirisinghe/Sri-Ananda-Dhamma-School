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
    <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-16">
        Milestones of Growth
      </h2>

      {/* 👉 Desktop: Two-column timeline */}
      <div className="hidden lg:grid grid-cols-2 gap-12 relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform -translate-x-1/2 z-0" />

        {/* Left side milestones */}
        <div className="pr-12 space-y-16">
          {leftMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10"
            >
              <span className="absolute -right-[3.15rem] top-1.5 w-3.5 h-3.5 bg-white border-[3px] border-primary rounded-full shadow-sm" />
              <h4 className="text-lg font-semibold text-neutral mb-1">
                {item.title}{" "}
                <span className="text-sm text-primary font-medium">
                  ({item.year})
                </span>
              </h4>
              <p className="text-sm text-neutral-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right side milestones */}
        <div className="pl-12 space-y-16">
          {rightMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10"
            >
              <span className="absolute -left-[3.15rem] top-1.5 w-3.5 h-3.5 bg-white border-[3px] border-primary rounded-full shadow-sm" />
              <h4 className="text-lg font-semibold text-neutral mb-1">
                {item.title}{" "}
                <span className="text-sm text-primary font-medium">
                  ({item.year})
                </span>
              </h4>
              <p className="text-sm text-neutral-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👉 Mobile: Single vertical timeline */}
      <div className="lg:hidden border-l border-neutral-200 pl-10 space-y-14 mt-12 relative">
        {allMilestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative"
          >
            {/* Adjust dot perfectly on the line */}
            <span className="absolute -left-[45px] top-1.5 w-3.5 h-3.5 bg-white border-[3px] border-primary rounded-full shadow-sm" />

            {/* Push text right to avoid collision */}
            <div className="ml-6">
              <h4 className="text-base font-semibold text-neutral mb-1">
                {item.title}{" "}
                <span className="text-sm text-primary font-medium">
                  ({item.year})
                </span>
              </h4>
              <p className="text-sm text-neutral-muted">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
