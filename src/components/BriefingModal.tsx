import React, { useState, useEffect } from 'react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvjrrod';

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose, initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen && initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [isOpen, initialMessage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request Briefing"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-slate hover:text-brand-navy transition-colors p-1"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-3">Briefing Requested</h3>
              <p className="text-brand-slate leading-relaxed mb-8">
                Your inquiry has been received. A member of the LeverageWorks team will respond within one business day.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-navy text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-slate transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-2 block">
                  Executive Briefing
                </span>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                  Request a Strategy Briefing
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Share your organizational context and a senior strategist will prepare a tailored briefing for your team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="brief-name" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="brief-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="brief-email" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="brief-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="brief-company" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Company <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="brief-company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="brief-role" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Role / Title
                    </label>
                    <input
                      id="brief-role"
                      name="role"
                      type="text"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="VP of Operations"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="brief-message" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Describe Your Challenge <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="brief-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g., We need to integrate AI into our supply chain operations but lack a clear execution roadmap..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-navy text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Briefing Request'}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Your information is handled with strict confidentiality.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
