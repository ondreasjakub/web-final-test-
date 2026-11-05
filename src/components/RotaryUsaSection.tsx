'use client';

import React from 'react';
import { ROTARY_EXCHANGE_DATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import { Globe, Plane, ShieldCheck, Heart, Users, Sparkles, MapPin, Compass } from 'lucide-react';

export default function RotaryUsaSection() {
  return (
    <section id="usa" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              International Exchange
            </span>
            <VerificationPill
              badge={{
                type: 'direct_statement',
                label: 'Direct Statement by Jakub',
                sourceNote: 'Supplied directly by Jakub Ondreas. Host family information protected.',
              }}
            />
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {ROTARY_EXCHANGE_DATA.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {ROTARY_EXCHANGE_DATA.subtitle}
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="bg-[#161B21] border border-slate-800 rounded-3xl p-6 sm:p-10 mb-12 relative overflow-hidden">
          {/* Slovakia to USA Transatlantic Visual Map Graphic */}
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#131d17] to-slate-900 border border-slate-800 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              {/* Slovakia Origin */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  SK
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Origin Base</span>
                  <h4 className="text-lg font-serif font-bold text-white">Bratislava, Slovakia</h4>
                  <span className="text-xs text-emerald-400">Danube • Tatras Roots</span>
                </div>
              </div>

              {/* Flight Vector Path */}
              <div className="flex-1 flex flex-col items-center px-4 w-full md:w-auto">
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-1 font-mono">
                  <span>~7,500 km Transatlantic Bridge</span>
                </div>
                <div className="relative w-full max-w-xs h-0.5 bg-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-sky-400 to-amber-400 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-1.5 rounded-full border border-slate-700 text-sky-400">
                    <Plane className="w-4 h-4 transform rotate-45" />
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1.5">
                  Rotary Youth Exchange 2025–2026
                </span>
              </div>

              {/* USA Destination */}
              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Host Country</span>
                  <h4 className="text-lg font-serif font-bold text-white">United States</h4>
                  <span className="text-xs text-sky-400">Cultural Immersion Year</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
                  US
                </div>
              </div>
            </div>
          </div>

          {/* First-person quote */}
          <blockquote className="border-l-4 border-sky-500 pl-6 py-3 text-slate-200 italic font-editorial text-lg sm:text-xl leading-relaxed bg-slate-900/40 rounded-r-xl mb-8">
            “{ROTARY_EXCHANGE_DATA.quote}”
            <span className="block mt-2 font-sans not-italic text-xs text-slate-400 font-medium">
              — Jakub Ondreas, Rotary Youth Exchange Student
            </span>
          </blockquote>

          {/* Cultural Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROTARY_EXCHANGE_DATA.facets.map((facet, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="font-editorial text-base font-bold text-white mb-2">
                  {facet.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {facet.text}
                </p>
              </div>
            ))}
          </div>

          {/* Privacy Protocol Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="leading-relaxed">
              <strong>Personal Privacy & Safety Protocol:</strong> In compliance with minor protection and exchange safety standards, host family names, high school name, and local residential coordinates are intentionally omitted from public publication.
            </p>
          </div>
        </div>

        {/* Editable Exchange Photo Gallery Slots */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#161B21] border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-editorial text-xl font-bold text-white">
                Exchange Photo Gallery (Editable Slots)
              </h3>
              <p className="text-xs text-slate-400">
                Ready for Jakub to insert personal exchange memories and school milestones
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
              Ready for image URLs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-slate-900 border border-dashed border-slate-700 flex flex-col items-center justify-center text-center h-48">
              <Sparkles className="w-8 h-8 text-emerald-400/50 mb-2" />
              <span className="text-xs font-semibold text-white">High School & Campus Life</span>
              <span className="text-[11px] text-slate-400 mt-1">Slot for sports match / class day photo</span>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-dashed border-slate-700 flex flex-col items-center justify-center text-center h-48">
              <Users className="w-8 h-8 text-sky-400/50 mb-2" />
              <span className="text-xs font-semibold text-white">Rotary Youth Conference</span>
              <span className="text-[11px] text-slate-400 mt-1">Slot for international student gathering</span>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-dashed border-slate-700 flex flex-col items-center justify-center text-center h-48">
              <Compass className="w-8 h-8 text-amber-400/50 mb-2" />
              <span className="text-xs font-semibold text-white">American Landscapes & Travel</span>
              <span className="text-[11px] text-slate-400 mt-1">Slot for regional travel photography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
