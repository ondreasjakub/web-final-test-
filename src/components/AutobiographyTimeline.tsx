import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ImageWithCredit from './ImageWithCredit';

const moments = [
  { title: 'Growing up in Bratislava', photo: 'western_tatras', text: 'I grew up in Bratislava, with the Tatras just a weekend away.' },
  { title: 'First trips to the Tatras', photo: 'western_tatras', text: 'I learned to ski tour in Žiarska dolina, where we spent a lot of weekends as a family.' },
  { title: 'On the running track', photo: 'athletics_track', text: 'I joined Slávia STU Bratislava, where I train for the 200 metres and run relays.', href: '/sports' },
  { title: 'Mont Blanc on skis', photo: 'mont_blanc_north_face', text: 'In May 2025, at 14, I climbed Mont Blanc with my dad and Rasťo Hatiar and skied back down.', href: '/expeditions' },
  { title: 'Bikepacking', photo: 'journal_bicycle', text: 'Packing a bike with a shelter and tools lets me spend several days on the road.', href: '/sports' },
  { title: 'Tour du Mont Blanc', photo: 'expedition_hikers', text: 'Ondrej Kuchyňa and I hiked about 160 km through France, Italy and Switzerland in six and a half days.', href: '/expeditions' },
  { title: 'An exchange year in the USA', photo: 'rotary_landscape', text: 'I spent time in the United States through Rotary Youth Exchange, studying in English and making new friends.', href: '/usa' },
  { title: 'What’s next', photo: 'hero_montblanc', text: 'More time in the mountains, longer rides and more stories to write.' },
];

export default function AutobiographyTimeline() {
  return (
    <section id="autobiography" className="journal-section">
      <h2>My story</h2>
      <div className="journal-moments">
        {moments.map((moment) => (
          <details key={moment.title}>
            <summary>{moment.title}<ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="journal-moment">
              <ImageWithCredit creditKey={moment.photo} />
              <div className="journal-reading">
                <p>{moment.text}</p>
                {moment.href && <Link className="journal-inline-link" href={moment.href}>Explore this chapter →</Link>}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
