'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-bg" />
      
      {/* Shield Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-40 opacity-5">
        <Shield className="w-full h-full text-gold" />
      </div>
      <div className="absolute bottom-20 right-10 w-48 h-60 opacity-5">
        <Shield className="w-full h-full text-gold" />
      </div>

      <div className="container-lg relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline text-gold mb-4"
            >
              Contractor
              <br />
              Guardians
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-white font-medium mb-6"
            >
              Verified Contractors. Protected Projects — Confidence for
              Homeowners, Fairness for Contractors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Contractor Guardians aims to protect consumers from fraudulent
              practices that lead to millions in losses annually in the U.S.
              Working with trusted partners nationwide, we help build, repair,
              and provide 2,000+ homes each year — while creating opportunities
              for the next generation through trade schools and vocational
              training programs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Our platform uses digital and smart contracts, an escrow system,
              and a backup crew service to ensure projects are completed
              efficiently and securely.
            </motion.p>

            {/* App Store Buttons (Visual Only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex items-center gap-3 bg-guardian-graphite border border-white/10 rounded-xl px-4 py-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-guardian-graphite border border-white/10 rounded-xl px-4 py-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate">GET IT ON</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </div>

              <Link href="/contact" className="btn-primary">
                Partner with Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <Image
                src="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b7821e3d1e11cd19a663a9_header.png"
                alt="Contractor Guardians App"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
