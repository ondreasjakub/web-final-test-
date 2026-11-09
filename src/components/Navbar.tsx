'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { SITE_METADATA } from '@/data/content';
import { chapters } from '@/data/journal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="journal-header">
      <a className="journal-skip" href="#main-content">Skip to content</a>
      <div className="journal-header-inner">
        <Link href="/" className="journal-brand" onClick={() => setOpen(false)}>{SITE_METADATA.name}</Link>
        <button type="button" className="journal-menu" aria-expanded={open} aria-controls="journal-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav id="journal-nav" className="journal-nav" aria-label="Main navigation" data-open={open}>
          {chapters.map(({ slug, nav }) => (
            <Link key={slug} href={'/' + slug} aria-current={pathname === '/' + slug ? 'page' : undefined}
              onClick={() => setOpen(false)}>{nav}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
