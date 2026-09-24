export type SummaryCardData = {
  icon: "coding" | "book";
  text: string;
  href: string;
  linkLabel?: string;
};

export const summaryCards: SummaryCardData[] = [
  {
    icon: "coding",
    href: "/technical",
    text: "I worked for many years in full-stack software development, building solutions for desktop, web, and mobile applications from early-stage startups to large enterprise systems, always focused on writing clean, maintainable, and scalable code.",
  },
  {
    icon: "book",
    href: "/writer",
    text: "In 2019, I decided to start a very different project by my own, and since then I have been developing a grand fantasy universe that bore its first fruit in 2026 with the launch of my first book, thus officially launching my career as a writer.",
  },
];