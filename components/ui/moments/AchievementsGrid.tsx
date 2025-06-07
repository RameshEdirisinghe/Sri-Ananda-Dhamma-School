"use client";
import AchievementCard from './AchievementCard';
import { useMomentsData } from '@/hooks/useMomentsData';

export default function AchievementsGrid() {
  const { achievements } = useMomentsData();

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {achievements.map((a, i) => (
        <AchievementCard key={i} {...a} />
      ))}
    </div>
  );
}
