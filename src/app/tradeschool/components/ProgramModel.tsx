'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BookOpen, Wrench } from 'lucide-react';

const whoWeServe = [
  'Ages 17+ with a diploma, GED, or equivalent.',
  'Veterans transitioning into civilian careers.',
  'Justice-impacted individuals seeking a fresh start.',
  'Career changers and under-employed adults.',
  'Low-income and underserved communities.',
];

const programStructure = [
  '9–12 month intensive program in Colorado.',
  'Mix of classroom, lab/shop, and on-site construction hours.',
  'Primary trade track plus shared foundation courses.',
  'Designed to support 60–100 students per year.',
];

const coreTrades = [
  'General Construction & Carpentry.',
  'Electrical (residential/light commercial – apprentice level).',
  'Plumbing (residential/light commercial – apprentice level).',
  'HVAC / Mechanical.',
  'Intro Construction Management & Site Supervision (advanced track).',
];

export function ProgramModel() {
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
          <h2 className="section-title">Program Model – Colorado Flagship Campus</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-headline text-gold mb-4">Who We Serve</h3>
            <ul className="space-y-2">
              {whoWeServe.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-headline text-gold mb-4">Program Structure</h3>
            <ul className="space-y-2">
              {programStructure.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-headline text-gold mb-4">Core Trades (Phase 1)</h3>
            <ul className="space-y-2">
              {coreTrades.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="card border-gold/30 bg-gold/5 text-center">
            <p className="text-slate">
              Colorado serves as the template for a one-campus-per-state expansion
              strategy, adapted to local licensing and housing needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
