"use client";

import { useState } from "react";
import type { Book } from "@/lib/data";
import { SearchIcon } from "@/lib/icons";

export default function BookCover({ book }: { book: Book }) {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <div className="flex shrink-0 flex-col items-center gap-3 sm:w-56">
      <div className="group flex flex-col items-center gap-3">
        {book.cover ? (
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="aspect-[2/3] w-48 cursor-pointer overflow-hidden border border-transparent transition-colors duration-300 hover:border-gold-soft sm:w-56"
          >
            <img src={book.cover} alt={book.title} className="h-full w-full object-contain" />
          </button>
        ) : (
          <div className="aspect-[2/3] w-48 rounded-2xl sm:w-56" />
        )}

        {book.cover && (
          <span className="flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.15em] text-red-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <SearchIcon />
            View image
          </span>
        )}
      </div>

      {zoomOpen && book.cover && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            className="absolute right-6 top-6 font-body text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold-soft"
          >
            Close
          </button>
          <img
            src={book.cover}
            alt={book.title}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}