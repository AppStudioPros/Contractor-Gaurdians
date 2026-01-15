'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Award, Users, Check } from 'lucide-react';

const partnershipOptions = [
  'Affiliate Listings – Promote your brand in our Partner Directory.',
  'Sponsored Content – Share educational articles, how-to guides, or product spotlights.',
  'Banner & Display Ads – Get visibility throughout our website and member dashboard.',
  'Email & Social Promotions – Reach thousands of active professionals directly.',
  'Exclusive Programs – Create member-only discounts or referral bonuses.',
];

const partnerTypes = [
  'Contractor & business insurance',
  'Tools, equipment, and safety gear',
  'Building materials and lumber supply',
  'Real estate and financing services',
  'Fleet management and logistics',
  'Software & technology solutions for contractors',
];

export function ValuePropsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Why Advertise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h2 className="text-2xl font-headline text-gold mb-6">
              Why Advertise With Us?
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-bold text-white">
                    1. Targeted Industry Reach
                  </h3>
                </div>
                <p className="text-slate text-sm pl-9">
                  Our audience isn't just broad — it's specialized. Every member
                  of Contractor Guardians is part of the construction, renovation,
                  or property improvement industry.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-bold text-white">
                    2. Build Brand Trust
                  </h3>
                </div>
                <p className="text-slate text-sm pl-9">
                  We're known for protecting contractors from unreliable vendors
                  and connecting them with trusted partners. Your brand earns the
                  same credibility.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-bold text-white">
                    3. Multiple Partnership Options
                  </h3>
                </div>
                <ul className="space-y-2 pl-9">
                  {partnershipOptions.map((option) => (
                    <li key={option} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-slate text-sm">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Who Should Partner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-headline text-gold mb-6">
              Who Should Partner With Us?
            </h2>

            <ul className="space-y-3 mb-8">
              {partnerTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-slate">{type}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate mb-8">
              If your products or services make contractors' lives easier, we want
              to showcase your brand.
            </p>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-headline text-gold mb-3">
                Join the Contractor Guardians Network
              </h3>
              <p className="text-slate text-sm">
                Let's build something strong — together. Partnering with
                Contractor Guardians means becoming part of a trusted ecosystem
                that supports the entire contractor community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
