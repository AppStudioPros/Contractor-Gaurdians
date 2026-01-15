import type { Metadata } from 'next';
import { AffiliatesHero } from './components/AffiliatesHero';
import { ValuePropsSection } from './components/ValuePropsSection';
import { AffiliateForm } from './components/AffiliateForm';

export const metadata: Metadata = {
  title: 'Affiliates',
  description:
    'Partner with Contractor Guardians. Connect your brand with our trusted contractor network.',
};

export default function AffiliatesPage() {
  return (
    <>
      <AffiliatesHero />
      <ValuePropsSection />
      <section className="section section-dark">
        <div className="container-lg max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="section-title">Become an Affiliate Partner</h2>
            <p className="text-slate">
              Tell us a bit about your business and we'll get back to you shortly.
            </p>
          </div>
          <AffiliateForm />
        </div>
      </section>
    </>
  );
}
