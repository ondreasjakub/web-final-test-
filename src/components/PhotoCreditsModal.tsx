'use client';

import React from 'react';
import { PHOTO_CREDITS } from '@/data/content';
import { Camera, ExternalLink, X, ShieldAlert } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoCreditsModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const creditsList = Object.values(PHOTO_CREDITS);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#161B21] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
              <Camera className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                Photo References & Open-License Credits
              </h3>
              <p className="text-xs text-slate-400">
                Attribution & licensing for illustrative Wikimedia Commons assets
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-xs text-slate-300 leading-relaxed">
          <p className="font-semibold text-emerald-400 mb-1">
            Illustrative Scenery Disclaimer
          </p>
          <p className="text-slate-400">
            The images on this website are openly licensed Wikimedia Commons landscape and route references. They do not depict Jakub Ondreas, Ondrej Kuchyňa, or their private journeys. Each asset is used under its respective Creative Commons license with full attribution.
          </p>
        </div>

        {/* Credits List */}
        <div className="space-y-4 mb-8">
          {creditsList.map((credit) => (
            <div
              key={credit.id}
              className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-white font-serif">{credit.title}</h4>
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 hover:underline inline-flex items-center gap-1"
                >
                  {credit.license}
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                <div>
                  <span className="text-slate-500">Creator: </span>
                  <span className="text-slate-200 font-medium">{credit.creator}</span>
                </div>
                <div>
                  <span className="text-slate-500">Usage Role: </span>
                  <span className="text-slate-200">{credit.role}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                {credit.attributionNote}
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Wikimedia Commons File Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={credit.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>Direct Image File</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for replacing photos */}
        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-200/90 space-y-1 mb-6">
          <p className="font-semibold text-white">How Jakub Replaces These With Original Photos:</p>
          <p className="leading-relaxed">
            1. Save your photographs to <code className="text-white">/public/images/</code> (e.g., <code className="text-white">hero-personal.jpg</code>).
          </p>
          <p className="leading-relaxed">
            2. Update the image URLs in <code className="text-white">src/data/content.ts</code>. The galleries and cards will update immediately without layout shifts.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close Credits
          </button>
        </div>
      </div>
    </div>
  );
}
