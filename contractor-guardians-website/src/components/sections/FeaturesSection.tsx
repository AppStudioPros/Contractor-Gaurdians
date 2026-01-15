'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Eye, FileText } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'All in One App',
    description:
      'Contractor Guardians simplifies home improvement by combining vetted contractors, secure digital contracts, milestone payments, live progress monitoring, and DIY resources—all in one app. Whether you\'re a homeowner or a contractor, our platform ensures transparency, quality, and peace of mind every step of the way.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Contractor Guardians offers live camera access and real-time photo and video updates from contractors, ensuring clear communication and a complete visual record of your project\'s progress. Stay informed and trust every step of the way.',
  },
  {
    icon: FileText,
    title: 'Digital and Smart Contracts',
    description:
      'Contractor Guardians uses digital contracts and milestone-based payments to ensure alignment and accountability. Secure, signed contracts and clear milestones help prevent disputes, creating a transparent and fair experience for both homeowners and contractors.',
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="features" className="section section-steel">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What We Are Providing</h2>
          <p className="section-subtitle">
            We are providing comprehensive solutions in our mobile app and web platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card card-hover group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
