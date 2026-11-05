'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/content';
import { ShieldCheck, Camera, Compass, ExternalLink, Heart } from 'lucide-react';

interface Props {
  onOpenCredits: () => void;
  onOpenIntegrity: () => void;
}

export default function Footer({ onOpenCredits, onOpenIntegrity }: Props) {
  return (
    <footer className="bg-[#0A0D10] border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-editorial text-2xl font-bold text-white tracking-wider block">
              {SITE_METADATA.name}
            </span>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-sans">
              Digital Autobiography & Expedition Journal
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Documenting mountain ski-mountaineering, long-distance treks, athletics with AO TJ Slávia STU Bratislava, and transatlantic learning through Rotary Youth Exchange.
            </p>
            <p className="text-xs text-slate-500">
              Roots: Bratislava, Slovakia • Base: USA (Exchange Year)
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home / Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About & Mountain Roots
                </a>
              </li>
              <li>
                <a href="#my-story" className="hover:text-emerald-400 transition-colors">
                  Eight Autobiography Chapters
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-emerald-400 transition-colors">
                  Mont Blanc & Tour du Mont Blanc
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-emerald-400 transition-colors">
                  Athletics & Disciplines
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-emerald-400 transition-colors">
                  Articles & STVR Media
                </a>
              </li>
              <li>
                <a href="#usa" className="hover:text-emerald-400 transition-colors">
                  Rotary Youth Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Verified Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Tulení pásy Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>STVR National Broadcast</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tulenipasy.cz/autor/kuboondreas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Author Profile (kuboondreas)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://statistika.atletika.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Slovak Athletics Statistics</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.montourdumontblanc.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Official Tour du Mont Blanc</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Fact Integrity & Transparency */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Integrity & Standards
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenIntegrity}
                className="w-full text-left inline-flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-emerald-300 border border-slate-800 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Fact Verification Legend</span>
              </button>

              <button
                onClick={onOpenCredits}
                className="w-full text-left inline-flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 border border-slate-800 transition-colors"
              >
                <Camera className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Photo Credits & CC Licenses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jakub Ondreas (Jakub Ondreáš). All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            Engineered with Next.js, Tailwind CSS & server-side Resend integration.
          </p>
        </div>
      </div>
    </footer>
  );
}
