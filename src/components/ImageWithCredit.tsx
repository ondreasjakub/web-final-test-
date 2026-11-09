'use client';

import React, { useState } from 'react';
import { PHOTO_CREDITS, PhotoCredit } from '@/data/content';
import { Info, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

interface Props {
  creditKey: keyof typeof PHOTO_CREDITS | string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  caption?: string;
  overlayGradient?: boolean;
}

export default function ImageWithCredit({
  creditKey,
  alt,
  className = 'w-full h-80',
  aspectRatio,
  caption,
  overlayGradient = true,
}: Props) {
  const credit: PhotoCredit | undefined = PHOTO_CREDITS[creditKey as keyof typeof PHOTO_CREDITS];
  const [showModal, setShowModal] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If no credit key matched, allow direct image URL or fallback
  const imageUrl = credit?.imageUrl || creditKey;
  const title = credit?.title || alt;
  const creator = credit?.creator || 'Curated Alpine Collection';
  const license = credit?.license || 'Illustrative Reference';

  return (
    <div className={`relative group overflow-hidden rounded-2xl bg-carbon-900 border border-white/[0.08] transition-all duration-500 hover:border-white/[0.2] ${className}`}>
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03] filter brightness-[0.92] contrast-[1.04]"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-carbon-900 via-carbon-850 to-alpine-950 text-center">
          <ImageIcon className="w-10 h-10 text-stone-400/40 mb-3" />
          <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
          <p className="text-xs text-stone-400 max-w-sm mb-3">
            Illustrative photography ({license}) by {creator}.
          </p>
          {credit?.sourceUrl && (
            <a
              href={credit.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-200 hover:underline"
            >
              <span>View original source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {/* Cinematic Edge-to-Edge Vignette */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-carbon-950/20 pointer-events-none" />
      )}

      {/* Optional Editorial Caption */}
      {caption && (
        <div className="absolute top-4 left-4 right-4 pointer-events-none">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-stone-950/80 text-white backdrop-blur-md border border-white/10">
            {caption}
          </span>
        </div>
      )}

      {/* Glass Credit Button Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs opacity-90 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-950/85 hover:bg-stone-950 text-white backdrop-blur-xl border border-white/10 transition-colors cursor-pointer text-[11px]"
          title="Click to view photographer attribution and rights"
        >
          <Info className="w-3 h-3 text-amber-200" />
          <span className="font-mono text-[10px] tracking-wide">
            Illustrative • {creator.split(' ')[0]}
          </span>
        </button>

        {credit?.sourceUrl && (
          <a
            href={credit.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-950/80 hover:bg-stone-950 text-[10px] text-white backdrop-blur-xl border border-white/5 transition-colors"
          >
            <span>Photo by {creator}</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}
      </div>

      {/* Credit Details Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xl animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#18211d] border border-white/[0.12] max-w-lg w-full rounded-2xl p-6 sm:p-7 text-stone-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-superwide text-amber-200 font-mono font-semibold">
                  Photo Attribution & Rights
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">{title}</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="p-3.5 rounded-xl bg-[#26312c] border border-white/[0.06]">
                <p className="text-[11px] text-amber-300/90 font-medium mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Notice: Illustrative Reference Photography
                </p>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  {credit?.attributionNote || 'This photograph serves as a high-quality visual reference and does not depict Jakub or his personal expeditions.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-stone-800/60 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-stone-400 block mb-0.5 uppercase tracking-wider">Creator</span>
                  <span className="font-semibold text-white text-xs">{creator}</span>
                </div>
                <div className="bg-stone-800/60 p-3 rounded-xl border border-white/[0.06]">
                  <span className="text-[10px] text-stone-400 block mb-0.5 uppercase tracking-wider">License</span>
                  {credit?.licenseUrl ? (
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-200 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      {license}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="text-white font-medium">{license}</span>
                  )}
                </div>
              </div>

              {credit?.sourceUrl && (
                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  <p className="text-stone-400 mb-1">Source Repository:</p>
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline inline-flex items-center gap-1 break-all text-[11px]"
                  >
                    <span>{credit.sourceUrl}</span>
                    <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
                  </a>
                </div>
              )}

              <div className="p-3 rounded-xl bg-alpine-950/50 border border-alpine-500/20 text-[11px] text-stone-300">
                <strong>Replacing with personal photos:</strong> Update the image path in <code className="text-emerald-400 font-mono">src/data/content.ts</code> under <code className="text-emerald-400 font-mono">PHOTO_CREDITS</code>.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors"
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
