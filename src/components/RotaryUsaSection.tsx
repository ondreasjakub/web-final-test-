'use client';

import React from 'react';
import { ROTARY_EXCHANGE_DATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { Plane, ShieldCheck } from 'lucide-react';

export default function RotaryUsaSection() {
  return (
    <section id="usa" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0E] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-apple-muted font-semibold">
              International Exchange
            </span>
            <VerificationPill
              badge={{
                type: 'direct_statement',
                label: 'Direct Statement',
                sourceNote: 'Supplied directly by Jakub Ondreas. Host family information safely protected.',
              }}
            />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {ROTARY_EXCHANGE_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-apple-subtext mt-4 font-normal leading-relaxed">
            {ROTARY_EXCHANGE_DATA.subtitle}
          </p>
        </div>

        {/* Feature Transatlantic Hero Composition */}
        <div className="p-8 sm:p-12 rounded-3xl apple-card mb-14 relative overflow-hidden">
          {/* Slovakia to USA Transatlantic Map Vector Graphic */}
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-bold text-sm text-white">
                  SK
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-apple-muted block">
                    Origin Base
                  </span>
                  <h4 className="text-lg font-bold text-white">Bratislava, Slovakia</h4>
                  <span className="text-xs text-apple-subtext">Danube • Tatras Alpine Roots</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center px-4 w-full md:w-auto">
                <div className="text-[11px] font-mono text-apple-muted mb-1.5 uppercase tracking-wider">
                  ~7,500 km Transatlantic Bridge
                </div>
                <div className="relative w-full max-w-xs h-[1px] bg-white/20">
                  <div className="absolute inset-0 bg-white" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121216] p-1.5 rounded-full border border-white/20 text-white">
                    <Plane className="w-3.5 h-3.5 transform rotate-45" />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-apple-muted uppercase tracking-widest mt-2">
                  Rotary Youth Exchange 2025–2026
                </span>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-apple-muted block">
                    Host Nation
                  </span>
                  <h4 className="text-lg font-bold text-white">United States</h4>
                  <span className="text-xs text-apple-blue font-medium">Cultural Immersion</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-bold text-sm text-white">
                  USA
                </div>
              </div>
            </div>
          </div>

          {/* First-person quote */}
          <blockquote className="border-l-2 border-white/40 pl-5 py-3 text-[#F5F5F7] font-serif italic text-lg sm:text-xl leading-relaxed mb-10">
            “{ROTARY_EXCHANGE_DATA.quote}”
            <span className="block mt-2 font-sans not-italic text-xs font-semibold uppercase tracking-wider text-apple-muted">
              — Jakub Ondreas, Rotary Youth Exchange Student
            </span>
          </blockquote>

          {/* 4 Cultural Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {ROTARY_EXCHANGE_DATA.facets.map((facet, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[11px] font-mono font-bold text-apple-blue uppercase block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {facet.title}
                </h4>
                <p className="text-xs text-apple-subtext leading-relaxed font-normal">
                  {facet.text}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center gap-3 text-xs text-apple-muted">
            <ShieldCheck className="w-4 h-4 text-apple-green flex-shrink-0" />
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
