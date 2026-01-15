'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Card */}
      <div className="card">
        <h3 className="text-xl font-headline text-gold mb-6">Reach Out Today</h3>
        <p className="text-slate mb-6">Questions or queries? Get in touch!</p>

        <div className="space-y-4">
          <a
            href="mailto:info@contractorguardians.com"
            className="flex items-center gap-4 p-4 bg-guardian-graphite rounded-xl hover:bg-gold/10 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-sm text-slate">Email</p>
              <p className="text-white font-medium">info@contractorguardians.com</p>
            </div>
          </a>

          <a
            href="tel:720-276-0797"
            className="flex items-center gap-4 p-4 bg-guardian-graphite rounded-xl hover:bg-gold/10 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-sm text-slate">Phone</p>
              <p className="text-white font-medium">(720) 276-0797</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 bg-guardian-graphite rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-sm text-slate">Hours</p>
              <p className="text-white font-medium">Mon-Fri, 8am - 8pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card">
        <h3 className="text-xl font-headline text-gold mb-4">Looking for Something Specific?</h3>
        <div className="space-y-3">
          <a
            href="/contractors"
            className="block p-3 bg-guardian-graphite rounded-lg hover:bg-gold/10 transition-colors text-slate hover:text-white"
          >
            → Join as a Contractor
          </a>
          <a
            href="/affiliates"
            className="block p-3 bg-guardian-graphite rounded-lg hover:bg-gold/10 transition-colors text-slate hover:text-white"
          >
            → Become an Affiliate Partner
          </a>
          <a
            href="/investor"
            className="block p-3 bg-guardian-graphite rounded-lg hover:bg-gold/10 transition-colors text-slate hover:text-white"
          >
            → Investment Opportunities
          </a>
          <a
            href="/tradeschool"
            className="block p-3 bg-guardian-graphite rounded-lg hover:bg-gold/10 transition-colors text-slate hover:text-white"
          >
            → Tradeschool Program
          </a>
        </div>
      </div>
    </motion.div>
  );
}
