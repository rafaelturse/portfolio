"use client";

import { useState, useRef } from "react";

const CONTACT_EMAIL = "rafaelturse@hotmail.com";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;

    setSubject("");
    setMessage("");
    setShowThanks(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowThanks(false), 5000);
  }

  return (
    <div className="mx-auto mt-8 max-w-md">
      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div>
          <label
            htmlFor="subject"
            className="font-body text-xs uppercase tracking-[0.2em] text-muted"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 font-body text-sm text-ink outline-none transition-colors focus:border-gold-soft"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-body text-xs uppercase tracking-[0.2em] text-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-none border-0 border-b border-line bg-transparent py-2 font-body text-sm leading-relaxed text-ink outline-none transition-colors focus:border-gold-soft"
          />
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="group inline-flex items-center gap-2 border-b border-gold-soft pb-1 font-display text-lg text-ink transition-colors hover:text-gold-soft"
          >
            Send
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>

      <div
        className={`mt-6 text-center font-body text-sm text-gold-soft transition-opacity duration-500 ${showThanks ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        aria-live="polite"
      >
        Thank you, I&apos;ll reply soon.
      </div>
    </div>
  );
}