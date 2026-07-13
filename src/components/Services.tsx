'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const webSectionRef = useRef<HTMLDivElement>(null);
  const webVideoRef = useRef<HTMLVideoElement>(null);
  
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoVideoRef = useRef<HTMLVideoElement>(null);
  
  const photoSectionRef = useRef<HTMLDivElement>(null);
  const photoVideoRef = useRef<HTMLVideoElement>(null);
  
  const aiSectionRef = useRef<HTMLDivElement>(null);
  const aiVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect for Web Dev background video
    if (webSectionRef.current && webVideoRef.current) {
      gsap.fromTo(
        webVideoRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: webSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Parallax effect for Video Editing background video
    if (videoSectionRef.current && videoVideoRef.current) {
      gsap.fromTo(
        videoVideoRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: videoSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Parallax effect for Photo Manipulation background video
    if (photoSectionRef.current && photoVideoRef.current) {
      gsap.fromTo(
        photoVideoRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: photoSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Parallax effect for AI Solutions background video
    if (aiSectionRef.current && aiVideoRef.current) {
      gsap.fromTo(
        aiVideoRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: aiSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Interactive content entries (slide up and fade in with GSAP)
    const fadeElements = document.querySelectorAll('.service-fade-in');
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-off-black z-10">
      
      {/* SECTION 1: WEB DEVELOPMENT */}
      <section
        ref={webSectionRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900 px-6 py-20 md:px-12"
      >
        {/* Parallax Background Video */}
        <div className="absolute inset-0 z-0 scale-110">
          <video
            ref={webVideoRef}
            src="/Video Editing/Showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          {/* Intense Burnt Orange Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-off-black opacity-80" />
          <div className="absolute inset-0 bg-radial-gradient(circle at 70% 50%, rgba(255,85,0,0.15), transparent 60%)" />
        </div>

        {/* Framing Industrial Grids */}
        <div className="absolute inset-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center service-fade-in">
            <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4">
              [ CAPABILITY // 01 ]
            </span>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white select-none">
              INTERACTIVE
            </h2>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-brand-orange select-none">
              WEB DEVELOPMENT
            </h2>
            <p className="mt-8 text-neutral-400 font-after text-sm md:text-base leading-relaxed max-w-2xl opacity-80">
              We engineer raw, highly tailored immersive digital ecosystems. Breaking free from boring corporate frameworks, we build high-end interactive websites powered by advanced motion engines, real-time shaders, and custom physics. We craft interfaces that respond, breathe, and leave users absolutely spellbound.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 font-mono text-[10px] tracking-wider text-neutral-500 uppercase service-fade-in">
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">01 / FRONTEND</div>
              IMMERSIVE UIs<br />CINEMATIC MOTIONS<br />KINETIC TYPO
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">02 / SYSTEMS</div>
              GSAP ENGINES<br />LENIS SCROLLS<br />TAILORED LOGIC
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">03 / CREATIVE</div>
              INTERACTIVE STORY<br />VISCERAL PATHS<br />RAW EXPERIENCES
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">04 / SPEED</div>
              NEXT-GEN STACKS<br />60 FPS FLUIDITY<br />ULTRA RENDER
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VIDEO EDITING */}
      <section
        ref={videoSectionRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900 px-6 py-20 md:px-12 bg-off-black"
      >
        {/* Parallax Background Video */}
        <div className="absolute inset-0 z-0 scale-110">
          <video
            ref={videoVideoRef}
            src="/Video Editing/reel2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-off-black opacity-80" />
          <div className="absolute inset-0 bg-radial-gradient(circle at 30% 50%, rgba(255,85,0,0.15), transparent 60%)" />
        </div>

        {/* Framing Industrial Grids */}
        <div className="absolute inset-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 font-mono text-[10px] tracking-wider text-neutral-500 uppercase service-fade-in">
            <div className="border border-neutral-800 p-6 bg-neutral-950/40 flex flex-col justify-between h-64">
              <div>
                <span className="text-brand-orange font-bold font-roxen text-sm">[ SERVICE CAPABILITIES ]</span>
                <p className="mt-4 text-xs normal-case text-neutral-400 font-after">
                  High-energy cuts, heavy sound-design sync, kinetic type design, complex motion graphics, raw grading, and futuristic editorial flow.
                </p>
              </div>
              <div className="flex justify-between items-center text-brand-orange text-xs">
                <span>[ ESTB 2026 ]</span>
                <span>[ 4K CAPTURE ]</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center service-fade-in">
            <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4">
              [ CAPABILITY // 02 ]
            </span>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white select-none">
              CINEMATIC
            </h2>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-brand-orange select-none">
              VIDEO EDITING
            </h2>

            {/* Bold Quote */}
            <div className="mt-8 border-l-4 border-brand-orange pl-6 my-4 select-none">
              <blockquote className="text-2xl md:text-4xl font-roxen uppercase tracking-tight text-off-white leading-tight italic">
                “Motion creates emotion.”
              </blockquote>
            </div>

            <p className="mt-6 text-neutral-400 font-after text-sm md:text-base leading-relaxed max-w-2xl opacity-80">
              We don&apos;t just edit; we forge visual symphonies. Through fast-cut montages, aggressive timing, and heavy cyberpunk soundscapes, we transform raw files into cinematic brand films and viral digital content. Our edits are tailored to seize attention and leave an unforgettable emotional footprint.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CINEMATIC PHOTO MANIPULATION */}
      <section
        ref={photoSectionRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900 px-6 py-20 md:px-12"
      >
        <div className="absolute inset-0 z-0 scale-110">
          <video
            ref={photoVideoRef}
            src="/Video Editing/photoediting.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-off-black opacity-80" />
          <div className="absolute inset-0 bg-radial-gradient(circle at 70% 50%, rgba(255,85,0,0.15), transparent 60%)" />
        </div>

        <div className="absolute inset-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center service-fade-in">
            <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4">
              [ CAPABILITY // 03 ]
            </span>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white select-none">
              CINEMATIC
            </h2>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-brand-orange select-none">
              PHOTO MANIPULATION
            </h2>
            <p className="mt-8 text-neutral-400 font-after text-sm md:text-base leading-relaxed max-w-2xl opacity-80">
              We manipulate reality. Beyond simple retouching, we use advanced color grading, aggressive compositing, and surreal visual engineering to craft striking editorial imagery. Every frame is treated as a masterpiece of industrial art—raw, visceral, and uncompromising.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 font-mono text-[10px] tracking-wider text-neutral-500 uppercase service-fade-in">
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">01 / RETOUCH</div>
              FLAWLESS SKIN<br />TEXTURE MAPS<br />RAW DETAIL
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">02 / COLOR</div>
              FILM EMULATION<br />DEEP CONTRAST<br />CINEMA LUTs
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">03 / COMPOSITE</div>
              SURREAL BLENDS<br />MATTE PAINTING<br />VFX LAYERS
            </div>
            <div className="border border-neutral-800 p-4 bg-neutral-950/40">
              <div className="text-brand-orange font-bold font-roxen text-sm mb-2">04 / OUTPUT</div>
              PRINT READY<br />WEB OPTIMIZED<br />8K RESOLUTION
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SMART AI SOLUTIONS */}
      <section
        ref={aiSectionRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900 px-6 py-20 md:px-12 bg-off-black"
      >
        <div className="absolute inset-0 z-0 scale-110">
          <video
            ref={aiVideoRef}
            src="/Video Editing/aichatbot.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-off-black opacity-80" />
          <div className="absolute inset-0 bg-radial-gradient(circle at 30% 50%, rgba(255,85,0,0.15), transparent 60%)" />
        </div>

        <div className="absolute inset-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 font-mono text-[10px] tracking-wider text-neutral-500 uppercase service-fade-in">
            <div className="border border-neutral-800 p-6 bg-neutral-950/40 flex flex-col justify-between h-64">
              <div>
                <span className="text-brand-orange font-bold font-roxen text-sm">[ SYSTEM ARCHITECTURE ]</span>
                <p className="mt-4 text-xs normal-case text-neutral-400 font-after">
                  Autonomous agents, neural network integrations, predictive behavior models, dynamic language processing, and custom AI chatbots tailored for unparalleled user conversion.
                </p>
              </div>
              <div className="flex justify-between items-center text-brand-orange text-xs">
                <span>[ GPT CORE ]</span>
                <span>[ NEURAL LINK ]</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center service-fade-in">
            <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4">
              [ CAPABILITY // 04 ]
            </span>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white select-none">
              SMART AI
            </h2>
            <h2 className="text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-brand-orange select-none">
              SOLUTIONS
            </h2>

            <div className="mt-8 border-l-4 border-brand-orange pl-6 my-4 select-none">
              <blockquote className="text-2xl md:text-4xl font-roxen uppercase tracking-tight text-off-white leading-tight italic">
                “Intelligence engineered.”
              </blockquote>
            </div>

            <p className="mt-6 text-neutral-400 font-after text-sm md:text-base leading-relaxed max-w-2xl opacity-80">
              We deploy machine intelligence that acts as a true extension of your brand. From intelligent autonomous customer service bots to predictive algorithms that anticipate user needs, we build AI ecosystems that drive engagement, streamline operations, and redefine what is possible on the web.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
