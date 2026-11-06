'use client';

import React from 'react';
import { PUBLICATIONS_DATA, PublicationItem } from '@/data/content';
import VerificationPill from './VerificationPill';
import { Newspaper, Tv, User, ArrowRight, CheckCircle } from 'lucide-react';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-apple-muted font-semibold block mb-3">
            Press & Published Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Stories, articles & media.
          </h2>
          <p className="text-base sm:text-lg text-apple-subtext mt-4 font-normal leading-relaxed">
            Published ski-mountaineering writing by Jakub Ondreas and national television broadcast coverage by Slovak public broadcaster (STVR).
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
                className="p-7 rounded-3xl apple-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-apple-subtext border border-white/[0.08]">
                      {isArticle && <Newspaper className="w-3.5 h-3.5 text-apple-blue" />}
                      {isBroadcast && <Tv className="w-3.5 h-3.5 text-apple-green" />}
                      {isAuthor && <User className="w-3.5 h-3.5 text-apple-gold" />}
                      <span>{item.type}</span>
                    </span>

                    <VerificationPill badge={item.verification} size="sm" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-apple-blue transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-apple-muted mb-4">
                    <span className="text-apple-subtext font-medium">{item.publisher}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                    {item.readTime && (
                      <>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-apple-subtext leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-white hover:text-apple-blue transition-colors"
                  >
                    <span>Read Original Source</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fact Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-apple-green flex-shrink-0" />
            <p className="text-xs sm:text-sm text-apple-subtext font-normal">
              <strong>Publication Integrity:</strong> All articles and media reports listed are publicly verifiable records with direct source links.
            </p>
          </div>
          <span className="text-xs text-apple-muted whitespace-nowrap">
            Updated for 2026
          </span>
        </div>
      </div>
    </section>
  );
}
