'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // hidden anti-spam bot trap
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

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
        setStatus('error');
        setFeedbackMessage('The form is temporarily unavailable. Please try again later.');
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
    <section id="contact" className="journal-section journal-contact">
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
      {status === 'success' && (
        <div role="status" className="p-4 rounded-2xl bg-emerald-50 border border-emerald-500/40 text-emerald-900 text-xs flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-800 flex-shrink-0" />
          <p className="leading-relaxed">{feedbackMessage}</p>
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="p-4 rounded-2xl bg-rose-50 border border-rose-500/40 text-rose-900 text-xs flex items-center gap-3 animate-fade-in">
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
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
    </section>
  );
}
