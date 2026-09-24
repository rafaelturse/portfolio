import ContactForm from "@/components/ContactForm";
import CommunityLinks from "@/components/CommunityLinks";
import ExploreLinks from "@/components/ExploreLinks";

export const metadata = {
  title: "Contact — Rafael Turse",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Contact</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Let&apos;s Talk
        </h1>
      </header>

      <CommunityLinks />

      <ContactForm />

      <ExploreLinks ids={["writer", "professional", "technical", "support"]} />
    </div>
  );
}