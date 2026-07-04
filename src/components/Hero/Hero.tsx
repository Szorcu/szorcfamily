"use client";

import { useEffect, useRef, useState } from "react";
import { heroForms } from "@/content/site";

export const Hero = () => {
  const [typed, setTyped] = useState("Szorc");
  // Refs mirror the original component's `fi` / `dir` instance fields so the
  // recursive timer keeps its place across renders. `cur` tracks the currently
  // rendered string outside of React state so the timer callback stays pure —
  // scheduling timers inside a `setState` updater breaks under StrictMode's
  // double-invocation and spawns parallel loops.
  const fi = useRef(0);
  const dir = useRef(1);
  const cur = useRef("Szorc");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const target = heroForms[fi.current];
      if (dir.current === 1) {
        if (cur.current.length < target.length) {
          cur.current = target.slice(0, cur.current.length + 1);
          setTyped(cur.current);
          timer = setTimeout(step, 135);
          return;
        }
        timer = setTimeout(() => {
          dir.current = -1;
          step();
        }, 1700);
        return;
      }
      if (cur.current.length > 0) {
        cur.current = cur.current.slice(0, -1);
        setTyped(cur.current);
        timer = setTimeout(step, 75);
        return;
      }
      fi.current = (fi.current + 1) % heroForms.length;
      dir.current = 1;
      timer = setTimeout(step, 320);
    };

    timer = setTimeout(step, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="mx-auto max-w-[1120px] px-8 pb-24 pt-[120px] text-center [animation:szUp_0.7s_ease_both]">
        <div className="font-mono text-xs uppercase tracking-[0.34em] text-accent">
          Archiwum rodzinne · Od 2026
        </div>
        <h1 className="mt-[26px] font-display text-[clamp(84px,17vw,220px)] font-semibold leading-[0.9] tracking-[-0.01em] text-ink">
          {typed}
          <span className="ml-[0.06em] inline-block h-[0.78em] w-[0.055em] translate-y-0 bg-accent-2 align-baseline [animation:szBlink_1.05s_steps(1)_infinite]" />
        </h1>
        <div className="my-[30px] flex items-center justify-center gap-4">
          <span className="h-px w-[70px] bg-line" />
          <span className="h-[7px] w-[7px] rotate-45 bg-accent-2" />
          <span className="h-px w-[70px] bg-line" />
        </div>
        <p className="mx-auto max-w-[720px] font-display text-[clamp(24px,3.4vw,34px)] font-medium italic leading-[1.3] text-ink">
          Historia jednego nazwiska, spisywana wspólnie.
        </p>
        <p className="mx-auto mt-[22px] max-w-[620px] font-body text-[19px] leading-[1.65] text-ink-soft">
          Powoli, cierpliwie budujemy żywe archiwum rodziny Szorc —
          interaktywną kronikę i kompendium wiedzy o naszych korzeniach,
          gałęziach i ludziach.
        </p>
        <a
          href="#kontakt"
          className="mt-10 inline-flex items-center gap-3 border border-accent bg-accent px-[30px] py-[15px] font-mono text-[13px] uppercase tracking-[0.14em] text-paper no-underline transition-colors hover:border-ink hover:bg-ink"
        >
          Podziel się swoją historią
        </a>
      </section>
  );
}
