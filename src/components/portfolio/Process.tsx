import React from 'react';

const PROCESS_STEPS = [
  'Discover',
  'Design',
  'Develop',
  'Launch',
  'Scale'
];

export default function Process() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8] border-t border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/3">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            08 — CREATIVE PROCESS
          </span>
          <h2 className="text-[40px] md:text-[60px] leading-[1] font-medium tracking-tight text-[#111111]">
            Methodology
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <div 
              key={step} 
              className={`py-8 md:py-12 flex items-center justify-between border-b border-[#EAE9E4] ${i === 0 ? 'border-t' : ''}`}
            >
              <h3 className="text-[32px] md:text-[50px] font-medium tracking-tight text-[#111111]">
                {step}
              </h3>
              <span className="font-mono text-[12px] text-[#777777] tracking-widest">
                / 0{i + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
