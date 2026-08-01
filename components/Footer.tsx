export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto max-w-5xl px-5 py-10">
                <div className="flex justify-center">
                    <span className="font-accent text-sm tracking-wide text-muted">
                        developed by <span className="text-muted-light">Rafael Turse</span> with{" "}
                        <span className="text-muted-light">Next.js</span> and{" "}
                        <span className="text-muted-light">Tailwind</span>
                    </span>
                </div>
            </div>
        </footer>
    );
}