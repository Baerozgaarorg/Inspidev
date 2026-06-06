'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barContainerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const TOTAL_SEGMENTS = 8;

  useEffect(() => {
    let isReady = document.readyState === 'complete';
    const handleLoad = () => {
      isReady = true;
    };

    if (!isReady) {
      window.addEventListener('load', handleLoad);
    }

    // Attempt to preload specific video assets to avoid popping
    const videosToPreload = [
      '/Video Editing/Showreel.mp4',
      '/Video Editing/reel2.mp4',
      '/Video Editing/photoediting.mp4',
      '/Video Editing/aichatbot.mp4'
    ];
    
    videosToPreload.forEach(src => {
      const vid = document.createElement('video');
      vid.preload = 'auto';
      vid.src = src;
    });

    const progressObj = { value: 0 };
    
    const updateSegments = () => {
      const val = progressObj.value;
      setProgress(Math.floor(val));
      
      const filledSegments = Math.floor((val / 100) * TOTAL_SEGMENTS);
      const fillProgress = ((val / 100) * TOTAL_SEGMENTS) - filledSegments;

      const segments = document.querySelectorAll('.segment-fill');
      segments.forEach((seg, index) => {
        if (index < filledSegments) {
          gsap.set(seg, { scaleX: 1 });
          // Add pulse to fully filled segments
          gsap.to(seg, { opacity: 0.8 + Math.random() * 0.2, duration: 0.1 });
        } else if (index === filledSegments) {
          gsap.set(seg, { scaleX: fillProgress });
        } else {
          gsap.set(seg, { scaleX: 0 });
        }
      });
    };

    // 1. Organic loading progress simulation up to 85%
    const tl = gsap.timeline({
      onComplete: () => {
        checkReady();
      }
    });

    tl.to(progressObj, {
      value: 85,
      duration: 3.5,
      ease: 'power3.inOut',
      onUpdate: updateSegments
    });

    const checkReady = () => {
      // If assets are loaded, proceed to 100%
      if (isReady) {
        gsap.to(progressObj, {
          value: 100,
          duration: 1.2,
          ease: 'power4.inOut',
          onUpdate: updateSegments,
          onComplete: triggerCollapse
        });
      } else {
        setTimeout(checkReady, 300);
      }
    };

    // 2. Glitch effect on logo and text
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7 && logoRef.current && textRef.current) {
        const xOffset = (Math.random() - 0.5) * 8;
        const yOffset = (Math.random() - 0.5) * 4;
        
        gsap.set([logoRef.current, textRef.current], { x: xOffset, y: yOffset, skewX: xOffset * 2 });
        
        setTimeout(() => {
          gsap.set([logoRef.current, textRef.current], { x: 0, y: 0, skewX: 0 });
        }, 80);
      }
    }, 300);

    // 3. Collapse sequence at 100%
    const triggerCollapse = () => {
      clearInterval(glitchInterval);

      const collapseTimeline = gsap.timeline({
        onComplete: () => {
          triggerSphereDissolve();
        }
      });

      // Hide text & logo swiftly
      collapseTimeline.to([logoRef.current, textRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power4.in'
      });

      // Merge segments by reducing gap to 0
      collapseTimeline.to('.segment-container', {
        margin: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      }, '-=0.2');

      // Collapse bar inward from both sides
      collapseTimeline.to(barContainerRef.current, {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        duration: 0.6,
        ease: 'power4.inOut',
      }, '+=0.1');

      // Hide bar container to replace with perfect glowing orb
      collapseTimeline.to(barContainerRef.current, {
        opacity: 0,
        duration: 0.1
      });

      // Orb entrance
      collapseTimeline.to(sphereRef.current, {
        display: 'block',
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'back.out(2)'
      }, '-=0.1');

      // Add a heavy glow pulsing / flicker
      collapseTimeline.to(sphereRef.current, {
        scale: 1.4,
        boxShadow: '0 0 100px 40px #ff5500, 0 0 150px 70px #7a1f00',
        duration: 0.4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1
      });
    };

    // 4. Sphere dissolve into particles and fade to homepage
    const triggerSphereDissolve = () => {
      if (!particleContainerRef.current || !sphereRef.current) return;

      const sphereBounds = sphereRef.current.getBoundingClientRect();
      const numParticles = 80; // More particles for cinematic dissolve
      
      // Create particles
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1.5 h-1.5 bg-brand-orange rounded-full';
        particle.style.left = `${sphereBounds.left + sphereBounds.width / 2}px`;
        particle.style.top = `${sphereBounds.top + sphereBounds.height / 2}px`;
        particle.style.boxShadow = '0 0 12px 3px #ff5500';
        particleContainerRef.current.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const speed = 10 + Math.random() * 25;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;

        gsap.to(particle, {
          x: velocityX * 25,
          y: velocityY * 25,
          opacity: 0,
          scale: 0.1,
          duration: 1.5 + Math.random() * 1.0,
          ease: 'power4.out',
          onComplete: () => {
            particle.remove();
          }
        });
      }

      // Fade out the sphere itself with motion blur
      gsap.to(sphereRef.current, {
        scale: 0,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 0.6,
        ease: 'power4.in',
        onComplete: () => {
          // Smooth opacity mask transition to homepage
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              onComplete();
            }
          });
        }
      });
    };

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(glitchInterval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-off-black overflow-hidden grain-bg select-none"
    >
      {/* Liquid Goo SVG Filter */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Particle Container */}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none" />

      {/* Main Loader Content */}
      <div className="flex flex-col items-center max-w-md w-full px-8 text-center relative z-10">
        
        {/* Logo Group */}
        <div ref={logoRef} className="relative w-40 h-40 mb-8 filter drop-shadow-[0_0_15px_rgba(255,85,0,0.4)]">
          <Image
            src="/ID no bg.png"
            alt="INSPIDEV Logo"
            fill
            priority
            sizes="160px"
            className="object-contain"
          />
        </div>

        {/* Text Identity */}
        <div ref={textRef} className="mb-10 text-off-white font-after select-none">
          <h1 className="text-4xl font-roxen tracking-widest text-brand-orange uppercase">INSPIDEV</h1>
          <p className="text-sm tracking-[0.3em] uppercase opacity-60 mt-2">ESTB 2026</p>
        </div>

        {/* Segmented Loading Bar */}
        <div 
          ref={barContainerRef} 
          className="w-full h-8 bg-neutral-900 border border-neutral-800 p-1 flex justify-between relative overflow-hidden"
          style={{ filter: 'url(#liquid-goo)' }}
        >
          {[...Array(TOTAL_SEGMENTS)].map((_, i) => (
            <div 
              key={i} 
              className="segment-container flex-1 h-full mx-[2px] relative overflow-hidden"
            >
              <div 
                className="segment-fill absolute inset-0 bg-brand-orange origin-left scale-x-0"
                style={{
                  boxShadow: '0 0 15px 2px #ff5500',
                  borderRadius: '2px'
                }}
              />
            </div>
          ))}
        </div>

        {/* Glowing Sphere (Hidden initially, shown during collapse) */}
        <div
          ref={sphereRef}
          className="hidden absolute w-12 h-12 bg-brand-orange rounded-full sphere-glow"
          style={{
            transform: 'scale(0)',
            opacity: 0,
            zIndex: 20
          }}
        />

        {/* Digital Counter */}
        <div className="mt-4 font-mono text-sm tracking-wider text-neutral-500">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}
