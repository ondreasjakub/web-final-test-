export const chapters = [
  { slug: 'story', nav: 'About', title: 'Where it all started', summary: 'From Bratislava to the Western Tatras.', photo: 'western_tatras' },
  { slug: 'expeditions', nav: 'Expeditions', title: 'Into the Alps', summary: 'Two journeys around Mont Blanc: a ski descent and a 160 km trek.', photo: 'mont_blanc_north_face' },
  { slug: 'sports', nav: 'Sport', title: 'Always in motion', summary: 'From the running track to mountain trails and long days on a bike.', photo: 'journal_bicycle' },
  { slug: 'usa', nav: 'USA', title: 'Across the Atlantic', summary: 'A Rotary Youth Exchange chapter in the United States.', photo: 'rotary_landscape' },
  { slug: 'publications', nav: 'Media', title: 'In print and on air', summary: 'Articles, interviews and the stories behind them.', photo: null },
  { slug: 'contact', nav: 'Contact', title: 'Get in touch', summary: 'Send me a note.', photo: null },
] as const;

export type Chapter = (typeof chapters)[number];
