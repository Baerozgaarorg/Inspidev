import React from 'react';

const BRANDS = [
  { name: 'Baerozgaar', src: '/logo/Baerozgar.jpg' },
  { name: 'ChadMax', src: '/logo/chadmaxx.png' },
  { name: 'KDR Group', src: '/logo/KDR group.png' },
  { name: 'Niwasify', src: '/logo/Niwasify 2.jpeg' },
  { name: 'RD Realtors', src: '/logo/R.D realtors.png' },
  { name: 'St John\'s English School', src: '/logo/St. John\'s English School.png' },
  { name: 'Sanskriti Foundation School', src: '/logo/Sanskriti Foundation School.png' },
  { name: 'Swadist Gainz', src: '/logo/Swadist gainz.png' },
];

export default function SelectedBrands() {
  return (
    <section className="w-full py-32 px-6 md:px-24 bg-light-texture relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="mb-24 flex justify-between items-end">
          <h2 className="text-[40px] md:text-[60px] leading-[1] font-black tracking-tight text-[#FF1A1A] uppercase">
            Visionaries We&apos;ve Worked With
          </h2>
          <span className="font-bold tracking-[0.2em] text-[12px] uppercase text-[#777777] hidden md:block">
            03 — OUR CLIENTS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#EAE9E4] border border-[#EAE9E4]">
          {BRANDS.map((brand, i) => (
            <div 
              key={i} 
              className="bg-white aspect-square flex items-center justify-center p-8 md:p-12 hover:bg-[#FAFAF8] transition-colors duration-300"
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="max-w-[70%] max-h-[70%] object-contain" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
