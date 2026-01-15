'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f823b21939cae466c34_Cover_compressed.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f240a8283c9f3e81722_Slide%202.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f240b7b84e9f4e61cdd_Slide%203.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f23b7b9f4eb6a4bb8cf_Slide%204.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f248c91d0a199227a5b_Slide%205.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f2373e123ac57f17beb_Slide%206.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f24a8f710b7f0be9f0f_Slide%207.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f23583104a037b6164e_Slide%208.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f244cf66c2ee8f2a539_Slide%209.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f248035418b573c8bf7_Slide%2010.png',
  'https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68e28f24cf184b318b90e4c1_Slide%2011.png',
];

export function PitchDeckCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideClass = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % slides.length) + slides.length) % slides.length;

    if (normalizedDiff === 0) return 'scale-100 opacity-100 z-10';
    if (normalizedDiff === 1 || normalizedDiff === slides.length - 1)
      return 'scale-75 opacity-60 z-0';
    return 'scale-50 opacity-0 z-0';
  };

  const getSlideTransform = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % slides.length) + slides.length) % slides.length;

    if (normalizedDiff === 0) return 'translateX(0)';
    if (normalizedDiff === 1) return 'translateX(60%)';
    if (normalizedDiff === slides.length - 1) return 'translateX(-60%)';
    return 'translateX(0)';
  };

  return (
    <>
      <section ref={ref} id="pitch-deck" className="section section-steel">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Invest in the Future of Home Services</h2>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden"
          >
            <div className="relative h-full flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 cursor-pointer ${getSlideClass(index)}`}
                  style={{ transform: getSlideTransform(index) }}
                  onClick={() => {
                    if (index === currentIndex) {
                      setLightboxOpen(true);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  <Image
                    src={slide}
                    alt={`Pitch Deck Slide ${index + 1}`}
                    width={700}
                    height={400}
                    className="rounded-xl shadow-2xl max-h-[350px] md:max-h-[450px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-gold text-gold bg-guardian-black/50 flex items-center justify-center hover:bg-gold hover:text-guardian-black transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-gold text-gold bg-guardian-black/50 flex items-center justify-center hover:bg-gold hover:text-guardian-black transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-guardian-black transition-all"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-guardian-black transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <Image
            src={slides[currentIndex]}
            alt={`Pitch Deck Slide ${currentIndex + 1}`}
            width={1200}
            height={700}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-guardian-black transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
