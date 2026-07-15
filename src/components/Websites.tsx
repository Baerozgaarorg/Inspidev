import React from 'react';

export default function Websites() {
  return (
    <section className="w-full bg-dark-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-24 py-32">
        
        <div className="mb-32">
          <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-white/50 mb-6 block">
            04 — DIGITAL EXPERIENCES
          </span>
          <h2 className="text-[60px] md:text-[100px] leading-[1] font-black tracking-tight text-[#FF1A1A] uppercase">
            Websites
          </h2>
        </div>

        {/* ── Niwasify ── */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h3 className="text-[40px] md:text-[50px] font-black tracking-tight text-white uppercase">Niwasify</h3>
            <span className="text-[14px] uppercase tracking-[0.2em] text-white/50 font-bold">Real Estate Platform</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
            {/* MacBook mockup — pre-made image */}
            <div className="w-full md:w-[65%]">
              <img 
                src="/id portfolio/Macbook website/Picsart_26-07-14_22-42-02-294.png" 
                alt="Niwasify on MacBook Pro" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            {/* iPhone mockup — pre-made image */}
            <div className="w-[40%] md:w-[22%]">
              <img 
                src="/id portfolio/iphone website/Picsart_26-07-14_22-13-09-900.png" 
                alt="Niwasify on iPhone" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ── R.D Realtors ── */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h3 className="text-[40px] md:text-[50px] font-black tracking-tight text-white uppercase">R.D Realtors</h3>
            <span className="text-[14px] uppercase tracking-[0.2em] text-white/50 font-bold">Premium Real Estate</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
            <div className="w-full md:w-[65%]">
              <img 
                src="/id portfolio/Macbook website/Picsart_26-07-14_22-41-10-548.png" 
                alt="R.D Realtors on MacBook Pro" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="w-[40%] md:w-[22%]">
              <img 
                src="/id portfolio/iphone website/Picsart_26-07-14_22-16-10-104.png" 
                alt="R.D Realtors on iPhone" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ── ChadMax ── */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h3 className="text-[40px] md:text-[50px] font-black tracking-tight text-white uppercase">ChadMax</h3>
            <span className="text-[14px] uppercase tracking-[0.2em] text-white/50 font-bold">Personal Brand</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
            <div className="w-full md:w-[65%]">
              <img 
                src="/id portfolio/Macbook website/Picsart_26-07-14_22-43-13-149.png" 
                alt="ChadMax on MacBook Pro" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="w-[40%] md:w-[22%]">
              <img 
                src="/id portfolio/iphone website/Picsart_26-07-14_22-24-56-711.png" 
                alt="ChadMax on iPhone" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ── Swadist Gainz ── */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h3 className="text-[40px] md:text-[50px] font-black tracking-tight text-white uppercase">Swadist Gainz</h3>
            <span className="text-[14px] uppercase tracking-[0.2em] text-white/50 font-bold">E-Commerce</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
            <div className="w-full md:w-[65%]">
              <img 
                src="/id portfolio/Macbook website/Picsart_26-07-14_22-44-34-866.png" 
                alt="Swadist Gainz on MacBook Pro" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="w-[40%] md:w-[22%]">
              <img 
                src="/id portfolio/iphone website/Picsart_26-07-14_22-22-53-266.png" 
                alt="Swadist Gainz on iPhone" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
