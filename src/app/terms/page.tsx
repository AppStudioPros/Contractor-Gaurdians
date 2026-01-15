import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Contractor Guardians',
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container-lg max-w-4xl">
        <div className="gold-line mb-6" />
        <h1 className="text-4xl md:text-5xl font-headline text-gold mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-gold max-w-none">
          <p className="text-slate text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-slate">
            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the Contractor Guardians website and services, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">2. Description of Services</h2>
              <p className="leading-relaxed">
                Contractor Guardians provides a platform connecting homeowners with verified contractors,
                along with tools for project management, digital contracts, and secure payment processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">4. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Contractor Guardians shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to use
                the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">5. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any
                material changes by posting the new terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:info@contractorguardians.com" className="text-gold hover:text-gold-hover">
                  info@contractorguardians.com
                </a>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-gold hover:text-gold-hover">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
