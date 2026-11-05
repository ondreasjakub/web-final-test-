'use client';

import React, { useState } from 'react';
import { SITE_METADATA, PHOTO_CREDITS } from '@/data/content';
import { ArrowDown, Compass, Sparkles, ArrowRight, ShieldCheck, Mountain } from 'lucide-react';

interface Props {
  onOpenCredits: () => void;
  onOpenIntegrity: () => void;
}

export default function HeroSection({ onOpenCredits, onOpenIntegrity }: Props) {
  const [imgError, setImgError] = useState(false);
  const heroCredit = PHOTO_CREDITS.hero_montblanc;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-carbon-950"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroCredit.imageUrl}
            alt="Alpine Massif Peak - Cinematic Hero Backdrop"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 transform animate-fade-in transition-all duration-1000"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-carbon-950 via-carbon-900 to-alpine-950" />
        )}

        {/* Sophisticated Editorial Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-carbon-950/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-carbon-950/40 to-carbon-950/90 pointer-events-none" />
      </div>

      {/* Top Editorial Status Pill */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-8 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-carbon-900/75 border border-white/[0.08] backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-superwide uppercase text-stoneLight-300">
            Digital Autobiography • 2026 Archive
          </span>
          <span className="text-white/20">|</span>
          <button
            onClick={onOpenIntegrity}
            className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-goldAccent hover:text-white transition-colors"
          >
            Fact Standard
          </button>
        </div>
      </div>

      {/* Main Center Typographic Composition */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center my-auto py-8">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-superwide text-stoneLight-400 mb-3 block">
          Alpinist • Student • Track Athlete
        </span>

        {/* Giant Monolithic Title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6 uppercase leading-none">
          {SITE_METADATA.name}
        </h1>

        {/* Subtitle / Tagline */}
        <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-stoneLight-100 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
          “{SITE_METADATA.tagline}”
        </p>

        {/* Polished Narrative Statement */}
        <p className="text-stoneLight-300 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          {SITE_METADATA.intro}
        </p>

        {/* Minimalist Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-carbon-950 font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-stoneLight-200 hover:scale-[1.02] shadow-xl"
          >
            <span>Explore My Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-carbon-900/80 hover:bg-carbon-850 text-white font-display font-semibold text-xs tracking-wider uppercase border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Get to Know Me</span>
          </a>
        </div>
      </div>

      {/* Bottom Editorial Stats & Attribution Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl glass-panel group hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stoneLight-400 block mb-1">
              Mont Blanc Ascent
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              4,806 m
            </span>
            <span className="text-xs text-stoneLight-300">Ski descent at age 14</span>
          </div>

          <div className="p-4 rounded-2xl glass-panel group hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stoneLight-400 block mb-1">
              Tour du Mont Blanc
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              160 km
            </span>
            <span className="text-xs text-stoneLight-300">6.5 days, self-supported</span>
          </div>

          <div className="p-4 rounded-2xl glass-panel group hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stoneLight-400 block mb-1">
              Track & Field
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              200m Sprint
            </span>
            <span className="text-xs text-stoneLight-300">AO TJ Slávia STU Bratislava</span>
          </div>

          <div className="p-4 rounded-2xl glass-panel group hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono tracking-widest uppercase text-stoneLight-400 block mb-1">
              Transatlantic Chapter
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              USA 2025–26
            </span>
            <span className="text-xs text-stoneLight-300">Rotary Youth Exchange</span>
          </div>
        </div>

        {/* Minimalist Micro Credit Trigger */}
        <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-stoneLight-500 uppercase tracking-wider">
          <button
            onClick={onOpenCredits}
            className="hover:text-stoneLight-300 transition-colors"
          >
            Illustrative Backdrop: {heroCredit.title} • {heroCredit.creator}
          </button>
          <a
            href="#story"
            className="hidden sm:inline-flex items-center gap-1 hover:text-stoneLight-300 transition-colors"
          >
            <span>Scroll to story</span>
            <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
