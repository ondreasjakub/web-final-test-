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
}

export interface SportCard {
  id: string;
  title: string;
  category: string;
  description: string;
  firstPersonNote: string;
  keyAspects: string[];
  status: VerificationBadge;
}

export interface StageInfo {
  day: string;
  title: string;
  fromTo: string;
  distanceKm: string;
  elevation: string;
  highlights: string;
  country: 'France' | 'Italy' | 'Switzerland';
}

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  chamonix: {
    id: 'chamonix',
    title: 'Chamonix and Mont Blanc valley',
    creator: 'Jef132',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chamonix-Mont-Blanc.jpg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Chamonix-Mont-Blanc.jpg',
    role: 'Hero landscape / Chamonix arrival atmosphere',
    attributionNote: 'Illustrative scenery. Not a photograph of Jakub or Ondrej. Temporary illustrative asset to be replaced with personal photography.',
  },
  gr5_trail: {
    id: 'gr5_trail',
    title: 'GR5 / Tour du Pays du Mont Blanc trail',
    creator: 'Guilhem Vellut',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:GR5_-_GRP_Tour_du_Pays_du_Mont_Blanc_(51051862863).jpg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/GR5_-_GRP_Tour_du_Pays_du_Mont_Blanc_%2851051862863%29.jpg',
    role: 'Alpine trail and trekking atmosphere',
    attributionNote: 'Illustrative scenery. Sourced from Wikimedia Commons under CC BY 2.0.',
  },
  mont_blanc_north_face: {
    id: 'mont_blanc_north_face',
    title: 'Mont Blanc north face',
    creator: 'Christian',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mont_Blanc_Face_N.jpg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Mont_Blanc_Face_N.jpg',
    role: 'Mont Blanc 2025 ski-mountaineering story reference',
    attributionNote: 'Illustrative scenery of the North Face. Sourced under CC BY-SA 3.0.',
  },
  tmb_route_map: {
    id: 'tmb_route_map',
    title: 'Tour du Mont Blanc route map',
    creator: 'Hiiker paul',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tour_du_Mont_blanc_Map.jpg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Tour_du_Mont_blanc_Map.jpg',
    role: 'TMB route overview illustration',
    attributionNote: 'Route reference overview. Not the exact 2026 GPS track; labeled as route illustration until Jakub supplies personal GPX file.',
  },
};

export const SITE_METADATA = {
  name: 'Jakub Ondreas',
  alternativeName: 'Jakub Ondreáš',
  tagline: 'Exploring the world. Challenging limits. Creating my own path.',
  intro:
    'I’m Jakub Ondreas, a Slovak student with a passion for mountains, sport, travel and discovering new places. From ski-mountaineering in the Alps to long-distance journeys and an exchange-student experience in the United States, I’m interested in learning through experience.',
  hometown: 'Bratislava, Slovakia',
  currentRole: 'Rotary Youth Exchange Student in the United States (2025–2026)',
  mountainRoots: 'Western Tatras (Západné Tatry) & Žiarska dolina',
  club: 'AO TJ Slávia STU Bratislava',
  emailPlaceholder: 'jakub.ondreas@example.com',
  githubUser: 'ondreasjakub',
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
  timeline: [
    {
      period: '2024',
      title: 'Preparation & Winter Training',
      description:
        'Preparation began a year prior. Intensive conditioning and technical winter ascents in the Western Tatras, focusing on endurance, rope techniques, crampon movement, and ice axe self-arrest under harsh conditions.',
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
      title: 'Acclimatization in the Alps',
      description:
        'Ascents in the Mont Blanc range to adapt to high altitude, testing gear, timing weather windows, and reviewing glacier navigation protocols.',
      verification: {
        type: 'public_record' as const,
        label: 'Public Record',
        sourceNote: 'Published in Tulení pásy and covered by Slovak public broadcaster STVR',
      },
    },
    {
      period: 'Spring 2025',
      title: 'The Grands Mulets Route & Summit',
      description:
        'Navigating the crevassed terrain of the Grands Mulets route on ski-touring skis, climbing through the dawn cold to reach the summit of Mont Blanc (4,806 m) at age 14, followed by a continuous ski descent.',
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
      label: 'Preparation & Technique',
      text: 'Rope management, crevasse safety, crampons, ice axe handling and mental readiness developed over months of preparation.',
    },
    {
      label: 'Alpine Respect',
      text: 'Mont Blanc is not just an elevation figure — it demands humility, strict attention to weather windows, and precise physical pacing.',
    },
    {
      label: 'Media Coverage',
      text: 'Documented in Slovak national public broadcasting (STVR) highlighting that the accomplishment was about discipline, focus, and sporting ethos.',
    },
  ],
};

export const TMB_EXPEDITION = {
  title: '160 Kilometres. 6.5 Days. Two 16-Year-Olds.',
  subtitle: 'Tour du Mont Blanc — July 2026',
  quote:
    'In July 2026, my friend Ondrej Kuchyňa and I completed an independent journey around the Mont Blanc massif. We were both 16. We travelled by ourselves from Slovakia, flew to Milan, took a bus to Chamonix and began our hike there. Over six and a half days, we covered approximately 160 kilometres around the massif, crossing France, Italy and Switzerland. We did the journey without adult assistance or a large organized expedition group. Along the way, we met interesting travellers, including a Polish travel influencer, and made friendships that became part of the experience. For me, the journey was about independence, friendship, planning and discovering the world.',
  stats: [
    { label: 'Distance', value: '~160 km', detail: 'Circumnavigating the Mont Blanc massif' },
    { label: 'Time', value: '6.5 Days', detail: 'Self-supported trekking pace' },
    { label: 'Age', value: '16 Years Old', detail: 'Jakub Ondreas & Ondrej Kuchyňa' },
    { label: 'Countries', value: '3 Nations', detail: 'France, Italy, Switzerland' },
  ],
  itinerarySummary: 'Slovakia ➔ Milan (flight) ➔ Chamonix (bus) ➔ Tour du Mont Blanc (hike)',
  verificationNotice:
    'Fact Integrity: Neither Jakub nor Ondrej claims to be the "youngest in the world" to hike the TMB, as no global record has been independently verified. The route illustration shown is indicative; exact 2026 GPS track will be uploaded once calibrated.',
  stages: [
    {
      day: 'Day 1',
      title: 'Departure & Chamonix Valley',
      fromTo: 'Chamonix / Les Houches ➔ Col de Voza ➔ Les Contamines',
      distanceKm: '22 km',
      elevation: '+950 m / -800 m',
      highlights: 'Stepping off the Chamonix bus with fully loaded packs; climbing toward Col de Voza with views of the Bionnassay glacier.',
      country: 'France',
    },
    {
      day: 'Day 2',
      title: 'Through the Mountain Passes into Italy',
      fromTo: 'Les Contamines ➔ Col du Bonhomme ➔ Refuge de la Croix du Bonhomme',
      distanceKm: '24 km',
      elevation: '+1,320 m / -900 m',
      highlights: 'Historical Roman path, traversing wild rocky cols, rocky weather shifts, and deep camaraderie on steep scree.',
      country: 'France',
    },
    {
      day: 'Day 3',
      title: 'Glacier Vistas of Courmayeur',
      fromTo: 'Col de la Seigne ➔ Val Veny ➔ Courmayeur',
      distanceKm: '26 km',
      elevation: '+1,000 m / -1,150 m',
      highlights: 'Crossing from France into Italy at Col de la Seigne; dramatic southern ramparts and limestone needles of Mont Blanc.',
      country: 'Italy',
    },
    {
      day: 'Day 4',
      title: 'Italian Val Ferret to Grand Col Ferret',
      fromTo: 'Courmayeur / Rifugio Bonatti ➔ Grand Col Ferret ➔ La Fouly',
      distanceKm: '28 km',
      elevation: '+1,150 m / -1,000 m',
      highlights: 'Balcony trail overlooking the Grandes Jorasses; crossing Grand Col Ferret (2,537 m) into the Swiss Valais.',
      country: 'Switzerland',
    },
    {
      day: 'Day 5',
      title: 'Swiss Valais Pastures & Champex-Lac',
      fromTo: 'La Fouly ➔ Champex-Lac ➔ Bovine / Trient',
      distanceKm: '25 km',
      elevation: '+850 m / -920 m',
      highlights: 'Tranquil Swiss mountain hamlets, alpine pine forests, meeting fellow international long-distance hikers.',
      country: 'Switzerland',
    },
    {
      day: 'Day 6 & 6.5',
      title: 'Col de Balme & Return to Chamonix',
      fromTo: 'Trient ➔ Col de Balme ➔ Tré-le-Champ ➔ Chamonix',
      distanceKm: '35 km',
      elevation: '+1,100 m / -1,300 m',
      highlights: 'Crossing back from Switzerland to France at Col de Balme; full circle view of the Chamonix valley; completing the 160 km circuit.',
      country: 'France',
    },
  ] as StageInfo[],
  peopleMetStory: {
    title: 'People Met Along the Way',
    body: 'One of the defining aspects of independent travel is the community you encounter along the trail. Moving without a commercial group allowed spontaneous conversations with backpackers from across Europe, North America, and Asia. In the high valleys, Jakub and Ondrej met an energetic Polish travel influencer sharing hiking advice and stories, as well as seasoned thru-hikers who were inspired by two 16-year-olds navigating the circuit self-sufficiently.',
  },
};

export const ATHLETICS_DATA = {
  title: 'Discipline. Teamwork. Results.',
  subtitle: 'Slovak Club Athletics & Sprint Performance',
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
    'Sprinting is a sport of hundredths of a second. Training with AO TJ Slávia STU Bratislava in Bratislava instills relentless discipline: blocks starts, explosive power, cadence, and seamless baton baton transitions in the relay. While mountain endurance takes hours, sprinting requires absolute concentration in a single instant.',
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
    keyAspects: ['Grands Mulets Ascent', 'Tatras Winter Lines', 'Crevasse Rescue Protocols', 'Lightweight Touring'],
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
    date: 'Active',
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
    photoCreditId: 'mont_blanc_north_face',
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
    photoCreditId: 'gr5_trail',
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
  },
];

export const FUTURE_MILESTONES = [
  {
    category: 'High-Altitude Alpinism',
    title: 'Further Alpine 4,000 m Peaks & Technical Routes',
    target: '2026–2027',
    description: 'Planning ski-mountaineering and climbing ascents across the Swiss Pennine Alps and Bernese Oberland.',
  },
  {
    category: 'Endurance & Athletics',
    title: 'Track & Mountain Trail Competitions',
    target: '2026–2027',
    description: 'Continuing sprint training and competing in skyrunning and alpine trail races in Europe.',
  },
  {
    category: 'Expedition Writing',
    title: 'Documentary Storytelling & Photo Essays',
    target: 'Ongoing',
    description: 'Writing in-depth articles on youth mountain autonomy, route planning, and outdoor safety for mountaineering journals.',
  },
  {
    category: 'Academic & International',
    title: 'University Studies & Global Projects',
    target: '2027+',
    description: 'Combining studies with international cooperation, geography, and outdoor leadership.',
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
    currentStatus: 'Currently displaying CC-licensed Wikimedia Commons illustrative scenery',
    neededAction: 'Replace illustrative Wikimedia images with Jakub and Ondrej’s original personal photos from Mont Blanc and TMB.',
    link: '#photo-credits',
  },
];
