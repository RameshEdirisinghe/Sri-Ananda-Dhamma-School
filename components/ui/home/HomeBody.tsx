"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHomeBodyContent } from "@/hooks/useHomeBodyContent";
import Image from "next/image";

export default function HomeBody() {
  const { articles, events } = useHomeBodyContent();

  return (
    <section className="bg-neutral-background py-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          
          {/* Articles Section */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral tracking-tight">Latest News</h2>
              <Link href="/news" className="hidden sm:inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                View All <span className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {articles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-neutral-100 overflow-hidden hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <Link href={article.link}>
                      <h3 className="text-xl font-bold text-neutral leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-neutral-soft mt-3 line-clamp-2 leading-relaxed flex-1">
                      {article.preview}
                    </p>
                    <Link
                      href={article.link}
                      className="inline-flex items-center text-sm font-semibold text-primary mt-6 group-hover:underline"
                    >
                      Read full story <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="flex flex-col space-y-8 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral tracking-tight">Events</h2>
            <div className="flex flex-col gap-4">
              {events.map((ev, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group flex flex-row items-center gap-5 p-5 rounded-[1.25rem] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg border border-neutral-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FFFDF9] text-primary flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    {/* Placeholder icon since lucide-react isn't imported here, text is safer */}
                    <div className="text-center px-1">
                       <span className="block text-xl font-extrabold leading-none">{ev.deadline.replace(/[^0-9]/g, '') || ev.deadline.substring(0,2)}</span>
                       <span className="block text-[9px] font-bold uppercase tracking-widest mt-1 opacity-80 line-clamp-1">{ev.deadline.replace(/[0-9]/g, '').trim() || 'Date'}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-base font-bold text-neutral leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {ev.title}
                    </h3>
                    <Link
                      href={ev.link}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-neutral-soft mt-2 group-hover:text-primary transition-colors"
                    >
                      View details <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
              
              <Link href="/events" className="w-full py-4 mt-4 text-center rounded-[1.25rem] bg-white hover:bg-primary/5 text-primary font-bold text-sm transition-colors border border-primary/20 hover:border-primary/40 shadow-sm">
                See all events
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
