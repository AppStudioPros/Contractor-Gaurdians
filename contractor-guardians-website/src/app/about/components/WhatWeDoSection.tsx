'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, GraduationCap, ShieldCheck, BarChart3 } from 'lucide-react';

const sections = [
  {
    icon: Home,
    title: 'What We Do',
    description:
      'In collaboration with like-minded organizations and partners, we help build, repair, and provide homes—including traditional houses, mobile homes, and tiny homes—for veterans and families in need. Our goal is to facilitate 2,000+ home projects each year.',
    items: [
      'Veteran housing builds & repairs',
      'Partnerships with ministries & non-profits',
      'Mobile & tiny home solutions',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Investing in the Future',
    description:
      "We're developing trade schools and training programs across the U.S. to give young men and women—especially those who can't afford college—access to skilled-trades education, mentorship, and meaningful careers in the building industry.",
    items: [
      'Apprenticeships & mentorship',
      'Job placement through our network',
      'Scholarships for qualified students',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Our Commitment',
    description:
      "Every project reflects our belief that hard work and integrity are America's strength. With professionalism and compassion, we empower youth and strengthen communities—one project at a time.",
    items: [
      'Transparent processes & milestone payments',
      'Quality assurance & independent inspections',
      'Dispute resolution & homeowner protection',
    ],
  },
  {
    icon: BarChart3,
    title: 'By the Numbers',
    description: 'Ambition anchored to execution:',
    items: [
      '2,000+ home projects targeted per year',
      'Nation-wide contractor & partner network',
      'Trade school pipeline feeding local jobs',
    ],
  },
];

export function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section section-dark">
      <div className="container-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <section.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-headline text-gold mb-4">
                {section.title}
              </h3>
              <p className="text-slate mb-6 leading-relaxed">
                {section.description}
              </p>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
