'use client';

import React, { useState } from 'react';
import { PHOTO_CREDITS, PhotoCredit } from '@/data/content';
import { Camera, ExternalLink, X, Sparkles, Filter } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoCreditsModal({ isOpen, onClose }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const creditsList = Object.values(PHOTO_CREDITS);

  const categories = ['all', 'Mont Blanc', 'Tour du Mont Blanc', 'Athletics', 'Cycling & Adventure', 'Rotary USA', 'Western Tatras', 'Reference Map'];

  const filteredCredits =
    selectedCategory === 'all'
      ? creditsList
      : creditsList.filter((c) => c.category === selectedCategory);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#18211d] border border-white/[0.12] max-w-3xl w-full rounded-3xl p-6 sm:p-8 text-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-stone-800 border border-white/10 text-stone-300">
              <Camera className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-superwide uppercase text-amber-200 block">
                Photography & Licences
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                Curated Illustrative Photography Archive
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="p-4 rounded-2xl glass-panel mb-6 text-xs text-stone-300 leading-relaxed font-normal">
          <p className="font-semibold text-white mb-1 flex items-center gap-1.5 font-display">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            Illustrative Scenery & Attribution Standard
          </p>
          <p className="text-stone-400 text-xs">
            External photographs are curated from high-quality open repositories (Unsplash and Wikimedia Commons). They represent high-altitude scenery, alpine trails, sprint tracks, and travel atmosphere; they are not photographs of Jakub, Ondrej, or their private journeys.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-carbon-950 font-bold'
                  : 'bg-[#26312c] text-stone-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credits List */}
        <div className="space-y-4 mb-8">
          {filteredCredits.map((credit) => (
            <div
              key={credit.id}
              className="p-5 rounded-2xl bg-[#26312c] border border-white/[0.06] space-y-2 hover:border-white/[0.15] transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-amber-200 block mb-0.5">
                    {credit.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">{credit.title}</h4>
                </div>
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white inline-flex items-center gap-1"
                >
                  {credit.license}
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-400 pt-1">
                <div>
                  <span className="text-stoneLight-500 font-mono text-[11px]">Creator: </span>
                  <span className="text-white font-medium">{credit.creator}</span>
                </div>
                <div>
                  <span className="text-stoneLight-500 font-mono text-[11px]">Role: </span>
                  <span className="text-stone-200">{credit.role}</span>
                </div>
              </div>

              <p className="text-xs text-stone-400 italic pt-1 font-editorial">
                {credit.attributionNote}
              </p>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[11px]">
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:underline inline-flex items-center gap-1"
                >
                  <span>Original Photo Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={credit.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>Direct Image Asset</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for replacing photos */}
        <div className="p-5 rounded-2xl bg-alpine-950/60 border border-emerald-500/20 text-xs text-stone-300 space-y-2 mb-6 font-normal">
          <p className="font-semibold text-white font-display">How Jakub Replaces These With Personal Photos:</p>
          <ol className="list-decimal list-inside space-y-1 text-stone-400 leading-relaxed">
            <li>Place your photograph in <code className="text-white font-mono">public/images/</code> (e.g. <code className="text-white font-mono">montblanc-summit.jpg</code>).</li>
            <li>In <code className="text-white font-mono">src/data/content.ts</code>, update the <code className="text-emerald-400 font-mono">imageUrl</code> property of the corresponding credit item.</li>
            <li>The entire layout, gallery, and credit modals will automatically update with zero layout shifts.</li>
          </ol>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-full bg-white text-carbon-950 hover:bg-stoneLight-200 transition-colors cursor-pointer"
          >
            Close Credits
          </button>
        </div>
      </div>
    </div>
  );
}
