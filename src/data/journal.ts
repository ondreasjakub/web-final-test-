export const chapters = [
  { slug: 'story', nav: 'About', title: 'Where it all started', summary: 'Growing up between Bratislava and the Western Tatras.', photo: 'western_tatras' },
  { slug: 'expeditions', nav: 'Expeditions', title: 'Into the Alps', summary: 'Two journeys around Mont Blanc: a ski descent and a 160 km trek.', photo: 'mont_blanc_north_face' },
  { slug: 'sports', nav: 'Sport', title: 'Always in motion', summary: 'From the running track to mountain trails and long days on a bike.', photo: 'journal_bicycle' },
  { slug: 'usa', nav: 'USA', title: 'Across the Atlantic', summary: 'A Rotary Youth Exchange chapter in the United States.', photo: 'rotary_landscape' },
  { slug: 'publications', nav: 'Media', title: 'In print and on air', summary: 'Articles, interviews and the stories behind them.', photo: null },
  { slug: 'contact', nav: 'Contact', title: 'Get in touch', summary: 'Questions, stories or a good idea for the next adventure?', photo: null },
] as const;

export type Chapter = (typeof chapters)[number];
