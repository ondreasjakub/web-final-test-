'use client';

import React from 'react';
import { PUBLICATIONS_DATA, PublicationItem } from '@/data/content';
import VerificationPill from './VerificationPill';
import { BookOpen, Newspaper, Tv, User, ExternalLink, Calendar, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-32 px-4 sm:px-6 lg:px-8 bg-carbon-900 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-superwide uppercase text-goldAccent block mb-3 font-semibold">
              Chapter 05 // Journalism & Public Media
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Stories, Articles & Media
            </h2>
          </div>
          <p className="text-sm text-stoneLight-400 max-w-sm font-normal leading-relaxed">
            Published ski-mountaineering writing by Jakub Ondreas and national television broadcast coverage by Slovak public broadcaster (STVR).
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PUBLICATIONS_DATA.map((item) => {
            const isArticle = item.type === 'Article';
            const isBroadcast = item.type === 'Broadcast / Interview';
            const isAuthor = item.type === 'Author Profile';

            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-carbon-850 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 flex flex-col justify-between group hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stoneLight-300">
                      {isArticle && <Newspaper className="w-3 h-3 text-goldAccent" />}
                      {isBroadcast && <Tv className="w-3 h-3 text-sky-400" />}
                      {isAuthor && <User className="w-3 h-3 text-emerald-400" />}
                      <span>{item.type}</span>
                    </span>

                    <VerificationPill badge={item.verification} size="sm" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-goldAccent transition-colors">
                    {item.title}
                  </h3>

                  {/* Publisher & Metadata */}
                  <div className="flex items-center gap-2 text-xs font-mono text-stoneLight-400 mb-6">
                    <span className="text-stoneLight-200">{item.publisher}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                    {item.readTime && (
                      <>
                        <span>•</span>
                        <span className="text-goldAccent">{item.readTime}</span>
                      </>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-stoneLight-300 leading-relaxed mb-8 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* External Action Button */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-carbon-800 hover:bg-carbon-700 text-xs font-mono uppercase tracking-wider text-white border border-white/10 transition-all"
                  >
                    <span>Open Original Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-goldAccent" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fact Banner */}
        <div className="mt-16 p-6 rounded-3xl glass-panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-stoneLight-300 font-normal">
              <strong>Publication Integrity:</strong> All publications listed are publicly verifiable records with direct hyperlinks. No articles, headlines, or dates have been fabricated.
            </p>
          </div>
          <span className="text-xs font-mono text-stoneLight-400 whitespace-nowrap">
            Updated for 2026
          </span>
        </div>
      </div>
    </section>
  );
}
