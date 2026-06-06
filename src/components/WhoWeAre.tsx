'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Section Entrance Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // Image slides from left
      tl.fromTo(
        imageContainerRef.current,
        { xPercent: -20, opacity: 0, filter: 'blur(10px)' },
        { xPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
      );

      // Heading line-by-line reveal
      if (headingRef.current) {
        // Simple manual split for the heading to avoid SplitText requirement
        const lines = headingRef.current.querySelectorAll('.reveal-line');
        tl.fromTo(
          lines,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
          '-=0.6'
        );
      }

      // Body text fades upward
      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );

      // Social links animate in last
      tl.fromTo(
        socialRef.current?.querySelectorAll('.social-icon'),
        { scale: 0.8, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleImageClick = () => {
    setIsColor(!isColor);
    // Subtle click animation
    gsap.fromTo(
      imageContainerRef.current,
      { scale: 0.98 },
      { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900 bg-off-black px-6 py-24 md:px-12"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-off-black via-neutral-950 to-off-black" />
        <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Portrait Image (~40-45% width) */}
        <div
          ref={imageContainerRef}
          className="w-full lg:w-[45%] aspect-[3/4] relative overflow-hidden border border-neutral-800 cursor-pointer group"
          onClick={handleImageClick}
        >
          <div className="absolute inset-0 bg-neutral-900/50 mix-blend-overlay z-10 pointer-events-none" />
          <Image
            ref={imageRef as any}
            src="/rishav.jpg"
            alt="Rixhav - Founder of INSPIDEV"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className={`object-cover transition-all duration-700 ease-in-out ${
              isColor ? 'grayscale-0 filter-none' : 'grayscale contrast-125'
            }`}
          />
          {/* Grain overlay for brutalist texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/assets/grain.png")', backgroundSize: '200px' }} />
          
          {/* Orange highlight hint on hover */}
          <div className={`absolute inset-0 border-2 border-transparent transition-colors duration-500 pointer-events-none ${!isColor && 'group-hover:border-brand-orange/30'}`} />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-6">
            [ ABOUT INSPIDEV ]
          </span>

          {/* Heading */}
          <h2 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white mb-8">
            <div className="overflow-hidden pb-1"><span className="reveal-line block">Building Digital</span></div>
            <div className="overflow-hidden pb-1"><span className="reveal-line block">Experiences That</span></div>
            <div className="overflow-hidden pb-1"><span className="reveal-line block text-brand-orange">Create Real Growth.</span></div>
          </h2>

          {/* Body Copy */}
          <div ref={textRef} className="flex flex-col gap-6 text-neutral-400 font-after text-sm md:text-base leading-relaxed opacity-80">
            <p>
              INSPIDEV was founded by Rixhav, an ambitious creator driven by a vision to help brands, businesses, and creators unlock new opportunities through technology and social media. What began as a way to learn, experiment, and grow evolved into a creative-tech agency focused on building impactful digital experiences that attract attention, strengthen brand identity, and accelerate growth.
            </p>
            <p>
              Alongside running INSPIDEV, Rixhav is also a content creator and YouTuber, constantly exploring the intersection of technology, business, content, and digital growth. This hands-on experience shapes the way every project is approached — combining creativity, strategy, and execution into solutions that deliver measurable impact.
            </p>
          </div>

          {/* Social Links Area */}
          <div ref={socialRef} className="mt-12">
            <span className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-4 block">
              // CONNECT WITH RIXHAV
            </span>
            <div className="flex items-center gap-4 border border-neutral-800 p-4 w-fit bg-neutral-950/40">
              <a
                href="https://instagram.com/iamrixhavfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2 border border-neutral-800 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all duration-300 text-off-white flex items-center justify-center w-10 h-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://linkedin.com/in/rishav-raj-7134763bb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2 border border-neutral-800 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all duration-300 text-off-white flex items-center justify-center w-10 h-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCmqMHTERJ4NCUNvqL_Oo6Mg"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2 border border-neutral-800 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] transition-all duration-300 text-off-white flex items-center justify-center w-10 h-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
