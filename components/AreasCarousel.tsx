"use client";

import Link from "next/link";
import { useState } from "react";
import type { Area } from "@/lib/data";
import { FeatherIcon, BriefcaseIcon, CodeCircleIcon, MailIcon, HeartIcon, type IconProps } from "@/lib/icons";
import type { ReactElement } from "react";

const AREA_ICONS: Record<string, (props: IconProps) => ReactElement> = {
  Writer: FeatherIcon,
  Professional: BriefcaseIcon,
  Technical: CodeCircleIcon,
  Contact: MailIcon,
  Support: HeartIcon,
};

const AREA_TEXT: Record<string, string> = {
  Writer:
    "A grand fantasy universe, years in the making — The Dominator of Souls. Chapters, characters, and the first book now out in the world.",
  Professional:
    "A career built across startups and enterprise systems alike — architecture, engineering, and the steady craft of shipping software that lasts.",
  Technical:
    "The languages, frameworks, and methodologies behind the work — from backend and database to frontend, mobile, and DevOps.",
  Contact:
    "A direct line, no gatekeeping. Questions, collaborations, or just a hello — every message reaches me personally.",
  Support:
    "Writing, code, illustration, music — none of it happens in a vacuum. A small way to fuel whatever comes next.",
};

export default function AreasShowcase({ areas }: { areas: Area[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = areas[activeIndex];
  const ActiveIcon = AREA_ICONS[active.label];
  const activeText = AREA_TEXT[active.label] ?? active.description;

  return (
    <div>
      <div className="grid grid-cols-5 gap-x-2">
        {areas.map((area, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={area.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col items-center gap-3 pb-3 font-body text-xs uppercase tracking-[0.15em] transition-colors sm:tracking-[0.2em] ${
                isActive ? "text-gold-soft" : "text-muted hover:text-gold-soft"
              }`}
            >
              <span className="text-center leading-tight">{area.label}</span>
              <span className={`h-px w-full transition-colors ${isActive ? "bg-gold-soft" : "bg-line"}`} />
            </button>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <Link href={active.href} className="group w-full max-w-2xl">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-card p-12 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-16">
            {ActiveIcon && (
              <span className="text-gold-soft transition-colors duration-300 ease-out group-hover:text-red-soft">
                <ActiveIcon size={48} />
              </span>
            )}
            <p className="font-display text-3xl uppercase tracking-[0.2em] text-ink transition-colors duration-300 ease-out group-hover:text-gold-soft">
              {active.label}
            </p>
            <p className="max-w-md font-body text-base leading-relaxed text-muted">
              {activeText}
            </p>
            <span className="font-display text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold-soft">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}