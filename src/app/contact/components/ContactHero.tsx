'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
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
            Contact Us
          </h1>
          <p className="text-xl text-slate">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
