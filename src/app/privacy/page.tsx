import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Contractor Guardians',
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container-lg max-w-4xl">
        <div className="gold-line mb-6" />
        <h1 className="text-4xl md:text-5xl font-headline text-gold mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-gold max-w-none">
          <p className="text-slate text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-slate">
            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account,
                submit a form, contact us, or otherwise communicate with us. This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company or business information</li>
                <li>Messages and communications you send to us</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services and programs</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-gold mb-4">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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
