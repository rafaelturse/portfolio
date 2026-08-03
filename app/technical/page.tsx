import { stack } from "@/lib/data";

export const metadata = {
  title: "Technical — Rafael Turse",
};

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export default function TechnicalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
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

      <nav className="mx-auto mt-16 max-w-lg border-t border-line">
        {stack.map((group, i) => (
          <div
            key={group.category}
            className="group flex items-baseline gap-6 border-b border-line py-7 transition-colors"
          >
            <span className="font-display text-sm text-gold-soft">{NUMERALS[i]}</span>
            <span className="flex-1">
              <span className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-gold-soft sm:text-3xl">
                {group.category}
              </span>
              <span className="mt-1 block font-body text-sm text-muted">
                {group.items.join(" · ")}
              </span>
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}