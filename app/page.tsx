import React from 'react';
import HomeHero from '@/components/ui/home/HomeHero';
import LiveStats from '@/components/reusable/LiveStats';
import HomeBody from '@/components/ui/home/HomeBody';

export default function Home() {
  return (
    <>
      <HomeHero />
      <LiveStats />
      <HomeBody />
    </>
  );
}
