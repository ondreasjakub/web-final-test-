'use client';

import React from 'react';
import { VerificationBadge } from '@/data/content';
import { CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';

interface Props {
  badge: VerificationBadge;
  size?: 'sm' | 'md';
  showDetails?: boolean;
}

export default function VerificationPill({ badge, size = 'sm', showDetails = false }: Props) {
  const isPublic = badge.type === 'public_record';
  const isDirect = badge.type === 'direct_statement';
  const isPending = badge.type === 'awaiting_confirmation';

  const baseStyles = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1';

  return (
    <div className="inline-flex flex-col gap-1">
      <div
        className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-all ${baseStyles} ${
          isPublic
            ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30'
            : isDirect
            ? 'bg-sky-950/50 text-sky-300 border-sky-500/30'
            : 'bg-amber-950/50 text-amber-300 border-amber-500/30'
        }`}
        title={badge.sourceNote}
      >
        {isPublic && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
        {isDirect && <UserCheck className="w-3.5 h-3.5 text-sky-400" />}
        {isPending && <AlertCircle className="w-3.5 h-3.5 text-amber-400" />}
        <span>{badge.label}</span>
      </div>

      {showDetails && (
        <span className="text-[11px] text-zinc-400 leading-tight">
          {badge.sourceNote}
        </span>
      )}
    </div>
  );
}
