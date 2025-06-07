"use client";
import { useState } from "react";
import AchievementsGrid from "./AchievementsGrid";
import AlbumsGrid from "./AlbumsGrid";
import { motion } from "framer-motion";

const tabs = [
  { id: "achievements", label: "🏆 Achievements" },
  { id: "albums", label: "📸 Albums" },
];

export default function MomentsTabs() {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div className="space-y-10">
      <div className="relative flex flex-wrap gap-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "text-primary"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {activeTab === "achievements" ? <AchievementsGrid /> : <AlbumsGrid />}
    </div>
  );
}
