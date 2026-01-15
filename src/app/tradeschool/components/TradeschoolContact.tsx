'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function TradeschoolContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || 'N/A',
          email: formData.email,
          phone: 'N/A',
          type: 'tradeschool',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === 'success') {
    return (
      <section className="section section-dark">
        <div className="container-lg max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-headline text-gold mb-4">Thank You!</h3>
            <p className="text-slate mb-6">
              We received your message about CGTP and will reach out soon.
            </p>
            <button onClick={() => setStatus('idle')} className="btn-secondary">
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-dark">
      <div className="container-lg max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Talk With Us About CGTP</h2>
          <p className="text-slate">
            Interested in partnering, funding, or launching a CGTP campus in your
            region? Send us a note and we'll follow up quickly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card"
        >
          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-danger/10 border border-danger/30 rounded-xl mb-6">
              <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
              <p className="text-sm text-danger">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label">
                  Your Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="you@organization.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="label">
                How can we help? <span className="text-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input resize-none"
                placeholder="Tell us a bit about your interest in CGTP..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Submit
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-xs text-slate text-center">
              By submitting, you agree to be contacted by Contractor Guardians.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
