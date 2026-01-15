'use client';

import { motion } from 'framer-motion';

export function ContractorsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline text-gold mb-4">
            Pre-Launch Contractor Sign-up
          </h1>
          <p className="text-xl text-slate">
            If you are a contractor and are interested in taking part in this new
            program, please fill out the form below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
