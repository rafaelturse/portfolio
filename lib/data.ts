export type Contact = { label: string; href: string };
export type Area = { label: string; description: string; href: string };

export const profile = {
  name: "Rafael Turse",
  role: "Systems Developer",
  location: "Toronto, Canada",
  coordinates: "43.65 N / 79.38 W",
};

export const contacts: Contact[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaelturse/?locale=en_US" },
  { label: "GitHub", href: "https://github.com/rafaelturse" },
  { label: "Instagram", href: "https://www.instagram.com/rafaelturse.pro/" },
  { label: "Behance", href: "https://www.behance.net/rafaelturse/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC3FNVtx2TPGwhKsvkyI0cJw/videos" },
];

export const areas: Area[] = [
  {
    label: "Writer",
    description: "A bit of my journey as a writer, and where to find my books",
    href: "/writer",
  },
  {
    label: "Professional",
    description: "My professional path, with a way to request my resumé",
    href: "/professional",
  },
  {
    label: "Technical",
    description: "Technical skills and the tools I work with",
    href: "/technical",
  },
  {
    label: "Gallery",
    description: "Some memories and places catch in pictures",
    href: "/technical",
  },
  {
    label: "Contacts",
    description: "Ways to reach me",
    href: "/contacts",
  },
];