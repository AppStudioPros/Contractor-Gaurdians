'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 blueprint-bg" />
      
      {/* Decorative Shield */}
      <div className="absolute right-10 top-32 w-64 h-80 opacity-5">
        <Shield className="w-full h-full text-gold" />
      </div>

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-gold mb-6">
            About Contractor Guardians
          </h1>
          <p className="text-xl text-slate leading-relaxed">
            We're a construction network serving veterans, families, and
            communities across America—built on trust, transparency, and
            accountability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
