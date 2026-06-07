'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 163;

function buildFramePaths(folder: string) {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const n = String(i + 1).padStart(3, '0');
    return `/${folder}/ezgif-frame-${n}.jpg`;
  });
}

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const stRef = useRef<ScrollTrigger | null>(null);

  const [loadProgress, setLoadProgress] = useState(0); // 0–100
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // ── 1. Detect device ───────────────────────────────────────────────────
    const isMobile = window.innerWidth < 768;
    const folder = isMobile ? 'what we do phone' : 'what we do pc 2';
    const paths = buildFramePaths(folder);

    // ── 2. Size canvas for High DPI (Retina) displays for maximum quality ─
    const canvas = canvasRef.current!;
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      // Set actual internal resolution to be super high quality
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      // Set CSS display size to match screen
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Redraw current frame after resize
      const img = imagesRef.current[frameIndexRef.current];
      if (img) drawFrame(img);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ── 3. Draw a single frame to canvas ──────────────────────────────────
    function drawFrame(img: HTMLImageElement) {
      const ctx = canvas.getContext('2d');
      if (!ctx || !img.complete) return;
      
      // Enable highest quality image smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      // object-fit: cover math
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const ox = (cw - sw) / 2;
      const oy = (ch - sh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, ox, oy, sw, sh);
    }

    // ── 4. Preload ALL frames into memory first ────────────────────────────
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loaded = 0;

    paths.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        images[i] = img;
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));

        // Draw first frame as soon as it's ready
        if (i === 0) drawFrame(img);

        // All frames loaded — activate scroll
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setIsReady(true);

          // ── 5. Create ScrollTrigger only after all frames loaded ─────────
          stRef.current = ScrollTrigger.create({
            trigger: sectionRef.current!,
            start: 'top top',
            // Pin for exactly TOTAL_FRAMES × 25px of scroll = full animation
            end: `+=${TOTAL_FRAMES * 25}px`,
            pin: stickyRef.current!,
            pinSpacing: true,
            // scrub: true = 1:1 scroll mapping, no momentum overshoot
            scrub: true,
            onUpdate: (self) => {
              const frameIndex = Math.min(
                Math.floor(self.progress * (TOTAL_FRAMES - 1)),
                TOTAL_FRAMES - 1
              );
              if (frameIndex !== frameIndexRef.current) {
                frameIndexRef.current = frameIndex;
                const img = imagesRef.current[frameIndex];
                if (img) drawFrame(img);
              }
            },
          });
        }
      };
      img.onerror = () => {
        // Count errored frames too so we don't hang forever
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setIsReady(true);
        }
      };
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      stRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-off-black"
      style={{ height: `${TOTAL_FRAMES * 25}px` }}
    >
      {/* Sticky viewport — pinned while animation plays */}
      <div
        ref={stickyRef}
        className="w-full h-screen flex items-center justify-center bg-off-black overflow-hidden"
      >
        {/* Canvas — hardware-accelerated, zero-flicker frame rendering */}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: 'block' }}
        />

        {/* Loading overlay — shown until all frames are in memory */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-off-black z-20">
            <div className="font-mono text-xs text-neutral-500 tracking-[0.3em] uppercase mb-6">
              [ LOADING SEQUENCE ]
            </div>
            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-neutral-800 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-brand-orange transition-all duration-100"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="font-mono text-[10px] text-brand-orange tracking-widest mt-3">
              {loadProgress}%
            </div>
          </div>
        )}

        {/* Scroll hint — shown once ready, fades after first scroll */}
        {isReady && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10 animate-pulse">
            <span className="font-mono text-[10px] text-neutral-500 tracking-[0.3em] uppercase">
              SCROLL TO REVEAL
            </span>
            <div className="w-[1px] h-8 bg-brand-orange" />
          </div>
        )}
      </div>
    </div>
  );
}
