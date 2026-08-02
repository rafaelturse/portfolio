import ContactIcons from "@/components/ContactIcons";
import { profile } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Contacts — Rafael Turse",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Contacts</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Let&apos;s Talk
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-sm leading-relaxed text-muted">
          Based in {profile.location}. Reach out directly by email, or find me on any of the
          platforms below.
        </p>
      </header>

      <div className="mt-16 flex justify-center">
        <a href="mailto:hello@rafaelturse.com" className="border-b border-gold-soft font-display text-2xl text-ink transition-colors hover:text-gold-soft">
          rafaelturse@hotmail.com
        </a>
      </div>

      <div className="mt-6 flex justify-center">
        <ContactIcons size={22} className="gap-8 text-muted" />
      </div>

      <div className="mt-16 flex flex-col items-center gap-5">
        <span className="h-px w-110 bg-line" />
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