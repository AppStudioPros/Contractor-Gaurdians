'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';

const useOfFunds = [
  'Technology Development (platform, escrow system, AI build)',
  'Contractor Onboarding & Vetting (background checks, enrollment)',
  'Marketing & Brand Awareness (Colorado statewide push)',
  'Escrow Reserves (backing the Guardian Guarantee)',
];

export function InvestmentAsk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-dark">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Investment Opportunity & ROI</h2>
          <p className="text-2xl text-gold font-semibold mt-4">
            Funding Goal: $500K – $5M
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-6">Use of Funds</h3>
            <ul className="space-y-4">
              {useOfFunds.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ROI Potential */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-6">Investor ROI Potential</h3>
            <div className="space-y-4">
              <p className="text-slate">
                Entry at <span className="text-gold font-bold">$500K</span> → Path to{' '}
                <span className="text-white font-bold">$25M – $50M</span> annual revenue.
              </p>
              <p className="text-slate">
                Full <span className="text-gold font-bold">$5M push</span> → Path to{' '}
                <span className="text-white font-bold">$180M – $310M</span> annual revenue
                within 3 years.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card border-gold/30 flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-gold flex-shrink-0" />
            <p className="text-slate">
              A <span className="text-gold font-bold">$500K – $5M</span> investment in
              Colorado sets the stage for national expansion, with revenue potential
              ranging from{' '}
              <span className="text-white font-bold">$25M to $310M</span> annually in
              just 3 years.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
