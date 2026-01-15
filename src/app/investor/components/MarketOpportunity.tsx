'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp } from 'lucide-react';

const marketData = [
  {
    label: 'U.S. Home Services',
    current: '$211.7B (2023)',
    future: '$893B by 2031',
    cagr: 'CAGR 19.6%',
  },
  {
    label: 'Online On-Demand',
    current: '$1.25B (2022)',
    future: '$3.64B by 2030',
    cagr: 'CAGR 14.3%',
  },
  {
    label: 'Global Lead Generation',
    current: '$9.26B (2024)',
    future: '$18.3B by 2032',
    cagr: '',
  },
  {
    label: 'Home Improvement',
    current: '$485B–$657B',
    future: 'Market size',
    cagr: '',
  },
];

export function MarketOpportunity() {
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
          <h2 className="section-title">Market Opportunity</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card card-hover text-center"
            >
              <TrendingUp className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
              <p className="text-gold font-semibold">{item.current}</p>
              <p className="text-slate text-sm">→ {item.future}</p>
              {item.cagr && (
                <p className="text-success text-sm mt-1">{item.cagr}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card border-gold/30 text-center">
            <p className="text-lg text-slate">
              Even <span className="text-gold font-bold">1–5%</span> share of U.S.
              home services ={' '}
              <span className="text-white font-bold">$2B–$10.6B</span> in potential
              lead-gen revenue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
