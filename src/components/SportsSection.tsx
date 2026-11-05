'use client';

import React, { useState } from 'react';
import { ATHLETICS_DATA, OUTDOOR_INTERESTS, SportCard } from '@/data/content';
import VerificationPill from './VerificationPill';
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
    <section id="sports" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              Athletics & Mountain Disciplines
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {ATHLETICS_DATA.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            From explosive 200m track sprints with AO TJ Slávia STU Bratislava to technical endurance across alpine ridges and rough trails.
          </p>
        </div>

        {/* Feature Athletics Block: AO TJ Slávia STU Bratislava */}
        <div className="bg-[#161B21] border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  {ATHLETICS_DATA.subtitle}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Club: <strong className="text-white">{ATHLETICS_DATA.club}</strong>
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Sprints, Relays & Competitive Focus
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {ATHLETICS_DATA.narrative}
              </p>

              {/* Official Verification Notice for Athletics */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Awaiting Official Slovak Athletics Federation (SAZ) Result Sheet</span>
                </div>
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  Jakub stated his participation in the 200-metre discipline and relay events with AO TJ Slávia STU. In accordance with strict fact verification standards, exact championship years, official titles, placing numbers, and timing splits are preserved as editable placeholders until confirmed official documentation is uploaded.
                </p>
              </div>

              {/* Public Databases Links */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Official Statistics & Club Archives:
                </span>
                <div className="flex flex-wrap gap-3">
                  {ATHLETICS_DATA.publicDatabases.map((db) => (
                    <a
                      key={db.name}
                      href={db.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-emerald-400 border border-slate-700/80 transition-colors"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>{db.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Results Placeholder & Certificate Slots */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Official Results Archive (Editable Slots)
                  </h4>
                  <VerificationPill badge={ATHLETICS_DATA.statusBadge} size="sm" />
                </div>

                {/* Placeholder Card 1 */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-dashed border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">200m Sprint Discipline</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      Pending SAZ Doc
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Individual 200m sprint race time & season ranking record.
                  </p>
                  <div className="text-[11px] text-emerald-400 font-mono">
                    Status: Verified club runner (AO TJ Slávia STU)
                  </div>
                </div>

                {/* Placeholder Card 2 */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-dashed border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Championship Relay Format</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      Pending Confirmation
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Club relay leg participation and Slovak championship tournament record.
                  </p>
                  <div className="text-[11px] text-slate-500 italic">
                    Placeholder awaiting official certificate scan or SAZ statistic link.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-center">
                  <p className="text-xs text-emerald-300">
                    Jakub can add verified championship certificates directly in <code className="text-white">src/data/content.ts</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Cards for All 9 Outdoor & Sporting Interests */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Outdoor & Athletic Disciplines
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Visual cards covering Jakub&apos;s verified sports and outdoor pursuits
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCategory(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filterCategory === c.id
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSports.map((sport) => (
              <div
                key={sport.id}
                className="p-6 rounded-2xl bg-[#161B21] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                      {sport.category}
                    </span>
                    <VerificationPill badge={sport.status} size="sm" />
                  </div>

                  <h4 className="font-editorial text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {sport.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {sport.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-4">
                    <p className="text-xs italic text-slate-300 font-serif">
                      “{sport.firstPersonNote}”
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {sport.keyAspects.map((aspect) => (
                      <span
                        key={aspect}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                      >
                        {aspect}
                      </span>
                    ))}
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
