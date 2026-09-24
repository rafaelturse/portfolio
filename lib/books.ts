export type BookStatus = "published" | "upcoming";
export type Store = { label: string; href: string };

export type Book = {
  title: string;
  series: string;
  status: BookStatus;
  release: string;
  synopsis: string;
  fullSynopsisHeading?: string;
  fullSynopsis?: string[];
  cover?: string;
  stores?: Store[];
  detailUrl?: string;
};

export const books: Book[] = [
  {
    title: "The Berdox Memories — Volume 1 — Fragmented",
    series: "The dominator of Souls",
    status: "published",
    release: "Sep-2026",
    synopsis:
      "The opening volume of an epic fantasy series — a world that will soon open up to the unknown.",
    fullSynopsisHeading: "A stormy night that changed everything...",
    fullSynopsis: [
      "In an isolated mansion on the English coast, a boy witnesses the worst nightmare a child can live through — and survives only to carry, forever, the mark of a promise whispered by something that should not exist. A light that burns his eyes, a voice he will never forget, and a single purpose that now defines every beat of his heart: vengeance!",
      "The world around him, however, is not ready to believe the truth he saw... Alone, wounded, and surrounded by those who should protect him, Alfred Mainfield will discover that surviving the tragedy was only the first step of a far more dangerous journey.",
    ],
    cover: "/img/books/the-memories-of-berdox-vol1-fragmented-cover-en.jpg",
    detailUrl: "https://thedominatorofsouls.com/books/fragmentados#book-details",
    stores: [
      { label: "Brazil", href: "https://www.amazon.com.br/dp/B0HHFJ496J" },
      { label: "United States", href: "https://www.amazon.com/dp/B0HHFJ496J" },
      { label: "Canada", href: "https://www.amazon.ca/dp/B0HHFJ496J" },
      { label: "Mexico", href: "https://www.amazon.com.mx/dp/B0HHFJ496J" },
      { label: "Germany", href: "https://www.amazon.de/dp/B0HHFJ496J" },
      { label: "Spain", href: "https://www.amazon.es/dp/B0HHFJ496J" },
      { label: "France", href: "https://www.amazon.fr/dp/B0HHFJ496J" },
      { label: "Italy", href: "https://www.amazon.it/dp/B0HHFJ496J" },
      { label: "United Kingdom", href: "https://www.amazon.co.uk/dp/B0HHFJ496J" },
      { label: "Netherlands", href: "https://www.amazon.nl/dp/B0HHFJ496J" },
      { label: "Poland", href: "https://www.amazon.pl/dp/B0HHFJ496J" },
      { label: "Sweden", href: "https://www.amazon.se/dp/B0HHFJ496J" },
      { label: "Belgium", href: "https://www.amazon.com.be/dp/B0HHFJ496J" },
      { label: "Turkey", href: "https://www.amazon.com.tr/dp/B0HHFJ496J" },
      { label: "Japan", href: "https://www.amazon.co.jp/dp/B0HHFJ496J" },
      { label: "India", href: "https://www.amazon.in/dp/B0HHFJ496J" },
      { label: "Australia", href: "https://www.amazon.com.au/dp/B0HHFJ496J" },
      { label: "Singapore", href: "https://www.amazon.sg/dp/B0HHFJ496J" },
      { label: "United Arab Emirates", href: "https://www.amazon.ae/dp/B0HHFJ496J" },
      { label: "Saudi Arabia", href: "https://www.amazon.sa/dp/B0HHFJ496J" },
      { label: "Egypt", href: "https://www.amazon.eg/dp/B0HHFJ496J" },
    ],
  },
  {
    title: "The Berdox Memories — Volume 2",
    series: "The dominator of Souls",
    status: "upcoming",
    release: "Dec-2026",
    synopsis: "Details will be announced closer to release.",
  },
  {
    title: "The Berdox Memories — Volume 3",
    series: "The dominator of Souls",
    status: "upcoming",
    release: "TBA",
    synopsis: "Details will be announced closer to release.",
  },
  {
    title: "The Berdox Memories — Volume 4",
    series: "The dominator of Souls",
    status: "upcoming",
    release: "TBA",
    synopsis: "Details will be announced closer to release.",
  },
];