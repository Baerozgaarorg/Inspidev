import React from 'react';

export default function Manifesto() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-12 md:px-24 py-32 bg-[#FAFAF8] relative overflow-hidden">
      
      {/* Background Ribbon Artwork */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[150%] h-[150%] absolute -top-1/4 -right-1/4 opacity-[0.03]">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#111111" strokeWidth="0.5" />
          <path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="#111111" strokeWidth="0.5" />
          <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="#111111" strokeWidth="0.5" />
          <path d="M0,80 Q25,55 50,80 T100,80" fill="none" stroke="#111111" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="text-[60px] md:text-[90px] leading-[1.1] font-medium tracking-tight text-[#111111] mb-12">
          We don&apos;t just design.<br />
          We build identities people remember.
        </h2>

        <p className="text-[18px] text-[#777777] leading-relaxed max-w-xl font-light">
          In a world cluttered with noise and generic templates, we strip away the unnecessary to reveal the essential. We engineer brand identities and digital experiences that are timeless, bold, and meticulously crafted. Our philosophy is simple: minimalism above everything, where every pixel has a purpose.
        </p>
      </div>
      
    </section>
  );
}
