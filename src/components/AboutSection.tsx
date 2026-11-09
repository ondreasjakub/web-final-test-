'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { MapPin, Mountain, Compass, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="story" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold">
              About Jakub
            </span>
            <VerificationPill
              badge={{
                type: 'public_record',
                label: 'Verified Public Profile',
                sourceNote: 'Synthesized from author profiles, STVR national broadcasts, and club records.',
              }}
            />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
            Rooted in the mountains. Driven by autonomy.
          </h2>
          <p className="text-base sm:text-lg text-stone-700 mt-4 font-normal leading-relaxed">
            A Slovak student, alpinist, and sprinter approaching endurance and learning through disciplined, independent experience.
          </p>
        </div>

        {/* Apple 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
            <p className="text-stone-900 text-xl sm:text-2xl font-serif italic border-l-2 border-stone-200 pl-5 my-2">
              “Mountains do not negotiate. They demand physical stamina, technical precision, and absolute autonomy.”
            </p>

            <p>
              I was born and raised in <strong>Bratislava, Slovakia</strong>, where urban education and track athletics formed the baseline of my daily life. However, my deepest sense of clarity and focus has always been found high in the mountains — particularly the rugged ridges of the <strong>Western Tatras (Západné Tatry)</strong> and <strong>Žiarska dolina</strong>.
            </p>

            <p>
              Žiarska dolina served as my initial proving ground. In the Tatras, steep terrain, shifting winter snowpacks, and technical ridgelines taught me that mountains require respect. Physical conditioning, rope mechanics, and avalanche decision-making are non-negotiable. That early grounding directly enabled me to tackle the <strong>Roof of the Alps</strong> at age 14, skiing down Mont Blanc after months of disciplined preparation.
            </p>

            <p>
              Whether it is sprinting 200-metre intervals with <strong>AO TJ Slávia STU Bratislava</strong>, bikepacking self-supported across varied topography, or traversing three nations around Mont Blanc with a trusted friend, I believe that true personal development comes from taking full responsibility for one’s path.
            </p>

            <p className="text-stone-900 font-medium">
              Today, I am expanding those horizons across the Atlantic, living and learning in the United States as an exchange student through <strong>Rotary Youth Exchange</strong> — discovering another culture, forging lifelong international friendships, and growing as an independent individual.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="/expeditions"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 border border-stone-200 transition-all"
              >
                <span>Mont Blanc & TMB Traverses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/sports"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-transparent hover:bg-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-900 border border-stone-200 transition-all"
              >
                <span>Track & Outdoor Disciplines</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card & Key Facts */}
          <div className="lg:col-span-5 space-y-6">
            <ImageWithCredit
              creditKey="montblanc_refuge"
              alt="High Alpine Refuge Hut in Alps"
              className="w-full h-72 sm:h-80 shadow-2xl"
              caption="Alpine Proving Ground • High Ridge"
            />

            {/* Apple Card Stack */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl apple-card">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-800" /> Origin & Base
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    Public Profile
                  </span>
                </div>
                <h4 className="font-semibold text-stone-900 text-base">Bratislava, Slovakia</h4>
                <p className="text-xs text-stone-700 mt-1">
                  Hometown and athletic club training ground along the Danube.
                </p>
              </div>

              <div className="p-5 rounded-2xl apple-card">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-emerald-800" /> Alpine Grounding
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    Published Record
                  </span>
                </div>
                <h4 className="font-semibold text-stone-900 text-base">Western Tatras & Žiarska dolina</h4>
                <p className="text-xs text-stone-700 mt-1">
                  Foundational winter mountaineering, ice axe skills, and steep alpine descents.
                </p>
              </div>

              <div className="p-5 rounded-2xl apple-card">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-800" /> Current Program
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    Direct Statement
                  </span>
                </div>
                <h4 className="font-semibold text-stone-900 text-base">Rotary Youth Exchange • USA</h4>
                <p className="text-xs text-stone-700 mt-1">
                  Transatlantic high school exchange year (2025–2026), international friendships, and cultural discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
