'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const investmentTiers = [
  {
    investment: '$500K',
    marketShare: '2–5%',
    gmv: '$220M – $560M',
    revenue5: '$11M – $28M',
    revenue10: '$25M – $50M',
  },
  {
    investment: '$1M',
    marketShare: '5–8%',
    gmv: '$560M – $900M',
    revenue5: '$28M – $45M',
    revenue10: '$60M – $100M',
  },
  {
    investment: '$2M',
    marketShare: '8–12%',
    gmv: '$900M – $1.34B',
    revenue5: '$45M – $67M',
    revenue10: '$90M – $150M',
  },
  {
    investment: '$5M',
    marketShare: '15–25%',
    gmv: '$1.68B – $2.75B',
    revenue5: '$84M – $138M',
    revenue10: '$180M – $310M',
    highlighted: true,
  },
];

const whyColorado = [
  '$11.2B market ripe for disruption',
  'Angi, Houzz, Porch & Thumbtack overcharge & under-deliver',
  'Undercuts competition by 50%',
  'Guardian Guarantee builds trust & repeat use',
];

export function ColoradoPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Phase 1 – Colorado Market Plan (Years 1–3)</h2>
          <p className="text-xl text-slate mt-4">
            <strong className="text-gold">TAM (Colorado Home Services):</strong> ~$11.2B
            annually
          </p>
          <p className="text-lg text-slate">
            <strong>Goal:</strong> Capture 5–25% market share within 3 years.
          </p>
        </motion.div>

        {/* Investment Tiers Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="overflow-x-auto mb-12"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-gold text-guardian-black">
                <th className="px-4 py-3 text-left font-bold">Investment</th>
                <th className="px-4 py-3 text-left font-bold">Market Share (2–3 yrs)</th>
                <th className="px-4 py-3 text-left font-bold">GMV</th>
                <th className="px-4 py-3 text-left font-bold">Annual Revenue (5%)</th>
                <th className="px-4 py-3 text-left font-bold">Revenue (10% + Subs/Ads)</th>
              </tr>
            </thead>
            <tbody>
              {investmentTiers.map((tier, index) => (
                <tr
                  key={tier.investment}
                  className={`border-b border-white/10 ${
                    tier.highlighted
                      ? 'bg-gold/10'
                      : index % 2 === 0
                      ? 'bg-guardian-graphite'
                      : 'bg-guardian-steel'
                  }`}
                >
                  <td className="px-4 py-4 font-bold text-gold">{tier.investment}</td>
                  <td className="px-4 py-4 text-slate">{tier.marketShare}</td>
                  <td className="px-4 py-4 text-slate">{tier.gmv}</td>
                  <td className="px-4 py-4 text-slate">{tier.revenue5}</td>
                  <td className="px-4 py-4 text-white font-semibold">{tier.revenue10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Why Colorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card">
            <h3 className="text-xl font-headline text-gold mb-4 text-center">
              Why Colorado First?
            </h3>
            <ul className="space-y-3">
              {whyColorado.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
