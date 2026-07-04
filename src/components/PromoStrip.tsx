"use client";

import { useState } from "react";

export function PromoStrip() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="sticky top-[63px] z-[29] bg-accent text-paper">
      <div className="relative mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-[18px] px-8 py-[11px]">
        <span className="h-[6px] w-[6px] shrink-0 rotate-45 bg-accent-2" />
        <p className="m-0 text-center font-body text-base leading-[1.4]">
          Mamy rodzinne adresy w domenie{" "}
          <span className="font-mono text-[13px]">imie@szorc.pl</span>. Chcesz
          mieć własny?
        </p>
        <a
          href="#kontakt"
          className="shrink-0 whitespace-nowrap border border-white/50 px-4 py-[7px] font-mono text-[11px] uppercase tracking-[0.12em] text-paper no-underline transition-colors hover:border-paper hover:bg-paper hover:text-accent"
        >
          Napisz do nas
        </a>
        <button
          onClick={() => setOpen(false)}
          aria-label="Zamknij"
          className="absolute right-6 cursor-pointer border-none bg-transparent p-1 font-mono text-lg leading-none text-paper opacity-70 transition-opacity hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}
