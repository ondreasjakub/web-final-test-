'use client';

import React, { useState } from 'react';
import { ATHLETICS_DATA, OUTDOOR_INTERESTS, SportCard } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import {
  Trophy,
  ExternalLink,
  AlertTriangle,
  Award,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';

export default function SportsSection() {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines (9)' },
    { id: 'Track & Field', label: 'Track & Sprint' },
    { id: 'Winter Alpinism', label: 'Ski & Winter' },
    { id: 'Cycling', label: 'Cycling & MTB' },
    { id: 'Long-Distance Trekking', label: 'Trekking & Climbing' },
  ];

  const filteredSports =
    filterCategory === 'all'
      ? OUTDOOR_INTERESTS
      : OUTDOOR_INTERESTS.filter((s) => {
          if (filterCategory === 'Winter Alpinism') {
            return s.category === 'Winter Alpinism' || s.category === 'Winter Mountain' || s.category === 'Winter Endurance';
          }
          if (filterCategory === 'Cycling') {
            return s.category === 'Cycling' || s.category === 'Endurance Travel';
          }
          if (filterCategory === 'Long-Distance Trekking') {
            return s.category === 'Long-Distance Trekking' || s.category === 'Vertical Terrain' || s.category === 'Exploration';
          }
          return s.category === filterCategory;
        });

  return (
    <section id="sports" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent block mb-3 font-semibold">
              Chapter 04 // Physical Discipline & Speed
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              {ATHLETICS_DATA.title}
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            From explosive 200m track sprints with AO TJ Slávia STU Bratislava to technical endurance across alpine ridges and rough trails.
          </p>
        </div>

        {/* Feature Athletics Block: AO TJ Slávia STU Bratislava */}
        <div className="rounded-3xl bg-carbon-900 border border-white/[0.08] p-8 sm:p-12 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/5 text-stoneLight-200 border border-white/10">
                  {ATHLETICS_DATA.subtitle}
                </span>
                <span className="text-xs font-mono text-stoneLight-400">
                  Club: <strong className="text-white">{ATHLETICS_DATA.club}</strong>
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Sprints, Relays & Competitive Focus
              </h3>

              <p className="text-stoneLight-300 text-sm sm:text-base leading-relaxed">
                {ATHLETICS_DATA.narrative}
              </p>

              {/* Official Verification Notice for Athletics */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/25 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Awaiting Official Slovak Athletics Federation (SAZ) Result Sheet</span>
                </div>
                <p className="text-xs text-amber-200/80 leading-relaxed font-normal">
                  Jakub stated his participation in the 200-metre discipline and relay events with AO TJ Slávia STU. In accordance with strict fact verification standards, exact championship years, official titles, placing numbers, and timing splits are preserved as editable placeholders until confirmed official documentation is uploaded.
                </p>
              </div>

              {/* Public Databases Links */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-3 font-semibold">
                  Official Statistics & Club Archives:
                </span>
                <div className="flex flex-wrap gap-3">
                  {ATHLETICS_DATA.publicDatabases.map((db) => (
                    <a
                      key={db.name}
                      href={db.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-carbon-800 hover:bg-carbon-700 text-xs font-mono text-stoneLight-200 hover:text-white border border-white/10 transition-colors"
                    >
                      <Award className="w-3.5 h-3.5 text-goldAccent" />
                      <span>{db.name}</span>
                      <ExternalLink className="w-3 h-3 text-stoneLight-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Curated Athletics Imagery */}
            <div className="lg:col-span-5 space-y-4">
              <ImageWithCredit
                creditKey="athletics_sprint"
                alt="Sprinter Accelerating on Running Track"
                className="w-full h-80 sm:h-96"
                caption="200-Metre Sprint Discipline"
              />
            </div>
          </div>
        </div>

        {/* 9 Outdoor & Athletic Disciplines Visual Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-goldAccent block mb-1">
                Multi-Sport Competence
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Outdoor & Athletic Disciplines
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-carbon-900 border border-white/[0.08]">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCategory(c.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    filterCategory === c.id
                      ? 'bg-white text-carbon-950 font-bold shadow-md'
                      : 'text-stoneLight-400 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSports.map((sport) => (
              <div
                key={sport.id}
                className="rounded-3xl bg-carbon-900 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual Thumbnail */}
                {sport.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-carbon-850">
                    <img
                      src={sport.imageUrl}
                      alt={sport.title}
                      className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <VerificationPill badge={sport.status} size="sm" />
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-goldAccent block mb-1">
                      {sport.category}
                    </span>

                    <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-goldAccent transition-colors">
                      {sport.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed mb-4">
                      {sport.description}
                    </p>

                    <blockquote className="font-editorial italic text-xs text-stoneLight-200 border-l-2 border-white/20 pl-3 py-1 my-3">
                      “{sport.firstPersonNote}”
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {sport.keyAspects.map((aspect) => (
                        <span
                          key={aspect}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-carbon-800 text-stoneLight-400 border border-white/[0.04]"
                        >
                          {aspect}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
