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
    <section className="w-full py-32 px-6 md:px-24 bg-[#FAFAF8] border-t border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="mb-24 text-center">
          <span className="font-semibold tracking-[0.2em] text-[10px] uppercase text-[#777777] mb-6 block">
            07 — PROCESS
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1] font-medium tracking-tight text-[#111111]">
            Methodology
          </h2>
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center">
          {PROCESS_STEPS.map((step, index) => (
            <React.Fragment key={step}>
              <div className="text-[32px] md:text-[50px] font-medium tracking-tight text-[#111111] py-4 text-center w-full group">
                <span className="group-hover:text-[#777777] transition-colors duration-500">{step}</span>
              </div>
              
              {index !== PROCESS_STEPS.length - 1 && (
                <div className="py-8 flex items-center justify-center">
                  <div className="w-[1px] h-[60px] bg-gradient-to-b from-[#111111] to-transparent opacity-20 relative">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-r border-b border-[#111111] opacity-50" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
