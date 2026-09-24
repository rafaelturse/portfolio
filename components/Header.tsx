"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { areas } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-gold-soft transition-colors hover:text-red-soft md:hidden"
          aria-label={open ? "Close" : "Menu"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`font-body text-xs uppercase tracking-[0.15em] transition-colors hover:text-gold-soft ${pathname === "/" ? "text-gold-soft" : "text-muted"
              }`}
          >
            Home
          </Link>
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className={`font-body text-xs uppercase tracking-[0.15em] transition-colors hover:text-gold-soft ${pathname === area.href ? "text-gold-soft" : "text-muted"
                }`}
            >
              {area.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="md:hidden">
          <LanguageSwitcher />
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-5 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="border-b border-line py-3 font-body text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-gold-soft"
          >
            Home
          </Link>
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 font-body text-xs uppercase tracking-[0.15em] text-muted transition-colors last:border-none hover:text-gold-soft"
            >
              {area.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}