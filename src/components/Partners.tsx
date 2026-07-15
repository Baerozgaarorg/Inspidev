import React from 'react';

export default function Partners() {
  return (
    <section className="w-full py-32 px-6 md:px-24 bg-light-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-1/3">
          <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-[#777777] mb-6 block">
            STRATEGIC PARTNERSHIP
          </span>
          <h2 className="text-[40px] md:text-[60px] leading-[1.1] font-black tracking-tight text-[#FF1A1A] uppercase mb-6">
            Creative + Growth.
          </h2>
          <p className="text-[18px] text-[#777777] leading-[1.6] font-medium">
            An exclusive alliance designed to merge raw aesthetic superiority with relentless market scaling.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex items-center justify-center md:justify-end gap-8 md:gap-16">
          
          <div className="flex flex-col items-center">
            <span className="text-[30px] md:text-[50px] font-black tracking-tighter text-[#111111] uppercase">
              INSPIDEV
            </span>
            <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#777777] mt-2">
              Creative
            </span>
          </div>

          <div className="w-12 h-[2px] bg-[#EAE9E4] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF1A1A] text-[24px] font-bold">
              +
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[30px] md:text-[50px] font-black tracking-tighter text-[#111111] uppercase">
              Zyvanta Media
            </span>
            <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#777777] mt-2">
              Growth
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
