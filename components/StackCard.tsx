import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  category: string;
  items: string[];
};

export default function StackCard({ icon, category, items }: Props) {
  return (
    <div className="group flex min-h-[220px] flex-col items-center gap-4 rounded-3xl bg-card p-8 pt-10 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out hover:-translate-y-1">
      <span className="text-gold-soft transition-colors duration-300 ease-out group-hover:text-red-soft">
        {icon}
      </span>
      <p className="font-display text-base uppercase tracking-[0.2em] text-ink transition-colors duration-300 ease-out group-hover:text-gold-soft">
        {category}
      </p>
      <p className="font-body text-sm leading-relaxed text-muted">{items.join(" · ")}</p>
    </div>
  );
}