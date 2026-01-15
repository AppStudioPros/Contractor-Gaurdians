'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'centered';
}

export function CTASection({
  title = 'Ready to Get Started?',
  description = 'Join thousands of homeowners and contractors who trust Contractor Guardians for their projects.',
  primaryCta = { label: 'Contact Us', href: '/contact' },
  secondaryCta = { label: 'Learn More', href: '/about' },
  variant = 'default',
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-guardian-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-guardian-steel/50 to-guardian-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Blueprint Pattern */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />
      
      {/* Decorative Shields */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-32 h-40 opacity-[0.03]">
        <Shield className="w-full h-full text-gold" strokeWidth={1} />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-60 opacity-[0.03]">
        <Shield className="w-full h-full text-gold" strokeWidth={1} />
      </div>

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Gold Line Accent */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tight text-white mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'started?' || word.toLowerCase() === 'experience?' ? 'text-gold' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href={primaryCta.href} 
              className="group inline-flex items-center gap-2 bg-gold text-guardian-black font-bold uppercase tracking-wide px-8 py-4 rounded-sm hover:bg-gold-hover transition-all duration-300 shadow-[0_0_30px_rgba(248,171,32,0.25)]"
            >
              {primaryCta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryCta && (
              <Link 
                href={secondaryCta.href} 
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
