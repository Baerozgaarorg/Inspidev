'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  { name: 'Baerozgar', path: '/logo/Baerozgar.jpg' },
  { name: 'KDR Group', path: '/logo/KDR group.png' },
  { name: 'Niwasify', path: '/logo/Niwasify.png' },
  { name: 'R.D Realtors', path: '/logo/R.D realtors.png' },
  { name: 'Sanskriti Foundation School', path: '/logo/Sanskriti Foundation School.png' },
  { name: "St. John's English School", path: "/logo/St. John's English School.png" },
  { name: 'Swadist Gainz', path: '/logo/Swadist gainz.png' }
];

export default function Visionaries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Reveal animation for heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  // Double the logos list to make infinite marquee loop perfectly seamless
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-off-black border-b border-neutral-900 overflow-hidden grain-bg select-none"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange-dark/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Industrial Framing */}
      <div className="absolute inset-x-8 top-0 bottom-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4 block">
          [ TRUSTED PARTNERS ]
        </span>
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-roxen uppercase tracking-tighter leading-none text-off-white"
        >
          VISIONARIES<br />
          <span className="text-brand-orange">WE WORKED WITH</span>
        </h2>
      </div>

      {/* Infinite Logo Marquee (Left to Right) */}
      <div className="relative w-full z-10 flex overflow-hidden py-12 bg-neutral-950/20 border-y border-neutral-900/80">
        {/* Shadow overlays to fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 md:w-48 bg-gradient-to-r from-off-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 md:w-48 bg-gradient-to-l from-off-black to-transparent z-20 pointer-events-none" />

        {/* Marquee track moving left to right (defined by inline animation or style) */}
        <div 
          className="flex whitespace-nowrap gap-16 md:gap-24 animate-[marquee-reverse_35s_linear_infinite]"
          style={{
            display: 'flex',
            minWidth: '200%',
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-40 md:w-56 h-24 relative group cursor-pointer"
            >
              {/* Logo wrapper for B&W filter, scale and distortion on hover */}
              <div className="w-full h-full relative transition-all duration-500 filter grayscale contrast-[1.4] brightness-90 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-1">
                <Image
                  src={logo.path}
                  alt={`${logo.name} Logo`}
                  fill
                  sizes="(max-width: 768px) 160px, 224px"
                  className="object-contain p-2"
                />
              </div>

              {/* Glitch Overlay on Hover (using futuristic styled text or pixel effect) */}
              <div className="absolute bottom-0 font-mono text-[8px] text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                [ {logo.name.toUpperCase()} ]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes for backward/forward marquee */}
      <style jsx global>{`
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
