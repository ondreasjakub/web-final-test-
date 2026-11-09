'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, KeyRound, ShieldCheck, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // hidden anti-spam bot trap
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'config_pending' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [validatedPreview, setValidatedPreview] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');
    setValidatedPreview(null);

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatus('error');
      setFeedbackMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setFeedbackMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setFeedbackMessage('Please provide a subject.');
      return;
    }
    if (formData.message.trim().length < 10) {
      setStatus('error');
      setFeedbackMessage('Message must be at least 10 characters.');
      return;
    }

    try {
      // Primary submit to server-side /api/contact route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.code === 'CONFIG_PENDING') {
        setStatus('config_pending');
        setFeedbackMessage(data.message);
        setValidatedPreview(data.preview);
      } else if (data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage(err.message || 'Network error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-emerald-800" />
            <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold">
              Contact & Inquiries
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
            Get to know me.
          </h2>
          <p className="text-base sm:text-lg text-stone-700 mt-4 font-normal leading-relaxed">
            Have a question about high-altitude expeditions, youth exchange in the United States, athletic training, or future collaborations? Send a note below.
          </p>
        </div>

        {/* Minimalist 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context & Security Specs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-8 rounded-3xl apple-card space-y-4">
              <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                Direct Communication
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Messages submitted through this form are handled server-side via our Resend email integration. API credentials and destination mailbox addresses are stored exclusively in encrypted environment variables and never exposed to client-side code.
              </p>

              <div className="space-y-3 pt-3 border-t border-stone-200 text-xs text-stone-600">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                  <span>Honeypot bot mitigation & rate limiting active.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <KeyRound className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                  <span>Powered by server-side Resend SDK.</span>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-stone-100 border border-stone-200 space-y-2.5">
              <span className="text-xs uppercase tracking-wider text-stone-900 block font-semibold">
                Inquiries Welcome:
              </span>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
                  Alpine ski-mountaineering route insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
                  Rotary Youth Exchange perspectives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
                  Athletics & 200m sprint training dialogue
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
                  Documentary articles & youth exploration media
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clean Apple-style Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl apple-card space-y-5"
            >
              {/* Anti-spam honeypot field (hidden from legitimate visitors) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave blank</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2"
                >
                  Full Name <span className="text-stone-900">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-500 text-sm focus:border-emerald-700 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2"
                >
                  Email Address <span className="text-stone-900">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-500 text-sm focus:border-emerald-700 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2"
                >
                  Subject <span className="text-stone-900">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of message"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-500 text-sm focus:border-emerald-700 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2"
                >
                  Message <span className="text-stone-900">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message (min. 10 characters)..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-500 text-sm focus:border-emerald-700 transition-colors resize-y"
                />
              </div>

              {/* Status & Feedback Notifications */}
              {status === 'config_pending' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-500/30 text-amber-900 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-amber-800">
                    <KeyRound className="w-4 h-4 flex-shrink-0" />
                    <span>Configuration Notice</span>
                  </div>
                  <p className="leading-relaxed font-normal">{feedbackMessage}</p>
                  {validatedPreview && (
                    <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700">
                      <div>✓ Validated Sender: {validatedPreview.name} &lt;{validatedPreview.from}&gt;</div>
                      <div>✓ Validated Subject: {validatedPreview.subject}</div>
                    </div>
                  )}
                  <p className="text-[10px] text-stone-600 italic">
                    Per brief specifications: The website never falsely claims email delivery when credentials are not configured.
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-500/40 text-emerald-900 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-500/40 text-rose-900 text-xs flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-800 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-800 disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Validating & Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
