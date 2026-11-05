'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/data/content';
import { Menu, X, ShieldCheck, Camera, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenIntegrity: () => void;
  onOpenCredits: () => void;
}

export default function Navbar({ onOpenIntegrity, onOpenCredits }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'My Story', href: '#my-story' },
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Sports', href: '#sports' },
    { label: 'Publications', href: '#publications' },
    { label: 'USA', href: '#usa' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E1216]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-[#0E1216]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Signature */}
          <Link
            href="#home"
            className="group flex flex-col focus:outline-none"
            aria-label="Jakub Ondreas Homepage"
          >
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-emerald-400 transition-colors uppercase">
              {SITE_METADATA.name}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-sans">
              Digital Autobiography
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs tracking-wider uppercase font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Fact Checker & Photo Credits */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors shadow-sm"
              title="View verification standards & pending confirmations"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">Fact Verification</span>
            </button>

            <button
              onClick={onOpenCredits}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="View illustrative photo credits and licenses"
            >
              <Camera className="w-3.5 h-3.5 text-slate-400" />
              <span>Credits</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-400"
              aria-label="Open Fact Verification"
              title="Fact Verification"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12161A] border-b border-slate-800 px-4 pt-3 pb-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntegrity();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-300"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fact Verification</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCredits();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-300"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photo Credits</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
