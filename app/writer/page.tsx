import { writerBio, books } from "@/lib/data";
import FeaturedBook from "@/components/FeaturedBook";
import AuthorSection from "@/components/AuthorSection";
import ExploreLinks from "@/components/ExploreLinks";

export const metadata = {
  title: "Writer — Rafael Turse",
};

export default function WriterPage() {
  const featured = books.find((b) => b.status === "published") ?? books[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="mt-16 font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Writer</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Creating The Beyond!
        </h1>
      </header>

      <div className="mt-16">
        <AuthorSection />
      </div>

      <div className="mt-16">
        <FeaturedBook book={featured} />
      </div>

      <ExploreLinks ids={["professional", "technical", "contact", "support"]} />
    </div>
  );
}