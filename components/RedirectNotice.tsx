"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@/lib/icons";

type RedirectNoticeProps = {
  href: string;
  popup: Window | null;
  onClose: () => void;
};

const REDIRECT_SECONDS = 5;

export default function RedirectNotice({ href, popup, onClose }: RedirectNoticeProps) {
  const hostname = new URL(href).hostname;
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (popup && !popup.closed) {
        popup.location.href = href;
      } else {
        window.open(href, "_blank", "noopener,noreferrer");
      }
      onClose();
      return;
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, href, popup, onClose]);

  function handleCancel() {
    popup?.close();
    onClose();
  }

  function handleContinueClick() {
    if (popup && !popup.closed) {
      popup.location.href = href;
    }
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm border border-line p-8 text-center"
        style={{ backgroundColor: "#111" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold-soft">
          <ExternalLinkIcon size={20} />
        </span>

        <p className="mt-5 font-display text-lg text-ink">Leaving this site</p>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted">
          You&apos;re about to be redirected to <span className="text-gold-soft">{hostname}</span> for
          more details about this book.
        </p>
        <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-muted">
          Redirecting in {secondsLeft}s...
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="border border-line px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            Cancel
          </button>
          <Link
            href={href}
            onClick={handleContinueClick}
            className="border border-red-soft bg-red-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-red-soft"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}