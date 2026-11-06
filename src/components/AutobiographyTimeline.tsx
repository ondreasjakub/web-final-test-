'use client';

import React, { useState } from 'react';
import { AUTOBIOGRAPHY_CHAPTERS, TimelineMilestone } from '@/data/content';
import VerificationPill from './VerificationPill';
import ImageWithCredit from './ImageWithCredit';
import { MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function AutobiographyTimeline() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(4);

  const toggleChapter = (num: number) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  return (
    <section id="autobiography" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-apple-muted font-semibold block mb-3">
            Life Timeline
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Eight chapters of growth.
          </h2>
          <p className="text-base sm:text-lg text-apple-subtext mt-4 font-normal leading-relaxed">
            A chronological timeline grounded in verified public reports, sports club records, and firsthand accounts.
          </p>
        </div>

        {/* Apple-style Accordion Chapter Stack */}
        <div className="space-y-4">
          {AUTOBIOGRAPHY_CHAPTERS.map((ch) => {
            const isExpanded = expandedChapter === ch.chapterNumber;

            return (
              <div
                key={ch.chapterNumber}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#121216] border-white/[0.16] shadow-xl'
                    : 'bg-[#0E0E12] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <button
                  onClick={() => toggleChapter(ch.chapterNumber)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-lg sm:text-xl font-bold text-apple-muted">
                      {ch.chapterNumber < 10 ? `0${ch.chapterNumber}` : ch.chapterNumber}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-apple-subtext">
                          {ch.year}
                        </span>
                        <span className="text-xs text-apple-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-apple-blue" />
                          {ch.location}
                        </span>
                        <VerificationPill badge={ch.verification} size="sm" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-apple-subtext font-normal">
                        {ch.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-apple-subtext flex-shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-7 pt-0 border-t border-white/[0.06] space-y-5 animate-fade-in">
                    {ch.accentQuote && (
                      <p className="font-serif italic text-base sm:text-lg text-white py-2 border-l-2 border-white/40 pl-4 my-2">
                        “{ch.accentQuote}”
                      </p>
                    )}

                    <div className="text-sm sm:text-base text-apple-subtext leading-relaxed">
                      <p>{ch.narrative}</p>
                    </div>

                    {ch.photoCreditId && (
                      <div className="pt-2">
                        <ImageWithCredit
                          creditKey={ch.photoCreditId}
                          alt={ch.title}
                          className="w-full h-64 sm:h-72"
                          caption={`Chapter ${ch.chapterNumber} Visual`}
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {ch.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-apple-muted border border-white/[0.04]"
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
                          className="inline-flex items-center gap-1.5 text-xs text-apple-blue hover:underline"
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
