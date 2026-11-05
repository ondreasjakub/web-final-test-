'use client';

import React, { useState } from 'react';
import { PHOTO_CREDITS, PhotoCredit } from '@/data/content';
import { Info, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface Props {
  creditKey: keyof typeof PHOTO_CREDITS;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function ImageWithCredit({
  creditKey,
  alt,
  className = 'w-full h-80',
  aspectRatio = 'aspect-video',
}: Props) {
  const credit: PhotoCredit | undefined = PHOTO_CREDITS[creditKey];
  const [showModal, setShowModal] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!credit) return null;

  return (
    <div className={`relative group overflow-hidden rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={credit.imageUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        /* Fallback mountain graphic if network restricts direct Wikimedia image */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/40 text-center">
          <ImageIcon className="w-12 h-12 text-emerald-400/60 mb-3" />
          <h4 className="text-white font-medium text-base mb-1">{credit.title}</h4>
          <p className="text-xs text-slate-400 max-w-sm mb-3">
            Openly licensed illustrative reference ({credit.license}) by {credit.creator}.
          </p>
          <a
            href={credit.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 underline"
          >
            <span>View original on Wikimedia Commons</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Illustrative reference pill button */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 hover:bg-black/90 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-mono text-[11px] tracking-wide">Illustrative Reference • {credit.license}</span>
        </button>

        <a
          href={credit.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-black/50 hover:bg-black/80 text-[11px] text-slate-300 hover:text-emerald-300 backdrop-blur-md transition-colors"
        >
          <span>Photo by {credit.creator}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Credit Details Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#161B21] border border-slate-700 max-w-lg w-full rounded-2xl p-6 text-slate-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Photo Attribution & Rights
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">{credit.title}</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <p className="text-xs text-amber-300/90 font-medium mb-1">
                  Notice: Illustrative Reference Asset
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {credit.attributionNote}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-800/50 p-2.5 rounded border border-slate-700/60">
                  <span className="text-slate-400 block mb-0.5">Author / Creator</span>
                  <span className="font-semibold text-white">{credit.creator}</span>
                </div>
                <div className="bg-slate-800/50 p-2.5 rounded border border-slate-700/60">
                  <span className="text-slate-400 block mb-0.5">License</span>
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline inline-flex items-center gap-1 font-medium"
                  >
                    {credit.license}
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                <p className="mb-2">
                  <strong>Source page:</strong>{' '}
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    Wikimedia Commons File
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Replacement note: When Jakub uploads his personal trip photography, this illustrative asset will be replaced seamlessly in <code className="text-emerald-400">src/data/content.ts</code>.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
