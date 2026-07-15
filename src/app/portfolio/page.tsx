import React from 'react';

// We will import the 12 sections here as we build them.
import Cover from '@/components/portfolio/Cover';
import Manifesto from '@/components/portfolio/Manifesto';
import About from '@/components/portfolio/About';
import Capabilities from '@/components/portfolio/Capabilities';
import SelectedClients from '@/components/portfolio/SelectedClients';
import BrandIdentity from '@/components/portfolio/BrandIdentity';
import Websites from '@/components/portfolio/Websites';
import SocialMedia from '@/components/portfolio/SocialMedia';
import Workflow from '@/components/portfolio/Workflow';
import Process from '@/components/portfolio/Process';
import WhyUs from '@/components/portfolio/WhyUs';
import Contact from '@/components/portfolio/Contact';

export const metadata = {
  title: 'INSPIDEV | Premium Portfolio',
  description: 'A world-class premium portfolio for INSPIDEV creative technology agency.',
};

export default function PortfolioPage() {
  return (
    <main 
      className="min-h-screen w-full font-sans antialiased text-[#111111]"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      {/* 
        This wrapper strictly sets the light theme and overrides any global dark styles.
        We will render the 12 sections sequentially below. 
      */}
      
      <Cover />
      <Manifesto />
      <About />
      <Capabilities />
      <SelectedClients />
      <BrandIdentity />
      <Websites />
      <SocialMedia />
      <Workflow />
      <Process />
      <WhyUs />
      <Contact />
      
    </main>
  );
}
