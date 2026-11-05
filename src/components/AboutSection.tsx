'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/content';
import VerificationPill from './VerificationPill';
import { MapPin, Compass, Mountain, BookOpen, Award, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#0E1216]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Profile & Philosophy
              </span>
              <VerificationPill
                badge={{
                  type: 'public_record',
                  label: 'Public Source & Direct Record',
                  sourceNote: 'Synthesized from author profiles, STVR broadcasts, and direct statements.',
                }}
              />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Rooted in the Mountains. Driven by Autonomy.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            A Slovak student, alpinist, and runner approaching endurance and learning through disciplined, independent experience.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I was born and raised in <strong>Bratislava, Slovakia</strong>, where urban education and athletics formed the baseline of my daily life. However, my deepest sense of clarity and focus has always been found high in the mountains — particularly the rugged ridges of the <strong>Western Tatras (Západné Tatry)</strong> and <strong>Žiarska dolina</strong>.
            </p>
            <p>
              The Western Tatras served as my initial proving ground. In Žiarska dolina, steep terrain, shifting winter conditions, and technical ridgelines taught me that mountains do not compromise. Respect for nature, physical stamina, and meticulous rope and navigation skills are non-negotiable. That early grounding directly enabled me to tackle the <strong>Roof of the Alps</strong> at age 14, skiing down Mont Blanc after months of targeted training.
            </p>
            <p>
              Whether it is sprinting 200-metre intervals with <strong>AO TJ Slávia STU Bratislava</strong>, bikepacking self-supported across varied topography, or traversing three nations around Mont Blanc with a trusted friend, I believe that true personal development comes from taking full responsibility for one’s path.
            </p>
            <p className="text-slate-200 font-medium">
              Today, I am expanding those horizons across the Atlantic, living and learning in the United States as an exchange student through <strong>Rotary Youth Exchange</strong> — embracing international friendships and cross-cultural discovery.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#expeditions"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2 rounded-lg transition-colors"
              >
                <span>Read Mont Blanc & TMB Expeditions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#publications"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>Published Articles</span>
              </a>
            </div>
          </div>

          {/* Core Pillars / Fact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Origin & Geography Card */}
            <div className="p-5 rounded-2xl bg-[#161B21] border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Origin & Base
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  Public Profile
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                Bratislava, Slovakia
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hometown and club training base. Close proximity to the Little Carpathians and regular expeditions to northern Slovak ranges.
              </p>
            </div>

            {/* Alpine Proving Ground Card */}
            <div className="p-5 rounded-2xl bg-[#161B21] border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                  Alpine Territory
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  Verified In Articles
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                Western Tatras & Žiarska dolina
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Foundational winter mountaineering, ice axe and crampon maneuvers, avalanche decision-making, and steep ski descents.
              </p>
            </div>

            {/* Club Card */}
            <div className="p-5 rounded-2xl bg-[#161B21] border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  Athletics Club
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-500/30">
                  Direct Statement
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                AO TJ Slávia STU Bratislava
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Track and field sprint squad focusing on 200m discipline and team relay coordination.
              </p>
            </div>

            {/* Current Chapter Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#161B21] to-[#161B21] border border-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Current Program
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-500/30">
                  Direct Statement
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                Rotary Youth Exchange • USA
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High school exchange year in the United States (2025–2026), discovering American society, expanding English fluency, and building lifelong international connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
