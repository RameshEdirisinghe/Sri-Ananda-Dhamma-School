"use client";
import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useHomeBodyContent } from "@/hooks/useHomeBodyContent";

export default function HomeBody() {
  const { stickyCTA, articles, events } = useHomeBodyContent();
  const [visible, setVisible] = useState(stickyCTA?.isLive);

  return (
    <>
      {/* Sticky CTA for Mobile */}
      {visible && stickyCTA && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-accent text-white text-sm px-4 py-3 flex justify-between items-center z-50 shadow-md">
          <Link href={stickyCTA.link} className="font-medium underline">
            {stickyCTA.title}: {stickyCTA.description}
          </Link>
          <button onClick={() => setVisible(false)}>
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-12">
        {/* Articles */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-neutral">Latest News & Articles</h2>
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={article.image} alt={article.title} className="w-32 h-32 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <Link href={article.link}>
                    <h3 className="text-lg font-semibold text-neutral hover:text-accent">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-neutral-muted mt-1">{article.preview}</p>
                </div>
                <Link href={article.link} className="text-xs text-accent mt-2 font-medium underline">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-neutral">Upcoming Events</h2>
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow p-5 relative"
            >
              <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                {ev.deadline}
              </div>
              <h3 className="text-base font-bold text-neutral">{ev.title}</h3>
              <p className="text-sm text-neutral-muted">{ev.description}</p>
              <Link href={ev.link} className="inline-block mt-3 text-sm text-accent underline">
                View Event →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
