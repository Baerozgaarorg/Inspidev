'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const VIDEOS = [
  {
    title: "THE SHOWREEL",
    category: "CINEMATIC MONTAGE",
    src: "/Video Editing/Showreel.mp4"
  },
  {
    title: "KINETIC TYPOGRAPHY",
    category: "MOTION DESIGN",
    src: "/Video Editing/typrography.mp4"
  },
  {
    title: "COLOR GRADING",
    category: "POST PRODUCTION",
    src: "/Video Editing/colour gradding.mp4"
  },
  {
    title: "MOTION GRAPHICS",
    category: "VFX / COMPOSITING",
    src: "/Video Editing/motiongraphcs.mp4"
  },
  {
    title: "HIGH-ENERGY CUTS",
    category: "EDITORIAL",
    src: "/Video Editing/edit.mp4"
  },
  {
    title: "BEFORE & AFTER",
    category: "RETOUCHING / GRADING",
    src: "/Video Editing/comparison.mp4"
  }
];

export default function VideoEditingPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance fade-in from the overlay transition
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' });

    // Parallax & Reveal for video cards
    const cards = document.querySelectorAll('.video-card');
    cards.forEach((card) => {
      const vid = card.querySelector('video');
      
      // Parallax video background
      if (vid) {
        gsap.fromTo(vid, 
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // Entrance fade for card content
      gsap.fromTo(card,
        { opacity: 0, y: 100, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });
  }, []);

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const vid = target.querySelector('video');
    if (vid) {
      vid.playbackRate = 1.5; // Speed up on hover
      gsap.to(vid, { filter: 'grayscale(0%)', mixBlendMode: 'normal', opacity: 0.8, duration: 0.5 });
    }
    
    gsap.to(target.querySelector('.overlay-layer'), { opacity: 0.4, duration: 0.5 });
    gsap.to(target.querySelector('.video-title'), { color: '#ff5500', letterSpacing: '0.05em', duration: 0.5 });
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const vid = target.querySelector('video');
    if (vid) {
      vid.playbackRate = 1.0; // Reset speed
      gsap.to(vid, { filter: 'grayscale(100%)', mixBlendMode: 'screen', opacity: 0.6, duration: 0.5 });
    }
    
    gsap.to(target.querySelector('.overlay-layer'), { opacity: 0.7, duration: 0.5 });
    gsap.to(target.querySelector('.video-title'), { color: '#ffffff', letterSpacing: 'normal', duration: 0.5 });
  };

  const handleBack = () => {
    // Cinematic exit
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'fixed inset-0 bg-off-black z-[99999] pointer-events-none';
    transitionOverlay.style.opacity = '0';
    document.body.appendChild(transitionOverlay);

    gsap.to(transitionOverlay, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push('/');
        setTimeout(() => transitionOverlay.remove(), 1000);
      }
    });
  };

  return (
    <LenisProvider>
      <div className="noise-overlay" />
      <CustomCursor />

      <main ref={containerRef} className="relative w-full min-h-screen bg-off-black text-off-white select-none pb-32 opacity-0">
        
        {/* Header / Nav */}
        <header className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference flex justify-between items-center">
          <div onClick={handleBack} className="cursor-pointer font-mono text-sm tracking-widest text-brand-orange hover:text-off-white transition-colors">
            &lt; BACK TO MAIN
          </div>
          <div className="font-mono text-[10px] text-neutral-500 tracking-widest">[ CINEMATIC ARCHIVE ]</div>
        </header>

        {/* Hero Title */}
        <section className="relative w-full h-[60vh] flex items-end justify-center pb-20 border-b border-neutral-900 px-6">
          <div className="absolute inset-0 bg-radial-gradient(circle at 50% 100%, rgba(255,85,0,0.1), transparent 60%)" />
          <h1 className="text-6xl md:text-[10vw] font-roxen uppercase tracking-tighter leading-[0.8] text-center drop-shadow-2xl">
            CINEMATIC <span className="text-brand-orange">MOTIONS</span>
          </h1>
        </section>

        {/* Video Projects List */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-20 flex flex-col gap-16 md:gap-32">
          {VIDEOS.map((video, idx) => (
            <div 
              key={idx}
              className="video-card relative w-full aspect-[4/5] md:aspect-video border border-neutral-800 overflow-hidden cursor-pointer group bg-neutral-950"
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              {/* Video Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video 
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60 filter grayscale mix-blend-screen"
                />
              </div>

              {/* Overlays */}
              <div className="overlay-layer absolute inset-0 bg-gradient-to-t from-off-black via-neutral-950/40 to-transparent opacity-70" />
              
              <div className="absolute inset-0 border border-neutral-700/20" />

              {/* Content Grid */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
                
                {/* Top row */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs md:text-sm text-brand-orange tracking-widest">
                    [ 0{idx + 1} ]
                  </span>
                  <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase border border-neutral-800 px-3 py-1 bg-neutral-900/50 backdrop-blur-sm">
                    {video.category}
                  </div>
                </div>

                {/* Bottom row */}
                <div className="mt-auto flex justify-between items-end">
                  <div>
                    <h2 className="video-title text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-none text-off-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all">
                      {video.title}
                    </h2>
                  </div>
                  <div className="hidden md:block font-mono text-xs text-brand-orange animate-pulse">
                    PLAYING
                  </div>
                </div>

              </div>
            </div>
          ))}
        </section>

      </main>
    </LenisProvider>
  );
}
