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

      <div className="mx-auto mt-20 max-w-2xl">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}