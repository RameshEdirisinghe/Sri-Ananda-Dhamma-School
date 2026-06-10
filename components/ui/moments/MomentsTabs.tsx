"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AchievementsGrid from "./AchievementsGrid";
import AlbumsGrid from "./AlbumsGrid";

const tabs = [
  { id: "achievements", label: "Achievements" },
  { id: "albums", label: "Albums" },
];

export default function MomentsTabs() {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div className="space-y-12">
      {/* Premium Desktop Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-1 p-1 bg-neutral-100/80 rounded-[2rem] border border-neutral-200/50 shadow-inner">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 text-sm font-bold rounded-[1.5rem] transition-all duration-300 ${
                  isActive
                    ? "text-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    : "text-neutral-soft hover:text-primary hover:bg-white/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="moments-tab-bg"
                    className="absolute inset-0 bg-white rounded-[1.5rem] z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "achievements" ? <AchievementsGrid /> : <AlbumsGrid />}
      </motion.div>
    </div>
  );
}
