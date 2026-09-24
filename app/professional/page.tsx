import { bio, education } from "@/lib/data";
import HighlightCard from "@/components/HighlightCard";
import EducationCard from "@/components/EducationCard";
import ExploreLinks from "@/components/ExploreLinks";
import { CodeIcon, FeatherIcon, SchoolIcon, CertificateIcon } from "@/lib/icons";
import ProfessionalProfileCard from "@/components/ProfessionalProfileCard";

export const metadata = {
  title: "Professional — Rafael Turse",
};

const EDUCATION_ICONS = [SchoolIcon, CertificateIcon];

export default function ProfessionalPage() {
  return (
    <div className="mx-auto mt-16 flex min-h-full max-w-5xl flex-col justify-center px-6 py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Professional</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">Career Summary</h1>
      </header>

      <div className="mt-22">
        <ProfessionalProfileCard
          photo="/img/photo/author.png"
          bio={bio}
          location="Toronto, ON — Canada"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {education.map((d, i) => (
          <EducationCard
            key={d.credential}
            icon={EDUCATION_ICONS[i] ?? SchoolIcon}
            credential={d.credential}
            school={d.school}
            location={d.location}
          />
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-20">
        <HighlightCard
          icon={CodeIcon}
          title="Software Development"
          text="I worked for many years in full-stack software development, building solutions for desktop, web, and mobile applications from early-stage startups to large enterprise systems, always focused on writing clean, maintainable, and scalable code."
          href="/technical"
        />
        <HighlightCard
          icon={FeatherIcon}
          title="Writing"
          text="In 2019, I decided to start a very different project by my own, and since then I have been developing a grand fantasy universe that bore its first fruit in 2026 with the launch of my first book, thus officially launching my career as a writer."
          href="/writer"
        />
      </div>

      <ExploreLinks ids={["writer", "technical", "contact", "support"]} />
    </div>
  );
}