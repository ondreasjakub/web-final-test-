'use client';

import React, { useState } from 'react';
import { MONT_BLANC_EXPEDITION, TMB_EXPEDITION, PHOTO_CREDITS, StageInfo } from '@/data/content';
import ImageWithCredit from './ImageWithCredit';
import VerificationPill from './VerificationPill';
import {
  Mountain,
  Compass,
  ExternalLink,
  ShieldAlert,
  Users,
  ArrowRight,
} from 'lucide-react';

export default function ExpeditionsSection() {
  const [activeTab, setActiveTab] = useState<'tmb' | 'montblanc'>('tmb');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const selectedStage = TMB_EXPEDITION.stages[selectedStageIndex];

  return (
    <section id="expeditions" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0E] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-apple-muted font-semibold block mb-3">
            Expeditions & Traverses
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            High altitudes. Autonomous journeys.
          </h2>
          <p className="text-base sm:text-lg text-apple-subtext mt-4 font-normal leading-relaxed">
            Documented Alpine achievements — from high-consequence ski-mountaineering at 4,806 metres to self-supported trekking across three nations.
          </p>
        </div>

        {/* Apple Segmented Switcher Control */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1 rounded-full bg-[#18181E] border border-white/[0.1]">
            <button
              onClick={() => setActiveTab('tmb')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'tmb'
                  ? 'bg-white text-black shadow-md'
                  : 'text-apple-subtext hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Tour du Mont Blanc (2026)</span>
            </button>

            <button
              onClick={() => setActiveTab('montblanc')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'montblanc'
                  ? 'bg-white text-black shadow-md'
                  : 'text-apple-subtext hover:text-white'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>Mont Blanc Ski Ascent (2025)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TOUR DU MONT BLANC 2026 */}
        {activeTab === 'tmb' && (
          <div className="space-y-12 animate-fade-in">
            {/* Top Feature Card */}
            <div className="p-8 sm:p-12 rounded-3xl apple-card relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.08] text-white border border-white/[0.1]">
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

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {TMB_EXPEDITION.title}
                </h3>

                {/* Jakub's verbatim quote */}
                <blockquote className="border-l-2 border-white/40 pl-5 py-2 my-6 text-[#F5F5F7] font-serif italic text-lg sm:text-xl leading-relaxed">
                  “{TMB_EXPEDITION.quote}”
                  <span className="block mt-2 font-sans not-italic text-xs text-apple-muted font-medium uppercase tracking-wider">
                    — Jakub Ondreas (with friend Ondrej Kuchyňa)
                  </span>
                </blockquote>

                {/* Sequence */}
                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <span className="text-xs uppercase tracking-wider text-apple-muted block mb-3 font-semibold">
                    Journey Sequence:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TMB_EXPEDITION.itinerarySequence.map((item) => (
                      <div key={item.step} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                        <span className="text-[11px] font-mono text-apple-blue block mb-1 font-bold">
                          {item.step}
                        </span>
                        <span className="text-xs font-semibold text-white block mb-0.5">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-apple-subtext leading-tight block">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Key Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 pt-8 border-t border-white/[0.08]">
                {TMB_EXPEDITION.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
                      {s.label}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-xs text-apple-subtext">{s.detail}</span>
                  </div>
                ))}
              </div>

              {/* Fact Integrity Notice */}
              <div className="mt-8 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/25 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed font-normal">
                  <strong>Fact Standard:</strong> Neither Jakub nor Ondrej claims to have been the &ldquo;youngest in the world&rdquo; to complete the Tour du Mont Blanc, as no world record has been independently verified. This website prioritizes rigorous truth over sensationalism.
                </p>
              </div>
            </div>

            {/* Visuals & Interactive Stage Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Visuals Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-3xl apple-card">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-apple-muted font-semibold">
                      Chamonix Valley & Peaks
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-apple-subtext">
                      Illustrative Asset
                    </span>
                  </div>

                  <ImageWithCredit
                    creditKey="tmb_chamonix"
                    alt="Chamonix Valley and Mont Blanc Range"
                    className="w-full h-80 sm:h-96"
                    caption="Chamonix Starting Point • 1,035 m"
                  />
                </div>

                <div className="p-6 rounded-3xl apple-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-apple-blue" />
                      <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                        Circuit Route Map Illustration
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/30">
                      Route Reference
                    </span>
                  </div>

                  <ImageWithCredit
                    creditKey="tmb_route_map"
                    alt="Tour du Mont Blanc Route Map Reference"
                    className="w-full h-80"
                  />

                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium">
                    <a
                      href="https://www.montourdumontblanc.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-apple-blue hover:underline"
                    >
                      <span>Official TMB Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www2.montourdumontblanc.com/en/the-route"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-apple-subtext hover:text-white hover:underline"
                    >
                      <span>Official Route Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stage Explorer Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl apple-card">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-apple-muted block mb-0.5">
                        6.5-Day Circuit
                      </span>
                      <h4 className="text-2xl font-bold text-white tracking-tight">
                        Stage Explorer
                      </h4>
                    </div>
                    <span className="text-xs text-apple-muted">Select day:</span>
                  </div>

                  {/* Day Pills Selector */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
                    {TMB_EXPEDITION.stages.map((st, idx) => (
                      <button
                        key={st.day}
                        onClick={() => setSelectedStageIndex(idx)}
                        className={`p-2.5 rounded-2xl text-center border transition-all cursor-pointer ${
                          selectedStageIndex === idx
                            ? 'bg-white text-black font-semibold border-white shadow-md'
                            : 'bg-white/[0.04] border-white/[0.06] text-apple-subtext hover:text-white hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs block font-bold">{st.day}</span>
                        <span className="text-[10px] block opacity-80 uppercase">{st.country}</span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Stage Detail Card */}
                  {selectedStage && (
                    <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-4 animate-fade-in">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-apple-blue font-semibold">
                            {selectedStage.day} • {selectedStage.country}
                          </span>
                          <h5 className="text-xl font-bold text-white mt-1 tracking-tight">
                            {selectedStage.title}
                          </h5>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                          <span className="text-[10px] uppercase tracking-wider text-apple-muted block mb-0.5">
                            Distance
                          </span>
                          <span className="font-bold text-white text-sm">
                            {selectedStage.distanceKm}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                          <span className="text-[10px] uppercase tracking-wider text-apple-muted block mb-0.5">
                            Elevation
                          </span>
                          <span className="font-bold text-white text-sm">
                            {selectedStage.elevation}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-1">
                          Waypoints:
                        </span>
                        <p className="text-sm font-medium text-white">
                          {selectedStage.fromTo}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-1">
                          Highlights:
                        </span>
                        <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed font-normal">
                          {selectedStage.highlights}
                        </p>
                      </div>

                      {selectedStage.photoUrl && (
                        <div className="pt-2">
                          <img
                            src={selectedStage.photoUrl}
                            alt={selectedStage.title}
                            className="w-full h-44 object-cover rounded-xl border border-white/[0.08] filter brightness-[0.85]"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* People Met Story Card */}
                  <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Users className="w-4 h-4 text-apple-blue" />
                      <h5 className="text-xs uppercase tracking-wider text-white font-semibold">
                        {TMB_EXPEDITION.peopleMetStory.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed font-normal">
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
            <div className="p-8 sm:p-12 rounded-3xl apple-card relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.08] text-white border border-white/[0.1]">
                    {MONT_BLANC_EXPEDITION.subtitle}
                  </span>
                  <VerificationPill
                    badge={{
                      type: 'public_record',
                      label: 'Verified Public Record',
                      sourceNote: 'Published in Tulení pásy (2025) and broadcast on Slovak National Television STVR.',
                      sourceUrl: MONT_BLANC_EXPEDITION.authorArticleUrl,
                    }}
                  />
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {MONT_BLANC_EXPEDITION.title}
                </h3>

                <p className="text-apple-subtext text-base sm:text-lg leading-relaxed mb-8">
                  In spring 2025, at 14 years old, Jakub completed a high-altitude ski-mountaineering ascent of Mont Blanc (4,806 m) via the classic Grands Mulets route. The achievement culminated an intensive year of preparation that began in 2024 with technical winter conditioning in the Western Tatras.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={MONT_BLANC_EXPEDITION.authorArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider transition-all hover:bg-[#F5F5F7]"
                  >
                    <span>Read Tulení pásy Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={MONT_BLANC_EXPEDITION.stvrReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.12] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>Watch STVR TV Report</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 pt-8 border-t border-white/[0.08]">
                {MONT_BLANC_EXPEDITION.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
                      {s.label}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-xs text-apple-subtext">{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals & Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-3xl apple-card">
                  <span className="text-xs uppercase tracking-wider text-apple-muted block mb-3 font-semibold">
                    Ski-Mountaineering Ridge Ascent
                  </span>
                  <ImageWithCredit
                    creditKey="montblanc_skimo"
                    alt="Ski Mountaineer on Glacial Ridge"
                    className="w-full h-80 sm:h-96"
                    caption="Ski Alpinism • 4,806 m"
                  />
                </div>

                <div className="p-6 rounded-3xl apple-card space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                    Expedition Takeaways
                  </h4>
                  {MONT_BLANC_EXPEDITION.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-white/30 pl-3 py-1">
                      <span className="text-xs font-bold text-white block mb-0.5">{item.label}</span>
                      <span className="text-xs text-apple-subtext leading-relaxed block">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl apple-card">
                  <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">
                    Expedition Timeline
                  </h4>

                  <div className="space-y-6 relative border-l-2 border-white/10 ml-2 pl-6">
                    {MONT_BLANC_EXPEDITION.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />

                        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-all">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                              {step.period}
                            </span>
                            <VerificationPill badge={step.verification} size="sm" />
                          </div>

                          <h5 className="text-lg font-bold text-white mb-2">
                            {step.title}
                          </h5>

                          <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed">
                            {step.description}
                          </p>

                          {step.verification.sourceUrl && (
                            <div className="mt-3 pt-2 border-t border-white/[0.06]">
                              <a
                                href={step.verification.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-apple-blue hover:underline"
                              >
                                <span>Verify Source Archive</span>
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
