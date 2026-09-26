import ExploreLinks from "@/components/ExploreLinks";

export const metadata = {
  title: "Privacy — Rafael Turse",
};

const SECTIONS = [
  {
    heading: "1. Who I am",
    body: "This website (rafaelturse.com) is operated by Rafael Turse. This policy explains what information is collected when you visit the site and how that information is used.",
  },
  {
    heading: "2. Cookies and analytics",
    body: "This site uses Google Analytics (GA4) to understand how visitors use it — which pages are visited, where visitors come from, and how long they stay. These tools use cookies, small files stored in your browser. Google Analytics is only activated after you accept the use of cookies in the banner shown on your first visit. If you decline, no analytics data is collected.",
  },
  {
    heading: "3. What data is collected",
    body: "When Google Analytics is active, data such as IP address (anonymized), device type, browser, pages visited, and time spent may be collected. No names, emails, or other personal information are collected directly through this site unless you voluntarily provide them, for example through the contact form.",
  },
  {
    heading: "4. How this information is used",
    body: "The information collected is used exclusively to understand site performance and improve the visitor experience. Your data is never sold, rented, or shared with third parties for marketing purposes.",
  },
  {
    heading: "5. Your rights",
    body: "You may decline the use of cookies at any time through the banner shown on the site, or by clearing your browser's browsing data.",
  },
  {
    heading: "6. Contact",
    body: "For questions about this policy, please reach out through the Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <header className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-gold-soft">Privacy</p>
        <h1 className="mt-5 font-display text-5xl tracking-[0.05em] text-ink sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-sm leading-relaxed text-muted">
          How we collect, use, and protect your information
        </p>
      </header>

      <div
        className="mt-14 rounded-3xl p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-12"
        style={{ backgroundColor: "#111" }}
      >
        <p className="text-center font-body text-xs uppercase tracking-[0.2em] text-muted">
          Last updated: September 2026
        </p>

        <div className="mt-8 flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl text-gold-soft">{section.heading}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ExploreLinks ids={["writer", "professional", "technical"]} />
    </div>
  );
}