import { ArrowDown } from 'lucide-react';
import { PHOTO_CREDITS, SITE_METADATA } from '@/data/content';

export default function HeroSection({ onOpenCredits }: { onOpenCredits: () => void }) {
  return (
    <section id="home" className="intro-hero" aria-labelledby="hero-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="intro-photo" src={PHOTO_CREDITS.hero_montblanc.imageUrl}
        srcSet="/photos/hero-mobile.webp 760w, /photos/hero_montblanc.webp 1920w"
        sizes="100vw" alt="" fetchPriority="high" />
      <div className="intro-copy">
        <p className="journal-label">A personal journal</p>
        <h1 id="hero-title">{SITE_METADATA.name}</h1>
        <p className="intro-summary">From the Slovak Tatras to the Alps and across the Atlantic.</p>
        <a className="journal-button" href="#highlights">
          Explore the journal <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
      <button type="button" className="intro-credit" onClick={onOpenCredits}>
        Illustrative photo · Kalen Emsley
      </button>
    </section>
);
}
