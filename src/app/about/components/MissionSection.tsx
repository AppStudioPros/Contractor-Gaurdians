'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function MissionSection() {
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
          <h2 className="section-title">Who We Are</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card p-8 md:p-12">
            <p className="text-lg text-slate leading-relaxed mb-6">
              Contractor Guardians is a construction and technology network
              focused on protecting homeowners, empowering contractors, and
              strengthening communities. We connect vetted, values-driven
              builders with mission-aligned projects—prioritizing veterans,
              vulnerable families, and those rebuilding after hardship.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              Using modern tools, transparent processes, and education, we keep
              every project accountable from the first estimate to the final
              inspection.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
