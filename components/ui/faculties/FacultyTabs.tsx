"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FacultySection from "./FacultySection";
import { useFacultyData } from "@/hooks/useFacultyData";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FacultyTabs() {
  const facultyData = useFacultyData();
  const [activeTab, setActiveTab] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (facultyData.length && !activeTab) {
      setActiveTab(facultyData[0].level);
    }
  }, [facultyData, activeTab]);

  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <div className="lg:hidden relative mb-6">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-3 border rounded-md text-sm font-medium text-primary bg-white shadow-sm"
        >
          {activeTab || "Select Faculty"}
          {isDropdownOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow"
            >
              {facultyData.map((f) => (
                <button
                  key={f.level}
                  onClick={() => {
                    setActiveTab(f.level);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    activeTab === f.level ? "bg-gray-100 text-primary" : "text-neutral"
                  }`}
                >
                  {f.level}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden lg:flex flex-wrap gap-3 mb-8 border-b border-borderGray">
        {facultyData.map((f) => {
          const isActive = activeTab === f.level;
          return (
            <button
              key={f.level}
              onClick={() => setActiveTab(f.level)}
              className={`relative px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "text-primary"
                  : "text-textSecondary hover:text-primary"
              }`}
            >
              {f.level}
              {isActive && (
                <motion.div
                  layoutId="faculty-tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Faculty Content */}
      {facultyData.map(
        (f) =>
          activeTab === f.level && <FacultySection key={f.level} faculty={f} />
      )}
    </div>
  );
}
