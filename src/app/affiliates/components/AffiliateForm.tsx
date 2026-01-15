'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function AffiliateForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    website: '',
    referralSource: '',
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
          phone: formData.phone,
          type: 'affiliate',
          message: `
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}
Referral: ${formData.referralSource || 'Not specified'}

Message:
${formData.message}
          `.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          website: '',
          referralSource: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === 'success') {
    return (
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
          We received your affiliate inquiry and will reach out soon.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-danger/10 border border-danger/30 rounded-xl mb-6">
          <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
          <p className="text-sm text-danger">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="label">
              Name <span className="text-gold">*</span>
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
            <label htmlFor="phone" className="label">
              Phone <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input"
              placeholder="(###) ###-####"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="label">
              Company Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="input"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="website" className="label">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="input"
              placeholder="https://yourcompany.com"
            />
          </div>
          <div>
            <label htmlFor="referralSource" className="label">
              How were you referred to us? <span className="text-gold">*</span>
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select one</option>
              <option value="JFK">JFK</option>
              <option value="Aaron.B">Aaron.B</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="label">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input resize-none"
            placeholder="Tell us about your business and what type of work you do."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            'Submitting...'
          ) : (
            <>
              Submit
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-slate text-center">
          By submitting, you agree to be contacted by Contractor Guardians about
          affiliate opportunities.
        </p>
      </form>
    </motion.div>
  );
}
