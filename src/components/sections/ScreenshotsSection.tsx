'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function ScreenshotsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-dark">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">App Screenshots</h2>
          <p className="section-subtitle">
            Making your interactions with clients and employees organized and
            professional with just a couple of clicks.
          </p>
        </motion.div>

        {/* Screenshots Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <Image
            src="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b785fb8f36c14c10a82c7f_screen-shot.webp"
            alt="Contractor Guardians App Screenshots"
            width={2851}
            height={1600}
            className="w-full h-auto rounded-2xl"
          />
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-3xl -z-10 scale-105" />
        </motion.div>
      </div>
    </section>
  );
}
