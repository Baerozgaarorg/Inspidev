import React from 'react';

const CAPABILITIES = [
  'Web Development',
  'AI Automation',
  'Digital Marketing',
  'Social Media Management',
  'SEO'
];

export default function Capabilities() {
  return (
    <section className="w-full py-32 md:py-48 px-6 md:px-24 bg-dark-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-white/50 mb-16 block">
          DISCIPLINES
        </span>

        <div className="flex flex-col gap-6 md:gap-10 w-full max-w-5xl">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="flex justify-between items-end border-b border-white/20 pb-4 group">
              <h3 className="text-[40px] md:text-[70px] font-black tracking-tighter text-white uppercase group-hover:text-[#FF1A1A] transition-colors duration-300">
                {cap}
              </h3>
              <span className="font-mono text-[12px] md:text-[14px] text-white/40 tracking-[0.2em] font-bold mb-2 md:mb-4">
                / 0{i + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
