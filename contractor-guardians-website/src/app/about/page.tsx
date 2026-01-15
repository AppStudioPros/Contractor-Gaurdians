import type { Metadata } from 'next';
import { AboutHero } from './components/AboutHero';
import { MissionSection } from './components/MissionSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Contractor Guardians - a faith-based construction network serving veterans, families, and communities across America.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <WhatWeDoSection />
      <TeamSection />
      <CTASection
        title="Ready to Partner with Us?"
        description="Whether you're a homeowner, contractor, or investor, we're here to help you succeed."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'View Programs', href: '/tradeschool' }}
        variant="centered"
      />
    </>
  );
}
