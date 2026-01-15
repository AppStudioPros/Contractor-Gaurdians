'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContractorForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    hasWebsite: 'no',
    websiteUrl: '',
    phone: '',
    email: '',
    workType: '',
    usesLeadGen: 'no',
    leadGenPlatforms: '',
    leadGenCost: '',
    isLicensed: '',
    referralSource: '',
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
          type: 'contractor',
          message: `
Company: ${formData.company}
Website: ${formData.hasWebsite === 'yes' ? formData.websiteUrl : 'No website'}
Type of Work: ${formData.workType || 'Not specified'}
Lead Gen: ${formData.usesLeadGen === 'yes' ? `Yes - ${formData.leadGenPlatforms} ($${formData.leadGenCost}/mo)` : 'No'}
Licensed: ${formData.isLicensed}
Referral: ${formData.referralSource || 'Not specified'}
          `.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          hasWebsite: 'no',
          websiteUrl: '',
          phone: '',
          email: '',
          workType: '',
          usesLeadGen: 'no',
          leadGenPlatforms: '',
          leadGenCost: '',
          isLicensed: '',
          referralSource: '',
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          We received your submission and will reach out soon.
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
              placeholder="Your company"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              Website <span className="text-gold">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="no"
                  checked={formData.hasWebsite === 'no'}
                  onChange={handleChange}
                  className="accent-gold"
                />
                <span className="text-white font-medium">No</span>
              </label>
              <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
                <input
                  type="radio"
                  name="hasWebsite"
                  value="yes"
                  checked={formData.hasWebsite === 'yes'}
                  onChange={handleChange}
                  className="accent-gold"
                />
                <span className="text-white font-medium">Yes</span>
              </label>
            </div>
            {formData.hasWebsite === 'yes' && (
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className="input mt-3"
                placeholder="https://example.com"
              />
            )}
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
            <p className="text-xs text-slate mt-2">
              We'll only use this to contact you about Contractor Guardians.
            </p>
          </div>
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
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="workType" className="label">
            Type of Work
          </label>
          <textarea
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            rows={3}
            className="input resize-none"
            placeholder="i.e. roofs, new construction, plumbing, electrical, etc."
          />
        </div>

        <div>
          <label className="label">Do you use lead generation services?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
              <input
                type="radio"
                name="usesLeadGen"
                value="no"
                checked={formData.usesLeadGen === 'no'}
                onChange={handleChange}
                className="accent-gold"
              />
              <span className="text-white font-medium">No</span>
            </label>
            <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
              <input
                type="radio"
                name="usesLeadGen"
                value="yes"
                checked={formData.usesLeadGen === 'yes'}
                onChange={handleChange}
                className="accent-gold"
              />
              <span className="text-white font-medium">Yes</span>
            </label>
          </div>
          {formData.usesLeadGen === 'yes' && (
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <input
                type="text"
                name="leadGenPlatforms"
                value={formData.leadGenPlatforms}
                onChange={handleChange}
                className="input"
                placeholder="Angie's List, Houzz, Porch, etc."
              />
              <input
                type="text"
                name="leadGenCost"
                value={formData.leadGenCost}
                onChange={handleChange}
                className="input"
                placeholder="Approx. monthly cost"
              />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              Are you licensed? <span className="text-gold">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
                <input
                  type="radio"
                  name="isLicensed"
                  value="yes"
                  checked={formData.isLicensed === 'yes'}
                  onChange={handleChange}
                  required
                  className="accent-gold"
                />
                <span className="text-white font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-2 px-4 py-2 bg-guardian-graphite rounded-full cursor-pointer border border-white/10">
                <input
                  type="radio"
                  name="isLicensed"
                  value="no"
                  checked={formData.isLicensed === 'no'}
                  onChange={handleChange}
                  className="accent-gold"
                />
                <span className="text-white font-medium">No</span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="referralSource" className="label">
              How were you referred to us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select one</option>
              <option value="JFK">JFK</option>
              <option value="Aaron.B">Aaron.B</option>
              <option value="Other">Other</option>
            </select>
          </div>
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
          this pre-launch.
        </p>
      </form>
    </motion.div>
  );
}
