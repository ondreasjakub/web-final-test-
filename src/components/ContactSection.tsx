'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, KeyRound, ShieldCheck, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // hidden anti-spam trap
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

    // Client-side quick checks
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
        setFeedbackMessage(data.message || 'Your message has been sent successfully!');
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Get to Know Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Have a question about high-altitude expeditions, youth exchange in the United States, athletic training, or future collaborations? Send a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information & Privacy Note */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-[#161B21] border border-slate-800 space-y-4">
              <h3 className="font-editorial text-xl font-bold text-white">
                Contact & Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Messages sent through this form are processed securely through a server-side Resend email integration. API credentials and destination mailbox addresses are stored exclusively in secure server environment variables and are never exposed in browser code.
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Honeypot anti-spam bot defense & rate limiting enabled.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <KeyRound className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Configured via server-side <code className="text-emerald-400">RESEND_API_KEY</code>.</span>
                </div>
              </div>
            </div>

            {/* Quick response commitment */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Inquiries Welcome:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Alpinism & ski-mountaineering route insights</li>
                <li>Rotary Youth Exchange perspectives & advice</li>
                <li>Athletics & 200m sprint training dialogue</li>
                <li>Documentary articles & youth exploration media</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-[#161B21] border border-slate-800 space-y-5 shadow-2xl"
            >
              {/* Anti-spam honeypot field (hidden from real users, caught by bots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field blank</label>
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
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Peter Miller"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. peter@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Subject <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Question regarding Mont Blanc ski descent"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here (min. 10 characters)..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                />
              </div>

              {/* Status & Feedback Notifications */}
              {status === 'config_pending' && (
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <KeyRound className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Server Status: Resend Key Configuration Required</span>
                  </div>
                  <p className="leading-relaxed">
                    {feedbackMessage}
                  </p>
                  {validatedPreview && (
                    <div className="p-2.5 rounded bg-slate-900/80 border border-amber-500/20 text-[11px] font-mono text-slate-300">
                      <div>✓ Validated Sender: {validatedPreview.name} &lt;{validatedPreview.from}&gt;</div>
                      <div>✓ Validated Subject: {validatedPreview.subject}</div>
                    </div>
                  )}
                  <p className="text-[11px] text-slate-400 italic">
                    Note: The website intentionally never pretends an email was delivered when credentials are not configured.
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 disabled:opacity-50 text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-lg shadow-emerald-950/50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Validating & Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
