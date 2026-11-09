'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AutobiographyTimeline from '@/components/AutobiographyTimeline';
import ExpeditionsSection from '@/components/ExpeditionsSection';
import SportsSection from '@/components/SportsSection';
import PublicationsSection from '@/components/PublicationsSection';
import RotaryUsaSection from '@/components/RotaryUsaSection';
import WhatsNextSection from '@/components/WhatsNextSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FactIntegrityModal from '@/components/FactIntegrityModal';
import PhotoCreditsModal from '@/components/PhotoCreditsModal';

export default function Home() {
  const [showIntegrityModal, setShowIntegrityModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-carbon-950 text-[#E5E7EB] selection:bg-alpine-600 selection:text-white">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Editorial Content Sequence */}
      <main id="main-content" tabIndex={-1}>
        {/* Full-Screen Hero */}
        <HeroSection
          onOpenCredits={() => setShowCreditsModal(true)}
        />

        {/* Chapter 01: My Story & Mountain Roots */}
        <AboutSection />

        {/* Chapter 02: 8-Part Chronological Autobiography Timeline */}
        <AutobiographyTimeline />

        {/* Chapter 03: Mont Blanc 2025 & Tour du Mont Blanc 2026 Expeditions */}
        <ExpeditionsSection />

        {/* Chapter 04: Athletics with Slávia STU & 9 Outdoor Disciplines */}
        <SportsSection />

        {/* Chapter 05: Stories, Articles & National Media (STVR / Tulení pásy) */}
        <PublicationsSection />

        {/* Chapter 06: Rotary Youth Exchange — Life Across the Atlantic */}
        <RotaryUsaSection />

        {/* Chapter 07: What's Next? (Future Horizons) */}
        <WhatsNextSection />

        {/* Get to Know Me: Direct Contact Form */}
        <ContactSection />
      </main>

      {/* Architectural Minimalist Footer */}
      <Footer
        onOpenCredits={() => setShowCreditsModal(true)}
        onOpenIntegrity={() => setShowIntegrityModal(true)}
      />

      {/* Transparency Modals */}
      <FactIntegrityModal
        isOpen={showIntegrityModal}
        onClose={() => setShowIntegrityModal(false)}
      />

      <PhotoCreditsModal
        isOpen={showCreditsModal}
        onClose={() => setShowCreditsModal(false)}
      />
    </div>
  );
}
