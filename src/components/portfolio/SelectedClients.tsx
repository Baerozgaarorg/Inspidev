import React from 'react';
import Image from 'next/image';

const CLIENTS = [
  { name: 'Zyvanta Media', type: 'text', colSpan: 'col-span-12 md:col-span-4' },
  { name: 'Baerozgaar', src: '/logo/Baerozgar.jpg', colSpan: 'col-span-12 md:col-span-3' },
  { name: 'ChadMax', src: '/logo/chadmaxx.png', colSpan: 'col-span-12 md:col-span-5' },
  { name: 'Niwasify', src: '/logo/Niwasify 2.jpeg', colSpan: 'col-span-12 md:col-span-4', offset: 'md:mt-24' },
  { name: 'KDR Group', src: '/logo/KDR group.png', colSpan: 'col-span-12 md:col-span-4' },
  { name: 'RD Realtors', src: '/logo/R.D realtors.png', colSpan: 'col-span-12 md:col-span-4', offset: 'md:mt-12' },
  { name: 'St John\'s English School', src: '/logo/St. John\'s English School.png', colSpan: 'col-span-12 md:col-span-6', offset: 'md:mt-16' },
  { name: 'Sanskriti Foundation School', src: '/logo/Sanskriti Foundation School.png', colSpan: 'col-span-12 md:col-span-6' },
  { name: 'Swadist Gainz', src: '/logo/Swadist gainz.png', colSpan: 'col-span-12 md:col-span-8 md:col-start-3', offset: 'md:mt-32 md:mb-16' }
];

export default function SelectedClients() {
  return (
    <section className="w-full py-32 px-12 md:px-24 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-32 flex flex-col items-center text-center">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#777777] mb-6 block">
            03 — SELECTED CLIENTS
          </span>
          <h2 className="text-[40px] md:text-[60px] leading-[1] font-medium tracking-tight text-[#111111] max-w-2xl">
            Trusted by visionaries.
          </h2>
        </div>

        {/* Artistic Gallery Composition */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-24 items-center">
          {CLIENTS.map((client, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-center ${client.colSpan} ${client.offset || ''}`}
            >
              {client.type === 'text' ? (
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#F4F3F0] p-8">
                  <h3 className="text-[28px] md:text-[40px] font-medium tracking-tighter text-[#111111] text-center">
                    {client.name}
                  </h3>
                </div>
              ) : (
                <div className="relative w-full group">
                  <div className="absolute inset-0 bg-[#F4F3F0] scale-95 group-hover:scale-100 transition-transform duration-500 ease-out z-0" />
                  <div className="relative z-10 w-full aspect-square md:aspect-[4/3] flex items-center justify-center p-12 mix-blend-multiply">
                    <img 
                      src={client.src} 
                      alt={client.name} 
                      className="max-w-[80%] max-h-[80%] object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                    />
                  </div>
                </div>
              )}
              <span className="mt-6 text-[11px] font-medium tracking-widest uppercase text-[#777777]">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
