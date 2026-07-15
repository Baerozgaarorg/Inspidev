import React from 'react';

export default function Cover() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-24 overflow-hidden select-none bg-[#111111]"
    >
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/id portfolio/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      />
      
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full pt-24 pb-12">
        {/* INSPIDEV + Zyvanta Media */}
        <div className="mb-32 flex flex-col gap-1">
          <span className="font-bold tracking-[0.3em] text-[13px] uppercase text-white">
            INSPIDEV
          </span>
          <span className="font-semibold tracking-[0.2em] text-[11px] uppercase text-white/70">
            × Zyvanta Media
          </span>
        </div>

        {/* Huge Typography */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[90px] md:text-[150px] lg:text-[180px] leading-[0.85] font-black tracking-tighter text-[#FF1A1A] uppercase">
            Ideas
          </h1>
          <h1 className="text-[90px] md:text-[150px] lg:text-[180px] leading-[0.85] font-black tracking-tighter text-white uppercase">
            Become
          </h1>
          <h1 className="text-[90px] md:text-[150px] lg:text-[180px] leading-[0.85] font-black tracking-tighter text-white uppercase">
            Brands.
          </h1>
        </div>

        {/* Small Portfolio 2026 text */}
        <div className="mt-32">
          <span className="text-white/60 text-[14px] font-bold tracking-[0.2em] uppercase">
            Portfolio 2026
          </span>
        </div>
      </div>

      {/* Right Content — Abstract Gradient Artwork */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center pointer-events-none z-10">
        <div 
          className="relative w-[500px] lg:w-[700px] h-[700px] lg:h-[900px] rounded-[120px] filter blur-[100px] opacity-60"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, #FF8A66 0deg, #FF6699 120deg, #66CCFF 240deg, #FF8A66 360deg)',
            transform: 'rotate(-15deg)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full filter blur-[80px] opacity-40 top-1/4 right-20"
          style={{
            background: 'radial-gradient(circle, #D4A5FF 0%, transparent 70%)',
          }}
        />
      </div>

    </section>
  );
}
