'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const radialGlowRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Kinetic Text Reveal Animation using GSAP
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      
      gsap.fromTo(
        chars,
        { 
          y: '100%', 
          rotateX: -90, 
          opacity: 0,
          scale: 0.8
        },
        {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.08,
          ease: 'power4.out',
          delay: 0.2
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 1 }
      );
    }

    if (socialsRef.current) {
      const socialBtns = socialsRef.current.querySelectorAll('.social-btn');
      gsap.fromTo(
        socialBtns,
        { scale: 0, opacity: 0, rotate: -45 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, stagger: 0.1, ease: 'back.out(2)', delay: 1.2 }
      );
    }

    // 2. Cursor movement parallax for futuristic lighting
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });

      // Move radial light glow
      if (radialGlowRef.current) {
        gsap.to(radialGlowRef.current, {
          x: clientX - window.innerWidth / 2,
          y: clientY - window.innerHeight / 2,
          duration: 0.8,
          ease: 'power2.out'
        });
      }

      // Parallax text
      if (titleRef.current) {
        const xOffset = (clientX - window.innerWidth / 2) * 0.02;
        const yOffset = (clientY - window.innerHeight / 2) * 0.02;
        gsap.to(titleRef.current, {
          x: xOffset,
          y: yOffset,
          duration: 0.5,
          ease: 'power1.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const text = "INSPIDEV";

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between items-center bg-off-black text-off-white select-none overflow-hidden grain-bg px-6 py-12 md:px-12"
    >
      {/* Cinematic Lighting - Cursor Reactive Radial Gradient */}
      <div
        ref={radialGlowRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,85,0,0.2) 0%, rgba(122,31,0,0.05) 50%, rgba(0,0,0,0) 100%)',
          left: 'calc(50% - 300px)',
          top: 'calc(50% - 300px)',
          zIndex: 0
        }}
      />

      {/* Decorative Top Bar */}
      <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase text-neutral-500">
        <div className="hidden sm:block">[ CODING TO ART ]</div>
        <div className="text-brand-orange animate-pulse">[ SIGNAL ACTIVE ]</div>
        <div>[ INDIA ]</div>
      </div>

      {/* Main Hero Block */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 w-full">
        {/* Kinetic Oversized Typography */}
        <h1
          ref={titleRef}
          className="text-[12vw] md:text-[14vw] font-roxen tracking-tighter leading-[0.8] uppercase flex flex-wrap justify-center overflow-hidden cursor-default select-none filter drop-shadow-[0_10px_30px_rgba(255,85,0,0.15)]"
        >
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="char inline-block origin-bottom font-roxen text-transparent bg-clip-text bg-gradient-to-b from-off-white via-neutral-300 to-neutral-500 hover:text-brand-orange hover:from-brand-orange hover:to-orange-500 transition-colors duration-150"
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Editorial Subtitle */}
        <div
          ref={subtitleRef}
          className="mt-6 md:mt-8 max-w-xs sm:max-w-lg md:max-w-xl text-neutral-400 font-after px-2 md:px-0"
        >
          <div className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-brand-orange font-bold font-roxen uppercase">
            ESTB 2026
          </div>
          <div className="text-xs tracking-[0.15em] md:tracking-[0.2em] mt-3 leading-relaxed opacity-75">
            From frame to code, we create jaw-dropping, attention-seizing digital experiences that elevate your digital presence, captivate your audience, and turn ambitious ideas into unforgettable brands built for growth.
          </div>
        </div>
      </div>

      {/* Hero Footer Controls */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
        
        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">
          <span className="w-6 md:w-8 h-[2px] bg-brand-orange animate-ping" />
          <span>SCROLL TO DESCEND</span>
        </div>

        {/* Right Side: Socials + Portfolio Button */}
        <div className="flex flex-col items-center sm:items-end gap-6">
          {/* Futuristic Socials */}
          <div ref={socialsRef} className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/inspidevv?igsh=b295bnVqeHphZTN5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-900/50 hover:bg-brand-orange text-off-white hover:text-off-black transition-all duration-300 relative overflow-hidden"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <div className="absolute inset-0 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/inspidev-og-399b2b316/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-900/50 hover:bg-brand-orange text-off-white hover:text-off-black transition-all duration-300 relative overflow-hidden"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <div className="absolute inset-0 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
            </a>
            <a
              href="https://youtube.com/@inspidev?si=sYpOoSwKhrXlSaeM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-900/50 hover:bg-brand-orange text-off-white hover:text-off-black transition-all duration-300 relative overflow-hidden"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              <div className="absolute inset-0 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
            </a>
          </div>

          <a 
            href="/portfolio" 
            target="_blank"
            className="group flex items-center gap-3 px-6 py-3 bg-neutral-900/50 border border-neutral-800 hover:border-brand-orange hover:bg-brand-orange text-xs font-roxen tracking-widest uppercase transition-all duration-300 text-off-white hover:text-off-black cursor-pointer social-btn"
          >
            EDITORIAL PORTFOLIO
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
