'use client';

import React from 'react';
import { FUTURE_MILESTONES } from '@/data/content';
import { Compass, ArrowRight, Target, Sparkles, ArrowUpRight } from 'lucide-react';

export default function WhatsNextSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-900 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent block mb-3 font-semibold">
              Chapter 07 // Forward Horizons
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              What Comes Next?
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            Upcoming alpine ambitions, endurance races, documentary writing, and academic pathways across the globe.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FUTURE_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-carbon-850 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-goldAccent">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stoneLight-300">
                  {item.target}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-goldAccent transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist Contact Callout */}
        <div className="p-8 rounded-3xl glass-panel text-center max-w-3xl mx-auto">
          <p className="text-sm text-stoneLight-300 font-normal mb-4">
            Looking to propose an expedition, athletic collaboration, or media interview?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-carbon-950 font-display font-semibold text-xs tracking-wider uppercase transition-all hover:bg-stoneLight-200"
          >
            <span>Initiate a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
