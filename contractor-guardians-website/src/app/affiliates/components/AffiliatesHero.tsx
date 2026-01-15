'use client';

import { motion } from 'framer-motion';

export function AffiliatesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline text-gold mb-4">
            Partner With Contractor Guardians
          </h1>
          <p className="text-xl text-slate mb-6">
            Connect Your Brand With a Trusted Contractor Network
          </p>
          <p className="text-slate leading-relaxed max-w-3xl mx-auto">
            At Contractor Guardians, we connect skilled tradespeople, home
            improvement experts, and construction professionals with the tools,
            services, and products they need to succeed. Our platform reaches
            thousands of verified contractors across North America — and we're
            opening the door for strategic partners like insurance companies,
            equipment suppliers, real estate agents, and material vendors to reach
            this highly engaged community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
