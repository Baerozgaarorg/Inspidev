import React from 'react';

export default function BrandIdentity() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-32">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            04 — BRAND IDENTITY
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1] font-medium tracking-tight text-[#111111]">
            Visual Languages
          </h2>
        </div>

        {/* Large Logo Presentations */}
        <div className="flex flex-col gap-32">
          
          {/* Showcase 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-2/3 aspect-[4/3] bg-[#F4F3F0] flex items-center justify-center p-16">
              <img 
                src="/logo/chadmaxx.png" 
                alt="ChadMax Logo" 
                className="max-w-full max-h-full object-contain filter drop-shadow-xl opacity-90"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h3 className="text-[24px] font-medium tracking-tight text-[#111111] mb-6">
                ChadMax
              </h3>
              <p className="text-[14px] text-[#777777] font-light leading-[1.6]">
                A bold, modern typography-led identity designed to dominate the supplement and fitness market.
              </p>
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-2/3 aspect-[4/3] bg-[#F4F3F0] flex items-center justify-center p-16">
              <img 
                src="/logo/Niwasify 2.jpeg" 
                alt="Niwasify Logo" 
                className="max-w-full max-h-full object-contain filter drop-shadow-xl opacity-90"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h3 className="text-[24px] font-medium tracking-tight text-[#111111] mb-6">
                Niwasify
              </h3>
              <p className="text-[14px] text-[#777777] font-light leading-[1.6]">
                An elegant real estate marque. Clean, structural, and sophisticated, built to instill trust and luxury.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
