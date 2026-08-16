import { bioIntro, bio, education, summaryCards } from "@/lib/data";
import SummaryCard from "@/components/SummaryCard";

export const metadata = {
  title: "Professional — Rafael Turse",
};

const ICONS = {
  coding: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
    </svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
    </svg>
  ),
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
        {summaryCards.map((card) => (
          <SummaryCard
            key={card.href}
            icon={ICONS[card.icon]}
            href={card.href}
            text={card.text}
            linkLabel={card.linkLabel}
          />
        ))}
      </div>
    </div>
  );
}