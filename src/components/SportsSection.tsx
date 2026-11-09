'use client';

import React, { useState } from 'react';
import { ATHLETICS_DATA, OUTDOOR_INTERESTS, SportCard } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import {
  ExternalLink,
  AlertTriangle,
  Award,
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
    <section id="sports" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold block mb-3">
            Physical Performance
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
            {ATHLETICS_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 mt-4 font-normal leading-relaxed">
            From explosive 200m track sprints with AO TJ Slávia STU Bratislava to technical endurance across alpine ridges and rough trails.
          </p>
        </div>

        {/* Feature Athletics Block: Slávia STU Bratislava */}
        <div className="p-8 sm:p-12 rounded-3xl apple-card mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-900 border border-stone-200">
                  {ATHLETICS_DATA.subtitle}
                </span>
                <span className="text-xs text-stone-600">
                  Club: <strong className="text-stone-900">{ATHLETICS_DATA.club}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Sprints, Relays & Competitive Focus
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {ATHLETICS_DATA.narrative}
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-500/25 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Awaiting Official Slovak Athletics Federation (SAZ) Result Sheet</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed font-normal">
                  Jakub stated his participation in the 200-metre discipline and relay events with AO TJ Slávia STU. In accordance with strict fact verification standards, exact championship years, official titles, placing numbers, and timing splits are preserved as editable placeholders until confirmed official documentation is uploaded.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-stone-600 block mb-2 font-semibold">
                  Official Statistics & Club Archives:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {ATHLETICS_DATA.publicDatabases.map((db) => (
                    <a
                      key={db.name}
                      href={db.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-100 text-xs text-stone-900 border border-stone-200 transition-colors"
                    >
                      <Award className="w-3.5 h-3.5 text-emerald-800" />
                      <span>{db.name}</span>
                      <ExternalLink className="w-3 h-3 text-stone-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

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

        {/* 9 Outdoor & Athletic Disciplines Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-600 block mb-1 font-semibold">
                Multi-Sport Competence
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Outdoor & Athletic Disciplines
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1 rounded-full bg-stone-100 border border-stone-200">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCategory(c.id)}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    filterCategory === c.id
                      ? 'bg-white text-black font-semibold'
                      : 'text-stone-700 hover:text-stone-900'
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
                className="rounded-3xl apple-card overflow-hidden flex flex-col justify-between group"
              >
                {sport.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-transparent">
                    <img
                      src={sport.imageUrl}
                      alt={sport.title}
                      className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <VerificationPill badge={sport.status} size="sm" />
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                      {sport.category}
                    </span>

                    <h4 className="text-xl font-bold text-stone-900 mb-2 tracking-tight">
                      {sport.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {sport.description}
                    </p>

                    <blockquote className="font-serif italic text-xs text-stone-900 border-l-2 border-stone-200 pl-3 py-1 my-2">
                      “{sport.firstPersonNote}”
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-stone-200 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {sport.keyAspects.map((aspect) => (
                        <span
                          key={aspect}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
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
