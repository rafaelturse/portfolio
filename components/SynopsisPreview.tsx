import type { Book } from "@/lib/data";
import { QuoteIcon } from "@/lib/icons";

const MAX_CHARS = 500;

export default function SynopsisPreview({ book }: { book: Book }) {
  const fullText = book.fullSynopsisHeading && book.fullSynopsis
    ? book.fullSynopsis.join(" ")
    : book.synopsis;

  const preview = fullText.length > MAX_CHARS
    ? fullText.slice(0, MAX_CHARS).trimEnd() + "..."
    : fullText;

  return (
    <div className="mt-5 text-left">
      <div className="flex items-center gap-2">
        <span className="text-gold-soft">
          <QuoteIcon />
        </span>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-soft">Synopsis</p>
      </div>

      {book.fullSynopsisHeading && (
        <p className="mt-3 font-display text-lg text-red-soft">{book.fullSynopsisHeading}</p>
      )}
      <p className="mt-2 font-body text-sm leading-relaxed text-muted sm:text-base">
        {preview}
      </p>
    </div>
  );
}