'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Investor', href: '/investor' },
  { label: 'Contractors', href: '/contractors' },
  { label: 'Affiliates', href: '/affiliates' },
  { label: 'Tradeschool Program', href: '/tradeschool' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-guardian-black/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container-lg">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://customer-assets.emergentagent.com/job_webrebuild-1/artifacts/fv63libr_CG%20logo%20no%20bg.png"
              alt="Contractor Guardians"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-105"
              priority
            />
            <span className="hidden sm:block font-headline text-xl text-white group-hover:text-gold transition-colors">
              CONTRACTOR GUARDIANS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-secondary text-sm">
              Contact Us
            </Link>
            <button
              className="btn-primary text-sm cursor-default opacity-80"
              title="Coming Soon"
            >
              Mobile App (Coming Soon)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-guardian-graphite border-t border-white/10"
          >
            <div className="container-lg py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-white hover:text-gold hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-secondary w-full justify-center"
                >
                  Contact Us
                </Link>
                <button className="btn-primary w-full justify-center cursor-default opacity-80">
                  Mobile App (Coming Soon)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
