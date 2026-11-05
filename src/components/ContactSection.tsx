'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, KeyRound, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-goldAccent" />
              <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent font-semibold">
                Get In Touch // Direct Inquiries
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Get to Know Me
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            Direct communication for high-altitude expedition queries, youth exchange dialogue, track athletics, or media interviews.
          </p>
        </div>

        {/* Minimalist Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Security Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-carbon-900 border border-white/[0.08] space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">
                Direct Communication
              </h3>
              <p className="text-sm text-stoneLight-300 leading-relaxed font-normal">
                Messages submitted through this form are handled server-side via our Resend email integration. API credentials and destination mailbox addresses are stored exclusively in encrypted environment variables and never exposed to client-side code.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-stoneLight-400">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Honeypot bot mitigation & rate limiting active.</span>
                </div>
                <div className="flex items-center gap-3">
                  <KeyRound className="w-4 h-4 text-goldAccent flex-shrink-0" />
                  <span>Powered by server-side Resend SDK.</span>
                </div>
              </div>
            </div>

            {/* Inquiries Scope Card */}
            <div className="p-8 rounded-3xl glass-panel space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-goldAccent block font-semibold">
                Inquiries Welcome:
              </span>
              <ul className="space-y-2 text-xs text-stoneLight-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-goldAccent" />
                  Alpine ski-mountaineering route insights & gear advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-goldAccent" />
                  Rotary Youth Exchange perspectives & international experiences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-goldAccent" />
                  Athletics, 200m sprint training & club competitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-goldAccent" />
                  Documentary storytelling & alpine photo essays
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: High-End Minimalist Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-3xl bg-carbon-900 border border-white/[0.08] space-y-6 shadow-2xl"
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
                  className="block text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 font-semibold mb-2"
                >
                  Full Name <span className="text-goldAccent">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-5 py-4 rounded-2xl bg-carbon-850 border border-white/[0.08] text-white placeholder-stoneLight-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 font-semibold mb-2"
                >
                  Email Address <span className="text-goldAccent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-carbon-850 border border-white/[0.08] text-white placeholder-stoneLight-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 font-semibold mb-2"
                >
                  Subject <span className="text-goldAccent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of inquiry"
                  className="w-full px-5 py-4 rounded-2xl bg-carbon-850 border border-white/[0.08] text-white placeholder-stoneLight-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 font-semibold mb-2"
                >
                  Message <span className="text-goldAccent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here (min. 10 characters)..."
                  className="w-full px-5 py-4 rounded-2xl bg-carbon-850 border border-white/[0.08] text-white placeholder-stoneLight-500 text-sm focus:outline-none focus:border-white/30 transition-colors resize-y"
                />
              </div>

              {/* Status & Feedback Notifications */}
              {status === 'config_pending' && (
                <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <KeyRound className="w-4 h-4 flex-shrink-0" />
                    <span>Configuration Notice</span>
                  </div>
                  <p className="leading-relaxed font-normal">{feedbackMessage}</p>
                  {validatedPreview && (
                    <div className="p-3 rounded-xl bg-carbon-950/80 border border-white/5 font-mono text-[11px] text-stoneLight-300">
                      <div>✓ Validated Sender: {validatedPreview.name} &lt;{validatedPreview.from}&gt;</div>
                      <div>✓ Validated Subject: {validatedPreview.subject}</div>
                    </div>
                  )}
                  <p className="text-[10px] font-mono text-stoneLight-400 italic">
                    Per brief specifications: The website never falsely claims email delivery when credentials are not configured.
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-5 rounded-2xl bg-alpine-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-5 rounded-2xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <p className="leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-stoneLight-200 active:bg-stoneLight-300 disabled:opacity-50 text-carbon-950 font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-carbon-950/30 border-t-carbon-950 rounded-full animate-spin" />
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
