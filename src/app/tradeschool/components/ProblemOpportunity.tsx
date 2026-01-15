'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ProblemOpportunity() {
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
          <h2 className="section-title">Problem & Opportunity</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">The Workforce Gap</h3>
            <p className="text-slate text-sm leading-relaxed">
              Construction industries nationwide face a major shortage of skilled
              tradespeople as experienced workers retire and fewer young people
              enter the trades. Many adults are not well-served by four-year
              college pathways but have no clear, affordable on-ramp into the
              trades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">The Housing Crisis</h3>
            <p className="text-slate text-sm leading-relaxed">
              Communities across the U.S. are struggling with housing
              affordability and rising homelessness. Veterans and vulnerable
              families are hit especially hard, while non-profits and ministries
              often lack cost-effective ways to build or rehab housing stock.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card border-gold/30"
          >
            <h3 className="text-xl font-headline text-gold mb-4">The CGTP Opportunity</h3>
            <p className="text-slate text-sm leading-relaxed">
              CGTP turns housing need into a training platform. Students learn on
              real projects, partner organizations get lower-cost builds under
              licensed supervision, and communities gain both housing units and a
              new pipeline of skilled workers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
