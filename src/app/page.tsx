import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  AppShowcaseSection,
  ScreenshotsSection,
  VideoSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppShowcaseSection />
      <ScreenshotsSection />
      <VideoSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Transform Your Project Experience?"
        description="Join thousands of homeowners and contractors who trust Contractor Guardians for their projects. Get started today!"
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />
    </>
  );
}
