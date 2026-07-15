import React from 'react';

export default function AIAutomation() {
  return (
    <section className="w-full py-32 px-6 md:px-24 bg-dark-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-24 text-center">
          <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-white/50 mb-6 block">
            06 — AI AUTOMATION
          </span>
          <h2 className="text-[50px] md:text-[90px] leading-[1] font-black tracking-tight text-[#FF1A1A] uppercase mb-8">
            Seamless Operations.
          </h2>
          <p className="text-[22px] text-white/60 font-medium leading-[1.6] max-w-2xl mx-auto">
            Deploy intelligent agents that qualify leads, answer questions, and book calls—on WhatsApp and on your website, 24/7.
          </p>
        </div>

        {/* Removed Lead Qualification, making remaining 2 bigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start max-w-5xl mx-auto">
          
          {/* ── Website Chatbot (Niwasify) ── */}
          <div className="flex flex-col items-center">
            <div className="mb-8 w-full flex justify-center">
              <div className="w-full max-w-[450px]">
                <img 
                  src="/id portfolio/ai chatbot/Picsart_26-07-14_22-52-25-397.png" 
                  alt="Niwasify Website Chatbot" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <h3 className="text-[24px] font-black tracking-tight text-white uppercase mb-2">Website Chatbot</h3>
            <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-white/50">Niwasify — Real Estate AI</span>
          </div>

          {/* ── WhatsApp Automation (Smile Dentist) ── */}
          <div className="flex flex-col items-center md:mt-24">
            <div className="mb-8 w-full flex justify-center">
              <div className="w-full max-w-[450px]">
                <img 
                  src="/id portfolio/ai chatbot/Picsart_26-07-14_23-00-40-058.png" 
                  alt="WhatsApp Business Automation" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <h3 className="text-[24px] font-black tracking-tight text-white uppercase mb-2">WhatsApp Automation</h3>
            <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-white/50">Appointment Booking Bot</span>
          </div>

        </div>

      </div>
    </section>
  );
}
