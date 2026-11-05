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
    <div className="relative min-h-screen bg-[#0E1216] text-[#E6EBE7]">
      {/* Top Navigation */}
      <Navbar
        onOpenIntegrity={() => setShowIntegrityModal(true)}
        onOpenCredits={() => setShowCreditsModal(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <HeroSection
          onOpenCredits={() => setShowCreditsModal(true)}
          onOpenIntegrity={() => setShowIntegrityModal(true)}
        />

        {/* Section 3: About Me */}
        <AboutSection />

        {/* Section 10: Full Autobiography Timeline (8 Chapters) */}
        <AutobiographyTimeline />

        {/* Sections 4 & 5: Expeditions (Mont Blanc 2025 & Tour du Mont Blanc 2026) */}
        <ExpeditionsSection />

        {/* Sections 6 & 7: Sports & Athletics */}
        <SportsSection />

        {/* Section 8: Publications and Media */}
        <PublicationsSection />

        {/* Section 9: Rotary Youth Exchange — Life in the USA */}
        <RotaryUsaSection />

        {/* Section 12: What's Next? */}
        <WhatsNextSection />

        {/* Section 11: Get to Know Me / Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCredits={() => setShowCreditsModal(true)}
        onOpenIntegrity={() => setShowIntegrityModal(true)}
      />

      {/* Modals */}
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
