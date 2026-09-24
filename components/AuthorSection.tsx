import Link from "next/link";
import { FeatherIcon, MapPinIcon } from "@/lib/icons";

const AUTHOR_BIO =
  `Brazilian and Canadian, currently residing in Toronto, Canada. Rafael Turse is an independent writer seeking to make his mark in the world of literature. He is, without a doubt, self-taught, and among many other things, he is also a programmer, musician, illustrator, and writer. In 2026, he officially launches his first epic fantasy novel, "The Memories of Berdox - Volume 1 - Fragmented," a title belonging to the promising series, also of his own authorship, "The Dominator of Souls," the first of many more to come!`;

const AUTHOR_LOCATION = "Toronto, ON — Canada";
const AUTHOR_PHOTO = "/img/photo/author.png";
const AMAZON_AUTHOR_URL = "https://www.amazon.com/stores/Rafael-Turse/author/B0HHFVRC7S";

export default function AuthorSection() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-gold-soft">
          <FeatherIcon />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">Author</h1>
      </div>

      <div
        className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
        style={{ backgroundColor: "#111" }}
      >
        <div className="flex flex-col gap-10 sm:flex-row">
          <img
            src={AUTHOR_PHOTO}
            alt="Rafael Turse"
            className="mx-auto aspect-[2/3] w-48 shrink-0 rounded-2xl border-2 border-gold-soft object-cover sm:mx-0 sm:w-56"
          />

          <div className="flex w-full flex-1 flex-col justify-between text-center sm:text-left">
            <p className="font-body text-sm leading-relaxed text-muted sm:text-base">
              {AUTHOR_BIO}
            </p>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-1.5 text-gold-soft">
                <MapPinIcon />
                <span className="font-body text-xs uppercase tracking-[0.15em]">
                  {AUTHOR_LOCATION}
                </span>
              </div>

              <Link
                href={AMAZON_AUTHOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-soft bg-red-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-red-soft"
              >
                View on Amazon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}