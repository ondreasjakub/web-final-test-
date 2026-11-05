'use client';

import React from 'react';
import { FUTURE_MILESTONES } from '@/data/content';
import { Compass, ArrowRight, Target, Sparkles } from 'lucide-react';

export default function WhatsNextSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Future Horizons
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            What Comes Next?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Upcoming alpine ambitions, endurance races, documentary writing, and academic pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FUTURE_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#161B21] border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 font-mono">
                  {item.category}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                  {item.target}
                </span>
              </div>

              <h3 className="font-editorial text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            Looking to propose an expedition, athletic collaboration, or media interview?{' '}
            <a href="#contact" className="text-emerald-400 hover:underline font-medium">
              Get in touch below
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
