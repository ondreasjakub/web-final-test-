export type VerificationType = 'public_record' | 'direct_statement' | 'awaiting_confirmation';

export interface VerificationBadge {
  type: VerificationType;
  label: string;
  sourceNote: string;
  sourceUrl?: string;
}

export interface PhotoCredit {
  id: string;
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  imageUrl: string;
  role: string;
  category: 'Mont Blanc' | 'Tour du Mont Blanc' | 'Athletics' | 'Cycling & Adventure' | 'Rotary USA' | 'Reference Map' | 'Western Tatras';
  attributionNote: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url: string;
  summary: string;
  type: 'Article' | 'Broadcast / Interview' | 'Author Profile';
  verification: VerificationBadge;
  readTime?: string;
}

export interface TimelineMilestone {
  year: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  narrative: string;
  verification: VerificationBadge;
  tags: string[];
  location: string;
  details?: string[];
  photoCreditId?: string;
  accentQuote?: string;
}

export interface SportCard {
  id: string;
  title: string;
  category: string;
  description: string;
  firstPersonNote: string;
  keyAspects: string[];
  status: VerificationBadge;
  imageUrl?: string;
}

export interface StageInfo {
  day: string;
  title: string;
  fromTo: string;
  distanceKm: string;
  elevation: string;
  highlights: string;
  country: 'France' | 'Italy' | 'Switzerland';
  photoUrl?: string;
}

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  western_tatras: {
    id: 'western_tatras',
    title: 'Žiarska dolina from the trail to Smutné sedlo',
    creator: 'Jerzy Opioła',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:%C5%BBarska_Dolina_a1.jpg',
    imageUrl: '/photos/western-tatras.webp',
    role: 'Western Tatras chapter cover',
    category: 'Western Tatras',
    attributionNote: 'Žiarska dolina photographed by Jerzy Opioła. Resized for the web under CC BY-SA 3.0.',
  },
  journal_bicycle: {
    id: 'journal_bicycle',
    title: 'A bikepacking bicycle silhouetted on a hill',
    creator: 'Patrick Hendry',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/orange-and-black-off-road-bicycle-on-hill-1ow9zrlldJU',
    imageUrl: '/photos/bikepacking.webp',
    role: 'Sport chapter cover',
    category: 'Cycling & Adventure',
    attributionNote: 'Illustrative bikepacking photo by Patrick Hendry via Unsplash.',
  },

  // Hero & Mont Blanc Expedition
  hero_montblanc: {
    id: 'hero_montblanc',
    title: 'Snow-Capped Mountains and Forest in Yukon',
    creator: 'Kalen Emsley',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/snow-capped-mountains-with-valley-and-forest-Bkci_8qcdvQ',
    imageUrl: '/photos/hero_montblanc.webp',
    role: 'Hero Background • High-altitude Alpine atmosphere',
    category: 'Mont Blanc',
    attributionNote: 'Illustrative Yukon landscape by Kalen Emsley via Unsplash.',
  },
  montblanc_skimo: {
    id: 'montblanc_skimo',
    title: 'Ski Mountaineer Ascending Glacial Ridge',
    creator: 'Lucas Favre',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/person-skiing-on-snow-mountain-during-daytime-O7bvh2eQYkM',
    imageUrl: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=85&w=1600',
    role: 'Mont Blanc 2025 • Ski Mountaineering Ascent',
    category: 'Mont Blanc',
    attributionNote: 'Illustrative ski-mountaineering visual by Lucas Favre via Unsplash.',
  },
  montblanc_glacier: {
    id: 'montblanc_glacier',
    title: 'Alpine Crevasses & Séracs on Glacial Terrain',
    creator: 'Alberto Restifo',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/snow-covered-mountain-under-white-clouds-at-daytime-cFBhiqGm31U',
    imageUrl: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&q=85&w=1600',
    role: 'Grands Mulets Glacier Navigation',
    category: 'Mont Blanc',
    attributionNote: 'Illustrative high-altitude glacier scenery by Alberto Restifo via Unsplash.',
  },
  montblanc_refuge: {
    id: 'montblanc_refuge',
    title: 'High Alpine Refuge Hut Perched on Ridge',
    creator: 'Dino Reichmuth',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/brown-house-near-mountain-1527631746610-bca00a040d60',
    imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=85&w=1600',
    role: 'Alpine Refuge & Acclimatization Base',
    category: 'Mont Blanc',
    attributionNote: 'Illustrative alpine hut visual by Dino Reichmuth via Unsplash.',
  },
  mont_blanc_north_face: {
    id: 'mont_blanc_north_face',
    title: 'Mont Blanc North Face',
    creator: 'Christian',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mont_Blanc_Face_N.jpg',
    imageUrl: '/photos/mont-blanc.webp',
    role: 'Mont Blanc North Face Reference',
    category: 'Mont Blanc',
    attributionNote: 'Mont Blanc north face photographed by Christian. Resized for the web under CC BY-SA 3.0.',
  },

  expedition_hikers: {
    id: 'expedition_hikers',
    title: 'Hikers above an alpine lake',
    creator: 'Kalen Emsley',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/couple-at-the-peak-facing-mountain-uSFOwYo1qEw',
    imageUrl: '/photos/expedition-hikers.webp',
    role: 'Expeditions chapter cover',
    category: 'Tour du Mont Blanc',
    attributionNote: 'Illustrative hiking photo from Canmore, Canada, by Kalen Emsley via Unsplash.',
  },

  // Tour du Mont Blanc
  tmb_chamonix: {
    id: 'tmb_chamonix',
    title: 'Chamonix Valley & Aiguille du Midi',
    creator: 'Daniel Frank',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/snow-covered-mountain-under-white-clouds-1502784444187',
    imageUrl: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=85&w=1600',
    role: 'TMB Starting Point • Chamonix Valley',
    category: 'Tour du Mont Blanc',
    attributionNote: 'Illustrative Chamonix valley photography by Daniel Frank via Unsplash.',
  },
  tmb_trail: {
    id: 'tmb_trail',
    title: 'Alpine Singletrack Traverse Trail',
    creator: 'Christopher Burns',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/hiking-trail-on-green-grass-mountain-1483728642387',
    imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=85&w=1600',
    role: 'TMB 160-km Trekking Atmosphere',
    category: 'Tour du Mont Blanc',
    attributionNote: 'Illustrative alpine trail visual by Christopher Burns via Unsplash.',
  },
  tmb_pass: {
    id: 'tmb_pass',
    title: 'Trekkers on High Mountain Pass',
    creator: 'Kalen Emsley',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/two-people-standing-on-rocky-mountain-1469854523086',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=85&w=1600',
    role: 'Grand Col Ferret & Border Crossings',
    category: 'Tour du Mont Blanc',
    attributionNote: 'Illustrative alpine pass visual by Kalen Emsley via Unsplash.',
  },
  tmb_route_map: {
    id: 'tmb_route_map',
    title: 'Tour du Mont Blanc Route Map Reference',
    creator: 'Hiiker paul',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tour_du_Mont_blanc_Map.jpg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Tour_du_Mont_blanc_Map.jpg',
    role: 'TMB Route Overview Illustration',
    category: 'Reference Map',
    attributionNote: 'Route reference illustration under CC BY-SA 4.0. Not Jakub’s raw 2026 GPS track.',
  },

  // Athletics
  athletics_track: {
    id: 'athletics_track',
    title: 'Runner on an Athletics Track',
    creator: 'Braden Collum',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/9HI8UJMSdZA',
    imageUrl: '/photos/athletics_track.webp',
    role: 'Athletics Club Focus • AO TJ Slávia STU Bratislava',
    category: 'Athletics',
    attributionNote: 'Illustrative running track visual by Braden Collum via Unsplash.',
  },
  athletics_sprint: {
    id: 'athletics_sprint',
    title: 'Sprinter in Starting Blocks',
    creator: 'Andrea Piacquadio',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/sprinter-preparing-on-track-1552674605',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=85&w=1600',
    role: '200-Metre Sprint Discipline',
    category: 'Athletics',
    attributionNote: 'Illustrative sprint visual by Andrea Piacquadio via Unsplash.',
  },
  athletics_relay: {
    id: 'athletics_relay',
    title: 'Relay Baton Exchange Moment',
    creator: 'Fitsum Admasu',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/athletes-passing-baton-1571008887538',
    imageUrl: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=85&w=1600',
    role: 'Club Relay Teamwork & Cadence',
    category: 'Athletics',
    attributionNote: 'Illustrative relay teamwork visual by Fitsum Admasu via Unsplash.',
  },

  // Cycling & Outdoor Adventures
  cycling_alpine: {
    id: 'cycling_alpine',
    title: 'Cyclist Climbing Mountain Switchback Pass',
    creator: 'Coen van de Broek',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/person-riding-bicycle-on-mountain-road-1474962558142',
    imageUrl: 'https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?auto=format&fit=crop&q=85&w=1600',
    role: 'Alpine Cycling & High Passes',
    category: 'Cycling & Adventure',
    attributionNote: 'Illustrative cycling visual by Coen van de Broek via Unsplash.',
  },
  cycling_mtb: {
    id: 'cycling_mtb',
    title: 'Mountain Biker on Rugged Alpine Ridge',
    creator: 'Daniel Frank',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/mountain-biker-on-ridge-1544197150',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=85&w=1600',
    role: 'Mountain Biking & Trail Precision',
    category: 'Cycling & Adventure',
    attributionNote: 'Illustrative mountain biking visual by Daniel Frank via Unsplash.',
  },
  cycling_bikepacking: {
    id: 'cycling_bikepacking',
    title: 'Self-Supported Gravel Bikepacker',
    creator: 'Patrick Hendry',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/bikepacker-with-gear-1507035895480',
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=85&w=1600',
    role: 'Bikepacking & Multi-Day Autonomy',
    category: 'Cycling & Adventure',
    attributionNote: 'Illustrative bikepacking visual by Patrick Hendry via Unsplash.',
  },

  // Rotary Youth Exchange (USA)
  rotary_landscape: {
    id: 'rotary_landscape',
    title: 'Yosemite Valley',
    creator: 'Bailey Zindel',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/body-of-water-surrounded-by-trees-NRQV-hBF10M',
    imageUrl: '/photos/rotary_landscape.webp',
    role: 'American Landscapes Exploration',
    category: 'Rotary USA',
    attributionNote: 'Illustrative American wilderness scenery by Bailey Zindel via Unsplash.',
  },
  rotary_city: {
    id: 'rotary_city',
    title: 'American City Skyline at Golden Hour',
    creator: 'Benjamin Davies',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/city-skyline-during-golden-hour-1485738422979',
    imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=85&w=1600',
    role: 'American Cultural Discovery',
    category: 'Rotary USA',
    attributionNote: 'Illustrative American cityscape by Benjamin Davies via Unsplash.',
  },
  rotary_friends: {
    id: 'rotary_friends',
    title: 'International Youth Exchange Camaraderie',
    creator: 'Chang Duong',
    license: 'Unsplash License (Free to use)',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/group-of-people-laughing-together-1529156069898',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=1600',
    role: 'Cross-Cultural Friendships & Rotary Values',
    category: 'Rotary USA',
    attributionNote: 'Illustrative international student community by Chang Duong via Unsplash.',
  },
};

export const SITE_METADATA = {
  name: 'JAKUB ONDREAS',
  alternativeName: 'Jakub Ondreáš',
  tagline: 'Exploring the world. Challenging limits. Creating my own path.',
  intro:
    'I’m Jakub Ondreas, a Slovak student with a passion for mountains, sport, travel and discovering new places. From ski-mountaineering in the Alps to long-distance journeys and an exchange-student experience in the United States, I’m interested in learning through experience.',
  hometown: 'Bratislava, Slovakia',
  currentRole: 'Rotary Youth Exchange Student in the United States (2025–2026)',
  mountainRoots: 'Western Tatras (Západné Tatry) & Žiarska dolina',
  club: 'AO TJ Slávia STU Bratislava',
  emailRecipient: 'jakub.ondreas@gmail.com',
  tmbOfficialLink: 'https://www.montourdumontblanc.com/en/',
  tmbRouteLink: 'https://www2.montourdumontblanc.com/en/the-route',
  slovakAthleticsStats: 'https://statistika.atletika.sk/',
  clubStats: 'https://www.atletikanagarde.sk/statistika/',
};

export const MONT_BLANC_EXPEDITION = {
  title: 'The Roof of the Alps — Mont Blanc on Skis at 14',
  subtitle: '4,806 Metres • Ski-Mountaineering Ascent • Spring 2025',
  authorArticleUrl:
    'https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/',
  stvrReportUrl:
    'https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/',
  stats: [
    { label: 'Elevation', value: '4,806 m', detail: 'Roof of the Alps' },
    { label: 'Age at Ascent', value: '14 Years', detail: 'Spring 2025' },
    { label: 'Route', value: 'Grands Mulets', detail: 'Technical glacier route' },
    { label: 'Discipline', value: 'Ski Alpinism', detail: 'Ascent & ski descent' },
  ],
  timeline: [
    {
      period: '2024',
      title: 'Targeted Preparation & Winter Conditioning',
      description:
        'Preparation began a year prior. Intensive physical conditioning and winter ascents in the Western Tatras, focusing on endurance, rope management, crampon technique, and ice axe self-arrest under harsh alpine conditions.',
      verification: {
        type: 'public_record' as const,
        label: 'Public Record',
        sourceNote: 'Documented in first-person article on Tulení pásy (2025)',
        sourceUrl:
          'https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/',
      },
    },
    {
      period: 'Spring 2025',
      title: 'Acclimatization & Glacier Navigation',
      description:
        'Ascents in the Mont Blanc massif to adapt to high altitude, testing lightweight ski gear, monitoring weather windows, and reviewing crevasse rescue protocols.',
      verification: {
        type: 'public_record' as const,
        label: 'Public Record',
        sourceNote: 'Published in Tulení pásy and covered by Slovak public broadcaster STVR',
      },
    },
    {
      period: 'Spring 2025',
      title: 'Summit Push & Historic Ski Descent',
      description:
        'Navigating the heavily crevassed terrain of the Grands Mulets route on touring skis, climbing through sub-zero predawn temperatures to reach the summit of Mont Blanc (4,806 m) at age 14, followed by a continuous ski descent.',
      verification: {
        type: 'public_record' as const,
        label: 'Public Record',
        sourceNote: 'STVR report and Tulení pásy article verify age 14 and Grands Mulets route',
        sourceUrl:
          'https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/',
      },
    },
  ],
  keyTakeaways: [
    {
      label: 'Technical Mastery',
      text: 'Rope management, crevasse safety, crampons, and ice axe handling honed over months of deliberate winter practice in Žiarska dolina.',
    },
    {
      label: 'Alpine Humility',
      text: 'Mont Blanc is not just an elevation figure — it demands respect, strict patience for weather windows, and conservative pacing.',
    },
    {
      label: 'National Recognition',
      text: 'Documented by Slovak national broadcaster STVR as an accomplishment representing maturity, safety ethics, and character over ego.',
    },
  ],
};

export const TMB_EXPEDITION = {
  title: '160 Kilometres. 6.5 Days. Two 16-Year-Olds.',
  subtitle: 'Tour du Mont Blanc — July 2026',
  quote:
    'In July 2026, my friend Ondrej Kuchyňa and I completed an independent journey around the Mont Blanc massif. We were both 16. We travelled by ourselves from Slovakia, flew to Milan, took a bus to Chamonix and began our hike there. Over six and a half days, we covered approximately 160 kilometres around the massif, crossing France, Italy and Switzerland. We did the journey without adult assistance or a large organized expedition group. Along the way, we met interesting travellers, including a Polish travel influencer, and made friendships that became part of the experience. For me, the journey was about independence, friendship, planning and discovering the world.',
  stats: [
    { label: 'Distance', value: '~160 km', detail: 'Massif circumnavigation' },
    { label: 'Time', value: '6.5 Days', detail: 'Self-supported pace' },
    { label: 'Age', value: '16 Years Old', detail: 'Jakub Ondreas & Ondrej Kuchyňa' },
    { label: 'Borders', value: '3 Nations', detail: 'France, Italy, Switzerland' },
  ],
  itinerarySequence: [
    { step: '01', title: 'Slovakia Departure', desc: 'Self-organized travel starting from Bratislava' },
    { step: '02', title: 'Milan Flight', desc: 'Trans-European transit with 15kg backpacks' },
    { step: '03', title: 'Chamonix Bus', desc: 'Alpine bus transit directly into the valley' },
    { step: '04', title: '160 km Trek', desc: 'Circumnavigating the Mont Blanc massif self-reliantly' },
  ],
  verificationNotice:
    'Fact Integrity: Neither Jakub nor Ondrej claims to be the "youngest in the world" to complete the TMB, as no global record has been independently verified. The route illustration shown is indicative; exact 2026 GPS track will be uploaded once calibrated.',
  stages: [
    {
      day: 'Day 1',
      title: 'Departure & Chamonix Valley',
      fromTo: 'Chamonix / Les Houches ➔ Col de Voza ➔ Les Contamines',
      distanceKm: '22 km',
      elevation: '+950 m / -800 m',
      highlights: 'Stepping off the Chamonix bus with fully loaded packs; climbing toward Col de Voza with views of the Bionnassay glacier.',
      country: 'France',
      photoUrl: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
    },
    {
      day: 'Day 2',
      title: 'High Passes into Italy',
      fromTo: 'Les Contamines ➔ Col du Bonhomme ➔ Refuge de la Croix du Bonhomme',
      distanceKm: '24 km',
      elevation: '+1,320 m / -900 m',
      highlights: 'Historical Roman path, traversing wild rocky cols, rapid weather shifts, and steep alpine scree.',
      country: 'France',
      photoUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800',
    },
    {
      day: 'Day 3',
      title: 'Glacier Vistas of Courmayeur',
      fromTo: 'Col de la Seigne ➔ Val Veny ➔ Courmayeur',
      distanceKm: '26 km',
      elevation: '+1,000 m / -1,150 m',
      highlights: 'Crossing from France into Italy at Col de la Seigne; dramatic southern limestone needles and glaciers of Mont Blanc.',
      country: 'Italy',
      photoUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    },
    {
      day: 'Day 4',
      title: 'Italian Val Ferret to Grand Col Ferret',
      fromTo: 'Courmayeur / Rifugio Bonatti ➔ Grand Col Ferret ➔ La Fouly',
      distanceKm: '28 km',
      elevation: '+1,150 m / -1,000 m',
      highlights: 'Balcony trail overlooking the Grandes Jorasses; crossing Grand Col Ferret (2,537 m) into the Swiss Valais.',
      country: 'Switzerland',
      photoUrl: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&q=80&w=800',
    },
    {
      day: 'Day 5',
      title: 'Swiss Valais Pastures & Champex-Lac',
      fromTo: 'La Fouly ➔ Champex-Lac ➔ Bovine / Trient',
      distanceKm: '25 km',
      elevation: '+850 m / -920 m',
      highlights: 'Tranquil Swiss mountain hamlets, alpine pine forests, meeting fellow international long-distance hikers.',
      country: 'Switzerland',
      photoUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800',
    },
    {
      day: 'Day 6 & 6.5',
      title: 'Col de Balme & Return to Chamonix',
      fromTo: 'Trient ➔ Col de Balme ➔ Tré-le-Champ ➔ Chamonix',
      distanceKm: '35 km',
      elevation: '+1,100 m / -1,300 m',
      highlights: 'Crossing back from Switzerland to France at Col de Balme; full circle view of the Chamonix valley; completing the 160 km circuit.',
      country: 'France',
      photoUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    },
  ] as StageInfo[],
  peopleMetStory: {
    title: 'People Met Along the Trail',
    body: 'One of the defining aspects of independent travel is the global community you encounter along the trail. Moving without a commercial group allowed spontaneous conversations with backpackers from across Europe, North America, and Asia. In the high valleys, Jakub and Ondrej met an energetic Polish travel influencer sharing hiking advice and stories, as well as seasoned thru-hikers inspired by two 16-year-olds navigating the circuit self-sufficiently.',
  },
};

export const ATHLETICS_DATA = {
  title: 'Discipline. Teamwork. Results.',
  subtitle: 'Slovak Club Athletics & Sprint Focus',
  club: 'AO TJ Slávia STU Bratislava',
  statusBadge: {
    type: 'awaiting_confirmation' as const,
    label: 'Awaiting Official Result Sheet',
    sourceNote:
      'Club membership and 200m discipline supplied by Jakub. Official championship year, relay format leg, placing, and official time await Jakub’s confirmed document upload.',
  },
  publicDatabases: [
    {
      name: 'Slovenský Atletický Zväz (SAZ) Statistics',
      url: 'https://statistika.atletika.sk/',
      description: 'Official ranking and results archive of the Slovak Athletic Federation.',
    },
    {
      name: 'Slávia STU Bratislava Athletics Archive',
      url: 'https://www.atletikanagarde.sk/statistika/',
      description: 'Club competition statistics, records, and team event rosters.',
    },
  ],
  narrative:
    'Sprinting is a sport of hundredths of a second. Training with AO TJ Slávia STU Bratislava in Bratislava instills relentless discipline: blocks starts, explosive power, cadence, and seamless baton transitions in the relay. While mountain endurance takes hours, sprinting requires absolute concentration in a single instant.',
  relayPlaceholder: {
    title: '200-Metre Relay / Discipline',
    note: 'Official result placeholder: Jakub will link his official SAZ competition sheet specifying season, age category (starší žiaci / dorastenci), event title, and medal standing.',
  },
};

export const OUTDOOR_INTERESTS: SportCard[] = [
  {
    id: 'athletics',
    title: 'Athletics & Sprints',
    category: 'Track & Field',
    description: 'Sprint training with AO TJ Slávia STU Bratislava. High-intensity block starts, 200m events, and relay baton handoffs.',
    firstPersonNote: 'Athletics gave me physical conditioning and mental tenacity that directly transfer into high-altitude stamina.',
    keyAspects: ['AO TJ Slávia STU', '200m Discipline', 'Relay Teamwork', 'Explosive Conditioning'],
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Confirmed club affiliation; exact official result pending.',
    },
  },
  {
    id: 'skimo',
    title: 'Ski Mountaineering (Skialpinizmus)',
    category: 'Winter Alpinism',
    description: 'Uphill skinning, technical transitions, and high-consequence descents across Tatra gullies and Alpine massifs.',
    firstPersonNote: 'Skiing down Mont Blanc at 14 showed me how skimo combines endurance, technical mountaineering, and pure alpine joy.',
    keyAspects: ['Grands Mulets Route', 'Tatras Winter Lines', 'Crevasse Protocols', 'Lightweight Touring'],
    imageUrl: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Documented in Tulení pásy (2025) and STVR broadcast.',
    },
  },
  {
    id: 'skiing',
    title: 'Freeride & Alpine Skiing',
    category: 'Winter Mountain',
    description: 'Steep terrain control, variable snow assessment, avalanche awareness, and speed stability.',
    firstPersonNote: 'Skiing has been central to my relationship with the winter mountains since my earliest days in the Tatras.',
    keyAspects: ['Variable Snow Assessment', 'Avalanche Awareness', 'Steep Slopes', 'High-Speed Stability'],
    imageUrl: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Supported by mountaineering ascents and ski descent articles.',
    },
  },
  {
    id: 'mtb',
    title: 'Mountain Biking (MTB)',
    category: 'Cycling',
    description: 'Navigating technical singletracks, rocky alpine descents, and steep forest ascents throughout Slovakia.',
    firstPersonNote: 'MTB teaches line selection, quick reflexes, and rhythm across rough terrain.',
    keyAspects: ['Singletrack Handling', 'Rocky Climbs', 'Technical Descents', 'Slovak Trail Networks'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Stated by Jakub as core training discipline.',
    },
  },
  {
    id: 'bikepacking',
    title: 'Bikepacking & Cycle Touring',
    category: 'Endurance Travel',
    description: 'Self-sufficient multi-day cycling journeys carrying bivouac gear, tools, and supplies across varied terrain.',
    firstPersonNote: 'Packing lightweight, fixing punctures on remote roads, and covering hundred-kilometer days build real autonomy.',
    keyAspects: ['Self-Sufficiency', 'Route Planning', 'Bivouac Living', 'Multi-Day Stamina'],
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Stated by Jakub as active outdoor pursuit.',
    },
  },
  {
    id: 'cross-country',
    title: 'Cross-Country Skiing',
    category: 'Winter Endurance',
    description: 'Classic and skate skiing through groomed mountain plateaus and wilderness winter tracks.',
    firstPersonNote: 'There is no better aerobic conditioning in winter than long hours on skinny skis in freezing air.',
    keyAspects: ['Skate & Classic Style', 'Aerobic Threshold', 'Pacing', 'Tatras Tracks'],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Stated by Jakub as winter cross-training.',
    },
  },
  {
    id: 'hiking',
    title: 'Alpine Hiking & Thru-Trekking',
    category: 'Long-Distance Trekking',
    description: 'Multi-day alpine traverses carrying full kit over mountain cols, as demonstrated on the 160 km Tour du Mont Blanc.',
    firstPersonNote: 'Walking for days across borders with a backpack simplifies life into pace, weather, and the next ridge.',
    keyAspects: ['Tour du Mont Blanc (160 km)', 'Tatras Ridges', 'Navigation', 'Minimalist Packing'],
    imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Verified by TMB expedition account and hiking background.',
    },
  },
  {
    id: 'climbing',
    title: 'Rock Climbing & Mountaineering',
    category: 'Vertical Terrain',
    description: 'Rope work, belaying, ice axe and crampon maneuvers, and moving confidently on exposed rock and mixed ridges.',
    firstPersonNote: 'Developing solid rope technique was essential before attempting glacial routes like Grands Mulets.',
    keyAspects: ['Rope Mechanics', 'Ice Axe Arrest', 'Crampon Footwork', 'Risk Management'],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Documented in Mont Blanc preparation article.',
    },
  },
  {
    id: 'travel-history',
    title: 'Travel, History & Cultural Discovery',
    category: 'Exploration',
    description: 'Curiosity about international societies, local histories, architecture, and languages during every expedition.',
    firstPersonNote: 'Mountains are even more fascinating when you understand the history of the valleys and the people who live there.',
    keyAspects: ['Cultural Immersion', 'European & American History', 'Language Learning', 'Global Friendships'],
    imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    status: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Stated by Jakub in Rotary Youth Exchange and personal philosophy.',
    },
  },
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: 'tulenipasy-montblanc',
    title: 'Cesta na strechu Álp alebo na skialpoch na Mont Blanc (4 806 m) v štrnástich rokoch',
    publisher: 'Tulení pásy (Czech & Slovak Ski-Touring Magazine)',
    date: 'May 2025',
    readTime: '8 min read',
    url: 'https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/',
    type: 'Article',
    summary:
      'First-person expedition report detailing the one-year preparation, training in the Western Tatras, technical gear protocols, acclimatization, and successful ski ascent and descent of Mont Blanc via the Grands Mulets route at age 14.',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Original published article by Jakub Ondreas',
      sourceUrl:
        'https://www.tulenipasy.cz/cesta-na-strechu-alp-alebo-na-skialpoch-na-mont-blanc-4806-m-v-strnastich-rokoch/',
    },
  },
  {
    id: 'stvr-montblanc',
    title: 'Najvyššiu horu Európy zlyžoval len 14-ročný Slovák: Šlo pritom o viac než len o športový výkon',
    publisher: 'STVR (Slovenská televízia a rozhlas — National Public Broadcaster)',
    date: 'May 2025',
    readTime: '6 min feature',
    url: 'https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/',
    type: 'Broadcast / Interview',
    summary:
      'Feature report on Jakub’s ski-mountaineering ascent of Mont Blanc. Discusses how the achievement reflected thorough physical preparation, alpine safety, and character development beyond simple sport records.',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'STVR News archive report',
      sourceUrl:
        'https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/',
    },
  },
  {
    id: 'tulenipasy-author',
    title: 'Jakub Ondreas — Tulení pásy Author Profile',
    publisher: 'Tulení pásy',
    date: 'Active Archive',
    readTime: 'Author Profile',
    url: 'https://www.tulenipasy.cz/autor/kuboondreas/',
    type: 'Author Profile',
    summary:
      'Public author profile listing published contributions, alpine interests, and ski-touring writings by Jakub Ondreas (kuboondreas).',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Author registry on Tulení pásy',
      sourceUrl: 'https://www.tulenipasy.cz/autor/kuboondreas/',
    },
  },
];

export const ROTARY_EXCHANGE_DATA = {
  title: 'A New Chapter Across the Atlantic',
  subtitle: 'Rotary Youth Exchange • United States (2025–2026)',
  quote:
    'I’m currently living in the United States as an exchange student through Rotary Youth Exchange. Coming from Slovakia and experiencing everyday life in America gives me the opportunity to discover another culture, meet new people, improve my English and become more independent. For me, an exchange year is about much more than school — it is about international friendships, new perspectives and personal growth.',
  privacyNotice:
    'Privacy Notice: In accordance with personal safety protocols, exact US host school name, host family details, and personal street addresses are strictly kept private.',
  facets: [
    {
      title: 'Cultural Immersion',
      text: 'Experiencing daily American high school life, community traditions, sports culture, and holidays from an authentic local perspective.',
    },
    {
      title: 'Language & Independence',
      text: 'Navigating life fully in English, communicating with diverse people every day, and learning total self-reliance across the Atlantic.',
    },
    {
      title: 'Rotary International Values',
      text: 'Engaging with Rotary Club members, youth service projects, and building international goodwill and cultural bridge-building.',
    },
    {
      title: 'Lifelong Friendships',
      text: 'Creating bonds with American peers as well as fellow exchange students representing nations across the globe.',
    },
  ],
};

export const AUTOBIOGRAPHY_CHAPTERS: TimelineMilestone[] = [
  {
    year: 'Roots & Foundations',
    chapterNumber: 1,
    title: 'My Beginnings in Slovakia',
    subtitle: 'Bratislava & the natural pull of the outdoors',
    location: 'Bratislava, Slovakia',
    narrative:
      'Growing up in Bratislava, Slovakia’s capital along the Danube, I developed an early curiosity for the natural world. While the city offered school and sports infrastructure, it was the contrast between urban life and wild landscapes that shaped my ambition from early on.',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Bratislava origin confirmed via public author profile',
    },
    tags: ['Bratislava', 'Early Days', 'Curiosity'],
    accentQuote: 'The contrast between the city and wild nature sparked my ambition.',
  },
  {
    year: 'The Alpine Classroom',
    chapterNumber: 2,
    title: 'Discovering Sport and the Mountains',
    subtitle: 'Western Tatras & Žiarska dolina',
    location: 'Západné Tatry, Slovakia',
    narrative:
      'My foundational mountain experiences took root in the Western Tatras (Západné Tatry), with Žiarska dolina serving as an alpine classroom. Exploring its ridges in summer and winter taught me the language of the mountains: snow conditions, weather changes, physical pacing, and the silent discipline of steep ascents.',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Documented in Tulení pásy articles and verified background',
    },
    tags: ['Western Tatras', 'Žiarska dolina', 'Mountaineering'],
    accentQuote: 'Žiarska dolina taught me that mountains do not negotiate.',
    photoCreditId: 'montblanc_refuge',
  },
  {
    year: 'Track & Discipline',
    chapterNumber: 3,
    title: 'Athletics and Outdoor Life',
    subtitle: 'AO TJ Slávia STU Bratislava',
    location: 'Bratislava, Slovakia',
    narrative:
      'Joining AO TJ Slávia STU Bratislava introduced me to organized athletics, sprinting, and relay events. Sprint training demands precision: hundredths of a second depend on posture, block reaction, and synchronized baton exchanges. This athletic discipline directly fueled my mountain stamina.',
    verification: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Club affiliation and 200m discipline confirmed; exact title year pending documentation',
      sourceUrl: 'https://statistika.atletika.sk/',
    },
    tags: ['Athletics', 'Slávia STU', '200m Relay', 'Speed Training'],
    accentQuote: 'Sprinting is a sport of hundredths of a second.',
    photoCreditId: 'athletics_track',
  },
  {
    year: 'Spring 2025',
    chapterNumber: 4,
    title: 'Mont Blanc 2025: The Roof of the Alps',
    subtitle: 'Ski ascent of Mont Blanc (4,806 m) at age 14',
    location: 'Chamonix / Mont Blanc, France',
    narrative:
      'Following a full year of targeted preparation that started in 2024 with technical winter climbing in the Tatras, I completed a ski-mountaineering ascent of Mont Blanc via the Grands Mulets route at age 14. Standing on Europe’s summit on skis and skiing back down proved that disciplined preparation turns audacious goals into reality.',
    verification: {
      type: 'public_record',
      label: 'Public Record',
      sourceNote: 'Published in Tulení pásy and reported by STVR National News',
      sourceUrl:
        'https://spravy.stvr.sk/2025/05/najvyssiu-horu-europy-zlyzoval-len-14-rocny-slovak-slo-pritom-o-viac-nez-len-o-sportovy-vykon/',
    },
    tags: ['Mont Blanc (4,806 m)', 'Grands Mulets', 'Skialpinizmus', 'Age 14'],
    accentQuote: 'Audacious goals become achievable through relentless technical preparation.',
    photoCreditId: 'montblanc_skimo',
  },
  {
    year: 'Self-Reliance',
    chapterNumber: 5,
    title: 'Cycling, Bikepacking and Exploration',
    subtitle: 'Two wheels, self-supported bivouacs, and endurance',
    location: 'Slovakia & Central Europe',
    narrative:
      'Mountain biking and bikepacking opened a new dimension of self-reliance. Loading a bicycle with shelter and tools and setting out across mountain ranges taught me lightweight planning, mechanical troubleshooting on the fly, and the quiet satisfaction of long pedaling days.',
    verification: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Supplied directly by Jakub as core endurance activity',
    },
    tags: ['Bikepacking', 'Mountain Biking', 'Self-Reliance', 'Endurance'],
    accentQuote: 'Carrying everything on two wheels builds true autonomy.',
    photoCreditId: 'cycling_bikepacking',
  },
  {
    year: 'July 2026',
    chapterNumber: 6,
    title: 'Tour du Mont Blanc 2026',
    subtitle: '160 km across France, Italy, and Switzerland in 6.5 days',
    location: 'Mont Blanc Massif (FRA • ITA • SUI)',
    narrative:
      'In July 2026, my friend Ondrej Kuchyňa and I set out completely self-supported around the Mont Blanc massif at age 16. Flying from Slovakia to Milan and taking a bus to Chamonix, we circumnavigated 160 km over 6.5 days. Crossing three countries without adult guides, we met fellow travelers from around the world and forged memories that cemented our love for independent expedition.',
    verification: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Direct first-person statement provided by Jakub. Route map is an illustrative reference.',
      sourceUrl: 'https://www.montourdumontblanc.com/en/',
    },
    tags: ['160 km Trek', '6.5 Days', 'Ondrej Kuchyňa', '3 Countries', 'Age 16'],
    accentQuote: '160 kilometres. 6.5 days. Two 16-year-olds.',
    photoCreditId: 'tmb_trail',
  },
  {
    year: '2025–2026',
    chapterNumber: 7,
    title: 'Rotary Youth Exchange in the USA',
    subtitle: 'A transatlantic journey of cultural learning & growth',
    location: 'United States',
    narrative:
      'Stepping into the United States through Rotary Youth Exchange opened an entirely new world. Living in an American community, speaking English full-time, experiencing high school, and building friendships with people from distinct backgrounds is teaching me global perspective and adaptability.',
    verification: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Supplied directly by Jakub; host family details protected for privacy',
    },
    tags: ['Rotary International', 'USA', 'Cultural Exchange', 'Personal Growth'],
    accentQuote: 'An exchange year is about much more than school — it is about new perspectives.',
    photoCreditId: 'rotary_landscape',
  },
  {
    year: 'Looking Forward',
    chapterNumber: 8,
    title: 'What Comes Next',
    subtitle: 'Higher peaks, endurance races, academic horizons',
    location: 'Global Horizons',
    narrative:
      'The journey has only just begun. Future goals include higher-altitude alpine expeditions, further endurance cycling and running challenges, continuing published writing on outdoor exploration, and pursuing university studies with an international focus.',
    verification: {
      type: 'direct_statement',
      label: 'Direct Statement',
      sourceNote: 'Forward-looking roadmap outlined by Jakub',
    },
    tags: ['Future Expeditions', 'Writing', 'Academics', 'Alpinism'],
    accentQuote: 'The peak is not the end of the journey — it is where the next horizon begins.',
    photoCreditId: 'hero_montblanc',
  },
];

export const FUTURE_MILESTONES = [
  {
    category: 'High-Altitude Alpinism',
    title: 'Technical 4,000m Alpine Traverses',
    target: '2026–2027',
    description: 'Planning ski-mountaineering and climbing ascents across the Swiss Pennine Alps and Bernese Oberland.',
    tag: 'Alpine Ascent',
  },
  {
    category: 'Endurance & Athletics',
    title: 'Track Sprints & Skyrunning Traverses',
    target: '2026–2027',
    description: 'Continuing 200m sprint training and competing in skyrunning and alpine trail races across Central Europe.',
    tag: 'Athletics & Trail',
  },
  {
    category: 'Expedition Writing',
    title: 'Documentary Photo Essays & Alpine Journals',
    target: 'Ongoing',
    description: 'Publishing deep-dive accounts on youth mountain autonomy, avalanche safety, and route planning.',
    tag: 'Journalism',
  },
  {
    category: 'Academic & International',
    title: 'International Studies & Leadership',
    target: '2027+',
    description: 'Pursuing university education combining international relations, geography, and environmental stewardship.',
    tag: 'Education',
  },
];

export const FACTS_REQUIRING_CONFIRMATION = [
  {
    id: 'athletics_year_format',
    item: 'Official Slovak Athletics Championship Details',
    currentStatus: 'Placeholder: 200m discipline / relay with AO TJ Slávia STU Bratislava',
    neededAction: 'Jakub to confirm official competition name, year, age category, relay leg, and medal placement from SAZ result records.',
    link: 'https://statistika.atletika.sk/',
  },
  {
    id: 'tmb_gps_track',
    item: 'Exact 2026 Tour du Mont Blanc GPS Track (GPX)',
    currentStatus: 'Illustrated using open Wikimedia TMB route map',
    neededAction: 'Jakub to provide the exported GPX/FIT file from his sports watch for exact route rendering.',
    link: 'https://www.montourdumontblanc.com/en/',
  },
  {
    id: 'original_photos',
    item: 'Personal Expedition Photographs',
    currentStatus: 'Currently displaying curated high-resolution photography with full illustrative attribution',
    neededAction: 'Replace illustrative photos with Jakub and Ondrej’s original personal photos from Mont Blanc and TMB.',
    link: '#photo-credits',
  },
];
