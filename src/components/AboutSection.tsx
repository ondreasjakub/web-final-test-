'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { MapPin, Mountain, Compass, Award, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="story" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent font-semibold">
                Chapter 01 // Origins & Ethos
              </span>
              <VerificationPill
                badge={{
                  type: 'public_record',
                  label: 'Public Archive & Direct Record',
                  sourceNote: 'Synthesized from author profiles, national TV broadcast, and club records.',
                }}
              />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Rooted in the Mountains. Driven by Autonomy.
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            Approaching endurance, alpine ski-mountaineering, and international education with rigorous discipline and personal responsibility.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-stoneLight-300 text-base sm:text-lg leading-relaxed">
            <blockquote className="font-editorial italic text-2xl sm:text-3xl text-white font-light border-l-2 border-goldAccent pl-6 py-2 my-4">
              “Mountains do not negotiate. They demand physical stamina, technical precision, and absolute self-reliance.”
            </blockquote>

            <p>
              I was born and raised in <strong>Bratislava, Slovakia</strong>, where urban education and track athletics formed the baseline of my daily life. However, my deepest sense of clarity and focus has always been found high in the mountains — particularly the rugged ridges of the <strong>Western Tatras (Západné Tatry)</strong> and <strong>Žiarska dolina</strong>.
            </p>

            <p>
              Žiarska dolina served as my initial proving ground. In the Tatras, steep terrain, shifting winter snowpacks, and technical ridgelines taught me that mountains require respect. Physical conditioning, rope mechanics, and avalanche decision-making are non-negotiable. That early grounding directly enabled me to tackle the <strong>Roof of the Alps</strong> at age 14, skiing down Mont Blanc after months of disciplined preparation.
            </p>

            <p>
              Whether it is sprinting 200-metre intervals with <strong>AO TJ Slávia STU Bratislava</strong>, bikepacking self-supported across varied topography, or traversing three nations around Mont Blanc with a trusted friend, I believe that true personal development comes from taking full responsibility for one’s path.
            </p>

            <p className="text-white font-medium">
              Today, I am expanding those horizons across the Atlantic, living and learning in the United States as an exchange student through <strong>Rotary Youth Exchange</strong> — discovering another culture, forging lifelong international friendships, and growing as an independent individual.
            </p>

            {/* Quick Navigation Links */}
            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="#expeditions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono uppercase tracking-wider text-white border border-white/10 transition-colors"
              >
                <span>Mont Blanc & TMB Expeditions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-goldAccent" />
              </a>

              <a
                href="#sports"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-carbon-900 hover:bg-carbon-850 text-xs font-mono uppercase tracking-wider text-stoneLight-300 border border-white/5 transition-colors"
              >
                <span>Track & Outdoor Disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Visual & Key Fact Pillars Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Curated High-Altitude Alpine Imagery */}
            <ImageWithCredit
              creditKey="montblanc_refuge"
              alt="High Alpine Refuge Hut Perched on Ridge"
              className="w-full h-72 sm:h-80 shadow-2xl"
              caption="Alpine Proving Ground • High Ridge"
            />

            {/* Fact Cards */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl glass-panel group hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-goldAccent" /> Origin & Base
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-stoneLight-300 border border-white/10">
                    Public Profile
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-base">Bratislava, Slovakia</h4>
                <p className="text-xs text-stoneLight-400 mt-1">
                  Hometown and athletic club training ground along the Danube.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel group hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-emerald-400" /> Mountain Roots
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-stoneLight-300 border border-white/10">
                    Verified In Writing
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-base">Western Tatras & Žiarska dolina</h4>
                <p className="text-xs text-stoneLight-400 mt-1">
                  Foundational winter mountaineering, ice axe skills, and steep alpine descents.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel group hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-sky-400" /> Current Exchange
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-stoneLight-300 border border-white/10">
                    Direct Statement
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-base">Rotary Youth Exchange • USA</h4>
                <p className="text-xs text-stoneLight-400 mt-1">
                  Transatlantic high school year (2025–2026), cultural bridge-building, and language fluency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
