import { writerBio, books } from "@/lib/data";
import BookCard from "@/components/BookCard";

export const metadata = {
  title: "Writer — Rafael Turse",
};

export default function WriterPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Writer</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Creating The Beyond!
        </h1>
        <p className="mx-auto mt-12 max-w-md font-body text-sm leading-relaxed tracking-[0.02em] text-muted">
          {writerBio}
        </p>
      </header>

      <div className="mt-16 flex flex-col items-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">
          SERIES
        </p>

        <div className="group/symbol mt-6 h-28 w-28 overflow-hidden rounded-full border border-line bg-surface shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-gold-soft">
          <img
            src="/symbols/the-dominator-of-souls-separator-symbol.svg"
            alt="The Dominator of Souls symbol"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mt-4 font-display text-sm tracking-[0.04em] text-muted">
          The Dominator of Souls
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}