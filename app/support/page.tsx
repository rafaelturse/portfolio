import Link from "next/link";
import { supportLinks } from "@/lib/data";
import EducationCard from "@/components/EducationCard";
import ExploreLinks from "@/components/ExploreLinks";
import { MugIcon, CreditCardIcon, SparkleIcon, type IconProps } from "@/lib/icons";
import type { ReactElement } from "react";

export const metadata = {
  title: "Support — Rafael Turse",
};

const SUPPORT_ICONS: Record<string, (props: IconProps) => ReactElement> = {
  "Buy Me a Coffee": MugIcon,
  PayPal: CreditCardIcon,
};

export default function SupportPage() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Support</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Fuel the Journey
        </h1>
      </header>

      <div className="mt-22">
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <span className="text-gold-soft">
            <SparkleIcon size={18} />
          </span>
          <h1 className="font-display uppercase text-lg text-ink">Every Bit Helps</h1>
        </div>

        <div
          className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
          style={{ backgroundColor: "#111" }}
        >
          <p className="text-center font-body text-sm leading-relaxed text-muted sm:text-left sm:text-base">
            Writing a novel, building software, drawing, composing music — none of it happens in a
            vacuum. If something I made helped, entertained, or inspired you along the way, consider
            fueling the journey. Whether it's a one-time coffee or a direct contribution, every bit
            goes straight back into the code, the writing, and the projects still ahead.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {supportLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <EducationCard
              icon={SUPPORT_ICONS[item.label] ?? MugIcon}
              credential={item.label}
              text={item.description}
            />
          </Link>
        ))}
      </div>

      <div className="mt-22 flex justify-center">
        <p className="cursor-default font-accent text-5xl text-gold-soft transition-colors duration-300 hover:text-red-soft sm:text-6xl">
          Thank you!
        </p>
      </div>

      <ExploreLinks ids={["writer", "professional", "technical", "contact"]} />
    </div>
  );
}