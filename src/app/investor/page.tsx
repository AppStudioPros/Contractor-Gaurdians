import type { Metadata } from 'next';
import { InvestorHero } from './components/InvestorHero';
import { ComparisonSection } from './components/ComparisonSection';
import { MarketOpportunity } from './components/MarketOpportunity';
import { ColoradoPlan } from './components/ColoradoPlan';
import { InvestmentAsk } from './components/InvestmentAsk';
import { PitchDeckCarousel } from './components/PitchDeckCarousel';
import { InvestorContact } from './components/InvestorContact';

export const metadata: Metadata = {
  title: 'Investor',
  description:
    'Investment opportunity in Contractor Guardians. We\'re rebuilding the home services industry with trust, transparency, and technology.',
};

export default function InvestorPage() {
  return (
    <>
      <InvestorHero />
      <ComparisonSection />
      <MarketOpportunity />
      <ColoradoPlan />
      <InvestmentAsk />
      <PitchDeckCarousel />
      <InvestorContact />
    </>
  );
}
