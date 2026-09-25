import Link from "next/link";
import { profile, areas } from "@/lib/data";
import AreasCarousel from "@/components/AreasCarousel";
import AreasShowcase from "@/components/AreasShowcase";

export default function HomePage() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <h1 className="font-display text-6xl tracking-tight text-ink sm:text-7xl">
          <Link href="/" className="transition-colors tracking-[0.05em] hover:text-gold-soft">
            {profile.name}
          </Link>
        </h1>
        <Link href="/" className="transition-colors hover:text-gold-soft">
          <p className="mt-5 font-body text-xs uppercase tracking-[1em] text-gold-soft">Portfolio</p>
        </Link>
      </header>

      <div className="mt-52">
        <AreasShowcase areas={areas} />
      </div>
    </div>
  );
}