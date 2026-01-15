'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const highlights = [
  'Hands-on construction trades training tied to real projects.',
  'Housing units and facility upgrades delivered for veterans and vulnerable families.',
  'A clear pathway from classroom to internship, apprenticeship, and licensing.',
];

export function ProgramOverview() {
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
          <h2 className="section-title">Program & Business Plan Overview</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card">
            <p className="text-lg text-slate leading-relaxed mb-6">
              The Contractor Guardians Tradeschool Program (CGTP) is a non-profit
              tradeschool that trains students by having them build real homes and
              community spaces. The Colorado flagship campus is the first site in
              a model designed to expand to at least 15 states.
            </p>
            <p className="text-slate mb-6">
              CGTP combines trades education, workforce development, and housing
              production in a single, scalable framework:
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
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
