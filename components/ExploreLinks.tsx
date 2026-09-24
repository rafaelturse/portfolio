"use client";

import Link from "next/link";
import { BookIcon, BriefcaseIcon, CodeCircleIcon, MailIcon, HeartIcon, GridIcon, type IconProps } from "@/lib/icons";
import type { ReactElement } from "react";

export type ExploreLinkId = "writer" | "professional" | "technical" | "contact" | "support";

type LinkInfo = {
  icon: (props: IconProps) => ReactElement;
  label: string;
  description: string;
  href: string;
};

const ALL_LINKS: Record<ExploreLinkId, LinkInfo> = {
  writer: {
    icon: BookIcon,
    label: "Writer",
    description: "Information and more about my books",
    href: "/writer",
  },
  professional: {
    icon: BriefcaseIcon,
    label: "Professional",
    description: "My professional path in this journey",
    href: "/professional",
  },
  technical: {
    icon: CodeCircleIcon,
    label: "Technical",
    description: "Skills and the tools I work with",
    href: "/technical",
  },
  contact: {
    icon: MailIcon,
    label: "Contact",
    description: "Let's talk about something interesting",
    href: "/contact",
  },
  support: {
    icon: HeartIcon,
    label: "Support",
    description: "If you'd like to support my work",
    href: "/support",
  },
};

export default function ExploreLinks({ ids = [] }: { ids: ExploreLinkId[] }) {
  if (ids.length === 0) return null;

  const gridCols = ids.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3";

  return (
    <div className="mt-20">
      <div className="flex items-center gap-2">
        <span className="text-gold-soft">
          <GridIcon />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">See More</h1>
      </div>

      <div className={`mt-6 grid grid-cols-1 gap-6 ${gridCols}`}>
        {ids.map((id) => {
          const item = ALL_LINKS[id];
          const Icon = item.icon;
          return (
            <Link key={id} href={item.href}>
              <div className="group flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-3xl border border-line p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-soft" style={{ backgroundColor: "#111" }}>
                <span className="text-gold-soft transition-colors duration-300 ease-out">
                  <Icon size={32} />
                </span>
                <p className="font-display text-base uppercase tracking-[0.2em] text-ink">
                  {item.label}
                </p>
                <p className="font-body text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}