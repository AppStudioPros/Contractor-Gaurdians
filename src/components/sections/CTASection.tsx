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
    <section ref={ref} className="section section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-bg opacity-50" />
      
      {/* Decorative Shield */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        <Shield className="w-full h-full text-gold" />
      </div>

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={variant === 'centered' ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row items-center justify-between gap-8'}
        >
          <div className={variant === 'centered' ? 'mb-8' : 'flex-1'}>
            <h2 className="text-3xl md:text-4xl font-headline text-gold mb-4">
              {title}
            </h2>
            <p className="text-slate text-lg">{description}</p>
          </div>

          <div className={`flex flex-wrap gap-4 ${variant === 'centered' ? 'justify-center' : ''}`}>
            <Link href={primaryCta.href} className="btn-primary group">
              {primaryCta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
