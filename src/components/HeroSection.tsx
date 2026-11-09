import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PHOTO_CREDITS, SITE_METADATA } from '@/data/content';

const highlights = [
  { title: 'Expeditions', detail: 'Mont Blanc & the 160 km traverse', href: '#expeditions', photo: 'expedition_hikers' },
  { title: 'Sport', detail: 'Track, cycling & the outdoors', href: '#sports', photo: 'athletics_track' },
  { title: 'Life abroad', detail: 'Rotary Youth Exchange in the USA', href: '#usa', photo: 'rotary_landscape' },
];

export default function HeroSection({ onOpenCredits }: { onOpenCredits: () => void }) {
  return (
    <>
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

      <section id="highlights" className="journal-highlights" aria-labelledby="highlights-title">
        <p className="journal-label">Selected chapters</p>
        <h2 id="highlights-title">Explore the journal</h2>
        <div className="journal-grid">
          {highlights.map(({ title, detail, href, photo }) => (
            <a key={href} href={href} className="journal-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO_CREDITS[photo].imageUrl} alt="" loading="lazy" decoding="async" />
              <div className="journal-tile-copy">
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
        <button type="button" className="journal-photo-link" onClick={onOpenCredits}>
          Illustrative photography and credits
        </button>
      </section>
    </>
  );
}
