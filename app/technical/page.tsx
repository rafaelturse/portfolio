import type { ReactElement } from "react";
import { stack, methodologies } from "@/lib/data";
import StackCard from "@/components/StackCard";

export const metadata = {
  title: "Technical — Rafael Turse",
};

const ICONS: Record<string, ReactElement> = {
  Languages: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
    </svg>
  ),
  Backend: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
      <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
      <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
    </svg>
  ),
  Frontend: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM16 2.5A1.5 1.5 0 0 0 14.5 1h-13A1.5 1.5 0 0 0 0 2.5v11A1.5 1.5 0 0 0 1.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-11zM1.5 2h13a.5.5 0 0 1 .5.5V5H1V2.5a.5.5 0 0 1 .5-.5zM1 6h14v7.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V6z" />
    </svg>
  ),
  Mobile: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  ),
  Database: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.271 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313zM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698zM14 4c0-1.007-.875-1.755-1.904-2.223C11.022.289 9.573 0 8 0S4.978.289 3.904.777C2.875 1.245 2 1.993 2 3v10c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V3z" />
    </svg>
  ),
  DevOps: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
    </svg>
  ),
  Project: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
    </svg>
  ),
  Business: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
    </svg>
  ),
};

export default function TechnicalPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <header>
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Technical</p>
          <h1 className="mt-5 font-display text-5xl tracking-tight text-ink sm:text-6xl">Core stack</h1>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="font-body text-[15px] leading-relaxed text-muted [text-align:justify] [hyphens:auto] sm:columns-2 sm:gap-10">
            <p className="[text-indent:0]">
              <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">I</span>
              work as a software architect and engineer to develop complete end-to-end solutions. With
              solid experience in fullstack software development for web and mobile applications, I
              design practical, modern, secure and scalable systems, using methodologies and tools
              widely used in the job market.
            </p>

            <p className="mt-6 sm:mt-0">
              <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-gold-soft">M</span>
              y skills range from the strategic aspect to the technical implementation, including
              project management, requirements gathering, prototyping of interfaces and solutions,
              usability and user experience, backend and frontend programming, APIs and security,
              messaging, database and DevOps.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <span className="font-display text-lg text-gold-soft">❧</span>
          </div>
        </div>
      </header>

      <div className="text-center">
        <h1 className="mt-12 font-display text-5xl tracking-tight text-ink sm:text-6xl">Methodologies</h1>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-3">
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

      <div className="text-center">
        <h1 className="mt-12 font-display text-5xl tracking-tight text-ink sm:text-6xl">Technologies</h1>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-4">
        {stack.map((group) => (
          <StackCard
            key={group.category}
            icon={ICONS[group.category]}
            category={group.category}
            items={group.items}
          />
        ))}
      </div>
    </div>
  );
}