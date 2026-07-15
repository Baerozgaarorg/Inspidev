import React from 'react';

const WORKFLOW = [
  'Lead',
  'Website',
  'Automation',
  'CRM',
  'Follow Up',
  'Customer'
];

export default function Workflow() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="mb-32 text-center">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            07 — AI AUTOMATION
          </span>
          <h2 className="text-[40px] md:text-[60px] leading-[1.1] font-medium tracking-tight text-[#111111]">
            Seamless operations.<br />Zero friction.
          </h2>
        </div>

        {/* Elegant Workflow Visualization */}
        <div className="w-full max-w-3xl flex flex-col items-center">
          {WORKFLOW.map((step, index) => (
            <React.Fragment key={step}>
              <div className="text-[24px] md:text-[32px] font-medium tracking-tight text-[#111111] py-4">
                {step}
              </div>
              
              {index !== WORKFLOW.length - 1 && (
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
