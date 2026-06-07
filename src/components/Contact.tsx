'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [projectType, setProjectType] = useState('Web Dev');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    tl.fromTo(
      '.contact-fade',
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const projectOptions = ['Web Dev', 'Video Editing', 'Motion Graphics', 'Branding', 'Other'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    const data = new FormData(formRef.current);
    // Append chosen project type (not a real input so add manually)
    data.append('projectType', projectType);

    try {
      const res = await fetch('https://formspree.io/f/xojzerey', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        formRef.current.reset();
        setProjectType('Web Dev');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-off-black text-off-white select-none grain-bg border-b border-neutral-900 overflow-hidden"
    >
      {/* Decorative backdrop gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange-dark/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-burnt-orange/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Industrial framing grid */}
      <div className="absolute inset-x-8 top-0 bottom-0 border-x border-neutral-900/60 pointer-events-none mx-6 md:mx-12" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4 block contact-fade">
              [ TRANSMISSION INITIATION ]
            </span>
            <h2 className="text-4xl md:text-6xl font-roxen uppercase tracking-tighter leading-none contact-fade">
              HAVE A PROJECT IN MIND?<br />
              <span className="text-brand-orange">LET&apos;S BUILD IT.</span>
            </h2>
            <p className="mt-8 text-neutral-400 font-after text-sm md:text-base leading-relaxed max-w-md opacity-80 contact-fade">
              Send your blueprint through the cyber matrix. Whether it is a cinematic brand reel, an experiential 3D website, or a custom creative-tech venture, we are ready to craft a masterpiece.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 contact-fade font-mono text-[10px] tracking-wider text-neutral-500 uppercase space-y-4">
            <div>
              <span className="text-neutral-600">[ DIRECT COORD ]</span><br />
              <a href="mailto:notbaerozgaar@gmail.com" className="text-brand-orange hover:underline font-roxen text-sm mt-1 block">
                NOTBAEROZGAAR@GMAIL.COM
              </a>
            </div>
            <div>
              <span className="text-neutral-600">[ PHYSICAL GRID ]</span><br />
              <span className="text-off-white font-after text-xs mt-1 block">INDIA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 contact-fade">
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-10">

            {/* Hidden field so Formspree knows the destination */}
            <input type="hidden" name="_subject" value="New INSPIDEV Inquiry" />

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="YOUR NAME"
                className="brutalist-input uppercase font-roxen placeholder:text-neutral-700 tracking-wider"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="YOUR EMAIL ADDR"
                className="brutalist-input uppercase font-roxen placeholder:text-neutral-700 tracking-wider"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-4">
              <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                [ SELECT PROJECT TYPE ]
              </label>
              <div className="flex flex-wrap gap-3">
                {projectOptions.map((option) => {
                  const isActive = projectType === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setProjectType(option)}
                      className={`px-4 py-2 text-xs font-roxen uppercase border transition-all duration-300 ${
                        isActive
                          ? 'border-brand-orange bg-brand-orange text-off-black orange-glow'
                          : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                required
                rows={4}
                id="message"
                name="message"
                placeholder="TELL US ABOUT THE VENTURE"
                className="brutalist-input uppercase font-roxen placeholder:text-neutral-700 tracking-wider resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group flex items-center justify-between w-full md:w-auto md:min-w-64 px-6 py-4 bg-transparent border-2 border-brand-orange text-brand-orange font-roxen uppercase tracking-wider text-sm transition-all duration-300 relative overflow-hidden active:scale-95 disabled:opacity-60"
            >
              <div className="absolute inset-0 bg-brand-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-off-black transition-colors duration-300 flex items-center gap-2">
                {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT BROADCAST'}
              </span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:text-off-black group-hover:rotate-45 transition-all duration-300" />
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <p className="font-mono text-xs text-brand-orange tracking-widest uppercase animate-pulse">
                ✓ TRANSMISSION RECEIVED — WE WILL BE IN TOUCH.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-500 tracking-widest uppercase">
                ✗ TRANSMISSION FAILED — EMAIL US DIRECTLY AT NOTBAEROZGAAR@GMAIL.COM
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
