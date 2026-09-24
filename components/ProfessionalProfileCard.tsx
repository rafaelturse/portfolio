import { MapPinIcon, UserIcon } from "@/lib/icons";

type ProfessionalProfileCardProps = {
  photo: string;
  bio: string;
  location: string;
};

export default function ProfessionalProfileCard({ photo, bio, location }: ProfessionalProfileCardProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 sm:justify-start">
        <span className="text-gold-soft">
          <UserIcon />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">Professional Profile</h1>
      </div>

      <div
        className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
        style={{ backgroundColor: "#111" }}
      >
        <div className="flex flex-col gap-10 sm:flex-row">
          <img
            src={photo}
            alt="Rafael Turse"
            className="mx-auto aspect-[2/3] w-48 shrink-0 rounded-2xl border-2 border-gold-soft object-cover sm:mx-0 sm:w-56"
          />

          <div className="flex w-full flex-1 flex-col justify-between text-center sm:text-left">
            <div>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted sm:text-base">
                {bio}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1.5 text-gold-soft sm:justify-start">
              <MapPinIcon />
              <span className="font-body text-xs uppercase tracking-[0.15em]">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}