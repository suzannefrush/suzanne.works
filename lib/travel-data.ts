export interface Item {
  id: string;
  name: string;
  note: string;
  photoUrl: string;
  mapsUrl: string;
}

export type ResourceKind = "map" | "doc" | "playlist" | "link";

export interface Resource {
  id: string;
  name: string;
  note: string;
  kind: ResourceKind;
  url: string;
  photoUrl?: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  tags: string[];
  yearVisited: string;
  coverPhoto: string;
  intro: string;
  resources: Resource[];
  highlights: Item[];
  recommendations: Item[];
  tips: Item[];
}

export const trips: Trip[] = [
  {
    id: "japan-2023",
    slug: "japan-2023",
    title: "Japan 2023",
    subtitle: "Two weeks in Tokyo",
    tags: ["Japan"],
    yearVisited: "2023",
    coverPhoto: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    intro:
      "Two weeks of sensory overload in the best way possible. Japan taught me that a country can be simultaneously chaotic and deeply serene.",
    resources: [],
    highlights: [
      {
        id: "japan-h1",
        name: "TeamLab Borderless",
        note: "Yes, it's touristy. Yes, it's worth it. Go on a weekday afternoon and let yourself get lost in the digital waterfalls for a couple hours.",
        photoUrl: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=TeamLab+Borderless+Tokyo",
      },
      {
        id: "japan-h2",
        name: "Golden Gai",
        note: "Tiny bars, big conversations. Each bar seats maybe 6 people. Pick one that looks interesting and stay for two drinks.",
        photoUrl: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Golden+Gai+Shinjuku+Tokyo",
      },
    ],
    recommendations: [
      {
        id: "japan-r1",
        name: "Tsukiji Outer Market",
        note: "Go early, eat everything. The tamago (egg) sandwich from the tiny stall on the corner changed me. Skip the tourist sushi spots and follow the locals.",
        photoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Tsukiji+Outer+Market+Tokyo",
      },
      {
        id: "japan-r2",
        name: "Shimokitazawa",
        note: "The best neighborhood for vintage shopping and people-watching. Grab a coffee at Bear Pond Espresso and just wander.",
        photoUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Shimokitazawa+Tokyo",
      },
    ],
    tips: [
      {
        id: "japan-t1",
        name: "Get a Suica Card",
        note: "Buy one at the airport. It works on all trains, buses, and even vending machines. Saves you from fumbling with cash constantly.",
        photoUrl: "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?w=600&q=80",
        mapsUrl: "",
      },
      {
        id: "japan-t2",
        name: "Learn Basic Phrases",
        note: "Even a simple 'sumimasen' (excuse me) goes a long way. People are incredibly kind when you try — Google Translate's camera mode is a lifesaver for menus.",
        photoUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80",
        mapsUrl: "",
      },
    ],
  },
  {
    id: "portugal-2022",
    slug: "portugal-2022",
    title: "Portugal 2022",
    subtitle: "Lisbon long weekend",
    tags: ["Portugal"],
    yearVisited: "2022",
    coverPhoto: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80",
    intro:
      "Lisbon feels like a city that's been waiting for you. The light, the pastéis, the fado — everything moves at exactly the right pace.",
    resources: [],
    highlights: [
      {
        id: "portugal-h1",
        name: "Alfama District",
        note: "Get lost in the narrow streets. Seriously — put your phone away and just walk uphill until you find a miradouro with a view that makes you forget your own name.",
        photoUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Alfama+Lisbon",
      },
    ],
    recommendations: [
      {
        id: "portugal-r1",
        name: "Manteigaria",
        note: "The best pastéis de nata in the city, and I will die on this hill. Watch them make them through the window, then eat two standing at the counter.",
        photoUrl: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Manteigaria+Lisbon",
      },
      {
        id: "portugal-r2",
        name: "Time Out Market",
        note: "It's a food hall, but a genuinely great one. The seafood rice at Marlene Vieira's stall is unreal. Go for a late lunch to avoid the crowds.",
        photoUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Time+Out+Market+Lisbon",
      },
    ],
    tips: [
      {
        id: "portugal-t1",
        name: "Wear Good Shoes",
        note: "The hills are no joke. Cobblestones + steep inclines = leave the cute sandals at the hotel. Your ankles will thank you.",
        photoUrl: "https://images.unsplash.com/photo-1513735539099-cf722ddd4da3?w=600&q=80",
        mapsUrl: "",
      },
    ],
  },
  {
    id: "mexico-2024",
    slug: "mexico-2024",
    title: "Mexico 2024",
    subtitle: "CDMX neighborhoods deep-dive",
    tags: ["Mexico"],
    yearVisited: "2024",
    coverPhoto: "https://images.unsplash.com/photo-1518659526054-190340b32735?w=1200&q=80",
    intro:
      "CDMX is a city that rewards curiosity. Every neighborhood has its own rhythm — Roma for brunch, Coyoacán for wandering, Centro for awe.",
    resources: [],
    highlights: [
      {
        id: "mexico-h1",
        name: "Museo Nacional de Antropología",
        note: "Give yourself at least 3 hours. The Aztec sun stone alone is worth the trip. Sunday is free for Mexican nationals, so it's busier — go on a weekday.",
        photoUrl: "https://images.unsplash.com/photo-1513735539099-cf722ddd4da3?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Museo+Nacional+de+Antropologia+Mexico+City",
      },
    ],
    recommendations: [
      {
        id: "mexico-r1",
        name: "Contramar",
        note: "The tuna tostadas are legendary for a reason. Get there right when they open or prepare to wait. Worth every minute.",
        photoUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Contramar+Mexico+City",
      },
      {
        id: "mexico-r2",
        name: "Mercado Roma",
        note: "A more curated market experience — great for mezcal tastings and trying different moles. The rooftop bar is a nice bonus.",
        photoUrl: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
        mapsUrl: "https://maps.google.com/?q=Mercado+Roma+Mexico+City",
      },
    ],
    tips: [
      {
        id: "mexico-t1",
        name: "Use Uber, Not Street Taxis",
        note: "It's safer, cheaper, and you won't have to negotiate. The metro is also fantastic for getting across the city during non-rush hours.",
        photoUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
        mapsUrl: "",
      },
    ],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  trips.forEach((t) => t.tags.forEach((tag) => set.add(tag)));
  return Array.from(set).sort();
}
