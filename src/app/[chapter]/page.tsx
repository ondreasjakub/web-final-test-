import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { chapters, type Chapter } from '@/data/journal';
import { PHOTO_CREDITS } from '@/data/content';
import AboutSection from '@/components/AboutSection';
import AutobiographyTimeline from '@/components/AutobiographyTimeline';
import ExpeditionsSection from '@/components/ExpeditionsSection';
import SportsSection from '@/components/SportsSection';
import RotaryUsaSection from '@/components/RotaryUsaSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';
import WhatsNextSection from '@/components/WhatsNextSection';

const content = {
  story: () => <><AboutSection /><AutobiographyTimeline /><WhatsNextSection /></>,
  expeditions: ExpeditionsSection,
  sports: SportsSection,
  usa: RotaryUsaSection,
  publications: PublicationsSection,
  contact: ContactSection,
} satisfies Record<Chapter['slug'], React.ComponentType>;

type Props = { params: Promise<{ chapter: string }> };

export function generateStaticParams() {
  return chapters.map(({ slug }) => ({ chapter: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { chapter } = await params;
  const entry = chapters.find(({ slug }) => slug === chapter);
  return entry ? { title: entry.nav + ' | Jakub Ondreas', description: entry.summary } : {};
}

export default async function ChapterPage({ params }: Props) {
  const { chapter } = await params;
  const index = chapters.findIndex(({ slug }) => slug === chapter);
  const entry = chapters[index];
  if (!entry) notFound();

  const Content = content[entry.slug];
  const next = chapters[index + 1];
  const photo = entry.photo ? PHOTO_CREDITS[entry.photo] : null;

  return (
    <article className="journal-chapter">
      <header className={'chapter-intro' + (photo ? ' chapter-intro-photo' : '')}>
        <div className="chapter-intro-copy">
          <Link className="journal-label" href="/#highlights">← Back to the journal</Link>
          <h1>{entry.title}</h1>
          <p>{entry.summary}</p>
        </div>
        {photo && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.imageUrl} alt={photo.title} fetchPriority="high" />
            <figcaption>
              <a href={photo.sourceUrl}>{photo.creator}</a> · <a href={photo.licenseUrl}>{photo.license}</a>
              {photo.license === 'CC BY-SA 3.0' ? ' · Resized for the web' : ' · Illustrative photo'}
            </figcaption>
          </figure>
        )}
      </header>
      <Content />
      <nav className="chapter-next" aria-label="Continue reading">
        <Link href={next ? '/' + next.slug : '/#highlights'}>
          <span className="journal-label">{next ? 'Next chapter' : 'All chapters'}</span>
          <strong>{next?.nav ?? 'Back to the journal'}</strong>
          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
