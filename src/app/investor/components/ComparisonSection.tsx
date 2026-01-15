'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

const competition = [
  'Limited contractor listings',
  'Pay-per-lead models that drain contractor profits',
  'Little to no vetting of contractors or clients',
  'Minimal protection for homeowners',
  'No guarantees on work quality or project completion',
];

const ourOfferings = [
  { text: 'Consulting*', desc: 'Guidance through the entire project process' },
  { text: 'Awareness & Education', desc: 'Keeping clients and contractors aligned' },
  { text: 'Evaluation of Work', desc: 'Independent project quality checks' },
  { text: 'Dispute Resolution*', desc: 'Quick, fair mediation' },
  { text: 'Permitting*', desc: 'Assistance with required permits' },
  { text: 'Qualification', desc: 'Every contractor & homeowner vetted' },
  { text: 'Insurance Validation', desc: 'Liability coverage confirmed' },
  { text: 'Inspections*', desc: 'Independent inspections when needed' },
  { text: 'Live Project Cameras*', desc: 'Real-time monitoring' },
  { text: 'Timelines & Schedule Sheets', desc: 'Keeping projects on track' },
  { text: 'Smart Contracts', desc: 'Written by AI + Attorneys' },
  { text: 'Material & Supply Discounts', desc: 'Exclusive savings' },
  { text: 'Backup Crews*', desc: 'Trusted subs to finish work' },
];

export function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Competition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h2 className="text-2xl font-headline text-gold mb-6 text-center">
              Angi's List, Houzz & Porch
            </h2>
            <ul className="space-y-4">
              {competition.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-danger mt-0.5 flex-shrink-0" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Offerings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card border-gold/30"
          >
            <h2 className="text-2xl font-headline text-gold mb-6 text-center">
              What We Offer
            </h2>
            <ul className="space-y-3">
              {ourOfferings.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-white">
                    <strong>{item.text}:</strong>{' '}
                    <span className="text-slate">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate mt-6 text-center">* Denotes Optional</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
