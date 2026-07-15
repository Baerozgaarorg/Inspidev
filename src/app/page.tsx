'use client';

import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import Visionaries from '@/components/Visionaries';
import ShowcaseGateways from '@/components/ShowcaseGateways';
import Contact from '@/components/Contact';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LenisProvider>
      {/* Global premium noise/grain filter */}
      <div className="noise-overlay" />
      
      {/* Cyber brutalist interactive cursor */}
      <CustomCursor />

      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="relative w-full bg-off-black text-off-white select-none">
          <Hero />
          <WhoWeAre />
          <WhatWeDo />
          <Services />
          <Visionaries />
          <ShowcaseGateways />
          <Contact />
        </main>
      )}
    </LenisProvider>
  );
}
