import React from 'react';

export default function SocialMedia() {
  return (
    <section className="w-full py-32 px-6 md:px-24 bg-light-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-[#777777] mb-6 block">
              05 — CONTENT & SOCIAL
            </span>
            <h2 className="text-[50px] md:text-[80px] leading-[1] font-black tracking-tight text-[#FF1A1A] uppercase max-w-2xl">
              Social Media
            </h2>
          </div>
          <p className="text-[20px] text-[#555555] max-w-sm leading-[1.6] font-medium">
            We don&apos;t just post. We architect attention. Our strategies dominate algorithms and turn viewers into loyal brand advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* ── Laptop Store ── */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-12 w-full flex justify-center">
              <div className="w-[85%] max-w-[400px]">
                <img 
                  src="/id portfolio/social media managment/Picsart_26-07-14_23-12-46-842.png" 
                  alt="Laptop Store Instagram" 
                  className="w-full h-auto object-contain rounded-[8px] drop-shadow-2xl"
                />
              </div>
            </div>
            <h3 className="text-[32px] font-black tracking-tight text-[#111111] mb-4 uppercase">
              Laptop Store
            </h3>
            <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-[#777777]">
              Content Strategy / Algorithm Optimization
            </span>
          </div>

          {/* ── National PC ── */}
          <div className="flex flex-col items-center text-center md:mt-32">
            <div className="mb-12 w-full flex justify-center">
              <div className="w-[85%] max-w-[400px]">
                <img 
                  src="/id portfolio/social media managment/Picsart_26-07-14_23-17-14-263.png" 
                  alt="National PC Instagram" 
                  className="w-full h-auto object-contain rounded-[8px] drop-shadow-2xl"
                />
              </div>
            </div>
            <h3 className="text-[32px] font-black tracking-tight text-[#111111] mb-4 uppercase">
              National PC
            </h3>
            <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-[#777777]">
              Brand Awareness / Lifestyle Production
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
