import React from 'react';

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between py-12 px-12 md:px-24 bg-[#111111] text-[#FAFAF8] selection:bg-[#FAFAF8] selection:text-[#111111]">
      
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-12 block">
          10 — INITIATE
        </span>
        
        <h2 className="text-[60px] md:text-[100px] lg:text-[140px] leading-[0.9] font-medium tracking-tight mb-24 max-w-5xl">
          Let&apos;s build something remarkable.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full max-w-4xl text-left border-t border-[#333333] pt-12">
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#777777] mb-4">Email</span>
            <a href="mailto:notbaerozgaar@gmail.com" className="text-[16px] font-medium hover:text-[#777777] transition-colors">
              notbaerozgaar@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#777777] mb-4">Phone</span>
            <a href="tel:+910000000000" className="text-[16px] font-medium hover:text-[#777777] transition-colors">
              +91 000 000 0000
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#777777] mb-4">HQ</span>
            <span className="text-[16px] font-medium text-[#FAFAF8]">
              India
            </span>
          </div>

        </div>
      </div>

      <div className="w-full flex justify-between items-end mt-24 pb-8">
        <div className="text-[10px] uppercase tracking-widest text-[#777777]">
          © 2026 INSPIDEV
        </div>
        <div className="w-16 h-16 bg-[#FAFAF8] flex items-center justify-center p-2">
          {/* Abstract QR Code Representation */}
          <div className="w-full h-full grid grid-cols-3 gap-[2px]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`bg-[#111111] ${i % 2 === 0 ? 'opacity-100' : 'opacity-20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
