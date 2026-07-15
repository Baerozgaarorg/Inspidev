import React from 'react';

export default function WhyUs() {
  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-24 bg-light-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        
        <div className="w-full md:w-1/2">
          <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-[#777777] mb-6 block">
            07 — WHY INSPIDEV
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1.1] font-black tracking-tight text-[#FF1A1A] uppercase">
            We refuse to produce the ordinary.
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[20px] text-[#555555] font-medium leading-[1.8] mb-8">
            Most agencies rely on templates. They recycle ideas. They build for the status quo. 
            We build for the exception. We believe that if a digital experience doesn&apos;t make you stop and stare, it has failed.
          </p>
          <p className="text-[20px] text-[#555555] font-medium leading-[1.8]">
            We combine relentless editorial aesthetics with robust engineering. Our work is not just beautiful—it is highly performant, accessible, and strategically designed to scale.
          </p>
        </div>

      </div>
    </section>
  );
}
