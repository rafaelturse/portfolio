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
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-muted tracking-[0.02em]">{bio}</p>
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
      <div className="mx-auto mt-6">
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-muted tracking-[0.02em]">
          <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">I</span>
          worked for many years in full-stack software development for desktop, web, and mobile applications. In 2019, I decided to start a very different project by my own, and since then I have been developing a grand fantasy universe that bore its first fruit in 2026 with the launch of my first book, thus officially launching my career as a writer.
        </p>
      </div>
    </div>
  );
}