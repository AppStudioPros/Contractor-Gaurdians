'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: '',
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          type: '',
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
          We received your message and will get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          Send Another Message
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
      <h2 className="text-2xl font-headline text-gold mb-6">Send Us a Message</h2>

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
            <label htmlFor="firstName" className="label">
              First Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="label">
              Last Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your last name"
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
              placeholder="you@example.com"
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
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="label">
            I am a... <span className="text-gold">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select one</option>
            <option value="homeowner">Homeowner</option>
            <option value="contractor">Contractor</option>
            <option value="investor">Investor</option>
            <option value="other">Other</option>
          </select>
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
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-slate">
          By submitting, you agree to be contacted by Contractor Guardians.
        </p>
      </form>
    </motion.div>
  );
}
