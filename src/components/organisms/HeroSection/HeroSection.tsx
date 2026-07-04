"use client";

import { heroForms } from "@/content/site";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
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
    <section
      id="top"
      className="mx-auto max-w-[1120px] [animation:szUp_0.7s_ease_both] px-8 pt-[120px] pb-24 text-center"
    >
      <div className="text-accent font-mono text-xs tracking-[0.34em] uppercase">
        Archiwum rodzinne · Od 2026
      </div>
      <h1 className="font-display text-ink mt-[26px] text-[clamp(84px,17vw,220px)] leading-[0.9] font-semibold tracking-[-0.01em]">
        {typed}
        <span className="bg-accent-2 ml-[0.06em] inline-block h-[0.78em] w-[0.055em] translate-y-0 [animation:szBlink_1.05s_steps(1)_infinite] align-baseline" />
      </h1>
      <div className="my-[30px] flex items-center justify-center gap-4">
        <span className="bg-line h-px w-[70px]" />
        <span className="bg-accent-2 h-[7px] w-[7px] rotate-45" />
        <span className="bg-line h-px w-[70px]" />
      </div>
      <p className="font-display text-ink mx-auto max-w-[720px] text-[clamp(24px,3.4vw,34px)] leading-[1.3] font-medium italic">
        Historia jednego nazwiska, spisywana wspólnie.
      </p>
      <p className="font-body text-ink-soft mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.65]">
        Powoli, cierpliwie budujemy żywe archiwum rodziny Szorc — interaktywną
        kronikę i kompendium wiedzy o naszych korzeniach, gałęziach i ludziach.
      </p>
      <a
        href="#kontakt"
        className="border-accent bg-accent text-paper hover:border-ink hover:bg-ink mt-10 inline-flex items-center gap-3 border px-[30px] py-[15px] font-mono text-[13px] tracking-[0.14em] uppercase no-underline transition-colors"
      >
        Podziel się swoją historią
      </a>
    </section>
  );
};
