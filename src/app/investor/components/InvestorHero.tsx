'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function InvestorHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg" />
      
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
            We're Not Just Changing an Industry.
            <br />
            We're Rebuilding It.
          </h1>
          <p className="text-2xl text-gold font-semibold mb-4">
            This is the next evolution!
          </p>
          <p className="text-xl text-slate">
            The competition sells leads.{' '}
            <span className="text-white font-semibold">
              Contractor Guardians delivers trust.
            </span>
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <a href="#pitch-deck" className="btn-primary">
              View Pitch Deck
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
