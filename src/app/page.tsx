import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { PHOTO_CREDITS } from '@/data/content';
import { chapters } from '@/data/journal';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="highlights" className="journal-highlights" aria-labelledby="highlights-title">
        <p className="journal-label">A little about me</p>
        <h2 id="highlights-title">Explore the journal</h2>
        <p className="journal-home-intro">I’m Jakub, a student from Bratislava. I grew up skiing and hiking in the Tatras.</p>
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
      </section>
    </>
  );
}
