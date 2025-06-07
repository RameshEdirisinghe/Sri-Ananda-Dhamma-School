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
      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
        <Camera className="w-5 h-5" />
        <h2 className="text-lg sm:text-xl">Media</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((url, i) =>
          url ? (
            <iframe
              key={i}
              src={url}
              className="w-full aspect-video rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              title={`Faculty Video ${i + 1}`}
            />
          ) : (
            <div
              key={i}
              className="flex items-center justify-center aspect-video bg-neutral text-white rounded-lg"
            >
              <AlertCircle className="w-6 h-6 mr-2" />
              <span className="text-sm">Video unavailable</span>
            </div>
          )
        )}

        {photos.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Faculty Photo ${i + 1}`}
            width={600}
            height={300}
            className="w-full object-cover max-h-[300px] rounded-lg hover:scale-[1.02] transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
