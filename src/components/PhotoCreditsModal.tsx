'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { PHOTO_CREDITS } from '@/data/content';

const publishedPhotos = [
  'hero_montblanc', 'western_tatras', 'mont_blanc_north_face',
  'expedition_hikers', 'athletics_track', 'journal_bicycle', 'rotary_landscape',
];

export default function PhotoCreditsModal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);

  return (
    <dialog ref={dialog} className="journal-credits" aria-labelledby="photo-credits-title" onClose={onClose}>
      <header>
        <h2 id="photo-credits-title">Photo credits</h2>
        <button type="button" aria-label="Close photo credits" onClick={() => dialog.current?.close()}><X size={22} /></button>
      </header>
      <ul>
        {publishedPhotos.map((key) => {
          const photo = PHOTO_CREDITS[key];
          return (
            <li key={key}>
              <strong>{photo.title}</strong>
              <span>
                <a href={photo.sourceUrl}>{photo.creator}</a> · <a href={photo.licenseUrl}>{photo.license.startsWith('Unsplash') ? 'Unsplash' : photo.license}</a>
                {photo.license.startsWith('CC ') ? ' · Resized for web' : ''}
              </span>
            </li>
          );
        })}
      </ul>
    </dialog>
  );
}
