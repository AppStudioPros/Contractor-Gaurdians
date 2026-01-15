'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function TradeschoolHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-gold mb-4">
            Contractor Guardians Tradeschool Program (CGTP)
          </h1>
          <p className="text-2xl text-gold font-semibold mb-6">
            Building Trades. Building Homes. Building Futures.
          </p>
          <p className="text-lg text-slate leading-relaxed max-w-3xl mx-auto mb-8">
            A non-profit, construction-based tradeschool where students learn by
            building real homes and community projects—especially for veterans,
            people experiencing homelessness, and vulnerable families.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/6936eb35afa9e4c4750e6dbb_CGTP_Program_Overview_Business_Plan_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download className="w-5 h-5" />
              Download Full Program & Business Plan (PDF)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
