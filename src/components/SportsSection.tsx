'use client';

import { useState } from 'react';
import ImageWithCredit from './ImageWithCredit';

const interests = [
  { title: 'Athletics', photo: 'athletics_track', text: 'I train with AO TJ Slávia STU Bratislava, focusing on the 200 metres and relays.' },
  { title: 'Cycling', photo: 'journal_bicycle', text: 'I like mountain biking and multi-day bikepacking trips where I carry my own gear.' },
  { title: 'Mountains', photo: 'western_tatras', text: 'In summer I hike and climb. In winter I swap my boots for touring skis or cross-country skis.' },
];

export default function SportsSection() {
  const [active, setActive] = useState(0);
  const interest = interests[active];

  return (
    <section id="sports" className="journal-section">
      <div className="journal-switch" role="group" aria-label="Choose a sport">
        {interests.map(({ title }, index) => (
          <button key={title} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{title}</button>
        ))}
      </div>
      <div className="journal-moment">
        <ImageWithCredit creditKey={interest.photo} />
        <div className="journal-reading"><h2>{interest.title}</h2><p>{interest.text}</p></div>
      </div>
    </section>
  );
}
