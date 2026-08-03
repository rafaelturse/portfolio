export type Area = { label: string; description: string; href: string };
export type Job = { role: string; company: string; range: string; description: string };
export type Contact = { label: string; href: string };
export type Degree = { credential: string; school: string; location: string };
export type QuickLink = { label: string; description: string; href: string; external: boolean };
export type StackGroup = { category: string; items: string[] };

export const profile = {
  name: "Rafael Turse",
  role: "Systems Developer",
  location: "Toronto, Canada",
  coordinates: "43.65 N / 79.38 W",
};

export const areas: Area[] = [
  {
    label: "Writer",
    description: "A bit of my journey as a writer, and where to find my books",
    href: "#",
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
    description: "Let's talk about something",
    href: "/contacts",
  },
];

export const bioIntro = "Brazilian, Canadian - based in Toronto, Canada";

export const bio =
  "Self-taught, software engineer and among many other things, also a musician, draftsman, illustrator, and writer.";

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

export const professionalLinks: QuickLink[] = [
  {
    label: "Professional Inquiries",
    description: "Sent directly to my inbox",
    href: "mailto:hello@rafaelturse.com?subject=Resume request",
    external: false,
  },
  {
    label: "Access My Code",
    description: "View and run my projects on GitHub",
    href: "https://github.com/rafaelturse",
    external: true,
  },
];

export const contacts: Contact[] = [
  { label: "GitHub", href: "https://github.com/rafaelturse" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaelturse/?locale=en_US" },
  { label: "Behance", href: "https://www.behance.net/rafaelturse/" },
  { label: "X", href: "https://www.x.com/rafaelturse/" },
  { label: "Instagram", href: "https://www.instagram.com/rafaelturse.info/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC3FNVtx2TPGwhKsvkyI0cJw/videos" },
];

export const stack: StackGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin"] },
  { category: "Backend", items: ["Node", "Express", "Spring Boot", "PassportJS", "JWT", "Swagger"] },
  { category: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind", "Bootstrap", "REST API", "JSON"] },
  { category: "Mobile", items: ["iOS / Swift", "Android", "React Native"] },
  { category: "Database", items: ["MySQL", "SQL Server", "ERM", "Data Mart"] },
  {
    category: "DevOps",
    items: ["Docker", "Git", "Postman", "Jira", "Jest", "Winston", "Loki", "Prometheus", "Grafana", "VS Code"],
  },
  { category: "Business", items: ["ERP", "CRM", "WEB Application", "Mobile Application", "Office Solutions", "VBA"] },
];