import Link from "next/link";
import ContactIcons from "@/components/ContactIcons";
import { profile, areas } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-ink text-muted">
            <div className="mx-auto max-w-5xl px-5 py-12">
                {/* back to top */}
                <div className="flex justify-end">
                    <Link
                        href="#top"
                        aria-label="Back to top"
                        className="text-describe transition-colors hover:text-soft"
                    >
                        ▲
                    </Link>
                </div>

                <div className="mt-6 flex flex-col gap-10 sm:flex-row sm:justify-between">
                    <div>
                        <p className="font-display text-lg text-muted-light">{profile.name}</p>
                        <p className="mt-1 font-accent text-sm tracking-wide text-muted">
                            {profile.coordinates}
                        </p>
                    </div>

                    <nav aria-label="Sitemap">
                        <p className="font-display text-base text-muted-light">Sitemap</p>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <Link
                                    href="/"
                                    className="font-accent text-sm tracking-wide text-muted transition-colors hover:text-muted-light"
                                >
                                    Home
                                </Link>
                            </li>
                            {areas.map((area) => (
                                <li key={area.href}>
                                    <Link
                                        href={area.href}
                                        className="font-accent text-sm tracking-wide text-muted transition-colors hover:text-muted-light"
                                    >
                                        {area.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ContactIcons size={20} className="text-describe" />
                </div>

                <div className="mt-10 flex justify-center">
                    <span className="font-accent text-sm tracking-wide text-muted">
                        developed by <strong className="text-muted-light">Rafael Turse</strong> with{" "}
                        <strong className="text-muted-light">Next.js</strong>
                    </span>
                </div>
            </div>
        </footer>
    );
}