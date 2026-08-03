import Link from "next/link";
import type { Book } from "@/lib/data";

export default function BookCard({ book }: { book: Book }) {
  const isPublished = book.status === "published";

  return (
    <div className="flex flex-col gap-6 border-b border-line py-10 sm:flex-row sm:items-center last:border-none">
      <div className="group/cover relative mx-auto aspect-[2/3] w-36 shrink-0 overflow-hidden border border-line bg-surface p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-gold-soft sm:mx-0">
        {book.cover ? (
          <div className="relative h-full w-full overflow-hidden">
            <img src={book.cover} alt={book.title} className="h-full w-full object-contain" />
            <div className="pointer-events-none absolute inset-0 bg-gold-soft opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover/cover:opacity-20" />
          </div>
        ) : isPublished ? (
          <div className="flex h-full w-full items-center justify-center text-line">
            <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center px-2 text-center font-body text-[10px] uppercase tracking-[0.2em] text-muted">
            Coming soon
          </div>
        )}
      </div>

      <div className="flex-1 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-x-3 sm:justify-start">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-soft">
            {book.series}
          </p>
          <span className="font-body text-xs text-muted">· {book.release}</span>
        </div>
        <h3 className="mt-2 font-display text-2xl text-ink">{book.title}</h3>
        <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-muted">
          {book.synopsis}
        </p>

        {book.stores && book.stores.length > 0 && (
          <div className="mt-4 flex justify-center gap-4 sm:justify-end">
            {book.stores.map((store) => (
              <Link
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${store.label} store`}
                className="group flex flex-col items-center gap-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold-soft group-hover:text-gold-soft">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-gold-soft">
                  {store.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}