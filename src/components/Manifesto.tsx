import React from 'react';

export default function Manifesto() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center px-6 md:px-24 py-32 bg-dark-texture relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="text-[60px] md:text-[110px] lg:text-[130px] leading-[1.05] font-black tracking-tighter text-[#FF1A1A] uppercase mb-12">
          We don&apos;t just design.<br />
          We build identities people remember.
        </h2>

        <p className="text-[20px] md:text-[26px] text-white/70 leading-[1.6] max-w-3xl font-medium">
          In a world cluttered with noise and generic templates, we strip away the unnecessary to reveal the essential. We engineer brand identities and digital experiences that are timeless, bold, and meticulously crafted.
        </p>
      </div>
    </section>
  );
}
