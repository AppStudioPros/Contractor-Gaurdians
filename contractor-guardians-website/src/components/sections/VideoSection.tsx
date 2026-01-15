'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Explainer Video</h2>
          <p className="section-subtitle">
            Making your interactions with clients and employees organized and
            professional with just a couple of clicks.
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/lO6joot_qtg"
              title="Contractor Guardians: Smarter Hiring, Safer Projects"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl -z-10 scale-105" />
        </motion.div>
      </div>
    </section>
  );
}
