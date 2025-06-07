'use client';
import CountUp from 'react-countup';

const stats = [
  { label: 'Total Students', value: 2400, icon: '🎓' },
  { label: 'Active Teachers', value: 25, icon: '🧑‍🏫' },
  { label: 'Books/Resources', value: 380, icon: '📘' },
  { label: 'Years Active', value: 27, icon: '📍' },
];

export default function TopStats() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-16 px-4 max-w-6xl mx-auto">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-lg shadow text-center p-6 hover:shadow-md transition">
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-4xl font-bold text-primary">
            <CountUp end={stat.value} duration={2} />
          </div>
          <p className="text-sm text-neutral-muted mt-2">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
