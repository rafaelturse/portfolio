import Link from "next/link";
import { profile, areas } from "@/lib/data";

const NUMERALS = ["I", "II", "III", "IV", "V"];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <div className="mb-4 flex justify-center">
          <img src="/symbols/logo-rafaelturse-shield-rt.png" alt="Rafael Turse logo" width={100} height={100} />
        </div>
        <h1 className="font-display text-6xl tracking-tight text-ink sm:text-7xl">
          <Link href="/" className="transition-colors tracking-[0.05em] hover:text-gold-soft">
            {profile.name}
          </Link>
        </h1>
        <Link href="/" className="transition-colors hover:text-gold-soft">
          <p className="mt-5 font-body text-xs uppercase tracking-[1em] text-gold-soft">Portfolio</p>
        </Link>
      </header>

      <nav className="mt-24 border-t border-line">
        {areas.map((area, i) => (
          <Link
            key={area.label}
            href={area.href}
            className="group flex items-baseline gap-6 border-b border-line py-7 transition-colors"
          >
            <span className="font-display text-sm text-gold-soft">{NUMERALS[i]}</span>
            <span className="flex-1">
              <span className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-gold-soft sm:text-3xl">
                {area.label}
              </span>
              <span className="mt-1 block max-w-md font-body text-sm text-muted">
                {area.description}
              </span>
            </span>
            <span className="font-display text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold-soft">
              →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}