"use client";

import { useState, useRef } from "react";
import { SendIcon } from "@/lib/icons";

const WEB3FORMS_ACCESS_KEY = "4a50eb29-394b-49a0-a2c1-11cad171efba";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email,
          subject: `[Portfolio] ${subject}`,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <div className="mt-16">
      <div className="flex items-center justify-center gap-2 sm:justify-start">
        <span className="text-gold-soft">
          <SendIcon />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">Contact Me</h1>
      </div>

      <div
        className="mt-6 rounded-3xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
        style={{ backgroundColor: "#111" }}
      >
        <form onSubmit={handleSubmit} className="space-y-8 divide-y-0">
          <div>
            <label
              htmlFor="email"
              className="font-body text-xs uppercase tracking-[0.2em] text-muted"
            >
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 font-body text-sm text-ink outline-none transition-colors focus:border-gold-soft"
            />
          </div>

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

          <div className="flex justify-end">
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 border border-red-soft bg-red-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-red-soft disabled:opacity-50"
              >
                <SendIcon size={14} />
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
          </div>
        </form>

        <div
          className={`mt-6 text-center font-body text-sm transition-opacity duration-500 ${status === "sent" || status === "error"
            ? "opacity-100"
            : "pointer-events-none opacity-0"
            } ${status === "error" ? "text-red-400" : "text-gold-soft"}`}
          aria-live="polite"
        >
          {status === "error"
            ? "Something went wrong — try again, or email me directly."
            : "Thank you, I'll reply soon."}
        </div>
      </div>
    </div>
  );
}