import Link from "next/link";
import ContactIcons from "@/components/ContactIcons";
import { profile, areas } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="border-t border-line bg-paper-deep">
            <div className="mx-auto max-w-5xl px-5 py-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
                    <div>
                        <p className="font-display text-sm font-bold text-ink">{profile.name}</p>
                        <p className="font-mono text-xs text-ink-soft">{profile.coordinates}</p>
                    </div>

                    <nav aria-label="Sitemap">
                        <p className="font-mono text-xs uppercase tracking-widest text-accent">Sitemap</p>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <Link href="/" className="text-sm text-ink-soft hover:text-accent">
                                    Home
                                </Link>
                            </li>
                            {areas.map((area) => (
                                <li key={area.href}>
                                    <Link href={area.href} className="text-sm text-ink-soft hover:text-accent">
                                        {area.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ContactIcons size={18} className="text-ink-soft" />
                </div>

                <p className="mt-8 font-mono text-xs text-ink-faint">
                    built with Next.js + Tailwind — rev. {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}