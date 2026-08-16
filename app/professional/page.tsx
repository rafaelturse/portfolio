import Link from "next/link";
import { bioIntro, bio, education } from "@/lib/data";

export const metadata = {
  title: "Professional — Rafael Turse",
};

export default function ProfessionalPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col justify-center px-6 py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Professional</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">Summary</h1>
        <p className="mx-auto mt-12 max-w-md font-body text-xs uppercase tracking-widest text-muted">
          {bioIntro}
        </p>
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed tracking-[0.02em] text-muted">
          {bio}
        </p>
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

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="group relative border border-line p-8 pb-20 transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-[0_20px_40px_-20px_rgba(184,150,63,0.3)]">
          <div className="mb-6 flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold-soft group-hover:text-gold-soft">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </span>
          </div>
          <p className="text-justify font-body text-sm leading-relaxed tracking-[0.02em] text-muted [hyphens:auto]">
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">
              I
            </span>
            worked for many years in full-stack software development, building solutions for
            desktop, web, and mobile applications from early-stage startups to large enterprise
            systems, always focused on writing clean, maintainable, and scalable code.
          </p>
          <Link
            href="/technical"
            className="group/link absolute bottom-8 right-8 inline-flex items-center gap-2 border-b border-gold-soft pb-1 font-display text-base text-ink transition-colors hover:text-gold-soft"
          >
            More
            <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
        </div>

        <div className="group relative border border-line p-8 pb-20 transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-[0_20px_40px_-20px_rgba(184,150,63,0.3)]">
          <div className="mb-6 flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold-soft group-hover:text-gold-soft">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </span>
          </div>
          <p className="text-justify font-body text-sm leading-relaxed tracking-[0.02em] text-muted [hyphens:auto]">
            <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">
              I
            </span>
            n 2019, I decided to start a very different project by my own, and since then I have
            been developing a grand fantasy universe that bore its first fruit in 2026 with the
            launch of my first book, thus officially launching my career as a writer.
          </p>
          <Link
            href="/writer"
            className="group/link absolute bottom-8 right-8 inline-flex items-center gap-2 border-b border-gold-soft pb-1 font-display text-base text-ink transition-colors hover:text-gold-soft"
          >
            More
            <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}