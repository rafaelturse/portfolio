import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  category: string;
  items: string[];
};

export default function StackCard({ icon, category, items }: Props) {
  return (
    <div className="group flex flex-col items-center border border-line p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-[0_20px_40px_-20px_rgba(184,150,63,0.3)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-gold-soft group-hover:text-gold-soft">
        {icon}
      </span>
      <p className="mt-4 font-display text-lg font-medium text-ink">{category}</p>
      <p className="mt-2 font-body text-xs leading-relaxed text-muted">{items.join(" · ")}</p>
    </div>
  );
}