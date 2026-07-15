import React from 'react';

export default function Cover() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-between px-12 md:px-24 overflow-hidden select-none">
      
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full pt-24 pb-12">
        {/* Tiny INSPIDEV Logo */}
        <div className="mb-32">
          <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-[#777777]">
            INSPIDEV
          </span>
        </div>

        {/* Huge Typography */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[120px] leading-[0.9] font-medium tracking-tight text-[#111111]">
            Ideas
          </h1>
          <h1 className="text-[120px] leading-[0.9] font-medium tracking-tight text-[#111111]">
            Become
          </h1>
          <h1 className="text-[120px] leading-[0.9] font-medium tracking-tight text-[#111111]">
            Brands.
          </h1>
        </div>

        {/* Small Portfolio 2026 text */}
        <div className="mt-32">
          <span className="text-[#777777] text-[12px] tracking-widest uppercase">
            Portfolio 2026
          </span>
        </div>
      </div>

      {/* Right Content - Abstract Gradient Artwork */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center pointer-events-none">
        <div 
          className="relative w-[600px] h-[800px] rounded-[120px] filter blur-[80px] opacity-80 mix-blend-multiply"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, #FF8A66 0deg, #FF6699 120deg, #66CCFF 240deg, #FF8A66 360deg)',
            transform: 'rotate(-15deg)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full filter blur-[60px] opacity-60 mix-blend-multiply top-1/4 right-20"
          style={{
            background: 'radial-gradient(circle, #D4A5FF 0%, transparent 70%)',
          }}
        />
      </div>

    </section>
  );
}
