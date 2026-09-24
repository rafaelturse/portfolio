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