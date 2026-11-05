'use client';

import React, { useState } from 'react';
import { SITE_METADATA, PHOTO_CREDITS } from '@/data/content';
import { ArrowDown, Mountain, Compass, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

interface Props {
  onOpenCredits: () => void;
  onOpenIntegrity: () => void;
}

export default function HeroSection({ onOpenCredits, onOpenIntegrity }: Props) {
  const [imgError, setImgError] = useState(false);
  const heroCredit = PHOTO_CREDITS.chamonix;

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroCredit.imageUrl}
            alt="Chamonix and Mont Blanc Valley - Illustrative Alpine Backdrop"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-105 scale-105 transform animate-fade-in"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Subtle mountain gradient backdrop */
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-[#101915] to-[#12161A]" />
        )}

        {/* Sophisticated editorial vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1216] via-[#0E1216]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#0E1216]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-6">
        {/* Verification & Transparency Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Slovak Alpinist & Student • Digital Autobiography
          </span>
          <span className="text-slate-600">|</span>
          <button
            onClick={onOpenIntegrity}
            className="text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
          >
            Fact Standard
          </button>
        </div>

        {/* Name Title */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-none">
          {SITE_METADATA.name}
        </h1>

        <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-sans mb-5 font-medium">
          Also published as <span className="text-slate-200">{SITE_METADATA.alternativeName}</span> • Bratislava, Slovakia
        </p>

        {/* Tagline */}
        <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-emerald-200/90 font-light max-w-3xl mx-auto mb-6 leading-relaxed">
          “{SITE_METADATA.tagline}”
        </p>

        {/* Narrative Intro */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
          {SITE_METADATA.intro}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#my-story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:scale-[1.02]"
          >
            <Compass className="w-4 h-4" />
            <span>Explore My Story</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm tracking-wide border border-slate-700 backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Get to Know Me</span>
          </a>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Mont Blanc Peak
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-white block">
              4,806 m
            </span>
            <span className="text-xs text-emerald-400/90">Ski ascent at age 14</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Tour du Mont Blanc
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-white block">
              160 km
            </span>
            <span className="text-xs text-emerald-400/90">6.5 days, independent</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Track & Field
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-white block">
              200m Sprint
            </span>
            <span className="text-xs text-emerald-400/90">AO TJ Slávia STU</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Current Chapter
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-white block">
              USA Exchange
            </span>
            <span className="text-xs text-emerald-400/90">Rotary Youth Exchange</span>
          </div>
        </div>

        {/* Illustrative Background Photo Attribution Bar */}
        <div className="mt-8 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            Background: <em>{heroCredit.title}</em> (CC BY-SA 3.0 by {heroCredit.creator})
          </span>
          <span>•</span>
          <span className="text-slate-400">Illustrative scenery reference</span>
          <span>•</span>
          <button
            onClick={onOpenCredits}
            className="text-emerald-400 hover:underline hover:text-emerald-300"
          >
            View full credits
          </button>
        </div>
      </div>
    </section>
  );
}
