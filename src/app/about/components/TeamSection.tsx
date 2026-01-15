'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'Corey Strange',
    role: 'Co-Founder & Chief Technology Officer',
    shortBio:
      'Corey Strange is a veteran technologist, entrepreneur, and multi-disciplinary innovator with more than three decades of experience building high-performance companies across software development, cybersecurity, blockchain, and enterprise infrastructure.',
    fullBio: `Starting with hands-on apprenticeships in electrical, mechanical, and construction trades, he developed a rare blend of field experience and deep technical expertise—grounding his work in how technology must perform for contractors in the real world, not just on paper.

Over the course of his career, Corey has become a full-stack developer and systems architect known for designing secure, scalable, future-ready platforms. As founder of multiple successful companies—including Mobile Computer Specialists, Web Design Pros 365, and App Studio Pro—he has led teams that have delivered more than 300 custom websites, 150+ enterprise-grade software platforms, and 150+ cross-platform mobile applications for organizations ranging from early-stage startups to national brands.

At Contractor Guardians, Corey applies leading-edge, AI-powered development practices, integrating modern machine learning models, intelligent automation, and LLM-driven tooling into contractor-focused software ecosystems. He brings over eight years of blockchain architecture and decentralized-systems experience, including on-chain solutions across Solana, XRP, and other major networks.`,
  },
  {
    name: 'Ana Madelin Perez',
    role: 'Co-Founder & Chief Financial & Operations Officer',
    shortBio:
      'Ana Madelin Perez is a financial strategist and operational leader who builds the systems that keep businesses compliant, scalable, and profitable.',
    fullBio: `As co-founder of Contractor Guardians, she brings deep expertise in bookkeeping, payroll, tax, grants, and regulatory workflows—designing financial foundations that help contractors grow with confidence and stay protected in a complex, high-risk industry.

Before Contractor Guardians, Ana built and scaled MBP Services Corp and VirtualNotary365, two high-growth ventures that merge financial precision, automation, and service accessibility. Based in Charlotte, NC, she has led bilingual teams delivering end-to-end financial and notary services to businesses nationwide in both English and Spanish.

Ana is a Certified Bookkeeper and QuickBooks ProAdvisor who has guided hundreds of entrepreneurs toward clarity in their numbers, better decision-making, and sustainable growth. Her initiative, MBP Gives Back, channels business success into community impact—supporting local families and championing financial education.`,
  },
  {
    name: 'Kelsi Strange',
    role: 'Partner & Director of Digital Experience',
    shortBio:
      'Kelsi Strange is a digital experience leader who blends creativity, technology, and empathy to help contractors and their clients connect with confidence.',
    fullBio: `As Partner & Director of Digital Experience at Contractor Guardians, she shapes how the brand looks, feels, and communicates—from educational content and product storytelling to UX across web and multimedia touchpoints.

Kelsi's path into technology began in senior care, where she supported seniors, including those with dementia and Alzheimer's. That work developed a deep sense of patience, empathy, and clear communication—qualities that now guide her approach to designing technology that feels human, accessible, and trustworthy.

Her love of code started in the Myspace era, customizing layouts and learning the basics of front-end development. That curiosity accelerated when she met Corey Strange and joined his companies, where she learned repair, networking, and security before transitioning into web design, video production, and modern multimedia.`,
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Founders & Leadership</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-headline text-gold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate text-sm mb-4">{member.role}</p>
                  <p className="text-slate leading-relaxed">{member.shortBio}</p>
                  
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      {member.fullBio.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-slate leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  )}

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="mt-4 flex items-center gap-2 text-gold hover:text-gold-hover transition-colors text-sm font-semibold"
                  >
                    {expandedIndex === index ? (
                      <>
                        <span>Read Less</span>
                        <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <ChevronDown size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
