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
    <footer className="bg-black border-t border-white/[0.08] text-apple-muted py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xl font-bold text-white tracking-tight uppercase block">
              {SITE_METADATA.name}
            </span>
            <p className="text-xs uppercase tracking-wider text-apple-subtext font-semibold">
              Digital Autobiography & Expedition Journal
            </p>
            <p className="text-xs sm:text-sm text-apple-muted leading-relaxed max-w-sm font-normal">
              Documenting high-altitude ski-mountaineering, self-supported traverses, track sprinting with AO TJ Slávia STU Bratislava, and transatlantic learning through Rotary Youth Exchange.
            </p>
            <p className="text-xs text-apple-muted">
              Bratislava, Slovakia • United States
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  My Story
                </a>
              </li>
              <li>
                <a href="#autobiography" className="hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-white transition-colors">
                  Expeditions
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">
                  Athletics
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#usa" className="hover:text-white transition-colors">
                  USA Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Verified Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
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
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>STVR TV Broadcast</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tulenipasy.cz/autor/kuboondreas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
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
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
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
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Official TMB Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Fact Standard & Photo Credits Controls */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Standards
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenIntegrity}
                className="w-full text-left inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-apple-green border border-white/[0.06] transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-apple-green flex-shrink-0" />
                <span>Fact Verification</span>
              </button>

              <button
                onClick={onOpenCredits}
                className="w-full text-left inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-apple-subtext border border-white/[0.06] transition-colors cursor-pointer"
              >
                <Camera className="w-4 h-4 text-apple-muted flex-shrink-0" />
                <span>Photography Credits</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-muted">
          <p>© {new Date().getFullYear()} Jakub Ondreas (Jakub Ondreáš). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-apple-subtext hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
