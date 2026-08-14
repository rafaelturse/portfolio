import { supportLinks } from "@/lib/data";

const NUMERALS = ["I", "II"];

export const metadata = {
  title: "Support — Rafael Turse",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Support</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Fuel the Journey
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-sm leading-relaxed text-muted">
          If something here helped, entertained, or inspired you, consider supporting the work —
          every bit helps keep the code, the writing, and the projects moving forward.
        </p>
      </header>

      <nav className="mx-auto mt-16 max-w-md border-t border-line">
        {supportLinks.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
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
          </a>
        ))}
      </nav>
    </div>
  );
}