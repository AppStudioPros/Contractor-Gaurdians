import type { Metadata } from 'next';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Contractor Guardians. We\'re here to help homeowners, contractors, and investors.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section section-steel">
        <div className="container-lg">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
