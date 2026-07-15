import React from 'react';

export default function WhyUs() {
  return (
    <section className="w-full py-32 md:py-48 px-12 md:px-24 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        
        <div className="w-full md:w-1/2">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            09 — WHY INSPIDEV
          </span>
          <h2 className="text-[40px] md:text-[60px] leading-[1.1] font-medium tracking-tight text-[#111111]">
            We refuse to produce the ordinary.
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[18px] text-[#777777] font-light leading-[1.8] mb-8">
            Most agencies rely on templates. They recycle ideas. They build for the status quo. 
            We build for the exception. We believe that if a digital experience doesn&apos;t make you stop and stare, it has failed.
          </p>
          <p className="text-[18px] text-[#777777] font-light leading-[1.8]">
            We combine relentless editorial aesthetics with robust engineering. Our work is not just beautiful—it is highly performant, accessible, and strategically designed to convert.
          </p>
        </div>

      </div>
    </section>
  );
}
