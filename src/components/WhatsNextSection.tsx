'use client';

import React from 'react';
import { FUTURE_MILESTONES } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export default function WhatsNextSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-apple-muted font-semibold block mb-3">
            Looking Ahead
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            What comes next?
          </h2>
          <p className="text-base sm:text-lg text-apple-subtext mt-4 font-normal leading-relaxed">
            Upcoming alpine ambitions, endurance races, documentary writing, and academic pathways across the globe.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FUTURE_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl apple-card group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-apple-muted">
                  {item.category}
                </span>
                <span className="text-xs px-3 py-0.5 rounded-full bg-white/[0.06] text-white font-medium">
                  {item.target}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-apple-blue transition-colors tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist Contact Callout */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <p className="text-sm text-apple-subtext font-normal mb-4">
            Looking to propose an expedition, athletic collaboration, or media interview?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider transition-all hover:bg-[#F5F5F7]"
          >
            <span>Initiate a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
