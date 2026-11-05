'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/content';
import { ShieldCheck, Camera, ExternalLink, ArrowUp } from 'lucide-react';

interface Props {
  onOpenCredits: () => void;
  onOpenIntegrity: () => void;
}

export default function Footer({ onOpenCredits, onOpenIntegrity }: Props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-carbon-950 border-t border-white/[0.08] text-stoneLight-400 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-2xl font-extrabold text-white tracking-tight uppercase block">
              {SITE_METADATA.name}
            </span>
            <p className="text-[10px] font-mono uppercase tracking-widest text-goldAccent">
              Digital Autobiography & Alpine Expedition Journal
            </p>
            <p className="text-xs sm:text-sm text-stoneLight-400 leading-relaxed max-w-sm font-normal">
              Documenting high-altitude ski-mountaineering, self-supported traverses, track sprinting with AO TJ Slávia STU Bratislava, and transatlantic learning through Rotary Youth Exchange.
            </p>
            <p className="text-[11px] font-mono text-stoneLight-500">
              Bratislava, Slovakia • United States
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
              Site Index
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  01 // Overview
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  02 // My Story
                </a>
              </li>
              <li>
                <a href="#autobiography" className="hover:text-white transition-colors">
                  03 // Eight Chapters
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-white transition-colors">
                  04 // Expeditions
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">
                  05 // Athletics & Sports
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  06 // Published Media
                </a>
              </li>
              <li>
                <a href="#usa" className="hover:text-white transition-colors">
                  07 // USA Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
              Verified Links
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-goldAccent transition-colors inline-flex items-center gap-1.5"
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
                  className="hover:text-goldAccent transition-colors inline-flex items-center gap-1.5"
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
                  className="hover:text-goldAccent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Author Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://statistika.atletika.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-goldAccent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Slovak Athletics (SAZ)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.montourdumontblanc.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-goldAccent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Official TMB Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Fact Standard & Photo Credits Controls */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white font-bold">
              Integrity & Standards
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenIntegrity}
                className="w-full text-left inline-flex items-center gap-2 p-3 rounded-2xl bg-carbon-900 hover:bg-carbon-850 text-xs font-mono text-emerald-300 border border-white/[0.06] transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Fact Verification</span>
              </button>

              <button
                onClick={onOpenCredits}
                className="w-full text-left inline-flex items-center gap-2 p-3 rounded-2xl bg-carbon-900 hover:bg-carbon-850 text-xs font-mono text-stoneLight-300 border border-white/[0.06] transition-colors cursor-pointer"
              >
                <Camera className="w-4 h-4 text-stoneLight-400 flex-shrink-0" />
                <span>Photography Credits</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stoneLight-500">
          <p>© {new Date().getFullYear()} Jakub Ondreas (Jakub Ondreáš). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stoneLight-400 hover:text-white transition-colors cursor-pointer text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
