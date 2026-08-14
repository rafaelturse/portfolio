/* ############ */
/* ### HOME ### */
/* ############ */

export type Area = { label: string; description: string; href: string };

export const profile = {
  name: "Rafael Turse",
  role: "Systems Developer",
  location: "Toronto, Canada",
  coordinates: "43.65 N / 79.38 W",
};

export const areas: Area[] = [
  {
    label: "Writer",
    description: "Information and more about my books",
    href: "/writer",
  },
  {
    label: "Professional",
    description: "My professional path in this journey",
    href: "/professional",
  },
  {
    label: "Technical",
    description: "Technical skills and the tools I work with",
    href: "/technical",
  },
  {
    label: "Contact",
    description: "Let's talk about something interesting",
    href: "/contact",
  },
  {
    label: "Support",
    description: "If you'd like to support my work",
    href: "/support",
  },
];

/* ############## */
/* ### WRITER ### */
/* ############## */

export type BookStatus = "published" | "upcoming";
export type Store = { label: string; href: string };

export type Book = {
  title: string;
  series: string;
  status: BookStatus;
  release: string;
  synopsis: string;
  cover?: string;
  stores?: Store[];
};

export const books: Book[] = [
  {
    title: "The Berdox Memories — Volume 1 - Fragmented",
    series: "The dominator of Souls",
    status: "published",
    release: "Sep-2026",
    synopsis:
      "The opening volume of an epic fantasy series — a world that will soon open up to the unknown.",
    cover: "/books/the-memories-of-berdox-vol1-fragmented-cover-en.jpg",
    stores: [
      { label: "US", href: "https://www.amazon.com" },
      { label: "BR", href: "https://www.amazon.com.br" },
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

/* ################ */
/* ### PERSONAL ### */
/* ################ */

export type Degree = { credential: string; school: string; location: string };

export const bioIntro = "Brazilian, Canadian - based in Toronto, Canada";

export const bio =
  "Self-taught, software engineer and among many other things, also a musician, draftsman, illustrator, and writer.";

export const writerBio =
  `Rafael Turse is an independent writer seeking recognition in the world of writing. In 2026, he officially launches his first epic fantasy book, "The Berdox Memories – Volume 1 - Fragmented", part of his promising series, also of his own authorship, "The Dominator of Souls", the first of many more to come!`

export const education: Degree[] = [
  {
    credential: "Bachelor in Information Systems",
    school: "São Judas Tadeu University",
    location: "São Paulo, Brazil",
  },
  {
    credential: "Postgraduate in Mobile Application Development",
    school: "George Brown College",
    location: "Toronto, Canada",
  },
];

/* ############## */
/* ### FOOTER ### */
/* ############## */

export type Contact = { label: string; href: string };

export const contacts: Contact[] = [
  { label: "GitHub", href: "https://github.com/rafaelturse" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaelturse/?locale=en_US" },
  { label: "Behance", href: "https://www.behance.net/rafaelturse/" },
  { label: "X", href: "https://www.x.com/rafaelturse/" },
  { label: "Instagram", href: "https://www.instagram.com/rafaelturse.info/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC3FNVtx2TPGwhKsvkyI0cJw/videos" },
];

/* ################# */
/* ### TECHNICAL ### */
/* ################# */

export type StackGroup = { category: string; items: string[] };

export const stack: StackGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin"] },
  { category: "Backend", items: ["Node", "Express", "Spring Boot", "PassportJS", "JWT", "Swagger"] },
  { category: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind", "Bootstrap", "REST API", "JSON"] },
  { category: "Mobile", items: ["iOS / Swift", "Android", "React Native"] },
  { category: "Database", items: ["MySQL", "SQL Server", "MongoDB", "ERM", "Data Mart"] },
  {
    category: "DevOps",
    items: ["Docker", "Git", "Postman", "Scrum", "Jira", "Jest", "Winston", "Loki", "Prometheus", "Grafana", "VS Code"],
  },
  {
    category: "Project",
    items: ["Scrum", "Jira"],
  },
  { category: "Business", items: ["ERP", "CRM", "WEB Application", "Mobile Application", "Office Solutions", "VBA"] },
];

/* ################# */
/* ### SUPPORT ##### */
/* ################# */

export type SupportLink = { label: string; description: string; href: string; external: boolean };

export const supportLinks: SupportLink[] = [
  {
    label: "Buy Me a Coffee",
    description: "A small one-time gesture, always appreciated",
    href: "https://buymeacoffee.com/rafaelturse",
    external: true,
  },
  {
    label: "PayPal",
    description: "Direct support, any amount welcome",
    href: "#",
    external: false,
  },
];