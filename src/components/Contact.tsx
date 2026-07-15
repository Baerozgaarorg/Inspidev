import React from 'react';

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between py-12 px-6 md:px-24 bg-dark-texture relative">
      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center mt-24">
        <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-white/50 mb-12 block">
          08 — INITIATE
        </span>
        
        <h2 className="text-[60px] md:text-[120px] lg:text-[160px] leading-[0.9] font-black tracking-tight mb-24 max-w-5xl text-[#FF1A1A] uppercase">
          Contacts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full max-w-5xl text-left border-t border-white/20 pt-12">
          
          <div className="flex flex-col">
            <span className="text-[12px] uppercase tracking-widest text-white/50 mb-4 font-bold">Email</span>
            <a href="mailto:inspidev@gmail.com" className="text-[20px] font-semibold text-white hover:text-[#FF1A1A] transition-colors mb-2">
              inspidev@gmail.com
            </a>
            <a href="mailto:Zyvantamedia@gmail.com" className="text-[20px] font-semibold text-white hover:text-[#FF1A1A] transition-colors">
              Zyvantamedia@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-[12px] uppercase tracking-widest text-white/50 mb-4 font-bold">Phone</span>
            <a href="tel:+917321974745" className="text-[20px] font-semibold text-white hover:text-[#FF1A1A] transition-colors mb-2">
              +91 7321974745
            </a>
            <a href="tel:+918982820578" className="text-[20px] font-semibold text-white hover:text-[#FF1A1A] transition-colors">
              +91 8982820578
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-[12px] uppercase tracking-widest text-white/50 mb-4 font-bold">HQ</span>
            <span className="text-[20px] font-semibold text-white">
              India
            </span>
          </div>

        </div>
      </div>

      <div className="relative z-10 w-full flex justify-between items-end mt-24 pb-8">
        <div className="text-[12px] uppercase tracking-widest text-white/50 font-bold">
          © 2026 INSPIDEV
        </div>
      </div>
    </section>
  );
}
