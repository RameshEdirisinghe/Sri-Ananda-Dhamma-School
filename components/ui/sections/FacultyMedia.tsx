import { Camera, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function FacultyMedia({
  videos = [],
  photos = [],
}: {
  videos: string[];
  photos: string[];
}) {
  if (!videos.length && !photos.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-primary font-bold pt-8">
        <Camera className="w-6 h-6" />
        <h2 className="text-2xl sm:text-3xl tracking-tight text-neutral">Moments & Media</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
        {videos.map((url, i) => (
          <div key={`vid-${i}`} className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[1.5rem] shadow-sm border border-neutral-100">
            {url ? (
              <iframe
                src={url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
                title={`Faculty Video ${i + 1}`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-neutral-soft">
                <AlertCircle className="w-8 h-8 mb-2 opacity-30" />
                <span className="text-sm font-medium">Video unavailable</span>
              </div>
            )}
          </div>
        ))}

        {photos.map((src, i) => {
          // Create a mosaic effect: first photo spanning more space if no video
          const isLarge = !videos.length && i === 0;
          return (
            <div 
              key={`photo-${i}`}
              className={`relative overflow-hidden rounded-[1.5rem] shadow-sm border border-neutral-100 group ${
                isLarge ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4 md:row-span-1'
              }`}
            >
              <Image
                src={src}
                alt={`Faculty Photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
