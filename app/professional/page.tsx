import Link from "next/link";
import { bioIntro, bio, education, professionalLinks } from "@/lib/data";

const NUMERALS = ["I", "II"];

export const metadata = {
  title: "Professional — Rafael Turse",
};

export default function ProfessionalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Professional</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">Summary</h1>
        <p className="mx-auto mt-12 max-w-md font-body text-xs uppercase tracking-widest text-muted">
          {bioIntro}
        </p>
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-muted">{bio}</p>
      </header>

      <div className="mx-auto mt-4 max-w-sm">
        {education.map((d) => (
          <div key={d.credential} className="border-b border-line py-4 text-center last:border-none">
            <p className="font-display text-base text-ink">{d.credential}</p>
            <p className="mt-1 font-body text-xs text-muted">
              {d.school} — {d.location}
            </p>
          </div>
        ))}
      </div>

      <nav className="mx-auto mt-16 max-w-md border-t border-line">
        {professionalLinks.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-baseline gap-6 border-b border-line py-7 transition-colors"
          >
            <span className="font-display text-sm text-gold-soft">{NUMERALS[i]}</span>
            <span className="flex-1">
              <span className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-gold-soft sm:text-3xl">
                {item.label}
              </span>
              <span className="mt-1 block font-body text-sm text-muted">{item.description}</span>
            </span>
            <span className="font-display text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold-soft">
              →
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-6 flex flex-col items-center gap-5">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold-soft"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          home
        </Link>
      </div>
    </div>
  );
}