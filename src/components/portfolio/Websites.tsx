'use client';
import React from 'react';

export default function Websites() {
  return (
    <section className="w-full py-32 bg-[#111111] text-[#FAFAF8] relative">
      {/* 
        This section is specifically requested as a "Dark editorial showcase" for ChadMax, 
        so we break the light theme just for this massive showcase.
      */}
      <div className="max-w-7xl mx-auto px-12 md:px-24">
        
        <div className="mb-32">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            05 — DIGITAL EXPERIENCES
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1] font-medium tracking-tight text-[#FAFAF8]">
            Websites
          </h2>
        </div>

        {/* Niwasify Showcase */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h3 className="text-[32px] font-medium tracking-tight">Niwasify</h3>
            <span className="text-[12px] uppercase tracking-widest text-[#777777]">Real Estate Platform</span>
          </div>
          
          <div className="relative w-full aspect-video bg-[#1A1A1A] rounded-[24px] overflow-hidden border border-[#333333] shadow-2xl flex items-center justify-center p-4 md:p-12">
            {/* Pseudo-MacBook Frame */}
            <div className="w-full h-full relative rounded-lg overflow-hidden shadow-lg border border-[#333333]">
              <img 
                src="/website background/Niwasify.png" 
                alt="Niwasify Website" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Pseudo-iPhone floating over it */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:right-12 w-[120px] md:w-[200px] aspect-[9/19] bg-[#111111] rounded-[20px] md:rounded-[36px] border-[4px] md:border-[8px] border-[#222222] shadow-2xl overflow-hidden hidden sm:block">
              <img 
                src="/website background/Niwasify.png" 
                alt="Niwasify Mobile" 
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>

        {/* ChadMax Showcase */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h3 className="text-[32px] font-medium tracking-tight">ChadMax</h3>
            <span className="text-[12px] uppercase tracking-widest text-[#777777]">Fitness E-Commerce</span>
          </div>
          
          <div className="relative w-full aspect-[16/10] bg-[#000000] rounded-[24px] overflow-hidden border border-[#222222] shadow-2xl flex items-center justify-center p-4 md:p-12">
             <div className="w-full h-full relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/website background/ChadMax.png" 
                alt="ChadMax Website" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  (e.target as HTMLImageElement).src = '/logo/chadmaxx.png';
                  (e.target as HTMLImageElement).className = 'w-full h-full object-contain p-20 filter invert';
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
