"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { getHeroContent } from "@/hooks/getHeroContent";

interface HeroData {
  heading: string;
  subtext: string;
  cta: string;
  imageList: string[];
}

export default function HomeHero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    getHeroContent().then(setHeroData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        heroData?.imageList?.length ? (prev + 1) % heroData.imageList.length : 0
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [heroData]);

  if (!heroData) return null;

  const currentImageUrl =
    heroData.imageList[currentImage] || "/images/hero-fallback.jpg";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Pure Black Background Layer (lowest) */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full relative"
          >
            <Image
              src={currentImageUrl}
              alt={`Slide ${currentImage + 1}`}
              fill
              className="object-cover brightness-[0.7]"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <div className="text-center px-6 z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-lg"
        >
          {heroData.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl font-light text-white/90 drop-shadow max-w-2xl mx-auto"
        >
          {heroData.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/about">
            <button className="bg-primary hover:bg-[#a36c34] px-8 py-3.5 text-white rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">
              {heroData.cta}
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-60">
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </section>
  );
}
