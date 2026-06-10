"use client";
import { useMomentsData } from "@/hooks/useMomentsData";
import { motion } from "framer-motion";
import { Image as ImageIcon, Layers } from "lucide-react";

export default function AlbumsGrid() {
  const { albums } = useMomentsData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {albums.map((album, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative cursor-pointer"
        >
          {/* Stacked Effect */}
          <div className="absolute inset-0 bg-neutral-200 rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 -z-10 opacity-40" />
          <div className="absolute inset-0 bg-neutral-100 rounded-[2rem] translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500 -z-10 opacity-70" />

          {/* Main Card */}
          <div className="bg-white rounded-[2rem] border border-neutral-200/50 overflow-hidden shadow-soft group-hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary flex items-center gap-1.5 shadow-sm">
                <Layers size={12} />
                Archive
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-2">
              <div className="flex items-center gap-2 text-primary/60 text-[11px] font-bold uppercase tracking-widest">
                <ImageIcon size={14} />
                <span>Collection</span>
                <span className="w-1 h-1 rounded-full bg-primary/20" />
                <span>{album.year}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral group-hover:text-primary transition-colors duration-300">
                {album.title}
              </h3>
              <p className="text-neutral-soft text-sm leading-relaxed opacity-70">
                A curated selection of memories from our {album.year} journey.
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
