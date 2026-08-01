import Link from "next/link";

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
                    RAFAEL TURSE
                    <span className="ml-2 font-mono text-xs font-normal text-accent">/dev</span>
                </Link>
            </div>
        </header>
    );
}