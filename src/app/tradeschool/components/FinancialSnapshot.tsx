'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';

export function FinancialSnapshot() {
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
          <h2 className="section-title">Financial Snapshot – Colorado Flagship Campus</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Start-Up Costs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-lg font-headline text-gold mb-4">Start-Up Costs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white font-semibold">Facility & Build-Out:</span>{' '}
                <span className="text-slate">~$600K</span>
              </li>
              <li>
                <span className="text-white font-semibold">Tools, Labs & Tech:</span>{' '}
                <span className="text-slate">~$430K</span>
              </li>
              <li>
                <span className="text-white font-semibold">Launch & Compliance:</span>{' '}
                <span className="text-slate">~$85K</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-gold font-bold">Total: ≈ $1.1–$1.2M</p>
            </div>
          </motion.div>

          {/* Operating Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-lg font-headline text-gold mb-4">Annual Operating Budget</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white font-semibold">Staffing:</span>{' '}
                <span className="text-slate">≈ $730K/year</span>
              </li>
              <li>
                <span className="text-white font-semibold">Facilities & Operating:</span>{' '}
                <span className="text-slate">≈ $545K/year</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-gold font-bold">Total: ≈ $1.28M–$1.4M</p>
            </div>
          </motion.div>

          {/* Cost Per Student */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card border-gold/30"
          >
            <h3 className="text-lg font-headline text-gold mb-4">Cost Per Student</h3>
            <p className="text-3xl font-bold text-white mb-2">~$17,500</p>
            <p className="text-slate text-sm">
              All-in cost at ~80 students/year, including instruction, safety
              certifications, tools/PPE, on-site build experience, and job
              placement support.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-gold text-lg font-semibold mb-4">
            For detailed line items and projections, download the full Program &
            Business Plan PDF.
          </p>
          <a
            href="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/6936eb35afa9e4c4750e6dbb_CGTP_Program_Overview_Business_Plan_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
