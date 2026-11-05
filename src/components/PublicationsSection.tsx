'use client';

import React from 'react';
import { PUBLICATIONS_DATA, PublicationItem } from '@/data/content';
import VerificationPill from './VerificationPill';
import { BookOpen, Newspaper, Tv, User, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1216] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Journalism & Coverage
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Stories, Articles & Media
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Published ski-mountaineering writing by Jakub Ondreas and national broadcast coverage by Slovak public television (STVR).
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLICATIONS_DATA.map((item) => {
            const isArticle = item.type === 'Article';
            const isBroadcast = item.type === 'Broadcast / Interview';
            const isAuthor = item.type === 'Author Profile';

            return (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-[#161B21] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/30"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      {isArticle && <Newspaper className="w-3.5 h-3.5 text-emerald-400" />}
                      {isBroadcast && <Tv className="w-3.5 h-3.5 text-sky-400" />}
                      {isAuthor && <User className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{item.type}</span>
                    </span>

                    <VerificationPill badge={item.verification} size="sm" />
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Publisher & Date */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <span className="font-medium text-slate-300">{item.publisher}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.date}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* External Action Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-950/50 hover:border-emerald-500/30 text-xs font-semibold text-slate-200 hover:text-emerald-300 border border-slate-800 transition-all"
                  >
                    <span>Read / Open Original Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Standard Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              <strong>Publication Integrity:</strong> All publications listed are publicly verifiable records. No articles or media quotes are fabricated.
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">
            Updated for 2026
          </span>
        </div>
      </div>
    </section>
  );
}
