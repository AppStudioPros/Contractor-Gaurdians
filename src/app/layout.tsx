import type { Metadata, Viewport } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://contractorguardians.com'),
  title: {
    default: 'Contractor Guardians | Verified Contractors. Protected Projects.',
    template: '%s | Contractor Guardians',
  },
  description:
    'Contractor Guardians protects homeowners and empowers contractors with verified professionals, digital contracts, escrow payments, and project monitoring.',
  keywords: [
    'contractor',
    'home improvement',
    'verified contractors',
    'home services',
    'construction',
    'renovation',
    'escrow',
    'smart contracts',
  ],
  authors: [{ name: 'Contractor Guardians' }],
  creator: 'Contractor Guardians',
  publisher: 'Contractor Guardians',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Contractor Guardians',
    title: 'Contractor Guardians | Verified Contractors. Protected Projects.',
    description:
      'Contractor Guardians protects homeowners and empowers contractors with verified professionals, digital contracts, escrow payments, and project monitoring.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contractor Guardians',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Guardians | Verified Contractors. Protected Projects.',
    description:
      'Contractor Guardians protects homeowners and empowers contractors with verified professionals, digital contracts, escrow payments, and project monitoring.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-guardian-black focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
