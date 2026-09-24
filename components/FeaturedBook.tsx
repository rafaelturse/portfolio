"use client";

import { useState, useRef } from "react";
import type { Book } from "@/lib/data";
import { MedalIcon, BookmarkIcon, MoreIcon } from "@/lib/icons";
import BookCover from "./BookCover";
import SynopsisPreview from "./SynopsisPreview";
import RedirectNotice from "./RedirectNotice";

export default function FeaturedBook({ book }: { book: Book }) {
  const [redirectOpen, setRedirectOpen] = useState(false);
  const popupRef = useRef<Window | null>(null);

  function handleMoreClick() {
    popupRef.current = window.open("", "_blank");
    setRedirectOpen(true);
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-2 sm:justify-start">
        <span className="text-gold-soft">
          <MedalIcon />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">Featured in Store</h1>
      </div>

      <div
        className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
        style={{ backgroundColor: "#111" }}
      >
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <BookCover book={book} />

          <div className="w-full text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-gold-soft">
                  <BookmarkIcon />
                </span>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-soft">
                  {book.series}
                </p>
              </div>
              {book.status === "published" && (
                <span className="inline-block cursor-default border border-red-soft px-2 py-0.5 font-body text-[10px] uppercase tracking-[0.2em] text-red-soft transition-shadow duration-300 hover:shadow-[0_0_12px_rgba(177,69,60,0.7)]">
                  New
                </span>
              )}
            </div>

            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              {book.title}
            </h1>

            <SynopsisPreview book={book} />

            {book.detailUrl && (
              <div className="mt-6 flex justify-end border-t border-line pt-5">
                <button
                  type="button"
                  onClick={handleMoreClick}
                  className="flex items-center gap-2 border border-red-soft bg-red-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-red-soft"
                >
                  <MoreIcon size={14} />
                  More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {redirectOpen && book.detailUrl && (
        <RedirectNotice
          href={book.detailUrl}
          popup={popupRef.current}
          onClose={() => setRedirectOpen(false)}
        />
      )}
    </div>
  );
}