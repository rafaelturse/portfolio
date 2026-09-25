import { stack, methodologies, bio, education } from "@/lib/data";
import StackCard from "@/components/StackCard";
import ProfessionalProfileCard from "@/components/ProfessionalProfileCard";
import EducationCard from "@/components/EducationCard";
import {
  SchoolIcon,
  CertificateIcon,
  LanguagesIcon,
  BackendIcon,
  FrontendIcon,
  MobileIcon,
  DatabaseIcon,
  DevOpsIcon,
  ProjectIcon,
  BusinessIcon,
  type IconProps,
  CodeCircleIcon,
  ClipboardListIcon,
  TargetIcon,
} from "@/lib/icons";
import type { ReactElement } from "react";
import HighlightCard from "@/components/HighlightCard";
import ExploreLinks from "@/components/ExploreLinks";

export const metadata = {
  title: "Technical — Rafael Turse",
};

const EDUCATION_ICONS = [SchoolIcon, CertificateIcon];

const ICONS: Record<string, (props: IconProps) => ReactElement> = {
  Languages: LanguagesIcon,
  Backend: BackendIcon,
  Frontend: FrontendIcon,
  Mobile: MobileIcon,
  Database: DatabaseIcon,
  DevOps: DevOpsIcon,
  Project: ProjectIcon,
  Business: BusinessIcon,
};

export default function TechnicalPage() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-6 py-28 sm:py-36">
      <header>
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Technical</p>
          <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">Core Stack</h1>
        </div>

        <div className="mt-22">
          <ProfessionalProfileCard
            photo="/img/photo/author.png"
            bio={bio}
            location="Toronto, ON — Canada"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <EducationCard
            icon={CodeCircleIcon}
            credential="Architecture"
            text="I work as a software architect and engineer to develop complete end-to-end solutions. With solid experience in fullstack software development for web and mobile applications, I design practical, modern, secure and scalable systems, using methodologies and tools widely used in the job market."
          />
          <EducationCard
            icon={TargetIcon}
            credential="Scope"
            text="My skills range from the strategic aspect to the technical implementation, including project management, requirements gathering, prototyping of interfaces and solutions, usability and user experience, backend and frontend programming, APIs and security, messaging, database and DevOps."
          />
        </div>
      </header>

      <div className="mt-14">
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <span className="text-gold-soft">
            <ClipboardListIcon />
          </span>
          <h1 className="font-display uppercase text-lg text-ink">Methodologies</h1>
        </div>

        <div
          className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
          style={{ backgroundColor: "#111" }}
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-3">
            {methodologies.map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-line py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-soft text-gold-soft">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                  </svg>
                </span>
                <p className="font-body text-sm leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <span className="text-gold-soft">
            <CodeCircleIcon size={18} />
          </span>
          <h1 className="font-display uppercase text-lg text-ink">Technologies</h1>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4">
          {stack.map((group) => {
            const Icon = ICONS[group.category];
            return (
              <StackCard
                key={group.category}
                icon={Icon ? <Icon /> : null}
                category={group.category}
                items={group.items}
              />
            );
          })}
        </div>
      </div>

      <ExploreLinks ids={["writer", "professional", "contact", "support"]} />
    </div>
  );
}