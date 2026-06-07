'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [imgHovered, setImgHovered] = useState(false);
  const [sectionHovered, setSectionHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;

    if (!section || !imageWrap || !image || !content || !heading) return;

    // Parallax scroll on the image
    gsap.fromTo(
      image,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Subtle zoom-in on scroll enter
    gsap.fromTo(
      imageWrap,
      { scale: 1.06, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Content fade-in from right
    gsap.fromTo(
      content,
      { opacity: 0, x: 60, filter: 'blur(10px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    );

    // Heading split reveal
    const words = heading.querySelectorAll('.who-word');
    gsap.fromTo(
      words,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-off-black border-b border-neutral-900 px-4 py-16 md:px-12 md:py-20"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      {/* Subtle ambient orange glow */}
      <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,85,0,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,31,0,0.10) 0%, transparent 70%)' }}
      />

      {/* Industrial grid borders */}
      <div className="absolute inset-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

      {/* Section label top */}
      <div className="absolute top-8 left-6 md:left-12 font-mono text-xs tracking-[0.3em] text-neutral-600 uppercase z-10">
        [ WHO WE ARE // 00 ]
      </div>

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center pt-8 md:pt-0">

        {/* LEFT — Portrait Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div
            ref={imageWrapRef}
            className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] overflow-hidden cursor-pointer group mx-auto lg:mx-0"
            style={{
              transform: sectionHovered ? 'scale(1.025)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            {/* Orange corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-orange z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-orange z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-orange z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-orange z-20 pointer-events-none" />

            {/* Image container with parallax — full image, no crop */}
            <div ref={imageRef} className="relative w-full">
              {/* B&W layer — hidden on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-700 z-10"
                style={{ opacity: imgHovered ? 0 : 1 }}
              >
                <Image
                  src="/rishav.jpg"
                  alt="Rixhav — Founder of INSPIDEV"
                  width={420}
                  height={560}
                  priority
                  className="w-full h-auto object-contain"
                  style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.85)' }}
                />
                {/* Orange highlight overlay on B&W */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,85,0,0.18) 0%, transparent 60%)', mixBlendMode: 'color' }}
                />
              </div>

              {/* Full colour layer — shown on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-700 z-10"
                style={{ opacity: imgHovered ? 1 : 0 }}
              >
                <Image
                  src="/rishav.jpg"
                  alt="Rixhav — Founder of INSPIDEV"
                  width={420}
                  height={560}
                  className="w-full h-auto object-contain"
                  style={{ filter: 'contrast(1.08) brightness(0.95) saturate(1.1)' }}
                />
              </div>

              {/* Invisible base image to set natural dimensions */}
              <Image
                src="/rishav.jpg"
                alt=""
                width={420}
                height={560}
                className="w-full h-auto object-contain opacity-0"
                aria-hidden
              />
            </div>

            {/* Bottom name tag */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-off-black/90 to-transparent">
              <div className="font-mono text-[10px] tracking-[0.3em] text-brand-orange uppercase">[ FOUNDER ]</div>
              <div className="font-roxen text-lg tracking-wider text-off-white uppercase mt-1">RIXHAV</div>
            </div>

            {/* Hover glow border */}
            <div
              className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
              style={{
                boxShadow: 'inset 0 0 40px rgba(255,85,0,0.25)',
                opacity: imgHovered ? 1 : 0,
              }}
            />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div
          ref={contentRef}
          className="lg:col-span-7 flex flex-col justify-center"
          style={{
            transform: sectionHovered ? 'scale(1.015)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Small label */}
          <span className="font-mono text-[10px] md:text-xs text-brand-orange tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
            ABOUT INSPIDEV
          </span>

          {/* Heading with split-word animation */}
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-roxen uppercase tracking-tighter leading-[0.95] text-off-white select-none mb-6 md:mb-8 overflow-hidden"
          >
            {['Building', 'Digital', 'Experiences', 'That Create', 'Real Growth.'].map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="who-word block">
                  {i % 2 === 1
                    ? <span className="text-brand-orange">{word}</span>
                    : word
                  }
                </span>
              </span>
            ))}
          </h2>

          {/* Body copy — INSPIDEV and Rixhav highlighted orange */}
          <div className="space-y-4 md:space-y-5 text-neutral-400 font-after text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              <span className="text-brand-orange font-semibold">INSPIDEV</span> was founded by <span className="text-brand-orange font-semibold">Rixhav</span>, an ambitious creator driven by a vision to help brands, businesses, and creators unlock new opportunities through technology and social media. What began as a way to learn, experiment, and grow evolved into a creative-tech agency focused on building impactful digital experiences that attract attention, strengthen brand identity, and accelerate growth.
            </p>
            <p>
              Alongside running <span className="text-brand-orange font-semibold">INSPIDEV</span>, <span className="text-brand-orange font-semibold">Rixhav</span> is also a content creator and YouTuber, constantly exploring the intersection of technology, business, content, and digital growth. This hands-on experience shapes the way every project is approached — combining creativity, strategy, and execution into solutions that deliver measurable impact.
            </p>
          </div>

          {/* Social Links — icons only */}
          <div className="mt-8 md:mt-10">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase mb-3 md:mb-4">
              CONNECT WITH RIXHAV
            </div>
            <div className="flex items-center gap-3 justify-start">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/iamrixhavfr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-950/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-orange scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm origin-center opacity-10" />
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  className="text-neutral-500 group-hover:text-brand-orange transition-all duration-300 relative z-10 group-hover:scale-110">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rishav-raj-7134763bb"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-950/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-orange scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm origin-center opacity-10" />
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  className="text-neutral-500 group-hover:text-brand-orange transition-all duration-300 relative z-10 group-hover:scale-110">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCmqMHTERJ4NCUNvqL_Oo6Mg"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="group w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-brand-orange bg-neutral-950/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-orange scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm origin-center opacity-10" />
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  className="text-neutral-500 group-hover:text-brand-orange transition-all duration-300 relative z-10 group-hover:scale-110">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
