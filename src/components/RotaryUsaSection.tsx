'use client';

import React from 'react';
import { ROTARY_EXCHANGE_DATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { Globe, Plane, ShieldCheck, Heart, Users, Sparkles, MapPin, Compass } from 'lucide-react';

export default function RotaryUsaSection() {
  return (
    <section id="usa" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent font-semibold">
                Chapter 06 // Transatlantic Bridge
              </span>
              <VerificationPill
                badge={{
                  type: 'direct_statement',
                  label: 'Direct First-Person Statement',
                  sourceNote: 'Supplied directly by Jakub Ondreas. Host family information safely protected.',
                }}
              />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              {ROTARY_EXCHANGE_DATA.title}
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            {ROTARY_EXCHANGE_DATA.subtitle}
          </p>
        </div>

        {/* Feature Transatlantic Hero Composition */}
        <div className="rounded-3xl bg-carbon-900 border border-white/[0.08] p-8 sm:p-12 mb-16 relative overflow-hidden">
          {/* Slovakia to USA Transatlantic Map Vector Graphic */}
          <div className="mb-12 p-8 rounded-2xl bg-carbon-850 border border-white/[0.06] relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Slovakia Origin */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-carbon-800 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-goldAccent">
                  SK
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block">
                    Origin Base
                  </span>
                  <h4 className="text-xl font-display font-bold text-white">Bratislava, Slovakia</h4>
                  <span className="text-xs text-stoneLight-300 font-mono">Danube • Tatras Alpine Roots</span>
                </div>
              </div>

              {/* Transatlantic Vector Path */}
              <div className="flex-1 flex flex-col items-center px-4 w-full md:w-auto">
                <div className="text-[10px] font-mono text-stoneLight-400 mb-2 uppercase tracking-widest">
                  ~7,500 km Transatlantic Bridge
                </div>
                <div className="relative w-full max-w-xs h-[1px] bg-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-goldAccent via-white to-goldAccent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-carbon-850 p-2 rounded-full border border-white/20 text-goldAccent">
                    <Plane className="w-4 h-4 transform rotate-45" />
                  </div>
                </div>
                <span className="text-[9px] font-mono text-stoneLight-500 uppercase tracking-superwide mt-2">
                  Rotary Youth Exchange 2025–2026
                </span>
              </div>

              {/* USA Destination */}
              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block">
                    Exchange Nation
                  </span>
                  <h4 className="text-xl font-display font-bold text-white">United States</h4>
                  <span className="text-xs text-goldAccent font-mono">Full Cultural Immersion</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-carbon-800 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-white">
                  USA
                </div>
              </div>
            </div>
          </div>

          {/* First-person quote */}
          <blockquote className="border-l-2 border-goldAccent pl-6 py-4 text-stoneLight-100 font-editorial italic text-xl sm:text-2xl leading-relaxed bg-white/[0.02] rounded-r-2xl mb-12">
            “{ROTARY_EXCHANGE_DATA.quote}”
            <span className="block mt-3 font-sans not-italic text-xs font-mono uppercase tracking-wider text-stoneLight-400">
              — Jakub Ondreas, Rotary Youth Exchange Student
            </span>
          </blockquote>

          {/* 4 Cultural Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {ROTARY_EXCHANGE_DATA.facets.map((facet, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel">
                <span className="text-[10px] font-mono font-bold text-goldAccent uppercase tracking-widest block mb-2">
                  0{idx + 1} //
                </span>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  {facet.title}
                </h4>
                <p className="text-xs text-stoneLight-400 leading-relaxed font-normal">
                  {facet.text}
                </p>
              </div>
            ))}
          </div>

          {/* Privacy Protocol Badge */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3 text-xs text-stoneLight-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="leading-relaxed font-normal">
              <strong>Personal Privacy & Safety Protocol:</strong> In compliance with exchange student protection standards, host family identities and local high school coordinates are strictly kept private.
            </p>
          </div>
        </div>

        {/* Curated Photography Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImageWithCredit
            creditKey="rotary_landscape"
            alt="Expansive American Mountain Wilderness"
            className="w-full h-80"
            caption="American Landscapes & Wild Spaces"
          />

          <ImageWithCredit
            creditKey="rotary_city"
            alt="American City Skyline at Golden Hour"
            className="w-full h-80"
            caption="Cultural Discovery & Exploration"
          />

          <ImageWithCredit
            creditKey="rotary_friends"
            alt="International Youth Exchange Camaraderie"
            className="w-full h-80"
            caption="Global Community & Friendships"
          />
        </div>
      </div>
    </section>
  );
}
