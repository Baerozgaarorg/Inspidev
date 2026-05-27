'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "BAEROZGAAR",
    category: "CREATIVE AGENCY",
    logo: "/logo/Baerozgar.jpg",
    bg: "/website background/Baerozgar.png",
    link: "https://baerozgaarorg.github.io/"
  },
  {
    title: "SWADIST GAINZ",
    category: "HEALTH & FITNESS",
    logo: "/logo/Swadist gainz.png",
    bg: "/website background/Swadist gainz.png",
    link: "https://swadist-gainz.netlify.app/"
  },
  {
    title: "RD REALTORS",
    category: "REAL ESTATE",
    logo: "/logo/R.D realtors.png",
    bg: "/website background/R.D realtors.png",
    link: "https://rd-realotrs.netlify.app/"
  },
  {
    title: "CHADMAX",
    category: "E-COMMERCE",
    logo: "/logo/chadmaxx.png",
    bg: "/website background/chadmaxx.png",
    link: "https://chadmax.netlify.app/"
  },
  {
    title: "ST. JOHN’S ENGLISH SCHOOL",
    category: "EDUCATION",
    logo: "/logo/St. John's English School.png",
    bg: "/website background/St. John's English School.png",
    link: "https://st-johns-english-school.netlify.app"
  },
  {
    title: "KDR GROUP",
    category: "CORPORATE ENTERPRISE",
    logo: "/logo/KDR group.png",
    bg: "/website background/R.D realtors.png", // Fallback
    link: "https://kdr-group.netlify.app"
  },
  {
    title: "SANSKRITI FOUNDATION SCHOOL",
    category: "EDUCATION",
    logo: "/logo/Sanskriti Foundation School.png",
    bg: "/website background/Sanskriti Foundation School.png",
    link: "https://sanskriti-foundation-school.netlify.app"
  }
];

export default function WebsitesPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance fade-in from the overlay transition
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' });

    // Parallax & Reveal for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      const bg = card.querySelector('.project-bg');
      
      // Parallax background
      if (bg) {
        gsap.fromTo(bg, 
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // Entrance fade
      gsap.fromTo(card,
        { opacity: 0, y: 100, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });
  }, []);

  const handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    gsap.to(target.querySelector('.project-bg'), { scale: 1.05, filter: 'grayscale(0%) blur(2px)', mixBlendMode: 'normal', duration: 1.5, ease: 'power2.out' });
    gsap.to(target.querySelector('.project-logo'), { scale: 1.1, opacity: 1, filter: 'drop-shadow(0px 0px 20px rgba(255,85,0,0.8))', duration: 0.5 });
    gsap.to(target.querySelector('.project-title'), { color: '#ff5500', x: 20, duration: 0.5 });
    gsap.to(target.querySelector('.overlay-layer'), { opacity: 0.2, duration: 0.5 });
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    gsap.to(target.querySelector('.project-bg'), { scale: 1, filter: 'grayscale(100%) blur(0px)', mixBlendMode: 'screen', duration: 1, ease: 'power2.out' });
    gsap.to(target.querySelector('.project-logo'), { scale: 1, opacity: 0.7, filter: 'drop-shadow(0px 0px 0px rgba(255,85,0,0))', duration: 0.5 });
    gsap.to(target.querySelector('.project-title'), { color: '#ffffff', x: 0, duration: 0.5 });
    gsap.to(target.querySelector('.overlay-layer'), { opacity: 0.8, duration: 0.5 });
  };

  const handleBack = () => {
    // Cinematic exit
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'fixed inset-0 bg-off-black z-[99999] pointer-events-none';
    transitionOverlay.style.opacity = '0';
    document.body.appendChild(transitionOverlay);

    gsap.to(transitionOverlay, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push('/');
        setTimeout(() => transitionOverlay.remove(), 1000);
      }
    });
  };

  return (
    <LenisProvider>
      <div className="noise-overlay" />
      <CustomCursor />

      <main ref={containerRef} className="relative w-full min-h-screen bg-off-black text-off-white select-none pb-32 opacity-0">
        
        {/* Header / Nav */}
        <header className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference flex justify-between items-center">
          <div onClick={handleBack} className="cursor-pointer font-mono text-sm tracking-widest text-brand-orange hover:text-off-white transition-colors">
            &lt; BACK TO MAIN
          </div>
          <div className="font-mono text-[10px] text-neutral-500 tracking-widest">[ ARTIFACTS DIRECTORY ]</div>
        </header>

        {/* Hero Title */}
        <section className="relative w-full h-[60vh] flex items-end justify-center pb-20 border-b border-neutral-900 px-6">
          <div className="absolute inset-0 bg-radial-gradient(circle at 50% 100%, rgba(255,85,0,0.1), transparent 60%)" />
          <h1 className="text-6xl md:text-[10vw] font-roxen uppercase tracking-tighter leading-[0.8] text-center drop-shadow-2xl">
            DIGITAL <span className="text-brand-orange">ARTIFACTS</span>
          </h1>
        </section>

        {/* Projects List */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-20 flex flex-col gap-12 md:gap-32">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className="project-card relative w-full aspect-[4/5] md:aspect-[21/9] border border-neutral-800 overflow-hidden group bg-neutral-950"
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              {/* Parallax Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div 
                  className="project-bg absolute inset-0 w-full h-full bg-cover bg-center opacity-40 filter grayscale mix-blend-screen scale-100 transform origin-center"
                  style={{ backgroundImage: `url('${project.bg}')` }}
                />
              </div>

              {/* Overlays */}
              <div className="overlay-layer absolute inset-0 bg-gradient-to-t from-off-black via-neutral-950/60 to-transparent opacity-80" />
              <div className="absolute inset-0 border border-neutral-700/20" />

              {/* Content Grid */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
                
                {/* Top row: Number and Logo */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs md:text-sm text-brand-orange tracking-widest">
                    [ 0{idx + 1} ]
                  </span>
                  
                  {/* Logo */}
                  <div 
                    className="relative w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm cursor-pointer pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.link) {
                        window.open(project.link, '_blank');
                      }
                    }}
                  >
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="project-logo object-cover opacity-70 filter drop-shadow-[0_0_0px_rgba(255,85,0,0)]"
                    />
                  </div>
                </div>

                {/* Bottom row: Title and Category */}
                <div className="mt-auto">
                  <p className="font-mono text-[10px] md:text-xs text-neutral-400 tracking-[0.3em] uppercase mb-2">
                    // {project.category}
                  </p>
                  <h2 className="project-title text-4xl md:text-7xl font-roxen uppercase tracking-tighter leading-none text-off-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    {project.title}
                  </h2>
                </div>

              </div>
            </div>
          ))}
        </section>

      </main>
    </LenisProvider>
  );
}
