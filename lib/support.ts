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