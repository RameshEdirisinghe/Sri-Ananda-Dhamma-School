"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHomeBodyContent } from "@/hooks/useHomeBodyContent";
import Image from "next/image";

export default function HomeBody() {
  const { articles, events } = useHomeBodyContent();

  return (
    <>
      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-12">
        {/* Articles */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-neutral">
            Latest News & Articles
          </h2>
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full sm:w-32 h-48 sm:h-32">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <Link href={article.link}>
                    <h3 className="text-lg font-semibold text-neutral hover:text-accent">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-neutral-muted mt-1">
                    {article.preview}
                  </p>
                </div>
                <Link
                  href={article.link}
                  className="text-xs text-accent mt-2 font-medium underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Events */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-neutral">
            Upcoming Events
          </h2>
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
              <Link
                href={ev.link}
                className="inline-block mt-3 text-sm text-accent underline"
              >
                View Event →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
