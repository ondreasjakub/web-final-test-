'use client';

import React, { useState } from 'react';
import { AUTOBIOGRAPHY_CHAPTERS, TimelineMilestone } from '@/data/content';
import VerificationPill from './VerificationPill';
import { BookOpen, MapPin, Tag, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function AutobiographyTimeline() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const toggleChapter = (num: number) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  return (
    <section id="my-story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              The Digital Autobiography
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Eight Chapters of Growth & Exploration
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A chronological timeline grounded in verified public reports, published journalism, and first-person statements — tracking each step from Bratislava to the high Alps and the United States.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {AUTOBIOGRAPHY_CHAPTERS.map((ch) => {
            const isExpanded = expandedChapter === ch.chapterNumber;

            return (
              <div key={ch.chapterNumber} className="relative group">
                {/* Chapter Number Badge Dot on Line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161B21] border-2 border-emerald-600 text-[11px] font-mono font-bold text-white shadow-lg">
                  {ch.chapterNumber}
                </div>

                {/* Chapter Card */}
                <div className="bg-[#161B21] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all duration-200">
                  {/* Top Bar: Era / Location / Verification */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                        {ch.year}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {ch.location}
                      </span>
                    </div>

                    <VerificationPill badge={ch.verification} size="sm" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-4">
                    {ch.subtitle}
                  </p>

                  {/* Narrative Body */}
                  <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    <p>{ch.narrative}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-slate-800/80">
                    <Tag className="w-3 h-3 text-slate-500 mr-1" />
                    {ch.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}

                    {ch.verification.sourceUrl && (
                      <a
                        href={ch.verification.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        <span>Source Archive</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
