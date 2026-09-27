"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [areas.length]);

  function scrollByAmount(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div>
      <div className="relative flex items-center gap-2 sm:block">
        <div className="flex w-6 shrink-0 justify-center sm:hidden">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollByAmount(-140)}
              className="flex h-6 w-6 items-center justify-center text-gold-soft transition-colors hover:text-red-soft"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
          )}
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex min-w-0 flex-1 gap-6 overflow-x-auto sm:grid sm:grid-cols-5 sm:gap-x-2 sm:overflow-visible"
        >
          {areas.map((area, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={area.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`flex shrink-0 flex-col items-center gap-3 whitespace-nowrap pb-3 font-body text-xs uppercase tracking-[0.15em] transition-colors sm:shrink sm:whitespace-normal sm:tracking-[0.2em] ${
                  isActive ? "text-gold-soft" : "text-muted hover:text-gold-soft"
                }`}
              >
                <span className="text-center leading-tight">{area.label}</span>
                <span className={`h-px w-full transition-colors ${isActive ? "bg-gold-soft" : "bg-line"}`} />
              </button>
            );
          })}
        </div>

        <div className="flex w-6 shrink-0 justify-center sm:hidden">
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollByAmount(140)}
              className="flex h-6 w-6 items-center justify-center text-gold-soft transition-colors hover:text-red-soft"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Link href={active.href} className="group w-full">
          <div className="flex min-h-[380px] w-full flex-col items-center justify-center gap-6 rounded-3xl bg-card p-12 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300 ease-out sm:p-16">
            {ActiveIcon && (
              <span className="text-gold-soft transition-colors duration-300 ease-out group-hover:text-red-soft">
                <ActiveIcon size={48} />
              </span>
            )}
            <p className="font-display text-3xl uppercase tracking-[0.2em] text-ink transition-colors duration-300 ease-out group-hover:text-gold-soft">
              {active.label}
            </p>
            <p className="w-full max-w-md font-body text-base leading-relaxed text-muted">
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