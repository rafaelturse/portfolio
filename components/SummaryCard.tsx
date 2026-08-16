import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
  href: string;
  linkLabel?: string;
};

export default function SummaryCard({ icon, text, href, linkLabel = "More" }: Props) {
  const dropCap = text.charAt(0);
  const rest = text.slice(1);

  return (
    <div className="group relative border border-line p-8 pb-20 transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-[0_20px_40px_-20px_rgba(184,150,63,0.3)]">
      <div className="mb-6 flex justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold-soft group-hover:text-gold-soft">
          {icon}
        </span>
      </div>

      <p className="text-justify font-body text-sm leading-relaxed tracking-[0.02em] text-muted [hyphens:auto]">
        <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">
          {dropCap}
        </span>
        {rest}
      </p>

      <Link
        href={href}
        className="group/link absolute bottom-8 right-8 inline-flex items-center gap-2 border-b border-gold-soft pb-1 font-display text-base text-ink transition-colors hover:text-gold-soft"
      >
        {linkLabel}
        <span className="transition-transform group-hover/link:translate-x-1">→</span>
      </Link>
    </div>
  );
}