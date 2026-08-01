import Link from "next/link";
import { profile, areas } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <section className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {profile.coordinates} — {profile.location}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-lg text-signal">{profile.role}</p>
      </section>

      <section className="mt-16 grid gap-5 sm:grid-cols-2">
        {areas.map((area, i) => (
          <Link
            key={area.label}
            href={area.href}
            className="corner-frame group border border-line bg-surface p-6 text-ink transition-colors hover:border-accent"
          >
            <p className="font-mono text-xs text-ink-faint">0{i + 1}</p>
            <p className="mt-1 font-display text-xl font-bold group-hover:text-accent">
              {area.label}
            </p>
            <p className="mt-2 text-sm text-ink-soft">{area.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}