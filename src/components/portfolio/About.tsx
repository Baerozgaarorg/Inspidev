import React from 'react';

export default function About() {
  return (
    <section className="w-full min-h-[80vh] flex items-center px-12 md:px-24 py-32 bg-[#FAFAF8] relative">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        {/* Left Column - Large Callout */}
        <div className="md:w-5/12 flex flex-col justify-start">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-8">
            01 — ABOUT INSPIDEV
          </span>
          <h3 className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight text-[#111111]">
            We exist at the intersection of raw creativity and advanced technology.
          </h3>
        </div>

        {/* Right Column - Editorial Copy */}
        <div className="md:w-5/12 flex flex-col justify-end">
          <p className="text-[16px] text-[#777777] leading-[1.8] font-light mb-8">
            Founded on the principle that the web should be felt, not just seen, INSPIDEV operates as a specialized creative technology studio. We do not use templates. We do not follow trends. We architect bespoke digital solutions from the ground up, tailored precisely for ambitious brands and creators.
          </p>
          <p className="text-[16px] text-[#777777] leading-[1.8] font-light">
            Every project we undertake is an exercise in restraint and precision. By combining cinematic motion language with brutalist engineering, we create digital experiences that command attention, elevate brand perception, and drive tangible growth.
          </p>
          
          <div className="mt-12 flex items-center gap-4 text-[12px] uppercase tracking-widest font-bold text-[#111111]">
            <span>EST. 2026</span>
            <div className="w-8 h-[1px] bg-[#111111] opacity-20" />
            <span>INDIA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
