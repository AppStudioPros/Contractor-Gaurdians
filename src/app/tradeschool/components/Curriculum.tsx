'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const coreFoundations = [
  'Construction math, measurements, and layout.',
  'Blueprint reading and basic design literacy.',
  'Tools and materials: safe use, maintenance, and selection.',
  'OSHA 10/30 and jobsite safety culture.',
  'Basic building codes and inspections.',
  'Soft skills: teamwork, communication, punctuality, professionalism.',
];

const tradeModules = [
  { trade: 'Electrical', content: 'circuits, wiring methods, NEC basics, panels, troubleshooting.' },
  { trade: 'Plumbing', content: 'DWV systems, water supply, fixtures, code basics.' },
  { trade: 'Carpentry', content: 'framing, sheathing, roofing, doors/windows, finishes.' },
  { trade: 'HVAC', content: 'ductwork fundamentals, system components, maintenance, diagnostics.' },
];

const capstoneDetails = [
  'Tied directly to graduation.',
  'Used to build a portfolio and references.',
  'Aligned where possible with apprenticeship and licensing requirements.',
];

export function Curriculum() {
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
          <h2 className="section-title">Curriculum & Learning Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Foundations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">
              Core Foundations (All Students)
            </h3>
            <ul className="space-y-2">
              {coreFoundations.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trade Modules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-headline text-gold mb-4">
              Trade-Specific Modules
            </h3>
            <ul className="space-y-3">
              {tradeModules.map((module) => (
                <li key={module.trade}>
                  <span className="text-gold font-semibold">{module.trade}:</span>{' '}
                  <span className="text-slate text-sm">{module.content}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Capstone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="card">
            <h3 className="text-xl font-headline text-gold mb-4">
              Capstone Build Requirement
            </h3>
            <p className="text-slate mb-4">
              Every student must complete a minimum number of documented hours on a
              live build—such as a home, tiny home, rehab project, or community
              facility upgrade. These hours are:
            </p>
            <ul className="space-y-2">
              {capstoneDetails.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
