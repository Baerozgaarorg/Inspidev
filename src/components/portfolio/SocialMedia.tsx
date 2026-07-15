import React from 'react';

export default function SocialMedia() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-32">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            06 — CONTENT & SOCIAL
          </span>
          <h2 className="text-[50px] md:text-[80px] leading-[1] font-medium tracking-tight text-[#111111] max-w-3xl">
            Algorithm domination.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Case Study 1 */}
          <div className="flex flex-col">
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#EAE9E4] to-[#F4F3F0] rounded-[40px] flex items-center justify-center p-8 mb-8 border border-[#EAE9E4] shadow-sm relative overflow-hidden">
              {/* Abstract Phone Mockup */}
              <div className="w-[65%] aspect-[9/19] bg-[#FFFFFF] rounded-[32px] shadow-xl border-[6px] border-[#F4F3F0] relative overflow-hidden flex flex-col">
                <div className="flex-1 bg-gradient-to-b from-[#D4A5FF]/20 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-[20px] font-medium text-[#111111]">NationalPC</h4>
                  <p className="text-[10px] text-[#777777] uppercase tracking-widest mt-2">Content Strategy</p>
                </div>
              </div>
            </div>
            <h3 className="text-[24px] font-medium tracking-tight text-[#111111] mb-4">
              NationalPC
            </h3>
            <p className="text-[14px] text-[#777777] font-light leading-[1.6]">
              A high-retention content strategy focused on tech enthusiasm. We turned complex hardware reviews into cinematic, digestible short-form media.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="flex flex-col md:mt-32">
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#EAE9E4] to-[#F4F3F0] rounded-[40px] flex items-center justify-center p-8 mb-8 border border-[#EAE9E4] shadow-sm relative overflow-hidden">
              {/* Abstract Phone Mockup */}
              <div className="w-[65%] aspect-[9/19] bg-[#FFFFFF] rounded-[32px] shadow-xl border-[6px] border-[#F4F3F0] relative overflow-hidden flex flex-col">
                <div className="flex-1 bg-gradient-to-b from-[#66CCFF]/20 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-[20px] font-medium text-[#111111]">32Smiles</h4>
                  <p className="text-[10px] text-[#777777] uppercase tracking-widest mt-2">Brand Awareness</p>
                </div>
              </div>
            </div>
            <h3 className="text-[24px] font-medium tracking-tight text-[#111111] mb-4">
              32Smiles
            </h3>
            <p className="text-[14px] text-[#777777] font-light leading-[1.6]">
              Elevating a dental practice into a luxury lifestyle brand through pristine editorial photography and educational motion graphics.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
