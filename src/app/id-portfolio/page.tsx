import React from 'react';
import Cover from '@/components/Cover';
import Manifesto from '@/components/Manifesto';
import Partners from '@/components/Partners';
import Capabilities from '@/components/Capabilities';
import SelectedBrands from '@/components/SelectedBrands';
import Websites from '@/components/Websites';
import SocialMedia from '@/components/SocialMedia';
import AIAutomation from '@/components/AIAutomation';
import WhyUs from '@/components/WhyUs';
import PortfolioContact from '@/components/PortfolioContact';

export const metadata = {
  title: 'INSPIDEV | Portfolio',
  description: 'Premium editorial portfolio for INSPIDEV — Ideas Become Brands.',
};

export default function IDPortfolioPage() {
  return (
    <main className="w-full min-h-screen text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-[#FAFAF8]">
      <Cover />
      <Manifesto />
      <Partners />
      <Capabilities />
      <SelectedBrands />
      <Websites />
      <SocialMedia />
      <AIAutomation />
      <WhyUs />
      <PortfolioContact />
    </main>
  );
}
