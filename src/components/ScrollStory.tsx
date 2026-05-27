'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<SVGFEGaussianBlurElement>(null);
  
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const symbolEl = symbolRef.current;
    const textLeft = textLeftRef.current;
    const textRight = textRightRef.current;

    if (!section || !sticky || !symbolEl || !textLeft || !textRight) return;

    // Create a master GSAP Timeline triggered by scrolling the 300vh container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smoother follow
        pin: sticky, // Pin the sticky container
        anticipatePin: 1,
      }
    });

    // Custom motion blur filter object for GSAP to animate
    const blurObj = { stdDevX: 0, stdDevY: 0 };
    const updateBlur = () => {
      if (filterRef.current) {
        filterRef.current.setAttribute(
          'stdDeviation',
          `${blurObj.stdDevX}, ${blurObj.stdDevY}`
        );
      }
    };

    // Initialize states
    gsap.set(symbolEl, { scale: 0.1, opacity: 0, filter: 'url(#motionBlur)' });
    gsap.set(textLeft, { x: '100vw', opacity: 0 });
    gsap.set(textRight, { x: '-100vw', opacity: 0 });

    // Step 1: Dollar sign explodes on screen with high scale and vertical motion blur
    tl.to(blurObj, {
      stdDevY: 25,
      duration: 0.2,
      onUpdate: updateBlur
    });

    tl.to(symbolEl, {
      scale: 3,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.2');

    // Reduce blur as it settles
    tl.to(blurObj, {
      stdDevY: 0,
      duration: 0.2,
      onUpdate: updateBlur
    });

    // Step 2: Dollar sign slides left, "Million Dollar Question" text slides in from right
    tl.to(symbolEl, {
      x: '-22vw',
      scale: 2.2,
      duration: 0.5,
      ease: 'power3.inOut'
    });

    tl.to(textLeft, {
      x: '20vw',
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.5');

    // Hold visual state
    tl.to({}, { duration: 0.3 }); // Empty spacer for hold

    // Step 3: Dollar sign slides back to center, text slides out
    tl.to(textLeft, {
      x: '100vw',
      opacity: 0,
      duration: 0.4,
      ease: 'power3.in'
    });

    tl.to(symbolEl, {
      x: '0vw',
      scale: 2.5,
      duration: 0.5,
      ease: 'power3.inOut'
    }, '-=0.4');

    // Step 4: 3D Flip & Morph into "?"
    // We add heavy horizontal blur during the morph flip
    tl.to(blurObj, {
      stdDevX: 30,
      duration: 0.2,
      onUpdate: updateBlur
    });

    tl.to(symbolEl, {
      rotateY: 90,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setSymbol('?');
      },
      // In reverse scroll direction:
      onInterrupt: () => {
        setSymbol('$');
      }
    }, '-=0.2');

    // Small hack to ensure symbol updates correctly based on scroll progress
    tl.add(() => {
      // Direct detection of timeline direction to swap symbol
      const progress = tl.scrollTrigger ? tl.scrollTrigger.progress : 0;
      if (progress < 0.55) {
        setSymbol('$');
      } else {
        setSymbol('?');
      }
    });

    tl.to(symbolEl, {
      rotateY: 180,
      duration: 0.2,
      ease: 'power2.out'
    });

    tl.to(blurObj, {
      stdDevX: 0,
      duration: 0.2,
      onUpdate: updateBlur
    });

    // Step 5: "?" slides right, "What We Do" slides in from left
    tl.to(symbolEl, {
      x: '22vw',
      scale: 2.2,
      duration: 0.5,
      ease: 'power3.inOut'
    });

    tl.to(textRight, {
      x: '-22vw',
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.5');

    // Hold state
    tl.to({}, { duration: 0.3 });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-[300vh] bg-off-black z-10">
      
      {/* SVG Motion Blur Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="motionBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur ref={filterRef} stdDeviation="0,0" />
          </filter>
        </defs>
      </svg>

      {/* Sticky Fullscreen Story Area */}
      <div
        ref={stickyRef}
        className="w-full h-screen sticky top-0 flex items-center justify-center overflow-hidden grain-bg border-y border-neutral-900"
      >
        
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange-dark/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-burnt-orange/15 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Central Morphing Brutalist Symbol */}
        <div
          ref={symbolRef}
          className="absolute z-10 font-roxen text-[16vw] text-brand-orange select-none leading-none drop-shadow-[0_0_40px_rgba(255,85,0,0.3)] pointer-events-none"
          style={{ perspective: 1000 }}
        >
          {symbol}
        </div>

        {/* Left Interactive Question Typography */}
        <div
          ref={textLeftRef}
          className="absolute z-20 flex flex-col justify-center items-start text-left select-none pointer-events-none"
        >
          <h2 className="text-5xl md:text-[6vw] font-roxen uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-off-white to-neutral-400">
            MILLION DOLLAR
          </h2>
          <h2 className="text-5xl md:text-[6vw] font-roxen uppercase tracking-tighter leading-none text-brand-orange">
            QUESTION
          </h2>
        </div>

        {/* Right Info Typography */}
        <div
          ref={textRightRef}
          className="absolute z-20 flex flex-col justify-center items-end text-right select-none pointer-events-none"
        >
          <h2 className="text-5xl md:text-[6vw] font-roxen uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-l from-off-white to-neutral-400">
            WHAT WE
          </h2>
          <h2 className="text-5xl md:text-[6vw] font-roxen uppercase tracking-tighter leading-none text-brand-orange">
            DO BEST
          </h2>
        </div>

        {/* Framing grids for industrial cyber atmosphere */}
        <div className="absolute inset-x-8 top-12 bottom-12 border border-neutral-900 pointer-events-none flex justify-between p-4">
          <span className="font-mono text-[9px] text-neutral-600">[ SECT-02 // SCROLL // STORY ]</span>
          <span className="font-mono text-[9px] text-neutral-600">[ 43.149° N // 142.348° E ]</span>
        </div>
      </div>
    </div>
  );
}
