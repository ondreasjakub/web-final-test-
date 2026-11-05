'use client';

import React, { useState } from 'react';
import { AUTOBIOGRAPHY_CHAPTERS, TimelineMilestone } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { BookOpen, MapPin, Tag, ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';

export default function AutobiographyTimeline() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(4); // default expand Mont Blanc

  const toggleChapter = (num: number) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  return (
    <section id="autobiography" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent block mb-3 font-semibold">
              Chapter 03 // Chronological Record
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Eight Chapters of Evolution
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            A linear progression grounded in published journalism, sports statistics, and verified firsthand accounts.
          </p>
        </div>

        {/* Minimalist Editorial Chapters */}
        <div className="space-y-6">
          {AUTOBIOGRAPHY_CHAPTERS.map((ch) => {
            const isExpanded = expandedChapter === ch.chapterNumber;

            return (
              <div
                key={ch.chapterNumber}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'bg-carbon-900 border-white/[0.15] shadow-2xl'
                    : 'bg-carbon-900/40 border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                {/* Chapter Header / Toggle Row */}
                <button
                  onClick={() => toggleChapter(ch.chapterNumber)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-stoneLight-500 group-hover:text-goldAccent transition-colors">
                      {ch.chapterNumber < 10 ? `0${ch.chapterNumber}` : ch.chapterNumber}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-stoneLight-300 border border-white/10 uppercase">
                          {ch.year}
                        </span>
                        <span className="text-[11px] font-mono text-stoneLight-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-goldAccent" />
                          {ch.location}
                        </span>
                        <VerificationPill badge={ch.verification} size="sm" />
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-stoneLight-400 font-sans mt-0.5">
                        {ch.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-carbon-800 border border-white/10 flex items-center justify-center text-stoneLight-300 flex-shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Chapter Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-white/[0.06] space-y-6 animate-fade-in">
                    {ch.accentQuote && (
                      <p className="font-editorial italic text-lg sm:text-xl text-stoneLight-200 py-3 border-l-2 border-goldAccent pl-4 my-2">
                        “{ch.accentQuote}”
                      </p>
                    )}

                    <div className="text-sm sm:text-base text-stoneLight-300 leading-relaxed max-w-4xl">
                      <p>{ch.narrative}</p>
                    </div>

                    {/* Curated Chapter Photo if available */}
                    {ch.photoCreditId && (
                      <div className="pt-2">
                        <ImageWithCredit
                          creditKey={ch.photoCreditId}
                          alt={ch.title}
                          className="w-full h-64 sm:h-80"
                          caption={`Chapter ${ch.chapterNumber} Visual Reference`}
                        />
                      </div>
                    )}

                    {/* Metadata & Tag Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06] text-xs">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {ch.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-carbon-800 text-stoneLight-400 border border-white/[0.04]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {ch.verification.sourceUrl && (
                        <a
                          href={ch.verification.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-goldAccent hover:underline"
                        >
                          <span>Original Document Source</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
