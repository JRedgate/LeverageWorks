import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LwSymbol } from '../components/Logo';
import { useSEO } from '../hooks/useSEO';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvjrrod';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useSEO({
    title: 'Contact | LVRGWRKS (LeverageWorks) - Request a Free Leverage Audit',
    description: 'Connect with LVRGWRKS (LeverageWorks) strategists. Request a free 60-minute Leverage Audit to discuss your AI implementation challenges and explore engagement pathways.',
    canonical: 'https://www.lvrgwrks.com/contact',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <LwSymbol className="w-96 h-96" color="#FFFFFF" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Contact</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-white mb-8 tracking-tight">
              Start the <span className="text-gray-400 italic">Conversation.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Tell us what you are working through. We will schedule a free 60-minute Leverage Audit with a LVRGWRKS strategist to explore what is possible for your organization.
            </p>
          </div>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              {status === 'success' ? (
                <div className="bg-white p-12 rounded-xl border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Leverage Audit Requested</h3>
                  <p className="text-brand-slate leading-relaxed mb-8">
                    Thank you for reaching out. A LVRGWRKS strategist will be in touch within 24 hours to schedule your free 60-minute Leverage Audit.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
                  >
                    Return Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                  <h2 className="font-display font-bold text-2xl text-brand-navy mb-8">Request a Leverage Audit</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors bg-white"
                      >
                        <option value="">Select role</option>
                        <option value="C-Suite">C-Suite</option>
                        <option value="VP / Director">VP / Director</option>
                        <option value="Manager">Manager</option>
                        <option value="Individual Contributor">Individual Contributor</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Describe Your Challenge *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                      placeholder="Tell us about the organizational friction points you are experiencing..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-navy text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="mb-12">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">What to Expect</h3>
                <ul className="space-y-4 text-brand-slate">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold">01.</span>
                    A LVRGWRKS strategist will review your submission within 24 hours.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold">02.</span>
                    We will schedule your free 60-minute Leverage Audit to understand your context.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold">03.</span>
                    You will receive an initial assessment of potential engagement pathways.
                  </li>
                </ul>
              </div>

              <div className="bg-brand-navy p-8 rounded-xl text-white">
                <h3 className="font-display font-bold text-xl mb-4">Headquarters</h3>
                <p className="text-gray-400 mb-6">Calgary, AB, Canada</p>
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="https://www.linkedin.com/company/lvrgwrks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
                  >
                    Connect on LinkedIn
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
