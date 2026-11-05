'use client';

import React from 'react';
import { VerificationBadge } from '@/data/content';
import { ShieldCheck, UserCheck, Clock } from 'lucide-react';

interface Props {
  badge: VerificationBadge;
  size?: 'sm' | 'md';
  showDetails?: boolean;
}

export default function VerificationPill({ badge, size = 'sm', showDetails = false }: Props) {
  const isPublic = badge.type === 'public_record';
  const isDirect = badge.type === 'direct_statement';
  const isPending = badge.type === 'awaiting_confirmation';

  const baseStyles = size === 'sm' ? 'text-[10px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <div className="inline-flex flex-col gap-1">
      <div
        className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-medium rounded-full border transition-all ${baseStyles} ${
          isPublic
            ? 'bg-alpine-950/60 text-emerald-300 border-emerald-500/25'
            : isDirect
            ? 'bg-carbon-800/80 text-stoneLight-200 border-white/10'
            : 'bg-amber-950/40 text-amber-300 border-amber-500/30'
        }`}
        title={badge.sourceNote}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isPublic ? 'bg-emerald-400' : isDirect ? 'bg-sky-400' : 'bg-amber-400'
          }`}
        />
        <span>{badge.label}</span>
      </div>

      {showDetails && (
        <span className="text-[11px] text-stoneLight-400 leading-tight">
          {badge.sourceNote}
        </span>
      )}
    </div>
  );
}
