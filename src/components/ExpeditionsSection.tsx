'use client';

import { useState } from 'react';
import { TMB_EXPEDITION } from '@/data/content';
import ImageWithCredit from './ImageWithCredit';

const publishedGallery = 'https://www.tulenipasy.cz/galerie/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/';

export default function ExpeditionsSection() {
  const [trip, setTrip] = useState<'trek' | 'ski'>('trek');

  return (
    <section id="expeditions" className="journal-section">
      <div className="journal-switch" role="group" aria-label="Choose an expedition">
        <button type="button" aria-pressed={trip === 'trek'} onClick={() => setTrip('trek')}>Tour du Mont Blanc</button>
        <button type="button" aria-pressed={trip === 'ski'} onClick={() => setTrip('ski')}>Mont Blanc on skis</button>
      </div>

      {trip === 'trek' ? (
        <>
          <div className="journal-reading">
            <h2>160 km around Mont Blanc</h2>
            <p>Ondrej Kuchyňa and I started in Chamonix and hiked through France, Italy and Switzerland. We carried our own gear and finished in six and a half days.</p>
          </div>
          <div className="journal-photo-grid">
            <ImageWithCredit creditKey="expedition_hikers" caption="Illustrative photo from the Canadian Rockies" />
            <ImageWithCredit creditKey="mont_blanc_north_face" caption="The Mont Blanc massif" />
          </div>
          <details className="journal-disclosure">
            <summary>Explore the route</summary>
            <ul className="journal-route">
              {TMB_EXPEDITION.stages.map(({ day, fromTo }) => <li key={day}><strong>{day}</strong><span>{fromTo}</span></li>)}
            </ul>
            <p className="text-sm text-stone-600">A guide to the stages, based on the route around the massif.</p>
          </details>
        </>
      ) : (
        <>
          <div className="journal-reading">
            <h2>Mont Blanc on skis at 14</h2>
            <p>In May 2025, I climbed Mont Blanc with my dad and Rasťo Hatiar. We crossed the Bossons Glacier, stayed at Grands Mulets and set off before dawn for the summit.</p>
          </div>
          <div className="journal-actions">
            <a className="journal-action" href={publishedGallery}>See photos from my climb ↗</a>
          </div>
        </>
      )}
    </section>
  );
}
