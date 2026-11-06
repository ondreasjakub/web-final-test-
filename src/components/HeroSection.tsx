'use client';

import React, { useState } from 'react';
import { SITE_METADATA, PHOTO_CREDITS } from '@/data/content';
import { ArrowRight, Compass, Sparkles, ChevronDown } from 'lucide-react';

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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background High-Altitude Alpine Imagery (Full-bleed Apple Keynote Look) */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroCredit.imageUrl}
            alt="Alpine Massif Peak - Cinematic Hero Backdrop"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.05]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#0A0A0E] via-[#0E0E14] to-black" />
        )}

        {/* Minimalist Apple Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      </div>

      {/* Top Eyebrow Tag */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-4 sm:pt-8 text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-apple-subtext inline-block mb-3">
          Slovak Alpinist & Student
        </span>
      </div>

      {/* Central Typographic Headline & Narrative */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto py-6">
        {/* Name Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-4 uppercase">
          {SITE_METADATA.name}
        </h1>

        {/* Apple Keynote Style Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#F5F5F7] font-normal max-w-2xl mx-auto mb-6">
          “{SITE_METADATA.tagline}”
        </p>

        {/* Clear Narrative Introduction */}
        <p className="text-apple-subtext text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal text-balance">
          {SITE_METADATA.intro}
        </p>

        {/* Apple-Style Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#F5F5F7] hover:scale-[1.02]"
          >
            <span>Explore My Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs tracking-wider uppercase border border-white/[0.15] backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <span>Get to Know Me</span>
          </a>
        </div>
      </div>

      {/* Bottom Minimalist Metrics Dock */}
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
              Mont Blanc Ascent
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              4,806 m
            </span>
            <span className="text-xs text-apple-subtext">Ski descent at age 14</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
              Tour du Mont Blanc
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              160 km
            </span>
            <span className="text-xs text-apple-subtext">6.5 days, self-supported</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
              Track Athletics
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              200m Sprint
            </span>
            <span className="text-xs text-apple-subtext">AO TJ Slávia STU</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-apple-muted block mb-0.5">
              Transatlantic Chapter
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
              USA Exchange
            </span>
            <span className="text-xs text-apple-subtext">Rotary Youth Exchange</span>
          </div>
        </div>

        {/* Minimalist Micro Credit */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-apple-muted">
          <button
            onClick={onOpenCredits}
            className="hover:text-white transition-colors"
          >
            Illustrative Alpine Photo: {heroCredit.title} • {heroCredit.creator}
          </button>
          <a
            href="#story"
            className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Scroll down</span>
            <ChevronDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
