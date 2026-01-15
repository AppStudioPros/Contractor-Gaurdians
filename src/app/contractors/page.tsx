import type { Metadata } from 'next';
import { ContractorsHero } from './components/ContractorsHero';
import { ContractorForm } from './components/ContractorForm';

export const metadata: Metadata = {
  title: 'Contractors',
  description:
    'Pre-launch contractor sign-up for Contractor Guardians. Join our network of verified, trusted professionals.',
};

export default function ContractorsPage() {
  return (
    <>
      <ContractorsHero />
      <section className="section section-steel">
        <div className="container-lg max-w-3xl">
          <ContractorForm />
        </div>
      </section>
    </>
  );
}
