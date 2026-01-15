'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Organize across all apps by hand',
    features: [
      'Free to download no cost',
      'Watch How To videos',
      'Explore Services and contractors',
      'Read up on policies & operations',
    ],
    isPopular: false,
    ctaLabel: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$19.99',
    period: '/month',
    annualInfo: 'or $199 annually — You save $39.98',
    description: 'Organize across all apps by hand',
    features: [
      'Everything in the free version',
      'Ability to choose/contact contractors',
      'Use of Digital contracts and Milestones',
      'Access to on-site cameras',
      'Text and status updates within App',
      'Secure payment portal with application',
    ],
    isPopular: true,
    ctaLabel: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: '$39.99',
    period: '/month',
    annualInfo: 'or $399 annually — You save $80',
    description: 'Organize across all apps by hand',
    features: [
      'Everything in free version',
      'Everything in Pro version',
      'Access to smart contracts',
      'Our Exclusive Job Guarantee',
      'Premium Customer Service',
      'Ability to pay with Crypto',
    ],
    isPopular: false,
    ctaLabel: 'Get Started',
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="pricing" className="section section-dark">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            14 days unlimited free trial. No contract or credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={cn(
                'relative rounded-2xl p-8 transition-all duration-300',
                plan.isPopular
                  ? 'bg-shield-blue border-2 border-shield-blue scale-105 shadow-xl shadow-shield-blue/20'
                  : 'bg-guardian-steel border border-white/10 hover:border-gold/30'
              )}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-guardian-black text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3
                  className={cn(
                    'text-2xl font-bold mb-2',
                    plan.isPopular ? 'text-white' : 'text-gold'
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    'text-sm',
                    plan.isPopular ? 'text-white/70' : 'text-slate'
                  )}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={cn(
                      'text-5xl font-bold',
                      plan.isPopular ? 'text-white' : 'text-white'
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={cn(
                        'text-lg',
                        plan.isPopular ? 'text-white/70' : 'text-slate'
                      )}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.annualInfo && (
                  <p
                    className={cn(
                      'text-sm mt-2',
                      plan.isPopular ? 'text-white/70' : 'text-slate'
                    )}
                  >
                    {plan.annualInfo}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        'w-5 h-5 mt-0.5 flex-shrink-0',
                        plan.isPopular ? 'text-gold' : 'text-success'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        plan.isPopular ? 'text-white' : 'text-slate'
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  'w-full py-3 rounded-full font-bold transition-all duration-300',
                  plan.isPopular
                    ? 'bg-gold text-guardian-black hover:bg-gold-hover'
                    : 'bg-white/10 text-white hover:bg-gold hover:text-guardian-black'
                )}
              >
                {plan.ctaLabel}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
