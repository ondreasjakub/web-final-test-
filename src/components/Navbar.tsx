'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/data/content';
import { Menu, X, ShieldCheck, Camera } from 'lucide-react';

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
    { label: 'Overview', href: '#home' },
    { label: 'Story', href: '#story' },
    { label: 'Timeline', href: '#autobiography' },
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Athletics', href: '#sports' },
    { label: 'Media', href: '#publications' },
    { label: 'USA', href: '#usa' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'apple-glass-nav py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Brand Signature */}
          <Link
            href="#home"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white hover:opacity-80 transition-opacity"
          >
            <span>{SITE_METADATA.name}</span>
          </Link>

          {/* Clean Desktop Navigation Links (Apple Style: 12px, clean, subtle spacing) */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#F5F5F7]/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Icons (Minimalist Fact Standard & Photo Credits) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-[#F5F5F7]/80 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] transition-all cursor-pointer"
              title="Verified Fact Standard"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-apple-green" />
              <span>Verified Facts</span>
            </button>

            <button
              onClick={onOpenCredits}
              className="p-1.5 rounded-full text-[#F5F5F7]/80 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              title="Photography Credits & Attribution"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenIntegrity}
              className="p-1.5 rounded-full text-apple-green bg-white/[0.06] border border-white/[0.08]"
              aria-label="Verified Facts"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Apple-like drop-down) */}
      {mobileMenuOpen && (
        <div className="md:hidden apple-glass-nav border-t border-white/[0.08] px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F5F5F7]/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntegrity();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-full bg-white/[0.08] text-white border border-white/10"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-apple-green" />
              <span>Fact Standard</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCredits();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-full bg-white/[0.04] text-white/80 border border-white/10"
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
