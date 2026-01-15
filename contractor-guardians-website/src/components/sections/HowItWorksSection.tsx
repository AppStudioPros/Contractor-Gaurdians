'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { UserPlus, Upload, MessageSquare, ScanLine, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in minutes with basic information. Choose whether you\'re a homeowner looking for contractors or a contractor ready to grow your business.',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Upload Your Project',
    description: 'Describe your project needs, upload photos, and set your budget. Our system matches you with verified, qualified contractors in your area.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect & Communicate',
    description: 'Chat directly with contractors, review proposals, and ask questions. All communication is logged for transparency and protection.',
  },
  {
    number: '04',
    icon: ScanLine,
    title: 'Digital Contracts',
    description: 'Sign secure digital contracts with clear milestones and payment schedules. Smart contracts ensure everyone stays aligned throughout the project.',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Protected Payments',
    description: 'Funds are held in escrow and released only when milestones are completed. Our Guardian Guarantee ensures your project is protected.',
  },
];

export function HowItWorksSection() {
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
          className="text-center mb-16"
        >
          <h2 className="section-title">How to Get Started</h2>
          <p className="section-subtitle">
            Embarking on your project journey is a breeze! Follow these simple steps to get started
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`card card-hover text-center ${index % 2 === 1 ? 'md:mt-8' : ''}`}
            >
              <div className="text-4xl font-headline text-gold/30 mb-4">{step.number}</div>
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* App Preview Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <Image
            src="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/66d94ab7eb129d1a1754a054_img.webp"
            alt="Contractor Guardians App Interface"
            width={900}
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          {/* Glow */}
          <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-3xl -z-10 scale-105" />
        </motion.div>
      </div>
    </section>
  );
}
