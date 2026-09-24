"use client";

import Link from "next/link";
import { useState } from "react";
import { COMMUNITY_PLATFORMS, type CommunityPlatformId } from "@/lib/community";
import { MailIcon } from "@/lib/icons";

export default function CommunityLinks() {
  const [selected, setSelected] = useState<CommunityPlatformId | null>("linkedin");

  const selectedPlatform = COMMUNITY_PLATFORMS.find((p) => p.id === selected);

  return (
    <div className="mt-22">
      <div className="flex items-center gap-2">
        <span className="text-gold-soft">
          <MailIcon size={18} />
        </span>
        <h1 className="font-display uppercase text-lg text-ink">Find Me Online</h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {COMMUNITY_PLATFORMS.map((platform) => {
          const isActive = selected === platform.id;
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              type="button"
              onClick={() => setSelected(isActive ? null : platform.id)}
              className={`flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-3xl bg-card p-4 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out hover:-translate-y-1 ${
                isActive ? "ring-2 ring-gold-soft" : ""
              }`}
            >
              <span style={{ color: platform.iconColor }}>
                <Icon size={28} />
              </span>
            </button>
          );
        })}
      </div>

      {selectedPlatform && (
        <div
          className="mt-6 rounded-3xl p-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:p-10"
          style={{ backgroundColor: "#111" }}
        >
          <span className="inline-block" style={{ color: selectedPlatform.iconColor }}>
            <selectedPlatform.icon size={48} />
          </span>
          <p className="mx-auto mt-8 max-w-xl font-body text-sm leading-relaxed text-muted sm:text-base">
            {selectedPlatform.description}
          </p>
          <div className="mt-6 flex justify-end">
            <Link
              href={selectedPlatform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold-soft px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-gold-soft transition-colors hover:bg-gold-soft hover:text-bg"
            >
              Visit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}