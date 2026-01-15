import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Investor', href: '/investor' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Contractors', href: '/contractors' },
      { label: 'Affiliates', href: '/affiliates' },
      { label: 'Tradeschool', href: '/tradeschool' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-guardian-graphite border-t border-white/10">
      {/* Main Footer */}
      <div className="container-lg py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://customer-assets.emergentagent.com/job_webrebuild-1/artifacts/fv63libr_CG%20logo%20no%20bg.png"
                alt="Contractor Guardians"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span className="font-headline text-xl text-white">
                CONTRACTOR GUARDIANS
              </span>
            </Link>
            <p className="text-slate text-sm leading-relaxed max-w-sm">
              Protecting homeowners and empowering contractors with verified
              professionals, digital contracts, escrow payments, and real-time
              project monitoring.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@contractorguardians.com"
                className="flex items-center gap-3 text-slate hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold" />
                info@contractorguardians.com
              </a>
              <a
                href="tel:720-276-0797"
                className="flex items-center gap-3 text-slate hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" />
                (720) 276-0797
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-headline text-lg text-gold mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-lg py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} Contractor Guardians. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
