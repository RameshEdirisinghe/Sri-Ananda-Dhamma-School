'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FacultySection from './FacultySection';
import { useFacultyData } from '@/hooks/useFacultyData';

export default function FacultyTabs() {
  const facultyData = useFacultyData();
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (facultyData.length && !activeTab) setActiveTab(facultyData[0].level);
  }, [facultyData, activeTab]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8 border-b border-borderGray">
        {facultyData.map((f) => {
          const isActive = activeTab === f.level;
          return (
            <button
              key={f.level}
              onClick={() => setActiveTab(f.level)}
              className={`relative px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? 'text-primary'
                  : 'text-textSecondary hover:text-primary'
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

      {facultyData.map(
        (f) => activeTab === f.level && <FacultySection key={f.level} faculty={f} />
      )}
    </div>
  );
}
