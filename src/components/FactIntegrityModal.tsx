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
            <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                Fact Verification Standard & Integrity
              </h3>
              <p className="text-xs text-slate-400">
                Transparent verification badges and pending documentation
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

        {/* Legend of Badges */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
            Classification Legend
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Public Record</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Verified from published media (Tulení pásy, STVR, SAZ archives).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300 mb-1">
                <UserCheck className="w-4 h-4 text-sky-400" />
                <span>Direct Statement</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                First-person statements provided directly by Jakub Ondreas.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Awaiting Confirmation</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Held as editable placeholder until official document is provided.
              </p>
            </div>
          </div>
        </div>

        {/* Items awaiting Jakub's confirmation */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Items Awaiting Jakub’s Final Confirmation</span>
          </h4>

          <div className="space-y-3">
            {FACTS_REQUIRING_CONFIRMATION.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{item.item}</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-500/30">
                    Pending
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  <strong>Current representation:</strong> {item.currentStatus}
                </p>
                <p className="text-xs text-slate-300">
                  <strong>Action needed:</strong> {item.neededAction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fact-Checking Commitments */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2 mb-6">
          <h5 className="font-semibold text-white">Strict Editorial Commitments:</h5>
          <ul className="list-disc list-inside space-y-1 leading-relaxed">
            <li>No unverified &ldquo;youngest in the world&rdquo; or world-record claims are made.</li>
            <li>All third-party landscape photography is clearly labeled as illustrative.</li>
            <li>No personal home address, school timetable, or private family data is published.</li>
            <li>All text and milestones remain fully editable in <code className="text-emerald-400">src/data/content.ts</code>.</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
}
