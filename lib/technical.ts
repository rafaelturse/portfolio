export type StackGroup = { category: string; items: string[] };

export const stack: StackGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin"] },
  { category: "Backend", items: ["Node", "Express", "Spring Boot", "PassportJS", "JWT", "Swagger"] },
  { category: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind", "Bootstrap", "REST API", "JSON"] },
  { category: "Mobile", items: ["iOS / Swift", "Android", "React Native"] },
  { category: "Database", items: ["MySQL", "SQL Server", "MongoDB", "ERM", "Data Mart"] },
  {
    category: "DevOps",
    items: ["Docker", "Git", "Postman", "Jest", "VS Code"],
  },
  {
    category: "Project",
    items: ["Scrum", "Jira", "Asana"],
  },
  { category: "Business", items: ["ERP", "CRM", "CMS", "WEB app", "Mobile app", "Office", "VBA"] },
];

export const methodologies: string[] = [
  "Applying proven design patterns to streamline and standardize development.",
  "Layered (MVC) architecture, separating concerns cleanly across the codebase.",
  "Centralized, layer-aware error handling that makes failure origins clear.",
  "Data encrypted in transit, with strict API-level input validation.",
  "Protection against SQL injection and other common attack vectors.",
  "Containerized, scalable microservices architecture.",
  "Balanced use of ORMs and native queries, with DTOs for clean data transfer.",
  "Cron-based scheduling for recurring, cyclical tasks.",
  "Integration with management and versioning tools — Jira, Asana, Git, SVN, and others.",
  "Fullstack range across frontend, UI/UX, backend, database, DevOps for WEB, mobile and desktop.",
  "Home office with powerful equipment to meet any type of software development demand.",
  "Knowledge and experience with various types of systems, such as ERP, CRM, and CMS.",
];