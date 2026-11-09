'use client';

import React from 'react';
import { FACTS_REQUIRING_CONFIRMATION } from '@/data/content';
import { ShieldCheck, CheckCircle2, UserCheck, AlertCircle, X, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FactIntegrityModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#18211d] border border-white/[0.12] max-w-2xl w-full rounded-3xl p-6 sm:p-8 text-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-alpine-950/80 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-superwide uppercase text-amber-200 block">
                Editorial Standard
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                Fact Verification Standard & Transparency
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

        {/* Legend of Badges */}
        <div className="space-y-4 mb-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
            Classification Standard
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#26312c] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-300 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Public Record</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-tight">
                Verified from published media (Tulení pásy, STVR, Slovak athletics archives).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#26312c] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-300 mb-1">
                <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Direct Statement</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-tight">
                First-person statements supplied directly by Jakub Ondreas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#26312c] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-300 mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Awaiting Doc</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-tight">
                Held as editable placeholder awaiting confirmed document upload.
              </p>
            </div>
          </div>
        </div>

        {/* Items awaiting Jakub's confirmation */}
        <div className="space-y-4 mb-8">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Items Awaiting Jakub’s Final Confirmation</span>
          </h4>

          <div className="space-y-3">
            {FACTS_REQUIRING_CONFIRMATION.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#26312c] border border-white/[0.06] space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-white">{item.item}</span>
                  <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-400 border border-amber-500/30">
                    Pending
                  </span>
                </div>
                <p className="text-xs text-stone-400">
                  <strong>Current representation:</strong> {item.currentStatus}
                </p>
                <p className="text-xs text-stone-300">
                  <strong>Action needed:</strong> {item.neededAction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strict Editorial Commitments */}
        <div className="p-4 rounded-2xl glass-panel text-xs text-stone-400 space-y-2 mb-6">
          <h5 className="font-semibold text-white font-display">Editorial Commitments:</h5>
          <ul className="list-disc list-inside space-y-1 leading-relaxed">
            <li>Strictly no unverified &ldquo;youngest in the world&rdquo; or world-record claims are made.</li>
            <li>All third-party landscape photography is clearly labeled as illustrative.</li>
            <li>No personal home address, school timetable, or private family data is published.</li>
            <li>All content and milestones remain editable in <code className="text-emerald-400 font-mono">src/data/content.ts</code>.</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-full bg-white text-carbon-950 hover:bg-stoneLight-200 transition-colors cursor-pointer"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
}
