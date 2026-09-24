import type { ReactElement } from "react";
import type { IconProps } from "@/lib/icons";
import { MapPinIcon } from "@/lib/icons";

type EducationCardProps = {
  icon: (props: IconProps) => ReactElement;
  credential: string;
  school: string;
  location: string;
};

export default function EducationCard({ icon: Icon, credential, school, location }: EducationCardProps) {
  return (
    <div
      className="flex min-h-full flex-col items-center gap-4 rounded-3xl p-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
      style={{ backgroundColor: "#111" }}
    >
      <span className="text-gold-soft">
        <Icon size={36} />
      </span>
      <p className="font-display text-xl text-ink sm:text-2xl">{credential}</p>

      <div className="mt-auto flex items-center gap-1.5 border-t border-line pt-4 text-red-soft">
        <MapPinIcon size={16} />
        <span className="font-body text-sm sm:text-base">{school} — {location}</span>
      </div>
    </div>
  );
}