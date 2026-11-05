'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/data/content';
import { Menu, X, ShieldCheck, Camera, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenIntegrity: () => void;
  onOpenCredits: () => void;
}

export default function Navbar({ onOpenIntegrity, onOpenCredits }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'My Story', href: '#story' },
    { label: 'Timeline', href: '#autobiography' },
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Athletics', href: '#sports' },
    { label: 'Articles', href: '#publications' },
    { label: 'USA Exchange', href: '#usa' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-carbon-950/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-carbon-950/80 via-carbon-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Editorial Signature */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Jakub Ondreas Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-carbon-850 border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white group-hover:border-goldAccent transition-colors">
              JO
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-goldAccent transition-colors uppercase">
                {SITE_METADATA.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stoneLight-400">
                Alpinist • Athlete • Student
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-carbon-900/60 border border-white/[0.06] backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-medium text-stoneLight-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Fact Standard & Photo Credits */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-full bg-alpine-950/80 border border-alpine-500/30 text-emerald-300 hover:bg-alpine-900 transition-colors"
              title="Verified sources standard & pending facts"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fact Standard</span>
            </button>

            <button
              onClick={onOpenCredits}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-full bg-carbon-900/80 border border-white/10 text-stoneLight-300 hover:text-white hover:bg-carbon-850 transition-colors"
              title="View illustrative photography credits"
            >
              <Camera className="w-3.5 h-3.5 text-stoneLight-400" />
              <span>Credits</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="p-2 rounded-full bg-alpine-950/80 border border-emerald-500/30 text-emerald-400"
              aria-label="Fact Standard"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-carbon-900 text-stoneLight-200 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-carbon-950/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 pt-4 pb-8 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-xs uppercase tracking-widest font-semibold text-stoneLight-200 hover:text-goldAccent hover:bg-white/[0.04] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntegrity();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xl bg-alpine-950 border border-emerald-500/30 text-emerald-300"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Fact Standard</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCredits();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xl bg-carbon-900 border border-white/10 text-stoneLight-200"
            >
              <Camera className="w-4 h-4" />
              <span>Photo Credits</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
