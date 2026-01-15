'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const values = [
  { name: 'Service', desc: 'Every project gives back to the community.' },
  { name: 'Excellence', desc: 'Training aligned with industry and licensing standards.' },
  { name: 'Opportunity', desc: 'Focus on low-income, under-employed, and non-traditional students.' },
  { name: 'Accountability', desc: 'Transparent outcomes for jobs, wages, and housing impact.' },
  { name: 'Safety', desc: 'OSHA-aligned culture on every jobsite.' },
];

export function MissionVision() {
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
          <h2 className="section-title">Mission, Vision & Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">Mission</h3>
            <p className="text-slate">
              To provide hands-on, affordable trades education that builds stable
              careers for students while building safe, dignified housing for
              communities in need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">Vision</h3>
            <p className="text-slate">
              A national network of Contractor Guardians Tradeschools where each
              new class of skilled tradespeople helps create new homes, new
              community spaces, and new opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">Core Values</h3>
            <ul className="space-y-2">
              {values.map((value) => (
                <li key={value.name} className="text-sm">
                  <span className="text-gold font-semibold">{value.name}</span>
                  <span className="text-slate"> – {value.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
