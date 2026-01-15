'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const summaryPoints = [
  'Students must complete documented hours on a live build to graduate.',
  'Graduates are placed into internships or apprenticeships with partner contractors and ministries.',
  'The model is built to solve three linked challenges: skilled labor shortages, lack of accessible training, and the growing need for affordable housing.',
];

export function ExecutiveSummary() {
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
          <h2 className="section-title">Executive Summary</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card">
            <p className="text-slate leading-relaxed mb-6">
              CGTP offers project-based training in carpentry, electrical,
              plumbing, HVAC, and jobsite safety. Students split their time
              between classroom, lab practice, and supervised fieldwork on active
              build sites.
            </p>
            <ul className="space-y-3 mb-6">
              {summaryPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
            <div className="card border-gold/30 bg-gold/5">
              <p className="text-slate">
                CGTP is designed as a repeatable blueprint: prove the model in
                Colorado, then replicate one high-impact campus per state in at
                least 15 states.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
