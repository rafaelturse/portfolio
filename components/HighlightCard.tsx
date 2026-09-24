import Link from "next/link";
import type { ReactElement } from "react";
import { MoreIcon, type IconProps } from "@/lib/icons";

type HighlightCardProps = {
  icon: (props: IconProps) => ReactElement;
  title: string;
  text: string;
  href: string;
  linkLabel?: string;
};

export default function HighlightCard({ icon: Icon, title, text, href, linkLabel = "More" }: HighlightCardProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 sm:justify-start">
        <span className="text-gold-soft">
          <Icon size={18} />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">{title}</h1>
      </div>

      <div
        className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
        style={{ backgroundColor: "#111" }}
      >
        <p className="text-center font-body text-sm leading-relaxed text-muted sm:text-left sm:text-base">
          {text}
        </p>

        <div className="mt-6 flex justify-center border-t border-line pt-5 sm:justify-end">
          <Link
            href={href}
            className="flex items-center gap-2 border border-red-soft bg-red-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-red-soft"
          >
            <MoreIcon size={14} />
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}