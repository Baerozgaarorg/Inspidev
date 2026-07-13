'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function ShowcaseGateways() {
  const router = useRouter();
  const webBoxRef = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);

  const handleHoverEnter = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      gsap.to(ref.current.querySelector('.bg-layer'), { scale: 1.05, duration: 2, ease: 'power2.out' });
      // Remove grayscale to make it colorful
      gsap.to(ref.current.querySelector('video'), { filter: 'grayscale(0%)', mixBlendMode: 'normal', opacity: 0.8, duration: 0.5 });
      gsap.to(ref.current.querySelector('.overlay-layer'), { opacity: 0.2, duration: 0.5 });
      gsap.to(ref.current.querySelector('.text-layer'), { filter: 'blur(0px)', scale: 1.02, duration: 0.5 });
      gsap.to(ref.current.querySelector('.quote-layer'), { y: 0, opacity: 1, duration: 0.5, delay: 0.1 });
    }
  };

  const handleHoverLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      gsap.to(ref.current.querySelector('.bg-layer'), { scale: 1, duration: 1, ease: 'power2.out' });
      gsap.to(ref.current.querySelector('video'), { filter: 'grayscale(100%)', mixBlendMode: 'screen', opacity: 0.5, duration: 0.5 });
      gsap.to(ref.current.querySelector('.overlay-layer'), { opacity: 0.7, duration: 0.5 });
      gsap.to(ref.current.querySelector('.text-layer'), { filter: 'blur(0px)', scale: 1, duration: 0.5 });
      gsap.to(ref.current.querySelector('.quote-layer'), { y: 10, opacity: 0, duration: 0.3 });
    }
  };

  const handleNavigate = (path: string) => {
    // Cinematic exit transition overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'fixed inset-0 bg-off-black z-[99999] pointer-events-none';
    transitionOverlay.style.opacity = '0';
    document.body.appendChild(transitionOverlay);

    gsap.to(transitionOverlay, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push(path);
        // Remove it shortly after so the new page can fade in
        setTimeout(() => transitionOverlay.remove(), 1000);
      }
    });
  };

  return (
    <section className="w-full bg-off-black border-b border-neutral-900 px-6 py-20 md:px-12 relative z-10">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4 block">
          [ SHOWCASE GATEWAYS ]
        </span>
        <h2 className="text-3xl md:text-5xl font-roxen uppercase tracking-tighter leading-[0.9] text-off-white select-none">
          EXPLORE OUR <span className="text-brand-orange">ARTIFACTS</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col items-center gap-6 h-[400px] sm:h-[500px] md:h-[600px] w-full">
          {/* BOX 1: WEBSITES */}
          <div 
            ref={webBoxRef}
            onMouseEnter={() => handleHoverEnter(webBoxRef)}
            onMouseLeave={() => handleHoverLeave(webBoxRef)}
            onClick={() => handleNavigate('/websites')}
            className="relative w-full h-full border border-neutral-800 overflow-hidden cursor-pointer group bg-neutral-950"
          >
            {/* Background Layer (Video) */}
            <div className="bg-layer absolute inset-0 w-full h-full scale-100">
              <video 
                src="/Video Editing/digital artifacts.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover filter grayscale mix-blend-screen opacity-50 transition-all duration-500"
              />
            </div>
            
            {/* Dark Overlay */}
            <div className="overlay-layer absolute inset-0 bg-gradient-to-t from-off-black via-neutral-950/50 to-transparent opacity-70" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="text-layer text-5xl md:text-7xl font-roxen uppercase tracking-tighter text-off-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                WEBSITES
              </h3>
              <p className="quote-layer mt-6 text-brand-orange font-after text-sm md:text-base tracking-wide italic opacity-0 translate-y-[10px]">
                “Built to be seen. Engineered to be remembered.”
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-500 tracking-widest">[ 01 ]</div>
          </div>
          
          {/* NEW ENTER BUTTON */}
          <button 
            onClick={() => handleNavigate('/websites')}
            className="group flex items-center justify-between w-44 h-12 px-6 border border-brand-orange text-brand-orange uppercase font-roxen tracking-widest text-sm transition-all duration-300 hover:bg-brand-orange hover:text-off-black hover:scale-105"
          >
            <span>ENTER</span>
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col items-center gap-6 h-[400px] sm:h-[500px] md:h-[600px] w-full">
          {/* BOX 2: VIDEO EDITING */}
          <div 
            ref={videoBoxRef}
            onMouseEnter={() => handleHoverEnter(videoBoxRef)}
            onMouseLeave={() => handleHoverLeave(videoBoxRef)}
            onClick={() => handleNavigate('/video-editing')}
            className="relative w-full h-full border border-neutral-800 overflow-hidden cursor-pointer group bg-neutral-950"
          >
            {/* Background Layer (Video) */}
            <div className="bg-layer absolute inset-0 w-full h-full scale-100">
              <video 
                src="/Video Editing/reel.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover filter grayscale mix-blend-screen opacity-50 transition-all duration-500"
              />
            </div>
            
            {/* Dark Overlay */}
            <div className="overlay-layer absolute inset-0 bg-gradient-to-t from-off-black via-neutral-950/50 to-transparent opacity-70" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="text-layer text-5xl md:text-7xl font-roxen uppercase tracking-tighter text-off-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                VIDEO EDITING
              </h3>
              <p className="quote-layer mt-6 text-brand-orange font-after text-sm md:text-base tracking-wide italic opacity-0 translate-y-[10px]">
                “Every frame should leave an impact.”
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-500 tracking-widest">[ 02 ]</div>
          </div>

          {/* NEW ENTER BUTTON */}
          <button 
            onClick={() => handleNavigate('/video-editing')}
            className="group flex items-center justify-between w-44 h-12 px-6 border border-brand-orange text-brand-orange uppercase font-roxen tracking-widest text-sm transition-all duration-300 hover:bg-brand-orange hover:text-off-black hover:scale-105"
          >
            <span>ENTER</span>
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
