'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_METADATA } from '@/data/content';

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Expeditions', href: '#expeditions' },
  { label: 'Sport', href: '#sports' },
  { label: 'USA', href: '#usa' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="journal-header">
      <a className="journal-skip" href="#main-content">Skip to content</a>
      <div className="journal-header-inner">
        <a href="#home" className="journal-brand" onClick={() => setOpen(false)}>{SITE_METADATA.name}</a>
        <button type="button" className="journal-menu" aria-expanded={open} aria-controls="journal-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav id="journal-nav" className="journal-nav" aria-label="Main navigation" data-open={open}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
