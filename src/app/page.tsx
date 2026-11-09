'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import PhotoCreditsModal from '@/components/PhotoCreditsModal';
import { PHOTO_CREDITS } from '@/data/content';
import { chapters } from '@/data/journal';

export default function Home() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <HeroSection onOpenCredits={() => setShowCredits(true)} />
      <section id="highlights" className="journal-highlights" aria-labelledby="highlights-title">
        <p className="journal-label">A little about me</p>
        <h2 id="highlights-title">Explore the journal</h2>
        <p className="journal-home-intro">I’m Jakub, a student from Bratislava. I grew up spending weekends in the Tatras, and those mountains are where my love of skiing, hiking and long days outside began.</p>
        <div className="journal-grid">
          {chapters.map(({ slug, nav, summary, photo }) => (
            <Link key={slug} href={'/' + slug} className={photo ? 'journal-tile' : 'journal-tile journal-tile-text'}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {photo && <img src={PHOTO_CREDITS[photo].imageUrl} alt="" loading="lazy" decoding="async" />}
              <div className="journal-tile-copy">
                <div><h3>{nav}</h3><p>{summary}</p></div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
        <button type="button" className="journal-photo-link" onClick={() => setShowCredits(true)}>
          Illustrative photography and credits
        </button>
      </section>
      <PhotoCreditsModal isOpen={showCredits} onClose={() => setShowCredits(false)} />
    </>
  );
}
