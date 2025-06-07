"use client";
import { useMomentsData } from "@/hooks/useMomentsData";

export default function AlbumsGrid() {
  const { albums } = useMomentsData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-borderGray overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
        >
          <img
            src={album.cover}
            alt={album.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 space-y-1">
            <h3 className="font-medium text-textPrimary group-hover:text-primary transition">
              {album.title}
            </h3>
            <p className="text-sm text-textSecondary">📅 {album.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
