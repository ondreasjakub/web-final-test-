'use client';

import React, { useState } from 'react';
import { MONT_BLANC_EXPEDITION, TMB_EXPEDITION, PHOTO_CREDITS, StageInfo } from '@/data/content';
import ImageWithCredit from './ImageWithCredit';
import VerificationPill from './VerificationPill';
import {
  Mountain,
  Compass,
  Calendar,
  MapPin,
  ExternalLink,
  ShieldAlert,
  ChevronRight,
  Users,
  Footprints,
  Plane,
  Bus,
  Check,
} from 'lucide-react';

export default function ExpeditionsSection() {
  const [activeTab, setActiveTab] = useState<'tmb' | 'montblanc'>('tmb');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const selectedStage = TMB_EXPEDITION.stages[selectedStageIndex];

  return (
    <section id="expeditions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
            Alpine Expeditions & Long-Distance Traverses
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            High Altitudes. Autonomous Journeys.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Documented Alpine achievements — from high-consequence ski-mountaineering at 4,806 metres to self-supported multi-day trekking across international borders.
          </p>

          {/* Expedition Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('tmb')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'tmb'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Tour du Mont Blanc (2026)</span>
            </button>

            <button
              onClick={() => setActiveTab('montblanc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'montblanc'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mountain className="w-4 h-4" />
              <span>Mont Blanc Ski Ascent (2025)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TOUR DU MONT BLANC 2026 */}
        {activeTab === 'tmb' && (
          <div className="space-y-12 animate-fade-in">
            {/* Header banner */}
            <div className="bg-[#161B21] border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                    {TMB_EXPEDITION.subtitle}
                  </span>
                  <VerificationPill
                    badge={{
                      type: 'direct_statement',
                      label: 'Direct First-Person Account',
                      sourceNote: 'Supplied directly by Jakub Ondreas. Route map is an illustrative reference asset.',
                    }}
                  />
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  {TMB_EXPEDITION.title}
                </h3>

                {/* Jakub's verbatim quote */}
                <blockquote className="border-l-4 border-emerald-500 pl-5 py-2 my-6 text-slate-200 italic font-editorial text-base sm:text-lg leading-relaxed bg-slate-900/40 rounded-r-xl">
                  “{TMB_EXPEDITION.quote}”
                  <span className="block mt-2 font-sans not-italic text-xs text-slate-400 font-medium">
                    — Jakub Ondreas (with friend Ondrej Kuchyňa)
                  </span>
                </blockquote>

                {/* Journey Logistics Sequence */}
                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                    Journey Sequence:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Slovakia
                    </span>
                    <span className="text-slate-500">➔</span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-sky-400" /> Milan (Flight)
                    </span>
                    <span className="text-slate-500">➔</span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                      <Bus className="w-3.5 h-3.5 text-amber-400" /> Chamonix (Bus)
                    </span>
                    <span className="text-slate-500">➔</span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                      <Footprints className="w-3.5 h-3.5" /> Tour du Mont Blanc (160 km Trek)
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
                {TMB_EXPEDITION.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                      {s.label}
                    </span>
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-white block">
                      {s.value}
                    </span>
                    <span className="text-xs text-slate-400">{s.detail}</span>
                  </div>
                ))}
              </div>

              {/* Fact Integrity Notice */}
              <div className="mt-6 p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  <strong>Strict Fact Standard:</strong> Neither Jakub nor Ondrej claims to have been the &ldquo;youngest in the world&rdquo; to complete the Tour du Mont Blanc, as no world record has been independently verified. This website prioritizes rigorous truth over sensationalism.
                </p>
              </div>
            </div>

            {/* Interactive Route Map & Stage Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Map Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-[#161B21] border border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Route Overview Map
                      </h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-500/30">
                      Route Illustration
                    </span>
                  </div>

                  <ImageWithCredit
                    creditKey="tmb_route_map"
                    alt="Tour du Mont Blanc Route Map by Hiiker paul"
                    className="w-full h-80 sm:h-96"
                  />

                  <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
                    <p className="mb-2">
                      <strong>GPS Notice:</strong> This map is an illustrative route reference (CC BY-SA 4.0 by Hiiker paul) representing the standard Tour du Mont Blanc 160-km circuit. It is not the boys&apos; raw 2026 satellite log.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.montourdumontblanc.com/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                      >
                        <span>Official TMB Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://www2.montourdumontblanc.com/en/the-route"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-300 hover:text-white hover:underline"
                      >
                        <span>Official Route Info</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trail Scenery Illustrative Card */}
                <div className="p-4 rounded-2xl bg-[#161B21] border border-slate-800">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Trail Atmosphere Reference (GR5 / TMB)
                  </h4>
                  <ImageWithCredit
                    creditKey="gr5_trail"
                    alt="GR5 / Tour du Pays du Mont Blanc trail by Guilhem Vellut"
                    className="w-full h-56"
                  />
                </div>
              </div>

              {/* Stage Explorer Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-[#161B21] border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-editorial text-xl font-bold text-white">
                      6.5-Day Route Itinerary Breakdown
                    </h4>
                    <span className="text-xs text-slate-400">Select day to inspect</span>
                  </div>

                  {/* Day Pills Selector */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
                    {TMB_EXPEDITION.stages.map((st, idx) => (
                      <button
                        key={st.day}
                        onClick={() => setSelectedStageIndex(idx)}
                        className={`p-2 rounded-xl text-center border transition-all ${
                          selectedStageIndex === idx
                            ? 'bg-emerald-700 border-emerald-500 text-white font-semibold shadow-md'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <span className="text-xs block font-bold">{st.day}</span>
                        <span className="text-[10px] block opacity-80">{st.country}</span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Stage Detail Card */}
                  {selectedStage && (
                    <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono">
                            {selectedStage.day} • {selectedStage.country}
                          </span>
                          <h5 className="text-lg font-serif font-bold text-white mt-0.5">
                            {selectedStage.title}
                          </h5>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Stage Distance</span>
                          <span className="font-semibold text-white text-sm">{selectedStage.distanceKm}</span>
                        </div>
                        <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block mb-0.5">Elevation Gain / Loss</span>
                          <span className="font-semibold text-white text-sm">{selectedStage.elevation}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                          Waypoints / Route:
                        </span>
                        <p className="text-sm font-medium text-slate-200">
                          {selectedStage.fromTo}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                          Stage Highlights:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {selectedStage.highlights}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* People Met Story Card */}
                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <h5 className="text-sm font-semibold text-white uppercase tracking-wider">
                        {TMB_EXPEDITION.peopleMetStory.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {TMB_EXPEDITION.peopleMetStory.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MONT BLANC 2025 SKI ASCENT */}
        {activeTab === 'montblanc' && (
          <div className="space-y-12 animate-fade-in">
            {/* Header banner */}
            <div className="bg-[#161B21] border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                    {MONT_BLANC_EXPEDITION.subtitle}
                  </span>
                  <VerificationPill
                    badge={{
                      type: 'public_record',
                      label: 'Verified Public Journalism',
                      sourceNote: 'Published in Tulení pásy (2025) and reported on STVR Slovak National Television.',
                      sourceUrl: MONT_BLANC_EXPEDITION.authorArticleUrl,
                    }}
                  />
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  {MONT_BLANC_EXPEDITION.title}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  In spring 2025, at 14 years old, Jakub completed a high-altitude ski-mountaineering ascent of Mont Blanc (4,806 m) via the classic Grands Mulets route. The achievement culminated an intensive year of preparation that began in 2024 with technical winter conditioning in the Western Tatras.
                </p>

                {/* Primary Source Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={MONT_BLANC_EXPEDITION.authorArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide transition-colors"
                  >
                    <span>Read Jakub&apos;s Article on Tulení pásy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={MONT_BLANC_EXPEDITION.stvrReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold tracking-wide transition-colors"
                  >
                    <span>Watch STVR National TV Report</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mont Blanc Visual & Timeline Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 pt-8 border-t border-slate-800 items-start">
                {/* Visual Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Mont Blanc Massif — North Face (Illustrative)
                    </span>
                    <ImageWithCredit
                      creditKey="mont_blanc_north_face"
                      alt="Mont Blanc North Face by Christian"
                      className="w-full h-80"
                    />
                    <p className="text-[11px] text-slate-400 mt-3 italic">
                      Illustrative scenery reference. Photographs from Jakub’s personal summit descent can be viewed on his published Tulení pásy article.
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                      Expedition Core Takeaways
                    </h4>
                    {MONT_BLANC_EXPEDITION.keyTakeaways.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-emerald-500/50 pl-3 py-1">
                        <span className="text-xs font-bold text-white block">{item.label}</span>
                        <span className="text-xs text-slate-400 leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Column */}
                <div className="lg:col-span-7 space-y-6">
                  <h4 className="font-editorial text-2xl font-bold text-white">
                    Verified Expedition Timeline
                  </h4>

                  <div className="space-y-6 relative border-l-2 border-slate-800 ml-3 pl-6">
                    {MONT_BLANC_EXPEDITION.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-2 border-[#161B21]" />

                        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">
                              {step.period}
                            </span>
                            <VerificationPill badge={step.verification} size="sm" />
                          </div>

                          <h5 className="text-base font-serif font-bold text-white mb-2">
                            {step.title}
                          </h5>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {step.description}
                          </p>

                          {step.verification.sourceUrl && (
                            <div className="mt-3 pt-2 border-t border-slate-800/80">
                              <a
                                href={step.verification.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline"
                              >
                                <span>Verify source document</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
