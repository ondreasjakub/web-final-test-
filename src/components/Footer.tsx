import Link from 'next/link';
import { SITE_METADATA } from '@/data/content';
import { chapters } from '@/data/journal';

export default function Footer({ onOpenCredits, onOpenIntegrity }: {
  onOpenCredits: () => void;
  onOpenIntegrity: () => void;
}) {
  return (
    <footer className="journal-footer">
      <div className="journal-footer-inner">
        <Link className="journal-brand" href="/">{SITE_METADATA.name}</Link>
        <nav aria-label="Footer navigation">
          {chapters.map(({ slug, nav }) => <Link key={slug} href={'/' + slug}>{nav}</Link>)}
        </nav>
        <div className="journal-footer-notes">
          <button type="button" onClick={onOpenCredits}>Photography credits</button>
          <button type="button" onClick={onOpenIntegrity}>Fact standard</button>
        </div>
      </div>
    </footer>
  );
}
