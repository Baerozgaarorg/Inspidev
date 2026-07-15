import React from 'react';

const CAPABILITIES = [
  {
    title: 'Brand Identity',
    desc: 'Crafting memorable visual systems and brand languages that endure.'
  },
  {
    title: 'Website Design',
    desc: 'Architecting bespoke digital platforms focused on conversion and aesthetics.'
  },
  {
    title: 'AI Automation',
    desc: 'Deploying neural networks and autonomous agents to scale operations.'
  },
  {
    title: 'Social Media',
    desc: 'Engineering high-retention content tailored for algorithm domination.'
  },
  {
    title: 'Content',
    desc: 'Producing cinematic video and editorial photography that commands attention.'
  },
  {
    title: 'Strategy',
    desc: 'Data-driven blueprints designed to transform ideas into market leaders.'
  }
];

export default function Capabilities() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            02 — CAPABILITIES
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1] font-medium tracking-tight text-[#111111]">
            Our Disciplines
          </h2>
        </div>

        {/* Editorial Layout for Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="flex flex-col border-t border-[#EAE9E4] pt-8">
              <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-[28px] font-medium tracking-tight text-[#111111]">
                  {cap.title}
                </h3>
                <span className="font-mono text-[10px] text-[#777777] tracking-widest">
                  / 0{i + 1}
                </span>
              </div>
              <p className="text-[16px] text-[#777777] font-light leading-[1.6] max-w-sm">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
