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
  Users,
  Footprints,
  Plane,
  Bus,
  Check,
  ArrowRight,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

export default function ExpeditionsSection() {
  const [activeTab, setActiveTab] = useState<'tmb' | 'montblanc'>('tmb');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const selectedStage = TMB_EXPEDITION.stages[selectedStageIndex];

  return (
    <section id="expeditions" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent block mb-3 font-semibold">
              Chapter 02 // Alpine Traverses & Summits
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              High Altitudes. Autonomous Journeys.
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-md font-normal leading-relaxed">
            Documented Alpine achievements — from high-consequence ski-mountaineering at 4,806 metres to self-supported multi-day trekking across three European nations.
          </p>
        </div>

        {/* Minimalist Pill Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-carbon-850 border border-white/[0.08] backdrop-blur-2xl">
            <button
              onClick={() => setActiveTab('tmb')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'tmb'
                  ? 'bg-white text-carbon-950 font-bold shadow-lg'
                  : 'text-stoneLight-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Tour du Mont Blanc (2026)</span>
            </button>

            <button
              onClick={() => setActiveTab('montblanc')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'montblanc'
                  ? 'bg-white text-carbon-950 font-bold shadow-lg'
                  : 'text-stoneLight-400 hover:text-white'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>Mont Blanc Ski Ascent (2025)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TOUR DU MONT BLANC 2026 */}
        {activeTab === 'tmb' && (
          <div className="space-y-16 animate-fade-in">
            {/* Cinematic Hero Feature Banner */}
            <div className="rounded-3xl bg-carbon-850 border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-alpine-950/80 text-emerald-300 border border-emerald-500/30">
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

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  {TMB_EXPEDITION.title}
                </h3>

                {/* Jakub's verbatim quote */}
                <blockquote className="border-l-2 border-goldAccent pl-6 py-3 my-6 text-stoneLight-100 font-editorial italic text-lg sm:text-xl leading-relaxed bg-white/[0.02] rounded-r-2xl">
                  “{TMB_EXPEDITION.quote}”
                  <span className="block mt-3 font-sans not-italic text-xs text-stoneLight-400 font-mono tracking-wider uppercase">
                    — Jakub Ondreas (with friend Ondrej Kuchyňa)
                  </span>
                </blockquote>

                {/* Journey Logistics Sequence */}
                <div className="mt-8 pt-8 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-3">
                    Logistical Sequence:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TMB_EXPEDITION.itinerarySequence.map((item) => (
                      <div key={item.step} className="p-3.5 rounded-xl bg-carbon-800/50 border border-white/[0.05]">
                        <span className="text-[10px] font-mono text-goldAccent block mb-1 font-bold">
                          {item.step}
                        </span>
                        <span className="text-xs font-semibold text-white block mb-0.5">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-stoneLight-400 leading-tight block">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Key Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/[0.08]">
                {TMB_EXPEDITION.stats.map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl glass-panel">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-1">
                      {s.label}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-white block tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-xs text-stoneLight-400">{s.detail}</span>
                  </div>
                ))}
              </div>

              {/* Fact Integrity Alert */}
              <div className="mt-8 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/25 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed font-normal">
                  <strong>Fact Standard:</strong> Neither Jakub nor Ondrej claims to have been the &ldquo;youngest in the world&rdquo; to complete the Tour du Mont Blanc, as no world record has been independently verified. This website prioritizes rigorous truth over sensationalism.
                </p>
              </div>
            </div>

            {/* Curated Photography & Interactive Stage Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Assets */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-3xl bg-carbon-850 border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 font-semibold">
                      Chamonix Valley & Mont Blanc Range
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-stoneLight-300">
                      Illustrative Asset
                    </span>
                  </div>

                  <ImageWithCredit
                    creditKey="tmb_chamonix"
                    alt="Chamonix Valley and Mont Blanc Range"
                    className="w-full h-80 sm:h-96"
                    caption="Chamonix Starting Point • 1,035 m"
                  />

                  <div className="mt-4 p-3.5 rounded-xl bg-carbon-800/60 border border-white/[0.05] text-xs text-stoneLight-400 leading-relaxed">
                    Surrounded by granite spires and glacial seracs, Chamonix marks the traditional starting point of the 160-km circuit around France, Italy, and Switzerland.
                  </div>
                </div>

                {/* Route Overview Map Card */}
                <div className="p-6 rounded-3xl bg-carbon-850 border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-goldAccent" />
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                        Circuit Route Map Illustration
                      </h4>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/30">
                      Route Reference
                    </span>
                  </div>

                  <ImageWithCredit
                    creditKey="tmb_route_map"
                    alt="Tour du Mont Blanc Route Map Reference"
                    className="w-full h-80"
                  />

                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <a
                      href="https://www.montourdumontblanc.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-goldAccent hover:underline font-mono text-[11px]"
                    >
                      <span>Official TMB Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www2.montourdumontblanc.com/en/the-route"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-stoneLight-300 hover:text-white hover:underline font-mono text-[11px]"
                    >
                      <span>Official Route Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Stage Explorer */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-8 rounded-3xl bg-carbon-850 border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-1">
                        6.5-Day Circuit Breakdown
                      </span>
                      <h4 className="font-display text-2xl font-bold text-white">
                        Stage Explorer
                      </h4>
                    </div>
                    <span className="text-xs text-stoneLight-400 font-mono">Select day:</span>
                  </div>

                  {/* Day Pills Selector */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
                    {TMB_EXPEDITION.stages.map((st, idx) => (
                      <button
                        key={st.day}
                        onClick={() => setSelectedStageIndex(idx)}
                        className={`p-3 rounded-2xl text-center border transition-all duration-300 cursor-pointer ${
                          selectedStageIndex === idx
                            ? 'bg-white text-carbon-950 font-bold border-white shadow-lg'
                            : 'bg-carbon-800/60 border-white/[0.06] text-stoneLight-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs block font-display">{st.day}</span>
                        <span className="text-[9px] font-mono block opacity-80 uppercase">{st.country}</span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Stage Detail Card */}
                  {selectedStage && (
                    <div className="p-6 rounded-2xl bg-carbon-800/80 border border-white/[0.08] space-y-5 animate-fade-in">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-goldAccent font-semibold">
                            {selectedStage.day} • {selectedStage.country}
                          </span>
                          <h5 className="text-xl font-display font-bold text-white mt-1">
                            {selectedStage.title}
                          </h5>
                        </div>
                      </div>

                      {/* Distance & Elevation Stats */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-carbon-900/80 border border-white/[0.05]">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-stoneLight-400 block mb-0.5">
                            Distance
                          </span>
                          <span className="font-display font-bold text-white text-base">
                            {selectedStage.distanceKm}
                          </span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-carbon-900/80 border border-white/[0.05]">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-stoneLight-400 block mb-0.5">
                            Elevation
                          </span>
                          <span className="font-display font-bold text-white text-base">
                            {selectedStage.elevation}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-1">
                          Waypoints Traversed:
                        </span>
                        <p className="text-sm font-medium text-stoneLight-100 font-display">
                          {selectedStage.fromTo}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-1">
                          Stage Narrative:
                        </span>
                        <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed font-normal">
                          {selectedStage.highlights}
                        </p>
                      </div>

                      {selectedStage.photoUrl && (
                        <div className="pt-2">
                          <img
                            src={selectedStage.photoUrl}
                            alt={selectedStage.title}
                            className="w-full h-44 object-cover rounded-xl border border-white/[0.06] filter brightness-[0.85]"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* People Met Narrative */}
                  <div className="mt-6 p-6 rounded-2xl glass-panel">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-goldAccent" />
                      <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                        {TMB_EXPEDITION.peopleMetStory.title}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed">
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
          <div className="space-y-16 animate-fade-in">
            {/* Mont Blanc Hero Feature Banner */}
            <div className="rounded-3xl bg-carbon-850 border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-alpine-950/80 text-emerald-300 border border-emerald-500/30">
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

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  {MONT_BLANC_EXPEDITION.title}
                </h3>

                <p className="text-stoneLight-300 text-base sm:text-lg leading-relaxed mb-8">
                  In spring 2025, at 14 years old, Jakub completed a high-altitude ski-mountaineering ascent of Mont Blanc (4,806 m) via the classic Grands Mulets route. The achievement culminated an intensive year of preparation that began in 2024 with technical winter conditioning in the Western Tatras.
                </p>

                {/* External Verified Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={MONT_BLANC_EXPEDITION.authorArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-carbon-950 text-xs font-mono uppercase tracking-wider font-bold transition-all hover:bg-stoneLight-200"
                  >
                    <span>Read Tulení pásy Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={MONT_BLANC_EXPEDITION.stvrReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-carbon-800 hover:bg-carbon-700 text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    <span>Watch STVR National TV Report</span>
                    <ExternalLink className="w-3.5 h-3.5 text-goldAccent" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/[0.08]">
                {MONT_BLANC_EXPEDITION.stats.map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl glass-panel">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-1">
                      {s.label}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-white block tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-xs text-stoneLight-400">{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals & Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Visuals Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-3xl bg-carbon-850 border border-white/[0.08]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stoneLight-400 block mb-3 font-semibold">
                    Ski-Mountaineering Ridge Navigation
                  </span>
                  <ImageWithCredit
                    creditKey="montblanc_skimo"
                    alt="Ski Mountaineer Ascending Glacial Ridge"
                    className="w-full h-80 sm:h-96"
                    caption="Ski Alpinism • 4,806 m Ascent"
                  />
                </div>

                {/* Key Takeaways */}
                <div className="p-6 rounded-3xl bg-carbon-850 border border-white/[0.08] space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-goldAccent font-semibold">
                    Expedition Insights
                  </h4>
                  {MONT_BLANC_EXPEDITION.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-white/20 pl-4 py-1">
                      <span className="text-xs font-display font-bold text-white block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-xs text-stoneLight-400 leading-relaxed block">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-8 rounded-3xl bg-carbon-850 border border-white/[0.08]">
                  <h4 className="font-display text-2xl font-bold text-white mb-6">
                    Expedition Timeline & Milestones
                  </h4>

                  <div className="space-y-6 relative border-l-2 border-white/10 ml-3 pl-6">
                    {MONT_BLANC_EXPEDITION.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Bullet Dot */}
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-carbon-950" />

                        <div className="p-6 rounded-2xl bg-carbon-800/80 border border-white/[0.06] hover:border-white/20 transition-all">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-goldAccent uppercase tracking-wider">
                              {step.period}
                            </span>
                            <VerificationPill badge={step.verification} size="sm" />
                          </div>

                          <h5 className="text-lg font-display font-bold text-white mb-2">
                            {step.title}
                          </h5>

                          <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed">
                            {step.description}
                          </p>

                          {step.verification.sourceUrl && (
                            <div className="mt-4 pt-3 border-t border-white/[0.06]">
                              <a
                                href={step.verification.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-goldAccent hover:underline font-mono"
                              >
                                <span>Verify Document Source</span>
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
