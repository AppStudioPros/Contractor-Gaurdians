'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mark T.',
    role: 'Roofing Contractor',
    quote:
      "A Game-Changer for My Business! As a roofing contractor, I've tested many platforms, but nothing compares to Contractor Guardians. The quality of leads I receive is far better, and the escrow system gives homeowners confidence while ensuring I get paid on time. The app keeps my crew organized and clients updated in real time—it's taken away so much of the stress of managing projects. I finally have more time to focus on delivering great results instead of chasing paperwork.",
    image: 'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b7aa4d7392a3ec14540fbf_id1.png',
  },
  {
    id: 2,
    name: 'Susanne Freely',
    role: 'Homeowner',
    quote:
      "Finally, Peace of Mind When Hiring. Finding the right contractor used to feel overwhelming, but Contractor Guardians made it simple. Every contractor is verified, so I felt confident from day one. I loved being able to track progress, see milestone updates, and communicate directly with the contractor. For the first time, I didn't feel left in the dark—I knew exactly what was happening every step of the way. I'll absolutely use this app for all future home projects.",
    image: 'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b7aa4d6ed7b186f42c8d9c_id2.png.png',
  },
  {
    id: 3,
    name: 'David R.',
    role: 'Interior Renovations Contractor',
    quote:
      "Safe, Simple, and Stress-Free. I run a small renovations business, and Contractor Guardians has completely changed how I work with clients. All the job details, payments, and progress updates are in one place—no more messy spreadsheets or endless text messages. The escrow system also makes my business look more professional, and my clients appreciate the transparency. It's like having a full project manager in my pocket.",
    image: 'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b7aa4dae9fc91d7cfb417f_id3.png',
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section section-steel">
      <div className="container-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Users' Kind Words</h2>
          <p className="section-subtitle">
            Here are some testimonials from our users after using Contractor
            Guardians to manage their projects.
          </p>
        </motion.div>

        {/* Testimonials Grid (Desktop) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card card-hover flex flex-col"
            >
              <div className="flex-1">
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">
                  {testimonial.name === 'Mark T.' && 'A Game-Changer for My Business!'}
                  {testimonial.name === 'Susanne Freely' && 'Finally, Peace of Mind When Hiring'}
                  {testimonial.name === 'David R.' && 'Safe, Simple, and Stress-Free'}
                </h4>
                <p className="text-slate text-sm leading-relaxed line-clamp-6">
                  {testimonial.quote.split('. ').slice(1).join('. ')}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-guardian-graphite">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel (Mobile) */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <Quote className="w-10 h-10 text-gold/30 mb-4" />
            <p className="text-slate leading-relaxed mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-guardian-graphite">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-slate">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
